#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const STALE_DAYS = 30;
const DEFAULT_UPSTREAM =
  'https://github.com/blackbaud/skyux-skills/raw/refs/heads/main/skills/skyux-sidekick/references/_manifest.json';
const upstreamUrl = process.env.SKYUX_SIDEKICK_UPSTREAM || DEFAULT_UPSTREAM;

const here = path.dirname(fileURLToPath(import.meta.url));
const localPath = path.resolve(here, '..', 'references', '_manifest.json');

if (!fs.existsSync(localPath)) {
  console.error(`ERROR: ${localPath} missing — has the scraper run yet?`);
  process.exit(2);
}

const local = JSON.parse(fs.readFileSync(localPath, 'utf8'));
const localTs = local.generated_at;
const localEpoch = Date.parse(localTs);
const now = Date.now();
const localAgeDays = Math.floor((now - localEpoch) / 86_400_000);

let upstream;
try {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10_000);
  const res = await fetch(upstreamUrl, {
    signal: ctrl.signal,
    headers: { 'User-Agent': 'skyux-sidekick-check-updates' },
    redirect: 'follow',
  });
  clearTimeout(timer);
  if (!res.ok) {
    console.error(`ERROR: could not reach upstream (${upstreamUrl}): ${res.status} ${ctrl.signal.reason ?? res.statusText}`);
    process.exit(2);
  }
  upstream = await res.json();
} catch (err) {
  console.error(
    `WARN: could not reach upstream (${upstreamUrl}): ${err.message}; local manifest is ${localAgeDays} days old`,
  );
  process.exit(localAgeDays > STALE_DAYS ? 1 : 2);
}

const upstreamTs = upstream.generated_at;
const upstreamEpoch = Date.parse(upstreamTs);
const behindDays = Math.floor((upstreamEpoch - localEpoch) / 86_400_000);

if (behindDays > STALE_DAYS) {
  console.log(`STALE: local manifest is ${behindDays} days behind upstream (${localTs} vs ${upstreamTs})`);
  process.exit(1);
}

console.log(`FRESH: local ${localTs}, upstream ${upstreamTs} (behind by ${behindDays} day(s))`);
