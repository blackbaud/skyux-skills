import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  prepareReleaseVerification,
  writeGithubOutput,
} from './prepare-release-verification.mjs';

describe('prepareReleaseVerification', () => {
  it('prepares name and version outputs for a tag push', () => {
    assert.deepEqual(
      prepareReleaseVerification({
        GITHUB_EVENT_NAME: 'push',
        GITHUB_REF: 'refs/tags/create-a-new-skyux-project-v0.14001.0',
      }),
      {
        type: 'verify',
        outputs: {
          name: 'create-a-new-skyux-project',
          version: '0.14001.0',
        },
      },
    );
  });

  it('fails for an invalid tag push', () => {
    const result = prepareReleaseVerification({
      GITHUB_EVENT_NAME: 'push',
      GITHUB_REF: 'refs/tags/skyux-sidekick-0.14001.0',
    });

    assert.equal(result.type, 'fail');
    assert.match(result.message, /Tag does not match/);
  });

  it('skips workflow_dispatch when simulation is disabled', () => {
    assert.deepEqual(
      prepareReleaseVerification({
        GITHUB_EVENT_NAME: 'workflow_dispatch',
        SIMULATE_FAILURE: 'false',
      }),
      {
        type: 'skip',
        message:
          'workflow_dispatch with simulate_failure=false; nothing to verify, succeeding',
      },
    );
  });

  it('fails workflow_dispatch when simulation is enabled', () => {
    assert.deepEqual(
      prepareReleaseVerification({
        GITHUB_EVENT_NAME: 'workflow_dispatch',
        SIMULATE_FAILURE: 'true',
      }),
      {
        type: 'fail',
        message:
          'simulate_failure=true requested; failing verify-release deliberately',
      },
    );
  });
});

describe('writeGithubOutput', () => {
  it('appends GitHub Actions outputs', async () => {
    const cwd = await mkdtemp(path.join(os.tmpdir(), 'skyux-skills-output-'));
    try {
      const outputPath = path.join(cwd, 'github-output');

      await writeGithubOutput(outputPath, {
        name: 'skyux-sidekick',
        version: '0.14001.0',
      });

      assert.equal(
        await readFile(outputPath, 'utf8'),
        'name=skyux-sidekick\nversion=0.14001.0\n',
      );
    } finally {
      await rm(cwd, { recursive: true, force: true });
    }
  });

  it('requires GITHUB_OUTPUT', async () => {
    await assert.rejects(
      () => writeGithubOutput('', { name: 'skyux-sidekick' }),
      /GITHUB_OUTPUT is required/,
    );
  });
});
