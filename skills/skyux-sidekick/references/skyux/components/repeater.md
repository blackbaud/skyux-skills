---
Title: Repeater
Reference: https://developer.blackbaud.com/skyux/components/repeater
---

# Repeater

Repeaters display information in containers for a list of objects. Repeater lists are effective alternatives to grids in mobile-intensive contexts and other scenarios that require the compact display of information.

## Installation

NPM package

`@skyux/lists`[View in NPM](https://www.npmjs.com/package/@skyux/lists) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/lists/src/lib/modules/repeater/repeater.module.ts#L45)

Install with NPM

`npm install --save-exact @skyux/lists`

## SkyRepeaterModule

Type: Module

`import { SkyRepeaterModule } from '@skyux/lists';`

## SkyRepeaterComponent

Type: Component

Selector: `sky-repeater`

Creates a container to display repeater items.

### Inputs

#### `activeIndex: number | undefined`

The index of the repeater item to visually highlight as active. For example, use this property in conjunction with the [split view component](./split-view.md) to highlight a repeater item while users edit it. Only one item can be active at a time.

#### `ariaLabel: string | undefined`

The ARIA label for the repeater list. This sets the repeater list's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

Default: `"List of items"`

#### `expandMode: SkyRepeaterExpandModeType`

The layout that determines which repeater items are expanded by default and whether repeater items are expandable and collapsible. Collapsed items display titles only. The valid options are `multiple`, `none`, and `single`.

- `multiple` loads repeater items in an expanded state unless `isExpanded` is set to `false` for a repeater item. This layout allows users to expand and collapse as many repeater items as necessary. It is best-suited to repeater items where body content is important but users don't always need to see it.
- `none` loads all repeater items in an expanded state and does not allow users to collapse them. This default layout provides the quickest access to the details in the repeater items. It is best-suited to repeater items with concise content that users need to view frequently.
- `single` loads one repeater item in an expanded state and collapses all others. The expanded repeater item is the first one where `isExpanded` is set to `true`. This layout allows users to expand one item at a time. It provides the most compact view and is best-suited to repeater items where the most important information is in the titles and users only occasionally need to view the body content.

Default: `"none"`

#### `reorderable: boolean | undefined`

Whether users can change the order of items in the repeater list. Each repeater item also has `reorderable` property to indicate whether users can change its order.

Default: `false`

### Outputs

#### `activeIndexChange: EventEmitter<number>`

Fires when the active repeater item changes.

#### `orderChange: EventEmitter<any[]>`

Fires when users change the order of repeater items. This event emits an ordered array of the `tag` properties that the consumer provides for each repeater item.

## SkyRepeaterItemComponent

Type: Component

Selector: `sky-repeater-item`

Creates an individual repeater item.

### Inputs

#### `disabled: boolean | undefined`

Whether to disable a selectable repeater item.

#### `inlineFormConfig: SkyInlineFormConfig | undefined`

Configuration options for the buttons to display on an inline form within the repeater. This property accepts [a `SkyInlineFormConfig` object](./inline-form.md#skyinlineformconfig-properties).

#### `inlineFormTemplate: TemplateRef<unknown> | undefined`

Specifies [an Angular `TemplateRef`](https://angular.dev/api/core/TemplateRef) to use as a template to instantiate an inline form within the repeater.

#### `isExpanded: boolean`

Whether the repeater item is expanded.

Default: `true`

#### `isSelected: boolean | undefined`

Whether the repeater item's checkbox is selected. When users select the repeater item, the specified property on your model is updated accordingly.

Default: `false`

#### `itemName: string | undefined`

The human-readable name for the repeater item that is available for multiple purposes, such as accessibility and instrumentation. For example, the component uses the name to construct ARIA labels for the repeater item controls to [support accessibility](../learn/accessibility/README.md). If not specified, the repeater item's title will be used for this value. For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

#### `selectable: boolean | undefined`

Whether to display a checkbox in the left of the repeater item.

Default: `false`

#### `showInlineForm: boolean | undefined`

Whether to display an inline form within the repeater. Users can toggle between displaying and hiding the inline form.

Default: `false`

#### `tag: any`

The object that the repeater component returns for this repeater item when the `orderChange` event fires. This is required if you set the `reorderable` property to `true`.

### Outputs

#### `collapse: EventEmitter<void>`

Fires when users collapse the repeater item.

#### `expand: EventEmitter<void>`

Fires when users expand the repeater item.

#### `inlineFormClose: EventEmitter<SkyInlineFormCloseArgs>`

Fires when the repeater includes an inline form and users close it. This event emits [a `SkyInlineFormCloseArgs` type](./inline-form.md#skyinlineformcloseargs-properties).

#### `isSelectedChange: EventEmitter<boolean>`

Fires when users select or clear the checkbox for the repeater item.

## SkyRepeaterItemTitleComponent

Type: Component

Selector: `sky-repeater-item-title`

Displays a header inside the repeater item.

## SkyRepeaterItemContentComponent

Type: Component

Selector: `sky-repeater-item-content`

Displays content text when the repeater is expanded.

## SkyRepeaterItemContextMenuComponent

Type: Component

Selector: `sky-repeater-item-context-menu`

Wraps and styles a [`sky-dropdown` component](../-popovers/docs/dropdown.md).

## SkyRepeaterExpandModeType

Type: Type alias

    type SkyRepeaterExpandModeType = "single" | "multiple" | "none"

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyRepeaterHarness

Type: Class

`import { SkyRepeaterHarness } from '@skyux/lists/testing';`

Harness for interacting with a repeater component in tests.

### Methods

#### `getAriaLabel(): Promise<string | null>`

Gets the aria-label for the repeater list

#### Returns

`Promise<string | null>`

#### `getRepeaterItem(filter: SkyRepeaterItemHarnessFilters): Promise<SkyRepeaterItemHarness>`

Gets a specific repeater item based on the filter criteria.

#### Parameters

##### `filter: SkyRepeaterItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyRepeaterItemHarness>`

#### `getRepeaterItems(filters?: SkyRepeaterItemHarnessFilters): Promise<SkyRepeaterItemHarness[]>`

Gets an array of repeater items based on the filter criteria. If no filter is provided, returns all repeater items.

#### Parameters

##### `filters?: SkyRepeaterItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyRepeaterItemHarness[]>`

#### `SkyRepeaterHarness.with(filters: SkyRepeaterHarnessFilters): HarnessPredicate<SkyRepeaterHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyRepeaterHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyRepeaterHarnessFilters`

#### Returns

`HarnessPredicate<SkyRepeaterHarness>`

## SkyRepeaterHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyRepeaterHarness` instances.

    interface SkyRepeaterHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyRepeaterItemHarness

Type: Class

`import { SkyRepeaterItemHarness } from '@skyux/lists/testing';`

Harness for interacting with a repeater item component in tests.

### Methods

#### `click(): Promise<void>`

Clicks on the repeater item.

#### Returns

`Promise<void>`

#### `collapse(): Promise<void>`

Collapses the repeater item, or does nothing if already collapsed.

#### Returns

`Promise<void>`

#### `deselect(): Promise<void>`

Deselects the repeater item.

#### Returns

`Promise<void>`

#### `expand(): Promise<void>`

Expands the repeater item, or does nothing if already expanded.

#### Returns

`Promise<void>`

#### `getContentText(): Promise<string>`

Gets the text of the repeater item content.

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

Gets the text of the repeater item title.

#### Returns

`Promise<string>`

#### `isCollapsible(): Promise<boolean>`

Whether the repeater item is collapsible.

#### Returns

`Promise<boolean>`

#### `isDisabled(): Promise<boolean>`

Whether a selectable repeater item is disabled.

#### Returns

`Promise<boolean>`

#### `isExpanded(): Promise<boolean>`

Whether the repeater item is expanded, or throws an error informing of the lack of collapsibility.

#### Returns

`Promise<boolean>`

#### `isReorderable(): Promise<boolean>`

Whether the repeater item is reorderable.

#### Returns

`Promise<boolean>`

#### `isSelectable(): Promise<boolean>`

Whether a repeater item has selection enabled.

#### Returns

`Promise<boolean>`

#### `isSelected(): Promise<boolean>`

Whether a selectable repeater item is selected. Throws an error if the item is not selectable.

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

Selects the repeater item.

#### Returns

`Promise<void>`

#### `sendToTop(): Promise<void>`

Moves the repeater item to the top of the list

#### Returns

`Promise<void>`

#### `SkyRepeaterItemHarness.with(filters: SkyRepeaterItemHarnessFilters): HarnessPredicate<SkyRepeaterItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyRepeaterItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyRepeaterItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyRepeaterItemHarness>`

## SkyRepeaterItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyRepeaterItemHarness` instances.

    interface SkyRepeaterItemHarnessFilters {
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

### Repeater with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyDropdownModule } from '@skyux/popovers';

/**
 * @title Repeater with basic setup
 */
@Component({
  selector: 'app-lists-repeater-basic-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports: [SkyDropdownModule, SkyRepeaterModule],
})
export class ListsRepeaterBasicExampleComponent {
  protected items: {
    note: string;
    status?: string;
    title?: string;
    accessibilityLabel?: string;
  }[] = [
    {
      title: 'Call Robert Hernandez',
      note: 'Robert recently gave a very generous gift. We should call him to thank him.',
      status: 'Completed',
    },
    {
      title: 'Send invitation to Spring Ball',
      note: "The Spring Ball is coming up soon. Let's get those invitations out!",
      status: 'Past due',
    },
    {
      title: 'Assign prospects',
      note: 'There are 14 new prospects who are not assigned to fundraisers.',
      status: 'Due tomorrow',
    },
    {
      title: 'Process gift receipts',
      note: 'There are 28 recent gifts that are not receipted.',
      status: 'Due next week',
    },
    {
      note: 'Three other tasks were not displayed',
      accessibilityLabel: 'Other tasks',
    },
  ];

  protected onActionClicked(buttonText: string): void {
    alert(buttonText + ' was clicked!');
  }
}
```

#### example.component.html

```html
<sky-repeater data-sky-id="repeater-example">
  @for (item of items; track item) {
  <sky-repeater-item [itemName]="item.accessibilityLabel">
    @if (item.title) {
    <sky-repeater-item-title class="example-repeater-flex">
      <div class="example-repeater-item-title">{{ item.title }}</div>
      <div>{{ item.status }}</div>
    </sky-repeater-item-title>
    }
    <sky-repeater-item-context-menu>
      <sky-dropdown buttonType="context-menu">
        <sky-dropdown-menu>
          <sky-dropdown-item>
            <button
              type="button"
              [attr.aria-label]="
                  'Action 1 for ' + (item.title ?? item.accessibilityLabel)
                "
              (click)="onActionClicked('Action 1')"
            >
              Action 1
            </button>
          </sky-dropdown-item>
          <sky-dropdown-item>
            <button
              type="button"
              [attr.aria-label]="
                  'Action 2 for ' + (item.title ?? item.accessibilityLabel)
                "
              (click)="onActionClicked('Action 2')"
            >
              Action 2
            </button>
          </sky-dropdown-item>
        </sky-dropdown-menu>
      </sky-dropdown>
    </sky-repeater-item-context-menu>
    <sky-repeater-item-content> {{ item.note }} </sky-repeater-item-content>
  </sky-repeater-item>
  }
</sky-repeater>
```

#### example.component.scss

```css
.example-repeater-flex {
  display: flex;
  flex-wrap: wrap;

  .example-repeater-item-title {
    flex-grow: 1;
  }
}
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import { SkyRepeaterHarness, SkyRepeaterItemHarness } from '@skyux/lists/testing';

import { ListsRepeaterBasicExampleComponent } from './example.component';

describe('Repeater basic example', () => {
  async function setupTest(): Promise<{
    repeaterHarness: SkyRepeaterHarness | null;
    repeaterItems: SkyRepeaterItemHarness[] | null;
    fixture: ComponentFixture<ListsRepeaterBasicExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(ListsRepeaterBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const repeaterHarness = await loader.getHarness(SkyRepeaterHarness.with({ dataSkyId: 'repeater-example' }));

    const repeaterItems = await repeaterHarness.getRepeaterItems();

    return { repeaterHarness, repeaterItems, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListsRepeaterBasicExampleComponent],
      providers: [provideNoopSkyAnimations()],
    });
  });

  it('should display the repeater item contents', async () => {
    const { repeaterItems } = await setupTest();

    const expectedContent = [
      {
        title: 'Call Robert Hernandez  Completed',
        body: 'Robert recently gave a very generous gift. We should call him to thank him.',
      },
      {
        title: 'Send invitation to Spring Ball  Past due',
        body: "The Spring Ball is coming up soon. Let's get those invitations out!",
      },
      {
        title: 'Assign prospects  Due tomorrow',
        body: 'There are 14 new prospects who are not assigned to fundraisers.',
      },
      {
        title: 'Process gift receipts  Due next week',
        body: 'There are 28 recent gifts that are not receipted.',
      },
      {
        title: '',
        body: 'Three other tasks were not displayed',
      },
    ];

    expect(repeaterItems?.length).toBe(expectedContent.length);

    if (repeaterItems) {
      for (let i = 0; i < repeaterItems.length; i++) {
        await expectAsync(repeaterItems[i].getTitleText()).toBeResolvedTo(expectedContent[i].title);
        await expectAsync(repeaterItems[i].getContentText()).toBeResolvedTo(expectedContent[i].body);
      }
    }
  });
});
```

### Repeater with drag and drop, removable items

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyDropdownModule } from '@skyux/popovers';

import { Item } from './item';

let nextId = 0;

/**
 * @title Repeater with drag and drop, removable items
 */
@Component({
  selector: 'app-lists-repeater-add-remove-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports: [SkyDropdownModule, SkyRepeaterModule],
})
export class ListsRepeaterAddRemoveExampleComponent {
  protected items: Item[] = [
    {
      title: 'Call Robert Hernandez',
      note: 'Robert recently gave a very generous gift. We should call him to thank him.',
      status: 'Completed',
      isSelected: false,
    },
    {
      title: 'Send invitation to Spring Ball',
      note: "The Spring Ball is coming up soon. Let's get those invitations out!",
      status: 'Past due',
      isSelected: false,
    },
    {
      title: 'Assign prospects',
      note: 'There are 14 new prospects who are not assigned to fundraisers.',
      status: 'Due tomorrow',
      isSelected: false,
      isDisabled: true,
    },
    {
      title: 'Process gift receipts',
      note: 'There are 28 recent gifts that are not receipted.',
      status: 'Due next week',
      isSelected: false,
    },
  ];

  protected addItem(): void {
    this.items.push({
      title: 'New reminder ' + ++nextId,
      note: 'This is a new reminder',
      status: 'Active',
      isSelected: false,
    });
  }

  protected changeItems(tags: Item[]): void {
    console.log('Tags in order ', tags);
  }

  protected onActionClicked(buttonText: string): void {
    alert(buttonText + ' was clicked!');
  }

  protected removeItems(): void {
    this.items = this.items.filter((item) => !item.isSelected);
  }
}
```

#### example.component.html

```html
<div class="sky-theme-margin-bottom-l">
  <sky-repeater
    data-sky-id="repeater-example"
    [expandMode]="'single'"
    [reorderable]="true"
    (orderChange)="changeItems($event)"
  >
    @for (item of items; track item) {
    <sky-repeater-item
      [selectable]="true"
      [tag]="item.note"
      [disabled]="item.isDisabled"
      [(isSelected)]="item.isSelected"
    >
      <sky-repeater-item-title class="example-repeater-flex">
        <div class="example-repeater-item-title">{{ item.title }}</div>
        <div>{{ item.status }}</div>
      </sky-repeater-item-title>
      <sky-repeater-item-context-menu>
        <sky-dropdown buttonType="context-menu">
          <sky-dropdown-menu>
            <sky-dropdown-item>
              <button type="button" (click)="onActionClicked('Action 1')">Action 1</button>
            </sky-dropdown-item>
            <sky-dropdown-item>
              <button type="button" (click)="onActionClicked('Action 2')">Action 2</button>
            </sky-dropdown-item>
          </sky-dropdown-menu>
        </sky-dropdown>
      </sky-repeater-item-context-menu>
      <sky-repeater-item-content> {{ item.note }} </sky-repeater-item-content>
    </sky-repeater-item>
    }
  </sky-repeater>
</div>

<button
  data-sky-id="add-button"
  class="sky-btn sky-btn-default sky-theme-margin-right-s"
  type="button"
  (click)="addItem()"
>
  Add item
</button>

<button
  data-sky-id="remove-button"
  class="sky-btn sky-btn-default sky-theme-margin-right-s"
  type="button"
  (click)="removeItems()"
>
  Remove selected items
</button>
```

#### example.component.scss

```css
.example-repeater-flex {
  display: flex;
  flex-wrap: wrap;

  .example-repeater-item-title {
    flex-grow: 1;
  }
}
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import { SkyRepeaterHarness } from '@skyux/lists/testing';

import { ListsRepeaterAddRemoveExampleComponent } from './example.component';

describe('Repeater add remove example', () => {
  async function setupTest(): Promise<{
    el: HTMLElement;
    fixture: ComponentFixture<ListsRepeaterAddRemoveExampleComponent>;
    repeaterHarness: SkyRepeaterHarness;
  }> {
    const fixture = TestBed.createComponent(ListsRepeaterAddRemoveExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const repeaterHarness = await loader.getHarness(SkyRepeaterHarness.with({ dataSkyId: 'repeater-example' }));

    const el = fixture.nativeElement as HTMLElement;

    return { el, fixture, repeaterHarness };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListsRepeaterAddRemoveExampleComponent],
      providers: [provideNoopSkyAnimations()],
    });
  });

  it('should allow items to be expanded and collapsed', async () => {
    const { repeaterHarness } = await setupTest();

    const repeaterItems = await repeaterHarness.getRepeaterItems();

    let first = true;

    for (const item of repeaterItems) {
      await expectAsync(item.isCollapsible()).toBeResolvedTo(true);

      // in single expand mode, the first item is expanded by default
      await expectAsync(item.isExpanded()).toBeResolvedTo(first ? true : false);

      first = false;

      await item.collapse();
      await expectAsync(item.isExpanded()).toBeResolvedTo(false);

      await item.expand();
      await expectAsync(item.isExpanded()).toBeResolvedTo(true);
    }
  });

  it('should allow items to be reordered', async () => {
    const { repeaterHarness } = await setupTest();

    const expectedContent = [
      {
        title: 'Call Robert Hernandez  Completed',
        body: 'Robert recently gave a very generous gift. We should call him to thank him.',
      },
      {
        title: 'Send invitation to Spring Ball  Past due',
        body: "The Spring Ball is coming up soon. Let's get those invitations out!",
      },
      {
        title: 'Assign prospects  Due tomorrow',
        body: 'There are 14 new prospects who are not assigned to fundraisers.',
      },
      {
        title: 'Process gift receipts  Due next week',
        body: 'There are 28 recent gifts that are not receipted.',
      },
    ];

    let repeaterItems = await repeaterHarness.getRepeaterItems();

    expect(repeaterItems).toBeDefined();
    expect(repeaterItems.length).toBe(expectedContent.length);

    for (const item of repeaterItems) {
      await expectAsync(item.isReorderable()).toBeResolvedTo(true);
    }

    await expectAsync(repeaterItems[1].getTitleText()).toBeResolvedTo(expectedContent[1].title);

    await repeaterItems[1].sendToTop();
    repeaterItems = await repeaterHarness.getRepeaterItems();

    await expectAsync(repeaterItems[1].getTitleText()).toBeResolvedTo(expectedContent[0].title);
  });

  it('should allow items to be added and removed', async () => {
    const { repeaterHarness, el, fixture } = await setupTest();

    let repeaterItems = await repeaterHarness.getRepeaterItems();

    expect(repeaterItems).toBeDefined();
    expect(repeaterItems.length).toBe(4);

    for (const item of repeaterItems) {
      await expectAsync(item.isSelectable()).toBeResolvedTo(true);
    }

    const addButton = el.querySelector<HTMLButtonElement>('[data-sky-id="add-button"]');

    const removeButton = el.querySelector<HTMLButtonElement>('[data-sky-id="remove-button"]');

    addButton?.click();
    fixture.detectChanges();

    repeaterItems = await repeaterHarness.getRepeaterItems();
    expect(repeaterItems).toBeDefined();
    expect(repeaterItems.length).toBe(5);

    await expectAsync(repeaterItems[0].isSelected()).toBeResolvedTo(false);
    await repeaterItems[0].select();

    await expectAsync(repeaterItems[0].isSelected()).toBeResolvedTo(true);
    await expectAsync(repeaterItems[1].isSelected()).toBeResolvedTo(false);

    await repeaterItems[1].select();
    await expectAsync(repeaterItems[1].isSelected()).toBeResolvedTo(true);

    removeButton?.click();
    fixture.detectChanges();

    repeaterItems = await repeaterHarness.getRepeaterItems();
    expect(repeaterItems).toBeDefined();
    expect(repeaterItems.length).toBe(3);
  });
});
```

#### item.ts

```typescript
export interface Item {
  title: string;
  note: string;
  status: string;
  isSelected: boolean;
  isDisabled?: boolean;
}
```

### Repeater with inline form

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyIconModule } from '@skyux/icon';
import { SkyInlineFormButtonLayout, SkyInlineFormCloseArgs, SkyInlineFormConfig } from '@skyux/inline-form';
import { SkyRepeaterModule } from '@skyux/lists';

interface DemoForm {
  id: FormControl<string>;
  note: FormControl<string>;
  title: FormControl<string>;
}

interface Item {
  id: string;
  title: string | undefined;
  note: string | undefined;
}

/**
 * @title Repeater with inline form
 */
@Component({
  selector: 'app-lists-repeater-inline-form-example',
  templateUrl: './example.component.html',
  imports: [FormsModule, ReactiveFormsModule, SkyIconModule, SkyInputBoxModule, SkyRepeaterModule],
})
export class ListsRepeaterInlineFormExampleComponent {
  protected activeInlineFormId: string | undefined;
  protected formGroup: FormGroup<DemoForm>;

  protected inlineFormConfig: SkyInlineFormConfig = {
    buttonLayout: SkyInlineFormButtonLayout.SaveCancel,
  };

  public items: Item[] = [
    {
      id: '1',
      title: '2019 Spring Gala',
      note: 'Gala for friends and family',
    },
    {
      id: '2',
      title: '2019 Special Winter Event',
      note: 'A special event',
    },
    {
      id: '3',
      title: '2019 Donor Appreciation Event',
      note: 'Event for all donors and families',
    },
    {
      id: '4',
      title: '2020 Spring Gala',
      note: 'Gala for friends and family',
    },
  ];

  constructor() {
    this.formGroup = inject(FormBuilder).group({
      id: new FormControl('', { nonNullable: true }),
      title: new FormControl('', { nonNullable: true }),
      note: new FormControl('', { nonNullable: true }),
    });
  }

  public showInlineForm(item: Item): void {
    this.activeInlineFormId = item.id;
    this.formGroup.patchValue({
      note: item.note,
      title: item.title,
    });
  }

  protected onInlineFormClose(args: SkyInlineFormCloseArgs): void {
    if (args.reason === 'save') {
      const found = this.items.find((item) => item.id === this.activeInlineFormId);
      if (found) {
        found.note = this.formGroup.value.note;
        found.title = this.formGroup.value.title;
      }
    }

    this.formGroup.patchValue({
      note: undefined,
      title: undefined,
    });

    // Close the active form.
    this.activeInlineFormId = undefined;
  }
}
```

#### example.component.html

```html
<sky-repeater>
  @for (item of items; track item) {
  <sky-repeater-item
    [inlineFormConfig]="inlineFormConfig"
    [inlineFormTemplate]="inlineFormTemplate"
    [showInlineForm]="activeInlineFormId === item.id"
    (inlineFormClose)="onInlineFormClose($event)"
  >
    <sky-repeater-item-title>
      <div class="sky-theme-font-body-emphasized-m">{{ item.title }}</div>
    </sky-repeater-item-title>
    <sky-repeater-item-context-menu>
      <button aria-label="Edit" class="sky-btn sky-btn-icon-borderless" type="button" (click)="showInlineForm(item)">
        <sky-icon iconName="edit" />
      </button>
    </sky-repeater-item-context-menu>

    <sky-repeater-item-content> {{ item.note }} </sky-repeater-item-content>
  </sky-repeater-item>
  }
</sky-repeater>

<ng-template #inlineFormTemplate>
  <form novalidate [formGroup]="formGroup">
    <sky-input-box labelText="Title" stacked="true">
      <input formControlName="title" type="text" />
    </sky-input-box>
    <sky-input-box labelText="Note">
      <input formControlName="note" type="text" />
    </sky-input-box>
  </form>
</ng-template>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyRepeaterHarness } from '@skyux/lists/testing';

import { ListsRepeaterInlineFormExampleComponent } from './example.component';

describe('ListsRepeaterInlineFormExampleComponent', () => {
  async function setupTest(): Promise<{
    component: ListsRepeaterInlineFormExampleComponent;
    fixture: ComponentFixture<ListsRepeaterInlineFormExampleComponent>;
    repeaterHarness: SkyRepeaterHarness;
  }> {
    await TestBed.configureTestingModule({
      imports: [ListsRepeaterInlineFormExampleComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ListsRepeaterInlineFormExampleComponent);
    const component = fixture.componentInstance;
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const repeaterHarness = await loader.getHarness(SkyRepeaterHarness);

    fixture.detectChanges();

    return { component, fixture, repeaterHarness };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListsRepeaterInlineFormExampleComponent],
    });
  });

  it('should display all repeater items', async () => {
    const { repeaterHarness } = await setupTest();

    const items = await repeaterHarness.getRepeaterItems();
    expect(items.length).toBe(4);
  });

  it('should display correct title text', async () => {
    const { repeaterHarness } = await setupTest();

    const items = await repeaterHarness.getRepeaterItems();
    await expectAsync(items[1].getTitleText()).toBeResolvedTo('2019 Special Winter Event');
    await expectAsync(items[3].getTitleText()).toBeResolvedTo('2020 Spring Gala');
  });

  it('should display correct content text', async () => {
    const { repeaterHarness } = await setupTest();

    const items = await repeaterHarness.getRepeaterItems();

    await expectAsync(items[0].getContentText()).toBeResolvedTo('Gala for friends and family');
    await expectAsync(items[2].getContentText()).toBeResolvedTo('Event for all donors and families');
  });

  it('should find items by title text', async () => {
    const { repeaterHarness } = await setupTest();

    const foundItems = await repeaterHarness.getRepeaterItems({
      titleText: '2019 Spring Gala',
    });

    expect(foundItems.length).toBe(1);
    await expectAsync(foundItems[0].getTitleText()).toBeResolvedTo('2019 Spring Gala');
  });

  it('should find items by content text using regex', async () => {
    const { repeaterHarness } = await setupTest();

    const foundItems = await repeaterHarness.getRepeaterItems({
      contentText: /special event/i,
    });

    expect(foundItems.length).toBe(1);
    await expectAsync(foundItems[0].getContentText()).toBeResolvedTo('A special event');
  });

  describe('Inline form functionality', () => {
    it('should show inline form when edit button is clicked', async () => {
      const { repeaterHarness, fixture, component } = await setupTest();

      const items = await repeaterHarness.getRepeaterItems();
      const firstItem = items[0];

      component.showInlineForm(component.items[0]);

      fixture.detectChanges();
      await fixture.whenStable();

      // Now inline form should be visible and expanded
      const inlineForm = await firstItem.getInlineForm();
      await expectAsync(inlineForm.isFormExpanded()).toBeResolvedTo(true);
    });

    it('should have save and cancel buttons in inline form', async () => {
      const { repeaterHarness, fixture, component } = await setupTest();

      const items = await repeaterHarness.getRepeaterItems();
      const firstItem = items[0];

      component.showInlineForm(component.items[0]);

      fixture.detectChanges();
      await fixture.whenStable();

      const inlineForm = await firstItem.getInlineForm();
      const buttons = await inlineForm.getButtons();

      expect(buttons.length).toBe(2);

      // Check button types and text
      const saveButton = await inlineForm.getButton({ styleType: 'primary' });
      const cancelButton = await inlineForm.getButton({ styleType: 'link' });

      expect(saveButton).toBeTruthy();
      expect(cancelButton).toBeTruthy();

      await expectAsync(saveButton.getText()).toBeResolvedTo('Save');
      await expectAsync(cancelButton.getText()).toBeResolvedTo('Cancel');
    });

    it('should have template when inline form is expanded', async () => {
      const { repeaterHarness, fixture, component } = await setupTest();

      const items = await repeaterHarness.getRepeaterItems();
      const firstItem = items[0];

      component.showInlineForm(component.items[0]);

      fixture.detectChanges();
      await fixture.whenStable();

      const inlineForm = await firstItem.getInlineForm();
      const template = await inlineForm.getTemplate();

      expect(template).toBeTruthy();
    });
  });

  it('should demonstrate advanced item searching capabilities', async () => {
    const { repeaterHarness } = await setupTest();

    // Test exact string matching
    const exactMatch = await repeaterHarness.getRepeaterItems({
      titleText: '2019 Donor Appreciation Event',
    });
    expect(exactMatch.length).toBe(1);

    // Test partial string matching with regex
    const partialMatch = await repeaterHarness.getRepeaterItems({
      contentText: /gala/i,
    });
    expect(partialMatch.length).toBe(2); // Two items have "Gala" in content

    // Test content filtering
    const contentFilter = await repeaterHarness.getRepeaterItems({
      contentText: 'Event for all donors and families',
    });
    expect(contentFilter.length).toBe(1);
  });
});
```
