---
Title: Sort
Reference: https://developer.blackbaud.com/skyux/components/sort
---

# Sort

The sort button and menu let users select sorting criteria.

## Usage

### Use when

Use to sort a list of items when there are templated columns in a list. This provides a way for users to sort templated columns because there are no corresponding column headings.

Use to sort a list of items when the list includes other views in addition to the data grid (e.g., repeater). This allows users to sort in these other views using the sort menu.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/sort/sort-multiple-view-sort.b7e9a8d84bf47c2056bc8eee44b8b1b9.png)

Do use a sort button when there are other views of the data, in addition to a data grid, to support sorting in those views (without column headers).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/sort/sort-templated-sort.4f5b671e1bd43bcc34b1293f037edd54.png)

Do use a sort button when there are templated columns to provide sort options for multiple properties within a single templated column (e.g., First name and last name).

### Don't use when

Do not include an additional sort button in the toolbar for a list when only data grid view is available. Column headers provide sorting in this case.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/sort/sort-double-sort.86c7a71865afdbd649cd0c88321a51c6.png)

Don't use a sort button if the list only uses data grid view and not templated columns. Rely on column headers for sorting.

## Anatomy

1

Sort button

2

Sort by menu

3

Selected menu option

4

Menu option

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/sort/sort-anatomy.0bb0172277fbc4eaeaf35ebca2b57957.png)

## Related information

### Components

- [Data grid](./data-grid.md)
- [Repeater](./repeater.md)
- [Toolbar](./toolbar.md)

## Installation

NPM package

`@skyux/lists`[View in NPM](https://www.npmjs.com/package/@skyux/lists) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/lists/src/lib/modules/sort/sort.module.ts#L30)

Install with NPM

`npm install --save-exact @skyux/lists`

## SkySortModule

Type: Module

`import { SkySortModule } from '@skyux/lists';`

## SkySortComponent

Type: Component

Selector: `sky-sort`

### Inputs

#### `ariaLabel: string | undefined`

The ARIA label for the sort button. This sets the sort button's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). Use a context-sensitive label, such as "Sort constituents." Context is especially important when multiple filter buttons are in close proximity. In toolbars, sort buttons use the `listDescriptor` to provide context, and the ARIA label defaults to "Sort <listDescriptor>." For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

#### `showButtonText: boolean | undefined`

Whether to display a "Sort" label beside the icon on the sort button.

Default: `false`

## SkySortItemComponent

Type: Component

Selector: `sky-sort-item`

### Inputs

#### `active: boolean | undefined`

Whether the sorting option is active.

### Outputs

#### `itemSelect: EventEmitter<any>`

Fires when a sort item is selected.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkySortHarness

Type: Class

`import { SkySortHarness } from '@skyux/lists/testing';`

Harness for interacting with a sort component in tests.

### Methods

#### `click(): Promise<void>`

Clicks the sort component.

#### Returns

`Promise<void>`

#### `getAriaLabel(): Promise<string | null>`

Gets the aria-label value.

#### Returns

`Promise<string | null>`

#### `getButtonText(): Promise<string>`

Gets the text that appears on the sort button.

#### Returns

`Promise<string>`

#### `getItem(filters: SkySortItemHarnessFilters): Promise<SkySortItemHarness>`

Gets a specific sort item based on the filter criteria.

#### Parameters

##### `filters: SkySortItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkySortItemHarness>`

#### `getItems(filters?: SkySortItemHarnessFilters): Promise<SkySortItemHarness[]>`

Gets an array of sort items based on the filter criteria. If no filter is provided, returns all sort items.

#### Parameters

##### `filters?: SkySortItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkySortItemHarness[]>`

#### `SkySortHarness.with(filters: SkySortHarnessFilters): HarnessPredicate<SkySortHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkySortHarness` that meets certain criteria.

#### Parameters

##### `filters: SkySortHarnessFilters`

#### Returns

`HarnessPredicate<SkySortHarness>`

## SkySortHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkySortHarness` instances.

    interface SkySortHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkySortItemHarness

Type: Class

`import { SkySortItemHarness } from '@skyux/lists/testing';`

Harness for interacting with a sort item component in tests.

### Methods

#### `click(): Promise<void>`

Clicks the sort item.

#### Returns

`Promise<void>`

#### `getText(): Promise<string | null>`

Gets the sort item text.

#### Returns

`Promise<string | null>`

#### `isActive(): Promise<boolean>`

Whether the sort item is active.

#### Returns

`Promise<boolean>`

#### `SkySortItemHarness.with(filters: SkySortItemHarnessFilters): HarnessPredicate<SkySortItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkySortItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkySortItemHarnessFilters`

#### Returns

`HarnessPredicate<SkySortItemHarness>`

## SkySortItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkySortItemHarness` instances.

    interface SkySortItemHarnessFilters {
      text?: string;
    }

### Properties

#### `text?: string`

Only find instances whose text content matches the given value.

## Code Examples

### Sort with basic setup

#### example.component.ts (primary file)

```typescript
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyRepeaterModule, SkySortModule } from '@skyux/lists';

interface Item {
  title: string;
  note: string;
  assignee: string;
  date: Date;
}

interface SortOption {
  id: number;
  label: string;
  name: keyof Item;
  descending: boolean;
}

/**
 * @title Sort with basic setup
 */
@Component({
  selector: 'app-lists-sort-basic-example',
  styles: `
    .item-wrapper {
      display: flex;
      justify-content: space-between;
    }
  `,
  templateUrl: './example.component.html',
  imports: [CommonModule, SkyRepeaterModule, SkySortModule, SkyToolbarModule],
})
export class ListsSortBasicExampleComponent implements OnInit {
  protected initialState = 3;

  protected sortedItems: Item[] = [
    {
      title: 'Call Robert Hernandez',
      note: 'Robert recently gave a very generous gift. We should call to thank him.',
      assignee: 'Debby Fowler',
      date: new Date('12/22/2015'),
    },
    {
      title: 'Send invitation to ball',
      note: "The Spring Ball is coming up soon. Let's get those invitations out!",
      assignee: 'Debby Fowler',
      date: new Date('1/1/2016'),
    },
    {
      title: 'Clean up desk',
      note: 'File and organize papers.',
      assignee: 'Tim Howard',
      date: new Date('2/2/2016'),
    },
    {
      title: 'Investigate leads',
      note: 'Check out leads for important charity event funding.',
      assignee: 'Larry Williams',
      date: new Date('4/5/2016'),
    },
    {
      title: 'Send thank you note',
      note: 'Send a thank you note to Timothy for his donation.',
      assignee: 'Catherine Hooper',
      date: new Date('11/11/2015'),
    },
  ];

  protected sortOptions: SortOption[] = [
    {
      id: 1,
      label: 'Assigned to (A - Z)',
      name: 'assignee',
      descending: false,
    },
    {
      id: 2,
      label: 'Assigned to (Z - A)',
      name: 'assignee',
      descending: true,
    },
    {
      id: 3,
      label: 'Date created (newest first)',
      name: 'date',
      descending: true,
    },
    {
      id: 4,
      label: 'Date created (oldest first)',
      name: 'date',
      descending: false,
    },
    {
      id: 5,
      label: 'Note title (A - Z)',
      name: 'title',
      descending: false,
    },
    {
      id: 6,
      label: 'Note title (Z - A)',
      name: 'title',
      descending: true,
    },
  ];

  public ngOnInit(): void {
    this.sortItems(this.sortOptions[2]);
  }

  protected sortItems(option: SortOption): void {
    this.sortedItems = this.sortedItems.sort((a, b) => {
      const descending = option.descending ? -1 : 1;
      const sortProperty: keyof typeof a = option.name;

      if (a[sortProperty] > b[sortProperty]) {
        return descending;
      } else if (a[sortProperty] < b[sortProperty]) {
        return -1 * descending;
      } else {
        return 0;
      }
    });
  }
}
```

#### example.component.html

```html
<sky-toolbar>
  <sky-toolbar-item>
    <sky-sort [showButtonText]="true">
      @for (item of sortOptions; track item) {
      <sky-sort-item [active]="initialState === item.id" (itemSelect)="sortItems(item)">
        {{ item.label }}
      </sky-sort-item>
      }
    </sky-sort>
  </sky-toolbar-item>
</sky-toolbar>
<sky-repeater expandMode="none">
  @for (item of sortedItems; track item) {
  <sky-repeater-item>
    <sky-repeater-item-title> {{ item.title }} </sky-repeater-item-title>
    <sky-repeater-item-content>
      <div class="item-wrapper">
        <div>Assigned to {{ item.assignee }}</div>
        <div>Created {{ item.date | date }}</div>
      </div>
      <div>{{ item.note }}</div>
    </sky-repeater-item-content>
  </sky-repeater-item>
  }
</sky-repeater>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkySortHarness } from '@skyux/lists/testing';

import { ListsSortBasicExampleComponent } from './example.component';

describe('Sort demo', () => {
  async function setupTest(
    options: {
      dataSkyId?: string;
    } = {},
  ): Promise<{
    sortHarness: SkySortHarness;
    fixture: ComponentFixture<ListsSortBasicExampleComponent>;
  }> {
    await TestBed.configureTestingModule({
      imports: [ListsSortBasicExampleComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ListsSortBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    const sortHarness: SkySortHarness = options.dataSkyId
      ? await loader.getHarness(
          SkySortHarness.with({
            dataSkyId: options.dataSkyId,
          }),
        )
      : await loader.getHarness(SkySortHarness);

    return { sortHarness, fixture };
  }

  it('should set up the component', async () => {
    const { sortHarness } = await setupTest();

    await sortHarness.click();

    const items = await sortHarness.getItems();

    await expectAsync(items[0].isActive()).toBeResolvedTo(false);
    await expectAsync(items[1].getText()).toBeResolvedTo('Assigned to (Z - A)');
    await expectAsync(items[2].isActive()).toBeResolvedTo(true);

    await items[3].click();

    await expectAsync(items[3].isActive()).toBeResolvedTo(true);
  });
});
```
