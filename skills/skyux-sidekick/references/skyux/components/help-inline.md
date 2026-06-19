---
Title: Help inline button
Reference: https://developer.blackbaud.com/skyux/components/help-inline
---

# Help inline button

The help inline button beside a field or other item lets users display more information about that item.

## Usage

### Use when

Use help inline buttons to invoke help content that users don't need to see every time or that is too long for persistent inline help. This provides access to supplementary information while avoiding most of the visual noise that comes with persistent inline help.

Use help inline buttons when users may need initial assistance but:

- The tasks are performed frequently.
- Ramifications of mistakes are small.

### Don't use when

Don't use help inline buttons when a small amount of persistent inline text can help users understand tasks. Use [persistent inline help](../design/guidelines/user-assistance.md#inline-help) instead when:

- Tasks are complex and performed infrequently.
- User actions have far-reaching consequences that are not obvious.

## Options

### Popover

Display help content in [popovers](./popover.md) when a small amount of user assistance content is valuable some of the time. For larger amounts of user assistance, use the `helpKey` option instead to display content in other containers, as described in the next section.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/help-inline-button/popover-content-simple.1975b621a1510106d296ace5238b1d7a.png)

Do use popovers to display small chunks of plain text.

### Other containers

For longer help content that doesn't fit in [popovers](./popover.md), use the `helpKey` option. It can launch content in other containers, such as [flyouts](./flyout.md) or new windows. For more information, see [global help](../learn/develop/global-help.md).

## Layout

### Page-level and modal-level help

For complex tasks where users need comprehensive documentation, they invoke help at the page or modal level.

### Element-level help

Place the help inline button to the right of the label for the element that the help content supports.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/help-inline-button/element-level-help.9d2940497f412d424912381d61c497b1.png)

Do use help inline buttons to invoke element-specific help content.

## Related information

### Guidelines

- [Form design](../design/guidelines/form-design.md)

### Components

- [Box](./box.md)
- [Data entry grid](./data-entry-grid.md)
- [Data grid](./data-grid.md)
- [Description list](./description-list.md)
- [File attachment](./file-attachment.md)
- [File drop](./file-drop.md)
- [Flyout](./flyout.md)
- [Input box](./input-box.md)
- [Key info](./key-info.md)
- [Modal](./modal.md)
- [Passive progress indicator](./progress-indicator-passive.md)
- [Popover](./popover.md)
- [File drop](./file-drop.md)
- [Status indicator](./status-indicator.md)
- [Text editor](./text-editor.md)
- [Tile](./tile.md)
- [Toggle switch](./toggle-switch.md)
- [Waterfall progress indicator](./progress-indicator-waterfall.md)

## Installation

NPM package

`@skyux/help-inline`[View in NPM](https://www.npmjs.com/package/@skyux/help-inline) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/help-inline/src/lib/modules/help-inline/help-inline.module.ts#L9)

Install with NPM

`npm install --save-exact @skyux/help-inline`

## SkyHelpInlineModule

Type: Module

`import { SkyHelpInlineModule } from '@skyux/help-inline';`

## SkyHelpInlineComponent

Type: Component

Selector: `sky-help-inline`

Inserts a help button beside an element, such as a field, to display contextual information about the element.

### Inputs

#### `ariaControls: string | undefined`

The ID of the element that the help inline button controls. This property [supports accessibility rules for disclosures](https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure). For more information about the `aria-controls` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-controls).

#### `ariaExpanded: boolean | undefined`

Whether an element or popover controlled by the help inline button is expanded. If popoverContent is specified, this value is overridden with popover expanded status.

#### `ariaLabel: string | undefined`

The ARIA label for the help inline button. This sets the button's `aria-label` to provide a text equivalent for screen readers. Will be overridden if label text is set.

Default: `"Show help content"`

#### `helpKey: string | undefined`

A unique key that identifies the [global help](../learn/develop/global-help.md) content to display when the button is clicked.

#### `labelText: string | undefined`

The label of the component the help inline button is attached to.

#### `popoverContent: string | TemplateRef<unknown> | undefined`

The content of the help popover. When specified, clicking the help inline button opens a popover with this content and optional title.

#### `popoverTitle: string | undefined`

The title of the help popover. This property only applies when `popoverContent` is also specified.

### Outputs

#### `actionClick: EventEmitter<void>`

Fires when the user clicks the help inline button.

## SkyHelpService

Type: Service

Provides methods for opening and updating a globally accessible help dialog.

### Properties

#### `widgetReadyStateChange: Observable<boolean>`

Emits when the help widget ready state changes.

### Methods

#### `openHelp(args?: SkyHelpOpenArgs): void`

Opens a globally accessible help dialog.

#### Parameters

##### `args?: SkyHelpOpenArgs`

The options for opening the help dialog.

#### Returns

`void`

#### `updateHelp(args: SkyHelpUpdateArgs): void`

Updates a globally accessible help dialog.

#### Parameters

##### `args: SkyHelpUpdateArgs`

The options for updating the help dialog.

#### Returns

`void`

## SkyHelpGlobalOptions

Type: Interface

Options to apply to all components that invoke global help.

    interface SkyHelpGlobalOptions {
      ariaControls?: string;
      ariaHaspopup?: "dialog" | "menu" | "listbox" | "tree" | "grid";
    }

### Properties

#### `ariaControls?: string`

The ID of the element that is displayed when the invoking component is clicked.

#### `ariaHaspopup?: "dialog" | "menu" | "listbox" | "tree" | "grid"`

The type of popup triggered by the invoking component.

## SkyHelpOpenArgs

Type: Interface

Options for displaying a globally accessible help dialog.

    interface SkyHelpOpenArgs {
      helpKey: string;
    }

### Properties

#### `helpKey: string`

A unique key that identifies the help content to display.

## SkyHelpUpdateArgs

Type: Interface

Options for updating a globally accessible help dialog.

    interface SkyHelpUpdateArgs {
      helpKey?: string;
      pageDefaultHelpKey?: string;
    }

### Properties

#### `helpKey?: string`

A unique key that identifies the current help content to display. If set to `undefined`, the page's default help content will be displayed.

#### `pageDefaultHelpKey?: string`

A unique key that identifies the page's default help content to display. Set this property to `undefined` to unset the current page default help key.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyHelpInlineHarness

Type: Class

`import { SkyHelpInlineHarness } from '@skyux/help-inline/testing';`

Harness for interacting with a help inline button component in tests.

### Methods

#### `click(): Promise<void>`

Clicks the help inline button.

#### Returns

`Promise<void>`

#### `getAriaControls(): Promise<string | null>`

Gets the `aria-controls` value.

#### Returns

`Promise<string | null>`

#### `getAriaExpanded(): Promise<boolean>`

Gets the `aria-expanded` value.

#### Returns

`Promise<boolean>`

#### `getAriaLabel(): Promise<string | null>`

Gets the `aria-label` value.

#### Returns

`Promise<string | null>`

#### `getLabelText(): Promise<string | undefined>`

Gets the label text.

#### Returns

`Promise<string | undefined>`

#### `getPopoverContent(): Promise<string | undefined>`

Gets the help popover content.

#### Returns

`Promise<string | undefined>`

#### `getPopoverTitle(): Promise<string | undefined>`

Gets the help popover title.

#### Returns

`Promise<string | undefined>`

#### `SkyHelpInlineHarness.with(filters: SkyHelpInlineHarnessFilters): HarnessPredicate<SkyHelpInlineHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyHelpInlineHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyHelpInlineHarnessFilters`

#### Returns

`HarnessPredicate<SkyHelpInlineHarness>`

## SkyHelpInlineHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyHelpInlineHarness` instances.

    interface SkyHelpInlineHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyHelpTestingModule

Type: Module

`import { SkyHelpTestingModule } from '@skyux/core/testing';`

Mocks [SkyHelpService](./help-inline.md#class_sky-help-service) to enable testing of global help.

## SkyHelpTestingController

Type: Class

Provides methods for validating global help in unit tests.

### Methods

#### `closeHelp(): void`

Close the current help.

#### Returns

`void`

#### `expectCurrentHelpKey(expectedHelpKey: string | undefined): void`

Validates the current help key and throws an error if the current help key does not match the expected help key.

#### Parameters

##### `expectedHelpKey: string | undefined`

The expected help key.

#### Returns

`void`

## Code Examples

### Help inline button with popover

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyHelpInlineModule } from '@skyux/help-inline';

/**
 * @title Help inline button with popover
 */
@Component({
  imports: [SkyHelpInlineModule],
  selector: 'app-help-inline-popover-example',
  templateUrl: './example.component.html',
})
export class HelpInlinePopoverExampleComponent {}
```

#### example.component.html

```html
<h3>
  Projected revenue
  <sky-help-inline
    ariaLabel="Information about Projected revenue"
    data-sky-id="help-inline-example"
    popoverContent="The estimated income expected for the current year."
    popoverTitle="Projected revenue"
  />
</h3>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyHelpInlineHarness } from '@skyux/help-inline/testing';

import { HelpInlinePopoverExampleComponent } from './example.component';

describe('Help inline with popover', () => {
  async function setupTest(): Promise<{
    helpInlineHarness: SkyHelpInlineHarness;
    fixture: ComponentFixture<HelpInlinePopoverExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(HelpInlinePopoverExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const helpInlineHarness = await loader.getHarness(
      SkyHelpInlineHarness.with({
        dataSkyId: 'help-inline-example',
      }),
    );

    return { fixture, helpInlineHarness };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelpInlinePopoverExampleComponent],
    });
  });

  it('should launch a popover', async () => {
    const { fixture, helpInlineHarness } = await setupTest();

    fixture.detectChanges();

    await helpInlineHarness.click();
    fixture.detectChanges();
    await fixture.whenStable();

    await expectAsync(helpInlineHarness.getPopoverContent()).toBeResolvedTo(
      'The estimated income expected for the current year.',
    );

    await expectAsync(helpInlineHarness.getPopoverTitle()).toBeResolvedTo('Projected revenue');
  });
});
```

### Help inline with help key

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyHelpInlineModule } from '@skyux/help-inline';

/**
 * @title Help inline with help key
 */
@Component({
  imports: [SkyHelpInlineModule],
  selector: 'app-help-inline-help-key-example',
  templateUrl: './example.component.html',
})
export class HelpInlineHelpKeyExampleComponent {}
```

#### example.component.html

```html
<h3>
  Projected revenue
  <sky-help-inline
    ariaLabel="Information about Projected revenue"
    data-sky-id="help-inline-example"
    helpKey="projected-revenue"
  />
</h3>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyHelpTestingController, SkyHelpTestingModule } from '@skyux/core/testing';
import { SkyHelpInlineHarness } from '@skyux/help-inline/testing';

import { HelpInlineHelpKeyExampleComponent } from './example.component';

describe('Help inline with help key', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<HelpInlineHelpKeyExampleComponent>;
    helpController: SkyHelpTestingController;
    helpInlineHarness: SkyHelpInlineHarness;
  }> {
    const fixture = TestBed.createComponent(HelpInlineHelpKeyExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const helpInlineHarness = await loader.getHarness(
      SkyHelpInlineHarness.with({
        dataSkyId: 'help-inline-example',
      }),
    );

    const helpController = TestBed.inject(SkyHelpTestingController);

    return { fixture, helpController, helpInlineHarness };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelpInlineHelpKeyExampleComponent, SkyHelpTestingModule],
    });
  });

  it('should have a help key', async () => {
    const { fixture, helpController, helpInlineHarness } = await setupTest();

    fixture.detectChanges();

    await helpInlineHarness.click();

    helpController.expectCurrentHelpKey('projected-revenue');
  });
});
```

### Help inline button with action click

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyHelpInlineModule } from '@skyux/help-inline';

/**
 * @title Help inline button with action click
 */
@Component({
  imports: [SkyHelpInlineModule],
  selector: 'app-help-inline-action-click-example',
  templateUrl: './example.component.html',
})
export class HelpInlineActionClickExampleComponent {
  public onActionClick(): void {
    alert('Use help inline to show supplemental information to the user.');
  }
}
```

#### example.component.html

```html
<h3>
  Projected revenue
  <sky-help-inline
    ariaLabel="Information about Projected revenue"
    data-sky-id="help-inline-example"
    (actionClick)="onActionClick()"
  />
</h3>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyHelpInlineHarness } from '@skyux/help-inline/testing';

import { HelpInlineActionClickExampleComponent } from './example.component';

describe('Help inline with action click', () => {
  async function setupTest(): Promise<{
    helpInlineHarness: SkyHelpInlineHarness;
    fixture: ComponentFixture<HelpInlineActionClickExampleComponent>;
  }> {
    const fixture = TestBed.createComponent(HelpInlineActionClickExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const helpInlineHarness = await loader.getHarness(
      SkyHelpInlineHarness.with({
        dataSkyId: 'help-inline-example',
      }),
    );

    return { fixture, helpInlineHarness };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelpInlineActionClickExampleComponent],
    });
  });

  it('should click the help inline button', async () => {
    const { fixture, helpInlineHarness } = await setupTest();
    fixture.detectChanges();

    const clickSpy = spyOn(fixture.componentInstance, 'onActionClick');
    await helpInlineHarness.click();
    expect(clickSpy).toHaveBeenCalled();
  });
});
```
