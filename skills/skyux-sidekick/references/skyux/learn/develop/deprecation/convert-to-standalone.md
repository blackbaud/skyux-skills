---
Title: Convert to standalone
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/convert-to-standalone
---

# Convert to standalone

The use of `NgModule` declarations in SKY UX is deprecated in favor of standalone components. With Angular's introduction of standalone components, `NgModule` declarations are no longer required for components and directives.

We strongly recommend migrating to standalone components because they provide clearer dependency management and improved tree-shaking capabilities, which leads to smaller bundle sizes and better performance.

## How to migrate

SKY UX created a migration script to help you migrate to standalone components. From an up-to-date SKY UX 13+ project that uses components and directives with `standalone: false`, run the following command:

Bash

    npx ng g @skyux/packages:standalone-migration

## What to do after the script

After you run the migration script, perform the following actions in your project:

- Run the `build` and `test` commands to verify that all component dependencies are still provided.
- Consider whether to convert the SPA to lazy-loaded routes using standalone components. For information, see the [Angular documentation on lazy loading migration](https://angular.dev/reference/migrations/route-lazy-loading).
- The migration script updates `NgModule` files but leaves them in place so that you can reference them in tests or export them from libraries. If you no longer need them, remove them using the following command:

  Bash

      npx ng g @angular/core:standalone-migration --mode=prune-ng-modules
