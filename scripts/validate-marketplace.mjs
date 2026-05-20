#!/usr/bin/env node
import {
  readMarketplace,
  runCli,
  validateMarketplaceShape,
  validateSkillMetadataMatchesMarketplace,
} from './ci-validation-lib.mjs';

runCli(() => {
  const marketplace = readMarketplace();

  validateMarketplaceShape(marketplace);
  console.log('marketplace.json: OK');

  validateSkillMetadataMatchesMarketplace(marketplace);
  console.log('SKILL.md to marketplace.json: OK');
});
