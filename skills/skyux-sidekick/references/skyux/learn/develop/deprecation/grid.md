---
Title: Grid
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/grid
---

# Grid

The [grid](../../../components/grid.md) component is deprecated in favor of the [data grid](../../../components/data-grid-component.md) component. Data grid is a simpler, declarative alternative for the common use cases that grid previously served.

## How to migrate

SKY UX created a migration script to help you migrate to the data grid component. From a project that uses the grid component, run the following schematic to convert most existing `<sky-grid>` markup to `<sky-data-grid>`:

Bash

    ng generate @skyux/packages:convert-grid-to-data-grid

The schematic rewrites your markup, swaps the module import, and adds `@skyux/data-grid` to your project as a dependency. It's honest about its limits: a handful of inputs and outputs have no direct equivalent, a few event payloads change shape, and every migrated column lands with a text data type until you confirm otherwise. Review its output carefully.

If your grid lives inside a [list builder](../../../components/list.md) view rather than as a standalone `<sky-grid>`, hold off converting. That path is tied to `@skyux/data-manager` integration, which hasn't shipped yet.
