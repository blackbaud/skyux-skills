---
Title: Split view
Reference: https://developer.blackbaud.com/skyux/components/split-view
---

# Split view

A split view displays a workspace beside a list to let users view details and take actions for the selected item.

## Usage

### Use when

Use split views when users need to work through a list of items with the intent of taking action on each item.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-usage.afb3ab9003e792c00e0722cbc9926601.png)

Do use split views when users take the same action for each item in the list.

### Don't use when

Don't use split views when users are likely to interact with a small number of items in the list. Use regular lists instead, and follow the [flyout guidelines](./flyout.md#ux-guidelines) to determine whether to use flyouts or navigate to selected records.

## Anatomy

### Large viewport

1

List panel

2

Workspace panel

3

Summary action bar  (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-anatomy-desktop.16936f42d8425cb0da26dc195f9d2bac.png)

### Small viewport

1

List panel

2

Responsive header bar

3

Workspace panel

4

Summary action bar  (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-anatomy-mobile.3895c8eb86059e0016d50573fe8f777f.png)

## Options

### List type

[Repeaters](./repeater.md) are the most common list type because they enable flexible content layouts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-usage.afb3ab9003e792c00e0722cbc9926601.png)

[Tree views](./angular-tree.md) can be used when items are hierarchical. If items at different levels have different types, you can use multiple views in the workspace panel.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-options-list-type-tree.3a6d859ce8728dc3d2c36b5e80b213af.png)

We recommend against using [grids](./grid.md) if possible. They do not scale well at the typically small width of the list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-options-list-type-grid.739474e419ae9663ebf38a231d8a5faf.png)

Use caution with grids because they do not perform well at narrow widths.

### List manipulation

If users need to search for specific items in the list or show and hide items with certain statuses, include a search input or status checkbox filter in the list panel.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-options-search-toggle.57e4d92e34dcad071de3a2c264419196.png)

When possible, pre-filter the list to relevant items and pre-sort it to the expected useful order. If you can't predict how users will use the list, include a [toolbar](./toolbar.md) to let them add items or filter, sort, and search the list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-options-toolbar.5db281b0ab420f5e5d03c259bfecdc01.png)

Use caution when using a full toolbar with a split view. Automatically filter and sort the list when possible.

## Behavior and states

### Automatically advance to the next item

If users are likely to work through the list sequentially, remove the selected item and automatically advance to the next item after users invoke the primary action in the workspace.

### Place focus in the workspace

When users select an item in the list, place focus on the first focusable element in the workspace so that users can start working immediately.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-behavior-focus.40ba0bd3b0a2551038a779ac8cbd71e2.png)

### Change panel width

Users can change the panel widths using drag-and-drop or keyboard interactions. If the list content is wider than the panel, a horizontal scrollbar appears.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-behavior-resize.e29d57c2edbdb8810598eb5ab46e1ceb.png)

### Responsiveness

In smaller viewports, the split view automatically switches from a side-by-side view to a panel-switching interaction where users switch between the list and the workspace.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-behavior-responsive.954b906f00b8173adf28e9118eeb9bac.png)

## Content

### List item

Use up to three pieces of data to identify the item. If additional content is needed to uniquely identify the item, put it in the workspace view instead of overloading the list item.

## Layout

A split view should be the last item on a page. Do not place additional content below it.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/split-view/split-view-layout-last-item.98ca0a4b1e52bb8d79d1aeb6a85623ca.png)

Don't place content below the split view.

## Related information

### Components

- [Repeater](./repeater.md)
- [Summary action bar](./summary-action-bar.md)

### Guidelines

- [Form design](../design/guidelines/form-design.md)
- [Split view page](../design/guidelines/page-layouts/split-view-page.md)

## Installation

NPM package

`@skyux/split-view`[View in NPM](https://www.npmjs.com/package/@skyux/split-view) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/split-view/src/lib/modules/split-view/split-view.module.ts#L28)

Install with NPM

`npm install --save-exact @skyux/split-view`

## SkySplitViewModule

Type: Module

`import { SkySplitViewModule } from '@skyux/split-view';`

## SkySplitViewComponent

Type: Component

Selector: `sky-split-view`

Displays a list alongside a workspace where users can view details for selected items and take actions.

### Inputs

#### `backButtonText: string`

The label for the button that appears in the workspace header in responsive mode. The button returns users to the list.

Default: `"Back to list"`

#### `bindHeightToWindow: boolean`

Warning: **Deprecated.** We recommend using the `dock` input instead. An example of this can be found in the developer code examples.

Whether the split view's height is bound to the window height.

Default: `false`

#### `dock: SkySplitViewDockType`

How the split view docks to its container. Use `fill` to dock the split view to the container's size where the container is a `sky-page` component with its `layout` input set to `fit`, or where the container is another element with a relative or absolute position and a fixed size.

Default: `"none"`

#### `messageStream: Subject<SkySplitViewMessage>`

The observable that sends commands to the split view component. The commands should respect the `SkySplitViewMessage` type.

## SkySplitViewDrawerComponent

Type: Component

Selector: `sky-split-view-drawer`

Specifies the content to display in the split view's list panel.

### Inputs

#### `ariaLabel: string | undefined`

The ARIA label for the list panel. This sets the panel's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

#### `width: number | undefined`

Sets the list panel's width in pixels.

Default: `320`

## SkySplitViewWorkspaceComponent

Type: Component

Selector: `sky-split-view-workspace`

Contains the content, footer, and header to display in the split view's workspace panel.

### Inputs

#### `ariaLabel: string | undefined`

The ARIA label for the workspace panel. This sets the panel's `aria-label` attribute to provide a text equivalent for screen readers [to support accessibility](../learn/accessibility/README.md). For more information about the `aria-label` attribute, see the [WAI-ARIA definition](https://www.w3.org/TR/wai-aria/#aria-label).

## SkySplitViewWorkspaceContentComponent

Type: Component

Selector: `sky-split-view-workspace-content`

Specifies the content to display in the split view's workspace panel.

## SkySplitViewWorkspaceFooterComponent

Type: Component

Selector: `sky-split-view-workspace-footer`

Specifies the footer to display in the split view's workspace panel. This component is often used with a summary action bar.

## SkySplitViewDockType

Type: Type alias

    type SkySplitViewDockType = "none" | "fill"

## SkySplitViewMessage

Type: Interface

    interface SkySplitViewMessage {
      type?: FocusWorkspace;
    }

### Properties

#### `type?: FocusWorkspace`

Sets the `SkySplitViewMessageType`.

## SkySplitViewMessageType

Type: Enumeration

    enum SkySplitViewMessageType {
      FocusWorkspace = 0,
    }

### Properties

#### `SkySplitViewMessageType.FocusWorkspace`

Places focus on the first focusable element in the workspace.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkySplitViewHarness

Type: Class

`import { SkySplitViewHarness } from '@skyux/split-view/testing';`

Harness for interacting with a split view component in tests.

### Methods

#### `getBackButtonText(): Promise<string>`

Gets the text for the button that appears in the workspace header in responsive mode.

#### Returns

`Promise<string>`

#### `getDockType(): Promise<SkySplitViewDockType>`

Gets the type of dock style on the split view.

#### Returns

`Promise<SkySplitViewDockType>`

#### `getDrawer(): Promise<SkySplitViewDrawerHarness>`

Gets a '[SkySplitViewDrawerHarness](./split-view.md#class_sky-split-view-drawer-harness)\`.

#### Returns

`Promise<SkySplitViewDrawerHarness>`

#### `getDrawerIsVisible(): Promise<boolean>`

Whether the drawer component is visible

#### Returns

`Promise<boolean>`

#### `getWorkspace(): Promise<SkySplitViewWorkspaceHarness>`

Gets a `SkySplitViewWorkspaceHarness`.

#### Returns

`Promise<SkySplitViewWorkspaceHarness>`

#### `getWorkspaceIsVisible(): Promise<boolean>`

Whether the workspace component is visible.

#### Returns

`Promise<boolean>`

#### `openDrawer(): Promise<void>`

Opens the drawer component when in responsive mode.

#### Returns

`Promise<void>`

#### `SkySplitViewHarness.with(filters: SkySplitViewHarnessFilters): HarnessPredicate<SkySplitViewHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkySplitViewHarness` that meets certain criteria.

#### Parameters

##### `filters: SkySplitViewHarnessFilters`

#### Returns

`HarnessPredicate<SkySplitViewHarness>`

## SkySplitViewHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkySplitViewHarness](./split-view.md#class_sky-split-view-harness) instances.

    interface SkySplitViewHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkySplitViewDrawerHarness

Type: Class

`import { SkySplitViewDrawerHarness } from '@skyux/split-view/testing';`

Harness to interact with the split view drawer component in tests.

### Methods

#### `getAriaLabel(): Promise<string | null>`

The aria-label property of the split view drawer

#### Returns

`Promise<string | null>`

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

## SkySplitViewWorkspaceHarness

Type: Class

`import { SkySplitViewWorkspaceHarness } from '@skyux/split-view/testing';`

Harness to interact with the split view workspace component in tests.

### Methods

#### `getAriaLabel(): Promise<string | null>`

The aria-label property of the split view workspace

#### Returns

`Promise<string | null>`

#### `getContent(): Promise<SkySplitViewWorkspaceContentHarness>`

Gets the workspace content component.

#### Returns

`Promise<SkySplitViewWorkspaceContentHarness>`

#### `getFooter(): Promise<SkySplitViewWorkspaceFooterHarness>`

Gets the workspace footer component.

#### Returns

`Promise<SkySplitViewWorkspaceFooterHarness>`

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

## SkySplitViewWorkspaceContentHarness

Type: Class

`import { SkySplitViewWorkspaceContentHarness } from '@skyux/split-view/testing';`

Harness to interact with the split view workspace content component in tests.

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

## SkySplitViewWorkspaceFooterHarness

Type: Class

`import { SkySplitViewWorkspaceFooterHarness } from '@skyux/split-view/testing';`

Harness to interact with the split view workspace footer component in tests.

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

## Code Examples

### Split view with basic setup

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkySummaryActionBarModule } from '@skyux/action-bars';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyDescriptionListModule } from '@skyux/layout';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyConfirmService, SkyConfirmType } from '@skyux/modals';
import { SkySplitViewMessage, SkySplitViewMessageType, SkySplitViewModule } from '@skyux/split-view';

import { Subject } from 'rxjs';

import { Record } from './record';

interface DemoForm {
  approvedAmount: FormControl<number>;
  comments: FormControl<string>;
}

/**
 * @title Split view with basic setup
 * @docsDemoHidden
 */
@Component({
  selector: 'app-split-view-basic-example',
  templateUrl: './example.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SkyDescriptionListModule,
    SkyInputBoxModule,
    SkyRepeaterModule,
    SkySplitViewModule,
    SkySummaryActionBarModule,
  ],
})
export class SplitViewBasicExampleComponent {
  protected set activeIndex(value: number) {
    this.#_activeIndex = value;
    this.activeRecord = this.items[this.#_activeIndex];
    this.#loadFormGroup(this.activeRecord);
  }

  protected get activeIndex(): number {
    return this.#_activeIndex;
  }

  protected items = [
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

  protected activeRecord: Record;
  protected splitViewDemoForm: FormGroup<DemoForm>;
  protected splitViewStream = new Subject<SkySplitViewMessage>();

  #_activeIndex = 0;

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

  protected onItemClick(index: number): void {
    // Prevent workspace from loading new data if the current workspace form is dirty.
    if (this.splitViewDemoForm.dirty && index !== this.activeIndex) {
      this.#openConfirmModal(index);
    } else {
      this.#loadWorkspace(index);
    }
  }

  protected onApprove(): void {
    console.log('Approved clicked!');
    this.#saveForm();
  }

  protected onDeny(): void {
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
<sky-split-view [messageStream]="splitViewStream">
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
            <sky-description-list-description> {{ activeRecord.receiptImage }} </sky-description-list-description>
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

### Page bound split view in a page component with fit layout

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkySummaryActionBarModule } from '@skyux/action-bars';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyAlertModule } from '@skyux/indicators';
import { SkyDescriptionListModule, SkyPageSummaryModule } from '@skyux/layout';
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
 * @title Page bound split view in a page component with fit layout
 * @docsDemoHidden
 */
@Component({
  selector: 'app-split-view-page-bound-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SkyAlertModule,
    SkyDescriptionListModule,
    SkyInputBoxModule,
    SkyPageModule,
    SkyPageSummaryModule,
    SkyRepeaterModule,
    SkySplitViewModule,
    SkySummaryActionBarModule,
  ],
})
export class SplitViewPageBoundExampleComponent {
  protected set activeIndex(value: number) {
    this.#_activeIndex = value;
    this.activeRecord = this.items[this.#_activeIndex];
    this.#loadFormGroup(this.activeRecord);
  }

  protected get activeIndex(): number {
    return this.#_activeIndex;
  }

  protected items: Record[] = [
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
    {
      id: 5,
      amount: 456.24,
      date: '5/16/2020',
      vendor: 'Wish',
      receiptImage: 'wish-delivery-order.png',
      approvedAmount: 456.24,
      comments: '',
    },
    {
      id: 6,
      amount: 62.37,
      date: '5/16/2020',
      vendor: 'Staples',
      receiptImage: 'staples-paper-bulk-order.png',
      approvedAmount: 62.37,
      comments: '',
    },
    {
      id: 7,
      amount: 51.84,
      date: '5/17/2020',
      vendor: 'amazon.com',
      receiptImage: 'amzn-office-supply-order-5-17-19.png',
      approvedAmount: 51.84,
      comments: '',
    },
    {
      id: 8,
      amount: 92.55,
      date: '5/18/2020',
      vendor: 'Home Depot',
      receiptImage: 'home-depot-order.png',
      approvedAmount: 0.0,
      comments: '',
    },
    {
      id: 9,
      amount: 38.29,
      date: '5/18/2020',
      vendor: 'Papa Johns',
      receiptImage: 'papa-johns-order.png',
      approvedAmount: 38.29,
      comments: '',
    },
  ];

  protected activeRecord: Record;
  protected splitViewDemoForm: FormGroup<DemoForm>;
  protected splitViewStream = new Subject<SkySplitViewMessage>();
  protected unapprovedTransaction = true;

  #_activeIndex = 0;

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

  protected onItemClick(index: number): void {
    // Prevent workspace from loading new data if the current workspace form is dirty.
    if (this.splitViewDemoForm.dirty && index !== this.activeIndex) {
      this.#openConfirmModal(index);
    } else {
      this.#loadWorkspace(index);
    }
  }

  protected onApprove(): void {
    console.log('Approved clicked!');
    this.#saveForm();
  }

  protected onDeny(): void {
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
    this.activeRecord.approvedAmount = parseFloat(`${this.splitViewDemoForm.value.approvedAmount ?? 0}`);

    this.activeRecord.comments = this.splitViewDemoForm.value.comments ?? '';

    this.unapprovedTransaction = this.items.findIndex((item) => item.amount !== item.approvedAmount) >= 0;

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
  <div class="page-flex">
    <div class="page-flex-header">
      <sky-page-summary>
        @if (unapprovedTransaction) {
        <sky-page-summary-alert>
          <sky-alert alertType="info">There is an unapproved transaction.</sky-alert>
        </sky-page-summary-alert>
        }
        <sky-page-summary-title> SKY Developers, LLC </sky-page-summary-title>
        <sky-page-summary-subtitle> Petty Cash Transactions </sky-page-summary-subtitle>
        <sky-page-summary-content>
          The transactions below cover various operating expenses which do not fall under one of the budgets areas of
          expenditures.
        </sky-page-summary-content>
      </sky-page-summary>
    </div>
    <div class="page-flex-main">
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

        <sky-split-view-workspace [ariaLabel]="'Transaction form'">
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
                  <sky-description-list-description> {{ activeRecord.receiptImage }} </sky-description-list-description>
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
    </div>
  </div>
</sky-page>
```

#### example.component.scss

```css
.page-flex {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.page-flex-header {
  flex-grow: 0;
}

.page-flex-main {
  flex-grow: 1;
  overflow: auto;
  /* Required for the split view to fill this element instead of the document */
  position: relative;
}
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import { SkyMediaQueryTestingController, provideSkyMediaQueryTesting } from '@skyux/core/testing';
import { SkyInputBoxHarness } from '@skyux/forms/testing';
import { SkyRepeaterItemHarness } from '@skyux/lists/testing';
import { SkySplitViewHarness } from '@skyux/split-view/testing';

import { SplitViewPageBoundExampleComponent } from './example.component';

describe('Split view example', () => {
  async function setupTest(options: { dataSkyId?: string } = {}): Promise<{
    splitViewHarness: SkySplitViewHarness;
    mediaQueryController: SkyMediaQueryTestingController;
    fixture: ComponentFixture<SplitViewPageBoundExampleComponent>;
    loader: HarnessLoader;
  }> {
    await TestBed.configureTestingModule({
      imports: [SplitViewPageBoundExampleComponent],
      providers: [provideNoopSkyAnimations(), provideSkyMediaQueryTesting()],
    }).compileComponents();

    const mediaQueryController = TestBed.inject(SkyMediaQueryTestingController);

    const fixture = TestBed.createComponent(SplitViewPageBoundExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const splitViewHarness: SkySplitViewHarness = options.dataSkyId
      ? await loader.getHarness(SkySplitViewHarness.with({ dataSkyId: options.dataSkyId }))
      : await loader.getHarness(SkySplitViewHarness);

    return { splitViewHarness, mediaQueryController, fixture, loader };
  }

  it('should set up split view component and children', async () => {
    const { splitViewHarness, fixture } = await setupTest();
    fixture.detectChanges();
    await fixture.whenStable();

    // validate parent split view properties
    await expectAsync(splitViewHarness.getDockType()).toBeResolvedTo('fill');
    await expectAsync(splitViewHarness.getDrawerIsVisible()).toBeResolvedTo(true);
    await expectAsync(splitViewHarness.getWorkspaceIsVisible()).toBeResolvedTo(true);

    // query for drawer and workspace child components and validate properties
    const drawerHarness = await splitViewHarness.getDrawer();
    const workspaceHarness = await splitViewHarness.getWorkspace();

    await expectAsync(drawerHarness.getAriaLabel()).toBeResolvedTo('Transaction list');
    await expectAsync(workspaceHarness.getAriaLabel()).toBeResolvedTo('Transaction form');

    // query for content and footer child components and their child elements
    const contentHarness = await workspaceHarness.getContent();
    const footerHarness = await workspaceHarness.getFooter();

    await expectAsync(contentHarness?.queryHarnesses(SkyInputBoxHarness)).toBeResolved();
    await expectAsync(footerHarness?.querySelector('sky-summary-action-bar-primary-action')).toBeResolved();
  });

  it('should switch between views in responsive mode', async () => {
    const { splitViewHarness, mediaQueryController, fixture } = await setupTest();

    // set XS breakpoint to force split view into responsive mode
    mediaQueryController.setBreakpoint('xs');

    fixture.detectChanges();
    await fixture.whenStable();

    await expectAsync(splitViewHarness.getDrawerIsVisible()).toBeResolvedTo(false);
    await expectAsync(splitViewHarness.getWorkspaceIsVisible()).toBeResolvedTo(true);
    await expectAsync(splitViewHarness.getBackButtonText()).toBeResolvedTo('Back to list');

    // switch to drawer view
    await splitViewHarness.openDrawer();

    fixture.detectChanges();
    await fixture.whenStable();

    await expectAsync(splitViewHarness.getDrawerIsVisible()).toBeResolvedTo(true);
    await expectAsync(splitViewHarness.getWorkspaceIsVisible()).toBeResolvedTo(false);

    const drawerHarness = await splitViewHarness.getDrawer();
    const drawerItems = await drawerHarness.queryHarnesses(SkyRepeaterItemHarness);

    // switch back to workspace view
    await drawerItems[3].click();

    fixture.detectChanges();
    await fixture.whenStable();

    await expectAsync(splitViewHarness.getDrawerIsVisible()).toBeResolvedTo(false);
    await expectAsync(splitViewHarness.getWorkspaceIsVisible()).toBeResolvedTo(true);
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
