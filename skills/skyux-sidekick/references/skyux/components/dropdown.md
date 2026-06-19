---
Title: Dropdown
Reference: https://developer.blackbaud.com/skyux/components/dropdown
---

# Dropdown

Dropdown buttons display menus that group sets of actions or functions.

## Usage

### Use when

Use dropdowns when users require access to multiple, related actions or when users require access to multiple, unrelated actions and you do not have room for multiple buttons.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/usage-actions.56f53001c5cd0e4d16185bcb24c73fc0.png)

Do use dropdowns to let users access multiple actions.

Use context-menu dropdowns when actions affect individual items in a list.

For details on when to include a delete action in a context-menu dropdown, see the [manage data guidelines](../design/guidelines/managing-records.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/usage-context-menu.91a631070ee2694534359e47cce965dd.png)

Do use context-menu dropdowns with items in a list.

Use icon-only dropdowns when you do not have room for text labels. For example, use icon-only dropdowns in list toolbars when screen widths are narrow.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/usage-icon-only-1.9ef33c2449a20807f180ea65f17fe68c.png)

Do use icon-only dropdowns when you do not have space for labels.

### Don't use when

Don't use dropdowns as form inputs. Use HTML `<select>` fields instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/usage-dont-input.6f166a247c0e3b1dc2d96375fc6252c9.png)

Don't use dropdowns as form inputs.

## Anatomy

1

Dropdown button

2

Dropdown menu

3

Action

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/anatomy.c5cd72fff92e6f9eef4c76ec196cf6cc.png)

## Options

### Button styles

Dropdown buttons can use the default or primary styles inherited from [SKY UX buttons](./button.md). For details about when to use the primary style, see the [primary action guidelines](../design/guidelines/page-layouts/README.md).

## Behavior and states

### Behavior

The [popover](./popover.md) component defines the behavior of dropdown menus.

### States

Dropdown buttons inherit the styling for states such as hover and disabled from [SKY UX buttons](./button.md).

## Content

### Dropdown menu action text

For actions that clearly apply to the object associated with the context menu, use the following format for the action wording:

<Verb>

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/dropdown-content-1.392cfff3677a7a49aee4af8a0bec26be.png)

For dropdown buttons with one type of action, use the following format:

Button text: <Verb>

Menu item: <Direct object>

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/dropdown-content-2.06f447f77141ae0290bb28b148000e20.png)

For dropdown buttons with more than one type of action, use the following format:

Button icon: sky-i-ellipsis

Button text: More

Menu item: <Verb> <direct object>

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/dropdown-content-3.9c19df7ab01f66ea295e4209931cd560.png)

In addition, follow these guidelines for button text:

- Use sentence-style capitalization.
- Use singular direct objects for actions that apply to one item and plural direct objects for actions that apply to multiple items.
- Don't append extra words such as “details.” For example, use “Edit constituent” rather than “Edit constituent details.”

## Layout

### Placement

Place context-menu dropdowns to the left of all row-specific content but to the right of all list controls, such as expand-collapse actions in [tree views](./angular-tree.md) and checkboxes in [grids](./grid.md) or [repeaters](./repeater.md).

Default dropdowns are positioned with the same alignment and margins as [SKY UX buttons](./button.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/dropdown/dropdown-layout.eeaaa066752bf9ad4e0fed4ec2797fcc.png)

Do put context-menu dropdowns to the left of all row-specific content in lists.

### Menu items

Organize menu items to place the most important or frequently used options at the top of the list and the least important or least frequently used items at the bottom.

## Accessibility

To provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md), set `label` on every `sky-dropdown`. This provides ARIA labels for screen readers to announce the triggers with meaningful names. When multiple dropdowns on the same page have the same visible label, give each one a unique `label` that provides context. For example, use "Context menu for Robert Hernandez" instead of just "Menu."

To indicate to screen readers how the menu and its items function and what they control, set `ariaRole` for `sky-dropdown-menu` and `sky-dropdown-item`. When the menu is labeled by a separate visible element, set `ariaLabelledBy` on the menu to that element's ID instead.

Avoid the deprecated `trigger="hover"` setting. The `hover` trigger poses accessibility issues for users on touch devices. The default `click` behavior works for keyboard, mouse, and touch.

## Related information

### Components

- [Buttons](./button.md)
- [Popovers](./popover.md)

### Guidelines

- [Buttons and links](../design/guidelines/buttons-links.md)

## Installation

NPM package

`@skyux/popovers`[View in NPM](https://www.npmjs.com/package/@skyux/popovers) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/popovers/src/lib/modules/dropdown/dropdown.module.ts#L44)

Install with NPM

`npm install --save-exact @skyux/popovers`

## SkyDropdownModule

Type: Module

`import { SkyDropdownModule } from '@skyux/popovers';`

## SkyDropdownComponent

Type: Component

Selector: `sky-dropdown`

Creates a dropdown menu that displays menu items that users may select.

### Inputs

#### `buttonStyle: string`

The background color for the dropdown button. Available values are `default`, `primary`, and `link`. These values set the background color and hover behavior from the [secondary and primary button classes](./button.md) respectively.

Default: `"default"`

#### `buttonType: SkyDropdownButtonType`

The type of button to render as the dropdown's trigger element. To display a button with a caret, specify `'select'` and render the button text or icon in a `sky-dropdown-button` element. To display a round button with an ellipsis, specify `'context-menu'`.

Default: `"select"`

#### `disabled: boolean | undefined`

Whether to disable the dropdown button.

Default: `false`

#### `horizontalAlignment: SkyDropdownHorizontalAlignment`

The horizontal alignment of the dropdown menu in relation to the dropdown button.

Default: `"left"`

#### `label: string | undefined`

The ARIA label for the dropdown. This sets the dropdown's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). If multiple dropdowns with no label or the same label appear on the same page, they must have unique ARIA labels that provide context, such as "Context menu for Robert Hernandez" or "Edit Robert Hernandez." For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

#### `title: string | undefined`

The title to display in a tooltip when users hover the mouse over the dropdown button.

#### `trigger: SkyDropdownTriggerType`

Warning: **Deprecated.** We recommend against using this property. If you choose to use the deprecated `hover` value anyway, we recommend that you not use it in combination with the `title` property.

How users interact with the dropdown button to expose the dropdown menu. We recommend the default `click` value because the `hover` value can pose [accessibility](../learn/accessibility/README.md) issues for users on touch devices such as phones and tablets.

Default: `"click"`

## SkyDropdownButtonComponent

Type: Component

Selector: `sky-dropdown-button`

Specifies the button for the dropdown menu.

## SkyDropdownMenuComponent

Type: Component

Selector: `sky-dropdown-menu`

Creates a menu that contains dropdown menu items.

### Inputs

#### `ariaLabelledBy: string | undefined`

The HTML element ID of the element that labels the dropdown menu. This sets the dropdown menu's `aria-labelledby` attribute to provide a text equivalent for [to support accessibility](../learn/accessibility/README.md). For more information about the `aria-labelledby` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-labelledby).

#### `ariaRole: string`

The ARIA role for the dropdown menu [to support accessibility](../learn/accessibility/README.md) by indicating how the dropdown menu functions and what it controls. The dropdown button inherits this value to set its `aria-haspopup` property. For information about how an ARIA role indicates what an item represents on a web page, see the [WAI-ARIA roles model](https://www.w3.org/WAI/PF/aria/#roles).

Default: `"menu"`

## SkyDropdownItemComponent

Type: Component

Selector: `sky-dropdown-item`

Specifies the items to display on the dropdown menu.

### Inputs

#### `ariaRole: string`

The ARIA role for the dropdown menu item [to support accessibility](../learn/accessibility/README.md) by indicating how the item functions and what it controls. For information about how an ARIA role indicates what an item represents on a web page, see the [WAI-ARIA roles model](https://www.w3.org/WAI/PF/aria/#roles).

Default: `"menuitem"`

## SkyDropdownButtonType

Type: Type alias

    type SkyDropdownButtonType = "select" | "context-menu" | "tab"

## SkyDropdownHorizontalAlignment

Type: Type alias

The horizontal alignment for the dropdown.

    type SkyDropdownHorizontalAlignment = "left" | "center" | "right"

## SkyDropdownTriggerType

Type: Type alias

How users interact with the dropdown button to expose the dropdown menu.

    type SkyDropdownTriggerType = "click" | "hover"

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyDropdownHarness

Type: Class

`import { SkyDropdownHarness } from '@skyux/popovers/testing';`

Harness for interacting with a dropdown component in tests.

### Methods

#### `clickDropdownButton(): Promise<void>`

Clicks the dropdown button.

#### Returns

`Promise<void>`

#### `getAriaLabel(): Promise<string | null>`

Gets the aria-label value.

#### Returns

`Promise<string | null>`

#### `getButtonStyle(): Promise<string>`

Gets the dropdown button style.

#### Returns

`Promise<string>`

#### `getButtonType(): Promise<string>`

Gets the dropdown button type.

#### Returns

`Promise<string>`

#### `getDropdownMenu(): Promise<SkyDropdownMenuHarness>`

Gets the dropdown menu component.

#### Returns

`Promise<SkyDropdownMenuHarness>`

#### `getTitle(): Promise<string | null>`

Gets the hover tooltip text.

#### Returns

`Promise<string | null>`

#### `isDisabled(): Promise<boolean>`

Gets whether the dropdown is disabled.

#### Returns

`Promise<boolean>`

#### `isOpen(): Promise<boolean>`

Gets whether the dropdown menu is open.

#### Returns

`Promise<boolean>`

#### `SkyDropdownHarness.with(filters: SkyDropdownHarnessFilters): HarnessPredicate<SkyDropdownHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDropdownHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDropdownHarnessFilters`

#### Returns

`HarnessPredicate<SkyDropdownHarness>`

## SkyDropdownHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDropdownHarness` instances.

    interface SkyDropdownHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyDropdownItemHarness

Type: Class

`import { SkyDropdownItemHarness } from '@skyux/popovers/testing';`

Harness for interacting with a dropdown item component in tests.

### Methods

#### `click(): Promise<void>`

Clicks the dropdown item.

#### Returns

`Promise<void>`

#### `getAriaRole(): Promise<string | null>`

Gets the dropdown item role.

#### Returns

`Promise<string | null>`

#### `getText(): Promise<string | null>`

Gets the menu item text.

#### Returns

`Promise<string | null>`

#### `SkyDropdownItemHarness.with(filters: SkyDropdownItemHarnessFilters): HarnessPredicate<SkyDropdownItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDropdownItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDropdownItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyDropdownItemHarness>`

## SkyDropdownItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDropdownItemHarness` instances.

    interface SkyDropdownItemHarnessFilters {
      ariaRole?: string;
      dataSkyId?: string | RegExp;
      text?: string;
    }

### Properties

#### `ariaRole?: string`

Only find instances whose role matches the given value.

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `text?: string`

Only find instances whose text content matches the given value.

## SkyDropdownMenuHarness

Type: Class

`import { SkyDropdownMenuHarness } from '@skyux/popovers/testing';`

Harness for interacting with a dropdown menu component in tests.

### Methods

#### `clickOut(): Promise<void>`

Clicks out of the dropdown menu.

#### Returns

`Promise<void>`

#### `getAriaLabelledBy(): Promise<string | null>`

Gets the `aria-labelledby` value.

#### Returns

`Promise<string | null>`

#### `getAriaRole(): Promise<string | null>`

Gets the dropdown menu role.

#### Returns

`Promise<string | null>`

#### `getItem(filter: SkyDropdownItemHarnessFilters): Promise<SkyDropdownItemHarness>`

Gets a specific dropdown menu item based on the filter criteria.

#### Parameters

##### `filter: SkyDropdownItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyDropdownItemHarness>`

#### `getItems(filters?: SkyDropdownItemHarnessFilters): Promise<SkyDropdownItemHarness[]>`

Gets an array of dropdown menu items based on the filter criteria. If no filter is provided, returns all dropdown menu items.

#### Parameters

##### `filters?: SkyDropdownItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyDropdownItemHarness[]>`

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

#### `SkyDropdownMenuHarness.with(filters: SkyDropdownMenuHarnessFilters): HarnessPredicate<SkyDropdownMenuHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyDropdownMenuHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyDropdownMenuHarnessFilters`

#### Returns

`HarnessPredicate<SkyDropdownMenuHarness>`

## SkyDropdownMenuHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyDropdownMenuHarness` instances.

    interface SkyDropdownMenuHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Dropdown with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyDropdownModule } from '@skyux/popovers';

interface DropdownItem {
  name: string;
  disabled: boolean;
}

/**
 * @title Dropdown with basic setup
 */
@Component({
  selector: 'app-popovers-dropdown-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyDropdownModule],
})
export class PopoversDropdownBasicExampleComponent {
  protected items: DropdownItem[] = [
    { name: 'Option 1', disabled: false },
    { name: 'Disabled option', disabled: true },
    { name: 'Option 3', disabled: false },
    { name: 'Option 4', disabled: false },
    { name: 'Option 5', disabled: false },
  ];

  public actionClicked(action: string): void {
    alert(`You selected ${action}.`);
  }
}
```

#### example.component.html

```html
<sky-dropdown data-sky-id="dropdown-example" label="Test dropdown">
  <sky-dropdown-button> Show dropdown </sky-dropdown-button>
  <sky-dropdown-menu>
    @for (item of items; track item) {
    <sky-dropdown-item>
      <button type="button" [attr.disabled]="item.disabled ? '' : null" (click)="actionClicked(item.name)">
        {{ item.name }}
      </button>
    </sky-dropdown-item>
    }
  </sky-dropdown-menu>
</sky-dropdown>
<br />
<sky-dropdown buttonType="context-menu" label="Code example context menu">
  <sky-dropdown-menu>
    @for (item of items; track item) {
    <sky-dropdown-item>
      <button type="button" [attr.disabled]="item.disabled ? '' : null" (click)="actionClicked(item.name)">
        {{ item.name }}
      </button>
    </sky-dropdown-item>
    }
  </sky-dropdown-menu>
</sky-dropdown>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';
import { SkyDropdownHarness } from '@skyux/popovers/testing';

import { PopoversDropdownBasicExampleComponent } from './example.component';

describe('Basic dropdown', () => {
  async function setupTest(): Promise<{
    dropdownHarness: SkyDropdownHarness;
    fixture: ComponentFixture<PopoversDropdownBasicExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(PopoversDropdownBasicExampleComponent);
    const loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const dropdownHarness = await loader.getHarness(
      SkyDropdownHarness.with({
        dataSkyId: 'dropdown-example',
      }),
    );

    return { dropdownHarness, fixture };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopoversDropdownBasicExampleComponent],
    });
  });

  it('should display the correct dropdown', async () => {
    const { dropdownHarness, fixture } = await setupTest();

    fixture.detectChanges();

    await expectAsync(dropdownHarness.getButtonStyle()).toBeResolvedTo('default');
    await expectAsync(dropdownHarness.getButtonType()).toBeResolvedTo('select');
    await expectAsync(dropdownHarness.isDisabled()).toBeResolvedTo(false);
    await expectAsync(dropdownHarness.getAriaLabel()).toBeResolvedTo('Test dropdown');
    await expectAsync(dropdownHarness.getTitle()).toBeResolvedTo(null);
    await expectAsync(dropdownHarness.isOpen()).toBeResolvedTo(false);
  });

  it('should open the correct dropdown menu', async () => {
    const { dropdownHarness, fixture } = await setupTest();

    fixture.detectChanges();
    await dropdownHarness.clickDropdownButton();
    fixture.detectChanges();

    const dropdownMenu = await dropdownHarness.getDropdownMenu();
    const dropdownMenuItems = await dropdownMenu.getItems();

    await expectAsync(dropdownHarness.isOpen()).toBeResolvedTo(true);
    await expectAsync(dropdownMenu.getAriaRole()).toBeResolvedTo('menu');

    await expectAsync(dropdownMenuItems?.[0].getText()).toBeResolvedTo('Option 1');
  });

  it('should click the correct dropdown menu item', async () => {
    const { dropdownHarness, fixture } = await setupTest();

    const clickSpy = spyOn(fixture.componentInstance, 'actionClicked');
    fixture.detectChanges();
    await dropdownHarness.clickDropdownButton();
    fixture.detectChanges();

    const dropdownMenu = await dropdownHarness.getDropdownMenu();
    const dropdownMenuItem = await dropdownMenu.getItem({ text: 'Option 1' });

    await dropdownMenuItem?.click();

    expect(clickSpy).toHaveBeenCalledWith('Option 1');
  });
});
```
