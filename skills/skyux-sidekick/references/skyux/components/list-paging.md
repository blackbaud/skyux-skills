---
Title: List paging (deprecated)
Reference: https://developer.blackbaud.com/skyux/components/list-paging
---
> **Deprecated.** Use [SKY UX-themed list of data](./list-overview.md) instead. See below for migration details.


# List paging (deprecated)

The list paging component displays a pagination control for a [SKY UX-themed list of data](./list-overview.md).

Lists and their features are deprecated. We will remove them in a future major version. We recommend using [data manager](./data-manager.md) and [paging](./paging.md) instead.

## Related information

### Components

- [List overview](./list-overview.md)
- [List filters](./list-filters.md)
- [List toolbar](./list-toolbar.md)
- [List view checklist](./list-view-checklist.md)
- [List view grid](./list-view-grid.md)
- [Paging](./paging.md)

## Installation

NPM package

`@skyux/list-builder`[View in NPM](https://www.npmjs.com/package/@skyux/list-builder) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/list-builder/src/lib/modules/list-paging/list-paging.module.ts#L15)

Install with NPM

`npm install --save-exact @skyux/list-builder`

## SkyListPagingModule

Type: Module

`import { SkyListPagingModule } from '@skyux/list-builder';`

Warning: **Deprecated.** List builder and its features are deprecated. Use data manager instead. For more information, see [https://developer.blackbaud.com/skyux/components/data-manager](./data-manager.md).

## SkyListPagingComponent

Type: Component

Selector: `sky-list-paging`

Displays a pagination control for a SKY UX-themed list of data.

### Inputs

#### `maxPages: number | Observable<number>`

The maximum pages to display.

Default: `5`

#### `pageNumber: number | Observable<number>`

The current page number.

Default: `1`

#### `pageSize: number | Observable<number>`

The number of list items per page.

Default: `10`
