---
Title: Search
Reference: https://developer.blackbaud.com/skyux/components/search
---

# Search

The search input lets users enter search criteria.

## Installation

NPM package

`@skyux/lookup`[View in NPM](https://www.npmjs.com/package/@skyux/lookup) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/lookup/src/lib/modules/search/search.module.ts#L27)

Install with NPM

`npm install --save-exact @skyux/lookup`

## SkySearchModule

Type: Module

`import { SkySearchModule } from '@skyux/lookup';`

## SkySearchComponent

Type: Component

Selector: `sky-search`

### Inputs

#### `ariaLabel: string | undefined`

The ARIA label for the search input. This sets the search input's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). Use a context-sensitive label, such as "Search constituents." Context is especially important when multiple search inputs are in close proximity. In toolbars, search inputs use the `listDescriptor` to provide context, and the ARIA label defaults to "Search <listDescriptor>." If the box includes a visible label, use `ariaLabelledBy` instead. For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

#### `ariaLabelledBy: string | undefined`

The HTML element ID of the element that labels the search. This sets the search's `aria-labelledby` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). If the box does not include a visible label, use `ariaLabel` instead. For more information about the `aria-labelledby` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-labelledby).

#### `debounceTime: number`

How many milliseconds to wait before searching after users enter text in the search input.

Default: `0`

#### `disabled: boolean`

Whether to disable the search.

Default: `false`

#### `expandMode: string`

The expand mode for the search input. The valid options include `"responsive"` to collapse the search input into a button on mobile devices, `"none"` to _not_ collapse the search input on mobile devices, and `"fit"` to extend the search input to fit the width of its container.

Default: `"responsive"`

#### `placeholderText: string | undefined`

Placeholder text to display in the search input until users enter search criteria.

Default: `"Find in this list"`

#### `searchText: string | undefined`

Default search criteria for the input.

### Outputs

#### `searchApply: EventEmitter<string>`

Fires when the search text is applied.

#### `searchChange: EventEmitter<string>`

Fires when the search text is changed.

#### `searchClear: EventEmitter<void>`

Fires when the search text is cleared.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkySearchHarness

Type: Class

`import { SkySearchHarness } from '@skyux/lookup/testing';`

Harness for interacting with a search component in tests.

### Methods

#### `blur(): Promise<void>`

Blurs the search input.

#### Returns

`Promise<void>`

#### `clear(): Promise<void>`

Clears the search input.

#### Returns

`Promise<void>`

#### `clickClearButton(): Promise<void>`

Clicks the search input clear button.

#### Returns

`Promise<void>`

#### `clickDismissSearchButton(): Promise<void>`

Clicks search dismiss button to collapse search back to a button.

#### Returns

`Promise<void>`

#### `clickOpenSearchButton(): Promise<void>`

Clicks the search icon button that opens search input when it is collapsed.

#### Returns

`Promise<void>`

#### `clickSubmitButton(): Promise<void>`

Clicks the search submit button.

#### Returns

`Promise<void>`

#### `enterText(value: string): Promise<void>`

Enters text into the search input and performs a search.

#### Parameters

##### `value: string`

#### Returns

`Promise<void>`

#### `focus(): Promise<void>`

Focuses the search input.

#### Returns

`Promise<void>`

#### `getAriaLabel(): Promise<string | null>`

Gets the search input's `aria-label`.

#### Returns

`Promise<string | null>`

#### `getAriaLabelledby(): Promise<string | null>`

Gets the search's aria-labelledby.

#### Returns

`Promise<string | null>`

#### `getPlaceholderText(): Promise<string | null>`

Gets the value of the input's placeholder attribute.

#### Returns

`Promise<string | null>`

#### `getValue(): Promise<string>`

Gets the value of the search input.

#### Returns

`Promise<string>`

#### `isCollapsed(): Promise<boolean>`

Whether the search input is collapsed.

#### Returns

`Promise<boolean>`

#### `isDisabled(): Promise<boolean>`

Whether the search input is disabled.

#### Returns

`Promise<boolean>`

#### `isFocused(): Promise<boolean>`

Whether the search input is focused.

#### Returns

`Promise<boolean>`

#### `SkySearchHarness.with(filters: SkySearchHarnessFilters): HarnessPredicate<SkySearchHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkySearchHarness` that meets certain criteria.

#### Parameters

##### `filters: SkySearchHarnessFilters`

#### Returns

`HarnessPredicate<SkySearchHarness>`

## SkySearchHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkySearchHarness` instances.

    interface SkySearchHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Search with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyToolbarModule } from '@skyux/layout';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkySearchModule } from '@skyux/lookup';

import { Item } from './item';

/**
 * @title Search with basic setup
 */
@Component({
  selector: 'app-lookup-search-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyRepeaterModule, SkySearchModule, SkyToolbarModule],
})
export class LookupSearchBasicExampleComponent {
  protected displayedItems: Item[];

  private items: Item[] = [
    {
      title: 'Call Robert Hernandez',
      note: 'Robert recently gave a very generous gift. We should call to thank him.',
    },
    {
      title: 'Send invitation to ball',
      note: "The Spring Ball is coming up soon. Let's get those invitations out!",
    },
    {
      title: 'Clean up desk',
      note: 'File and organize papers.',
    },
    {
      title: 'Investigate leads',
      note: 'Check out leads for important charity event funding.',
    },
    {
      title: 'Send thank you note',
      note: 'Send a thank you note to Timothy for his donation.',
    },
  ];

  protected placeholderText = 'Search through reminders.';
  protected searchAriaLabel = 'Search reminders';
  protected searchText = '';

  constructor() {
    this.displayedItems = this.items;
  }

  protected searchApplied(searchText: string): void {
    let filteredItems = this.items;
    this.searchText = searchText;

    if (searchText) {
      filteredItems = this.items.filter((item: Item) => {
        let property: keyof typeof item;

        for (property in item) {
          if (Object.prototype.hasOwnProperty.call(item, property) && (property === 'title' || property === 'note')) {
            if (item[property].includes(searchText)) {
              return true;
            }
          }
        }

        return false;
      });
    }

    this.displayedItems = filteredItems;
  }
}
```

#### example.component.html

```html
<sky-toolbar>
  <sky-toolbar-item>
    <button class="sky-btn sky-btn-default" type="button" (click)="searchApplied('Robert')">
      Predefined search text
    </button>
  </sky-toolbar-item>
  <sky-toolbar-item>
    <sky-search
      data-sky-id="example-search"
      [ariaLabel]="searchAriaLabel"
      [searchText]="searchText"
      [debounceTime]="250"
      [placeholderText]="placeholderText"
      (searchApply)="searchApplied($event)"
      (searchChange)="searchApplied($event)"
    />
  </sky-toolbar-item>
</sky-toolbar>
<sky-repeater expandMode="none">
  @for (item of displayedItems; track item) {
  <sky-repeater-item>
    <sky-repeater-item-title> {{ item.title }} </sky-repeater-item-title>
    <sky-repeater-item-content>
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
import { provideNoopSkyAnimations } from '@skyux/core';
import { SkySearchHarness } from '@skyux/lookup/testing';

import { LookupSearchBasicExampleComponent } from './example.component';

describe('Basic search example', () => {
  async function setupTest(options: { dataSkyId: string }): Promise<{
    harness: SkySearchHarness;
    fixture: ComponentFixture<LookupSearchBasicExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(LookupSearchBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const harness = await loader.getHarness(SkySearchHarness.with({ dataSkyId: options.dataSkyId }));

    fixture.detectChanges();
    await fixture.whenStable();

    return { harness, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LookupSearchBasicExampleComponent],
      providers: [provideNoopSkyAnimations()],
    });
  });

  it('should setup search component', async () => {
    const { harness } = await setupTest({
      dataSkyId: 'example-search',
    });

    await expectAsync(harness.getAriaLabel()).toBeResolvedTo('Search reminders');
    await expectAsync(harness.getPlaceholderText()).toBeResolvedTo('Search through reminders.');
  });

  it('should interact with search function', async () => {
    const { harness } = await setupTest({
      dataSkyId: 'example-search',
    });

    await harness.enterText('Send');
    await expectAsync(harness.getValue()).toBeResolvedTo('Send');

    await harness.clickClearButton();
    await expectAsync(harness.getValue()).toBeResolvedTo('');
  });
});
```

#### item.ts

```typescript
export interface Item {
  title: string;
  note: string;
}
```
