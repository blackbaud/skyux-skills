---
Title: Data grid (preview)
Reference: https://developer.blackbaud.com/skyux/components/data-grid-component
---

# Data grid (preview)

We created this new data grid component to simplify the implementation of data grids for common use cases. It is currently in [preview mode](../learn/preview.md) and isn't fully implemented or documented. We plan to finish development of this component and officially release it in SKY UX v15.

The `sky-data-grid` component provides a declarative, signal-based grid for tabular data: supply a `data` array of rows and a `<sky-data-grid-column />` for each column, and the grid handles sorting, paging, multiselect, loading states, and more.

## Choosing the right data grid

For guidance on choosing the appropriate data grid for your use case, see [Grids](./grids.md).

## Usage

### Use when

Use data grids to display large amounts of data when users need to compare values between rows or scan for specific values or outliers.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-do-use.fad6b74d8d400193ebcb4d2da75c6ca2.png)

Do use data grids to help users scan data and compare values.

### Don't use when

Don't use data grids to display content that requires a complex layout. To display multiple templated columns, visual content such as graphs or images, or content that users are likely to view in small viewports such as phones, use [repeaters](./repeater.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-dont-use.f169e260ec769cfb825d70f245529441.png)

Don't use data grids to display visual content or other complex layouts.

## Behavior and states

### Reordering columns

To reorder columns, users can drag and drop them.

### Resizing columns

To resize columns, users can select and drag.

### Responsiveness

Data grids perform poorly in small viewports, such as mobile devices. Columns in fixed-width grids shrink to the point of being unreadable, and grids with horizontal scrollbars require a great deal of effort to view content. If you expect users to view content in small viewports, use [repeaters](./repeater.md) or another pattern instead.

## Accessibility

To provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md), set `labelText` on `sky-data-grid` to provide an accessible name for the grid, and provide `headingText` on every `sky-data-grid-column`. Screen readers announce this column header as users navigate cells. Without it, the row context is lost. To render a column without a visible header, add `headingHidden`. For example, in a column of row actions, this hides the column header in the visual layout while keeping `headingText` available to assistive technology.

## Related information

### Components

- [Data grid (advanced)](./data-grid.md)
- [Data entry grid](./data-entry-grid.md)
- [Data manager](./data-manager.md)
- [Dropdown](./dropdown.md)
- [Filter bar](./filter-bar.md)
- [Help inline button](./help-inline.md)
- [Infinite scroll](./infinite-scroll.md)
- [List summary](./list-summary.md)
- [Paging](./paging.md)
- [Repeater](./repeater.md)
- [Sort](./sort.md)
- [Summary action bar](./summary-action-bar.md)

### Guidelines

- [Filter lists](../design/guidelines/filtering-lists.md)
- [Form design](../design/guidelines/form-design.md)
- [List page](../design/guidelines/page-layouts/list-page.md)
- [Page design](../design/guidelines/page-layouts/README.md)

## Installation

NPM package

`@skyux/data-grid`[View in NPM](https://www.npmjs.com/package/@skyux/data-grid) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/data-grid/src/lib/modules/data-grid/data-grid.ts#L121)

Install with NPM

`npm install --save-exact @skyux/data-grid`

## Setup

In addition to the `@skyux/data-grid` package, you need to install the [`ag-grid-angular`](https://www.ag-grid.com/angular-grid/) and [`ag-grid-community`](https://www.npmjs.com/package/ag-grid-community) packages.

To add the SKY UX styles for AG Grid to your SPA, run `ng g @skyux/packages:add-ag-grid-styles --project _my-app_`.

## SkyDataGrid

Type: Component Preview

Selector: `sky-data-grid`

Displays tabular data in a grid using a declarative set of columns and inputs. Provide the `data` array and one `sky-data-grid-column` for each column to render.

### Inputs

#### `autoPage: InputSignalWithTransform<boolean, unknown>`

Whether the items in `data` represent the full result set used for paging. This applies only when `pageSize` is greater than zero. When `true` (the default), the grid pages through `data` on the client. When `false`, the `rowCount` input is required to size the paging controls, and `data` should be updated to the rows for the current page whenever `page` emits a new value (server-side paging).

Default: `true`

#### `autoSort: InputSignalWithTransform<boolean, unknown>`

Whether the grid sorts the data order when a column header is clicked. When `autoSort` is set to `false`, the data grid will not modify the sort order, `sort` will emit a new value, and `data` will need to be updated. Use this option when the data is returned from the server already sorted, such as sorting a "name" column using last name.

Default: `true`

#### `columnFit: InputSignal<"container" | "content">`

How the grid columns are sized. The valid options are `container`, which attempts to fit the grid to the parent's full width, and `content`, which attempts to optimize columns to display their contents and may exceed the parent's width. If the grid does not have enough columns to fill the parent's width, it always stretches to the parent's full width. This property is applied when the grid initializes; changes after initialization are not reflected.

Default: `'container'`

#### `compact: InputSignalWithTransform<boolean, unknown>`

Whether to enable a compact layout for the grid when using modern theme. Compact layout uses a smaller font size and row height to display more data in a smaller space.

Default: `false`

#### `data: InputSignal<SkyDataGridRowData[] | null | undefined>`

The data for the grid. Each item must implement `SkyDataGridRowData`, and other properties should map to a `field` of the grid columns. When `data` is `null` or `undefined`, the grid will show a loading indicator, and when `data` is an empty array, the grid will show a "no rows" message.

#### `labelText: InputSignal<string | undefined>`

The text to read to screen readers to describe the grid. This sets the `aria-label` attribute on the grid container.

#### `loading: InputSignalWithTransform<boolean, unknown>`

Whether data is being loaded. When `loading` is true or when `data` is nullish, the grid shows a waiting overlay and is not interactive.

Default: `false`

#### `minHeight: InputSignalWithTransform<number, unknown>`

The minimum height of the grid in pixels.

Default: `50`

#### `multiselect: InputSignalWithTransform<boolean, unknown>`

Whether to enable the multiselect feature to display a column of checkboxes on the left side of the grid.

Default: `false`

#### `page: ModelSignal<number>`

The current page number of the grid when `pageSize` has been set. This is two-way bindable: it updates as the user navigates pages, and you can set it to change the current page. When `autoPage` is `false`, update `data` to the rows for the new page whenever this changes.

Default: `1`

#### `pageQueryParam: InputSignal<string | undefined>`

The query parameter name that stores the current page number. When set, the grid syncs page changes to the URL for deep linking, and there should only be one grid on the page.

#### `pageSize: InputSignalWithTransform<number | undefined, unknown>`

The number of items to display per page. Setting a value greater than zero enables paging. When `autoPage` is `true` (the default), the grid pages through `data` on the client; when `autoPage` is `false`, set `rowCount` to the total number of rows and update `data` as `page` changes.

#### `rowCount: InputSignalWithTransform<number | undefined, unknown>`

The total number of rows to page through, used to calculate how many pages the paging controls display. Required when `pageSize` is greater than zero and `autoPage` is `false`; ignored when `autoPage` is `true` because the length of `data` is used instead.

#### `selectedRowIds: ModelSignal<string[]>`

The set of IDs for the rows to select in a multiselect grid. Rows with IDs that are not included are de-selected in the grid. This is two-way bindable: it emits the updated set of IDs when the user changes the selection.

Default: `[]`

#### `sort: ModelSignal<SkyDataGridSort | undefined>`

The current sort applied to the grid. This is two-way bindable: it emits a new value whenever the user sorts a column, and you can set it to sort the grid programmatically. When `autoSort` is `false`, the grid emits the new value here but does not reorder the data itself, leaving it to you to update `data`.

#### `stacked: InputSignalWithTransform<boolean, unknown>`

Whether the data grid is stacked with another element below it. When specified, the appropriate vertical spacing is automatically added to the data grid.

Default: `false`

#### `topScrollEnabled: InputSignalWithTransform<boolean, unknown>`

Whether to move the horizontal scrollbar to just below the header row. This property is applied when the grid initializes; changes after initialization are not reflected.

Default: `false`

## SkyDataGridColumn

Type: Component Preview

Selector: `sky-data-grid-column`

Defines a single column in a `SkyDataGrid`. Add one `sky-data-grid-column` for each column to render.

### Inputs

#### `headingText: InputSignal<string>`

Required

Text to display in the column header.

#### `columnHidden: InputSignalWithTransform<boolean, unknown>`

Whether the column is hidden.

Default: `false`

#### `columnId: InputSignal<string | undefined>`

The unique ID for the column. You must provide either the `columnId` or `field` property for every column, but do not provide both. Use `columnId` when the column does not map directly to a field in the data set.

#### `dataType: InputSignal<"number" | "boolean" | "text" | "date">`

The data type of the column used for sorting and rendering when a template is not provided.

Default: `'text'`

#### `field: InputSignal<string | undefined>`

The property to retrieve cell information from an entry on the grid `data` array. You must provide either the `columnId` or `field` property for every column, but do not provide both. When a column maps directly to a property on the data, use `field`; the column's ID defaults to the `field` value.

#### `flexWidth: InputSignalWithTransform<number | undefined, unknown>`

When set, `flexWidth` takes precedence over `width` for sizing and works like [CSS flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow), where a column with `flexWidth="2"` is twice the width of a column with `flexWidth="1"`, and `flexWidth="0"` does not auto-expand. If `width` is also set, it acts as the column's minimum width.

#### `headingHidden: InputSignalWithTransform<boolean, unknown>`

Whether to visually hide `headingText` while keeping it available to assistive technologies. The header cell still renders, so its sorting and resizing controls remain available.

Default: `false`

#### `helpPopoverContent: InputSignal<string | TemplateRef<unknown> | undefined>`

The content of the help popover. When specified, a [help inline](./help-inline.md) button is added to the column header. The help inline button displays a [popover](./popover.md) when clicked using the specified content and optional title.

#### `helpPopoverTitle: InputSignal<string | undefined>`

The title of the help popover. This property only applies when `helpPopoverContent` is also specified.

#### `locked: InputSignalWithTransform<boolean, unknown>`

Whether the column is locked. The intent is to display locked columns first on the left side of the grid. If set to `true`, then users cannot drag the column to another position or drag other columns before it.

Default: `false`

#### `resizable: InputSignalWithTransform<boolean, unknown>`

Whether the column can be resized by dragging the column header border.

Default: `true`

#### `sortable: InputSignalWithTransform<boolean, unknown>`

Whether the column sorts the grid when users click the column header.

Default: `true`

#### `template: InputSignal<TemplateRef<unknown> | undefined>`

The template for a column. This can be assigned as a reference to the `template` input, or it can be assigned as an `<ng-template>` child of the `sky-data-grid-column` component. The template has access to the `value` variable, which contains the value passed to the column, and the `row` variable, which contains the entire row data.

#### `width: InputSignalWithTransform<number | undefined, unknown>`

The width of the column in pixels. Used as the column's initial width; the column can still be resized and is included when columns are sized to fit the grid's width. When `flexWidth` is also set, `width` instead acts as the column's minimum width. When no width is set, the column width is evenly distributed.

#### `wrapText: InputSignalWithTransform<boolean, unknown>`

Whether text in this column should wrap to multiple lines.

Default: `false`

## SkyDataGridSort

Type: Interface Preview

Applies a sort to a `SkyDataGrid` and reflects updates when the grid's sort changes.

    interface SkyDataGridSort {
      direction: "desc" | "asc";
      field: string;
    }

### Properties

#### `direction: "desc" | "asc"`

Direction of the sort.

#### `field: string`

The field or column ID to sort by.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyDataGridHarness

Type: Class Preview

`import { SkyDataGridHarness } from '@skyux/data-grid/testing';`

Harness for interacting with SKY UX data grid components in tests.

### Methods

#### `clickColumnSortButton(column: string): Promise<void>`

Clicks the column header sort button.

#### Parameters

##### `column: string`

#### Returns

`Promise<void>`

#### `getDisplayedColumnHeaderNames(): Promise<string[]>`

Retrieves the header names of the currently displayed columns.

#### Returns

`Promise<string[]>`

#### `getDisplayedColumnIds(): Promise<string[]>`

Retrieves the IDs of the currently displayed columns.

#### Returns

`Promise<string[]>`

#### `getDisplayedRowCount(): Promise<number>`

Retrieves the total number of displayed rows.

#### Returns

`Promise<number>`

#### `getPaging(): Promise<SkyPagingHarness>`

Gets the paging harness for the data grid. Throws if the grid is not paged.

#### Returns

`Promise<SkyPagingHarness>`

#### `getPagingOrNull(): Promise<SkyPagingHarness | null>`

Gets the paging harness for the data grid, or `null` if the grid is not paged.

#### Returns

`Promise<SkyPagingHarness | null>`

#### `getWait(): Promise<SkyWaitHarness>`

Gets the wait harness for the data grid.

#### Returns

`Promise<SkyWaitHarness>`

#### `isGridReady(): Promise<boolean>`

Checks whether the grid is ready.

#### Returns

`Promise<boolean>`

#### `isLoading(): Promise<boolean>`

Checks whether the grid is loading.

#### Returns

`Promise<boolean>`

#### `queryHarness(query: HarnessQuery<T>): Promise<T>`

Returns a child harness or throws an error if not found.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T>`

#### `queryHarnesses(harness: HarnessQuery<T>): Promise<T[]>`

Returns child harnesses.

#### Parameters

##### `harness: HarnessQuery<T>`

#### Returns

`Promise<T[]>`

#### `queryHarnessOrNull(query: HarnessQuery<T>): Promise<T | null>`

Returns a child harness or null if not found.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T | null>`

#### `querySelector(selector: string): Promise<TestElement>`

Returns a child test element or throws an error if not found.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement>`

#### `querySelectorAll(selector: string): Promise<TestElement[]>`

Returns child test elements.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement[]>`

#### `querySelectorOrNull(selector: string): Promise<TestElement | null>`

Returns a child test element or null if not found.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement | null>`

#### `SkyDataGridHarness.with(filters: SkyDataGridHarnessFilters): HarnessPredicate<SkyDataGridHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataGridHarness` that meets certain criteria

#### Parameters

##### `filters: SkyDataGridHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataGridHarness>`

## SkyDataGridHarnessFilters

Type: Interface Preview

A set of criteria that can be used to filter a list of `SkyDataGridHarness` instances.

    interface SkyDataGridHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

Loading complete.
