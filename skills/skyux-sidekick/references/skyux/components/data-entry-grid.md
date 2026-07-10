---
Title: Data entry grid
Reference: https://developer.blackbaud.com/skyux/components/data-entry-grid
---

# Data entry grid

Data entry grids use the third-party [AG Grid library](https://www.ag-grid.com/angular-getting-started/) to provide a spreadsheet-like user interface to enter and edit large amounts of data. SKY UX provides styles, a service for default grid options, and components to render and edit cells. To learn about AG Grid and its capabilities, see the [getting-started guide](https://www.ag-grid.com/angular-getting-started/) and [additional documentation.](https://www.ag-grid.com/documentation-main/documentation.php)

## Usage

### Use when

Use data entry grids when:

- Users have experience working with spreadsheets.
- Users edit many values at the same time.
- The dataset is large.

### Don't use when

Don't use data entry grids when:

- Data is view-only. Use [data grid](./data-grid.md) instead.
- Users need guidance for the task they are completing.
- Users only edit a small number of values at a time.
- The dataset is small.

## Anatomy

1

Header cell

2

Editable cell

3

Focused cell

4

Help button (optional)

5

Read-only cell (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-entry-grid/anatomy.1d30011d0909147c5dc28b47af1a27ce.png)

## Options

### Disabled columns

To prevent users from editing the data in particular columns, disable the columns.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-entry-grid/options-disabled.b5acebc7cd358d14d1a2670ceb9c40c7.png)

### Help button

When you need to supplement a data entry grid column header with additional information but don't require persistent inline help, you can place a [help button](./help-inline.md) beside the header to invoke contextual user assistance.

### Validation

To call attention to incorrect formats in cells, such as incorrect dates or currency values, enable validation. The component handles the styling automatically, so you don't need to worry about rendering the styling, but you do need to provide validation messages.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/data-entry-grid/options-validation.3516b3b12310f005becf240cce76d1c6.png)

## Accessibility

To provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md), provide a `headerName` on every column. Screen readers announce this column header as users navigate cells. Without it, the row context is lost. To render a column without a visible header, set `headerHidden` to `true`. For example, in a column of row actions, this hides the column header in the visual layout while keeping `headerName` available to assistive technology.

When a lookup cell needs an accessible name that is distinct from the column header, set `ariaLabel` or `ariaLabelledBy` on `SkyAgGridLookupProperties`. Otherwise the cell falls back to the column's `headerName`, `headerTooltip`, `field`, or `colId`, in that order.

## Related information

### Components

- [Data grid](./data-grid.md)
- [Data manager](./data-manager.md)

### Guidelines

- [Form design](../design/guidelines/form-design.md)

## Installation

NPM package

`@skyux/ag-grid`[View in NPM](https://www.npmjs.com/package/@skyux/ag-grid) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/ag-grid/src/lib/modules/ag-grid/ag-grid.module.ts#L38)

Install with NPM

`npm install --save-exact @skyux/ag-grid`

## Setup

In addition to the `@skyux/ag-grid` package, you need to install the [`ag-grid-angular`](https://www.ag-grid.com/angular-grid/) and [`ag-grid-community`](https://www.npmjs.com/package/ag-grid-community) packages.

If you use the data entry grid with [the enterprise version of AG Grid instead of the free community version](https://www.ag-grid.com/documentation/angular/licensing/), the data entry grid turns on all enterprise features by default.

## AG Grid styles

To add the SKY UX styles for AG Grid to your SPA, run `ng g @skyux/packages:add-ag-grid-styles --project _my-app_`. For editable grids, include the class `sky-ag-grid-editable` on the `ag-grid-angular` element.

## AG Grid wrapper component

The `sky-ag-grid-wrapper` component provides WCAG-compliant keyboard navigation and sticky column headers for grids that use auto height. Use the `sky-ag-grid-wrapper` component to wrap all instances of `ag-grid-angular`. The wrapper does not constrain standard AG Grid functionality.

## Data manager directive

If you use a data entry grid within a [data manager component](./data-manager.md), the `skyAgGridDataManagerAdapter` directive can manage some standard interactions between the data entry grid and the data manager service. Add the directive should to the `sky-data-view` element that contains the data entry grid to initialize properties from the data state and keep the data entry grid in sync with the data state. When the data entry grid changes, the data state is updated, and when the data state changes, the data entry grid responds to the changes. The directive manages:

- column visibility and order
- selected rows
- active sort state when selected by column header

Other properties of the data state, such as filters and applying the sort, still need to be implemented for each use.

## Passing cell editor parameters

You can pass inputs to the SKY UX components used in cell editors via the [column definition's `cellEditorParams` property.](https://www.ag-grid.com/angular-data-grid/column-properties/) The component properties are nested under `skyComponentProperties`. All component properties should be supported, and you can see the defined types by importing `SkyCellEditorDatepickerProperties` or `SkyCellEditorAutocompleteProperties`. `cellEditorParams` can also be a function that returns a param object for dynamic editing params. See the demo for examples of using an object or a function.

## Using other SKY UX components in columns

For full control over a SKY UX component rendered in a cell, you can create your own [cell renderer](https://www.ag-grid.com/angular-data-grid/component-cell-renderer/) and place the component inside it. For example, to include a context menu in your grid, you create a cell renderer and place the context menu in the cell renderer. See the demo for an example.

Additionally, you can inject content into a SKY UX template ref column type. This is especially useful for data entry grids with row actions that need to be usable while editing neighboring cells. See the code examples for more information.

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

Combines [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Currency and [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Validator, where the value is displayed as a currency and passed to a validator function.

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

Combines [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Number and [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Validator, where the value is displayed as a number and passed to a validator function.

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

Cells in the column will be passed to a validator function that flags erroneous entries. You can set the validator function and message by passing a `SkyAgGridValidatorProperties` object as `skyComponentProperties` to [column definition's `cellRendererParams` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing), like `skyComponentProperties.validator` and `skyComponentProperties.validatorMessage`. [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Validator can be combined with other cell types, such as [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Autocomplete or [SkyCellType](./data-entry-grid.md#enum_sky-cell-type).Date, by using the array syntax for the [column definition's `type` property](https://www.ag-grid.com/angular-data-grid/column-properties/#reference-editing).

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

Warning: **Deprecated.** Use [SkyAgGridAutocompleteProperties](./data-entry-grid.md#interface_sky-ag-grid-autocomplete-properties) instead.

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

Warning: **Deprecated.** Use [SkyAgGridDatepickerProperties](./data-entry-grid.md#interface_sky-ag-grid-datepicker-properties) instead.

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
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalConfigurationInterface, SkyModalService } from '@skyux/modals';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridApi, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';
import { of } from 'rxjs';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';
import { EditModalContext } from './edit-modal-context';
import { EditModalComponent } from './edit-modal.component';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-entry-grid-basic-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkySearchModule, SkyToolbarModule],
})
export class AgGridDataEntryGridBasicExampleComponent {
  protected readonly gridData = signal<AgGridDemoRow[]>(AG_GRID_DEMO_DATA);

  readonly #columnDefs: ColDef[] = [
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
      headerName: 'Context menu',
      headerComponentParams: {
        headerHidden: true,
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      type: SkyCellType.Text,
      cellRendererParams: {
        skyComponentProperties: {
          validator: (value: string): boolean => String(value).length <= 10,
          validatorMessage: `Value exceeds maximum length`,
        },
      },
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      cellRendererParams: {
        skyComponentProperties: {
          validator: (value: number): boolean => value >= 18,
          validatorMessage: `Age must be 18+`,
        },
      },
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
    {
      colId: 'validationCurrency',
      field: 'validationCurrency',
      headerName: 'Validation currency',
      type: [SkyCellType.CurrencyValidator],
    },
    {
      colId: 'validationDate',
      field: 'validationDate',
      headerName: 'Validation date',
      type: [SkyCellType.Date, SkyCellType.Validator],
      cellRendererParams: {
        skyComponentProperties: {
          validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
          validatorMessage: 'Enter a future date',
        },
      },
    },
  ];

  readonly #modalSvc = inject(SkyModalService);
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected gridOptions = inject(SkyAgGridService).getGridOptions({
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
      const rowData = this.gridData();
      this.#gridApi()?.setGridOption('rowData', rowData);
    });
  }

  protected openModal(): void {
    const context = new EditModalContext();
    context.gridData = structuredClone(this.gridData());

    const options: SkyModalConfigurationInterface = {
      providers: [
        {
          provide: EditModalContext,
          useValue: context,
        },
      ],
      size: 'large',
    };

    const modalInstance = this.#modalSvc.open(EditModalComponent, options);

    modalInstance.closed.subscribe((result) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData.set(result.data as AgGridDemoRow[]);
      }
    });
  }

  protected searchApplied(searchText: string | void): void {
    this.#gridApi()?.setGridOption('quickFilterText', searchText ?? '');
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
  protected contextMenuAriaLabel = '';
  protected deleteAriaLabel = '';
  protected markInactiveAriaLabel = '';
  protected moreInfoAriaLabel = '';

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
    console.error(`${action} clicked for ${this.#name}`);
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

export const AG_GRID_DEMO_DATA: AgGridDemoRow[] = [
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

#### edit-modal-context.ts

```typescript
import { AgGridDemoRow } from './data';

export class EditModalContext {
  public gridData: AgGridDemoRow[] = [];
}
```

#### edit-modal.component.html

```html
<sky-modal headingText="Edit employee information">
  <sky-modal-content>
    <sky-ag-grid-wrapper>
      <ag-grid-angular class="sky-ag-grid-editable" [gridOptions]="gridOptions" [rowData]="gridData" />
    </sky-ag-grid-wrapper>
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-primary" type="button" (click)="instance.save(gridData)">Save</button>
    <button class="sky-btn sky-btn-link" type="button" (click)="instance.cancel()">Cancel</button>
  </sky-modal-footer>
</sky-modal>
<ng-template #markInactiveAction let-value="value" let-row="row">
  <app-mark-inactive [name]="row?.name" />
</ng-template>
```

#### edit-modal.component.ts

```typescript
import { ChangeDetectionStrategy, Component, TemplateRef, inject, signal, viewChild } from '@angular/core';
import {
  SkyAgGridAutocompleteProperties,
  SkyAgGridDatepickerProperties,
  SkyAgGridModule,
  SkyAgGridService,
  SkyCellType,
} from '@skyux/ag-grid';
import { SkyAutocompleteSelectionChange } from '@skyux/lookup';
import { SkyModalInstance, SkyModalModule } from '@skyux/modals';

import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  GridApi,
  ICellEditorParams,
  IRowNode,
  ModuleRegistry,
  NewValueParams,
} from 'ag-grid-community';

import { AgGridDemoRow, DEPARTMENTS, JOB_TITLES } from './data';
import { EditModalContext } from './edit-modal-context';
import { MarkInactiveComponent } from './mark-inactive.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyModalModule, MarkInactiveComponent],
})
export class EditModalComponent {
  protected readonly markInactiveAction = viewChild<TemplateRef<unknown>>('markInactiveAction');

  protected gridData = inject(EditModalContext).gridData;
  protected gridOptions = inject(SkyAgGridService).getEditableGridOptions({
    gridOptions: {
      columnDefs: [
        {
          colId: 'markInactiveAction',
          headerName: 'Mark inactive',
          type: SkyCellType.Template,
          editable: true,
          cellRendererParams: {
            template: this.markInactiveAction,
          },
        },
        {
          field: 'name',
          headerName: 'Name',
          type: SkyCellType.Text,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: string): boolean => String(value).length <= 10,
              validatorMessage: `Value exceeds maximum length`,
            },
          },
          cellEditorParams: {
            skyComponentProperties: {
              maxlength: 10,
            },
          },
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: SkyCellType.Number,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: number): boolean => value >= 18,
              validatorMessage: `Age must be 18+`,
            },
          },
          maxWidth: 60,
          cellEditorParams: {
            skyComponentProperties: {
              min: 18,
            },
          },
          editable: true,
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
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridDatepickerProperties } => {
            return {
              skyComponentProperties: { minDate: params.data.startDate },
            };
          },
        },
        {
          field: 'department',
          headerName: 'Department',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridAutocompleteProperties } => {
            return {
              skyComponentProperties: {
                data: DEPARTMENTS,
                selectionChange: (change: SkyAutocompleteSelectionChange): void => {
                  this.#departmentSelectionChange(change, params.node);
                },
              },
            };
          },
          onCellValueChanged: (event: NewValueParams): void => {
            if (event.newValue !== event.oldValue) {
              this.#clearJobTitle(event.node);
            }
          },
        },
        {
          field: 'jobTitle',
          headerName: 'Title',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridAutocompleteProperties } => {
            const selectedDepartment = params.data?.department?.name;

            const editParams: {
              skyComponentProperties: SkyAgGridAutocompleteProperties;
            } = { skyComponentProperties: { data: [] } };

            if (selectedDepartment) {
              editParams.skyComponentProperties.data = JOB_TITLES[selectedDepartment];
            }

            return editParams;
          },
        },
        {
          colId: 'validationCurrency',
          field: 'validationCurrency',
          headerName: 'Validation currency',
          type: [SkyCellType.CurrencyValidator],
          editable: true,
        },
        {
          colId: 'validationDate',
          field: 'validationDate',
          headerName: 'Validation date',
          type: [SkyCellType.Date, SkyCellType.Validator],
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
              validatorMessage: 'Please enter a future date',
            },
          },
          editable: true,
        },
      ],
      onGridReady: (gridReadyEvent): void => {
        this.#gridApi.set(gridReadyEvent.api);
      },
      onGridPreDestroyed: (): void => {
        this.#gridApi.set(undefined);
      },
      stopEditingWhenCellsLoseFocus: true,
    },
  });
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected readonly instance = inject(SkyModalInstance);

  #departmentSelectionChange(change: SkyAutocompleteSelectionChange, node: IRowNode<AgGridDemoRow>): void {
    if (change.selectedItem && change.selectedItem !== node.data?.department) {
      this.#clearJobTitle(node);
    }
  }

  #clearJobTitle(node: IRowNode<AgGridDemoRow> | null): void {
    if (node?.data) {
      node.data.jobTitle = undefined;
      this.#gridApi()?.applyTransaction({ update: [node.data] });
    }
  }
}
```

#### example.component.html

```html
<sky-toolbar>
  <sky-toolbar-item>
    <button class="sky-btn sky-btn-primary" type="button" (click)="openModal()">Edit</button>
  </sky-toolbar-item>
  <sky-toolbar-item>
    <sky-search
      [debounceTime]="250"
      (searchApply)="searchApplied($event)"
      (searchChange)="searchApplied($event)"
      (searchClear)="searchApplied($event)"
    />
  </sky-toolbar-item>
</sky-toolbar>
<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" />
</sky-ag-grid-wrapper>
```

#### mark-inactive.component.html

```html
<button
  type="button"
  class="sky-btn sky-btn-link-inline"
  [attr.aria-label]="markInactiveAriaLabel"
  (click)="markInactive()"
>
  Mark inactive
</button>
```

#### mark-inactive.component.ts

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-mark-inactive',
  templateUrl: './mark-inactive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkInactiveComponent {
  @Input()
  public set name(value: string | undefined) {
    this.#_name = value;
    if (value) {
      this.markInactiveAriaLabel = `Mark ${value} inactive`;
    }
  }

  public get name(): string | undefined {
    return this.#_name;
  }

  protected markInactiveAriaLabel = '';

  #_name: string | undefined;

  protected markInactive(): void {
    console.error(`Mark inactive action clicked for ${this.name}`);
  }
}
```

### Data manager setup

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarModule, SkyFilterItemLookupSearchAsyncArgs } from '@skyux/filter-bar';
import { SkyListSummaryModule } from '@skyux/lists';
import { SkyModalConfigurationInterface, SkyModalService } from '@skyux/modals';

import { map } from 'rxjs';

import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';
import { EditModalContext } from './edit-modal-context';
import { EditModalComponent } from './edit-modal.component';
import { ExampleService } from './example.service';
import { SalesModalComponent } from './sales-modal.component';
import { ViewGridComponent } from './view-grid.component';

const SOURCE_ID = 'data_entry_grid_data_manager_example_id';

/**
 * @title Data manager setup
 */
@Component({
  selector: 'app-ag-grid-data-entry-grid-data-manager-added-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SkyDataManagerService],
  imports: [ViewGridComponent, SkyDataManagerModule, SkyFilterBarModule, SkyListSummaryModule],
})
export class AgGridDataEntryGridDataManagerAddedExampleComponent {
  protected readonly items = signal<AgGridDemoRow[]>(AG_GRID_DEMO_DATA);

  protected readonly salesModal = SalesModalComponent;

  readonly #dataManagerConfig = {
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
  };

  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #exampleSvc = inject(ExampleService);
  readonly #modalSvc = inject(SkyModalService);

  protected readonly recordCount = toSignal(
    this.#dataManagerSvc.getDataSummaryUpdates(SOURCE_ID).pipe(map((summary) => summary.itemsMatching)),
    { initialValue: 0 },
  );

  constructor() {
    this.#dataManagerSvc.initDataManager({
      activeViewId: 'dataEntryGridWithDataManagerView',
      dataManagerConfig: this.#dataManagerConfig,
      defaultDataState: new SkyDataManagerState({}),
    });
  }

  protected openModal(): void {
    const context = new EditModalContext();
    context.gridData = structuredClone(this.items());

    this.#changeDetectorRef.markForCheck();

    const options: SkyModalConfigurationInterface = {
      providers: [
        {
          provide: EditModalContext,
          useValue: context,
        },
      ],
      size: 'large',
    };

    const modalInstance = this.#modalSvc.open(EditModalComponent, options);

    modalInstance.closed.subscribe((result) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.items.set(result.data as AgGridDemoRow[]);
      }
      this.#changeDetectorRef.markForCheck();
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
  validationCurrency?: string;
  validationDate?: string;
}

export const AG_GRID_DEMO_DATA: AgGridDemoRow[] = [
  {
    id: '4b7f07b6-d8d3-41cd-84ad-f3ed51cee5c0',
    selected: true,
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    id: 'aea50a38-aa1e-44e0-94b5-52d3f577767f',
    selected: false,
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    id: 'e74afbe4-5016-4a20-9803-30a301835c4f',
    selected: false,
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
    jobTitle: JOB_TITLES['Sales'][1],
  },
  {
    id: '0274faf9-388e-497d-bced-f2bef3eafcfd',
    selected: false,
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
    selected: false,
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    id: 'a8456cf4-4f8d-40ee-a91a-ece9c2327fe4',
    selected: false,
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
  },
];
```

#### edit-modal-context.ts

```typescript
import { AgGridDemoRow } from './data';

export class EditModalContext {
  public gridData: AgGridDemoRow[] = [];
}
```

#### edit-modal.component.html

```html
<sky-modal headingText="Edit employee information">
  <sky-modal-content>
    <sky-ag-grid-wrapper>
      <ag-grid-angular class="sky-ag-grid-editable" [gridOptions]="gridOptions" />
    </sky-ag-grid-wrapper>
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-primary" type="button" (click)="saveData()">Save</button>
    <button class="sky-btn sky-btn-link" type="button" (click)="instance.cancel()">Cancel</button>
  </sky-modal-footer>
</sky-modal>
```

#### edit-modal.component.ts

```typescript
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  SkyAgGridAutocompleteProperties,
  SkyAgGridDatepickerProperties,
  SkyAgGridModule,
  SkyAgGridService,
  SkyCellType,
} from '@skyux/ag-grid';
import { SkyAutocompleteSelectionChange } from '@skyux/lookup';
import { SkyModalInstance, SkyModalModule } from '@skyux/modals';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, GridApi, ICellEditorParams, IRowNode, ModuleRegistry } from 'ag-grid-community';

import { AgGridDemoRow, DEPARTMENTS, JOB_TITLES } from './data';
import { EditModalContext } from './edit-modal-context';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyModalModule],
})
export class EditModalComponent {
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected readonly gridData = inject(EditModalContext).gridData;
  protected readonly gridOptions = inject(SkyAgGridService).getEditableGridOptions({
    gridOptions: {
      columnDefs: [
        {
          field: 'name',
          headerName: 'Name',
        },
        {
          field: 'age',
          headerName: 'Age',
          type: SkyCellType.Number,
          maxWidth: 60,
          editable: true,
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
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridDatepickerProperties } => {
            return {
              skyComponentProperties: {
                minDate: params.data.startDate,
              },
            };
          },
        },
        {
          field: 'department',
          headerName: 'Department',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridAutocompleteProperties } => {
            return {
              skyComponentProperties: {
                data: DEPARTMENTS,
                selectionChange: (change): void => {
                  this.#departmentSelectionChange(change, params.node);
                },
              },
            };
          },
          onCellValueChanged: (event): void => {
            if (event.newValue !== event.oldValue) {
              this.#clearJobTitle(event.node);
            }
          },
        },
        {
          field: 'jobTitle',
          headerName: 'Title',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridAutocompleteProperties } => {
            const selectedDepartment = params.data?.department?.name;

            const editParams: {
              skyComponentProperties: SkyAgGridAutocompleteProperties;
            } = { skyComponentProperties: { data: [] } };

            if (selectedDepartment) {
              editParams.skyComponentProperties.data = JOB_TITLES[selectedDepartment];
            }

            return editParams;
          },
        },
        {
          colId: 'validationCurrency',
          field: 'validationCurrency',
          headerName: 'Validation currency',
          type: [SkyCellType.CurrencyValidator],
          editable: true,
        },
        {
          colId: 'validationDate',
          field: 'validationDate',
          headerName: 'Validation date',
          type: [SkyCellType.Date, SkyCellType.Validator],
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
              validatorMessage: 'Enter a future date.',
            },
          },
          editable: true,
        },
      ],
      onGridReady: (gridReadyEvent): void => {
        this.#gridApi.set(gridReadyEvent.api);
      },
      onGridPreDestroyed: (): void => {
        this.#gridApi.set(undefined);
      },
      rowData: this.gridData,
      stopEditingWhenCellsLoseFocus: true,
    },
  });
  protected readonly instance = inject(SkyModalInstance);

  protected saveData(): void {
    this.instance.save(this.gridData);
  }

  #departmentSelectionChange(change: SkyAutocompleteSelectionChange, node: IRowNode<AgGridDemoRow>): void {
    if (change.selectedItem && change.selectedItem !== node.data?.department) {
      this.#clearJobTitle(node);
    }
  }

  #clearJobTitle(node: IRowNode<AgGridDemoRow> | null): void {
    if (node?.data) {
      node.data.jobTitle = undefined;
      this.#gridApi()?.applyTransaction({ update: [node.data] });
    }
  }
}
```

#### example.component.html

```html
<sky-data-manager>
  <sky-data-manager-toolbar>
    <sky-data-manager-toolbar-left-item>
      <button class="sky-btn sky-btn-primary" type="button" (click)="openModal()">Edit</button>
    </sky-data-manager-toolbar-left-item>
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
  <app-view-grid [items]="items()" />
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

  protected readonly viewId = 'dataEntryGridWithDataManagerView';

  readonly #columnDefs: ColDef[] = [
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
      headerName: 'Context menu',
      headerComponentParams: {
        headerHidden: true,
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
    {
      field: 'validationCurrency',
      headerName: 'Validation currency',
      type: [SkyCellType.CurrencyValidator],
    },
    {
      field: 'validationDate',
      headerName: 'Validation date',
      type: [SkyCellType.Date, SkyCellType.Validator],
      cellRendererParams: {
        skyComponentProperties: {
          validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
          validatorMessage: 'Please enter a future date',
        },
      },
    },
  ];

  protected noRowsTemplate = `<div class="sky-theme-font-body-deemphasized-m">No results found.</div>`;
  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #dataState = toSignal(this.#dataManagerSvc.getDataStateUpdates(this.viewId), {
    initialValue: new SkyDataManagerState({}),
  });
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected readonly displayedItems = computed(() => this.#filterItems(this.#searchItems(this.items())));
  protected gridOptions = inject(SkyAgGridService).getGridOptions({
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
        {
          id: 'validationCurrency',
          label: 'Validation currency',
          description: 'An example column for currency validation.',
        },
        {
          id: 'validationDate',
          label: 'Validation date',
          description: 'An example column for date validation.',
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

### Setting initial focus for keyboard navigation

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyInputBoxModule } from '@skyux/forms';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';

import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Setting initial focus for keyboard navigation
 */
@Component({
  selector: 'app-ag-grid-data-entry-grid-focus-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyInputBoxModule],
})
export class AgGridDataEntryGridFocusExampleComponent {
  protected gridOptions = inject(SkyAgGridService).getEditableGridOptions({
    gridOptions: {
      columnDefs: [
        {
          field: 'name',
          headerName: 'Name',
          type: SkyCellType.Text,
          editable: true,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: string): boolean => String(value).length <= 10,
              validatorMessage: `Value exceeds maximum length`,
            },
          },
        },
        {
          field: 'age',
          headerName: 'Age',
          type: SkyCellType.Number,
          editable: true,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: number): boolean => value >= 18,
              validatorMessage: `Age must be 18+`,
            },
          },
          maxWidth: 60,
        },
        {
          field: 'startDate',
          headerName: 'Start date',
          type: SkyCellType.Date,
          editable: true,
          sort: 'asc',
        },
        {
          field: 'endDate',
          headerName: 'End date',
          type: SkyCellType.Date,
          editable: true,
          valueFormatter: (params: ValueFormatterParams<AgGridDemoRow, Date>): string => this.#endDateFormatter(params),
        },
        {
          field: 'department',
          headerName: 'Department',
          type: SkyCellType.Autocomplete,
          editable: true,
        },
        {
          field: 'jobTitle',
          headerName: 'Title',
          type: SkyCellType.Autocomplete,
          editable: true,
        },
        {
          colId: 'validationCurrency',
          field: 'validationCurrency',
          headerName: 'Validation currency',
          type: [SkyCellType.CurrencyValidator],
          editable: true,
        },
        {
          colId: 'validationDate',
          field: 'validationDate',
          headerName: 'Validation date',
          type: [SkyCellType.Date, SkyCellType.Validator],
          editable: true,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
              validatorMessage: 'Enter a future date',
            },
          },
        },
      ],
      focusGridInnerElement: (params) => {
        params.api.startEditingCell({
          rowIndex: 0,
          colKey: 'name',
        });
        return true;
      },
      rowData: AG_GRID_DEMO_DATA,
    },
  });

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
  validationCurrency?: AutocompleteOption;
  validationDate?: AutocompleteOption;
}

export const AG_GRID_DEMO_DATA: AgGridDemoRow[] = [
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
<sky-input-box labelText="Start here" helpPopoverContent="Then tab to the grid" stacked>
  <input type="text" />
</sky-input-box>
<div class="sky-theme-margin-bottom-m">
  <sky-ag-grid-wrapper>
    <ag-grid-angular class="sky-ag-grid-editable" [gridOptions]="gridOptions" />
  </sky-ag-grid-wrapper>
</div>
<sky-input-box labelText="Or start here" helpPopoverContent="Then tab backwards to the grid" stacked>
  <input type="text" />
</sky-input-box>
```

### Basic setup with inline help (without data manager)

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { SkyAgGridModule, SkyAgGridService, SkyCellType } from '@skyux/ag-grid';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalConfigurationInterface, SkyModalService } from '@skyux/modals';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, GridApi, GridOptions, ModuleRegistry, ValueFormatterParams } from 'ag-grid-community';
import { of } from 'rxjs';

import { ContextMenuComponent } from './context-menu.component';
import { AG_GRID_DEMO_DATA, AgGridDemoRow } from './data';
import { EditModalContext } from './edit-modal-context';
import { EditModalComponent } from './edit-modal.component';
import { InlineHelpComponent } from './inline-help.component';

ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * @title Basic setup with inline help (without data manager)
 */
@Component({
  selector: 'app-ag-grid-data-entry-grid-inline-help-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkySearchModule, SkyToolbarModule],
})
export class AgGridDataEntryGridInlineHelpExampleComponent {
  protected readonly gridData = signal<AgGridDemoRow[]>(AG_GRID_DEMO_DATA);
  protected gridOptions: GridOptions<AgGridDemoRow> = inject(SkyAgGridService).getGridOptions({
    gridOptions: {
      columnDefs: [
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
          headerName: 'Context menu',
          headerComponentParams: {
            headerHidden: true,
          },
        },
        {
          field: 'name',
          headerName: 'Name',
          type: SkyCellType.Text,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: string): boolean => String(value).length <= 10,
              validatorMessage: `Value exceeds maximum length`,
            },
          },
          headerComponentParams: {
            inlineHelpComponent: InlineHelpComponent,
          },
        },
        {
          field: 'age',
          headerName: 'Age',
          type: SkyCellType.Number,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: number): boolean => value >= 18,
              validatorMessage: `Age must be 18+`,
            },
          },
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
        {
          colId: 'validationCurrency',
          field: 'validationCurrency',
          headerName: 'Validation currency',
          type: [SkyCellType.CurrencyValidator],
          headerComponentParams: {
            inlineHelpComponent: InlineHelpComponent,
          },
        },
        {
          colId: 'validationDate',
          field: 'validationDate',
          headerName: 'Validation date',
          type: [SkyCellType.Date, SkyCellType.Validator],
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
              validatorMessage: 'Enter a future date',
            },
          },
          headerComponentParams: {
            inlineHelpComponent: InlineHelpComponent,
          },
        },
      ],
      onGridReady: (gridReadyEvent): void => {
        this.#gridApi.set(gridReadyEvent.api);
      },
      onGridPreDestroyed: (): void => {
        this.#gridApi.set(undefined);
      },
    },
  });

  readonly #gridApi = signal<GridApi | undefined>(undefined);
  readonly #modalSvc = inject(SkyModalService);

  constructor() {
    effect(() => {
      const rowData = this.gridData();
      this.#gridApi()?.setGridOption('rowData', rowData);
    });
  }

  protected openModal(): void {
    const context = new EditModalContext();
    context.gridData = structuredClone(this.gridData());

    const options: SkyModalConfigurationInterface = {
      providers: [
        {
          provide: EditModalContext,
          useValue: context,
        },
      ],
      size: 'large',
    };

    const modalInstance = this.#modalSvc.open(EditModalComponent, options);

    modalInstance.closed.subscribe((result) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData.set(result.data as AgGridDemoRow[]);
      }
    });
  }

  protected searchApplied(searchText: string | void): void {
    this.#gridApi()?.setGridOption('quickFilterText', searchText ?? '');
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
  validationCurrency?: string;
  validationDate?: string;
}

export const AG_GRID_DEMO_DATA: AgGridDemoRow[] = [
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

#### edit-modal-context.ts

```typescript
import { AgGridDemoRow } from './data';

export class EditModalContext {
  public gridData: AgGridDemoRow[] = [];
}
```

#### edit-modal.component.html

```html
<sky-modal headingText="Edit employee information">
  <sky-modal-content>
    <sky-ag-grid-wrapper>
      <ag-grid-angular class="sky-ag-grid-editable" [gridOptions]="gridOptions" [rowData]="gridData" />
    </sky-ag-grid-wrapper>
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-primary" type="button" (click)="saveData()">Save</button>
    <button class="sky-btn sky-btn-link" type="button" (click)="instance.cancel()">Cancel</button>
  </sky-modal-footer>
</sky-modal>
```

#### edit-modal.component.ts

```typescript
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  SkyAgGridAutocompleteProperties,
  SkyAgGridDatepickerProperties,
  SkyAgGridModule,
  SkyAgGridService,
  SkyCellType,
} from '@skyux/ag-grid';
import { SkyAutocompleteSelectionChange } from '@skyux/lookup';
import { SkyModalInstance, SkyModalModule } from '@skyux/modals';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridApi, ICellEditorParams, IRowNode, ModuleRegistry } from 'ag-grid-community';

import { AgGridDemoRow, DEPARTMENTS, JOB_TITLES } from './data';
import { EditModalContext } from './edit-modal-context';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyModalModule],
})
export class EditModalComponent {
  protected gridData = inject(EditModalContext).gridData;
  protected gridOptions = inject(SkyAgGridService).getEditableGridOptions({
    gridOptions: {
      columnDefs: [
        {
          field: 'name',
          headerName: 'Name',
          type: SkyCellType.Text,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: string): boolean => String(value).length <= 10,
              validatorMessage: `Value exceeds maximum length`,
            },
          },
          cellEditorParams: {
            skyComponentProperties: {
              maxlength: 10,
            },
          },
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: SkyCellType.Number,
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: number): boolean => value >= 18,
              validatorMessage: `Age must be 18+`,
            },
          },
          maxWidth: 60,
          cellEditorParams: {
            skyComponentProperties: {
              min: 18,
            },
          },
          editable: true,
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
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridDatepickerProperties } => {
            return {
              skyComponentProperties: { minDate: params.data.startDate },
            };
          },
        },
        {
          field: 'department',
          headerName: 'Department',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridAutocompleteProperties } => {
            return {
              skyComponentProperties: {
                data: DEPARTMENTS,
                selectionChange: (change): void => {
                  this.#departmentSelectionChange(change, params.node);
                },
              },
            };
          },
          onCellValueChanged: (event): void => {
            if (event.newValue !== event.oldValue) {
              this.#clearJobTitle(event.node);
            }
          },
        },
        {
          field: 'jobTitle',
          headerName: 'Title',
          type: SkyCellType.Autocomplete,
          editable: true,
          cellEditorParams: (
            params: ICellEditorParams<AgGridDemoRow>,
          ): { skyComponentProperties: SkyAgGridAutocompleteProperties } => {
            const selectedDepartment = params.data?.department?.name;
            const editParams: {
              skyComponentProperties: SkyAgGridAutocompleteProperties;
            } = { skyComponentProperties: { data: [] } };

            if (selectedDepartment) {
              editParams.skyComponentProperties.data = JOB_TITLES[selectedDepartment];
            }

            return editParams;
          },
        },
        {
          colId: 'validationCurrency',
          field: 'validationCurrency',
          headerName: 'Validation currency',
          type: [SkyCellType.CurrencyValidator],
          editable: true,
        },
        {
          colId: 'validationDate',
          field: 'validationDate',
          headerName: 'Validation date',
          type: [SkyCellType.Date, SkyCellType.Validator],
          cellRendererParams: {
            skyComponentProperties: {
              validator: (value: Date): boolean => !!value && value > new Date(1985, 9, 26),
              validatorMessage: 'Please enter a future date',
            },
          },
          editable: true,
        },
      ] as ColDef<AgGridDemoRow>[],
      onGridReady: (gridReadyEvent): void => {
        this.#gridApi.set(gridReadyEvent.api);
      },
      onGridPreDestroyed: (): void => {
        this.#gridApi.set(undefined);
      },
      stopEditingWhenCellsLoseFocus: true,
    },
  });
  readonly #gridApi = signal<GridApi | undefined>(undefined);

  protected readonly instance = inject(SkyModalInstance);

  protected saveData(): void {
    this.instance.save(this.gridData);
  }

  #departmentSelectionChange(change: SkyAutocompleteSelectionChange, node: IRowNode<AgGridDemoRow>): void {
    if (change.selectedItem && change.selectedItem !== node.data?.department) {
      this.#clearJobTitle(node);
    }
  }

  #clearJobTitle(node: IRowNode<AgGridDemoRow> | null): void {
    if (node?.data) {
      node.data.jobTitle = undefined;
      this.#gridApi()?.applyTransaction({ update: [node.data] });
    }
  }
}
```

#### example.component.html

```html
<sky-toolbar>
  <sky-toolbar-item>
    <button class="sky-btn sky-btn-primary" type="button" (click)="openModal()">Edit</button>
  </sky-toolbar-item>
  <sky-toolbar-item>
    <sky-search
      [debounceTime]="250"
      (searchApply)="searchApplied($event)"
      (searchChange)="searchApplied($event)"
      (searchClear)="searchApplied($event)"
    />
  </sky-toolbar-item>
</sky-toolbar>

<sky-ag-grid-wrapper>
  <ag-grid-angular [gridOptions]="gridOptions" />
</sky-ag-grid-wrapper>
```

#### inline-help.component.html

```html
<sky-help-inline
  class="sky-control-help"
  [ariaLabel]="'Information about ' + displayName"
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
