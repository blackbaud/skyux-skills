#!/usr/bin/env node
import {
  runCli,
  validateAgentsSymlink,
  validateReferencesManifest,
  validateRequiredRootFiles,
} from './ci-validation-lib.mjs';

runCli(() => {
  validateReferencesManifest();
  console.log('_manifest.json: OK');

  validateAgentsSymlink();
  console.log('AGENTS.md: OK');

  validateRequiredRootFiles();
  console.log('root files: OK');
});
