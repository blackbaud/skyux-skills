---
Title: Data manager
Reference: https://developer.blackbaud.com/skyux/components/data-manager
---

# Data manager

The data manager component and service manage the exploration of a data set across any number of SKY UX, third party, or custom views through state observables and data set- and view-level configs.

## Installation

NPM package

`@skyux/data-manager`[View in NPM](https://www.npmjs.com/package/@skyux/data-manager) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/data-manager/src/lib/modules/data-manager/data-manager.module.ts#L36)

Install with NPM

`npm install --save-exact @skyux/data-manager`

## Overview

The data manager is responsible for **the options applied to the data** but not the data itself. The data manager renders the toolbar and tracks the options selected in the toolbar, but the consuming SPA provides the views that display the data and applies filters and sorts to the data. This provides flexibility and control over the views and data loading while handling some repetitive tasks, such as arranging items in the toolbar and applying sticky settings.

The core pieces of the data manager are the config objects (SkyDataManagerConfig and SkyDataViewConfig), the states (SkyDataManagerState and the SkyDataViewStates it contains), and SkyDataManagerService. The data manager renders a toolbar with options based on the overall data manager config and the individual view configs. When changes are made in the toolbar, the data state is updated. These updates are made available through observables on the data manager service.

The data manager has one configuration object that includes options that apply across all views, and one configuration object per view that allows each view to be fine-tuned.

Similarly, the state includes information that could apply across all views or to a specific view. Options that dictate **what** data is displayed are in SkyDataManagerState because the data that is displayed should be the same across views. Options that dictate **how** data is displayed, such as what columns to display, are in SkyDataViewState objects. For example, if you display constituents in a grid view and a map view, the same constituents should be in both views, but the view determines the columns to display and whether to display the sort button.

## Usage with data entry grid

If you use a data entry grid within a data manager component, the `skyAgGridDataManagerAdapter` directive can manage some standard interactions between the data entry grid and the data manager service. Add the directive `skyAgGridDataManagerAdapter` to the `sky-data-view` element that contains the data entry grid to initialize properties from the data state and keep the data entry grid in sync with the data state. When the data entry grid changes, the data state is updated, and when the data state changes, the data entry grid responds to the changes. The directive manages:

- column visibility, order, and width
- selected rows
- active sort state when selected by column header

Other properties of the data state, such as filters and applying the sort, still need to be implemented for each use.

## SkyDataManagerModule

Type: Module

`import { SkyDataManagerModule } from '@skyux/data-manager';`

## SkyDataManagerComponent

Type: Component

Selector: `sky-data-manager`

The top-level data manager component. Provide `SkyDataManagerService` at this level.

### Inputs

#### `dock: InputSignal<SkyDataManagerDockType>`

How the data manager docks to the page. Use `fill` to dock the data manager to the container's size where the container is a `sky-page` component with its `layout` set to `fit`, or where the container is another element with a `relative` or `absolute` position and a fixed size. `sky-data-manager-toolbar` will be docked to the top of all other content.

Default: `"none"`

## SkyDataManagerService

Type: Service

The data manager service provides ways for data views, toolbar items, and more to stay up to date with the active view ID, data manager config, registered views and their configs, and data state. There are methods to get current values, update values, and get subscriptions to the changing values.

Provide this service at the component level for each instance of a data manager. Do not provide it at the module level or in `app-extras`. This allows multiple data managers to be used and self-contained.

### Methods

#### `getActiveViewIdUpdates(): Observable<string>`

Returns an observable of the active view ID that views and other data manager entities can subscribe to.

#### Returns

`Observable<string>`

#### `getCurrentDataManagerConfig(): SkyDataManagerConfig`

Returns the current `SkyDataManagerConfig`.

#### Returns

`SkyDataManagerConfig`

#### `getDataManagerConfigUpdates(): Observable<SkyDataManagerConfig>`

Returns an observable of data manager config changes that views and other data manager entities can subscribe to.

#### Returns

`Observable<SkyDataManagerConfig>`

#### `getDataStateUpdates(sourceId: string, updateFilter?: SkyDataManagerStateUpdateFilterArgs): Observable<SkyDataManagerState>`

Returns an observable of data state changes that views and other data manager entities can subscribe to. It excludes updates originating from the provided source. This allows subscribers to only respond to changes they did not create and helps prevent infinite loops of updates and responses.

#### Parameters

##### `sourceId: string`

The ID of the entity subscribing to data state updates. This can be any value you choose but should be unique within the data manager instance and should also be used when that entity updates the state.

##### `updateFilter?: SkyDataManagerStateUpdateFilterArgs`

#### Returns

`Observable<SkyDataManagerState>`

#### `getDataSummaryUpdates(sourceId: string): Observable<SkyDataManagerSummary>`

Returns an observable of data summary changes that views and other data manager entities can subscribe to. It excludes updates originating from the provided source. This allows subscribers to only respond to changes they did not create and helps prevent infinite loops of updates and responses.

#### Parameters

##### `sourceId: string`

The ID of the entity subscribing to data summary updates. This can be any value you choose but should be unique within the data manager instance and should also be used when that entity updates the summary.

#### Returns

`Observable<SkyDataManagerSummary>`

#### `getDataViewsUpdates(): Observable<SkyDataViewConfig[]>`

Returns an observable of data view config changes that views and other data manager entities can subscribe to.

#### Returns

`Observable<SkyDataViewConfig[]>`

#### `getViewById(viewId: string): SkyDataViewConfig | undefined`

Returns the `SkyDataViewConfig` for the given view ID.

#### Parameters

##### `viewId: string`

The ID of the view config to get.

#### Returns

`SkyDataViewConfig | undefined`

#### `initDataManager(args: SkyDataManagerInitArgs): void`

Initializes the data manager with the given settings and sets `isInitialized` to `true`. This must be called for the data manager to render.

#### Parameters

##### `args: SkyDataManagerInitArgs`

The initial active view ID, data manager config, and state to use for the data manager. If a settings key is provided, it checks for a saved data state in the SKY UI config service before using the default data state and saves any state changes to the service.

#### Returns

`void`

#### `initDataView(viewConfig: SkyDataViewConfig): void`

Initializes a view within the data manager. This must be called for each view for the views to appear within the data manager.

#### Parameters

##### `viewConfig: SkyDataViewConfig`

The [SkyDataViewConfig](./data-manager.md#interface_sky-data-view-config) settings for the view being registered.

#### Returns

`void`

#### `updateActiveViewId(id: string): void`

Updates the active view ID. The data manager changes the displayed view.

#### Parameters

##### `id: string`

The new active view ID.

#### Returns

`void`

#### `updateDataManagerConfig(value: SkyDataManagerConfig): void`

Updates the data manager config and emits a new value to entities subscribed to data config changes.

#### Parameters

##### `value: SkyDataManagerConfig`

The new `SkyDataManagerConfig` value.

#### Returns

`void`

#### `updateDataState(state: SkyDataManagerState, sourceId: string): void`

Updates the data state and emits a new value to entities subscribed to data state changes.

#### Parameters

##### `state: SkyDataManagerState`

The new `SkyDataManagerState` value.

##### `sourceId: string`

The ID of the entity updating the state. This can be any value you choose, but should be unique within the data manager instance and should also be used when that entity subscribes to state changes from `getDataStateUpdates`.

#### Returns

`void`

#### `updateDataSummary(summary: SkyDataManagerSummary, sourceId: string): void`

Updates the data summary and emits a new value to entities subscribed to data summary changes.

#### Parameters

##### `summary: SkyDataManagerSummary`

The new `SkyDataManagerSummary` value.

##### `sourceId: string`

The ID of the entity updating the summary. This can be any value you choose, but should be unique within the data manager instance and should also be used when that entity subscribes to summary changes from `getDataSummaryUpdates`.

#### Returns

`void`

#### `updateViewConfig(view: SkyDataViewConfig): void`

Updates the given view config. The registered view with the same ID is updated to the provided config, so include all properties regardless of whether they changed. If the view was not initialized already, no update happens.

#### Parameters

##### `view: SkyDataViewConfig`

The new `SkyDataViewConfig` containing all properties.

#### Returns

`void`

## SkyDataManagerToolbarComponent

Type: Component

Selector: `sky-data-manager-toolbar`

Renders a `sky-toolbar` with the contents specified by the active view's `SkyDataViewConfig` and the `SkyDataManagerToolbarLeftItemComponent`, `SkyDataManagerToolbarRightItemComponent`, and `SkyDataManagerToolbarSectionComponent` wrappers.

## SkyDataManagerToolbarSectionComponent

Type: Component

Selector: `sky-data-manager-toolbar-section`

A wrapper for items to be rendered in `SkyDataManagerToolbarComponent`. The contents are rendered in an additional toolbar row beneath the primary toolbar and above the multiselect toolbar (if present).

## SkyDataManagerToolbarPrimaryItemComponent

Type: Component

Selector: `sky-data-manager-toolbar-primary-item`

A wrapper for an item to be rendered in `SkyDataManagerToolbarComponent`. The contents are rendered as the first items in the toolbar and should be standard actions. Each item should be wrapped in its own `sky-data-manager-toolbar-primary-item`. The items render in the order they are in in the template.

## SkyDataManagerToolbarLeftItemComponent

Type: Component

Selector: `sky-data-manager-toolbar-left-item`

A wrapper for an item to be rendered in `SkyDataManagerToolbarComponent`. The contents are rendered after the standard toolbar actions and before the search box. Each item should be wrapped in its own `sky-data-manager-toolbar-left-item`. The items render in the order they are in in the template.

## SkyDataManagerToolbarRightItemComponent

Type: Component

Selector: `sky-data-manager-toolbar-right-item`

A wrapper for an item to be rendered in `SkyDataManagerToolbarComponent`. The contents are rendered in `sky-toolbar-view-actions` on the right side of the toolbar and before the view switcher icons (if present). Each item should be wrapped in its own `sky-data-manager-toolbar-right-item`. The items render in the order they are in in the template.

## SkyDataManagerFilterControllerDirective

Type: Directive

Selector: `[skyDataManagerFilterController]`

A directive applied to a filtering component that enables integration with a data manager.

## SkyDataViewComponent

Type: Component

Selector: `sky-data-view`

A data view is rendered within a data manager component. It can subscribe to data state changes from `SkyDataManagerService` and apply the filters, search text, and more to the data it displays.

### Inputs

#### `viewId: string | undefined`

Required

The configuration for the view. See the `SkyDataViewConfig` interface.

## SkyDataViewConfig

Type: Interface

The data view config contains settings that apply to the specific view, such as column picker options and the buttons to display in the toolbar.

    interface SkyDataViewConfig {
      additionalOptions?: Record<string, unknown>;
      columnOptions?: SkyDataManagerColumnPickerOption[];
      columnPickerEnabled?: boolean;
      columnPickerSortStrategy?: SkyDataManagerColumnPickerSortStrategy;
      filterButtonEnabled?: boolean;
      iconName?: string;
      id: string;
      multiselectToolbarEnabled?: boolean;
      name: string;
      onClearAllClick?: () => void;
      onSelectAllClick?: () => void;
      searchEnabled?: boolean;
      searchExpandMode?: string;
      searchHighlightEnabled?: boolean;
      searchPlaceholderText?: string;
      showFilterButtonText?: boolean;
      showSortButtonText?: boolean;
      sortEnabled?: boolean;
    }

### Properties

#### `additionalOptions?: Record<string, unknown>`

An untyped property that can track any view config information relevant to a data view that the existing options do not include.

#### `columnOptions?: SkyDataManagerColumnPickerOption[]`

The column data to pass to the column picker. Columns that are always displayed should be passed in addition to the optional columns. See [SkyDataManagerColumnPickerOption](./data-manager.md#interface_sky-data-manager-column-picker-option).

#### `columnPickerEnabled?: boolean`

Whether to display the column picker button for this view.

#### `columnPickerSortStrategy?: SkyDataManagerColumnPickerSortStrategy`

The strategy used to sort the options in the column picker. If no strategy is provided the columns will be sorted by selected then alphabetical.

#### `filterButtonEnabled?: boolean`

Warning: **Deprecated.** Use [filter bar](./filter-bar.md) in a data manager toolbar instead.

Whether to display the filter button for this view.

#### `iconName?: string`

The name of the Blackbaud SVG icon to display for this view in the view switcher. Required if you have more than one view.

#### `id: string`

The unique ID for this view.

#### `multiselectToolbarEnabled?: boolean`

Whether to display the multiselect toolbar for this view.

#### `name: string`

The name of the view. This is used in the ARIA label for the view switcher.

#### `onClearAllClick?: () => void`

The function called when a user selects the "Clear all" button on the multi-select toolbar. Update your displayed data to indicate it is not selected in this function.

#### `onSelectAllClick?: () => void`

The function called when a user selects the "Select all" button on the multi-select toolbar. Update your displayed data to indicate it is selected in this function.

#### `searchEnabled?: boolean`

Whether to display the search box for this view.

#### `searchExpandMode?: string`

Sets the `expandMode` property on the search box for this view. See the [search component](./search.md) for valid options and the default value.

#### `searchHighlightEnabled?: boolean`

Highlights text that matches the search text using the text highlight directive.

#### `searchPlaceholderText?: string`

Placeholder text to display in the search input until users enter search criteria. See the [search component](./search.md) for the default value.

#### `showFilterButtonText?: boolean`

Warning: **Deprecated.** Use [filter bar](./filter-bar.md) in a data manager toolbar instead.

Whether to include the "Filter" text on the displayed filter button for this view. If it is not set, no text appears.

#### `showSortButtonText?: boolean`

Whether to include the "Sort" text on the displayed sort button for this view. If it is not set, no text appears.

#### `sortEnabled?: boolean`

Whether to display the sort button in this view.

## SkyDataViewColumnWidths

Type: Interface

    interface SkyDataViewColumnWidths {
      sm: Record<string, number>;
      xs: Record<string, number>;
    }

### Properties

#### `sm: Record<string, number>`

A map of columnIds to column widths at the sm or larger breakpoint size.

#### `xs: Record<string, number>`

A map of columnIds to column widths at the xs breakpoint size.

## SkyDataViewState

Type: Class

Provides options for defining how data is displayed, such as which columns appear.

### Properties

#### `additionalData: any`

An untyped property that tracks any view-specific state information that is relevant to a data manager but that existing properties do not cover.

#### `columnIds: string[]`

The IDs of the columns able to be displayed for column-based views. This property is required when utilizing a grid-based view, a column picker, or both.

Default: `[]`

#### `columnWidths: SkyDataViewColumnWidths`

The widths of columns in column-based views for xs and sm+ breakpoints. If using sticky settings, the widths a user sets will be persisted.

#### `displayedColumnIds: string[]`

The IDs of the columns displayed for column-based views.

Default: `[]`

#### `viewId: string`

The ID of this view.

### Methods

#### `getViewStateOptions(): SkyDataViewStateOptions`

Returns the `SkyDataViewStateOptions` for the current view.

#### Returns

`SkyDataViewStateOptions`

## SkyDataViewStateOptions

Type: Interface

    interface SkyDataViewStateOptions {
      additionalData?: any;
      columnIds?: string[];
      columnWidths?: SkyDataViewColumnWidths;
      displayedColumnIds?: string[];
      viewId: string;
    }

### Properties

#### `additionalData?: any`

An untyped property that tracks any view-specific state information that is relevant to a data manager but that existing properties do not cover.

#### `columnIds?: string[]`

The IDs of the columns able to be displayed for column-based views. This property is required when utilizing a grid-based view, a column picker, or both.

#### `columnWidths?: SkyDataViewColumnWidths`

The widths of columns in column-based views for xs and sm+ breakpoints. If using sticky settings, the widths a user sets will be persisted.

#### `displayedColumnIds?: string[]`

The IDs of the columns displayed for column-based views.

#### `viewId: string`

The ID of this view.

## SkyDataManagerConfig

Type: Interface

The data manager config contains settings that apply to the data manager across all views, such as the sort and filter settings.

    interface SkyDataManagerConfig {
      additionalOptions?: any;
      filterModalComponent?: any;
      listDescriptor?: string;
      sortOptions?: SkyDataManagerSortOption[];
    }

### Properties

#### `additionalOptions?: any`

An untyped property that can track any config information relevant to a data manager that existing options do not include.

#### `filterModalComponent?: any`

Warning: **Deprecated.** Use [filter bar](./filter-bar.md) in a data manager toolbar instead.

The modal component to launch when the filter button is selected. The same filter options are used for all views, but views can use `SkyDataViewConfig` to indicate whether to display the filter button. The modal receives the `filterData` in the data state as context.

#### `listDescriptor?: string`

A descriptor for the data that the data manager manipulates. Use a plural term. The descriptor helps set the data manager's `aria-label` attributes for multiselect toolbars, search inputs, sort buttons, and filter buttons to provide text equivalents for screen readers [to support accessibility](./checkbox.md#accessibility). For example, when the descriptor is "constituents," the search input's `aria-label` is "Search constituents." For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

#### `sortOptions?: SkyDataManagerSortOption[]`

The sort options displayed in the sort dropdown. The same sort options are used for all views, but views can use `SkyDataViewConfig` to indicate whether to display the sort button.

## SkyDataManagerDockType

Type: Type alias

    type SkyDataManagerDockType = "none" | "fill"

## SkyDataManagerFilterData

Type: Interface

    interface SkyDataManagerFilterData {
      filters?: any;
      filtersApplied?: boolean;
    }

### Properties

#### `filters?: any`

The filter data used in the data manager. You may use any filter model that works for your data set and models. See the demo for an example.

#### `filtersApplied?: boolean`

Whether any filters are applied.

## SkyDataManagerInitArgs

Type: Interface

    interface SkyDataManagerInitArgs {
      activeViewId: string;
      dataManagerConfig: SkyDataManagerConfig;
      defaultDataState: SkyDataManagerState;
      settingsKey?: string;
    }

### Properties

#### `activeViewId: string`

The initial active view's ID.

#### `dataManagerConfig: SkyDataManagerConfig`

The initial configuration for the data manager. See the [SkyDataManagerConfig](./data-manager.md#interface_sky-data-manager-config) interface.

#### `defaultDataState: SkyDataManagerState`

The data state used if no settings key is provided or if no data state is saved in the SKY UI config service for the user. See the [SkyDataManagerState](./data-manager.md#class_sky-data-manager-state) interface.

#### `settingsKey?: string`

The unique key for the UI Config Service to retrieve stored settings from a database. The UI Config Service saves configuration settings for users to preserve the current data state. For more information about the UI Config Service, see [the sticky settings documentation](../learn/develop/sticky-settings/README.md).

## SkyDataManagerSortOption

Type: Interface

    interface SkyDataManagerSortOption {
      descending: boolean;
      id: string;
      label: string;
      propertyName: string;
    }

### Properties

#### `descending: boolean`

Whether to apply the sort in descending order.

#### `id: string`

An ID for the sort option.

#### `label: string`

The label to display in the sort dropdown.

#### `propertyName: string`

The data property to sort by.

## SkyDataManagerState

Type: Class

Provides options that control which data to display.

### Properties

#### `activeSortOption: SkyDataManagerSortOption | undefined`

The selected [SkyDataManagerSortOption](./data-manager.md#interface_sky-data-manager-sort-option) to apply.

#### `additionalData: any`

An untyped property that tracks any state information that's relevant to a data manager but that the existing properties do not cover.

#### `filterData: SkyDataManagerFilterData | undefined`

The state of the filters.

#### `onlyShowSelected: boolean | undefined`

Whether to display only the selected rows or objects. The multiselect toolbar uses this property.

#### `searchText: string | undefined`

The search text to apply.

#### `selectedIds: string[] | undefined`

The currently selected rows or objects.

#### `views: SkyDataViewState[]`

The states of the individual views.

Default: `[]`

### Methods

#### `addOrUpdateView(viewId: string, view: SkyDataViewState): SkyDataManagerState`

Adds a `SkyDataViewState` to a view or updates an existing view.

#### Parameters

##### `viewId: string`

The ID for the view.

##### `view: SkyDataViewState`

The `SkyDataViewState` option to add or update.

#### Returns

`SkyDataManagerState`

#### `getStateOptions(): SkyDataManagerStateOptions`

Returns the `SkyDataManagerStateOptions` for the data manager.

#### Returns

`SkyDataManagerStateOptions`

#### `getViewStateById(viewId: string): SkyDataViewState | undefined`

Returns the `SkyDataViewState` for the specified view.

#### Parameters

##### `viewId: string`

The ID for the view.

#### Returns

`SkyDataViewState | undefined`

## SkyDataManagerStateOptions

Type: Interface

    interface SkyDataManagerStateOptions {
      activeSortOption?: SkyDataManagerSortOption;
      additionalData?: any;
      filterData?: SkyDataManagerFilterData;
      onlyShowSelected?: boolean;
      searchText?: string;
      selectedIds?: string[];
      views?: SkyDataViewStateOptions[];
    }

### Properties

#### `activeSortOption?: SkyDataManagerSortOption`

The selected [SkyDataManagerSortOption](./data-manager.md#interface_sky-data-manager-sort-option) to apply.

#### `additionalData?: any`

An untyped property that tracks any state information that's relevant to a data manager but that the existing properties do not cover.

#### `filterData?: SkyDataManagerFilterData`

The state of the filters.

#### `onlyShowSelected?: boolean`

Whether to display only the selected rows or objects. The multiselect toolbar uses this property.

#### `searchText?: string`

The search text to apply.

#### `selectedIds?: string[]`

The currently selected rows or objects.

#### `views?: SkyDataViewStateOptions[]`

The states of the individual views.

## SkyDataManagerStateUpdateFilterArgs

Type: Interface

Optional arguments to pass to `getDataStateUpdates`. Provide either a list of properties to filter on OR a custom comparator.

    interface SkyDataManagerStateUpdateFilterArgs {
      comparator?: (state1: SkyDataManagerState, state2: SkyDataManagerState) => boolean;
      properties?: string[];
    }

### Properties

#### `comparator?: (state1: SkyDataManagerState, state2: SkyDataManagerState) => boolean`

A comparator function called to test if the new `SkyDataManagerState` is distinct from the previous.

#### `properties?: string[]`

A list of `SkyDataManagerState` properties to compare to test if the new `SkyDataManagerState` is distinct from the previous. This allows you to subscribe to changes for only the provided properties.

## SkyDataManagerColumnPickerOption

Type: Interface

The options to display in a view's column picker.

    interface SkyDataManagerColumnPickerOption {
      alwaysDisplayed?: boolean;
      description?: string;
      id: string;
      initialHide?: boolean;
      label: string;
    }

### Properties

#### `alwaysDisplayed?: boolean`

Whether a column is always visible and is not listed as an option in the column picker. For example, a context menu column may always be visible.

#### `description?: string`

The description text rendered beneath the column label in the column picker.

#### `id: string`

The ID of the corresponding column.

#### `initialHide?: boolean`

Initially hide the column when it is added to the grid unless given in the view state's `displayedColumnIds`. When enabled, this column will not be automatically added to a view's state when this column is recognized as being missing from an initial data state or a data state returned via the SKY UI config service.

#### `label: string`

The label to display in the column picker.

## SkyDataManagerColumnPickerSortStrategy

Type: Enumeration

These options specify the sorting strategy applied to columns when `columnPickerEnabled` is enabled.

    enum SkyDataManagerColumnPickerSortStrategy {
      None = "none",
      SelectedThenAlphabetical = "selectedThenAlphabetical",
    }

### Properties

#### `SkyDataManagerColumnPickerSortStrategy.None`

No sorting is applied to the columns.

#### `SkyDataManagerColumnPickerSortStrategy.SelectedThenAlphabetical`

If `sortEnabled` is set to `true`, then the selected columns are displayed before the unselected columns. Unselected columns are sorted alphabetically. If `sortEnabled` is set to `false`, then the columns are displayed in the order specified by `columnOptions`.

## SkyDataManagerFilterModalContext

Type: Class

Sets the state of the filters.

### Properties

#### `filterData: SkyDataManagerFilterData | undefined`

Sets the state of the filters.

## SkyDataManagerSummary

Type: Interface

Contains summary details of the data displayed within the data manager.

    interface SkyDataManagerSummary {
      itemsMatching: number;
      totalItems: number;
    }

### Properties

#### `itemsMatching: number`

The total number of items that match the search and filter criteria.

#### `totalItems: number`

The total number of items in the data set.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyDataManagerHarness

Type: Class

`import { SkyDataManagerHarness } from '@skyux/data-manager/testing';`

Harness to interact with a data manager toolbar section component in tests.

### Methods

#### `getDockType(): Promise<string>`

Gets the type of dock style on the data manager.

#### Returns

`Promise<string>`

#### `getToolbar(filter?: SkyDataManagerToolbarHarnessFilters): Promise<SkyDataManagerToolbarHarness>`

Gets a harness for a data manager toolbar that meets certain criteria.

#### Parameters

##### `filter?: SkyDataManagerToolbarHarnessFilters`

#### Returns

`Promise<SkyDataManagerToolbarHarness>`

#### `getView(filter: SkyDataViewHarnessFilters): Promise<SkyDataViewHarness>`

Gets a specific data view based on the filter criteria.

#### Parameters

##### `filter: SkyDataViewHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDataViewHarness>`

#### `getViews(filters?: SkyDataViewHarnessFilters): Promise<SkyDataViewHarness[]>`

Gets an array of data views based on the filter criteria. If no filter is provided, returns all data views.

#### Parameters

##### `filters?: SkyDataViewHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDataViewHarness[]>`

#### `SkyDataManagerHarness.with(filters: SkyDataManagerHarnessFilters): HarnessPredicate<SkyDataManagerHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerHarness>`

## SkyDataManagerHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerHarness` instances.

    interface SkyDataManagerHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDataManagerToolbarHarness

Type: Class

`import { SkyDataManagerToolbarHarness } from '@skyux/data-manager/testing';`

Harness for interacting with a data manager toolbar component in tests.

### Methods

#### `clickClearAll(): Promise<void>`

Clicks the data manager clear all button. Throws an error if the multiselect toolbar is turned off.

#### Returns

`Promise<void>`

#### `clickSelectAll(): Promise<void>`

Clicks the data manager select all button. Throws an error if the multiselect toolbar is turned off.

#### Returns

`Promise<void>`

#### `getFilterButton(): Promise<SkyFilterButtonHarness | null>`

Warning: **Deprecated.** Use [filter bar](./filter-bar.md) in a data manager toolbar instead.

Gets a harness for the data manager filter button.

#### Returns

`Promise<SkyFilterButtonHarness | null>`

#### `getLeftItem(filter: SkyDataManagerToolbarLeftItemHarnessFilters): Promise<SkyDataManagerToolbarLeftItemHarness>`

Gets a specific data manager toolbar left item based on the filter criteria.

#### Parameters

##### `filter: SkyDataManagerToolbarLeftItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarLeftItemHarness>`

#### `getLeftItems(filters?: SkyDataManagerToolbarLeftItemHarnessFilters): Promise<SkyDataManagerToolbarLeftItemHarness[]>`

Gets an array of data manager toolbar left items based on the filter criteria. If no filter is provided, returns all data manager toolbar left items.

#### Parameters

##### `filters?: SkyDataManagerToolbarLeftItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarLeftItemHarness[]>`

#### `getOnlyShowSelected(): Promise<SkyCheckboxHarness | null>`

Gets a harness for the only show selected checkbox.

#### Returns

`Promise<SkyCheckboxHarness | null>`

#### `getPrimaryItem(filter: SkyDataManagerToolbarPrimaryItemHarnessFilters): Promise<SkyDataManagerToolbarPrimaryItemHarness>`

Gets a specific data manager toolbar primary item based on the filter criteria.

#### Parameters

##### `filter: SkyDataManagerToolbarPrimaryItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarPrimaryItemHarness>`

#### `getPrimaryItems(filters?: SkyDataManagerToolbarPrimaryItemHarnessFilters): Promise<SkyDataManagerToolbarPrimaryItemHarness[]>`

Gets an array of data manager toolbar primary items based on the filter criteria. If no filter is provided, returns all data manager toolbar primary items.

#### Parameters

##### `filters?: SkyDataManagerToolbarPrimaryItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarPrimaryItemHarness[]>`

#### `getRightItem(filter: SkyDataManagerToolbarRightItemHarnessFilters): Promise<SkyDataManagerToolbarRightItemHarness>`

Gets a specific data manager toolbar right item based on the filter criteria.

#### Parameters

##### `filter: SkyDataManagerToolbarRightItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarRightItemHarness>`

#### `getRightItems(filters?: SkyDataManagerToolbarRightItemHarnessFilters): Promise<SkyDataManagerToolbarRightItemHarness[]>`

Gets an array of data manager toolbar right items based on the filter criteria. If no filter is provided, returns all data manager toolbar right items.

#### Parameters

##### `filters?: SkyDataManagerToolbarRightItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarRightItemHarness[]>`

#### `getSearch(): Promise<SkySearchHarness | null>`

Gets the data manager search harness.

#### Returns

`Promise<SkySearchHarness | null>`

#### `getSection(filter: SkyDataManagerToolbarSectionHarnessFilters): Promise<SkyDataManagerToolbarSectionHarness>`

Gets a specific toolbar section based on the filter criteria.

#### Parameters

##### `filter: SkyDataManagerToolbarSectionHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarSectionHarness>`

#### `getSections(filters?: SkyDataManagerToolbarSectionHarnessFilters): Promise<SkyDataManagerToolbarSectionHarness[]>`

Gets an array of toolbar sections based on the filter criteria. If no filter is provided, returns all toolbar sections.

#### Parameters

##### `filters?: SkyDataManagerToolbarSectionHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDataManagerToolbarSectionHarness[]>`

#### `getSortButton(): Promise<SkySortHarness | null>`

Gets a harness for the data manager sort button.

#### Returns

`Promise<SkySortHarness | null>`

#### `getViewActions(): Promise<SkyRadioGroupHarness | null>`

Gets the harness to interact with the data manager toolbar's view actions.

#### Returns

`Promise<SkyRadioGroupHarness | null>`

#### `openColumnPicker(): Promise<SkyDataManagerColumnPickerHarness>`

Opens the data manager column picker and returns the harness. Throws an error if the column picker is turned off.

#### Returns

`Promise<SkyDataManagerColumnPickerHarness>`

#### `SkyDataManagerToolbarHarness.with(filters: SkyDataManagerToolbarHarnessFilters): HarnessPredicate<SkyDataManagerToolbarHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerToolbarHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerToolbarHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerToolbarHarness>`

## SkyDataManagerToolbarHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerToolbarHarness` instances.

    interface SkyDataManagerToolbarHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDataManagerToolbarSectionHarness

Type: Class

`import { SkyDataManagerToolbarSectionHarness } from '@skyux/data-manager/testing';`

Harness to interact with a data manager toolbar section component in tests.

### Methods

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

#### `SkyDataManagerToolbarSectionHarness.with(filters: SkyDataManagerToolbarSectionHarnessFilters): HarnessPredicate<SkyDataManagerToolbarSectionHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerToolbarSectionHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerToolbarSectionHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerToolbarSectionHarness>`

## SkyDataManagerToolbarSectionHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerToolbarSectionHarness` instances.

    interface SkyDataManagerToolbarSectionHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDataManagerToolbarPrimaryItemHarness

Type: Class

`import { SkyDataManagerToolbarPrimaryItemHarness } from '@skyux/data-manager/testing';`

Harness to interact with a data manager toolbar primary item component in tests.

### Methods

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

#### `SkyDataManagerToolbarPrimaryItemHarness.with(filters: SkyDataManagerToolbarPrimaryItemHarnessFilters): HarnessPredicate<SkyDataManagerToolbarPrimaryItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerToolbarPrimaryItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerToolbarPrimaryItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerToolbarPrimaryItemHarness>`

## SkyDataManagerToolbarPrimaryItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerToolbarPrimaryItemHarness` instances.

    interface SkyDataManagerToolbarPrimaryItemHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDataManagerToolbarLeftItemHarness

Type: Class

`import { SkyDataManagerToolbarLeftItemHarness } from '@skyux/data-manager/testing';`

Harness to interact with a data manager toolbar left item component in tests.

### Methods

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

#### `SkyDataManagerToolbarLeftItemHarness.with(filters: SkyDataManagerToolbarLeftItemHarnessFilters): HarnessPredicate<SkyDataManagerToolbarLeftItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerToolbarLeftItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerToolbarLeftItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerToolbarLeftItemHarness>`

## SkyDataManagerToolbarLeftItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerToolbarLeftItemHarness` instances.

    interface SkyDataManagerToolbarLeftItemHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDataManagerToolbarRightItemHarness

Type: Class

`import { SkyDataManagerToolbarRightItemHarness } from '@skyux/data-manager/testing';`

Harness to interact with a data manager toolbar right item component in tests.

### Methods

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

#### `SkyDataManagerToolbarRightItemHarness.with(filters: SkyDataManagerToolbarRightItemHarnessFilters): HarnessPredicate<SkyDataManagerToolbarRightItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerToolbarRightItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerToolbarRightItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerToolbarRightItemHarness>`

## SkyDataManagerToolbarRightItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerToolbarRightItemHarness` instances.

    interface SkyDataManagerToolbarRightItemHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDataViewHarness

Type: Class

`import { SkyDataViewHarness } from '@skyux/data-manager/testing';`

Harness to interact with a data manager view component in tests.

### Methods

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

#### `SkyDataViewHarness.with(filters: SkyDataViewHarnessFilters): HarnessPredicate<SkyDataViewHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataViewHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataViewHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataViewHarness>`

## SkyDataViewHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataViewHarness` instances.

    interface SkyDataViewHarnessFilters {
      dataSkyId?: string | RegExp;
      viewId?: string;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `viewId?: string`

## SkyDataManagerColumnPickerHarness

Type: Class

`import { SkyDataManagerColumnPickerHarness } from '@skyux/data-manager/testing';`

Harness for interacting with a data manager column picker modal in tests.

### Methods

#### `cancel(): Promise<void>`

Closes the picker without saving any selections made.

#### Returns

`Promise<void>`

#### `clearAll(): Promise<void>`

Clears all selections made.

#### Returns

`Promise<void>`

#### `clearSearchText(): Promise<void>`

Clears the text of the search input.

#### Returns

`Promise<void>`

#### `enterSearchText(value: string): Promise<void>`

Enters text into the search input and performs a search.

#### Parameters

##### `value: string`

#### Returns

`Promise<void>`

#### `getColumn(filter: SkyDataManagerColumnPickerColumnHarnessFilters): Promise<SkyDataManagerColumnPickerColumnHarness>`

Gets a specific column based on the filter criteria.

#### Parameters

##### `filter: SkyDataManagerColumnPickerColumnHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDataManagerColumnPickerColumnHarness>`

#### `getColumns(filters?: SkyDataManagerColumnPickerColumnHarnessFilters): Promise<SkyDataManagerColumnPickerColumnHarness[]>`

Gets an array of columns based on the filter criteria. If no filter is provided, returns all columns.

#### Parameters

##### `filters?: SkyDataManagerColumnPickerColumnHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDataManagerColumnPickerColumnHarness[]>`

#### `saveAndClose(): Promise<void>`

Saves any selections made and closes the modal.

#### Returns

`Promise<void>`

#### `selectAll(): Promise<void>`

Selects all search results.

#### Returns

`Promise<void>`

#### `selectColumns(filters?: SkyDataManagerColumnPickerColumnHarnessFilters): Promise<void>`

Selects multiple columns based on a set of criteria.

#### Parameters

##### `filters?: SkyDataManagerColumnPickerColumnHarnessFilters`

#### Returns

`Promise<void>`

## SkyDataManagerColumnPickerColumnHarness

Type: Class

`import { SkyDataManagerColumnPickerColumnHarness } from '@skyux/data-manager/testing';`

Harness for interacting with a data manager column picker column result in tests.

### Methods

#### `deselect(): Promise<void>`

Deselects the column.

#### Returns

`Promise<void>`

#### `getContentText(): Promise<string>`

Gets the text of the column content.

#### Returns

`Promise<string>`

#### `getContextMenuDropdown(filters?: SkyDropdownHarnessFilters): Promise<SkyDropdownHarness>`

Gets a harness for the dropdown inside the context menu.

#### Parameters

##### `filters?: SkyDropdownHarnessFilters`

#### Returns

`Promise<SkyDropdownHarness>`

#### `getInlineForm(): Promise<SkyInlineFormHarness>`

Gets the inline form harness.

#### Returns

`Promise<SkyInlineFormHarness>`

#### `getItemName(): Promise<string | null>`

Gets the item name.

#### Returns

`Promise<string | null>`

#### `getTitleText(): Promise<string>`

Gets the text of the column title.

#### Returns

`Promise<string>`

#### `isDisabled(): Promise<boolean>`

Whether a selectable repeater item is disabled.

#### Returns

`Promise<boolean>`

#### `isSelected(): Promise<boolean>`

Whether the column is selected.

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

#### `select(): Promise<void>`

Selects the column.

#### Returns

`Promise<void>`

#### `SkyDataManagerColumnPickerColumnHarness.with(filters: SkyDataManagerColumnPickerColumnHarnessFilters): HarnessPredicate<SkyDataManagerColumnPickerColumnHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDataManagerColumnPickerColumnHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDataManagerColumnPickerColumnHarnessFilters`

#### Returns

`HarnessPredicate<SkyDataManagerColumnPickerColumnHarness>`

## SkyDataManagerColumnPickerColumnHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDataManagerColumnPickerSearchResultHarness` instances.

    interface SkyDataManagerColumnPickerColumnHarnessFilters {
      contentText?: string | RegExp;
      dataSkyId?: string | RegExp;
      titleText?: string | RegExp;
    }

### Properties

#### `contentText?: string | RegExp`

Only find instances whose content matches the given value.

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `titleText?: string | RegExp`

Only find instances whose title matches the given value.

## Code Examples

### Data manager with basic setup

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyUIConfigService } from '@skyux/core';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarModule, SkyFilterItemLookupSearchAsyncArgs } from '@skyux/filter-bar';
import { SkyListSummaryModule } from '@skyux/lists';

import { map } from 'rxjs';

import { DATA_MANAGER_DEMO_DATA, DataManagerDemoRow } from './data';
import { ExampleService } from './example.service';
import { OrangeModalComponent } from './orange-modal.component';
import { ViewGridComponent } from './view-grid.component';
import { ViewRepeaterComponent } from './view-repeater.component';

const SOURCE_ID = 'data_manager_example_id';

/**
 * @title Data manager with basic setup
 */
@Component({
  selector: 'app-data-manager-basic-example',
  templateUrl: './example.component.html',
  providers: [SkyDataManagerService, SkyUIConfigService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDataManagerModule, SkyFilterBarModule, SkyListSummaryModule, ViewGridComponent, ViewRepeaterComponent],
})
export class DataManagerBasicExampleComponent {
  protected items: DataManagerDemoRow[] = DATA_MANAGER_DEMO_DATA;
  protected readonly orangeModalComponent = OrangeModalComponent;

  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #exampleSvc = inject(ExampleService);

  protected readonly recordCount = toSignal(
    this.#dataManagerSvc.getDataSummaryUpdates(SOURCE_ID).pipe(map((summary) => summary.itemsMatching)),
    { initialValue: 0 },
  );

  constructor() {
    this.#dataManagerSvc.initDataManager({
      activeViewId: 'repeaterView',
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
          filtersApplied: true,
          filters: {
            appliedFilters: [
              {
                filterId: 'hideOrange',
                filterValue: {
                  value: true,
                  displayValue: 'True',
                },
              },
            ],
          },
        },
        views: [
          {
            viewId: 'gridView',
            displayedColumnIds: ['selected', 'name', 'description'],
          },
        ],
      }),
    });
  }

  public onFruitTypeSearchAsync(args: SkyFilterItemLookupSearchAsyncArgs): void {
    // In a real-world application the search service might return an Observable
    // created by calling HttpClient.get(). Assigning that Observable to the result
    // allows the lookup component to cancel the web request if it does not complete
    // before the user searches again.
    args.result = this.#exampleSvc.search(args.searchText);
  }
}
```

#### data.ts

```typescript
export interface DataManagerDemoRow {
  selected?: boolean;
  id: string;
  name: string;
  description: string;
  type: string;
  color: string;
}

export const DATA_MANAGER_DEMO_DATA: DataManagerDemoRow[] = [
  {
    id: '1',
    name: 'Orange',
    description: 'A round, orange fruit. A great source of vitamin C.',
    type: 'citrus',
    color: 'orange',
  },
  {
    id: '2',
    name: 'Mango',
    description: "Very difficult to peel. Delicious in smoothies, but don't eat the skin.",
    type: 'other',
    color: 'orange',
  },
  {
    id: '3',
    name: 'Lime',
    description: 'A sour, green fruit used in many drinks. It grows on trees.',
    type: 'citrus',
    color: 'green',
  },
  {
    id: '4',
    name: 'Strawberry',
    description: 'A red fruit that goes well with shortcake. It is the name of both the fruit and the plant!',
    type: 'berry',
    color: 'red',
  },
  {
    id: '5',
    name: 'Blueberry',
    description: 'A small, blue fruit often found in muffins. When not ripe, they can be sour.',
    type: 'berry',
    color: 'blue',
  },
  {
    id: '6',
    name: 'Banana',
    description:
      'A yellow fruit with a thick skin. Monkeys love them, and in some countries it is customary to eat the peel.',
    type: 'other',
    color: 'yellow',
  },
];
```

#### example.component.html

```html
<sky-data-manager>
  <sky-data-manager-toolbar>
    <sky-filter-bar skyDataManagerFilterController>
      <sky-filter-item-lookup
        filterId="fruitType"
        labelText="Fruit type"
        searchDescriptorProperty="name"
        searchIdProperty="id"
        (searchAsync)="onFruitTypeSearchAsync($event)"
      />
      <sky-filter-item-modal
        filterId="hideOrange"
        labelText="Hide orange"
        modalSize="small"
        [modalComponent]="orangeModalComponent"
      />
    </sky-filter-bar>
    <sky-list-summary>
      <sky-list-summary-item [labelText]="recordCount() === 1 ? 'Record' : 'Records'" [value]="recordCount()" />
    </sky-list-summary>
  </sky-data-manager-toolbar>
  <app-view-repeater [items]="items" />
  <app-view-grid [items]="items" />
</sky-data-manager>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyDataManagerHarness } from '@skyux/data-manager/testing';
import { SkyRepeaterHarness } from '@skyux/lists/testing';

import { DataManagerBasicExampleComponent } from './example.component';

describe('Data manager basic example', () => {
  async function setupTest(options?: { dataSkyId: string }): Promise<{
    dataManagerHarness: SkyDataManagerHarness;
    fixture: ComponentFixture<DataManagerBasicExampleComponent>;
    loader: HarnessLoader;
  }> {
    await TestBed.configureTestingModule({
      imports: [DataManagerBasicExampleComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(DataManagerBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const dataManagerHarness = options?.dataSkyId
      ? await loader.getHarness(SkyDataManagerHarness.with({ dataSkyId: options.dataSkyId }))
      : await loader.getHarness(SkyDataManagerHarness);

    return { dataManagerHarness, fixture, loader };
  }

  it('should set up the component', async () => {
    const { dataManagerHarness, fixture } = await setupTest();

    const toolbarHarness = await dataManagerHarness.getToolbar();
    await toolbarHarness.clickSelectAll();

    const sortButtonHarness = await toolbarHarness.getSortButton();
    expect(sortButtonHarness).not.toBeNull();

    const repeaterView = await dataManagerHarness.getView({
      viewId: 'repeaterView',
    });
    const repeaterHarness = await repeaterView.queryHarness(SkyRepeaterHarness);
    const repeaterItems = await repeaterHarness.getRepeaterItems();
    expect(repeaterItems.length).toBe(4);

    for (const item of repeaterItems) {
      await expectAsync(item.isSelected()).toBeResolvedTo(true);
    }

    const viewActionsHarness = await toolbarHarness.getViewActions();
    expect(viewActionsHarness).not.toBeNull();

    const views = await viewActionsHarness?.getRadioButtons();
    await views?.[1].check();
    fixture.detectChanges();
    await fixture.whenStable();

    const searchHarness = await toolbarHarness.getSearch();
    expect(searchHarness).not.toBeNull();

    const columnPicker = await toolbarHarness.openColumnPicker();
    const columns = await columnPicker.getColumns();
    expect(columns.length).toBe(2);
  });
});
```

#### example.service.ts

```typescript
import { Injectable } from '@angular/core';
import { SkyFilterItemLookupSearchAsyncResult } from '@skyux/filter-bar';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface FruitTypeLookupItem {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  #fruitTypes: FruitTypeLookupItem[] = [
    { id: 'citrus', name: 'Citrus' },
    { id: 'berry', name: 'Berry' },
  ];

  public search(searchText: string): Observable<SkyFilterItemLookupSearchAsyncResult> {
    searchText = searchText.toUpperCase();

    const matchingTypes = this.#fruitTypes.filter((fruit) => fruit.name?.toUpperCase().includes(searchText));

    // Simulate a network call with latency. A real-world application might
    // use Angular's HttpClient to create an Observable from a call to a
    // web service.
    return of({
      hasMore: false,
      items: matchingTypes,
      totalCount: matchingTypes.length,
    }).pipe(delay(800));
  }
}
```

#### filters.ts

```typescript
import { SkyFilterBarFilterState } from '@skyux/filter-bar';

import { DataManagerDemoRow } from './data';
import { FruitTypeLookupItem } from './example.service';

export function filterItems(
  items: DataManagerDemoRow[],
  filterState: SkyFilterBarFilterState | undefined,
  searchText: string | undefined,
): DataManagerDemoRow[] {
  let filteredItems = items;
  const filters = filterState?.appliedFilters;
  if (filters) {
    const hideOrange = !!filters.find((f) => f.filterId === 'hideOrange' && f.filterValue?.value);
    const fruitTypeFilter = filters.find((f) => f.filterId === 'fruitType');
    const selectedTypes: string[] = Array.isArray(fruitTypeFilter?.filterValue?.value)
      ? (fruitTypeFilter.filterValue.value as FruitTypeLookupItem[]).map((v) => v.id)
      : [];

    filteredItems = filteredItems.filter((item) => {
      if (hideOrange && item.color === 'orange') {
        return false;
      }
      return !(selectedTypes.length && !selectedTypes.includes(item.type));
    });
  }

  if (searchText) {
    filteredItems = filteredItems.filter((item: DataManagerDemoRow) => {
      let property: keyof typeof item;

      for (property in item) {
        if (
          Object.prototype.hasOwnProperty.call(item, property) &&
          (property === 'name' || property === 'description')
        ) {
          const propertyText = item[property].toUpperCase();
          if (propertyText.includes(searchText.toUpperCase())) {
            return true;
          }
        }
      }

      return false;
    });
  }

  return filteredItems;
}
```

#### orange-modal.component.html

```html
<sky-modal [headingText]="modalLabel">
  <sky-modal-content>
    <sky-checkbox labelText="Hide orange fruits" [formControl]="hideOrange" />
  </sky-modal-content>
  <sky-modal-footer>
    <button class="sky-btn sky-btn-primary" type="button" (click)="applyFilters()">Apply</button>
    <button class="sky-btn sky-btn-link" type="button" (click)="cancel()">Cancel</button>
  </sky-modal-footer>
</sky-modal>
```

#### orange-modal.component.ts

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SkyFilterItemModal, SkyFilterItemModalInstance } from '@skyux/filter-bar';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyModalModule } from '@skyux/modals';

@Component({
  selector: 'app-orange-modal',
  templateUrl: './orange-modal.component.html',
  imports: [ReactiveFormsModule, SkyCheckboxModule, SkyModalModule],
})
export class OrangeModalComponent implements SkyFilterItemModal {
  public readonly modalInstance = inject(SkyFilterItemModalInstance);

  protected hideOrange = inject(FormBuilder).control(!!this.modalInstance.context.filterValue?.value);
  protected modalLabel = this.modalInstance.context.filterLabelText;

  protected applyFilters(): void {
    if (this.hideOrange.value) {
      this.modalInstance.save({
        filterValue: {
          value: true,
          displayValue: 'True',
        },
      });
    } else {
      this.modalInstance.save({ filterValue: undefined });
    }
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
import {
  SkyDataManagerColumnPickerOption,
  SkyDataManagerModule,
  SkyDataManagerService,
  SkyDataManagerState,
} from '@skyux/data-manager';
import { SkyFilterBarFilterState } from '@skyux/filter-bar';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, GridApi, ModuleRegistry } from 'ag-grid-community';
import { of } from 'rxjs';

import { DataManagerDemoRow } from './data';
import { filterItems } from './filters';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, SkyAgGridModule, SkyDataManagerModule],
})
export class ViewGridComponent {
  public readonly items = input<DataManagerDemoRow[]>([]);

  protected readonly viewId = 'gridView';

  readonly #columnDefs: ColDef[] = [
    {
      colId: 'selected',
      field: 'selected',
      type: SkyCellType.RowSelector,
      suppressMovable: true,
      lockPosition: true,
      lockVisible: true,
      cellRendererParams: {
        // Could be a SkyAppResourcesService.getString call that returns an observable.
        label: (data: DataManagerDemoRow) => of(`Select ${data.name}`),
      },
    },
    {
      colId: 'name',
      field: 'name',
      headerName: 'Fruit name',
      width: 150,
    },
    {
      colId: 'description',
      field: 'description',
      headerName: 'Description',
    },
  ];
  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #dataState = toSignal(this.#dataManagerSvc.getDataStateUpdates(`${this.viewId}-data-state`), {
    initialValue: new SkyDataManagerState({}),
  });
  readonly #gridApi = signal<GridApi | undefined>(undefined);
  protected readonly displayedItems = computed(() => {
    const dataState = this.#dataState();
    return filterItems(
      this.items(),
      dataState.filterData?.filters as SkyFilterBarFilterState | undefined,
      dataState.searchText,
    );
  });
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
      name: 'Grid View',
      iconName: 'table',
      searchEnabled: true,
      columnPickerEnabled: true,
      columnOptions: this.#columnDefs.map(
        (colDef): SkyDataManagerColumnPickerOption => ({
          id: colDef.colId!,
          label: colDef.headerName ?? colDef.colId!,
          alwaysDisplayed: !!colDef.lockVisible,
        }),
      ),
    });
  }
}
```

#### view-repeater.component.html

```html
<sky-data-view [viewId]="viewId">
  <sky-repeater expandMode="none">
    @for (item of displayedItems(); track item.id) {
    <sky-repeater-item
      [selectable]="true"
      [isSelected]="selectedItems().includes(item.id)"
      (isSelectedChange)="onItemSelect($event, item)"
    >
      <sky-repeater-item-title> {{ item.name }} </sky-repeater-item-title>
      <sky-repeater-item-content> {{ item.description }} </sky-repeater-item-content>
    </sky-repeater-item>
    }
  </sky-repeater>
</sky-data-view>
```

#### view-repeater.component.ts

```typescript
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyDataManagerModule, SkyDataManagerService, SkyDataManagerState } from '@skyux/data-manager';
import { SkyFilterBarFilterState } from '@skyux/filter-bar';
import { SkyRepeaterModule } from '@skyux/lists';

import { DataManagerDemoRow } from './data';
import { filterItems } from './filters';

@Component({
  selector: 'app-view-repeater',
  templateUrl: './view-repeater.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDataManagerModule, SkyRepeaterModule],
})
export class ViewRepeaterComponent {
  public readonly items = input<DataManagerDemoRow[]>([]);

  protected readonly viewId = 'repeaterView';

  readonly #dataManagerSvc = inject(SkyDataManagerService);
  readonly #dataState = toSignal(this.#dataManagerSvc.getDataStateUpdates(this.viewId), {
    initialValue: new SkyDataManagerState({}),
  });

  protected readonly selectedItems = linkedSignal(() => this.#dataState().selectedIds ?? []);
  protected readonly filteredItems = computed(() => {
    const dataState = this.#dataState();
    const items = filterItems(
      this.items(),
      dataState.filterData?.filters as SkyFilterBarFilterState | undefined,
      dataState.searchText,
    );
    const sortOption = dataState.activeSortOption;
    if (sortOption?.propertyName) {
      const field = sortOption.propertyName as keyof DataManagerDemoRow;
      const descending = sortOption.descending ?? false;

      items.sort((a: DataManagerDemoRow, b: DataManagerDemoRow) => {
        const aValue = String(a[field]);
        const bValue = String(b[field]);
        if (descending) {
          return bValue.localeCompare(aValue);
        }
        return aValue.localeCompare(bValue);
      });
    }
    return items;
  });
  protected readonly displayedItems = computed(() => {
    const dataState = this.#dataState();
    const selectedItems = this.selectedItems();
    const items = this.filteredItems();
    if (dataState.onlyShowSelected) {
      return items.filter((item) => selectedItems.includes(item.id));
    }
    return items;
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
      const selectedItems = this.selectedItems();
      const dataState = untracked(this.#dataState);
      const currentSelectedIds = dataState.selectedIds ?? [];
      if (
        selectedItems.length !== currentSelectedIds.length ||
        !selectedItems.every((id) => currentSelectedIds.includes(id))
      ) {
        const dataStateUpdate = new SkyDataManagerState(dataState);
        dataStateUpdate.selectedIds = selectedItems;
        this.#dataManagerSvc.updateDataState(dataStateUpdate, this.viewId);
      }
    });
    this.#dataManagerSvc.initDataView({
      id: this.viewId,
      name: 'Repeater View',
      iconName: 'text-bullet-list',
      searchEnabled: true,
      sortEnabled: true,
      multiselectToolbarEnabled: true,
      onClearAllClick: () => {
        this.selectedItems.set([]);
      },
      onSelectAllClick: () => {
        this.selectedItems.set(this.filteredItems().map((item) => item.id));
      },
    });
  }

  protected onItemSelect(isSelected: boolean, item: DataManagerDemoRow): void {
    if (!isSelected) {
      this.selectedItems.update((ids) => ids.filter((id) => id !== item.id));
    } else {
      this.selectedItems.update((ids) => {
        if (!ids.includes(item.id)) {
          return ids.concat([item.id]);
        }
        return ids;
      });
    }
    item.selected = isSelected;
  }
}
```

### List page with list layout using data manager

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyPageModule } from '@skyux/pages';

import { ListPageContentComponent } from './list-page-content.component';

/**
 * @title List page with list layout using data manager
 * @docsDemoHidden
 */
@Component({
  selector: 'app-pages-page-list-page-list-layout-example',
  templateUrl: './example.component.html',
  imports: [ListPageContentComponent, SkyPageModule],
})
export class PagesPageListPageListLayoutExampleComponent {}
```

#### dashboard-link-cell-renderer.component.ts

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { Item } from './item';

/**
 * Cell renderer for dashboard name links.
 */
@Component({
  selector: 'app-dashboard-link-cell-renderer',
  template: `<a href="/" [attr.aria-label]="'View dashboard details for ' + value">{{ value }}</a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLinkCellRendererComponent implements ICellRendererAngularComp {
  protected value = '';

  public agInit(params: ICellRendererParams<Item, string>): void {
    this.value = params.value || '';
  }

  public refresh(params: ICellRendererParams<Item, string>): boolean {
    this.value = params.value || '';
    return true;
  }
}
```

#### dashboards-grid-context-menu.component.html

```html
<sky-dropdown buttonType="context-menu" [label]="'context menu for ' + dashboardName">
  <sky-dropdown-menu>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="'Edit ' + dashboardName">Edit</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="'Copy ' + dashboardName">Copy</button>
    </sky-dropdown-item>
    <sky-dropdown-item>
      <button type="button" [attr.aria-label]="'Delete ' + dashboardName">Delete</button>
    </sky-dropdown-item>
  </sky-dropdown-menu>
</sky-dropdown>
```

#### dashboards-grid-context-menu.component.ts

```typescript
import { Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { Item } from './item';

@Component({
  selector: 'app-dashboards-grid-context-menu',
  templateUrl: './dashboards-grid-context-menu.component.html',
  imports: [SkyDropdownModule],
})
export class DashboardGridContextMenuComponent implements ICellRendererAngularComp {
  protected dashboardName = '';

  public agInit(params: ICellRendererParams<Item>): void {
    this.dashboardName = params.data?.dashboard ?? '';
  }

  public refresh(): boolean {
    return false;
  }
}
```

#### example.component.html

```html
<sky-page layout="list" helpKey="example-help">
  <sky-page-header pageTitle="Dashboards" />
  <sky-page-content>
    <app-list-page-content />
  </sky-page-content>
</sky-page>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyHelpTestingController, SkyHelpTestingModule } from '@skyux/core/testing';
import { SkyPageHarness } from '@skyux/pages/testing';

import { PagesPageListPageListLayoutExampleComponent } from './example.component';

describe('List page list layout example', () => {
  async function setupTest(): Promise<{
    pageHarness: SkyPageHarness;
    fixture: ComponentFixture<PagesPageListPageListLayoutExampleComponent>;
    helpController: SkyHelpTestingController;
  }> {
    const fixture = TestBed.createComponent(PagesPageListPageListLayoutExampleComponent);

    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const pageHarness = await loader.getHarness(SkyPageHarness);
    const helpController = TestBed.inject(SkyHelpTestingController);

    return { pageHarness, fixture, helpController };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PagesPageListPageListLayoutExampleComponent, SkyHelpTestingModule],
    });
  });

  it('should have a list layout', async () => {
    const { pageHarness } = await setupTest();

    await expectAsync(pageHarness.getLayout()).toBeResolvedTo('list');
  });

  it('should have the correct page header text', async () => {
    const { pageHarness } = await setupTest();

    const pageHeaderHarness = await pageHarness.getPageHeader();

    await expectAsync(pageHeaderHarness.getPageTitle()).toBeResolvedTo('Dashboards');
  });

  it('should have the correct help key', async () => {
    const { helpController } = await setupTest();

    helpController.expectCurrentHelpKey('example-help');
  });
});
```

#### item.ts

```typescript
export interface Item {
  dashboard: string;
  name: string;
  lastUpdated: string;
}
```

#### list-page-content.component.html

```html
<sky-data-manager>
  <div class="sky-theme-margin-bottom-xs">
    <sky-data-manager-toolbar>
      <sky-data-manager-toolbar-primary-item>
        <button aria-label="New dashboard" class="sky-btn sky-btn-default" type="button">
          <sky-icon iconName="add" />
          New
        </button>
      </sky-data-manager-toolbar-primary-item>
      <sky-list-summary>
        <sky-list-summary-item labelText="Dashboards" [value]="items.length" />
      </sky-list-summary>
    </sky-data-manager-toolbar>
  </div>
  <sky-data-view skyAgGridDataManagerAdapter viewId="gridView">
    <sky-ag-grid-wrapper>
      <ag-grid-angular [gridOptions]="gridOptions" />
    </sky-ag-grid-wrapper>
  </sky-data-view>
</sky-data-manager>
```

#### list-page-content.component.ts

```typescript
import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkyAgGridModule, SkyAgGridService } from '@skyux/ag-grid';
import {
  SkyDataManagerModule,
  SkyDataManagerService,
  SkyDataManagerState,
  SkyDataViewConfig,
} from '@skyux/data-manager';
import { SkyIconModule } from '@skyux/icon';
import { SkyListSummaryModule } from '@skyux/lists';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, GridApi, ModuleRegistry } from 'ag-grid-community';
import { map } from 'rxjs/operators';

import { DashboardLinkCellRendererComponent } from './dashboard-link-cell-renderer.component';
import { DashboardGridContextMenuComponent } from './dashboards-grid-context-menu.component';
import { Item } from './item';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-list-page-content',
  templateUrl: './list-page-content.component.html',
  providers: [SkyDataManagerService],
  imports: [AgGridAngular, SkyAgGridModule, SkyDataManagerModule, SkyIconModule, SkyListSummaryModule],
})
export class ListPageContentComponent {
  protected items: Item[] = [
    {
      dashboard: 'Cash Flow Tracker',
      name: 'Kanesha Hutto',
      lastUpdated: '06/21/2023',
    },
    {
      dashboard: 'Accounts Receivable Dashboard',
      name: 'Kristeen Lunsford',
      lastUpdated: '06/30/2023',
    },
    {
      dashboard: 'Accounts Payable Dashboard',
      name: 'Darcel Lenz',
      lastUpdated: '04/20/2023',
    },
    {
      dashboard: 'Budget vs. Actual',
      name: 'Barbara Durr',
      lastUpdated: '12/04/2023',
    },
    {
      dashboard: 'Balance Sheet - New',
      name: 'Ilene Woo',
      lastUpdated: '12/20/2023',
    },
    {
      dashboard: 'Debt Management',
      name: 'Tonja Sanderson',
      lastUpdated: '09/10/2023',
    },
  ];

  protected readonly gridOptions = inject(SkyAgGridService).getGridOptions({
    gridOptions: {
      columnDefs: [
        {
          colId: 'contextMenu',
          headerName: '',
          sortable: false,
          cellRenderer: DashboardGridContextMenuComponent,
          maxWidth: 55,
        },
        {
          colId: 'dashboard',
          field: 'dashboard',
          headerName: 'Name',
          width: 150,
          cellRenderer: DashboardLinkCellRendererComponent,
        },
        {
          colId: 'name',
          field: 'name',
          headerName: 'Created By',
        },
        {
          colId: 'lastUpdated',
          field: 'lastUpdated',
          headerName: 'Last Updated',
        },
      ],
      onGridReady: (params) => {
        this.#gridApi.set(params.api);
      },
      onGridPreDestroyed: () => {
        this.#gridApi.set(undefined);
      },
      rowData: this.items,
    },
  });

  readonly #gridApi = signal<GridApi | undefined>(undefined);
  readonly #viewConfig: SkyDataViewConfig = {
    id: 'gridView',
    name: 'Grid View',
    searchEnabled: true,
  };

  constructor() {
    const dataManagerService = inject(SkyDataManagerService);
    dataManagerService.initDataManager({
      activeViewId: this.#viewConfig.id,
      dataManagerConfig: {},
      defaultDataState: new SkyDataManagerState({
        views: [
          {
            viewId: this.#viewConfig.id,
            displayedColumnIds: ['contextMenu', 'dashboard', 'name', 'lastUpdated'],
          },
        ],
      }),
    });
    dataManagerService.initDataView(this.#viewConfig);
    const searchText = toSignal(
      dataManagerService
        .getDataStateUpdates(`${this.#viewConfig.id}-searchText`)
        .pipe(map((state) => state.searchText ?? '')),
      { initialValue: '' },
    );
    effect(() => {
      const text = searchText();
      this.#gridApi()?.setGridOption('quickFilterText', text);
    });
  }
}
```

### Data manager with split view in a fit layout page.

#### example.component.ts (primary file)

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkySummaryActionBarModule } from '@skyux/action-bars';
import {
  SkyDataManagerDockType,
  SkyDataManagerModule,
  SkyDataManagerService,
  SkyDataManagerState,
  SkyDataViewConfig,
} from '@skyux/data-manager';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyDescriptionListModule } from '@skyux/layout';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyConfirmService, SkyConfirmType } from '@skyux/modals';
import { SkyPageModule } from '@skyux/pages';
import { SkySplitViewMessage, SkySplitViewMessageType, SkySplitViewModule } from '@skyux/split-view';

import { Subject } from 'rxjs';

import { Record } from './record';

interface DemoForm {
  approvedAmount: FormControl<number>;
  comments: FormControl<string>;
}

/**
 * @title Data manager with split view in a fit layout page.
 * @docsDemoHidden
 */
@Component({
  selector: 'app-pages-page-split-view-data-manager-example',
  templateUrl: './example.component.html',
  imports: [
    SkyPageModule,
    SkyDataManagerModule,
    FormsModule,
    ReactiveFormsModule,
    SkyDescriptionListModule,
    SkyInputBoxModule,
    SkyRepeaterModule,
    SkySplitViewModule,
    SkySummaryActionBarModule,
  ],
  providers: [SkyDataManagerService],
})
export class PagesPageDataManagerSplitViewFitLayoutExampleComponent implements OnInit {
  public set activeIndex(value: number) {
    this.#_activeIndex = value;
    this.activeRecord = this.items[this.#_activeIndex];
    this.#loadFormGroup(this.activeRecord);
  }

  public get activeIndex(): number {
    return this.#_activeIndex;
  }

  public items = [
    {
      id: 1,
      amount: 73.19,
      date: '5/13/2020',
      vendor: 'amazon.com',
      receiptImage: 'amzn-office-supply-order-5-13-19.png',
      approvedAmount: 73.19,
      comments: '',
    },
    {
      id: 2,
      amount: 214.12,
      date: '5/14/2020',
      vendor: 'Office Max',
      receiptImage: 'office-max-order.png',
      approvedAmount: 214.12,
      comments: '',
    },
    {
      id: 3,
      amount: 29.99,
      date: '5/14/2020',
      vendor: 'amazon.com',
      receiptImage: 'amzn-office-supply-order-5-14-19.png',
      approvedAmount: 29.99,
      comments: '',
    },
    {
      id: 4,
      amount: 1500,
      date: '5/15/2020',
      vendor: 'Fresh Catering, LLC',
      receiptImage: 'fresh-catering-llc-order.png',
      approvedAmount: 1500,
      comments: '',
    },
  ];

  public activeRecord: Record;
  public splitViewDemoForm: FormGroup<DemoForm>;
  public splitViewStream = new Subject<SkySplitViewMessage>();

  public dock: SkyDataManagerDockType = 'fill';

  #splitViewConfig: SkyDataViewConfig = {
    id: 'dataManagerView',
    name: 'Split View Data Manager View',
    sortEnabled: true,
    searchEnabled: true,
  };

  #_activeIndex = 0;

  readonly #dataManagerService = inject(SkyDataManagerService);
  readonly #confirmSvc = inject(SkyConfirmService);

  constructor() {
    // Start with the first item selected.
    this.activeIndex = 0;
    this.activeRecord = this.items[this.activeIndex];

    this.splitViewDemoForm = new FormGroup({
      approvedAmount: new FormControl(this.activeRecord.approvedAmount, {
        nonNullable: true,
      }),
      comments: new FormControl(this.activeRecord.comments, {
        nonNullable: true,
      }),
    });
  }

  public ngOnInit(): void {
    this.#dataManagerService.initDataManager({
      activeViewId: 'dataManagerView',
      dataManagerConfig: {},
      defaultDataState: new SkyDataManagerState({
        views: [
          {
            viewId: 'dataManagerView',
          },
        ],
      }),
    });
    this.#dataManagerService.initDataView(this.#splitViewConfig);
  }

  public onItemClick(index: number): void {
    // Prevent workspace from loading new data if the current workspace form is dirty.
    if (this.splitViewDemoForm.dirty && index !== this.activeIndex) {
      this.#openConfirmModal(index);
    } else {
      this.#loadWorkspace(index);
    }
  }

  public onApprove(): void {
    console.log('Approved clicked!');
    this.#saveForm();
  }

  public onDeny(): void {
    console.log('Denied clicked!');
  }

  #loadFormGroup(record: Record): void {
    this.splitViewDemoForm = new FormGroup({
      approvedAmount: new FormControl(record.approvedAmount, {
        nonNullable: true,
      }),
      comments: new FormControl(record.comments, { nonNullable: true }),
    });
  }

  #loadWorkspace(index: number): void {
    this.activeIndex = index;
    this.#setFocusInWorkspace();
  }

  #openConfirmModal(index: number): void {
    this.#confirmSvc
      .open({
        message: 'You have unsaved work. Would you like to save it before you change records?',
        type: SkyConfirmType.Custom,
        buttons: [
          {
            action: 'yes',
            text: 'Yes',
            styleType: 'primary',
          },
          {
            action: 'discard',
            text: 'Discard changes',
            styleType: 'link',
          },
        ],
      })
      .closed.subscribe((closeArgs) => {
        if (closeArgs.action.toLowerCase() === 'yes') {
          this.#saveForm();
        }

        this.#loadWorkspace(index);
      });
  }

  #saveForm(): void {
    this.activeRecord.approvedAmount = this.splitViewDemoForm.value.approvedAmount ?? 0;
    this.activeRecord.comments = this.splitViewDemoForm.value.comments ?? '';

    this.splitViewDemoForm.reset(this.splitViewDemoForm.value);
  }

  #setFocusInWorkspace(): void {
    const message: SkySplitViewMessage = {
      type: SkySplitViewMessageType.FocusWorkspace,
    };
    this.splitViewStream.next(message);
  }
}
```

#### example.component.html

```html
<sky-page layout="fit">
  <sky-page-header pageTitle="Split view with data manager" />
  <sky-page-content>
    <sky-data-manager [dock]="dock">
      <sky-data-manager-toolbar />
      <sky-data-view viewId="dataManagerView">
        <sky-split-view dock="fill" [messageStream]="splitViewStream">
          <sky-split-view-drawer [ariaLabel]="'Transaction list'">
            <sky-repeater [activeIndex]="activeIndex">
              @for (item of items; track item; let i = $index) {
              <sky-repeater-item (click)="onItemClick(i)" (keyup.enter)="onItemClick(i)">
                <sky-repeater-item-content>
                  {{ item.amount }} <br />
                  {{ item.date }} <br />
                  {{ item.vendor }}
                </sky-repeater-item-content>
              </sky-repeater-item>
              }
            </sky-repeater>
          </sky-split-view-drawer>

          <sky-split-view-workspace ariaLabel="Transaction form">
            <sky-split-view-workspace-content class="sky-theme-padding-inset-balanced-xl">
              <form [formGroup]="splitViewDemoForm" (ngSubmit)="onApprove()">
                <sky-description-list labelWidth="150px">
                  <sky-description-list-content>
                    <sky-description-list-term> Receipt amount </sky-description-list-term>
                    <sky-description-list-description> {{ activeRecord.amount }} </sky-description-list-description>
                  </sky-description-list-content>
                  <sky-description-list-content>
                    <sky-description-list-term> Date </sky-description-list-term>
                    <sky-description-list-description> {{ activeRecord.date }} </sky-description-list-description>
                  </sky-description-list-content>
                  <sky-description-list-content>
                    <sky-description-list-term> Vendor </sky-description-list-term>
                    <sky-description-list-description> {{ activeRecord.vendor }} </sky-description-list-description>
                  </sky-description-list-content>
                  <sky-description-list-content>
                    <sky-description-list-term> Receipt image </sky-description-list-term>
                    <sky-description-list-description>
                      {{ activeRecord.receiptImage }}
                    </sky-description-list-description>
                  </sky-description-list-content>
                </sky-description-list>
                <sky-input-box labelText="Approved amount" stacked="true">
                  <input formControlName="approvedAmount" type="text" />
                </sky-input-box>
                <sky-input-box labelText="Comments">
                  <textarea formControlName="comments"></textarea>
                </sky-input-box>
              </form>
            </sky-split-view-workspace-content>
            <sky-split-view-workspace-footer>
              <sky-summary-action-bar>
                <sky-summary-action-bar-actions>
                  <sky-summary-action-bar-primary-action (actionClick)="onApprove()">
                    Approve expense
                  </sky-summary-action-bar-primary-action>
                  <sky-summary-action-bar-secondary-actions>
                    <sky-summary-action-bar-secondary-action (actionClick)="onDeny()">
                      Deny expense
                    </sky-summary-action-bar-secondary-action>
                  </sky-summary-action-bar-secondary-actions>
                </sky-summary-action-bar-actions>
              </sky-summary-action-bar>
            </sky-split-view-workspace-footer>
          </sky-split-view-workspace>
        </sky-split-view>
      </sky-data-view>
    </sky-data-manager>
  </sky-page-content>
</sky-page>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyDataManagerHarness } from '@skyux/data-manager/testing';
import { SkyInputBoxHarness } from '@skyux/forms/testing';
import { SkyRepeaterHarness } from '@skyux/lists/testing';
import { SkyPageHarness } from '@skyux/pages/testing';
import { SkySplitViewHarness } from '@skyux/split-view/testing';

import { PagesPageDataManagerSplitViewFitLayoutExampleComponent } from './example.component';

describe('Data manager with split view in a fit layout page example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<PagesPageDataManagerSplitViewFitLayoutExampleComponent>;
    loader: HarnessLoader;
    component: PagesPageDataManagerSplitViewFitLayoutExampleComponent;
  }> {
    await TestBed.configureTestingModule({
      imports: [PagesPageDataManagerSplitViewFitLayoutExampleComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(PagesPageDataManagerSplitViewFitLayoutExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const component = fixture.componentInstance;

    return { fixture, loader, component };
  }

  it('should create the component', async () => {
    const { fixture, component } = await setupTest();

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should have correct page layout', async () => {
    const { fixture, loader } = await setupTest();

    fixture.detectChanges();

    const pageHarness = await loader.getHarness(SkyPageHarness);
    await expectAsync(pageHarness.getLayout()).toBeResolvedTo('fit');
  });

  it('should initialize with first item selected', async () => {
    const { fixture, component } = await setupTest();

    fixture.detectChanges();

    expect(component.activeIndex).toBe(0);
    expect(component.activeRecord).toEqual(component.items[0]);
  });

  it('should set up data manager with correct configuration', async () => {
    const { fixture, loader } = await setupTest();

    fixture.detectChanges();

    const dataManagerHarness = await loader.getHarness(SkyDataManagerHarness);

    // Verify dock type is 'fill'
    await expectAsync(dataManagerHarness.getDockType()).toBeResolvedTo('fill');

    // Get the data view
    const dataView = await dataManagerHarness.getView({
      viewId: 'dataManagerView',
    });
    expect(dataView).toBeTruthy();
  });

  it('should set up split view with correct configuration', async () => {
    const { fixture, loader } = await setupTest();

    fixture.detectChanges();

    const splitViewHarness = await loader.getHarness(SkySplitViewHarness);

    // Verify dock type is 'fill'
    await expectAsync(splitViewHarness.getDockType()).toBeResolvedTo('fill');

    // Verify both drawer and workspace are visible
    await expectAsync(splitViewHarness.getDrawerIsVisible()).toBeResolvedTo(true);
    await expectAsync(splitViewHarness.getWorkspaceIsVisible()).toBeResolvedTo(true);

    // Get drawer and workspace harnesses
    const drawerHarness = await splitViewHarness.getDrawer();
    const workspaceHarness = await splitViewHarness.getWorkspace();

    // Verify aria labels
    await expectAsync(drawerHarness.getAriaLabel()).toBeResolvedTo('Transaction list');
    await expectAsync(workspaceHarness.getAriaLabel()).toBeResolvedTo('Transaction form');
  });

  it('should display repeater items in the drawer', async () => {
    const { fixture, loader, component } = await setupTest();

    fixture.detectChanges();
    await fixture.whenStable();

    const splitViewHarness = await loader.getHarness(SkySplitViewHarness);
    const drawerHarness = await splitViewHarness.getDrawer();

    // Get the repeater harness from the drawer
    const repeaterHarness = await drawerHarness.queryHarness(SkyRepeaterHarness);
    expect(repeaterHarness).toBeTruthy();

    // Verify all items are displayed
    const repeaterItems = await repeaterHarness.getRepeaterItems();
    expect(repeaterItems.length).toBe(4);

    // Verify the active index is properly set in the component (first item should be active initially)
    expect(component.activeIndex).toBe(0);
  });

  it('should display form fields in the workspace', async () => {
    const { fixture, loader, component } = await setupTest();

    fixture.detectChanges();
    await fixture.whenStable();

    const splitViewHarness = await loader.getHarness(SkySplitViewHarness);
    const workspaceHarness = await splitViewHarness.getWorkspace();
    const contentHarness = await workspaceHarness.getContent();

    // Get input box harnesses
    const inputBoxes = await contentHarness.queryHarnesses(SkyInputBoxHarness);
    expect(inputBoxes.length).toBe(2);

    // Verify the input labels
    await expectAsync(inputBoxes[0].getLabelText()).toBeResolvedTo('Approved amount');
    await expectAsync(inputBoxes[1].getLabelText()).toBeResolvedTo('Comments');

    // Verify initial values match the first item using form controls
    const approvedAmountControl = component.splitViewDemoForm.controls.approvedAmount;
    const commentsControl = component.splitViewDemoForm.controls.comments;

    expect(approvedAmountControl.value).toBe(73.19);
    expect(commentsControl.value).toBe('');
  });

  it('should switch active record when clicking repeater items', async () => {
    const { fixture, loader, component } = await setupTest();

    fixture.detectChanges();
    await fixture.whenStable();

    const splitViewHarness = await loader.getHarness(SkySplitViewHarness);
    const drawerHarness = await splitViewHarness.getDrawer();
    const repeaterHarness = await drawerHarness.queryHarness(SkyRepeaterHarness);
    const repeaterItems = await repeaterHarness.getRepeaterItems();

    // Verify initial state
    expect(component.activeIndex).toBe(0);
    expect(component.activeRecord.id).toBe(1);

    // Click on the second item (index 1)
    await repeaterItems[1].click();
    fixture.detectChanges();
    await fixture.whenStable();

    // Verify the active record changed
    expect(component.activeIndex).toBe(1);
    expect(component.activeRecord.id).toBe(2);
    expect(component.activeRecord.vendor).toBe('Office Max');

    // Verify form was updated with new record data
    const approvedAmountControl = component.splitViewDemoForm.controls.approvedAmount;
    const commentsControl = component.splitViewDemoForm.controls.comments;

    expect(approvedAmountControl.value).toBe(214.12);
    expect(commentsControl.value).toBe('');
  });

  it('should update form when editing form fields', async () => {
    const { fixture, component } = await setupTest();

    fixture.detectChanges();
    await fixture.whenStable();

    // Get form controls
    const approvedAmountControl = component.splitViewDemoForm.controls.approvedAmount;
    const commentsControl = component.splitViewDemoForm.controls.comments;

    // Verify initial values
    expect(approvedAmountControl.value).toBe(73.19);
    expect(commentsControl.value).toBe('');
    expect(component.splitViewDemoForm.dirty).toBe(false);

    // Update form values - setValue() doesn't mark form as dirty, so we need to mark it explicitly
    approvedAmountControl.setValue(100.0);
    approvedAmountControl.markAsDirty();
    commentsControl.setValue('Test comment');
    commentsControl.markAsDirty();

    fixture.detectChanges();

    // Verify form is dirty after changes
    expect(component.splitViewDemoForm.dirty).toBe(true);

    // Verify new values
    expect(approvedAmountControl.value).toBe(100.0);
    expect(commentsControl.value).toBe('Test comment');
  });
});
```

#### record.ts

```typescript
export interface Record {
  id: number;
  amount: number;
  date: string;
  vendor: string;
  receiptImage: string;
  approvedAmount: number;
  comments: string;
}
```
