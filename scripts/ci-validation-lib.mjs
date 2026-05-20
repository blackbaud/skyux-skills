import fs from 'node:fs';
import path from 'node:path';

export const REQUIRED_ROOT_FILES = [
  'LICENSE',
  'README.md',
  'CONTRIBUTING.md',
  'CLAUDE.md',
  '.gitattributes',
];

export function assertCondition(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

export function readJsonFile(filePath, { cwd = process.cwd() } = {}) {
  return JSON.parse(fs.readFileSync(path.resolve(cwd, filePath), 'utf8'));
}

export function readMarketplace(options) {
  return readJsonFile('.claude-plugin/marketplace.json', options);
}

export function parseSkillFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    throw new Error('missing YAML frontmatter');
  }

  const frontmatter = {};
  for (const line of match[1].split('\n')) {
    const matchLine = line.match(/^([a-zA-Z_][\w-]*):\s*(.*)$/);
    if (matchLine) {
      frontmatter[matchLine[1]] = matchLine[2];
    }
  }

  return frontmatter;
}

export function validateMarketplaceShape(marketplace) {
  assertCondition(
    typeof marketplace.name === 'string' && marketplace.name,
    'marketplace.name missing',
  );
  assertCondition(
    marketplace.owner && typeof marketplace.owner.name === 'string',
    'marketplace.owner.name missing',
  );
  assertCondition(
    Array.isArray(marketplace.plugins) && marketplace.plugins.length > 0,
    'marketplace.plugins must be a non-empty array',
  );

  for (const plugin of marketplace.plugins) {
    for (const field of ['name', 'source', 'description', 'version']) {
      assertCondition(
        typeof plugin[field] === 'string' && plugin[field],
        `plugin missing or empty field: ${field} (entry: ${JSON.stringify(plugin)})`,
      );
    }
  }
}

export function validateSkillMetadataMatchesMarketplace(
  marketplace,
  { cwd = process.cwd() } = {},
) {
  for (const plugin of marketplace.plugins) {
    const skillPath = path.join(plugin.source, 'SKILL.md');
    const resolvedSkillPath = path.resolve(cwd, skillPath);
    assertCondition(
      fs.existsSync(resolvedSkillPath),
      `plugin ${plugin.name}: SKILL.md missing at ${skillPath}`,
    );

    const frontmatter = parseSkillFrontmatter(
      fs.readFileSync(resolvedSkillPath, 'utf8'),
    );

    assertCondition(
      frontmatter.name === plugin.name,
      `plugin ${plugin.name}: SKILL.md frontmatter name="${frontmatter.name}" does not match marketplace name="${plugin.name}"`,
    );
    assertCondition(
      frontmatter.description === plugin.description,
      `plugin ${plugin.name}: SKILL.md description does not match marketplace description\n  SKILL.md:    ${frontmatter.description}\n  marketplace: ${plugin.description}`,
    );
  }
}

export function validateReferencesManifest({ cwd = process.cwd() } = {}) {
  const manifest = readJsonFile(
    'skills/skyux-sidekick/references/_manifest.json',
    { cwd },
  );
  assertCondition(manifest.generated_at, '_manifest.json missing generated_at');
}

export function validateAgentsSymlink({ cwd = process.cwd() } = {}) {
  const agentsPath = path.resolve(cwd, 'AGENTS.md');
  let stat;
  try {
    stat = fs.lstatSync(agentsPath);
  } catch {
    throw new Error('AGENTS.md is not a symlink');
  }

  assertCondition(stat.isSymbolicLink(), 'AGENTS.md is not a symlink');

  const target = fs.readlinkSync(agentsPath);
  assertCondition(
    target === 'CLAUDE.md',
    `AGENTS.md does not resolve to CLAUDE.md (got: ${target})`,
  );
}

export function validateRequiredRootFiles({ cwd = process.cwd() } = {}) {
  for (const filePath of REQUIRED_ROOT_FILES) {
    const resolvedFilePath = path.resolve(cwd, filePath);
    assertCondition(
      fs.existsSync(resolvedFilePath) && fs.statSync(resolvedFilePath).isFile(),
      `missing required file: ${filePath}`,
    );
  }
}

export function runCli(fn) {
  try {
    fn();
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}
