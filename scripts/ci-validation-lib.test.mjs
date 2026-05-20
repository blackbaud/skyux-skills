import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdir,
  mkdtemp,
  rm,
  symlink,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  parseSkillFrontmatter,
  validateAgentsSymlink,
  validateMarketplaceShape,
  validateReferencesManifest,
  validateRequiredRootFiles,
  validateSkillMetadataMatchesMarketplace,
} from './ci-validation-lib.mjs';

async function makeWorkspace() {
  const cwd = await mkdtemp(path.join(os.tmpdir(), 'skyux-skills-ci-'));
  await mkdir(path.join(cwd, '.claude-plugin'), { recursive: true });
  await mkdir(path.join(cwd, 'skills/test-skill'), { recursive: true });
  await mkdir(path.join(cwd, 'skills/skyux-sidekick/references'), {
    recursive: true,
  });

  for (const filePath of [
    'LICENSE',
    'README.md',
    'CONTRIBUTING.md',
    'CLAUDE.md',
    '.gitattributes',
  ]) {
    await writeFile(path.join(cwd, filePath), `${filePath}\n`);
  }
  await symlink('CLAUDE.md', path.join(cwd, 'AGENTS.md'));
  await writeFile(
    path.join(cwd, 'skills/skyux-sidekick/references/_manifest.json'),
    JSON.stringify({ generated_at: '2026-05-20T00:00:00Z' }),
  );

  return cwd;
}

describe('parseSkillFrontmatter', () => {
  it('extracts simple YAML frontmatter fields', () => {
    assert.deepEqual(
      parseSkillFrontmatter('---\nname: test-skill\ndescription: Test\n---\nBody'),
      { name: 'test-skill', description: 'Test' },
    );
  });

  it('rejects content without frontmatter', () => {
    assert.throws(
      () => parseSkillFrontmatter('name: test-skill\n'),
      /missing YAML frontmatter/,
    );
  });
});

describe('validateMarketplaceShape', () => {
  it('passes a valid marketplace shape', () => {
    assert.doesNotThrow(() =>
      validateMarketplaceShape({
        name: 'skyux-skills',
        owner: { name: 'blackbaud' },
        plugins: [
          {
            name: 'test-skill',
            source: './skills/test-skill',
            description: 'Test',
            version: '1.0.0',
          },
        ],
      }),
    );
  });

  it('rejects missing plugin fields', () => {
    assert.throws(
      () =>
        validateMarketplaceShape({
          name: 'skyux-skills',
          owner: { name: 'blackbaud' },
          plugins: [{ name: 'test-skill' }],
        }),
      /plugin missing or empty field: source/,
    );
  });
});

describe('repository validators', () => {
  it('passes valid repository files and skill metadata', async () => {
    const cwd = await makeWorkspace();
    try {
      const marketplace = {
        plugins: [
          {
            name: 'test-skill',
            source: './skills/test-skill',
            description: 'Test',
            version: '1.0.0',
          },
        ],
      };

      await writeFile(
        path.join(cwd, 'skills/test-skill/SKILL.md'),
        '---\nname: test-skill\ndescription: Test\n---\nBody\n',
      );

      assert.doesNotThrow(() =>
        validateSkillMetadataMatchesMarketplace(marketplace, { cwd }),
      );
      assert.doesNotThrow(() => validateReferencesManifest({ cwd }));
      assert.doesNotThrow(() => validateAgentsSymlink({ cwd }));
      assert.doesNotThrow(() => validateRequiredRootFiles({ cwd }));
    } finally {
      await rm(cwd, { recursive: true, force: true });
    }
  });

  it('rejects skill metadata that differs from marketplace metadata', async () => {
    const cwd = await makeWorkspace();
    try {
      const marketplace = {
        plugins: [
          {
            name: 'test-skill',
            source: './skills/test-skill',
            description: 'Marketplace description',
            version: '1.0.0',
          },
        ],
      };

      await writeFile(
        path.join(cwd, 'skills/test-skill/SKILL.md'),
        '---\nname: test-skill\ndescription: Skill description\n---\nBody\n',
      );

      assert.throws(
        () => validateSkillMetadataMatchesMarketplace(marketplace, { cwd }),
        /SKILL.md description does not match marketplace description/,
      );
    } finally {
      await rm(cwd, { recursive: true, force: true });
    }
  });

  it('rejects a manifest without generated_at', async () => {
    const cwd = await makeWorkspace();
    try {
      await writeFile(
        path.join(cwd, 'skills/skyux-sidekick/references/_manifest.json'),
        '{}',
      );

      assert.throws(
        () => validateReferencesManifest({ cwd }),
        /_manifest.json missing generated_at/,
      );
    } finally {
      await rm(cwd, { recursive: true, force: true });
    }
  });
});
