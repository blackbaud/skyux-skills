#!/usr/bin/env node
import { appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseTag } from './verify-release-lib.mjs';

export function prepareReleaseVerification(env) {
  if (env.GITHUB_EVENT_NAME === 'workflow_dispatch') {
    if (env.SIMULATE_FAILURE === 'true') {
      return {
        type: 'fail',
        message:
          'simulate_failure=true requested; failing verify-release deliberately',
      };
    }

    return {
      type: 'skip',
      message:
        'workflow_dispatch with simulate_failure=false; nothing to verify, succeeding',
    };
  }

  const tag = (env.GITHUB_REF ?? '').replace(/^refs\/tags\//, '');
  const parsed = parseTag(tag);
  if (!parsed.ok) {
    return { type: 'fail', message: parsed.error };
  }

  return {
    type: 'verify',
    outputs: {
      name: parsed.name,
      version: parsed.version,
    },
  };
}

export async function writeGithubOutput(outputPath, outputs) {
  if (!outputPath) {
    throw new Error('GITHUB_OUTPUT is required');
  }

  const content = Object.entries(outputs)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  await appendFile(outputPath, `${content}\n`);
}

export async function main(env = process.env) {
  const result = prepareReleaseVerification(env);

  if (result.type === 'fail') {
    console.error(result.message);
    process.exit(1);
  }

  if (result.type === 'skip') {
    console.error(result.message);
    return;
  }

  await writeGithubOutput(env.GITHUB_OUTPUT, result.outputs);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((err) => {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(2);
  });
}
