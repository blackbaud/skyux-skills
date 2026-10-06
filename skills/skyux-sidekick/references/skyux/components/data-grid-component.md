---
Title: Data grid (preview)
Reference: https://developer.blackbaud.com/skyux/components/data-grid-component
---

# Data grid (preview)

We created this new data grid component to simplify the implementation of data grids for common use cases. It is currently in [preview mode](../learn/preview.md) and isn't fully implemented or documented. We plan to finish the development of this component after the SKY UX v15 release and will then remove the component from preview mode.

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

`@skyux/data-grid`[View in NPM](https://www.npmjs.com/package/@skyux/data-grid) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/data-grid/src/lib/modules/data-grid/data-grid.ts#L132)

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

Harness for interacting with SKY UX data grid components in tests. Add `provideSkyDataGridTesting()` to the spec's providers so the harness can wait for the grid to finish rendering; without it, render-readiness waits are skipped.

### Methods

#### `clickColumnSortButton(column: string): Promise<void>`

Clicks the column header sort button and waits for the grid to re-render the sorted rows, and for a consumer's own `[(sort)]` binding to reflect the change, before resolving.

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

Returns a child harness after the grid has finished rendering, or throws an error if the harness is not found.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T>`

#### `queryHarnesses(query: HarnessQuery<T>): Promise<T[]>`

Returns all child harnesses that match after the grid has finished rendering.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T[]>`

#### `queryHarnessOrNull(query: HarnessQuery<T>): Promise<T | null>`

Returns a child harness after the grid has finished rendering, or `null` if not found.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T | null>`

#### `querySelector(selector: string): Promise<TestElement>`

Returns a child test element after the grid has finished rendering, or throws an error if not found.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement>`

#### `querySelectorAll(selector: string): Promise<TestElement[]>`

Returns all child test elements that match after the grid has finished rendering.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement[]>`

#### `querySelectorOrNull(selector: string): Promise<TestElement | null>`

Returns a child test element after the grid has finished rendering, or `null` if not found.

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

## provideSkyDataGridTesting

Type: Function Preview

Configures every data grid in the test to disable AG Grid's row/column virtualization and to opt out of AG Grid's Angular test-zone detection so `SkyDataGridHarness` can reliably wait for the grid to finish rendering. Add to the spec's `TestBed.configureTestingModule` providers.

    function provideSkyDataGridTesting(): Provider[]

Loading complete.

## Code Examples

### Basic data grid

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { SkyDataGrid, SkyDataGridColumn } from '@skyux/data-grid';
import { SkyBoxModule } from '@skyux/layout';
import { SkyDropdownModule } from '@skyux/popovers';

import { DATA_GRID_DEMO_DATA, DataGridDemoRow } from './data';

/**
 * @title Basic data grid
 */
@Component({
  selector: 'app-data-grid-basic-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyBoxModule, SkyDataGrid, SkyDataGridColumn, SkyDropdownModule],
})
export class DataGridBasicExampleComponent {
  protected readonly gridData = signal<DataGridDemoRow[]>(DATA_GRID_DEMO_DATA);
  protected readonly selectedRowIds = model<string[]>([]);

  protected readonly selectedNames = computed(() => {
    const selectedRowIds = this.selectedRowIds();
    return this.gridData()
      .filter((row) => selectedRowIds.includes(row.id))
      .map((row: DataGridDemoRow) => row.name)
      .sort((a, b) => a.localeCompare(b))
      .join(', ');
  });

  public actionClicked(row: DataGridDemoRow, action: string): void {
    alert(`${action} clicked for ${row.name}`);
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

export interface DataGridDemoRow {
  id: string;
  selected?: boolean;
  name: string;
  age: number;
  startDate: Date;
  endDate?: Date;
  department: AutocompleteOption;
  jobTitle?: AutocompleteOption;
}

export const DATA_GRID_DEMO_DATA = [
  {
    id: '1',
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
  },
  {
    id: '2',
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
  },
  {
    id: '3',
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
  },
  {
    id: '4',
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
  },
  {
    id: '5',
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
  },
  {
    id: '6',
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
  },
  {
    id: '7',
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
@let names = selectedNames();

<sky-box class="sky-theme-margin-bottom-l">
  <sky-box-content>
    Selected rows: {{ names }} @if (!names) {
    <em class="sky-theme-font-body-deemphasized-m">no rows selected</em>
    }
  </sky-box-content>
</sky-box>

<sky-data-grid data-sky-id="example-data-grid" multiselect [data]="gridData()" [(selectedRowIds)]="selectedRowIds">
  <sky-data-grid-column
    columnId="context"
    headingText="Context menu"
    headingHidden
    width="50"
    [resizable]="false"
    [sortable]="false"
    [template]="contextMenu"
  />
  <sky-data-grid-column field="name" headingText="Name" />
  <sky-data-grid-column
    field="age"
    headingText="Age"
    dataType="number"
    width="60"
    helpPopoverTitle="Age"
    helpPopoverContent="The team member's current age, in years."
  />
  <sky-data-grid-column field="startDate" headingText="Start date" dataType="date" />
  <sky-data-grid-column field="endDate" headingText="End date" dataType="date" />
  <sky-data-grid-column field="department" headingText="Department">
    <ng-template let-row="row">{{ row.department?.name }}</ng-template>
  </sky-data-grid-column>
  <sky-data-grid-column field="jobTitle" headingText="Title">
    <ng-template let-row="row">{{ row.jobTitle?.name }}</ng-template>
  </sky-data-grid-column>
</sky-data-grid>

<ng-template #contextMenu let-row="row">
  <sky-dropdown
    buttonType="context-menu"
    [attr.data-sky-id]="'context-menu-' + row.id"
    [label]="`Context menu for ${row?.name}`"
  >
    <sky-dropdown-menu>
      <sky-dropdown-item>
        <button
          type="button"
          [attr.aria-label]="`Mark ${row?.name} inactive`"
          (click)="actionClicked(row, 'Mark inactive')"
        >
          Mark inactive
        </button>
      </sky-dropdown-item>
      <sky-dropdown-item>
        <button
          type="button"
          [attr.aria-label]="`More info for ${row?.name}`"
          (click)="actionClicked(row, 'More info')"
        >
          More info
        </button>
      </sky-dropdown-item>
    </sky-dropdown-menu>
  </sky-dropdown>
</ng-template>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyDataGridHarness, provideSkyDataGridTesting } from '@skyux/data-grid/testing';
import { SkyDropdownHarness, SkyDropdownMenuHarness } from '@skyux/popovers/testing';

import { DataGridBasicExampleComponent } from './example.component';

describe('Basic data grid example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<DataGridBasicExampleComponent>;
    loader: HarnessLoader;
    docLoader: HarnessLoader;
  }> {
    await TestBed.configureTestingModule({
      imports: [DataGridBasicExampleComponent],
      providers: [provideSkyDataGridTesting()],
    }).compileComponents();
    const fixture = TestBed.createComponent(DataGridBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const docLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    fixture.detectChanges();

    return { fixture, loader, docLoader };
  }

  it('should create the component and show data', async () => {
    const { fixture, loader } = await setupTest();
    expect(fixture.componentInstance).toBeDefined();
    const gridHarness = await loader.getHarness(
      SkyDataGridHarness.with({
        dataSkyId: 'example-data-grid',
      }),
    );
    const waitHarness = await gridHarness.getWait();
    await expectAsync(waitHarness.isWaiting()).toBeResolvedTo(false);
    await expectAsync(gridHarness.isGridReady()).toBeResolvedTo(true);
    await expectAsync(gridHarness.getDisplayedColumnIds()).toBeResolvedTo([
      'ag-Grid-SelectionColumn',
      'context',
      'name',
      'age',
      'startDate',
      'endDate',
      'department',
      'jobTitle',
    ]);

    // Not using paging.
    await expectAsync(gridHarness.getPagingOrNull()).toBeResolvedTo(null);
    await expectAsync(gridHarness.getPaging()).toBeRejectedWithError(
      'Unable to retrieve paging. The data grid is not paged.',
    );

    await expectAsync(gridHarness.getDisplayedColumnHeaderNames()).toBeResolvedTo([
      '',
      'Context menu',
      'Name',
      'Age',
      'Start date',
      'End date',
      'Department',
      'Title',
    ]);
  });

  it('should show context menu and handle item click', async () => {
    const { loader, docLoader } = await setupTest();
    const gridHarness = await loader.getHarness(
      SkyDataGridHarness.with({
        dataSkyId: 'example-data-grid',
      }),
    );
    const menuButtonHarness = await gridHarness.queryHarness(
      SkyDropdownHarness.with({
        dataSkyId: 'context-menu-2',
      }),
    );
    await menuButtonHarness.clickDropdownButton();
    const menuHarness = await docLoader.getHarness(SkyDropdownMenuHarness);

    const moreInfoButton = await menuHarness.querySelector('button[aria-label="More info for Jane Deere"]');
    expect(moreInfoButton).toBeTruthy();
    const moreInfoActionSpy = spyOn(window, 'alert').and.stub();
    await moreInfoButton?.click();
    expect(moreInfoActionSpy).toHaveBeenCalledWith('More info clicked for Jane Deere');
  });
});
```

### Data grid with a server-side resource data source

#### example.component.ts (primary file)

```typescript
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  resource,
  signal,
} from '@angular/core';
import { SkyDataGrid, SkyDataGridColumn, SkyDataGridSort } from '@skyux/data-grid';

import { DATA_LOADER, DemoBehavior } from './data';

/**
 * @title Data grid with a server-side resource data source
 */
@Component({
  selector: 'app-data-grid-loading-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyDataGrid, SkyDataGridColumn],
})
export class DataGridLoadingExampleComponent {
  // Simulate network latency.
  public readonly delay = input(600);

  protected readonly pageSize = 5;
  protected readonly page = signal(1);

  protected readonly sort = signal<SkyDataGridSort | undefined>({
    field: 'name',
    direction: 'asc',
  });

  // The total number of rows available on the server, used to size the paging
  // controls. It is held in its own signal so it persists across page loads.
  protected readonly rowCount = signal(0);

  // Demonstration resource. An actual SPA might use [httpResource](https://angular.dev/api/common/http/httpResource)
  // to load remote data. The server applies the sort and returns one page at a
  // time, so `autoSort` and `autoPage` are disabled on the grid below.
  protected readonly data = resource({
    params: () => ({
      behavior: this.#behavior(),
      delay: this.delay(),
      page: this.page(),
      pageSize: this.pageSize,
      sort: this.sort(),
    }),
    loader: inject(DATA_LOADER),
  });

  readonly #behavior = signal<DemoBehavior>('data');

  constructor() {
    afterNextRender(() => {
      this.data.reload();
    });

    // Keep the paging controls in sync with the server's most recent total.
    effect(() => {
      const value = this.data.value();
      if (value) {
        this.rowCount.set(value.totalCount);
      }
    });
  }

  protected showData(): void {
    this.page.set(1);
    this.#behavior.set('data');
  }

  protected showEmpty(): void {
    this.#behavior.set('empty');
  }

  protected showLoading(): void {
    this.#behavior.set('loading');
  }
}
```

#### data.ts

```typescript
import { InjectionToken, ResourceLoader } from '@angular/core';

import { SkyDataGridSort } from '@skyux/data-grid';

export type DemoBehavior = 'data' | 'empty' | 'loading';

/**
 * An injection token that can be overridden in a test.
 */
export const DATA_LOADER = new InjectionToken('DATA_LOADER', {
  providedIn: 'root',
  factory: (): ResourceLoader<DataGridServerPage, DataGridServerParams> => {
    return async ({
      params,
      abortSignal,
    }: {
      params: DataGridServerParams;
      abortSignal: AbortSignal;
    }): Promise<DataGridServerPage> => {
      switch (params.behavior) {
        case 'data':
          await new Promise((resolve) => setTimeout(resolve, params.delay));
          return getServerPage(params);
        case 'empty':
          await new Promise((resolve) => setTimeout(resolve, params.delay));
          return { items: [], totalCount: 0 };
        case 'loading':
          return await new Promise((resolve) => {
            abortSignal.addEventListener('abort', () => {
              resolve({ items: [], totalCount: 0 });
            });
          });
        default:
          throw new Error();
      }
    };
  },
});

export interface DataGridLoadingRow {
  id: string;
  name: string;
  age: number;
  startDate: Date;
}

/**
 * Parameters available to the loader.
 */
export interface DataGridServerParams {
  behavior: DemoBehavior;
  delay: number;
  page: number;
  pageSize: number;
  sort: SkyDataGridSort | undefined;
}

/**
 * A single page of rows returned from the server, along with the total number
 * of rows available so the grid can size its paging controls.
 */
export interface DataGridServerPage {
  items: DataGridLoadingRow[];
  totalCount: number;
}

const DATA_GRID_DEMO_DATA: DataGridLoadingRow[] = [
  { id: '1', name: 'Billy Bob', age: 55, startDate: new Date('12/1/1994') },
  { id: '2', name: 'Jane Deere', age: 33, startDate: new Date('7/15/2009') },
  { id: '3', name: 'John Doe', age: 38, startDate: new Date('9/1/2017') },
  { id: '4', name: 'David Smith', age: 51, startDate: new Date('1/1/2012') },
  { id: '5', name: 'Emily Johnson', age: 41, startDate: new Date('1/15/2014') },
  {
    id: '6',
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
  },
  { id: '7', name: 'Carl Roberts', age: 23, startDate: new Date('11/1/2019') },
  { id: '8', name: 'Maria Garcia', age: 47, startDate: new Date('3/12/2003') },
  { id: '9', name: 'Liang Chen', age: 36, startDate: new Date('5/30/2015') },
  { id: '10', name: 'Aisha Khan', age: 29, startDate: new Date('8/4/2018') },
  { id: '11', name: 'Tom Anderson', age: 60, startDate: new Date('2/2/1989') },
  { id: '12', name: 'Sofia Rossi', age: 44, startDate: new Date('10/20/2006') },
  {
    id: '13',
    name: 'Noah Williams',
    age: 31,
    startDate: new Date('6/18/2013'),
  },
  { id: '14', name: 'Priya Patel', age: 27, startDate: new Date('4/9/2020') },
  { id: '15', name: 'Lucas Martin', age: 39, startDate: new Date('7/1/2011') },
  { id: '16', name: 'Hannah Lee', age: 34, startDate: new Date('9/22/2016') },
  { id: '17', name: 'Omar Haddad', age: 49, startDate: new Date('1/5/2001') },
  { id: '18', name: 'Grace Kim', age: 26, startDate: new Date('12/12/2021') },
  { id: '19', name: 'Ethan Brown', age: 53, startDate: new Date('3/30/1998') },
  {
    id: '20',
    name: 'Olivia Wilson',
    age: 42,
    startDate: new Date('5/14/2008'),
  },
  { id: '21', name: 'Diego Torres', age: 37, startDate: new Date('8/27/2014') },
  { id: '22', name: 'Mei Tanaka', age: 30, startDate: new Date('2/16/2017') },
  { id: '23', name: 'Samuel Owens', age: 58, startDate: new Date('11/3/1992') },
];

function compareRows(a: DataGridLoadingRow, b: DataGridLoadingRow, field: SkyDataGridSort['field']): number {
  switch (field) {
    case 'age':
      return a.age - b.age;
    case 'startDate':
      return a.startDate.getTime() - b.startDate.getTime();
    default:
      return a.name.localeCompare(b.name);
  }
}

/**
 * Simulates a server request for a single page of sorted data. A real SPA would
 * issue this request to its backend and let the server apply the sort and paging.
 */
export function getServerPage(options: {
  page: number;
  pageSize: number;
  sort: SkyDataGridSort | undefined;
}): DataGridServerPage {
  const { page, pageSize, sort } = options;
  const sorted = [...DATA_GRID_DEMO_DATA];
  if (sort) {
    sorted.sort((a, b) => compareRows(a, b, sort.field));
    if (sort.direction === 'desc') {
      sorted.reverse();
    }
  }
  const start = (page - 1) * pageSize;
  return {
    items: sorted.slice(start, start + pageSize),
    totalCount: DATA_GRID_DEMO_DATA.length,
  };
}
```

#### example.component.html

```html
<div class="sky-theme-margin-bottom-l">
  <button
    class="sky-btn sky-btn-default sky-theme-margin-right-s"
    type="button"
    data-sky-id="show-data-button"
    (click)="showData()"
  >
    Show data
  </button>
  <button
    class="sky-btn sky-btn-default sky-theme-margin-right-s"
    type="button"
    data-sky-id="show-empty-button"
    (click)="showEmpty()"
  >
    Show empty state
  </button>
  <button
    class="sky-btn sky-btn-default sky-theme-margin-right-s"
    type="button"
    data-sky-id="show-loading-button"
    (click)="showLoading()"
  >
    Show loading state
  </button>
</div>

<sky-data-grid
  data-sky-id="example-data-grid"
  autoSort="false"
  autoPage="false"
  minHeight="100"
  [data]="data.value()?.items ?? []"
  [loading]="data.isLoading()"
  [pageSize]="pageSize"
  [rowCount]="rowCount()"
  [(page)]="page"
  [(sort)]="sort"
>
  <sky-data-grid-column
    field="name"
    headingText="Name"
    helpPopoverTitle="Server-side sorting and paging"
    helpPopoverContent="Each sort or page change issues a new request to the server."
  />
  <sky-data-grid-column
    field="age"
    headingText="Age"
    dataType="number"
    width="80"
    helpPopoverTitle="Age"
    helpPopoverContent="The team member's current age, in years."
  />
  <sky-data-grid-column field="startDate" headingText="Start date" dataType="date" />
</sky-data-grid>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader, manualChangeDetection } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideSkyDataGridTesting, SkyDataGridHarness } from '@skyux/data-grid/testing';

import { Provider, ResourceLoader } from '@angular/core';
import { DATA_LOADER, DataGridServerPage, DataGridServerParams } from './data';
import { DataGridLoadingExampleComponent } from './example.component';

describe('Data grid loading example', () => {
  async function setupTest(options?: {
    dataLoader?: ResourceLoader<DataGridServerPage, DataGridServerParams>;
  }): Promise<{
    fixture: ComponentFixture<DataGridLoadingExampleComponent>;
    loader: HarnessLoader;
    gridHarness: SkyDataGridHarness;
  }> {
    const providers: Provider[] = [provideSkyDataGridTesting()];
    if (options?.dataLoader) {
      providers.push({
        provide: DATA_LOADER,
        useValue: options.dataLoader,
      });
    }
    await TestBed.configureTestingModule({
      imports: [DataGridLoadingExampleComponent],
      providers,
    }).compileComponents();
    const fixture = TestBed.createComponent(DataGridLoadingExampleComponent);
    fixture.componentRef.setInput('delay', 0);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
    const gridHarness = await loader.getHarness(SkyDataGridHarness.with({ dataSkyId: 'example-data-grid' }));

    return { fixture, loader, gridHarness };
  }

  async function settle(fixture: ComponentFixture<unknown>): Promise<void> {
    await fixture.whenStable();
    fixture.detectChanges();
    await new Promise((resolve) => setTimeout(resolve));
    fixture.detectChanges();
  }

  async function clickButton(
    fixture: ComponentFixture<DataGridLoadingExampleComponent>,
    dataSkyId: string,
  ): Promise<void> {
    (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(`[data-sky-id="${dataSkyId}"]`)?.click();
    await settle(fixture);
  }

  it('should create the component and show the first page of data', async () => {
    const { fixture, gridHarness } = await setupTest();
    expect(fixture.componentInstance).toBeDefined();
    await expectAsync(gridHarness.isGridReady()).toBeResolvedTo(true);

    const wait = await gridHarness.getWait();
    await expectAsync(wait.isWaiting()).toBeResolvedTo(false);
    // The server returns one page (pageSize = 5) at a time.
    expect(await gridHarness.getDisplayedRowCount()).toBe(5);
  });

  it('should page through the server-side data', async () => {
    const { fixture, gridHarness } = await setupTest();
    const paging = await gridHarness.getPaging();
    await expectAsync(paging.getCurrentPage()).toBeResolvedTo(1);

    await paging.clickNextButton();
    await settle(fixture);

    await expectAsync(paging.getCurrentPage()).toBeResolvedTo(2);
    expect(await gridHarness.getDisplayedRowCount()).toBe(5);
  });

  it('should clear rows and hide paging for the empty state', async () => {
    const { fixture, gridHarness } = await setupTest();
    await clickButton(fixture, 'show-empty-button');
    expect(await gridHarness.getDisplayedRowCount()).toBe(0);
    await expectAsync(gridHarness.getPagingOrNull()).toBeResolvedTo(null);
  });

  it('should show the loading overlay for the loading state', async () => {
    const emptyPage: DataGridServerPage = { items: [], totalCount: 0 };
    // The production loader's "loading" behavior never resolves until
    // aborted, so use a spy that mirrors that: resolve immediately for
    // every behavior except "loading", which hangs forever to keep the
    // grid in a sustained loading state for the assertion below.
    const loader = jasmine.createSpy('loader').and.callFake((args: { params: DataGridServerParams }) =>
      args.params.behavior === 'loading'
        ? new Promise<DataGridServerPage>(() => {
            // never resolves: sustained loading
          })
        : Promise.resolve(emptyPage),
    );
    const { fixture, gridHarness } = await setupTest({ dataLoader: loader });

    // Confirm the grid's render-readiness handshake has already completed
    // before introducing a load that never resolves. The data grid also
    // renders its own render-readiness wait through `SkyWaitHarness`
    // (separate from the loading overlay under test below); settling here,
    // while the initial "data" load still resolves immediately, ensures
    // that wait has already cleared before `manualChangeDetection` disables
    // further automatic stabilization.
    await settle(fixture);
    const readyWait = await gridHarness.getWait();
    await expectAsync(readyWait.isWaiting()).toBeResolvedTo(false);

    // The "loading" behavior's resource load never resolves, so it leaves
    // an Angular `PendingTasks` entry open indefinitely. `fixture.whenStable()`
    // - used by `clickButton`/`settle`, and internally by every CDK harness
    // query via `forceStabilize()` - awaits that same pending-task signal,
    // so it would hang forever here. `manualChangeDetection()` suspends the
    // harness environment's automatic stabilization for its duration, so
    // change detection must be driven manually below.
    await manualChangeDetection(async () => {
      (fixture.nativeElement as HTMLElement)
        .querySelector<HTMLButtonElement>('[data-sky-id="show-loading-button"]')
        ?.click();
      fixture.detectChanges();

      // AG Grid mounts its loading overlay component outside the Angular
      // zone, so poll on a bounded, real-time basis (not zone/PendingTasks
      // stability) to give it a chance to appear.
      const deadline = Date.now() + 2000;
      while (!(await gridHarness.isLoading()) && Date.now() < deadline) {
        await new Promise((resolve) => setTimeout(resolve, 25));
        fixture.detectChanges();
      }

      await expectAsync(gridHarness.isLoading()).toBeResolvedTo(true);
    });

    expect(loader).toHaveBeenCalledWith({
      params: jasmine.objectContaining({
        behavior: 'loading',
        delay: 0,
        pageSize: 5,
        page: 1,
      }),
      abortSignal: jasmine.any(AbortSignal),
      previous: { status: 'resolved' },
    });
  });

  it('should restore rows when data is shown again', async () => {
    const { fixture, gridHarness } = await setupTest();
    await clickButton(fixture, 'show-empty-button');
    expect(await gridHarness.getDisplayedRowCount()).toBe(0);

    await clickButton(fixture, 'show-data-button');
    expect(await gridHarness.getDisplayedRowCount()).toBe(5);
  });
});
```

### Data grid with paging using router query parameters

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkyDataGrid, SkyDataGridColumn } from '@skyux/data-grid';

import { DATA_GRID_DEMO_DATA } from './data';

/**
 * @title Data grid with paging using router query parameters
 */
@Component({
  selector: 'app-data-grid-paging-example',
  imports: [SkyDataGrid, SkyDataGridColumn],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './example.component.html',
})
export class DataGridPagingExampleComponent {
  protected readonly data = DATA_GRID_DEMO_DATA;

  // For demo purposes, only use the query string if we're running the demo in its own SPA as a route and not on the documentation site.
  protected readonly pageQueryParam =
    inject(ActivatedRoute, { optional: true })?.component === DataGridPagingExampleComponent ? 'page' : '';
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

export const DATA_GRID_DEMO_DATA = [
  {
    id: '1',
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: DEPARTMENTS[3],
    jobTitle: JOB_TITLES['Customer Support'][1],
    active: true,
  },
  {
    id: '2',
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][2],
    active: true,
  },
  {
    id: '3',
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: DEPARTMENTS[1],
    active: true,
  },
  {
    id: '4',
    name: 'David Smith',
    age: 51,
    startDate: new Date('1/1/2012'),
    endDate: new Date('6/15/2018'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][4],
    active: false,
  },
  {
    id: '5',
    name: 'Emily Johnson',
    age: 41,
    startDate: new Date('1/15/2014'),
    department: DEPARTMENTS[0],
    jobTitle: JOB_TITLES['Marketing'][2],
    active: true,
  },
  {
    id: '6',
    name: 'Nicole Davidson',
    age: 22,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][0],
    active: true,
  },
  {
    id: '7',
    name: 'Carl Roberts',
    age: 23,
    startDate: new Date('11/1/2019'),
    department: DEPARTMENTS[2],
    jobTitle: JOB_TITLES['Engineering'][3],
    active: true,
  },
];
```

#### example.component.html

```html
<sky-data-grid data-sky-id="example-data-grid" pageSize="5" [data]="data" [pageQueryParam]="pageQueryParam">
  <sky-data-grid-column field="name" flexWidth="3" headingText="Name" />
  <sky-data-grid-column
    field="age"
    headingText="Age"
    dataType="number"
    flexWidth="1"
    helpPopoverTitle="Age"
    helpPopoverContent="The team member's current age, in years."
  />
  <sky-data-grid-column field="startDate" headingText="Start date" dataType="date" flexWidth="2" />
  <sky-data-grid-column field="endDate" headingText="End date" dataType="date" flexWidth="2" />
  <sky-data-grid-column field="department" headingText="Department" flexWidth="3">
    <ng-template let-value="value">{{ value?.name ?? '' }}</ng-template>
  </sky-data-grid-column>
  <sky-data-grid-column field="jobTitle" headingText="Job title" flexWidth="4">
    <ng-template let-value="value">{{ value?.name ?? '' }}</ng-template>
  </sky-data-grid-column>
  <sky-data-grid-column field="active" headingText="Active" dataType="boolean" flexWidth="1" />
</sky-data-grid>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideSkyDataGridTesting, SkyDataGridHarness } from '@skyux/data-grid/testing';

import { DataGridPagingExampleComponent } from './example.component';

describe('Data grid paging example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<DataGridPagingExampleComponent>;
    loader: HarnessLoader;
  }> {
    await TestBed.configureTestingModule({
      imports: [DataGridPagingExampleComponent],
      providers: [provideRouter([]), provideSkyDataGridTesting()],
    }).compileComponents();
    const fixture = TestBed.createComponent(DataGridPagingExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();

    return { fixture, loader };
  }

  it('should create the component and show data', async () => {
    const { fixture, loader } = await setupTest();
    expect(fixture.componentInstance).toBeDefined();
    const gridHarness = await loader.getHarness(
      SkyDataGridHarness.with({
        dataSkyId: 'example-data-grid',
      }),
    );
    await expectAsync(gridHarness.isGridReady()).toBeResolvedTo(true);
    await expectAsync(gridHarness.getDisplayedColumnIds()).toBeResolvedTo([
      'name',
      'age',
      'startDate',
      'endDate',
      'department',
      'jobTitle',
      'active',
    ]);
    await expectAsync(gridHarness.getDisplayedColumnHeaderNames()).toBeResolvedTo([
      'Name',
      'Age',
      'Start date',
      'End date',
      'Department',
      'Job title',
      'Active',
    ]);
  });

  it('should page through the data grid', async () => {
    const { loader } = await setupTest();
    const gridHarness = await loader.getHarness(
      SkyDataGridHarness.with({
        dataSkyId: 'example-data-grid',
      }),
    );

    // Access the paging harness directly from the data grid harness.
    const pagingHarness = await gridHarness.getPaging();

    await expectAsync(pagingHarness.getCurrentPage()).toBeResolvedTo(1);

    await pagingHarness.clickNextButton();
    await expectAsync(pagingHarness.getCurrentPage()).toBeResolvedTo(2);

    await pagingHarness.clickPreviousButton();
    await expectAsync(pagingHarness.getCurrentPage()).toBeResolvedTo(1);

    await pagingHarness.clickPageButton(2);
    await expectAsync(pagingHarness.getCurrentPage()).toBeResolvedTo(2);
  });
});
```

### Data grid with two-way sort binding

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SkyDataGrid, SkyDataGridColumn, SkyDataGridSort } from '@skyux/data-grid';
import { SkyBoxModule } from '@skyux/layout';

import { DATA_GRID_DEMO_DATA, DataGridSortingRow } from './data';

/**
 * @title Data grid with two-way sort binding
 */
@Component({
  selector: 'app-data-grid-sorting-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyBoxModule, SkyDataGrid, SkyDataGridColumn],
})
export class DataGridSortingExampleComponent {
  protected readonly data: DataGridSortingRow[] = DATA_GRID_DEMO_DATA;

  protected readonly sort = signal<SkyDataGridSort | undefined>({
    field: 'name',
    direction: 'asc',
  });

  protected readonly sortDescription = computed(() => {
    const sort = this.sort();
    if (!sort) {
      return '(no sort applied)';
    }
    return `${sort.field} (${sort.direction === 'desc' ? 'descending' : 'ascending'})`;
  });

  protected sortByAgeDescending(): void {
    this.sort.set({ field: 'age', direction: 'desc' });
  }

  protected clearSort(): void {
    this.sort.set(undefined);
  }
}
```

#### data.ts

```typescript
export interface DataGridSortingRow {
  id: string;
  name: string;
  age: number;
  startDate: Date;
}

export const DATA_GRID_DEMO_DATA: DataGridSortingRow[] = [
  { id: '1', name: 'Billy Bob', age: 55, startDate: new Date('12/1/1994') },
  { id: '2', name: 'Jane Deere', age: 33, startDate: new Date('7/15/2009') },
  { id: '3', name: 'John Doe', age: 38, startDate: new Date('9/1/2017') },
  { id: '4', name: 'David Smith', age: 51, startDate: new Date('1/1/2012') },
  { id: '5', name: 'Emily Johnson', age: 41, startDate: new Date('1/15/2014') },
];
```

#### example.component.html

```html
<sky-box class="sky-theme-margin-bottom-l">
  <sky-box-content>
    Current sort:
    <strong data-sky-id="current-sort" class="sky-theme-margin-right-s">{{ sortDescription() }}</strong>
    <button
      class="sky-btn sky-btn-default sky-theme-margin-right-s"
      type="button"
      data-sky-id="sort-by-age-button"
      (click)="sortByAgeDescending()"
    >
      Sort by age (descending)
    </button>
    <button class="sky-btn sky-btn-default" type="button" data-sky-id="clear-sort-button" (click)="clearSort()">
      Clear sort
    </button>
  </sky-box-content>
</sky-box>

<sky-data-grid data-sky-id="example-data-grid" [data]="data" [(sort)]="sort">
  <sky-data-grid-column field="name" headingText="Name" />
  <sky-data-grid-column
    field="age"
    headingText="Age"
    dataType="number"
    width="80"
    helpPopoverTitle="Age"
    helpPopoverContent="The team member's current age, in years."
  />
  <sky-data-grid-column field="startDate" headingText="Start date" dataType="date" />
</sky-data-grid>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideSkyDataGridTesting, SkyDataGridHarness } from '@skyux/data-grid/testing';

import { DataGridSortingExampleComponent } from './example.component';

describe('Data grid sorting example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<DataGridSortingExampleComponent>;
    loader: HarnessLoader;
  }> {
    await TestBed.configureTestingModule({
      imports: [DataGridSortingExampleComponent],
      providers: [provideSkyDataGridTesting()],
    }).compileComponents();
    const fixture = TestBed.createComponent(DataGridSortingExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();

    return { fixture, loader };
  }

  function getSortText(fixture: ComponentFixture<DataGridSortingExampleComponent>): string {
    return (fixture.nativeElement as HTMLElement).querySelector('[data-sky-id="current-sort"]')?.textContent ?? '';
  }

  it('should create the component and show the initial sort', async () => {
    const { fixture, loader } = await setupTest();
    expect(fixture.componentInstance).toBeDefined();
    const gridHarness = await loader.getHarness(SkyDataGridHarness.with({ dataSkyId: 'example-data-grid' }));
    await expectAsync(gridHarness.isGridReady()).toBeResolvedTo(true);
    expect(getSortText(fixture)).toContain('name (ascending)');
  });

  it('should update the bound sort when the button is clicked', async () => {
    const { fixture } = await setupTest();
    (fixture.nativeElement as HTMLElement)
      .querySelector<HTMLButtonElement>('[data-sky-id="sort-by-age-button"]')
      ?.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(getSortText(fixture)).toContain('age (descending)');
  });

  it('should update the bound sort when a column header is clicked', async () => {
    const { fixture, loader } = await setupTest();
    const gridHarness = await loader.getHarness(SkyDataGridHarness.with({ dataSkyId: 'example-data-grid' }));
    await expectAsync(gridHarness.isGridReady()).toBeResolvedTo(true);

    // SKY grids default to a `[null, 'desc', 'asc']` sort order, so the first
    // click on an unsorted column sorts it descending.
    await gridHarness.clickColumnSortButton('age');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(getSortText(fixture)).toContain('age (descending)');
  });

  it('should clear the bound sort when the clear button is clicked', async () => {
    const { fixture } = await setupTest();
    expect(getSortText(fixture)).toContain('name (ascending)');

    (fixture.nativeElement as HTMLElement)
      .querySelector<HTMLButtonElement>('[data-sky-id="clear-sort-button"]')
      ?.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(getSortText(fixture)).toContain('no sort applied');
  });
});
```
