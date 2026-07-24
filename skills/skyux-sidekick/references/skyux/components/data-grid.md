---
Title: Data grid (advanced)
Reference: https://developer.blackbaud.com/skyux/components/data-grid
---

# Data grid (advanced)

A new [data grid](./data-grid-component.md) component that simplifies the implementation of data grids will replace this component for common use cases. It is currently in preview mode, and we plan to finish development and officially release it in SKY UX v15.

Data grids provide a SKY UX-themed layout for tabular data. Combine data grids with [data managers](./data-manager.md) to allow users to manipulate larger data sets.

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

## Anatomy

1

Header row

2

Row divider

3

[Data manager](./data-manager.md) toolbar (optional)

4

[Filter bar](./filter-bar.md) (optional)

5

[List summary](./list-summary.md) (optional)

6

[Data manager](./data-manager.md) multiselect toolbar (optional)

7

[Help inline button](./help-inline.md) (optional)

8

Row selection checkbox (optional)

9

[Context-menu dropdown](./dropdown.md) button (optional)

10

Selected row (optional)

11

[Pagination](./paging.md) (optional)

12

[Summary action bar](./summary-action-bar.md) (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-anatomy.5b66888fcda4fff4c319b2d065ba4dd6.png)

## Options

### Filter bar

To present users with inline filter options that allow them to apply structured criteria that narrows down the list to the items they are interested in, use the [filter bar](./filter-bar.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-filter.367e29dd3e23371a33221348e648acd9.png)

### List summary

To highlight important information that users should know at a glance, including a list count, use the [list summary](./list-summary.md).

### Multiselect

To let users select multiple rows in a data grid, use a [data manager](./data-manager.md) and enable multiselect.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-multiselect.49410ebe63b179f9571e2a3b7454341e.png)

Do use multiselect to let users select multiple rows.

To let users perform actions on the multiple rows that they select in a data grid, include the [summary action bar](./summary-action-bar.md) at the bottom of the data grid's container. Only use multiselect with a summary action bar when the container is a [page](./page/README.md), [modal](./modal.md), [split view workspace](./split-view.md), or [flyout](./flyout.md). Don't use multiselect with a summary action bar when the data grid is in a container, such as a [tile](./tile.md) or [box](./box.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-multiselect-actions.00ea4f4205e90d4b8596898d84281bb1.png)

Do use multiselect to let users perform actions on multiple rows.

### Help inline button

When you need to supplement a data grid column heading with additional information but don't require persistent inline help, you can place a [help inline button](./help-inline.md) beside the heading to invoke contextual user assistance.

### Context-menu dropdown

To display actions that affect individual items in the data grid, use [context-menu dropdowns](./dropdown.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-context-menu.91ed3dcda87cfc85d5d950941e5c0df9.png)

### Sorting

Make column headers sortable. Sort by the leftmost column or the primary record column in the data grid. Always indicate a data grid's sort order.

Only include the [sort button](./sort.md) in the toolbar if the list includes other views in addition to the data grid (e.g., repeater) or it contains templated columns where users need to sort by another property in that column.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-double-sort.77632d7a87b0698940263e1fc0075e5c.png)

Don't use a sort button if the list only uses data grid view and not templated columns. Rely on column headers for sorting.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-multiple-view-sort.b3261ef07efece81bc2c16f4edbe78b4.png)

Do use a sort button when there are other views of the data in addition to a data grid to supporting sorting in those views (without column headers).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-templated-sort.06353de653d2f2c63b6f11d725cde9ca.png)

Do use a sort button when there are templated columns to provide sort options for multiple properties within a single templated column (e.g., First name and last name).

### Templated items

To display composite information instead of single values, use templated columns.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-templated-items.98d8a20d65af6a50bcc3cf4922b96710.png)

## Behavior and states

### Fit

The fit determines how to place data grids within their containers. If a container is wider than the data grid, the fit stretches the data grid to fill the container.

The `scroll` option provides a horizontal scrollbar when data grids are wider than their containers, while the `width` option resizes data grid columns to fit in the fixed width of the container. The `scroll` option is useful for data grids with many columns, and the `width` option is useful for simple grids in small containers where content fits neatly in the allotted space.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-grid/data-grid-horizontal-scroll.3e5dbeb192f699b79bb04fc5d11d9e12.png)

Data grids with many columns use horizontal scrollbars to fit in narrower containers.

### Reordering columns

To reorder columns, users can drag and drop them.

### Resizing columns

To resize columns, users can select and drag.

### Responsiveness

Data grids perform poorly in small viewports, such as mobile devices. Columns in fixed-width grids shrink to the point of being unreadable, and grids with horizontal scrollbars require a great deal of effort to view content. If you expect users to view content in small viewports, use [repeaters](./repeater.md) or another pattern instead.

## Accessibility

To provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md), provide `headerName` on every column. Screen readers announce this column header as users navigate cells. Without it, the row context is lost. To render a column without a visible header, set `headerHidden` to `true`. For example, in a column of row actions, this hides the column header in the visual layout while keeping `headerName` available to assistive technology.

## Related information

### Components

- [Data entry grid](./data-entry-grid.md)
- [Data grid (preview)](./data-grid-component.md)
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
- [List page](../design/guidelines/page-layouts/list-page.md)

## Installation

NPM package

`@skyux/ag-grid`[View in NPM](https://www.npmjs.com/package/@skyux/ag-grid) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/ag-grid/src/lib/modules/ag-grid/ag-grid.module.ts#L38)

Install with NPM

`npm install --save-exact @skyux/ag-grid`

## Setup

In addition to the `@skyux/ag-grid` package, you need to install the [`ag-grid-angular`](https://www.ag-grid.com/angular-grid/) and [`ag-grid-community`](https://www.npmjs.com/package/ag-grid-community) packages.

If you use the data grid with [the enterprise version of AG Grid instead of the free community version](https://www.ag-grid.com/documentation/angular/licensing/), the data grid turns on all enterprise features by default.

## AG Grid styles

To add the SKY UX styles for AG Grid to your SPA, run `ng g @skyux/packages:add-ag-grid-styles --project _my-app_`.

## AG Grid wrapper component

The `sky-ag-grid-wrapper` component provides WCAG-compliant keyboard navigation and sticky column headers for grids that use auto height. Use the `sky-ag-grid-wrapper` component to wrap all instances of `ag-grid-angular`. The wrapper does not constrain standard AG Grid functionality.

## Data manager directive

If you use a data grid within a [data manager component](./data-manager.md), the `skyAgGridDataManagerAdapter` directive can manage some standard interactions between the data grid and the data manager service. Add the directive should to the `sky-data-view` element that contains the data grid to initialize properties from the data state and keep the data grid in sync with the data state. When the data grid changes, the data state is updated, and when the data state changes, the data grid responds to the changes. The directive manages:

- column visibility and order
- selected rows
- active sort state when selected by column header

Other properties of the data state, such as filters and applying the sort, still need to be implemented for each use.

## Using other SKY UX components in columns

For full control over a SKY UX component rendered in a cell, you can create your own [cell renderer](https://www.ag-grid.com/angular-data-grid/component-cell-renderer/) and place the component inside it. For example, to include a context menu in your grid, you create a cell renderer and place the context menu in the cell renderer. See the demo for an example.

Additionally, you can inject content into a SKY UX template ref column type. This is especially useful for data grids with row actions that need to be usable while editing neighboring cells. See the code examples for more information.

## SkyAgGridModule

Type: Module

`import { SkyAgGridModule } from '@skyux/ag-grid';`

Provides `SkyAgGridWrapperComponent` and `SkyAgGridRowDeleteDirective`, but to use AG Grid in your application, you must also load `AgGridAngular` from `ag-grid-angular` and `ModuleRegistry` from `ag-grid-community`. For more information, see [AG Grid modules](https://www.ag-grid.com/angular-data-grid/modules/).

### Example

    ModuleRegistry.registerModules([AllCommunityModule]);

## SkyAgGridWrapperComponent

Type: Component

Selector: `sky-ag-grid-wrapper`

### Inputs

#### `compact: InputSignalWithTransform<boolean, unknown>`

Enable a compact layout for the grid when using modern theme. Compact layout uses a smaller font size and row height to display more data in a smaller space.

#### `minHeight: InputSignalWithTransform<number, unknown>`

The minimum height of the grid in pixels. The default value is `50`.

## SkyAgGridService

Type: Service

`SkyAgGridService` provides methods to get AG Grid `gridOptions` to ensure grids match SKY UX functionality. The `gridOptions` can be overridden, and include registered SKY UX column types.

### Methods

#### `getEditableGridOptions(args: SkyGetGridOptionsArgs<T>): GridOptions<T>`

Returns [AG Grid `gridOptions`](https://www.ag-grid.com/angular-data-grid/grid-options/) with default SKY UX options, styling, and cell editors registered for editable grids.

#### Parameters

##### `args: SkyGetGridOptionsArgs<T>`

#### Returns

`GridOptions<T>`

#### `getGridOptions(args: SkyGetGridOptionsArgs<T>): GridOptions<T>`

Returns [AG Grid `gridOptions`](https://www.ag-grid.com/angular-data-grid/grid-options/) with default SKY UX options, styling, and cell renderers registered for read-only grids.

#### Parameters

##### `args: SkyGetGridOptionsArgs<T>`

#### Returns

`GridOptions<T>`

## SkyGetGridOptionsArgs

Type: Interface

    interface SkyGetGridOptionsArgs {
      dateFormat?: string;
      gridOptions: GridOptions<T>;
      locale?: string;
    }

### Properties

#### `dateFormat?: string`

The format to use for formatting date strings in the `SkyCellType.Date` column.

#### `gridOptions: GridOptions<T>`

The [AG Grid `gridOptions`](https://www.ag-grid.com/angular-data-grid/grid-options/) that override default SKY UX `gridOptions`. SKY UX column types for components and column `cellClassRules` enforce required cell styling and cannot be overridden.

#### `locale?: string`

The locale for location-specific formatting, such as date values for the `SkyCellType.Date` column.

## SkyAgGridRowDeleteDirective

Type: Directive

Selector: `[skyAgGridRowDelete]`

Enables inline row delete functionality for an AG Grid when included on the `SkyAgGridWrapperComponent` element. The directive uses `rowDeleteIds` to determine which rows to add inline delete options to.

### Inputs

#### `rowDeleteIds: ModelSignal<string[]>`

The IDs of the data in the rows where the inline delete appears.

### Outputs

#### `rowDeleteCancel: OutputEmitterRef<SkyAgGridRowDeleteCancelArgs>`

Emits a `SkyAgGridRowDeleteCancelArgs` object when a row's inline delete is cancelled.

#### `rowDeleteConfirm: OutputEmitterRef<SkyAgGridRowDeleteConfirmArgs>`

Emits a `SkyAgGridRowDeleteConfirmArgs` object when a row's inline delete is confirmed.

## SkyAgGridRowDeleteConfirmArgs

Type: Interface

Information regarding a row whose deletion has been confirmed.

    interface SkyAgGridRowDeleteConfirmArgs {
      id: string;
    }

### Properties

#### `id: string`

The id of the data in the row whose deletion has been confirmed.

## SkyAgGridRowDeleteCancelArgs

Type: Interface

Information regarding a row whose deletion has been cancelled.

    interface SkyAgGridRowDeleteCancelArgs {
      id: string;
    }

### Properties

#### `id: string`

The id of the data in the row whose deletion has been cancelled.

## SkyAgGridCellEditorInitialAction

Type: Enumeration

The initial action that a cell editor should take when initialized.

    enum SkyAgGridCellEditorInitialAction {
      Delete = 0,
      Highlighted = 1,
      Replace = 2,
      Untouched = 3,
    }

### Properties

#### `SkyAgGridCellEditorInitialAction.Delete`

The cell should be cleared.

#### `SkyAgGridCellEditorInitialAction.Highlighted`

The cell value should be highlighted.

#### `SkyAgGridCellEditorInitialAction.Replace`

The cell value should be replaced with the initializing value.

#### `SkyAgGridCellEditorInitialAction.Untouched`

The cell should not be modified and the cursor is placed at the end of the value.

## SkyAgGridCellEditorUtils

Type: Class

### Methods

#### `SkyAgGridCellEditorUtils.getEditorInitialAction(params: ICellEditorParams<any, any, any> | undefined): SkyAgGridCellEditorInitialAction`

Gets the initial action that a cell editor should take when initialized.

#### Parameters

##### `params: ICellEditorParams<any, any, any> | undefined`

The editor's initializing parameters.

#### Returns

`SkyAgGridCellEditorInitialAction`

#### `SkyAgGridCellEditorUtils.subtractOrZero(minuend: number | null | undefined, subtrahend: number): number`

Returns the difference between the minuend and subtrahend. If the minuend is not defined, returns 0.

#### Parameters

##### `minuend: number | null | undefined`

The number from which another number is subtracted.

##### `subtrahend: number`

The number that is subtracted from the minuend.

#### Returns

`number`

## SkyCellType

Type: Enumeration

These column types can be used by setting the AG Grid [column definition `type`](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing) to one of the following values. Any [SKY UX component](./README.md) can be made into a [cell editor](https://www.ag-grid.com/angular-data-grid/cell-editors/) or [cell renderer](https://www.ag-grid.com/angular-data-grid/component-cell-renderer/) component. If you would like to use a component that does not have a column definition yet, please consider [contributing it](https://github.com/blackbaud/skyux/blob/main/CONTRIBUTING.md) to the SKY UX data entry grid module.

    enum SkyCellType {
      Autocomplete = "skyCellAutocomplete",
      Currency = "skyCellCurrency",
      CurrencyValidator = "skyCellCurrencyValidator",
      Date = "skyCellDate",
      Lookup = "skyCellLookup",
      Number = "skyCellNumber",
      NumberValidator = "skyCellNumberValidator",
      RightAligned = "skyCellRightAligned",
      RowSelector = "skyCellRowSelector",
      Template = "skyCellTemplate",
      Text = "skyCellText",
      Validator = "skyCellValidator",
    }

### Properties

#### `SkyCellType.Autocomplete`

**Edit mode**

Cells in the column will be edited as [SKY UX autocomplete components](./autocomplete.md). You can set any of the autocomplete component's properties by passing `SkyCellEditorAutocompleteParams` in the [column definition's `cellEditorParams` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing). These params can be updated as other cell edits are made or [provided dynamically](https://www.ag-grid.com/angular-data-grid/cell-editing/) based on other cell values. See the demo for an example. Text can be entered and a value selected from the provided list.

**Read-only mode**

Cells the column will display the currently selected value's name property by default. If the autocomplete needs to show a different property or needs to be formatted in any way, you can [define a `valueFormatter`](https://www.ag-grid.com/angular-data-grid/value-formatters/) on the column definition.

#### `SkyCellType.Currency`

**Edit mode**

Cells in the column will be edited as a currency amount.

**Read-only mode**

Formats the display as currency using [SKY UX numeric components](./numeric.md).

#### `SkyCellType.CurrencyValidator`

**Edit and read-only modes**

Combines [SkyCellType](./data-grid.md#enum_sky-cell-type).Currency and [SkyCellType](./data-grid.md#enum_sky-cell-type).Validator, where the value is displayed as a currency and passed to a validator function.

#### `SkyCellType.Date`

**Edit mode**

Cells in the column will be edited as [SKY UX datepicker components](./datepicker.md). You can set any of the datepicker component's properties by passing `SkyCellEditorDatepickerParams` in the [column definition's `cellEditorParams` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing). These params can be updated as other cell edits are made or [provided dynamically](https://www.ag-grid.com/angular-data-grid/cell-editing/) based on other cell values. See the demo for an example. Date values can be entered.

**Read-only mode**

Cells in the column will display the currently selected date formatted as `MM-DD-YYYY`, or the date format of the locale passed to `getGridOptions()`. If you would like to overwrite this format, you can [define a `valueFormatter`](https://www.ag-grid.com/angular-data-grid/value-formatters/) on the column definition. See the demo for an example.

#### `SkyCellType.Lookup`

**Edit mode**

Cells in the column will be edited as SKY UX lookup components. You can set any of the lookup component's properties by passing `SkyCellEditorLookupParams` in the [column definition's `cellEditorParams` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing). These params can be updated as other cell edits are made or [provided dynamically](https://www.ag-grid.com/angular-data-grid/cell-editing/) based on other cell values. See the demo for an example. Text can be entered and a value selected from the provided list.

**Read-only mode**

Cells the column will display, by default, either: the name(s) of the selected value(s) if there are less than 6, or a summary count of the values if there are more than 5. If the lookup needs to show a different property or needs to be formatted in any way, you can [define a `valueFormatter`](https://www.ag-grid.com/angular-data-grid/value-formatters/) on the column definition.

#### `SkyCellType.Number`

**Edit mode**

Cells in the column will be edited as HTML number `inputs`. Only numbers can be entered.

**Read-only mode**

Cells in the column will render as the number value.

#### `SkyCellType.NumberValidator`

**Edit and read-only modes**

Combines [SkyCellType](./data-grid.md#enum_sky-cell-type).Number and [SkyCellType](./data-grid.md#enum_sky-cell-type).Validator, where the value is displayed as a number and passed to a validator function.

#### `SkyCellType.RightAligned`

**Edit and read-only modes**

The header and cells in the column will render right aligned.

#### `SkyCellType.RowSelector`

**Edit and read-only modes**

Cells in the column will render as [SKY UX checkbox components](./checkbox.md). It allows the user to select multiple rows, and adds a highlight to selected rows. The [Ag Grid `rowNode`](https://www.ag-grid.com/angular-data-grid/row-object/) will be updated to reflect the selected state.

#### `SkyCellType.Template`

**Read-only mode**

Cells in the column will render in a `TemplateRef` passed in the column definition's `cellRendererParams.template` property, with `value` and `row` context. See the demo for an example.

#### `SkyCellType.Text`

**Edit mode**

Cells in the column will be edited as HTML text `inputs`. Any characters can be entered.

**Read-only mode**

Cells in the column will render as their string value.

#### `SkyCellType.Validator`

**Edit and read-only modes**

Cells in the column will be passed to a validator function that flags erroneous entries. You can set the validator function and message by passing a `SkyAgGridValidatorProperties` object as `skyComponentProperties` to [column definition's `cellRendererParams` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing), like `skyComponentProperties.validator` and `skyComponentProperties.validatorMessage`. [SkyCellType](./data-grid.md#enum_sky-cell-type).Validator can be combined with other cell types, such as [SkyCellType](./data-grid.md#enum_sky-cell-type).Autocomplete or [SkyCellType](./data-grid.md#enum_sky-cell-type).Date, by using the array syntax for the [column definition's `type` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing).

## SkyAgGridHeaderInfo

Type: Service

To display a help button beside the column header, create a component containing [`sky-help-inline`](./help-inline.md), and inject SkyAgGridHeaderInfo to access the column information, such as display name. Add the component to the `headerComponentParams.inlineHelpComponent` property of the [column definition](https://www.ag-grid.com/angular-data-grid/column-definitions/).

### Properties

#### `column: Column<any> | undefined`

[Column information from AG Grid](https://www.ag-grid.com/angular-data-grid/column-object/).

#### `context: any`

AG Grid's [`context` field](https://www.ag-grid.com/angular-data-grid/context/).

#### `displayName: string | undefined`

Display name of the column.

## SkyAgGridHeaderParams

Type: Interface

Interface to use for the [`headerComponentParams`](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-header-headerComponentParams) property on `ColDef`.

    interface SkyAgGridHeaderParams {
      headerHidden?: boolean;
      inlineHelpComponent?: Type<unknown>;
    }

### Properties

#### `headerHidden?: boolean`

Hides the column header text. Each column should have a `headerName` defined in the column definition for accessibility. This option allows that text to be hidden from view while still being available to screen readers.

#### `inlineHelpComponent?: Type<unknown>`

The component to display as inline help beside the column header.

## SkyAgGridHeaderGroupInfo

Type: Service

To display a help button beside the column group header, create a component containing [`sky-help-inline`](./help-inline.md), and inject SkyAgGridHeaderGroupInfo to access the column group information, such as display name. Add the component to the `headerGroupComponentParams.inlineHelpComponent` property of the [column group definition](https://www.ag-grid.com/angular-data-grid/column-groups/).

### Properties

#### `columnGroup: ColumnGroup<any> | undefined`

[Column group information from AG Grid](https://www.ag-grid.com/angular-data-grid/column-object-group/).

#### `context: any`

AG Grid's [`context` field](https://www.ag-grid.com/angular-data-grid/context/).

#### `displayName: string | undefined`

Display name of the column group.

## SkyAgGridHeaderGroupParams

Type: Interface

Interface to use for the [`headerGroupComponentParams`](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-groupsHeader-headerGroupComponentParams) property on `ColGroupDef`.

    interface SkyAgGridHeaderGroupParams {
      inlineHelpComponent?: Type<unknown>;
    }

### Properties

#### `inlineHelpComponent?: Type<unknown>`

The component to display as inline help beside the column group header.

## SkyAgGridAutocompleteProperties

Type: Interface

    interface SkyAgGridAutocompleteProperties {
      allowAnyValue?: boolean;
      data?: unknown[];
      debounceTime?: number;
      descriptorProperty?: string;
      highlightSearchText?: boolean;
      propertiesToSearch?: string[];
      search?: (searchText: string, data?: unknown[]) => unknown[] | Promise<unknown[]>;
      searchFilters?: ((searchText: string, item: unknown) => boolean)[];
      searchResultsLimit?: number;
      searchResultTemplate?: TemplateRef<unknown>;
      searchTextMinimumCharacters?: number;
      selectionChange?: (event: SkyAutocompleteSelectionChange) => void;
    }

### Properties

#### `allowAnyValue?: boolean`

Allows users to specify arbitrary values not in the search results.

#### `data?: unknown[]`

The static data source for the autocomplete cell to search when users enter text. For a dynamic data source, such as an array that changes due to server calls, use search instead. You can specify static data, such as an array of objects, or you can pull data from a database.

#### `debounceTime?: number`

How many milliseconds to wait before searching while users enter text in the autocomplete field.

#### `descriptorProperty?: string`

The object property to display in the text input after users select an item in the dropdown list.

#### `highlightSearchText?: boolean`

Highlights the search text in each search result. Set this to `false` when your search returns results that aren't exact text matches, such as returning "Bob" for "Robert."

#### `propertiesToSearch?: string[]`

The array of object properties to search when utilizing the `data` property and the built-in search function.

#### `search?: (searchText: string, data?: unknown[]) => unknown[] | Promise<unknown[]>`

The function that dynamically manages the data to display in search results when users change the text in the autocomplete cell. The search function must return an array or a promise of an array.

#### `searchFilters?: ((searchText: string, item: unknown) => boolean)[]`

The array of functions to call against each search result. This filters the search results when using the `data` input and the default search function. When the `search` property specifies a custom search function, you must manually apply filters inside that function. The function must return `true` or `false` for each result to indicate whether to display it in the dropdown list.

#### `searchResultsLimit?: number`

The maximum number of search results to display in the dropdown list. By default, the autocomplete component displays all matching results.

#### `searchResultTemplate?: TemplateRef<unknown>`

The template that formats each search result in the dropdown list. The autocomplete component injects search result values into the template as `item` variables that reference all of the object properties of the search results.

#### `searchTextMinimumCharacters?: number`

The minimum number of characters that users must enter before the autocomplete component searches the data source and displays search results in the dropdown list.

#### `selectionChange?: (event: SkyAutocompleteSelectionChange) => void`

Output that fires when users select items in the dropdown list.

## SkyAutocompleteProperties

Type: Interface

Warning: **Deprecated.** Use [SkyAgGridAutocompleteProperties](./data-grid.md#interface_sky-ag-grid-autocomplete-properties) instead.

    interface SkyAutocompleteProperties {
      allowAnyValue?: boolean;
      data?: unknown[];
      debounceTime?: number;
      descriptorProperty?: string;
      highlightSearchText?: boolean;
      propertiesToSearch?: string[];
      search?: (searchText: string, data?: unknown[]) => unknown[] | Promise<unknown[]>;
      searchFilters?: ((searchText: string, item: unknown) => boolean)[];
      searchResultsLimit?: number;
      searchResultTemplate?: TemplateRef<unknown>;
      searchTextMinimumCharacters?: number;
      selectionChange?: (event: SkyAutocompleteSelectionChange) => void;
    }

### Properties

#### `allowAnyValue?: boolean`

Allows users to specify arbitrary values not in the search results.

#### `data?: unknown[]`

The static data source for the autocomplete cell to search when users enter text. For a dynamic data source, such as an array that changes due to server calls, use search instead. You can specify static data, such as an array of objects, or you can pull data from a database.

#### `debounceTime?: number`

How many milliseconds to wait before searching while users enter text in the autocomplete field.

#### `descriptorProperty?: string`

The object property to display in the text input after users select an item in the dropdown list.

#### `highlightSearchText?: boolean`

Highlights the search text in each search result. Set this to `false` when your search returns results that aren't exact text matches, such as returning "Bob" for "Robert."

#### `propertiesToSearch?: string[]`

The array of object properties to search when utilizing the `data` property and the built-in search function.

#### `search?: (searchText: string, data?: unknown[]) => unknown[] | Promise<unknown[]>`

The function that dynamically manages the data to display in search results when users change the text in the autocomplete cell. The search function must return an array or a promise of an array.

#### `searchFilters?: ((searchText: string, item: unknown) => boolean)[]`

The array of functions to call against each search result. This filters the search results when using the `data` input and the default search function. When the `search` property specifies a custom search function, you must manually apply filters inside that function. The function must return `true` or `false` for each result to indicate whether to display it in the dropdown list.

#### `searchResultsLimit?: number`

The maximum number of search results to display in the dropdown list. By default, the autocomplete component displays all matching results.

#### `searchResultTemplate?: TemplateRef<unknown>`

The template that formats each search result in the dropdown list. The autocomplete component injects search result values into the template as `item` variables that reference all of the object properties of the search results.

#### `searchTextMinimumCharacters?: number`

The minimum number of characters that users must enter before the autocomplete component searches the data source and displays search results in the dropdown list.

#### `selectionChange?: (event: SkyAutocompleteSelectionChange) => void`

Output that fires when users select items in the dropdown list.

## SkyCellEditorAutocompleteParams

Type: Interface

    interface SkyCellEditorAutocompleteParams {
      skyComponentProperties?: SkyAgGridAutocompleteProperties | SkyAutocompleteProperties;
    }

### Properties

#### `skyComponentProperties?: SkyAgGridAutocompleteProperties | SkyAutocompleteProperties`

The parameters provided to the autocomplete component.

## SkyAgGridCurrencyProperties

Type: Interface

    interface SkyAgGridCurrencyProperties {
      currencySymbol?: string;
      decimalPlaces?: string | number;
      negativeBracketsTypeOnBlur?: "(,)" | "[,]" | "<,>" | "{,}" | "〈,〉" | "｢,｣" | "⸤,⸥" | "⟦,⟧" | "‹,›" | "«,»" | null;
    }

### Properties

#### `currencySymbol?: string`

The currency symbol to display in the cell.

#### `decimalPlaces?: string | number`

The number of decimal places to display on the currency.

#### `negativeBracketsTypeOnBlur?: "(,)" | "[,]" | "<,>" | "{,}" | "〈,〉" | "｢,｣" | "⸤,⸥" | "⟦,⟧" | "‹,›" | "«,»" | null`

Adds the specified brackets around negative values when unfocused.

## SkyAgGridDatepickerProperties

Type: Interface

    interface SkyAgGridDatepickerProperties {
      dateFormat?: string;
      disabled?: boolean;
      maxDate?: Date;
      minDate?: Date;
      skyDatepickerNoValidate?: boolean;
      startingDay?: number;
    }

### Properties

#### `dateFormat?: string`

The date format for the input.

#### `disabled?: boolean`

Whether to disable the datepicker cell.

#### `maxDate?: Date`

The latest date that is available in the calendar.

#### `minDate?: Date`

The earliest date that is available in the calendar. To avoid validation errors, the time associated with the minimum date is midnight. This is necessary because the datepicker automatically sets the time on the Date object for selected dates to midnight in the current user's time zone.

#### `skyDatepickerNoValidate?: boolean`

Whether to disable date validation on the datepicker input.

#### `startingDay?: number`

The starting day of the week in the calendar. `0` sets the starting day to Sunday.

## SkyDatepickerProperties

Type: Interface

Warning: **Deprecated.** Use [SkyAgGridDatepickerProperties](./data-grid.md#interface_sky-ag-grid-datepicker-properties) instead.

    interface SkyDatepickerProperties {
      dateFormat?: string;
      disabled?: boolean;
      maxDate?: Date;
      minDate?: Date;
      skyDatepickerNoValidate?: boolean;
      startingDay?: number;
    }

### Properties

#### `dateFormat?: string`

The date format for the input.

#### `disabled?: boolean`

Whether to disable the datepicker cell.

#### `maxDate?: Date`

The latest date that is available in the calendar.

#### `minDate?: Date`

The earliest date that is available in the calendar. To avoid validation errors, the time associated with the minimum date is midnight. This is necessary because the datepicker automatically sets the time on the Date object for selected dates to midnight in the current user's time zone.

#### `skyDatepickerNoValidate?: boolean`

Whether to disable date validation on the datepicker input.

#### `startingDay?: number`

The starting day of the week in the calendar. `0` sets the starting day to Sunday.

## SkyCellEditorDatepickerParams

Type: Interface

    interface SkyCellEditorDatepickerParams {
      skyComponentProperties?: SkyAgGridDatepickerProperties | SkyDatepickerProperties;
    }

### Properties

#### `skyComponentProperties?: SkyAgGridDatepickerProperties | SkyDatepickerProperties`

The parameters provided to the datepicker component.

## SkyAgGridLookupProperties

Type: Interface

    interface SkyAgGridLookupProperties {
      addClick?: (args: SkyLookupAddClickEventArgs) => void;
      ariaLabel?: string;
      ariaLabelledBy?: string;
      autocompleteAttribute?: string;
      data?: unknown[];
      debounceTime?: number;
      descriptorProperty?: string;
      disabled?: boolean;
      enableShowMore?: boolean;
      idProperty?: string;
      placeholderText?: string;
      propertiesToSearch?: string[];
      search?: SkyAutocompleteSearchFunction;
      searchAsync?: (args: SkyAutocompleteSearchAsyncArgs) => void;
      searchFilters?: SkyAutocompleteSearchFunctionFilter[];
      searchResultsLimit?: number;
      searchResultTemplate?: TemplateRef<unknown>;
      searchTextMinimumCharacters?: number;
      selectMode?: SkyLookupSelectModeType;
      showAddButton?: boolean;
      showMoreConfig?: SkyLookupShowMoreConfig;
    }

### Properties

#### `addClick?: (args: SkyLookupAddClickEventArgs) => void`

Fires when users select the button to add options to the list. When the button opens a modal, include `wrapperClass: 'ag-custom-component-popup'` in the [modal configuration](./modal.md#interface_sky-modal-configuration-interface) to ensure proper focus behavior.

#### `ariaLabel?: string`

The `aria-label` text for the lookup cell. If neither `ariaLabel` nor `ariaLabelledBy` are specified, the `aria-label` defaults to the column's `headerName`, `headerTooltip`, `field`, or `colId`.

#### `ariaLabelledBy?: string`

The ID of the HTML element that labels the lookup cell. If neither `ariaLabel` nor `ariaLabelledBy` are specified, the `aria-label` defaults to the column's `headerName`, `headerTooltip`, `field`, or `colId`.

#### `autocompleteAttribute?: string`

The value to provide to the autocomplete attribute on the form input.

#### `data?: unknown[]`

Warning: **Deprecated.** Use the `searchAsync` event emitter and callback instead to provide data to the lookup component.

The data source for the lookup cell to search when users enter text. You can specify static data, such as an array of objects, or you can pull data from a database.

#### `debounceTime?: number`

How many milliseconds to wait before searching while users enter text in the lookup field.

#### `descriptorProperty?: string`

The object property to display in the text input after users select an item in the dropdown list.

#### `disabled?: boolean`

Whether to disable the lookup cell.

#### `enableShowMore?: boolean`

Whether to enable users to open a picker where they can view all options.

#### `idProperty?: string`

The property that represents the object's unique identifier. Specifying this property enables token animations and more efficient rendering. This property is required when using `enableShowMore` and `searchAsync` together.

#### `placeholderText?: string`

Placeholder text to display in the lookup field.

#### `propertiesToSearch?: string[]`

Warning: **Deprecated.** Use the `searchAsync` event emitter and callback instead to provide data to the lookup component.

The array of object properties to search when using the `data` property and the built-in search function.

#### `search?: SkyAutocompleteSearchFunction`

Warning: **Deprecated.** Use the `searchAsync` event emitter and callback instead to provide searched data to the lookup component.

The function that dynamically manages the data to display in search results when users change the text in the lookup cell. The search function must return an array or a promise of an array.

#### `searchAsync?: (args: SkyAutocompleteSearchAsyncArgs) => void`

Fires when users enter new search information and allows results to be returned via an observable. The event is also fired when the "Show more" picker is opened without search text.

#### `searchFilters?: SkyAutocompleteSearchFunctionFilter[]`

Warning: **Deprecated.** Use the `searchAsync` event emitter and callback instead to provide searched data to the lookup component.

The array of functions to call against each search result. This filters the search results when using the `data` input and the default search function. When the `search` property specifies a custom search function, you must manually apply filters inside that function. The function must return `true` or `false` for each result to indicate whether to display it in the dropdown list.

#### `searchResultsLimit?: number`

The maximum number of search results to display in the dropdown list. By default, the lookup component displays all matching results. This property has no effect on the results in the "Show more" picker.

#### `searchResultTemplate?: TemplateRef<unknown>`

The template that formats each option in the dropdown list. The lookup component injects values into the template as `item` variables that reference all of the object properties of the search results.

#### `searchTextMinimumCharacters?: number`

The minimum number of characters that users must enter before the lookup component searches the data source and displays search results in the dropdown list.

#### `selectMode?: SkyLookupSelectModeType`

The ability for users to select one option or multiple options.

#### `showAddButton?: boolean`

Whether to display a button that lets users add options to the list.

#### `showMoreConfig?: SkyLookupShowMoreConfig`

Configuration options for the picker that displays all options.

## SkyCellEditorLookupParams

Type: Interface

    interface SkyCellEditorLookupParams {
      skyComponentProperties?: SkyAgGridLookupProperties;
    }

### Properties

#### `skyComponentProperties?: SkyAgGridLookupProperties`

The parameters provided to the lookup component.

## SkyAgGridNumberProperties

Type: Interface

    interface SkyAgGridNumberProperties {
      max?: number;
      min?: number;
    }

### Properties

#### `max?: number`

The maximum number that users can enter in the cell.

#### `min?: number`

The minimum number that users can enter in the cell.

## SkyAgGridTextProperties

Type: Interface

    interface SkyAgGridTextProperties {
      maxlength?: number;
    }

### Properties

#### `maxlength?: number`

The maximum length of the text that users can enter into the cell.

## SkyAgGridValidatorProperties

Type: Interface

    interface SkyAgGridValidatorProperties {
      validator?: (value: unknown, data?: unknown, rowIndex?: number | null) => boolean;
      validatorMessage?: string | Signal<string> | ((value: unknown, data?: unknown, rowIndex?: number | null) => string);
      valueResourceObservable?: (value: unknown, data?: unknown, rowIndex?: number | null) => Observable<string>;
    }

### Properties

#### `validator?: (value: unknown, data?: unknown, rowIndex?: number | null) => boolean`

A function that returns true if the value is valid, or false if it is not. Invalid values will be highlighted and display a validation message.

#### `validatorMessage?: string | Signal<string> | ((value: unknown, data?: unknown, rowIndex?: number | null) => string)`

A string signal function, a string, or a function that returns a string. The message to display when the value is invalid.

#### `valueResourceObservable?: (value: unknown, data?: unknown, rowIndex?: number | null) => Observable<string>`

An optional function that returns an observable that emits a string. Can be used with resources to localize the value displayed in the cell.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyAgGridWrapperHarness

Type: Class

`import { SkyAgGridWrapperHarness } from '@skyux/ag-grid/testing';`

Harness for interacting with SKY UX AG Grid components in tests.

### Methods

#### `getDisplayedColumnHeaderNames(): Promise<string[]>`

Retrieves the header names of the currently displayed columns.

#### Returns

`Promise<string[]>`

#### `getDisplayedColumnIds(): Promise<string[]>`

Retrieves the IDs of the currently displayed columns.

#### Returns

`Promise<string[]>`

#### `isGridReady(): Promise<boolean>`

Checks whether the grid is ready.

#### Returns

`Promise<boolean>`

#### `SkyAgGridWrapperHarness.with(filters: SkyAgGridWrapperHarnessFilters): HarnessPredicate<SkyAgGridWrapperHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyAgGridWrapperHarness` that meets certain criteria

#### Parameters

##### `filters: SkyAgGridWrapperHarnessFilters`

#### Returns

`HarnessPredicate<SkyAgGridWrapperHarness>`

## SkyAgGridWrapperHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyAgGridWrapperHarness` instances.

    interface SkyAgGridWrapperHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Basic setup (without data manager)

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridOptions, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-grid-basic-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule],
})
export class AgGridDataGridBasicExampleComponent {
  protected gridData = AG_GRID_DEMO_DATA;
  protected gridOptions: GridOptions;

  #columnDefs: ColDef[] = [
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];

  readonly #agGridSvc = inject(SkyAgGridService);

  constructor() {
    const gridOptions: GridOptions = {
      columnDefs: this.#columnDefs,
      rowSelection: { mode: 'singleRow' },
    };

    this.gridOptions = this.#agGridSvc.getGridOptions({
      gridOptions,
    });
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA = [
  {
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
  },
  {
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" [rowData]="gridData" />
</sky-ag-grid-wrapper>
```

### Basic multiselect setup (without data manager)

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridOptions, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';
import { of } from 'rxjs';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic multiselect setup (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-grid-basic-multiselect-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule],
})
export class AgGridDataGridBasicMultiselectExampleComponent {
  protected gridData = AG_GRID_DEMO_DATA;
  protected gridOptions: GridOptions;

  #columnDefs: ColDef[] = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector,
      cellRendererParams: {
        // Could be a SkyAppResourcesService.getString call that returns an observable.
        label: (data: AgGridDemoRow) => of(`Select ${data.name}`),
      },
    },
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];

  readonly #agGridSvc = inject(SkyAgGridService);

  constructor() {
    const gridOptions: GridOptions = {
      columnDefs: this.#columnDefs,
    };

    this.gridOptions = this.#agGridSvc.getGridOptions({
      gridOptions,
    });
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA = [
  {
    selected: false,
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    selected: false,
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    selected: false,
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
  },
  {
    selected: false,
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    selected: true,
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    selected: false,
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    selected: false,
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" [rowData]="gridData" />
</sky-ag-grid-wrapper>
```

### Data manager setup

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarModule, SkyFilterItemLookupSearchAsyncArgs } from '@skyux/filter-bar';
import { SkyListSummaryModule } from '@skyux/lists';

import { map } from 'rxjs';

import { AG_GRID_DEMO_DATA } from './data';
import { ExampleService } from './example.service';
import { SalesModalComponent } from './sales-modal.component';
import { ViewGridComponent } from './view-grid.component';

const SOURCE_ID = 'data_grid_data_manager_example_id';

/**
 * @title Data manager setup
 */
@Component({
  selector: 'app-ag-grid-data-grid-data-manager-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SkyDataManagerService],
  imports: [SkyDataManagerModule, SkyFilterBarModule, SkyListSummaryModule, ViewGridComponent],
})
export class AgGridDataGridDataManagerExampleComponent {
  protected items = AG_GRID_DEMO_DATA;
  protected salesModal = SalesModalComponent;

  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #exampleSvc = inject(ExampleService);

  protected readonly recordCount = toSignal(
    this.#dataManagerSvc.getDataSummaryUpdates(SOURCE_ID).pipe(map((summary) => summary.itemsMatching)),
    { initialValue: 0 },
  );

  constructor() {
    this.#dataManagerSvc.initDataManager({
      activeViewId: 'dataGridWithDataManagerView',
      dataManagerConfig: {
        sortOptions: [
          {
            id: 'az',
            label: 'Name (A - Z)',
            descending: false,
            propertyName: 'name',
          },
          {
            id: 'za',
            label: 'Name (Z - A)',
            descending: true,
            propertyName: 'name',
          },
        ],
      },
      defaultDataState: new SkyDataManagerState({
        filterData: {
          filters: {},
        },
        views: [
          {
            viewId: 'dataGridWithDataManagerView',
            displayedColumnIds: ['context', 'name', 'age', 'startDate', 'endDate', 'department', 'jobTitle'],
          },
        ],
      }),
    });
  }

  public onJobTitleSearchAsync(args: SkyFilterItemLookupSearchAsyncArgs): void {
    // In a real-world application the search service might return an Observable
    // created by calling HttpClient.get(). Assigning that Observable to the result
    // allows the lookup component to cancel the web request if it does not complete
    // before the user searches again.
    args.result = this.#exampleSvc.search(args.searchText);
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  id: string;
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA: AgGridDemoRow[] = [
  {
    id: '4b7f07b6-d8d3-41cd-84ad-f3ed51cee5c0',
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    id: 'aea50a38-aa1e-44e0-94b5-52d3f577767f',
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    id: 'e74afbe4-5016-4a20-9803-30a301835c4f',
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
    jobTitle: JOB_TITLES['Sales'][1],
  },
  {
    id: '0274faf9-388e-497d-bced-f2bef3eafcfd',
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    id: '09b7da69-0272-4fe0-ace3-658a6d8f175c',
    selected: true,
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    id: '3accf076-fff1-4229-bad3-7d2d42d2c42a',
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    id: 'a8456cf4-4f8d-40ee-a91a-ece9c2327fe4',
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-data-manager>
  <sky-data-manager-toolbar>
    <sky-filter-bar skyDataManagerFilterController>
      <sky-filter-item-modal
        filterId="hideSales"
        labelText="Hide sales"
        modalSize="small"
        [modalComponent]="salesModal"
      />
      <sky-filter-item-lookup
        filterId="jobTitle"
        labelText="Job title"
        searchDescriptorProperty="name"
        searchIdProperty="id"
        (searchAsync)="onJobTitleSearchAsync($event)"
      />
    </sky-filter-bar>
    <sky-list-summary>
      <sky-list-summary-item [labelText]="recordCount() === 1 ? 'Record' : 'Records'" [value]="recordCount()" />
    </sky-list-summary>
  </sky-data-manager-toolbar>
  <app-view-grid [items]="items" />
</sky-data-manager>
```

#### example.service.ts

```typescript
import { Injectable } from '@angular/core';
import { SkyFilterItemLookupSearchAsyncResult } from '@skyux/filter-bar';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { JOB_TITLES } from './data';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  #jobs = Object.values(JOB_TITLES).flat();

  public search(searchText: string): Observable<SkyFilterItemLookupSearchAsyncResult> {
    searchText = searchText.toUpperCase();

    const matchingJobs = this.#jobs.filter((job) => job.name?.toUpperCase().includes(searchText));

    // Simulate a network call with latency. A real-world application might
    // use Angular's HttpClient to create an Observable from a call to a
    // web service.
    return of({
      hasMore: false,
      items: matchingJobs,
      totalCount: matchingJobs.length,
    }).pipe(delay(800));
  }
}
```

#### filters.ts

```typescript
export interface Filters {
  jobTitle?: string;
  hideSales?: boolean;
}
```

#### sales-modal.component.html

```html
<sky-modal [headingText]="modalLabel">
  <sky-modal-content>
    <sky-checkbox labelText="Hide Sales employees" [(ngModel)]="hideSales" />
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-primary" type="button" (click)="applyFilters()">Apply</button>
    <button class="sky-btn sky-btn-link" type="button" (click)="cancel()">Cancel</button>
  </sky-modal-footer>
</sky-modal>
```

#### sales-modal.component.ts

```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyFilterBarFilterValue, SkyFilterItemModal, SkyFilterItemModalInstance } from '@skyux/filter-bar';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyModalModule } from '@skyux/modals';

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, SkyCheckboxModule, SkyModalModule],
})
export class SalesModalComponent implements SkyFilterItemModal {
  public readonly modalInstance = inject(SkyFilterItemModalInstance);

  protected hideSales = false;
  protected modalLabel: string;

  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #context = this.modalInstance.context;

  constructor() {
    this.modalLabel = this.#context.filterLabelText;

    if (this.#context.filterValue) {
      this.hideSales = !!this.#context.filterValue.value;
    }

    this.#changeDetectorRef.markForCheck();
  }

  protected applyFilters(): void {
    let result: SkyFilterBarFilterValue | undefined;

    if (this.hideSales) {
      result = {
        value: true,
        displayValue: 'True',
      };
    }

    this.modalInstance.save({ filterValue: result });
  }

  protected cancel(): void {
    this.modalInstance.cancel();
  }
}
```

#### view-grid.component.html

```html
<sky-data-view skyAgGridDataManagerAdapter [viewId]="viewId">
  <sky-ag-grid-wrapper>
    <ag-grid-angular [gridOptions]="gridOptions" />
  </sky-ag-grid-wrapper>
</sky-data-view>
```

#### view-grid.component.ts

```typescript
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarFilterState } from '@skyux/filter-bar';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridApi, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';

import { ContextMenuComponent } from './context-menu.component';
import { AgGridDemoRow, AutocompleteOption } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyDataManagerModule],
})
export class ViewGridComponent {
  public readonly items = input<AgGridDemoRow[]>([]);

  protected readonly viewId = 'dataGridWithDataManagerView';

  readonly #columnDefs: ColDef[] = [
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];

  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #dataState = toSignal(this.#dataManagerSvc.getDataStateUpdates(this.viewId), {
    initialValue: new SkyDataManagerState({}),
  });
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected readonly displayedItems = computed(() => this.#filterItems(this.#searchItems(this.items())));
  protected readonly gridOptions = inject(SkyAgGridService).getGridOptions({
    gridOptions: {
      columnDefs: this.#columnDefs,
      rowSelection: { mode: 'singleRow' },
      onGridReady: (params) => {
        this.#gridApi.set(params.api);
      },
      onGridPreDestroyed: () => {
        this.#gridApi.set(undefined);
      },
    },
  });

  constructor() {
    effect(() => {
      this.#dataManagerSvc.updateDataSummary(
        {
          totalItems: this.items().length,
          itemsMatching: this.displayedItems().length,
        },
        this.viewId,
      );
    });
    effect(() => {
      const gridApi = this.#gridApi();
      const rowData = this.displayedItems();
      gridApi?.setGridOption('rowData', rowData);
    });
    this.#dataManagerSvc.initDataView({
      id: this.viewId,
      name: 'Data Grid View',
      iconName: 'table',
      searchEnabled: true,
      columnPickerEnabled: true,
      columnOptions: [
        {
          id: 'context',
          label: '',
          alwaysDisplayed: true,
        },
        {
          id: 'name',
          label: 'Name',
          description: 'The name of the employee.',
        },
        {
          id: 'age',
          label: 'Age',
          description: 'The age of the employee.',
        },
        {
          id: 'startDate',
          label: 'Start date',
          description: 'The start date of the employee.',
        },
        {
          id: 'endDate',
          label: 'End date',
          description: 'The end date of the employee.',
        },
        {
          id: 'department',
          label: 'Department',
          description: 'The department of the employee',
        },
        {
          id: 'jobTitle',
          label: 'Title',
          description: 'The job title of the employee.',
        },
      ],
    });
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }

  #filterItems(items: AgGridDemoRow[]): AgGridDemoRow[] {
    let filteredItems = items;
    const filterState = this.#dataState().filterData?.filters as SkyFilterBarFilterState | undefined;

    if (filterState?.appliedFilters) {
      const filters = filterState.appliedFilters;
      const hideSales = filters.some((filter) => filter.filterId === 'hideSales' && !!filter.filterValue?.value);
      const jobTitleFilter = filters.find((f) => f.filterId === 'jobTitle');
      const selectedTypes: string[] = Array.isArray(jobTitleFilter?.filterValue?.value)
        ? (jobTitleFilter.filterValue.value as AutocompleteOption[]).map((v) => v.id)
        : [];

      filteredItems = items.filter((item: AgGridDemoRow) => {
        if (hideSales && item.department.name === 'Sales') {
          return false;
        }
        return !(selectedTypes.length && (!item.jobTitle || !selectedTypes.includes(item.jobTitle.id)));
      });
    }

    return filteredItems;
  }

  #searchItems(items: AgGridDemoRow[]): AgGridDemoRow[] {
    let searchedItems = items;
    const searchText = this.#dataState().searchText;

    if (searchText) {
      searchedItems = items.filter((item: AgGridDemoRow) => {
        let property: keyof typeof item;
        for (property in item) {
          if (Object.prototype.hasOwnProperty.call(item, property) && property === 'name') {
            const propertyText = item[property]?.toLowerCase();
            if (propertyText.includes(searchText.toLowerCase())) {
              return true;
            }
          }
        }

        return false;
      });
    }

    return searchedItems;
  }
}
```

### Data manager setup with multiselect

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarModule, SkyFilterItemLookupSearchAsyncArgs } from '@skyux/filter-bar';
import { SkyListSummaryModule } from '@skyux/lists';

import { map } from 'rxjs';

import { AG_GRID_DEMO_DATA } from './data';
import { ExampleService } from './example.service';
import { SalesModalComponent } from './sales-modal.component';
import { ViewGridComponent } from './view-grid.component';

const SOURCE_ID = 'data_grid_data_manager_multiselect_example_id';

/**
 * @title Data manager setup with multiselect
 */
@Component({
  selector: 'app-ag-grid-data-grid-data-manager-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SkyDataManagerService],
  imports: [SkyDataManagerModule, SkyFilterBarModule, SkyListSummaryModule, ViewGridComponent],
})
export class AgGridDataGridDataManagerMultiselectExampleComponent {
  protected items = AG_GRID_DEMO_DATA;
  protected salesModal = SalesModalComponent;

  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #exampleSvc = inject(ExampleService);

  protected readonly recordCount = toSignal(
    this.#dataManagerSvc.getDataSummaryUpdates(SOURCE_ID).pipe(map((summary) => summary.itemsMatching)),
    { initialValue: 0 },
  );

  constructor() {
    this.#dataManagerSvc.initDataManager({
      activeViewId: 'dataGridMultiselectWithDataManagerView',
      dataManagerConfig: {
        sortOptions: [
          {
            id: 'az',
            label: 'Name (A - Z)',
            descending: false,
            propertyName: 'name',
          },
          {
            id: 'za',
            label: 'Name (Z - A)',
            descending: true,
            propertyName: 'name',
          },
        ],
      },
      defaultDataState: new SkyDataManagerState({
        filterData: {
          filters: {},
        },
        views: [
          {
            viewId: 'dataGridMultiselectWithDataManagerView',
            displayedColumnIds: [
              'selected',
              'context',
              'name',
              'age',
              'startDate',
              'endDate',
              'department',
              'jobTitle',
            ],
          },
        ],
      }),
    });
  }

  public onJobTitleSearchAsync(args: SkyFilterItemLookupSearchAsyncArgs): void {
    // In a real-world application the search service might return an Observable
    // created by calling HttpClient.get(). Assigning that Observable to the result
    // allows the lookup component to cancel the web request if it does not complete
    // before the user searches again.
    args.result = this.#exampleSvc.search(args.searchText);
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  id: string;
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA: AgGridDemoRow[] = [
  {
    id: '4b7f07b6-d8d3-41cd-84ad-f3ed51cee5c0',
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    id: 'aea50a38-aa1e-44e0-94b5-52d3f577767f',
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    id: 'e74afbe4-5016-4a20-9803-30a301835c4f',
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
    jobTitle: JOB_TITLES['Sales'][1],
  },
  {
    id: '0274faf9-388e-497d-bced-f2bef3eafcfd',
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    id: '09b7da69-0272-4fe0-ace3-658a6d8f175c',
    selected: true,
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    id: '3accf076-fff1-4229-bad3-7d2d42d2c42a',
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    id: 'a8456cf4-4f8d-40ee-a91a-ece9c2327fe4',
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-data-manager>
  <sky-data-manager-toolbar>
    <sky-filter-bar skyDataManagerFilterController>
      <sky-filter-item-modal
        filterId="hideSales"
        labelText="Hide sales"
        modalSize="small"
        [modalComponent]="salesModal"
      />
      <sky-filter-item-lookup
        filterId="jobTitle"
        labelText="Job title"
        searchDescriptorProperty="name"
        searchIdProperty="id"
        (searchAsync)="onJobTitleSearchAsync($event)"
      />
    </sky-filter-bar>
    <sky-list-summary>
      <sky-list-summary-item [labelText]="recordCount() === 1 ? 'Record' : 'Records'" [value]="recordCount()" />
    </sky-list-summary>
  </sky-data-manager-toolbar>
  <app-view-grid [items]="items" />
</sky-data-manager>
```

#### example.service.ts

```typescript
import { Injectable } from '@angular/core';
import { SkyFilterItemLookupSearchAsyncResult } from '@skyux/filter-bar';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { JOB_TITLES } from './data';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  #jobs = Object.values(JOB_TITLES).flat();

  public search(searchText: string): Observable<SkyFilterItemLookupSearchAsyncResult> {
    searchText = searchText.toUpperCase();

    const matchingJobs = this.#jobs.filter((job) => job.name?.toUpperCase().includes(searchText));

    // Simulate a network call with latency. A real-world application might
    // use Angular's HttpClient to create an Observable from a call to a
    // web service.
    return of({
      hasMore: false,
      items: matchingJobs,
      totalCount: matchingJobs.length,
    }).pipe(delay(800));
  }
}
```

#### filters.ts

```typescript
export interface Filters {
  jobTitle?: string;
  hideSales?: boolean;
}
```

#### sales-modal.component.html

```html
<sky-modal [headingText]="modalLabel">
  <sky-modal-content>
    <sky-checkbox labelText="Hide Sales employees" [(ngModel)]="hideSales" />
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-primary" type="button" (click)="applyFilters()">Apply</button>
    <button class="sky-btn sky-btn-link" type="button" (click)="cancel()">Cancel</button>
  </sky-modal-footer>
</sky-modal>
```

#### sales-modal.component.ts

```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyFilterBarFilterValue, SkyFilterItemModal, SkyFilterItemModalInstance } from '@skyux/filter-bar';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyModalModule } from '@skyux/modals';

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, SkyCheckboxModule, SkyModalModule],
})
export class SalesModalComponent implements SkyFilterItemModal {
  public readonly modalInstance = inject(SkyFilterItemModalInstance);

  protected hideSales = false;
  protected modalLabel: string;

  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #context = this.modalInstance.context;

  constructor() {
    this.modalLabel = this.#context.filterLabelText;

    if (this.#context.filterValue) {
      this.hideSales = !!this.#context.filterValue.value;
    }

    this.#changeDetectorRef.markForCheck();
  }

  protected applyFilters(): void {
    let result: SkyFilterBarFilterValue | undefined;

    if (this.hideSales) {
      result = {
        value: true,
        displayValue: 'True',
      };
    }

    this.modalInstance.save({ filterValue: result });
  }

  protected cancel(): void {
    this.modalInstance.cancel();
  }
}
```

#### view-grid.component.html

```html
<sky-data-view skyAgGridDataManagerAdapter [viewId]="viewId">
  <sky-ag-grid-wrapper>
    <ag-grid-angular [gridOptions]="gridOptions" [overlayNoRowsTemplate]="noRowsTemplate" />
  </sky-ag-grid-wrapper>
</sky-data-view>
```

#### view-grid.component.ts

```typescript
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarFilterState } from '@skyux/filter-bar';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridApi, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';
import { of } from 'rxjs';

import { ContextMenuComponent } from './context-menu.component';
import { AgGridDemoRow, AutocompleteOption } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyDataManagerModule],
})
export class ViewGridComponent {
  public readonly items = input<AgGridDemoRow[]>([]);

  protected readonly viewId = 'dataGridMultiselectWithDataManagerView';

  protected noRowsTemplate = `<div class="sky-deemphasized">No results found.</div>`;

  readonly #columnDefs: ColDef[] = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector,
      suppressMovable: true,
      lockPosition: true,
      lockVisible: true,
      cellRendererParams: {
        // Could be a SkyAppResourcesService.getString call that returns an observable.
        label: (data: AgGridDemoRow) => of(`Select ${data.name}`),
      },
    },
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];
  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #dataState = toSignal(this.#dataManagerSvc.getDataStateUpdates(this.viewId), {
    initialValue: new SkyDataManagerState({}),
  });
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected readonly displayedItems = computed(() => this.#filterItems(this.#searchItems(this.items())));
  protected readonly gridOptions = inject(SkyAgGridService).getGridOptions({
    gridOptions: {
      columnDefs: this.#columnDefs,
      onGridReady: (params) => {
        this.#gridApi.set(params.api);
      },
      onGridPreDestroyed: () => {
        this.#gridApi.set(undefined);
      },
    },
  });

  constructor() {
    effect(() => {
      this.#dataManagerSvc.updateDataSummary(
        {
          totalItems: this.items().length,
          itemsMatching: this.displayedItems().length,
        },
        this.viewId,
      );
    });
    effect(() => {
      const gridApi = this.#gridApi();
      const rowData = this.displayedItems();
      gridApi?.setGridOption('rowData', rowData);
    });
    this.#dataManagerSvc.initDataView({
      id: this.viewId,
      name: 'Data Grid View',
      iconName: 'table',
      searchEnabled: true,
      columnPickerEnabled: true,
      columnOptions: [
        {
          id: 'selected',
          label: '',
          alwaysDisplayed: true,
        },
        {
          id: 'context',
          label: '',
          alwaysDisplayed: true,
        },
        {
          id: 'name',
          label: 'Name',
          description: 'The name of the employee.',
        },
        {
          id: 'age',
          label: 'Age',
          description: 'The age of the employee.',
        },
        {
          id: 'startDate',
          label: 'Start date',
          description: 'The start date of the employee.',
        },
        {
          id: 'endDate',
          label: 'End date',
          description: 'The end date of the employee.',
        },
        {
          id: 'department',
          label: 'Department',
          description: 'The department of the employee',
        },
        {
          id: 'jobTitle',
          label: 'Title',
          description: 'The job title of the employee.',
        },
      ],
    });
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }

  #filterItems(items: AgGridDemoRow[]): AgGridDemoRow[] {
    let filteredItems = items;
    const filterState = this.#dataState().filterData?.filters as SkyFilterBarFilterState | undefined;

    if (filterState?.appliedFilters) {
      const filters = filterState.appliedFilters;
      const hideSales = filters.some((filter) => filter.filterId === 'hideSales' && !!filter.filterValue?.value);
      const jobTitleFilter = filters.find((f) => f.filterId === 'jobTitle');
      const selectedTypes: string[] = Array.isArray(jobTitleFilter?.filterValue?.value)
        ? (jobTitleFilter.filterValue.value as AutocompleteOption[]).map((v) => v.id)
        : [];

      filteredItems = items.filter((item: AgGridDemoRow) => {
        if (hideSales && item.department.name === 'Sales') {
          return false;
        }
        return !(selectedTypes.length && (!item.jobTitle || !selectedTypes.includes(item.jobTitle.id)));
      });
    }

    return filteredItems;
  }

  #searchItems(items: AgGridDemoRow[]): AgGridDemoRow[] {
    let searchedItems = items;
    const searchText = this.#dataState().searchText;

    if (searchText) {
      searchedItems = items.filter((item: AgGridDemoRow) => {
        let property: keyof typeof item;
        for (property in item) {
          if (Object.prototype.hasOwnProperty.call(item, property) && property === 'name') {
            const propertyText = item[property]?.toLowerCase();
            if (propertyText.includes(searchText.toLowerCase())) {
              return true;
            }
          }
        }

        return false;
      });
    }

    return searchedItems;
  }
}
```

### Basic setup with inline help (without data manager)

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';

import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  ValueFormatterParams,
} from 'ag-grid-community';
import { of } from 'rxjs';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';
import { InlineHelpComponent } from './inline-help.component';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup with inline help (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-grid-inline-help-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkySearchModule, SkyToolbarModule],
})
export class AgGridDataGridInlineHelpExampleComponent {
  protected gridData = AG_GRID_DEMO_DATA;
  protected gridOptions: GridOptions;
  protected searchText = '';
  protected noRowsTemplate: string;

  #columnDefs: ColDef[] = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector,
      cellRendererParams: {
        // Could be a SkyAppResourcesService.getString call that returns an observable.
        label: (data: AgGridDemoRow) => of(`Select ${data.name}`),
      },
    },
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
      headerComponentParams: {
        inlineHelpComponent: InlineHelpComponent,
      },
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
      headerComponentParams: {
        inlineHelpComponent: InlineHelpComponent,
      },
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
      headerComponentParams: {
        inlineHelpComponent: InlineHelpComponent,
      },
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
      headerComponentParams: {
        inlineHelpComponent: InlineHelpComponent,
      },
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
      headerComponentParams: {
        inlineHelpComponent: InlineHelpComponent,
      },
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
      headerComponentParams: {
        inlineHelpComponent: InlineHelpComponent,
      },
    },
  ];

  #gridApi: GridApi | undefined;

  readonly #agGridSvc = inject(SkyAgGridService);
  readonly #changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.noRowsTemplate = `<div class="sky-theme-font-body-deemphasized-m">No results found.</div>`;

    this.gridOptions = this.#agGridSvc.getGridOptions({
      gridOptions: {
        columnDefs: this.#columnDefs,
        onGridReady: this.onGridReady.bind(this),
      },
    });

    this.#changeDetectorRef.markForCheck();
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.#gridApi = gridReadyEvent.api;
    this.#changeDetectorRef.markForCheck();
  }

  protected searchApplied(searchText: string | void): void {
    if (searchText) {
      this.searchText = searchText;
    } else {
      this.searchText = '';
    }
    if (this.#gridApi) {
      this.#gridApi.updateGridOptions({ quickFilterText: this.searchText });
      const displayedRowCount = this.#gridApi.getDisplayedRowCount();

      if (displayedRowCount > 0) {
        this.#gridApi.hideOverlay();
      } else {
        this.#gridApi.showNoRowsOverlay();
      }
    }
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA = [
  {
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
  },
  {
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-toolbar>
  <sky-toolbar-item>
    <sky-search
      [debounceTime]="250"
      [searchText]="searchText"
      (searchApply)="searchApplied($event)"
      (searchChange)="searchApplied($event)"
      (searchClear)="searchApplied($event)"
    />
  </sky-toolbar-item>
</sky-toolbar>

<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" [overlayNoRowsTemplate]="noRowsTemplate" [rowData]="gridData" />
</sky-ag-grid-wrapper>
```

#### inline-help.component.html

```html
<sky-help-inline
  ariaLabel="Information about {{ displayName }}"
  class="sky-control-help"
  (actionClick)="onHelpClick()"
/>
```

#### inline-help.component.ts

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkyAgGridHeaderInfo } from '@skyux/ag-grid';
import { SkyHelpInlineModule } from '@skyux/help-inline';

@Component({
  selector: 'app-inline-help',
  templateUrl: './inline-help.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyHelpInlineModule],
})
export class InlineHelpComponent {
  protected displayName: string | undefined;
  readonly #headerInfo = inject(SkyAgGridHeaderInfo);

  constructor() {
    this.displayName = this.#headerInfo.displayName;
  }

  protected onHelpClick(): void {
    alert(`Help was clicked for ${this.displayName}.`);
  }
}
```

### Basic setup with paging (without data manager)

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyPagingModule } from '@skyux/lists';

import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  ValueFormatterParams,
} from 'ag-grid-community';
import { filter, map } from 'rxjs/operators';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup with paging (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-grid-paging-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyPagingModule],
})
export class AgGridDataGridPagingExampleComponent {
  protected currentPage = 1;
  protected readonly pageSize = 3;

  #columnDefs: ColDef[] = [
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];

  protected gridData = AG_GRID_DEMO_DATA;
  protected gridOptions: GridOptions;

  #gridApi: GridApi | undefined;

  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #agGridSvc = inject(SkyAgGridService);
  readonly #router = inject(Router);

  readonly #pageFromRoute = toSignal(
    this.#activatedRoute.queryParamMap.pipe(map((params) => Number(params.get('page') ?? '1'))),
    { initialValue: 1 },
  );

  readonly #navigationEnd = toSignal(this.#router.events.pipe(filter((event) => event instanceof NavigationEnd)));

  constructor() {
    const gridOptions: GridOptions = {
      columnDefs: this.#columnDefs,
      onGridReady: (gridReadyEvent): void => {
        this.onGridReady(gridReadyEvent);
      },
      rowSelection: { mode: 'singleRow' },
      pagination: true,
      suppressPaginationPanel: true,
      paginationPageSize: this.pageSize,
    };

    this.gridOptions = this.#agGridSvc.getGridOptions({
      gridOptions,
    });

    effect(() => {
      const page = this.#pageFromRoute();
      this.currentPage = page;
      this.#gridApi?.paginationGoToPage(this.currentPage - 1);
    });

    effect(() => {
      this.#navigationEnd();
      const page = this.#activatedRoute.snapshot.paramMap.get('page');
      if (page) {
        this.currentPage = Number(page);
        this.#gridApi?.paginationGoToPage(this.currentPage - 1);
      }
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.#gridApi = gridReadyEvent.api;
    this.#gridApi.paginationGoToPage(this.currentPage - 1);
  }

  protected async onPageChange(page: number): Promise<void> {
    await this.#router.navigate(['.'], {
      relativeTo: this.#activatedRoute,
      queryParams: { page: page.toString(10) },
      queryParamsHandling: 'merge',
    });
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA = [
  {
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
  },
  {
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" [rowData]="gridData" />
</sky-ag-grid-wrapper>

<sky-paging
  [currentPage]="currentPage"
  [itemCount]="gridData.length"
  [pageSize]="pageSize"
  (currentPageChange)="onPageChange($event)"
/>
```

### Basic setup with template ref column type (without data manager)

#### example.component.ts (primary file)

```typescript
import { Component, TemplateRef, inject, viewChild } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

import { AG_GRID_DEMO_DATA } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup with template ref column type (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-grid-template-ref-column-example',
  templateUrl: './example.component.html',
  imports: [AgGridAngular, SkyAgGridModule],
})
export class AgGridDataGridTemplateRefColumnExampleComponent {
  protected readonly boldColumn = viewChild<TemplateRef<unknown>>('boldColumn');
  protected readonly emphasizedColumn = viewChild<TemplateRef<unknown>>('emphasizedColumn');
  protected gridOptions = inject(SkyAgGridService).getGridOptions({
    gridOptions: {
      columnDefs: [
        {
          field: 'name',
          headerName: 'Name',
          initialWidth: 150,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: SkyCellType.Number,
          maxWidth: 80,
          resizable: false,
        },
        {
          field: 'department',
          headerName: 'Department',
          type: SkyCellType.Template,
          cellRendererParams: {
            template: this.boldColumn,
          },
          initialWidth: 220,
        },
        {
          field: 'jobTitle',
          headerName: 'Title',
          type: SkyCellType.Template,
          cellRendererParams: {
            template: this.emphasizedColumn,
          },
          initialWidth: 220,
        },
      ],
      rowData: AG_GRID_DEMO_DATA,
    },
  });
}
```

#### data.ts

```typescript
export interface AgGridDemoRow {
  name: string;
  age: number;
  department: string;
  jobTitle: string;
}

export const AG_GRID_DEMO_DATA = [
  {
    name: 'Billy Bob',
    age: 55,
    department: 'Customer Support',
    jobTitle: 'Customer Support Representative',
    jobLevel: '🥈',
  },
  {
    name: 'Jane Deere',
    age: 33,
    department: 'Engineering',
    jobTitle: 'Software Engineer',
    jobLevel: '🥇',
  },
  {
    name: 'John Doe',
    age: 38,
    department: 'Engineering',
    jobTitle: 'UX Designer',
  },
  {
    name: 'David Smith',
    age: 51,
    department: 'Engineering',
    jobTitle: 'Software Engineer',
    jobLevel: '🥉',
  },
  {
    name: 'Emily Johnson',
    age: 41,
    department: 'Marketing',
    jobTitle: 'Customer Support Representative',
  },
  {
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: 'Marketing',
    jobTitle: 'Account Manager',
    jobLevel: '🥈',
  },
  {
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: 'Marketing',
    jobTitle: 'Social Media Coordinator',
    jobLevel: '🥇',
  },
];
```

#### example.component.html

```html
<ng-template #boldColumn let-value="value">
  <strong>{{ value }}</strong>
</ng-template>
<ng-template #emphasizedColumn let-value="value" let-row="row">
  @if (row['jobLevel']) {
  <span class="sky-theme-margin-right-s sky-pull-right">{{ row['jobLevel'] }}</span>
  }
  <em>{{ value }}</em>
</ng-template>
<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" />
</sky-ag-grid-wrapper>
```

### Basic setup with top scrollbar (without data manager)

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';

import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  ValueFormatterParams,
} from 'ag-grid-community';
import { of } from 'rxjs';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup with top scrollbar (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-grid-top-scroll-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkySearchModule, SkyToolbarModule],
})
export class AgGridDataGridTopScrollExampleComponent {
  protected gridData = AG_GRID_DEMO_DATA;
  protected gridOptions: GridOptions;
  protected searchText = '';
  protected noRowsTemplate = `<div class="sky-theme-font-body-deemphasized-m">No results found.</div>`;

  #columnDefs: ColDef[] = [
    {
      colId: 'context',
      maxWidth: 50,
      sortable: false,
      cellRenderer: ContextMenuComponent,
    },
    {
      field: 'selected',
      type: SkyCellType.RowSelector,
      cellRendererParams: {
        // Could be a SkyAppResourcesService.getString call that returns an observable.
        label: (data: AgGridDemoRow) => of(`Select ${data.name}`),
      },
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      maxWidth: 60,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      type: SkyCellType.Date,
      sort: 'asc',
    },
    {
      field: 'endDate',
      headerName: 'End date',
      type: SkyCellType.Date,
      valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>) => this.#endDateFormatter(params),
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete,
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete,
    },
  ];

  #gridApi: GridApi | undefined;

  readonly #agGridSvc = inject(SkyAgGridService);

  constructor() {
    this.gridOptions = this.#agGridSvc.getGridOptions({
      gridOptions: {
        columnDefs: this.#columnDefs,
        onGridReady: (gridReadyEvent): void => {
          this.onGridReady(gridReadyEvent);
        },
        context: {
          enableTopScroll: true,
        },
      },
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.#gridApi = gridReadyEvent.api;
  }

  protected searchApplied(searchText: string | void): void {
    this.searchText = searchText ?? '';

    if (this.#gridApi) {
      this.#gridApi.updateGridOptions({ quickFilterText: this.searchText });
      const displayedRowCount = this.#gridApi.getDisplayedRowCount();
      if (displayedRowCount > 0) {
        this.#gridApi.hideOverlay();
      } else {
        this.#gridApi.showNoRowsOverlay();
      }
    }
  }

  #endDateFormatter(params: ValueFormatterParams<AgGridDemoRow, Date>): string {
    return params.value
      ? params.value.toLocaleDateString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'N/A';
  }
}
```

#### context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="contextMenuAriaLabel">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="deleteAriaLabel" (click)="actionClicked('Delete')">Delete</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="markInactiveAriaLabel" (click)="actionClicked('Mark inactive')">
        Mark inactive
      </button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="moreInfoAriaLabel" (click)="actionClicked('More info')">
        More info
      </button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### context-menu.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { AgGridDemoRow } from './data';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDropdownModule],
})
export class ContextMenuComponent implements ICellRendererAngularComp {
  public contextMenuAriaLabel = '';
  public deleteAriaLabel = '';
  public markInactiveAriaLabel = '';
  public moreInfoAriaLabel = '';

  #name: string | undefined;

  public agInit(params: ICellRendererParams<AgGridDemoRow>): void {
    this.#name = params.data?.name;
    this.contextMenuAriaLabel = `Context menu for ${this.#name}`;
    this.deleteAriaLabel = `Delete ${this.#name}`;
    this.markInactiveAriaLabel = `Mark ${this.#name} inactive`;
    this.moreInfoAriaLabel = `More info for ${this.#name}`;
  }

  public refresh(): boolean {
    return false;
  }

  protected actionClicked(action: string): void {
    alert(`${action} clicked for ${this.#name}`);
  }
}
```

#### data.ts

```typescript
export interface AutocompleteOption {
  id: string;
  name: string;
}

export const DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing',
  },
  {
    id: '2',
    name: 'Sales',
  },
  {
    id: '3',
    name: 'Engineering',
  },
  {
    id: '4',
    name: 'Customer Support',
  },
];

export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
  Marketing: [
    {
      id: '1',
      name: 'Social Media Coordinator',
    },
    {
      id: '2',
      name: 'Blog Manager',
    },
    {
      id: '3',
      name: 'Events Manager',
    },
  ],
  Sales: [
    {
      id: '4',
      name: 'Business Development Representative',
    },
    {
      id: '5',
      name: 'Account Executive',
    },
  ],
  Engineering: [
    {
      id: '6',
      name: 'Software Engineer',
    },
    {
      id: '7',
      name: 'Senior Software Engineer',
    },
    {
      id: '8',
      name: 'Principal Software Engineer',
    },
    {
      id: '9',
      name: 'UX Designer',
    },
    {
      id: '10',
      name: 'Product Manager',
    },
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative',
    },
    {
      id: '12',
      name: 'Account Manager',
    },
    {
      id: '13',
      name: 'Customer Support Specialist',
    },
  ],
};

export interface AgGridDemoRow {
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA = [
  {
    selected: true,
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    selected: false,
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    selected: false,
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
  },
  {
    selected: false,
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    selected: true,
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    selected: false,
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    selected: false,
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### example.component.html

```html
<sky-toolbar>
  <sky-toolbar-item>
    <sky-search
      [debounceTime]="250"
      [searchText]="searchText"
      (searchApply)="searchApplied($event)"
      (searchChange)="searchApplied($event)"
      (searchClear)="searchApplied($event)"
    />
  </sky-toolbar-item>
</sky-toolbar>
<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" [overlayNoRowsTemplate]="noRowsTemplate" [rowData]="gridData" />
</sky-ag-grid-wrapper>
```
