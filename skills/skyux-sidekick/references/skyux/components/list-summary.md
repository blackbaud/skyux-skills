---
Title: List summary
Reference: https://developer.blackbaud.com/skyux/components/list-summary
---

# List summary

The list summary component displays up to three small [key info](./key-info.md) items above lists to highlight important information that users should know at a glance.

## Usage

### Use when

Use the list summary to highlight important information about lists when users should know it at a glance. Use the first summary item to indicate the number of items in the list. Most lists should include the list summary because this list count provides valuable context.

To assist users with tasks and help them interpret lists, you can display up to two additional summary items to the right of the list count. For example, in a list of gifts, you can highlight the total value of all gifts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-count.8378fb30e0a7146555fbb94e560aa67b.png)

Do use the list summary to provide users with a list count and up to two additional items that summarize a list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-count-summaries.a458ebdfe3ff80c93a95e8ec31df0dcb.png)

Don't use the list summary to display data that doesn't help users interpret the list.

### Don't use when

Don't use the list summary when a list includes fewer than 15 items and is unlikely to change. In this scenario, the list count and other summary items are unlikely to help users.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-count-small-fixed-list.732b2a92852843beca2b09d4d0a6b513.png)

Don't use the list summary to provide a list count on a small, static list.

Don't use the list summary in contexts other than above a list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-dont-use-context.57a0ba47dfae721fb10479ec64a91411.png)

Don't display the list summary without a list.

## Anatomy

1

List count

2

Additional list summary item (optional)

3

[Help inline button](./help-inline.md) (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-anatomy.8beb9172a9ce9d338bb5507e6f496ad7.png)

## Options

### Additional list summary items

To assist users with tasks and help them interpret lists, you can display up to two additional list summary items to the right of the list count. For example, in a list of gifts, you can highlight the total value of all gifts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-additional-items.aea7ff5ded64f667e161ff4c9d019f1e.png)

You can provide users with up to two additional summary items beside the list count.

### Help inline button

When you need to supplement a list summary item with additional information, such as how the data is calculated or what it represents, you can place a [help inline button](./help-inline.md) beside the label to invoke contextual user assistance.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-options-help-inline.3069e88f2ec645c20dbfe13284e55298.png)

A help inline button can open a popover or the help panel when users need more information about a list summary item.

## Behavior and states

### Updates to summary details

When filters or search criteria are applied to a list, update the list summary to reflect the filtered list. Update both the list count and any additional summary items, and add "match" to the list count's label to indicate that the list is in a filtered state.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-behavior-update-details.aef6fa1fcb3e3a3a8b2cd1e4394bd03c.png)

Do update the details in the list summary when filters or search criteria are applied to a list.

## Layout

### Placement

Always display the list summary above the list and below the [toolbar](./toolbar.md) and [filter bar](./filter-bar.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-layout-repeater.c54bfa7160f97505279ee3f6d2df7eb0.png)

Do place list summary after toolbar and filter bar and before the list of items.

## Related information

### Components

- [Data grid](./data-grid.md)
- [Data manager](./data-manager.md)
- [Filter bar](./filter-bar.md)
- [Help inline button](./help-inline.md)
- [Key info](./key-info.md)
- [Repeater](./repeater.md)
- [Toolbar](./toolbar.md)

### Guidelines

- [Filtering lists](../design/guidelines/filtering-lists.md)
- [List page](../design/guidelines/page-layouts/list-page.md)

## Installation

NPM package

`@skyux/lists`[View in NPM](https://www.npmjs.com/package/@skyux/lists) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/lists/src/lib/modules/list-summary/list-summary.module.ts#L10)

Install with NPM

`npm install --save-exact @skyux/lists`

## SkyListSummaryModule

Type: Module

`import { SkyListSummaryModule } from '@skyux/lists';`

## SkyListSummaryComponent

Type: Component

Selector: `sky-list-summary`

Displays a horizontal list of summary statistics or key metrics in a consistent layout.

## SkyListSummaryItemComponent

Type: Component

Selector: `sky-list-summary-item`

Displays a list summary item that pairs a label with a formatted value.

### Inputs

#### `helpKey: InputSignal<string | undefined>`

A help key that identifies the global help content to display. When specified, a [help inline](./help-inline.md) button is placed beside the list summary item. Clicking the button invokes global help as configured by the application.

#### `helpPopoverContent: InputSignal<string | TemplateRef<unknown> | undefined>`

The content of the help popover. When specified, a [help inline](./help-inline.md) button is added to the list summary item. The help inline button displays a [popover](./popover.md) when clicked using the specified content and optional title.

#### `helpPopoverTitle: InputSignal<string | undefined>`

The title of the help popover. This property only applies when `helpPopoverContent` is also specified.

#### `labelText: InputSignal<string>`

Specifies a label to display beside the value in smaller, unformatted text.

#### `value: InputSignal<string | number>`

Specifies a value to display beside the label in larger, bold text.

#### `valueFormat: InputSignal<SkyNumericOptions | undefined>`

Optional formatting options for numeric values.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyListSummaryHarness

Type: Class

`import { SkyListSummaryHarness } from '@skyux/lists/testing';`

Harness for interacting with a list summary component in tests.

### Methods

#### `getSummaryItem(filter: SkyListSummaryItemHarnessFilters): Promise<SkyListSummaryItemHarness>`

Gets a specific list summary item based on the filter criteria.

#### Parameters

##### `filter: SkyListSummaryItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyListSummaryItemHarness>`

#### `getSummaryItems(filters?: SkyListSummaryItemHarnessFilters): Promise<SkyListSummaryItemHarness[]>`

Gets an array of list summary items based on the filter criteria. If no filter is provided, returns all summary items.

#### Parameters

##### `filters?: SkyListSummaryItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyListSummaryItemHarness[]>`

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

#### `SkyListSummaryHarness.with(filters: SkyListSummaryHarnessFilters): HarnessPredicate<SkyListSummaryHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyListSummaryHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyListSummaryHarnessFilters`

#### Returns

`HarnessPredicate<SkyListSummaryHarness>`

## SkyListSummaryHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyListSummaryHarness](./list-summary.md#class_sky-list-summary-harness) instances.

    interface SkyListSummaryHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyListSummaryItemHarness

Type: Class

`import { SkyListSummaryItemHarness } from '@skyux/lists/testing';`

Harness for interacting with a list summary item component in tests.

### Methods

#### `clickHelpInline(): Promise<void>`

Clicks the help inline button to show the help popover.

#### Returns

`Promise<void>`

#### `getHelpPopoverContent(): Promise<string | undefined>`

Gets the help popover content text.

#### Returns

`Promise<string | undefined>`

#### `getHelpPopoverTitle(): Promise<string | undefined>`

Gets the help popover title text.

#### Returns

`Promise<string | undefined>`

#### `getKeyInfo(): Promise<SkyKeyInfoHarness>`

Gets the key info harness for advanced interactions.

#### Returns

`Promise<SkyKeyInfoHarness>`

#### `getLabelText(): Promise<string>`

Gets the current label text.

#### Returns

`Promise<string>`

#### `getValueText(): Promise<string>`

Gets the current value text.

#### Returns

`Promise<string>`

#### `SkyListSummaryItemHarness.with(filters: SkyListSummaryItemHarnessFilters): HarnessPredicate<SkyListSummaryItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyListSummaryItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyListSummaryItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyListSummaryItemHarness>`

## SkyListSummaryItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyListSummaryItemHarness](./list-summary.md#class_sky-list-summary-item-harness) instances.

    interface SkyListSummaryItemHarnessFilters {
      dataSkyId?: string | RegExp;
      labelText?: string | RegExp;
      valueText?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `labelText?: string | RegExp`

Only find instances whose label text matches the given value.

#### `valueText?: string | RegExp`

Only find instances whose value text matches the given value.

## Code Examples

### List summary with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyListSummaryModule } from '@skyux/lists';

/**
 * @title List summary with basic setup
 */
@Component({
  selector: 'app-lists-list-summary-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyListSummaryModule],
})
export class ListsListSummaryBasicExampleComponent {
  protected summaryItems = [
    {
      label: 'Total records',
      value: 1247,
      helpPopoverContent: 'The total number of records in the current dataset.',
      helpPopoverTitle: 'Total records help',
    },
    {
      label: 'Active items',
      value: 892,
      helpPopoverContent: 'The number of items that are currently active and available for use.',
    },
    {
      label: 'Revenue',
      value: 1234567.89,
      valueFormat: { format: 'currency' },
      helpPopoverContent: 'Total revenue generated from all active items in the current period.',
    },
    {
      label: 'Average score',
      value: 87.5,
      valueFormat: { format: 'number', digitsInfo: '1.1-1' },
    },
  ];
}
```

#### example.component.html

```html
<sky-list-summary>
  @for (item of summaryItems; track item.label) {
  <sky-list-summary-item
    [labelText]="item.label"
    [value]="item.value"
    [valueFormat]="item.valueFormat"
    [helpPopoverContent]="item.helpPopoverContent"
    [helpPopoverTitle]="item.helpPopoverTitle"
  />
  }
</sky-list-summary>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectAsync } from '@skyux-sdk/testing';
import { SkyListSummaryHarness } from '@skyux/lists/testing';

import { ListsListSummaryBasicExampleComponent } from './example.component';

describe('Lists list summary basic example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ListsListSummaryBasicExampleComponent>;
    loader: HarnessLoader;
    component: ListsListSummaryBasicExampleComponent;
  }> {
    await TestBed.configureTestingModule({
      imports: [ListsListSummaryBasicExampleComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ListsListSummaryBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const component = fixture.componentInstance;

    return { fixture, loader, component };
  }

  it('should create', async () => {
    const { component } = await setupTest();
    expect(component).toBeTruthy();
  });

  it('should render the list summary component', async () => {
    const { fixture, loader } = await setupTest();
    fixture.detectChanges();

    const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);
    expect(listSummaryHarness).toBeTruthy();
  });

  it('should display all summary items', async () => {
    const { fixture, loader } = await setupTest();
    fixture.detectChanges();

    const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);
    const summaryItems = await listSummaryHarness.getSummaryItems();

    expect(summaryItems.length).toBe(4);
  });

  describe('summary item content', () => {
    it('should display correct labels and values', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);
      const summaryItems = await listSummaryHarness.getSummaryItems();

      // Test first item - Total records (abbreviated format)
      await expectAsync(summaryItems[0].getLabelText()).toBeResolvedTo('Total records');
      await expectAsync(summaryItems[0].getValueText()).toBeResolvedTo('1.2K');

      // Test third item - Revenue with currency formatting (abbreviated format)
      await expectAsync(summaryItems[2].getLabelText()).toBeResolvedTo('Revenue');
      await expectAsync(summaryItems[2].getValueText()).toBeResolvedTo('$1.2M');

      // Test fourth item - Average score with number formatting (no abbreviation for small numbers)
      await expectAsync(summaryItems[3].getLabelText()).toBeResolvedTo('Average score');
      await expectAsync(summaryItems[3].getValueText()).toBeResolvedTo('87.5');
    });
  });

  describe('help popover functionality', () => {
    it('should show help popover content when help icon is clicked', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();
      await fixture.whenStable();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);
      const summaryItems = await listSummaryHarness.getSummaryItems();

      // Click help icon on first item
      await summaryItems[0].clickHelpInline();
      fixture.detectChanges();
      await fixture.whenStable();

      // Verify help popover content
      await expectAsync(summaryItems[0].getHelpPopoverContent()).toBeResolvedTo(
        'The total number of records in the current dataset.',
      );
      await expectAsync(summaryItems[0].getHelpPopoverTitle()).toBeResolvedTo('Total records help');
    });

    it('should show help popover for items with help content only', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();
      await fixture.whenStable();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);
      const summaryItems = await listSummaryHarness.getSummaryItems();

      // Test third item - Revenue (has help content)
      await summaryItems[2].clickHelpInline();
      fixture.detectChanges();
      await fixture.whenStable();

      await expectAsync(summaryItems[2].getHelpPopoverContent()).toBeResolvedTo(
        'Total revenue generated from all active items in the current period.',
      );
    });
  });

  describe('harness filtering capabilities', () => {
    it('should find summary items by label text', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);

      // Find specific item by label
      const revenueItem = await listSummaryHarness.getSummaryItem({
        labelText: 'Revenue',
      });

      await expectAsync(revenueItem.getLabelText()).toBeResolvedTo('Revenue');
      await expectAsync(revenueItem.getValueText()).toBeResolvedTo('$1.2M');
    });

    it('should find summary items using regex patterns', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);

      // Find items with "rate" in the label
      const rateItems = await listSummaryHarness.getSummaryItems({
        labelText: /score/i,
      });

      expect(rateItems.length).toBe(1);
      await expectAsync(rateItems[0].getLabelText()).toBeResolvedTo('Average score');
    });

    it('should demonstrate dataSkyId filtering capability', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();

      // Test that dataSkyId filtering works by querying without a dataSkyId (should succeed)
      const allSummaryHarnesses = await loader.getAllHarnesses(SkyListSummaryHarness);
      expect(allSummaryHarnesses.length).toBe(1);

      // Test that specific dataSkyId filtering capability exists (returns no matches for non-existent ID)
      const specificSummaryHarnesses = await loader.getAllHarnesses(
        SkyListSummaryHarness.with({ dataSkyId: 'non-existent-id' }),
      );
      expect(specificSummaryHarnesses.length).toBe(0);
    });
  });

  describe('error handling', () => {
    it('should handle cases where no items match filter', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);

      // Try to find an item that doesn't exist
      const nonExistentItems = await listSummaryHarness.getSummaryItems({
        labelText: 'Non-existent label',
      });

      expect(nonExistentItems.length).toBe(0);
    });

    it('should throw error when trying to get single item that does not exist', async () => {
      const { fixture, loader } = await setupTest();
      fixture.detectChanges();

      const listSummaryHarness = await loader.getHarness(SkyListSummaryHarness);

      // This should throw an error since no item matches
      await expectAsync(listSummaryHarness.getSummaryItem({ labelText: 'Non-existent label' })).toBeRejected();
    });
  });
});
```
