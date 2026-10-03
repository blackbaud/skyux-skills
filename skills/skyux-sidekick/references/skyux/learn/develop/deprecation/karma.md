---
Title: Convert to Vitest matchers
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/karma
---

# Convert to Vitest matchers

Our custom [Jasmine matchers](../testing/jasmine-matchers.md) in the `@skyux-sdk/testing` package can be replaced with the preview [`@skyux-sdk/vitest` matchers](../testing/vitest-matchers.md) if your project already runs its tests with Vitest.

## Why you should migrate

Karma is no longer maintained by its authors, and Angular has moved to Vitest as the recommended unit test runner. SKY UX provides the `@skyux-sdk/vitest` matchers, currently in [preview](../../preview.md), as the Vitest equivalent of the Jasmine matchers in `@skyux-sdk/testing`. Support for the Vite builder and Vitest test runner is rolling out soon for Blackbaud teams, and when your project switches to run on Vitest, migrating will let you drop the Karma-only testing package.

## How to migrate

SKY UX created a migration script to replace the `@skyux-sdk/testing` matchers with the `@skyux-sdk/vitest` matchers. From a project that uses the Jasmine matchers, run the following command:

Bash

    ng generate @skyux/packages:migrate-karma-to-vitest

The script performs the following actions:

- Installs `@skyux-sdk/vitest` as a dev dependency and runs that package's `ng add` schematic.
- Moves `SkyToBeVisibleOptions` to `@skyux-sdk/vitest` and replaces `SkyA11yAnalyzerConfig` with that package's `SkyToBeAccessibleOptions`.
- Rewrites `expectAsync()` to `expect()` and removes the `expect` and `expectAsync` imports because Vitest provides `expect` as a global and its `expect` handles asynchronous assertions.
- Removes `@skyux-sdk/testing` from `package.json` if nothing else in the workspace still imports it.

The script assumes that the `migrate-sdk-testing-imports` migration ran when you updated to SKY UX 15. It skips the migration entirely if `@skyux-sdk/testing` isn't installed or if `@skyux-sdk/vitest` is already installed.

## What to review after the script

After you run the migration script, perform the following actions in your project:

- Follow Angular's [guide for migrating to Vitest](https://angular.dev/guide/testing/migrating-to-vitest#1-install-dependencies) to run Angular's Karma migration to swap the runner, refactor API calls, and switch to Angular's `unit-test` Vitest builder. The SKY UX schematic only swaps the SKY UX matchers. It doesn't convert your test runner from Karma to Vitest, and it doesn't rewrite Jasmine APIs such as `jasmine.createSpyObj()`, `spyOn()`, or `done` callbacks.
- If the script warns that `@skyux-sdk/testing` is still imported in the workspace, remove the remaining imports and then uninstall the package.
- Manually update any .ts files outside the project's source root. The script only visits .ts files in the root.
- Confirm that the rewritten `expect()` assertions still read correctly. The script renames the function but leaves the matcher call unchanged.
