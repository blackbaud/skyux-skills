---
name: create-a-new-skyux-project
description: Use when scaffolding a new SKY UX 14 / Angular 21 project from scratch — covers Angular CLI invocation, build/test configuration, ESLint setup, and installation of the SKY UX package suite as a ready-to-extend baseline.
metadata:
  license: MIT
---

# Create a New SKY UX Project

## STOP — Blackbaud developers

If you work at Blackbaud and have access to the internal NPM registry,
**do not use this skill**. Stop immediately and run:

```bash
npx @blackbaud-internal/skyux-cli@latest new
```

That CLI is the supported path for Blackbaud-internal projects and
applies organization-specific defaults this skill does not.

## Overview

Walk through the canonical scaffolding for a new SKY UX 14 application on
Angular 21. The goal is a buildable, lintable, test-runnable project with
the full `@skyux/*` package family installed and zero application code
beyond what `ng new` produces — a clean slate ready for feature work.

The steps mirror Blackbaud's internal workshop scaffolding script and
encode several non-obvious defaults: exact-version pinning, generous
budgets, headless CI test runner, code coverage on by default, and a
particular installation order for `angular-eslint` / `eslint-config-skyux` /
`@skyux/packages` that avoids peer-dependency conflicts.

## When to Use

- Starting a new SKY UX application and you want a known-good baseline.
- Bootstrapping a sandbox or reproduction project for a SKY UX issue.
- Rebuilding the workshop project from scratch.

When **not** to use:

- Upgrading an existing SKY UX project — use `ng update @skyux/packages`
  instead.
- Adding SKY UX to an existing Angular app — most of the project-level
  configuration here will conflict with whatever you already have.

## Prerequisites

On `PATH`: `node` (v22+), `npm`, `npx`, `jq`.

The project pins:

```
Angular CLI: ^21
SKY UX:      ^14
TypeScript:  ~5.9
Node:        whatever you ran `ng new` with (captured into .nvmrc)
```

Recommended environment for the duration of setup — these make installs
deterministic and unattended:

```bash
export NPM_CONFIG_SAVE_EXACT=true   # pin all installed deps to exact versions
export NPM_CONFIG_YES=true          # auto-accept npm/npx prompts
```

Pick a project name once and reuse it; the rest of the snippets call it
`$PROJECT_NAME`. Pick a working directory outside any existing git repo.

## Step 1 — Create the Angular project

```bash
npx -y @angular/cli@^21 new "$PROJECT_NAME" \
  --no-ssr \
  --no-zoneless \
  --ai-config copilot \
  --package-manager=npm \
  --routing \
  --skip-git \
  --style=css \
  --test-runner=karma
cd "$PROJECT_NAME"
```

**Why these flags:**

- `--no-ssr` — SKY UX 14 targets SPA workloads; SSR adds setup the
  skill suite doesn't exercise.
- `--no-zoneless` — SKY UX components still rely on Zone.js change
  detection; opting into zoneless will break runtime behavior.
- `--ai-config copilot` — emits an `AGENTS.md` and Copilot config; harmless
  if you don't use it.
- `--routing` — adds `app.routes.ts`; SKY UX patterns assume routing.
- `--skip-git` — we'll `git init` later, after writing `.nvmrc` and
  config files we want in the initial commit.
- `--style=css` — SKY UX ships its own theming; SCSS/Less just adds
  toolchain.
- `--test-runner=karma` — the default and best-supported path. Vitest is
  possible (see **Vitest variant** at the end) but adds setup.

## Step 2 — Loosen the production budget

```bash
npx ng config "projects.$PROJECT_NAME.architect.build.configurations.production.budgets[0].maximumError" 2mb
```

**Why:** SKY UX brings in a sizable bundle. The default 1mb error budget
will fail the first production build the moment you import a couple of
modules. 2mb is a realistic ceiling for a SKY UX app's initial bundle.

## Step 3 — Enable code coverage

```bash
# Ensure the test.options object exists before setting nested keys
if [[ -z "$(npx ng config "projects.$PROJECT_NAME.architect.test.options")" ]]; then
  npx ng config "projects.$PROJECT_NAME.architect.test.options" '{}'
fi

npx ng config "projects.$PROJECT_NAME.architect.test.options.coverage" true
npx ng config "projects.$PROJECT_NAME.architect.test.options.coverageExclude" '["**/fixtures/**", "**/mock-*.ts"]'
```

**Why:** Coverage on by default makes CI metrics consistent. Excluding
`fixtures/` and `mock-*.ts` keeps test scaffolding out of coverage
numbers so they reflect real production code.

## Step 4 — Disable Angular CLI analytics

```bash
npx ng analytics disable
```

**Why:** Avoids the interactive prompt on subsequent `ng` invocations.
Without this, automation hangs.

## Step 5 — Headless `test:ci` script

```bash
npm pkg set scripts.test:ci='ng test --browsers=ChromeHeadlessNoSandbox --no-progress --no-watch'
```

**Why:** `ng test` defaults to watch mode in a real Chrome window — useless
in CI or under an agent. The `--no-watch --no-progress` flags make it
exit cleanly with a proper exit code. We target the
`ChromeHeadlessNoSandbox` launcher (defined in Step 8) rather than the
built-in `ChromeHeadless`, because Chrome's namespace sandbox can't
initialize in most containerized or CI environments and the built-in
launcher fails with `Failed to move to new namespace` before any test
runs. (For Vitest, see the variant section.)

## Step 6 — Set up `angular-eslint`

```bash
npx ng add angular-eslint@^21 --skip-confirmation
```

**Why:** Adds the Angular-aware ESLint rules and registers an `ng lint`
target. Must be done **before** installing `eslint-config-skyux`, which
extends this config.

If you have a project-specific ESLint flat config, drop it into the
project root now (this is where the workshop script rsyncs in its
`files/00-project/` overlay).

## Step 7 — Karma test runner

Install the Karma-side packages that aren't pulled in by `ng new`:

```bash
npm install -D \
  '@types/jasmine@^6' \
  'jasmine-core@^6' \
  'karma-coverage@^2' \
  'karma-jasmine-html-reporter@^2' \
  'karma@^6'
```

Then generate the canonical `karma.conf.js` and add a no-sandbox launcher:

```bash
npx ng generate config karma --project "$PROJECT_NAME"

# Insert a ChromeHeadlessNoSandbox custom launcher into the generated config.
node <<'EOF'
const fs = require('fs');
const f = 'karma.conf.js';
const launcher = `    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
`;
let c = fs.readFileSync(f, 'utf8');
if (!c.includes('ChromeHeadlessNoSandbox')) {
  c = c.replace(/(^\s*restartOnFileChange:)/m, launcher + '$1');
  fs.writeFileSync(f, c);
}
EOF
npx prettier -w karma.conf.js
```

**Why:** `ng new --test-runner=karma` adds _some_ karma packages; this
ensures the major versions match what SKY UX expects and pulls in the
HTML reporter and coverage reporter that the configured `test:ci`
script needs.

`ng generate config karma` writes the project's `karma.conf.js` from the
Angular CLI's canonical template and flips
`architect.test.options.runnerConfig` to `true` in `angular.json` so the
new `@angular/build:unit-test` builder auto-discovers it.

The `ChromeHeadlessNoSandbox` launcher patch is what `test:ci`
(Step 5) targets. Without it, Chrome's namespace sandbox fails to
initialize in most CI runners and Linux containers
(`Failed to move to new namespace`), and the built-in `ChromeHeadless`
launcher can't be flag-extended from the command line.

## Step 8 — Capture the Node version

```bash
node --version | sed -e 's/^v//' > .nvmrc
```

**Why:** Makes the project pin its Node version explicitly. Avoids the
class of bugs where the project builds on whoever-set-it-up's machine
and fails on a teammate's slightly older or newer Node.

## Step 9 — Initialize git

```bash
git init -b main
git add -A
git add -f .nvmrc   # .nvmrc may be in the default gitignore on some setups
```

**Why now:** Before installing `eslint-config-skyux`, because the next
step uses `ng add`, which expects either a clean tree or `--allow-dirty`.
Initializing here gives you a working tree to diff against if anything
goes wrong in subsequent steps.

## Step 10 — SKY UX ESLint configuration

```bash
npm install -D '@eslint/js@^9' "@types/node@^$(node --version | sed -e 's/^v//' | cut -d . -f 1)"
npx ng add eslint-config-skyux@^14 --skip-confirmation --no-interactive
npx prettier -w .
```

**Why:**

- `@eslint/js@^9` and a matching-major `@types/node` are peer requirements
  of `eslint-config-skyux` that aren't auto-installed.
- `eslint-config-skyux` rewrites your `eslint.config.*` to extend the
  SKY UX rules — must run after `angular-eslint` is in place.
- `prettier -w .` normalizes the files the schematic just rewrote so
  your initial commit doesn't have formatting churn.

## Step 11 — Install the SKY UX packages

Install the framework metapackage, which provides additional
schematics and handles updates:

```bash
npx ng add "@skyux/packages@^14" --project "$PROJECT_NAME" --skip-confirmation
```

## Step 12 — Initialize the SKY UX theme

Wire the `modern` theme into the root application config so SKY UX
components render with the correct visual theme from first paint:

```bash
node <<'EOF'
const fs = require('fs');
const f = 'src/app/app.config.ts';
let c = fs.readFileSync(f, 'utf8');
if (!c.includes("from '@skyux/theme'")) {
  c = c.replace(
    /(import { provideRouter } from '@angular\/router';\n)/,
    "$1import { provideInitialTheme } from '@skyux/theme';\n",
  );
  c = c.replace(
    /(provideRouter\(routes\),\n)/,
    "$1    provideInitialTheme('modern'),\n",
  );
  fs.writeFileSync(f, c);
}
EOF
npx prettier -w src/app/app.config.ts
```

**Why:** `@skyux/packages` brings the theme package in as a dependency
but does not register a theme provider for you. Without
`provideInitialTheme('modern')`, components fall back to the legacy
theme and design tokens (colors, spacing, typography) won't match the
SKY UX modern visual theme that Blackbaud is standardizing on. The
import is added right after the existing `@angular/router` import, and
the provider is added immediately after `provideRouter(routes)` so the
diff against `ng new`'s output stays minimal and easy to audit.

## Step 13 — Resolve audit findings

```bash
npm audit fix || true
```

**Why:** Picks up benign transitive vulnerabilities introduced by the
install. `|| true` because a single unfixable advisory in a transitive
dep shouldn't fail your scaffolding run; review the remainder manually
if any remain.

## Verify the baseline

At this point the project should build, lint, and test cleanly with
nothing custom in it:

```bash
npm run build
npm run lint
npm run test:ci
```

If all three pass you have a known-good SKY UX 14 baseline.

## Quick Reference

| Concern             | Setting                                                                    |
|---------------------|----------------------------------------------------------------------------|
| Angular CLI version | `^21`                                                                      |
| SKY UX major        | `^14`                                                                      |
| TypeScript          | `~5.9.0`                                                                   |
| Test runner         | Karma + Jasmine 6                                                          |
| Test browser (CI)   | `ChromeHeadlessNoSandbox` (custom launcher), `--no-watch`, `--no-progress` |
| Bundle error budget | `2mb`                                                                      |
| Coverage            | On, excludes `fixtures/`, `mock-*.ts`                                      |
| Package manager     | npm with `save-exact=true`                                                 |

## Common Mistakes

- **Running `ng add eslint-config-skyux` before `ng add angular-eslint`** —
  the SKY UX config extends the Angular ESLint config; reversing order
  produces an `eslint.config` that references a preset that doesn't exist
  yet.
- **Letting `ng new` initialize git** — then the next `ng add` schematics
  refuse to run without `--allow-dirty` because `package.json` changed.
  Skip git init in `ng new` and do it explicitly later.
- **Skipping `NPM_CONFIG_SAVE_EXACT=true`** — you get caret ranges
  everywhere, and `npm install` on someone else's machine resolves to
  newer minor versions that may not match what was tested.
- **Installing SKY UX packages one-by-one** — much slower and produces
  lockfile churn. Build the array, install once.
- **Forgetting `.nvmrc`** — the project then has no record of which Node
  it was built with, which is the first thing to ask when troubleshooting
  install or build failures on a new machine.
- **Leaving Angular analytics enabled** — every subsequent `ng` command
  may prompt and block under automation.
- **Targeting `ChromeHeadless` directly in containers or CI** — Chrome's
  namespace sandbox can't initialize in most Linux containers or on CI
  runners without elevated capabilities. Define a
  `ChromeHeadlessNoSandbox` custom launcher in `karma.conf.js` (Step 8)
  and point `test:ci` at it. The built-in `ChromeHeadless` launcher
  doesn't accept `--no-sandbox` as a flag override.

## Vitest Variant

If you opt for `--test-runner=vitest` in step 1 instead of karma, change
these steps:

**Step 5** — Use Chromium and the Vitest-shaped test runner:

```bash
npx ng config "projects.$PROJECT_NAME.architect.test.options.setupFiles" '["src/test-setup.ts"]'
npm pkg set scripts.test:ci='ng test --browsers=ChromiumHeadless --no-progress --no-watch'
```

**Step 7** — Replace the karma packages with the Vitest stack:

```bash
npm install -D \
  @skyux-sdk/testing@^14 \
  @vitest/browser-playwright@^4 \
  @vitest/browser-preview@^4 \
  @vitest/coverage-v8@^4 \
  @vitest/ui@^4 \
  playwright@latest
```

**After Step 10** — Wire the SKY UX testing types into `tsconfig.spec.json`:

```bash
sed -E \
  -e 's~"types": \["vitest/globals"]~"types": ["vitest/globals", "@skyux-sdk/testing/vitest"]~' \
  -e 's~"include": \[[^]]+]~"include": ["src/**/*.d.ts", "src/**/*.spec.ts", "src/test-setup.ts"]~' \
  < tsconfig.spec.json > tsconfig.spec.json.tmp
mv tsconfig.spec.json.tmp tsconfig.spec.json
```

Vitest support in SKY UX 14 is functional but newer than the karma path;
prefer karma unless you specifically need Vitest features.
