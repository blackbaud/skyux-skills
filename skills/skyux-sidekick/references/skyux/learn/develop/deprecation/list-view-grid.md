---
Title: List view grid
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/list-view-grid
---

# List view grid

The [list view grid](../../../components/list-view-grid.md) component is deprecated in favor of the [data grid](../../../components/data-grid-component.md) component. Data grid is a simpler, declarative alternative for the common use cases that list view grid previously served. List view grid is part of the `@skyux/list-builder-view-grids` package, not the `@skyux/grids` package, which has its own [migration path](./grid.md).

## How to migrate

SKY UX hasn't created a migration script because we won't have a clear migration path until data grid supports data manager integration. That integration covers the shared state that list view grid and other list-builder views depend on. Teams can move away from the list view grid component on their own, but we intend to have tooling and better guidelines when that integration ships.
