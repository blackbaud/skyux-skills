---
Title: Grids
Reference: https://developer.blackbaud.com/skyux/components/grids
---

# Grids

SKY UX includes a few components to create data grids for spreadsheet-like interfaces where users can view or enter large amounts of data. Use the guidance on this page to determine the correct component for your use case.

- [Data entry grid](./data-entry-grid.md) - Data entry grids use the third-party AG Grid library to enable users to enter and edit large amounts of data.
- [Data grid (preview)](./data-grid-component.md) - Data grids provide straightforward grids driven by inputs and column declarations with common features, such as sorting, paging, and selection.
- [Data grid (advanced)](./data-grid.md) - Data grids provide advanced grids for scenarios that require direct access to the third-party AG Grid library and its full configuration and APIs.
- [Grid (deprecated)](./grid.md) - The deprecated grid component was used to display data in a consistent and flexible way.

## Choosing the right data grid

### Use when

**Data entry grid**

The [AG Grid-based data entry grid](./data-entry-grid.md) is the option to use when you need an editable, spreadsheet-like user interface where users can enter and edit large amounts of data.

**Data grid (preview)**

The [`sky-data-grid` component](./data-grid-component.md) is the best option for most common use cases for grids. Use it when you want a straightforward grid that is driven by inputs and column declarations and that includes common features, such as sorting, paging, selection, and loading states. It replaces the deprecated [grid](../learn/develop/deprecation/grid.md) and [list view grid](../learn/develop/deprecation/list-view-grid.md) components.

**Data grid (advanced)**

The [AG Grid-based data grid](./data-grid.md) is preferable in advanced scenarios where you need direct access to AG Grid Enterprise features, such as row grouping and expanding.

### Don't use

Don't use the deprecated grid component. It is deprecated and will be removed in a future SKY UX release. Instead, use the [data grid (preview) component](./data-grid-component.md), which is a simpler, declarative alternative for the common use cases that grid previously served.

## Related information

### Components

- [Data manager](./data-manager.md)
- [Filter bar](./filter-bar.md)
- [Infinite scroll](./infinite-scroll.md)
- [List summary](./list-summary.md)
- [Paging](./paging.md)
- [Repeater](./repeater.md)
- [Sort](./sort.md)
- [Summary action bar](./summary-action-bar.md)
- [Toolbar](./toolbar.md)

### Guidelines

- [Filter lists](../design/guidelines/filtering-lists.md)
- [List page](../design/guidelines/page-layouts/list-page.md)
- [Manage data](../design/guidelines/managing-records.md)
