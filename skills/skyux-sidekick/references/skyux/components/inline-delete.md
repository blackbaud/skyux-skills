---
Title: Inline delete confirmation
Reference: https://developer.blackbaud.com/skyux/components/inline-delete
---

# Inline delete confirmation

The inline delete confirmation appears when users delete an item in a list and requires them to confirm that they want to delete the item.

## Usage

### Use when

Use the inline delete confirmation when users need to confirm that they want to delete an item from a list.

Keep in mind that you should not delete items from lists when they are complex enough to have their own record pages. For lists with such items, do not include delete actions in the [context-menu dropdowns](./dropdown.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/layout/img/guidelines/inline-delete/inline-delete-usage-1.5c68033daca05cdfa1b81dfe3c46b6d7.png)

Do use inline delete confirmation when deleting an item from a list.

### Don't use when

Don't use inline delete confirmation when users need to confirm that they want to delete an item outside of a list. Use a [confirm dialog](./confirm.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/layout/img/guidelines/inline-delete/inline-delete-usage-2.1450df1653090b1bfb5a9c2e91c086c4.png)

Don't use inline delete confirmation for an item outside of a list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/layout/img/guidelines/inline-delete/inline-delete-usage-3.99e556579bf8d2211385e2349d2aaf66.png)

Do use a confirm dialog when users need to confirm that they want to delete an item outside of a list.

## Anatomy

1

Delete button

2

Cancel button

3

Overlay

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/layout/img/guidelines/inline-delete/inline-delete-anatomy.44c968caff3612b51bb533560258a2f9.png)

## Behavior and states

### Delete button

The inline delete confirmation uses the `sky-btn-danger` (red) style for the Delete button to visually indicate that the action deletes existing data.

## Related information

### Components

- [Confirm](./confirm.md)
- [Dropdown](./dropdown.md)

### Guidelines

- [Manage records](../design/guidelines/managing-records.md)

## Installation

NPM package

`@skyux/layout`[View in NPM](https://www.npmjs.com/package/@skyux/layout) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/layout/src/lib/modules/inline-delete/inline-delete.module.ts#L18)

Install with NPM

`npm install --save-exact @skyux/layout`

## SkyInlineDeleteModule

Type: Module

`import { SkyInlineDeleteModule } from '@skyux/layout';`

## SkyInlineDeleteComponent

Type: Component

Selector: `sky-inline-delete`

### Inputs

#### `pending: boolean | undefined`

Whether the deletion is pending.

Default: `false`

### Outputs

#### `cancelTriggered: EventEmitter<void>`

Fires when users click the cancel button.

#### `deleteTriggered: EventEmitter<void>`

Fires when users click the delete button.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyInlineDeleteHarness

Type: Class

`import { SkyInlineDeleteHarness } from '@skyux/layout/testing';`

Harness for interacting with an inline delete component in tests.

### Methods

#### `clickCancelButton(): Promise<void>`

Clicks the cancel button.

#### Returns

`Promise<void>`

#### `clickDeleteButton(): Promise<void>`

Clicks the delete button.

#### Returns

`Promise<void>`

#### `isPending(): Promise<boolean>`

Whether the inline delete is pending.

#### Returns

`Promise<boolean>`

#### `SkyInlineDeleteHarness.with(filters: SkyInlineDeleteHarnessFilters): HarnessPredicate<SkyInlineDeleteHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyInlineDeleteHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyInlineDeleteHarnessFilters`

#### Returns

`HarnessPredicate<SkyInlineDeleteHarness>`

## SkyInlineDeleteHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyInlineDeleteHarness` instances.

    interface SkyInlineDeleteHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Inline delete with repeater

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyInlineDeleteModule } from '@skyux/layout';
import { SkyRepeaterModule } from '@skyux/lists';
import { SkyDropdownModule } from '@skyux/popovers';

interface InlineRepeaterDemoItem {
  title: string;
  cost: string;
  description: string;
}

/**
 * @title Inline delete with repeater
 */
@Component({
  selector: 'app-layout-inline-delete-repeater-example',
  templateUrl: './example.component.html',
  imports: [SkyDropdownModule, SkyInlineDeleteModule, SkyRepeaterModule],
})
export class LayoutInlineDeleteRepeaterExampleComponent {
  protected originalRepeaterDemoItems: InlineRepeaterDemoItem[] = [
    {
      title: 'Individual',
      cost: '$75.00',
      description: '1 ticket',
    },
    {
      title: 'Foursome',
      cost: '$250.00',
      description: '4 tickets',
    },
    {
      title: 'Hole sponsor',
      cost: '$1,000.00',
      description: '8 tickets',
    },
  ];

  public repeaterDemoItems = this.originalRepeaterDemoItems;
  protected repeaterDemoShownInlineDeletes: string[] = [];

  public showInlineDelete(title: string): void {
    this.repeaterDemoShownInlineDeletes.push(title);
  }

  protected deleteItem(title: string): void {
    this.repeaterDemoItems = this.repeaterDemoItems.filter(
      (exampleItem: InlineRepeaterDemoItem) => exampleItem.title !== title,
    );

    this.repeaterDemoShownInlineDeletes = this.repeaterDemoShownInlineDeletes.filter(
      (exampleItem: string) => exampleItem !== title,
    );
  }

  protected cancelDeletion(title: string): void {
    this.repeaterDemoShownInlineDeletes = this.repeaterDemoShownInlineDeletes.filter(
      (exampleItem: string) => exampleItem !== title,
    );
  }

  protected onResetClick(): void {
    this.repeaterDemoItems = this.originalRepeaterDemoItems;
    this.repeaterDemoShownInlineDeletes = [];
  }
}
```

#### example.component.html

```html
<sky-repeater>
  @for (item of repeaterDemoItems; track item) {
  <sky-repeater-item>
    <sky-repeater-item-context-menu>
      <sky-dropdown buttonType="context-menu">
        <sky-dropdown-menu>
          <sky-dropdown-item>
            <button type="button" (click)="showInlineDelete(item.title)">Delete</button>
          </sky-dropdown-item>
        </sky-dropdown-menu>
      </sky-dropdown>
    </sky-repeater-item-context-menu>
    <sky-repeater-item-title>
      <div>{{ item.title }}</div>
      <div>{{ item.cost }}</div>
    </sky-repeater-item-title>
    <sky-repeater-item-content> {{ item.description }} </sky-repeater-item-content>
    @if (repeaterDemoShownInlineDeletes.indexOf(item.title) >= 0) {
    <sky-inline-delete (cancelTriggered)="cancelDeletion(item.title)" (deleteTriggered)="deleteItem(item.title)" />
    }
  </sky-repeater-item>
  }
</sky-repeater>

<button class="sky-btn sky-btn-primary" type="button" (click)="onResetClick()">Reset Repeater</button>
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import { SkyInlineDeleteHarness } from '@skyux/layout/testing';

import { LayoutInlineDeleteRepeaterExampleComponent } from './example.component';

describe('Custom component inline delete example', () => {
  async function setupTest(options: { itemTitle: string }): Promise<{
    deleteHarness: SkyInlineDeleteHarness;
    fixture: ComponentFixture<LayoutInlineDeleteRepeaterExampleComponent>;
  }> {
    TestBed.configureTestingModule({
      imports: [LayoutInlineDeleteRepeaterExampleComponent],
      providers: [provideNoopSkyAnimations()],
    });
    const fixture = TestBed.createComponent(LayoutInlineDeleteRepeaterExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.componentInstance.showInlineDelete(options.itemTitle);
    fixture.detectChanges();

    const deleteHarness = await loader.getHarness(SkyInlineDeleteHarness);

    return { deleteHarness, fixture };
  }

  it('should setup inline delete for repeater item', async () => {
    const { deleteHarness, fixture } = await setupTest({
      itemTitle: 'Individual',
    });

    await deleteHarness.clickDeleteButton();

    expect(fixture.componentInstance.repeaterDemoItems.length).toBe(2);
  });
});
```

### Inline delete with custom elements

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyIconModule } from '@skyux/icon';
import { SkyInlineDeleteModule } from '@skyux/layout';

/**
 * @title Inline delete with custom elements
 */
@Component({
  selector: 'app-layout-inline-delete-custom-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  imports: [SkyIconModule, SkyInlineDeleteModule],
})
export class LayoutInlineDeleteCustomExampleComponent {
  public deleting = false;
  protected pending = false;

  protected deleteItem(): void {
    this.deleting = true;
  }

  protected onCancelTriggered(): void {
    this.deleting = false;
  }

  protected onDeleteTriggered(): void {
    setTimeout(() => {
      this.pending = false;
      this.deleting = false;

      alert(
        'Custom element deletion was triggered. In a real scenario the item would be removed. Item was not removed just for example purposes.',
      );
    }, 3000);

    this.pending = true;
  }
}
```

#### example.component.html

```html
<div class="inline-delete-container">
  <strong>Custom content</strong>
  <div>
    <button class="sky-btn sky-btn-danger inline-delete-trigger" type="button" (click)="deleteItem()">
      <sky-icon iconName="delete" />
    </button>
  </div>
  @if (deleting) {
  <sky-inline-delete
    data-sky-id="inline-delete-custom"
    [pending]="pending"
    (cancelTriggered)="onCancelTriggered()"
    (deleteTriggered)="onDeleteTriggered()"
  />
  }
</div>
```

#### example.component.scss

```css
.inline-delete-container {
  padding: 15px;
  background-color: white;
  border: black solid 1px;
  height: 400px;
  width: 400px;
  position: relative;
}

.inline-delete-trigger {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
}
```

#### example.component.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopSkyAnimations } from '@skyux/core';
import { SkyInlineDeleteHarness } from '@skyux/layout/testing';

import { LayoutInlineDeleteCustomExampleComponent } from './example.component';

describe('Custom component inline delete example', () => {
  async function setupTest(): Promise<{
    deleteHarness: SkyInlineDeleteHarness;
    fixture: ComponentFixture<LayoutInlineDeleteCustomExampleComponent>;
  }> {
    TestBed.configureTestingModule({
      imports: [LayoutInlineDeleteCustomExampleComponent],
      providers: [provideNoopSkyAnimations()],
    });
    const fixture = TestBed.createComponent(LayoutInlineDeleteCustomExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.componentInstance.deleting = true;
    fixture.detectChanges();
    const deleteHarness = await loader.getHarness(SkyInlineDeleteHarness.with({ dataSkyId: 'inline-delete-custom' }));

    return { deleteHarness, fixture };
  }

  it('should mark delete as pending when the delete button is clicked', async () => {
    const { deleteHarness } = await setupTest();

    await deleteHarness.clickDeleteButton();
    await expectAsync(deleteHarness.isPending()).toBeResolvedTo(true);
  });
});
```
