import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  checkVersion,
  checkVersionChangesHaveReleaseTags,
  parseTag,
} from './verify-release-lib.mjs';

describe('parseTag', () => {
  it('parses a well-formed tag', () => {
    assert.deepEqual(
      parseTag('skyux-sidekick-v0.14001.0'),
      { ok: true, name: 'skyux-sidekick', version: '0.14001.0' },
    );
  });

  it('parses a multi-hyphen skill name', () => {
    assert.deepEqual(
      parseTag('create-a-new-skyux-project-v0.14001.0'),
      { ok: true, name: 'create-a-new-skyux-project', version: '0.14001.0' },
    );
  });

  it('rejects a tag without -v', () => {
    assert.equal(parseTag('skyux-sidekick-0.14001.0').ok, false);
  });

  it('rejects an empty tag', () => {
    assert.equal(parseTag('').ok, false);
  });
});

describe('checkVersion', () => {
  const marketplace = {
    plugins: [
      { name: 'skyux-sidekick', version: '0.14001.0' },
      { name: 'create-a-new-skyux-project', version: '0.14001.0' },
    ],
  };

  it('passes when marketplace version matches', () => {
    assert.deepEqual(
      checkVersion(marketplace, 'skyux-sidekick', '0.14001.0'),
      { ok: true },
    );
  });

  it('fails when plugin is missing', () => {
    const r = checkVersion(marketplace, 'unknown-skill', '0.14001.0');
    assert.equal(r.ok, false);
    assert.match(r.error, /not found/);
  });

  it('fails when marketplace version differs', () => {
    const r = checkVersion(marketplace, 'skyux-sidekick', '0.14002.0');
    assert.equal(r.ok, false);
    assert.match(r.error, /mismatch/);
  });
});

describe('checkVersionChangesHaveReleaseTags', () => {
  const current = {
    plugins: [
      { name: 'skyux-sidekick', version: '0.14002.0' },
      { name: 'create-a-new-skyux-project', version: '0.14001.0' },
    ],
  };
  const parent = {
    plugins: [
      { name: 'skyux-sidekick', version: '0.14001.0' },
      { name: 'create-a-new-skyux-project', version: '0.14001.0' },
    ],
  };

  it('passes when every changed plugin has a matching release tag', () => {
    assert.deepEqual(
      checkVersionChangesHaveReleaseTags(
        current,
        parent,
        ['skyux-sidekick-v0.14002.0'],
      ),
      { ok: true },
    );
  });

  it('passes when multiple plugins changed and each has a matching release tag', () => {
    const multiRelease = {
      plugins: [
        { name: 'skyux-sidekick', version: '0.14002.0' },
        { name: 'create-a-new-skyux-project', version: '0.14002.0' },
      ],
    };
    assert.deepEqual(
      checkVersionChangesHaveReleaseTags(
        multiRelease,
        parent,
        [
          'skyux-sidekick-v0.14002.0',
          'create-a-new-skyux-project-v0.14002.0',
        ],
      ),
      { ok: true },
    );
  });

  it('fails when a changed plugin does not have a release tag', () => {
    const sneaky = {
      plugins: [
        { name: 'skyux-sidekick', version: '0.14002.0' },
        { name: 'create-a-new-skyux-project', version: '0.14002.0' },
      ],
    };
    const r = checkVersionChangesHaveReleaseTags(
      sneaky,
      parent,
      ['skyux-sidekick-v0.14002.0'],
    );
    assert.equal(r.ok, false);
    assert.match(r.error, /create-a-new-skyux-project/);
  });

  it('fails when a changed plugin release tag version does not match', () => {
    const r = checkVersionChangesHaveReleaseTags(
      current,
      parent,
      ['skyux-sidekick-v0.14003.0'],
    );
    assert.equal(r.ok, false);
    assert.match(r.error, /Version mismatch/);
  });

  it('fails when tags conflict for the same plugin', () => {
    const r = checkVersionChangesHaveReleaseTags(
      current,
      parent,
      ['skyux-sidekick-v0.14002.0', 'skyux-sidekick-v0.14003.0'],
    );
    assert.equal(r.ok, false);
    assert.match(r.error, /Conflicting release tags/);
  });

  it('tolerates a newly-added plugin', () => {
    const grown = {
      plugins: [
        ...current.plugins,
        { name: 'future-skill', version: '0.14001.0' },
      ],
    };
    assert.deepEqual(
      checkVersionChangesHaveReleaseTags(
        grown,
        parent,
        ['skyux-sidekick-v0.14002.0'],
      ),
      { ok: true },
    );
  });
});
