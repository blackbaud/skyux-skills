---
Title: Filter bar
Reference: https://developer.blackbaud.com/skyux/components/filter-bar
---

# Filter bar

The filter bar presents users with inline filter options to narrow lists. It allows for a large number of filter options.

## Usage

### Use when

Use the filter bar when the main or only task on a page is to narrow a collection of items or manipulate a pre-filtered collection. Use a filter bar or tabs to support the [filtering tasks](../design/guidelines/filtering-lists.md) on dedicated full-page lists, such as [list pages](../design/guidelines/page-layouts/list-page.md) or in tabs on [record pages](../design/guidelines/page-layouts/record-page.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/full-page-context.9eb411599b85fa6f4db8d7bd047c56ca.png)

Do use the filter bar with full-page lists on list pages.

Use the filter bar with pre-filtered lists where filters are already active when:

- Users need to adjust preset filter values or add additional filters to refine lists.
- Users access lists through calls to action and need to further narrow the lists before taking action.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/pre-filtered-bar.f07731a9eaf12f820440ca81321a7e81.png)

Do use the filter bar with pre-filtered lists to make workflows more efficient. Users can narrow lists further as necessary.

### Don't use when

Don't use the filter bar when:

- Users need regular access to a small number of lists.
- One list in a small group of lists needs priority or will be used most frequently.
- A small number of lists have different tasks for users to complete.

Use pre-filtered lists in [tabs](./tabs.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/tab-filters-do.a85b9657b36b424fb17d4181a0055b86.png)

Do use tabs to support easy access to a few pre-filtered lists.

Don't use the filter bar when lists need four or fewer simple filters that won't be used frequently because they don't have significant impact. Use [expandable inline filters](./filter.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filter-bar/dont-use-filters2.cac165d6491515acb0cda145335d4211.png)

Don't use the filter bar to display a few filters that won't be used frequently.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filter-bar/expandable-filters.91274c803dd781f6d795ec7ce0372617.png)

Do use expandable inline filters to hide simple filters behind a filter button.

## Anatomy

1

Toolbar divider

2

Filter bar label

3

Filter button (filter not set)

4

Filter button (filter set)

5

Clear filters button

6

Filter chooser button (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filter-bar/filter-bar-anatomy.2e8c9fa059ba767aa86d25f5ebbcfc97.png)

## Options

### Filter chooser

When a list requires many filters to give users multiple ways to narrow the collection of items, include a filter chooser to let users select the filters to include in the filter bar.

Within filter choosers, organize filters alphabetically. If some filters will be used most of the time, include them directly in the filter bar by default.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filter-bar/option-filter-chooser.791b82ee4c3464915407872ef65f3dda.png)

The filter chooser button opens a modal to select the filters to enable in the filter bar.

## Behavior and states

### Filter types

The filter bar natively supports the lookup filter type, but you can can extend it to support other filter types. The following sections describe the built-in lookup filter type and other selection methods for filtering lists.

Lookup

Numeric

Boolean

Date

Month-day

Text

Combination filters

Grouped filters

### Clearing filters

When users select **Clear all values**, confirm their intention with a [confirmation dialog](./confirm.md) before removing the filter values. This avoids losing their work by mistake.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filter-bar/clearing-filters.89fc5ebcfc1f3a20bb14005cc221ae51.png)

### Updates to summary details

When filters or search criteria are applied to a list that includes a [list summary](./list-summary.md), update the list count and any additional list summary items to reflect the filtered list. Add "match" to the list count's label to indicate that the list is in a filtered state.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/filter-list-count.769d0cd8c574c061bb42292676159f41.png)

Do update the details in the list summary when filters or search criteria are applied to a list.

## Content

When displaying filters in the filter bar by default, organize them in descending order of importance based on the tasks that users will perform. Place the most important or most frequently used filters first.

## Related information

### Components

- [Confirmation dialog](./confirm.md)
- [Data manager](./data-manager.md)
- [Expandable inline filter](./filter.md)
- [List summary](./list-summary.md)
- [Tabs](./tabs.md)

### Guidelines

- [Filtering lists](../design/guidelines/filtering-lists.md)
- [List page](../design/guidelines/page-design/list-page.md)

## Installation

NPM package

`@skyux/filter-bar`[View in NPM](https://www.npmjs.com/package/@skyux/filter-bar) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/filter-bar/src/lib/modules/filter-bar/filter-bar.module.ts#L19)

Install with NPM

`npm install --save-exact @skyux/filter-bar`

## SkyFilterBarModule

Type: Module

`import { SkyFilterBarModule } from '@skyux/filter-bar';`

## SkyFilterBarComponent

Type: Component

Selector: `sky-filter-bar`

The top-level filter bar component.

### Inputs

#### `appliedFilters: ModelSignal<SkyFilterBarFilterItem<unknown>[] | undefined>`

An array of filter items containing the IDs and values of the filters that have been set.

#### `selectedFilterIds: ModelSignal<string[] | undefined>`

An array of filter IDs that the user has selected using the built-in selection modal. Setting this input to undefined results in all filters being displayed.

## SkyFilterBarFilterState

Type: Interface

Represents the complete filter state containing both applied filters and selected filter IDs.

    interface SkyFilterBarFilterState {
      appliedFilters?: SkyFilterBarFilterItem<unknown>[];
      selectedFilterIds?: string[];
    }

### Properties

#### `appliedFilters?: SkyFilterBarFilterItem<unknown>[]`

An array of filter items containing the IDs and values of the filters that have been applied.

#### `selectedFilterIds?: string[]`

An array of filter IDs that the user has selected (for components that support filter selection).

## SkyFilterBarFilterItem

Type: Interface

Represents a specific filter item and its selected value, if any.

    interface SkyFilterBarFilterItem {
      filterId: string;
      filterValue?: SkyFilterBarFilterValue<TValue>;
    }

### Properties

#### `filterId: string`

A unique identifier for the filter item.

#### `filterValue?: SkyFilterBarFilterValue<TValue>`

The value of the filter item.

## SkyFilterBarFilterValue

Type: Interface

Represents a value for a filter item.

    interface SkyFilterBarFilterValue {
      displayValue?: string;
      value: TValue;
    }

### Properties

#### `displayValue?: string`

A human-readable string for use with values that can't be displayed to the user.

#### `value: TValue`

The real value for the filter.

## SkyFilterItemLookupComponent

Type: Component

Selector: `sky-filter-item-lookup`

A filter bar item that opens a selection modal for complex filter configuration. Use this component for lookup-type filter fields where users select one or more options from a list of values.

### Inputs

#### `filterId: InputSignal<string>`

Required

A unique identifier for the filter item.

#### `labelText: InputSignal<string>`

Required

The label to display for the filter item.

#### `searchDescriptorProperty: InputSignal<string>`

Required

The object property to display for each filter value in the selection modal when users open the filter.

#### `searchIdProperty: InputSignal<string>`

Required

The object property that represents a unique identifier for each filter value in the selection modal when users open the filter.

### Outputs

#### `searchAsync: EventEmitter<SkyFilterItemLookupSearchAsyncArgs<TValue>>`

Fires when users enter search information and allows results to be returned via an observable. The event also fires with empty search text when the filter is opened.

## SkyFilterItemLookupSearchAsyncArgs

Type: Interface

Arguments passed when an asynchronous search is executed from the selection modal opened by a filter item lookup component.

    interface SkyFilterItemLookupSearchAsyncArgs {
      continuationData?: unknown;
      filterId: string;
      offset: number;
      result?: Observable<SkyFilterItemLookupSearchAsyncResult<TValue>>;
      searchText: string;
    }

### Properties

#### `continuationData?: unknown`

A continuation token that can be set and then passed back with any future searches. This is helpful for applications that use a token to fetch data instead of an offset.

#### `filterId: string`

The unique identifier for the filter.

#### `offset: number`

The offset index of the first result to return. For example, when search is executed as a result of an infinite scroll event, the offset is set to the number of items already displayed.

#### `result?: Observable<SkyFilterItemLookupSearchAsyncResult<TValue>>`

An observable that represents the search results. Consumers should set this when the event fires so the filter item lookup component can subscribe to it and then display the results.

#### `searchText: string`

The search text entered by the user.

## SkyFilterItemLookupSearchAsyncResult

Type: Interface

The result of searching for items to display in a filter item lookup selection modal.

    interface SkyFilterItemLookupSearchAsyncResult {
      continuationData?: unknown;
      hasMore?: boolean;
      items: TValue[];
      totalCount: number;
    }

### Properties

#### `continuationData?: unknown`

Data provided on "load more" search result requests. Use this property for information such as a continuation token for paged database queries.

#### `hasMore?: boolean`

Whether there are more results that match the search criteria.

#### `items: TValue[]`

A list of items that match the search criteria. When more items match the search criteria, set the `hasMore` property to `true`. More records can be lazy-loaded as users scrolls through the search results.

#### `totalCount: number`

The total number of records that match the search criteria, including items not returned in the current list.

## SkyFilterItemModalComponent

Type: Component

Selector: `sky-filter-item-modal`

A filter bar item that opens a modal for complex filter configuration. Use this component when your filter requires a rich UI with multiple inputs, date pickers, or other complex controls that don't fit in an inline filter.

### Inputs

#### `filterId: InputSignal<string>`

Required

A unique identifier for the filter item.

#### `labelText: InputSignal<string>`

Required

The label to display for the filter item.

#### `modalComponent: InputSignal<Type<SkyFilterItemModal<TData, TValue>>>`

Required

The modal component to display when the user selects the filter. The component needs to inject a `SkyFilterItemModalInstance` object on instantiation to receive the modal instance and context from the modal service. The return value of the modal save action needs to be a `SkyFilterBarFilterValue`.

#### `modalSize: InputSignal<SkyFilterItemModalSizeType>`

The size of the modal to display. The valid options are `"small"`, `"medium"`, `"large"`, and `"fullScreen"`.

### Outputs

#### `modalOpened: EventEmitter<SkyFilterItemModalOpenedArgs<TData>>`

Fires when the user clicks the filter item. To pass additional context data to a filter modal, consumers must subscribe to this event and return the context using the observable property on the event args.

## SkyFilterItemModal

Type: Interface

A type marker for passing context object data types into the filter modal component.

    interface SkyFilterItemModal {
      modalInstance: SkyFilterItemModalInstance<TData, TValue>;
    }

### Properties

#### `modalInstance: SkyFilterItemModalInstance<TData, TValue>`

The filter modal instance to be injected into the component.

## SkyFilterItemModalInstance

Type: Class

A specialized `SkyModalInstance` wrapper.

### Properties

#### `context: SkyFilterItemModalContext<TData, TValue>`

The context provided to the filter modal component.

### Methods

#### `cancel(): void`

Closes the modal instance with `reason="cancel"`.

#### Returns

`void`

#### `save(args: SkyFilterItemModalSavedArgs<TValue>): void`

Closes the modal instance with `reason="save"`.

#### Parameters

##### `args: SkyFilterItemModalSavedArgs<TValue>`

#### Returns

`void`

## SkyFilterItemModalContext

Type: Class

The context object that is provided to a filter modal.

### Properties

#### `additionalContext: TData`

An untyped property that can track any config information relevant to the filter modal that existing options do not include.

#### `filterLabelText: string`

The name of the filter. We recommend using this value for the modal's heading.

#### `filterValue: SkyFilterBarFilterValue<TValue>`

The value of the filter.

## SkyFilterItemModalOpenedArgs

Type: Interface

Arguments passed to a filter modal when it opens.

    interface SkyFilterItemModalOpenedArgs {
      data?: Observable<TData>;
      filterId: string;
    }

### Properties

#### `data?: Observable<TData>`

An observable representing data that is passed to the filter modal as additional context.

#### `filterId: string`

The unique identifier for the filter.

## SkyFilterItemModalSavedArgs

Type: Interface

Arguments passed back from a filter modal when the user has saved.

    interface SkyFilterItemModalSavedArgs {
      filterValue: SkyFilterBarFilterValue<TValue> | undefined;
    }

### Properties

#### `filterValue: SkyFilterBarFilterValue<TValue> | undefined`

The filter value.

## SkyFilterItemModalSizeType

Type: Type alias

    type SkyFilterItemModalSizeType = "small" | "medium" | "large" | "fullScreen"

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyFilterBarHarness

Type: Class

`import { SkyFilterBarHarness } from '@skyux/filter-bar/testing';`

Harness for interacting with a filter bar component in tests.

### Methods

#### `clickClearFilters(): Promise<void>`

Clicks the clear filters button.

#### Returns

`Promise<void>`

#### `getItem(filter: SkyFilterItemHarnessFilters): Promise<SkyFilterItemHarness>`

Gets a specific filter item based on the filter criteria.

#### Parameters

##### `filter: SkyFilterItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyFilterItemHarness>`

#### `getItems(filters?: SkyFilterItemHarnessFilters): Promise<SkyFilterItemHarness[]>`

Gets an array of filter items based on the filter criteria. If no filter is provided, returns all filter items.

#### Parameters

##### `filters?: SkyFilterItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyFilterItemHarness[]>`

#### `hasActiveFilters(): Promise<boolean>`

Checks if the filter bar has active filters.

#### Returns

`Promise<boolean>`

#### `hasFilterPicker(): Promise<boolean>`

Checks if the filter picker button is visible.

#### Returns

`Promise<boolean>`

#### `openFilterPicker(): Promise<SkySelectionModalHarness>`

Clicks the filter picker button and returns a harness for the selection modal that it opened.

#### Returns

`Promise<SkySelectionModalHarness>`

#### `SkyFilterBarHarness.with(filters: SkyFilterBarHarnessFilters): HarnessPredicate<SkyFilterBarHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyFilterBarHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyFilterBarHarnessFilters`

#### Returns

`HarnessPredicate<SkyFilterBarHarness>`

## SkyFilterBarHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyFilterBarHarness` instances.

    interface SkyFilterBarHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyFilterItemHarness

Type: Class

`import { SkyFilterItemHarness } from '@skyux/filter-bar/testing';`

Harness to interact with a filter item component in tests.

### Methods

#### `click(): Promise<void>`

Clicks the filter item to open its modal.

#### Returns

`Promise<void>`

#### `getFilterValue(): Promise<string | undefined>`

Gets the filter item value.

#### Returns

`Promise<string | undefined>`

#### `getLabelText(): Promise<string>`

Gets the filter item label.

#### Returns

`Promise<string>`

#### `SkyFilterItemHarness.with(filters: SkyFilterItemHarnessFilters): HarnessPredicate<SkyFilterItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyFilterBarItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyFilterItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyFilterItemHarness>`

## SkyFilterItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyFilterItemHarness` instances.

    interface SkyFilterItemHarnessFilters {
      filterId?: string;
      labelText?: string;
    }

### Properties

#### `filterId?: string`

Finds a filter item whose filter id matches the given value.

#### `labelText?: string`

Finds a filter item whose label text matches the given value.

## Code Examples

### Filter bar with modal filter example

#### example.component.ts (primary file)

```typescript
import { Component, signal } from '@angular/core';
import { SkyFilterBarFilterItem, SkyFilterBarModule } from '@skyux/filter-bar';

import { FilterModalComponent } from './filter-modal.component';

/**
 * @title Filter bar with modal filter example
 */
@Component({
  selector: 'app-filter-bar-modal-example',
  imports: [SkyFilterBarModule],
  templateUrl: './example.component.html',
})
export class FilterBarModalExampleComponent {
  protected readonly appliedFilters = signal<SkyFilterBarFilterItem[] | undefined>(undefined);

  protected modalComponent = FilterModalComponent;
}
```

#### example.component.html

```html
<sky-filter-bar [(appliedFilters)]="appliedFilters">
  <sky-filter-item-modal
    filterId="modal-filter"
    labelText="Modal filter"
    modalSize="small"
    [modalComponent]="modalComponent"
  />
</sky-filter-bar>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';
import { SkyFilterBarHarness } from '@skyux/filter-bar/testing';
import { SkyModalHarness } from '@skyux/modals/testing';

import { FilterBarModalExampleComponent } from './example.component';
import { FilterModalHarness } from './filter-modal-harness';

describe('Filter bar with modal filter', () => {
  async function setupTest(): Promise<{
    filterBarHarness: SkyFilterBarHarness;
    fixture: ComponentFixture<FilterBarModalExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(FilterBarModalExampleComponent);
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const filterBarHarness = await loader.getHarness(SkyFilterBarHarness);

    return { filterBarHarness, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterBarModalExampleComponent],
    });
  });

  it('should display the filter bar with modal filter', async () => {
    const { filterBarHarness, fixture } = await setupTest();

    fixture.detectChanges();

    // Check that filter bar has active filters initially
    await expectAsync(filterBarHarness.hasActiveFilters()).toBeResolvedTo(
      false, // Initially no filters are applied
    );

    // Get all filter items
    const filterItems = await filterBarHarness.getItems();
    expect(filterItems).toHaveSize(1);

    // Check specific filter items exist
    const staffAssignedFilter = await filterBarHarness.getItem({
      filterId: 'modal-filter',
    });
    await expectAsync(staffAssignedFilter.getLabelText()).toBeResolvedTo('Modal filter');
  });

  it('should open filter modal and interact with form controls using custom harness', async () => {
    const { filterBarHarness, fixture } = await setupTest();
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    fixture.detectChanges();

    // Click on the Role filter to open its modal
    const modalFilter = await filterBarHarness.getItem({
      filterId: 'modal-filter',
    });

    await expectAsync(modalFilter.getFilterValue()).toBeResolvedTo(undefined);

    await modalFilter.click();

    // Get the modal and our custom filter modal harness
    const modal = await loader.getHarness(SkyModalHarness);
    const filterModalHarness = await loader.getHarness(FilterModalHarness);

    // Verify the modal opened
    await expectAsync(modal.getSize()).toBeResolvedTo('small');

    // Select an option and verify it's selected
    await filterModalHarness.selectOptionByIndex(2);

    await expectAsync(modalFilter.getFilterValue()).toBeResolvedTo('No');
  });
});
```

#### filter-modal-harness.ts

```typescript
import { HarnessPredicate } from '@angular/cdk/testing';
import { SkyComponentHarness } from '@skyux/core/testing';
import { SkyRadioGroupHarness, SkyRadioHarness } from '@skyux/forms/testing';

/**
 * Custom harness for interacting with the filter modal component in tests.
 */
export class FilterModalHarness extends SkyComponentHarness {
  public static hostSelector = '.filter-modal-demo-form';

  #getSaveButton = this.locatorFor('button.sky-btn-primary');
  #getCancelButton = this.locatorFor('button.sky-btn-link');
  #getRadioGroup = this.locatorFor(SkyRadioGroupHarness);

  public static with(): HarnessPredicate<FilterModalHarness> {
    return new HarnessPredicate(FilterModalHarness, {});
  }

  /**
   * Selects a radio button based on its 0-based index within the group.
   * Returns the label text of the selected radio button.
   */
  public async selectOptionByIndex(index: number): Promise<string | undefined> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    if (index < 0 || index >= radios.length) {
      throw new Error(`Radio index ${index} is out of bounds (found ${radios.length} radios).`);
    }
    const radio = radios[index];
    await radio.check();
    const label = await radio.getLabelText();
    await (await this.#getSaveButton()).click();
    return label;
  }

  /**
   * Selects the radio button with label text that matches the provided, case-sensitive label.
   * Returns `true` if the radio button is found and selected.
   */
  public async selectOptionByLabel(labelText: string): Promise<boolean> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    for (const radio of radios) {
      if ((await radio.getLabelText()) === labelText) {
        await radio.check();
        await (await this.#getSaveButton()).click();
        return true;
      }
    }
    return false;
  }

  /**
   * Returns all radio button labels in the order that they appear in the modal. This does not modify the selection.
   */
  public async getOptionLabels(): Promise<(string | undefined)[]> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    const labels: (string | undefined)[] = [];
    for (const radio of radios) {
      labels.push(await radio.getLabelText());
    }
    return labels;
  }

  /**
   * Returns the selected radio button. Returns `undefined` if none are selected.
   */
  public async getCheckedRadio(): Promise<SkyRadioHarness | undefined> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    for (const radio of radios) {
      if (await radio.isChecked()) {
        return radio;
      }
    }
    return undefined;
  }

  /**
   * Clicks the Cancel button.
   */
  public async clickCancel(): Promise<void> {
    const cancelButton = await this.#getCancelButton();
    await cancelButton.click();
  }
}
```

#### filter-modal.component.html

```html
<form class="filter-modal-demo-form" novalidate [formGroup]="formGroup">
  <sky-modal [headingText]="headingText">
    <sky-modal-content>
      <sky-radio-group formControlName="selectedOption">
        @for (option of options; track option.value) {
        <sky-radio [value]="option.value" [labelText]="option.displayValue" />
        }
      </sky-radio-group>
    </sky-modal-content>
    <sky-modal-footer>
      <button class="sky-btn sky-btn-primary" type="button" (click)="save()">Save</button>
      <button class="sky-btn sky-btn-link" type="button" (click)="modalInstance.cancel()">Cancel</button>
    </sky-modal-footer>
  </sky-modal>
</form>
```

#### filter-modal.component.ts

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyFilterItemModal, SkyFilterItemModalInstance } from '@skyux/filter-bar';
import { SkyInputBoxModule, SkyRadioModule } from '@skyux/forms';
import { SkyModalModule } from '@skyux/modals';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  imports: [FormsModule, ReactiveFormsModule, SkyInputBoxModule, SkyModalModule, SkyRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterModalComponent implements SkyFilterItemModal {
  public readonly modalInstance = inject(SkyFilterItemModalInstance);
  readonly #context = this.modalInstance.context;
  readonly #formBuilder: FormBuilder = inject(FormBuilder);
  protected headingText = this.#context.filterLabelText;
  protected options = [
    { value: null, displayValue: 'All' },
    { value: true, displayValue: 'Yes' },
    { value: false, displayValue: 'No' },
  ];
  protected selectedValue = this.#context.filterValue;

  protected formGroup: FormGroup = this.#formBuilder.group({
    selectedOption: this.#formBuilder.control(this.selectedValue?.value ?? null),
  });

  protected save(): void {
    const selectedValue = this.formGroup.get('selectedOption')?.value as boolean | null;

    if (selectedValue !== null) {
      // Map the primitive value back to the full object
      const selectedItem = this.options.find((item) => item.value === selectedValue);
      this.modalInstance.save({ filterValue: selectedItem });
    } else {
      this.modalInstance.save({ filterValue: undefined });
    }
  }
}
```

### Filter bar with lookup filter example

#### example.component.ts (primary file)

```typescript
import { Component, inject, signal } from '@angular/core';
import { SkyFilterBarFilterItem, SkyFilterBarModule, SkyFilterItemLookupSearchAsyncArgs } from '@skyux/filter-bar';

import { ExampleService } from './example.service';

/**
 * @title Filter bar with lookup filter example
 */
@Component({
  selector: 'app-filter-bar-lookup-example',
  imports: [SkyFilterBarModule],
  templateUrl: './example.component.html',
})
export class FilterBarLookupExampleComponent {
  protected readonly appliedFilters = signal<SkyFilterBarFilterItem[] | undefined>(undefined);

  readonly #svc = inject(ExampleService);

  protected onSearchAsync(args: SkyFilterItemLookupSearchAsyncArgs): void {
    // In a real-world application the search service might return an Observable
    // created by calling HttpClient.get(). Assigning that Observable to the result
    // allows the lookup component to cancel the web request if it does not complete
    // before the user searches again.
    args.result = this.#svc.search(args.searchText);
  }
}
```

#### example.component.html

```html
<sky-filter-bar [(appliedFilters)]="appliedFilters">
  <sky-filter-item-lookup
    filterId="lookup-filter"
    labelText="Lookup filter"
    searchDescriptorProperty="displayValue"
    searchIdProperty="value"
    (searchAsync)="onSearchAsync($event)"
  />
</sky-filter-bar>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';
import { SkyFilterBarHarness } from '@skyux/filter-bar/testing';

import { FilterBarLookupExampleComponent } from './example.component';

describe('Filter bar with lookup filter', () => {
  async function setupTest(): Promise<{
    filterBarHarness: SkyFilterBarHarness;
    fixture: ComponentFixture<FilterBarLookupExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(FilterBarLookupExampleComponent);
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const filterBarHarness = await loader.getHarness(SkyFilterBarHarness);

    return { filterBarHarness, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterBarLookupExampleComponent],
    });
  });

  it('should display the filter bar with lookup filter', async () => {
    const { filterBarHarness, fixture } = await setupTest();

    fixture.detectChanges();

    // Check that filter bar has active filters initially
    await expectAsync(filterBarHarness.hasActiveFilters()).toBeResolvedTo(
      false, // Initially no filters are applied
    );

    // Get all filter items
    const filterItems = await filterBarHarness.getItems();
    expect(filterItems).toHaveSize(1);

    // Check specific filter items exist
    const staffAssignedFilter = await filterBarHarness.getItem({
      filterId: 'lookup-filter',
    });
    await expectAsync(staffAssignedFilter.getLabelText()).toBeResolvedTo('Lookup filter');
  });
});
```

#### example.service.ts

```typescript
import { Injectable } from '@angular/core';
import { SkyFilterBarFilterValue, SkyFilterItemLookupSearchAsyncResult } from '@skyux/filter-bar';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/* cspell: disable */
const people: SkyFilterBarFilterValue[] = [
  { value: '1', displayValue: 'Solomon Hurley' },
  { value: '2', displayValue: 'Kanesha Hutto' },
  { value: '3', displayValue: 'Darcel Lenz' },
  { value: '4', displayValue: 'Cheyenne Lightfoot' },
  { value: '5', displayValue: 'Jack Lovett' },
  { value: '6', displayValue: 'Wonda Lumpkin' },
  { value: '7', displayValue: 'Kristeen Lunsford' },
  { value: '8', displayValue: 'Clarice Overton' },
  { value: '9', displayValue: 'Martine Rocha' },
  { value: '10', displayValue: 'Tonja Sanderson' },
  { value: '11', displayValue: 'Molly Seymour' },
  { value: '12', displayValue: 'Ed Sipes' },
  { value: '13', displayValue: 'Cristen Sizemore' },
  { value: '14', displayValue: 'Rod Tomlinson' },
  { value: '15', displayValue: 'Eliza Vanhorn' },
  { value: '16', displayValue: 'Jessy Witherspoon' },
  { value: '17', displayValue: 'Ilene Woo' },
];
/* cspell: enable */

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  public search(searchText: string): Observable<SkyFilterItemLookupSearchAsyncResult> {
    searchText = searchText.toUpperCase();

    const matchingPeople = people.filter((person) => person.displayValue?.toUpperCase().includes(searchText));

    // Simulate a network call with latency. A real-world application might
    // use Angular's HttpClient to create an Observable from a call to a
    // web service.
    return of({
      hasMore: false,
      items: matchingPeople,
      totalCount: matchingPeople.length,
    }).pipe(delay(800));
  }
}
```

### Filter bar with selectable filters example

#### example.component.ts (primary file)

```typescript
import { Component, signal } from '@angular/core';
import { SkyFilterBarFilterItem, SkyFilterBarModule, SkyFilterItemLookupSearchAsyncArgs } from '@skyux/filter-bar';

import { of } from 'rxjs';

import { ApplicationFeeFilterModalComponent } from './application-fee-filter-modal.component';
import { FILTER_SELECTION_VALUES } from './filter-selection-values';

/**
 * @title Filter bar with selectable filters example
 */
@Component({
  selector: 'app-filter-bar-selectable-example',
  imports: [SkyFilterBarModule],
  templateUrl: './example.component.html',
})
export class FilterBarSelectableExampleComponent {
  protected readonly appliedFilters = signal<SkyFilterBarFilterItem[] | undefined>(undefined);
  protected readonly selectedFilterIds = signal<string[] | undefined>([
    'staff-assigned',
    'entering-grade',
    'current-grade',
    'application-fee-received',
  ]);

  protected applicationFeeModal = ApplicationFeeFilterModalComponent;

  protected onSearchAsync(args: SkyFilterItemLookupSearchAsyncArgs): void {
    let results = FILTER_SELECTION_VALUES[args.filterId];
    const count = results.length;
    if (args.searchText) {
      results = results.filter((result) => result.displayValue?.includes(args.searchText));
    }
    args.result = of({ items: results, totalCount: count });
  }
}
```

#### application-fee-filter-modal.component.html

```html
<form class="filter-modal-demo-form" novalidate [formGroup]="formGroup">
  <sky-modal [headingText]="headingText">
    <sky-modal-content>
      <sky-radio-group formControlName="selectedOption">
        @for (option of options; track option.value) {
        <sky-radio [value]="option.value" [labelText]="option.displayValue" />
        }
      </sky-radio-group>
    </sky-modal-content>
    <sky-modal-footer>
      <button class="sky-btn sky-btn-primary" type="button" (click)="save()">Save</button>
      <button class="sky-btn sky-btn-link" type="button" (click)="modalInstance.cancel()">Cancel</button>
    </sky-modal-footer>
  </sky-modal>
</form>
```

#### application-fee-filter-modal.component.ts

```typescript
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyFilterItemModal, SkyFilterItemModalInstance } from '@skyux/filter-bar';
import { SkyInputBoxModule, SkyRadioModule } from '@skyux/forms';
import { SkyModalModule } from '@skyux/modals';

@Component({
  selector: 'app-application-fee-filter-modal',
  templateUrl: './application-fee-filter-modal.component.html',
  imports: [FormsModule, ReactiveFormsModule, SkyInputBoxModule, SkyModalModule, SkyRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationFeeFilterModalComponent implements SkyFilterItemModal {
  public readonly modalInstance = inject(SkyFilterItemModalInstance);
  readonly #context = this.modalInstance.context;
  readonly #formBuilder: FormBuilder = inject(FormBuilder);
  protected headingText = this.#context.filterLabelText;
  protected options = [
    { value: null, displayValue: 'All' },
    { value: true, displayValue: 'Yes' },
    { value: false, displayValue: 'No' },
  ];
  protected selectedValue = this.#context.filterValue;

  protected formGroup: FormGroup = this.#formBuilder.group({
    selectedOption: this.#formBuilder.control(this.selectedValue?.value ?? null),
  });

  protected save(): void {
    const selectedValue = this.formGroup.get('selectedOption')?.value as boolean | null;

    if (selectedValue !== null) {
      // Map the primitive value back to the full object
      const selectedItem = this.options.find((item) => item.value === selectedValue);
      this.modalInstance.save({ filterValue: selectedItem });
    } else {
      this.modalInstance.save({ filterValue: undefined });
    }
  }
}
```

#### example.component.html

```html
<sky-filter-bar [(appliedFilters)]="appliedFilters" [(selectedFilterIds)]="selectedFilterIds">
  <sky-filter-item-modal
    filterId="application-fee-received"
    labelText="Application fee received"
    modalSize="small"
    [modalComponent]="applicationFeeModal"
  />
  <sky-filter-item-lookup
    filterId="community-connection"
    labelText="Community connection"
    searchDescriptorProperty="displayValue"
    searchIdProperty="value"
    (searchAsync)="onSearchAsync($event)"
  />
  <sky-filter-item-lookup
    filterId="current-grade"
    labelText="Current grade"
    searchDescriptorProperty="displayValue"
    searchIdProperty="value"
    (searchAsync)="onSearchAsync($event)"
  />
  <sky-filter-item-lookup
    filterId="entering-grade"
    labelText="Entering grade"
    searchDescriptorProperty="displayValue"
    searchIdProperty="value"
    (searchAsync)="onSearchAsync($event)"
  />
  <sky-filter-item-lookup
    filterId="role"
    labelText="Role"
    searchDescriptorProperty="displayValue"
    searchIdProperty="value"
    (searchAsync)="onSearchAsync($event)"
  />
  <sky-filter-item-lookup
    filterId="staff-assigned"
    labelText="Staff assigned"
    searchDescriptorProperty="displayValue"
    searchIdProperty="value"
    (searchAsync)="onSearchAsync($event)"
  />
</sky-filter-bar>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';
import { SkyFilterBarHarness } from '@skyux/filter-bar/testing';
import { SkyModalHarness } from '@skyux/modals/testing';

import { FilterBarSelectableExampleComponent } from './example.component';
import { FilterModalHarness } from './filter-modal-harness';

describe('Filter bar with selectable filters', () => {
  async function setupTest(): Promise<{
    filterBarHarness: SkyFilterBarHarness;
    fixture: ComponentFixture<FilterBarSelectableExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(FilterBarSelectableExampleComponent);
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const filterBarHarness = await loader.getHarness(SkyFilterBarHarness);

    return { filterBarHarness, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterBarSelectableExampleComponent],
    });
  });

  it('should display the filter bar with initial filters', async () => {
    const { filterBarHarness, fixture } = await setupTest();

    fixture.detectChanges();

    // Check that filter bar has active filters initially
    await expectAsync(filterBarHarness.hasActiveFilters()).toBeResolvedTo(
      false, // Initially no filters are applied
    );

    // Get all filter items
    const filterItems = await filterBarHarness.getItems();
    expect(filterItems).toHaveSize(4);

    // Check specific filter items exist
    const staffAssignedFilter = await filterBarHarness.getItem({
      filterId: 'staff-assigned',
    });
    await expectAsync(staffAssignedFilter.getLabelText()).toBeResolvedTo('Staff assigned');

    const currentGradeFilter = await filterBarHarness.getItem({
      filterId: 'current-grade',
    });
    await expectAsync(currentGradeFilter.getLabelText()).toBeResolvedTo('Current grade');
  });

  it('should open filter modal and interact with form controls using custom harness', async () => {
    const { filterBarHarness, fixture } = await setupTest();
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    fixture.detectChanges();

    // Click on the Role filter to open its modal
    const applicationFeeFilter = await filterBarHarness.getItem({
      filterId: 'application-fee-received',
    });

    await expectAsync(applicationFeeFilter.getFilterValue()).toBeResolvedTo(undefined);

    await applicationFeeFilter.click();

    // Get the modal and our custom filter modal harness
    const modal = await loader.getHarness(SkyModalHarness);
    const filterModalHarness = await loader.getHarness(FilterModalHarness);

    // Verify the modal opened
    await expectAsync(modal.getSize()).toBeResolvedTo('small');

    // Select an option and verify it's selected
    await filterModalHarness.selectOptionByIndex(2);

    await expectAsync(applicationFeeFilter.getFilterValue()).toBeResolvedTo('No');
  });
});
```

#### filter-modal-harness.ts

```typescript
import { HarnessPredicate } from '@angular/cdk/testing';
import { SkyComponentHarness } from '@skyux/core/testing';
import { SkyRadioGroupHarness, SkyRadioHarness } from '@skyux/forms/testing';

/**
 * Custom harness for interacting with the filter modal component in tests.
 */
export class FilterModalHarness extends SkyComponentHarness {
  public static hostSelector = '.filter-modal-demo-form';

  #getSaveButton = this.locatorFor('button.sky-btn-primary');
  #getCancelButton = this.locatorFor('button.sky-btn-link');
  #getRadioGroup = this.locatorFor(SkyRadioGroupHarness);

  public static with(): HarnessPredicate<FilterModalHarness> {
    return new HarnessPredicate(FilterModalHarness, {});
  }

  /**
   * Selects a radio button based on its 0-based index within the group.
   * Returns the label text of the selected radio button.
   */
  public async selectOptionByIndex(index: number): Promise<string | undefined> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    if (index < 0 || index >= radios.length) {
      throw new Error(`Radio index ${index} is out of bounds (found ${radios.length} radios).`);
    }
    const radio = radios[index];
    await radio.check();
    const label = await radio.getLabelText();
    await (await this.#getSaveButton()).click();
    return label;
  }

  /**
   * Selects the radio button with label text that matches the provided, case-sensitive label.
   * Returns `true` if the radio button is found and selected.
   */
  public async selectOptionByLabel(labelText: string): Promise<boolean> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    for (const radio of radios) {
      if ((await radio.getLabelText()) === labelText) {
        await radio.check();
        await (await this.#getSaveButton()).click();
        return true;
      }
    }
    return false;
  }

  /**
   * Returns all radio button labels in the order that they appear in the modal. This does not modify the selection.
   */
  public async getOptionLabels(): Promise<(string | undefined)[]> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    const labels: (string | undefined)[] = [];
    for (const radio of radios) {
      labels.push(await radio.getLabelText());
    }
    return labels;
  }

  /**
   * Returns the selected radio button. Returns `undefined` if none are selected.
   */
  public async getCheckedRadio(): Promise<SkyRadioHarness | undefined> {
    const group = await this.#getRadioGroup();
    const radios = await group.getRadioButtons();
    for (const radio of radios) {
      if (await radio.isChecked()) {
        return radio;
      }
    }
    return undefined;
  }

  /**
   * Clicks the Cancel button.
   */
  public async clickCancel(): Promise<void> {
    const cancelButton = await this.#getCancelButton();
    await cancelButton.click();
  }
}
```

#### filter-selection-values.ts

```typescript
import { SkyFilterBarFilterValue } from '@skyux/filter-bar';

// eslint-disable @cspell/spellchecker
export const FILTER_SELECTION_VALUES: Record<string, SkyFilterBarFilterValue[]> = {
  'community-connection': [
    { value: 'child-of-faculty', displayValue: 'Child of faculty' },
    { value: 'child-of-alum', displayValue: 'Child of alum' },
    { value: 'grandparent-is-alum', displayValue: 'Grandchild of alum' },
    { value: 'related-to-trustee', displayValue: 'Related to trustee' },
    { value: 'sibling-candidate', displayValue: 'Sibling is candidate' },
    {
      value: 'sibling-past-candidate',
      displayValue: 'Sibling is past candidate',
    },
    { value: 'sibling-student', displayValue: 'Sibling is student' },
    { value: 'sibling alum', displayValue: 'Sibling is alum' },
    {
      value: 'sibling-incoming',
      displayValue: 'Sibling is incoming student',
    },
  ],
  'current-grade': [
    { value: 'pre-k', displayValue: 'Pre-k' },
    { value: 'kindergarten', displayValue: 'Kindergarten' },
    { value: 'grade-1', displayValue: '1st grade' },
    { value: 'grade-2', displayValue: '2nd grade' },
    { value: 'grade-3', displayValue: '3rd grade' },
    { value: 'grade-4', displayValue: '4th grade' },
    { value: 'grade-5', displayValue: '5th grade' },
    { value: 'grade-6', displayValue: '6th grade' },
    { value: 'grade-7', displayValue: '7th grade' },
    { value: 'grade-8', displayValue: '8th grade' },
    { value: 'grade-9', displayValue: '9th grade' },
    { value: 'grade-10', displayValue: '10th grade' },
    { value: 'grade-11', displayValue: '11th grade' },
    { value: 'grade-12', displayValue: '12th grade' },
  ],
  'entering-grade': [
    { value: 'pre-k', displayValue: 'Pre-k' },
    { value: 'kindergarten', displayValue: 'Kindergarten' },
    { value: 'grade-1', displayValue: '1st grade' },
    { value: 'grade-2', displayValue: '2nd grade' },
    { value: 'grade-3', displayValue: '3rd grade' },
    { value: 'grade-4', displayValue: '4th grade' },
    { value: 'grade-5', displayValue: '5th grade' },
    { value: 'grade-6', displayValue: '6th grade' },
    { value: 'grade-7', displayValue: '7th grade' },
    { value: 'grade-8', displayValue: '8th grade' },
    { value: 'grade-9', displayValue: '9th grade' },
    { value: 'grade-10', displayValue: '10th grade' },
    { value: 'grade-11', displayValue: '11th grade' },
    { value: 'grade-12', displayValue: '12th grade' },
  ],
  role: [
    { value: 'candidate', displayValue: 'Candidate' },
    { value: 'incoming-student', displayValue: 'Incoming student' },
    { value: 'student', displayValue: 'Student' },
  ],
  'staff-assigned': [
    { value: '1', displayValue: 'Solomon Hurley' },
    { value: '2', displayValue: 'Kanesha Hutto' },
    { value: '3', displayValue: 'Darcel Lenz' },
    { value: '4', displayValue: 'Cheyenne Lightfoot' },
    { value: '5', displayValue: 'Jack Lovett' },
    { value: '6', displayValue: 'Wonda Lumpkin' },
    { value: '7', displayValue: 'Kristeen Lunsford' },
    { value: '8', displayValue: 'Clarice Overton' },
    { value: '9', displayValue: 'Martine Rocha' },
    { value: '10', displayValue: 'Tonja Sanderson' },
    { value: '11', displayValue: 'Molly Seymour' },
    { value: '12', displayValue: 'Ed Sipes' },
    { value: '13', displayValue: 'Cristen Sizemore' },
    { value: '14', displayValue: 'Rod Tomlinson' },
    { value: '15', displayValue: 'Eliza Vanhorn' },
    { value: '16', displayValue: 'Jessy Witherspoon' },
    { value: '17', displayValue: 'Ilene Woo' },
  ],
};
```
