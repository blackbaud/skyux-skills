# SKY UX 15 Update Fixes

This document summarizes the required checks and known fixes for updating a SKY UX project from version 14 to
version 15 (Angular 22). This document is consumed by both developers and AI-assisted migration skills. It applies to
every SKY UX 14 to 15 update task, including checking whether a project is ready before the update starts. Run the
removed-component check before anything else.

## Check for removed components (blocking)

SKY UX 15 removes `sky-box-header`, `sky-file-attachment-label`,
`sky-modal-header`, `sky-select-field`, and `sky-toggle-switch-label`. The
update fails while a project still uses any of them, so replace them on
SKY UX 14 before running the update.

Search the current branch from the workspace root:

```bash
grep -rEn --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.angular \
  --include='*.ts' --include='*.html' \
  "<sky-(box-header|file-attachment-label|modal-header|select-field|toggle-switch-label)([[:space:]>/]|$)|Sky(BoxHeader|FileAttachmentLabel|ModalHeader|SelectField|ToggleSwitchLabel)Component|SkySelectFieldModule|@skyux/select-field" .
```

Spec files that query a removed component's element or CSS class (for
example, `By.css('sky-box-header')` or `querySelector('.sky-modal-header')`)
do not match and do not block the update; fix them as described under
"Fixes" below.

If the search finds **any** match:

1. Do not run `skyux update` or `ng update`, and do not attempt any other fix
   from this document yet.
2. Show the user the matches, then replace them:
   - `sky-box-header`, `sky-file-attachment-label`, `sky-modal-header`, and
     `sky-toggle-switch-label`: follow
     [Replace label components removed in SKY UX 15](./project-modernization/migrate-label-components.md).
   - `sky-select-field`, `SkySelectFieldModule`, and `@skyux/select-field`:
     follow
     [Migrate `sky-select-field` to `sky-lookup`](./project-modernization/migrate-select-field.md).
3. Run `ng build`, `ng lint`, and `ng test`, and rerun the search. Continue
   the update only when everything passes and the search finds nothing.

If the matches are on a branch already updated to SKY UX 15, apply the same
guides to fix the build; the replacement APIs exist in both versions.

If the search finds no matches, continue to the fixes.

## Fixes

When a build, lint, or test fails, follow the
[Migration & debugging](./migration-debugger/README.md) skill to find the root
cause. These are the SKY UX 15 changes most likely to be involved.

1. **Tests that query removed components or their CSS classes.**
   - How to detect: `grep -rEn --exclude-dir=node_modules --include='*.spec.ts' 'sky-(box-header|file-attachment-label|modal-header|select-field|toggle-switch-label)' .`
   - How to fix: The removed elements no longer render, and some of their
     CSS classes no longer exist or have moved, so these queries fail or
     match the wrong element. Replace each one with the harness for the
     replacement component instead of updating the selector. Create a
     harness loader for the spec and use:
     - `sky-box-header`: `SkyBoxHarness` from `@skyux/layout/testing`,
       `getHeadingText()`.
     - `sky-file-attachment-label`: `SkyFileAttachmentHarness` from
       `@skyux/forms/testing`, `getLabelText()`.
     - `sky-modal-header`: `SkyModalHarness` from `@skyux/modals/testing`,
       `getHeadingText()`.
     - `sky-select-field`: `SkyLookupHarness` from `@skyux/lookup/testing`.
     - `sky-toggle-switch-label`: `SkyToggleSwitchHarness` from
       `@skyux/forms/testing`, `getLabelText()`.

     Read
     [Angular testing patterns](./test-driven-development/angular-testing-patterns.md)
     for examples.

2. **New failures from `toBeAccessible()` and `toBeVisible()`.**
   - How to detect: Tests that passed on SKY UX 14 now fail on these
     matchers. `toBeAccessible()` now flags `role="tab"` elements without an
     accessible name and disallowed children of `aria-busy` elements, and
     custom rule overrides no longer turn off the default rules.
     `toBeVisible()` now requires every enabled check to pass and returns
     `false` for a `null` or `undefined` element instead of throwing.
   - How to fix: These failures reveal real problems that were previously
     hidden. Fix the markup or the test setup. Do not disable axe rules,
     remove the assertion, or weaken the matcher options to make the test
     pass. Read
     [Testing antipatterns](./test-driven-development/testing-antipatterns.md).

3. **`SkyAppTestUtility` and `SkyBy` imported from `@skyux-sdk/testing`.**
   - How to detect: `grep -rlE --exclude-dir=node_modules --include='*.ts' '@skyux-sdk/testing' . | xargs grep -lE '\b(SkyAppTestUtility|SkyBy)\b'`
   - How to fix: Import them from `@skyux/core/testing`. If they come from a
     shared library outside the workspace, tell the user that library needs
     the same change.

4. **Resource strings that relied on completion.**
   - How to detect: Code using `SkyAppResourcesLegacyService` or
     `SkyLibResourcesLegacyService` (added by the migration), or code using
     `getString()`/`getStrings()` with `forkJoin`, `lastValueFrom`,
     `toPromise`, or a `complete` callback.
   - How to fix: Leave the legacy services in place during the update. The
     non-legacy services now re-emit on locale changes and never complete, so
     switching back without rewriting the subscribers causes hangs and
     unfinished tests. Replacing the legacy services is follow-up work, not
     part of the update.

5. **Timepicker invalid values.**
   - How to detect: `grep -rn --exclude-dir=node_modules --include='*.ts' --include='*.html' 'skyTimepicker' .`
     and review code or tests that expect an invalid time to clear the value.
   - How to fix: The timepicker now keeps invalid values and marks the field
     invalid. Handle the validation error instead of expecting an empty
     value. Do not re-add `skyTimepickerRetainInvalidValues`; it was removed.

6. **Missing light mode styles (applications without `SkyThemeService`
   only).**
   - How to detect: `grep -rn --exclude-dir=node_modules --include='*.ts' --include='*.html' 'sky-theme-modern' .`
     in a project that does not use `SkyThemeService`.
   - How to fix: Add the `sky-theme-mode-light` class alongside
     `sky-theme-modern` on the element that contains the themed content.

7. **Specs that render an AG Grid without the grid testing providers.**
   - How to detect: `grep -rlE --exclude-dir=node_modules --include='*.spec.ts' 'SkyAgGridWrapperHarness|SkyDataGridHarness|sky-ag-grid-wrapper|sky-data-grid' . | xargs grep -LE 'provideSky(AgGrid|DataGrid)Testing'`
     Specs that render a component containing a grid without mentioning one
     do not match; suspect them when `fixture.whenStable()` intermittently
     times out.
   - How to fix: The update does not add the providers, and without them AG
     Grid can schedule internal work inside the Angular zone that keeps
     `fixture.whenStable()` from resolving. Add `provideSkyAgGridTesting()`
     from `@skyux/ag-grid/testing` to the `TestBed.configureTestingModule`
     providers of specs that render `sky-ag-grid-wrapper`, and
     `provideSkyDataGridTesting()` from `@skyux/data-grid/testing` to specs
     that render `sky-data-grid`. Use `SkyAgGridWrapperHarness` or
     `SkyDataGridHarness`, which wait for the grid to render, instead of
     waiting on `fixture.whenStable()`. Do not add timeouts or retries to
     hide the hang.

8. **Lint failures or warnings.**
   - How to detect: `ng lint`.
   - How to fix: Existing violations of the new rules are set to "warn" in
     `eslint.config.file-overrides.mjs` and `stylelint.config.file-overrides.mjs`.
     Do not add entries to those files, and do not write new code that breaks
     the new rules: use a component's dedicated output (such as `buttonClick`
     on `sky-button`) instead of `(click)`, use only documented `sky-*`
     classes and `--sky-*` custom properties, and do not import from
     `@skyux/theme/scss/*` other than `@skyux/theme/scss/responsive`. For
     `skyux-eslint-template/prefer-label-text`, give the control an
     accessible name with `labelText`, adding `labelHidden` when the label
     should not be visible.

9. **Install or build failures from the Node.js version.**
   - How to detect: `node -v`
   - How to fix: SKY UX 15 requires Node.js `^22.22.3` or `^24.18.1`. Ask the
     user to switch versions before running `npm ci` again.

This document does not cover Angular 22, TypeScript 6, or AG Grid 36 changes.

## Out of scope during the update

Do not make these changes unless the user asks for them:

- Editing or removing `src/app/skyux15-compat.css`. Adopting each block is
  deliberate follow-up work.
- Re-adding `disableMargin` to fluid grids. The migration converted it to
  `inset`; use `inset` only where a layout needs the outer margin.
- Replacing `sky-checkbox-label`, `sky-radio-label`, or the character counter,
  or fixing existing lint warnings. These are next steps after the update.
- Adjusting styles for the H5, description list, tile dashboard,
  needs-attention, or icon changes. No action is required for these.

Before saying the update is complete, follow the
[Verification before completion](./verification-before-completion.md)
skill and run `ng build`, `ng lint`, and `ng test`.
