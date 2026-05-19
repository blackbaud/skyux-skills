# SKY UX 14 Update Fixes

This document summarizes the issues encountered and fixes applied during the update of a SKY UX project from version 13
to version 14. This document is consumed by both developers and AI-assisted migration skills.

1. **`ng-mocks` usage.**
   - How to detect: `grep -Ern "ng-mocks|MockComponent\\(|MockProvider\\(|MockService\\(" src/**/*.ts`
   - How to fix: Replace `MockProvider`/`MockService` with explicit spies or local mock classes. Remove `MockComponent(...)` declarations and rely on imported Angular modules or real stub components defined in the spec. Successful changes will address antipatterns so you should read [Testing antipatterns](./test-driven-development/testing-antipatterns.md).

2. **`sky-modal-header` in tests.**
   - How to detect: `grep -rn 'sky-modal-header' src/**/*.spec.ts`
   - How to fix: Import `SkyModalHarness` from `@skyux/modals/testing`, create a harness loader for the spec, and assert the modal title through `getHeadingText()` instead of reading DOM internals. Successful changes will prefer component harnesses to DOM querying so you should read [Angular testing patterns](./test-driven-development/angular-testing-patterns.md) for more details and examples.
