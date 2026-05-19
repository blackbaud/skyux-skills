#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import {
  checkVersion,
  checkOtherPluginsUnchanged,
} from './verify-release-lib.mjs';

const usage = 'Usage: verify-release.mjs <skill-name> <version>';

function readMarketplaceAtRef(ref) {
  try {
    const stdout = execFileSync(
      'git',
      ['show', `${ref}:.claude-plugin/marketplace.json`],
      { encoding: 'utf8' },
    );
    return JSON.parse(stdout);
  } catch {
    return null;
  }
}

async function main() {
  const [skillName, version] = process.argv.slice(2);
  if (!skillName || !version) {
    console.error(usage);
    process.exit(2);
  }

  const current = JSON.parse(
    await readFile('.claude-plugin/marketplace.json', 'utf8'),
  );

  const versionResult = checkVersion(current, skillName, version);
  if (!versionResult.ok) {
    console.error(versionResult.error);
    process.exit(1);
  }

  const parent = readMarketplaceAtRef('HEAD~1');
  if (parent) {
    const crossResult = checkOtherPluginsUnchanged(current, parent, skillName);
    if (!crossResult.ok) {
      console.error(crossResult.error);
      process.exit(1);
    }
  } else {
    console.log(
      'Note: no previous marketplace.json (first release); cross-check skipped.',
    );
  }

  console.log(`OK: ${skillName} == ${version}`);
}

main().catch((err) => {
  console.error(`verify-release: unexpected error: ${err.message}`);
  process.exit(2);
});
