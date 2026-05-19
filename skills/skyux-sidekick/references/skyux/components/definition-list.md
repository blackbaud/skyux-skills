---
Title: Definition list (deprecated)
Reference: https://developer.blackbaud.com/skyux/components/definition-list
---
> **Deprecated.** Use [description list](./description-list.md) instead. See below for migration details.


# Definition list (deprecated)

Definition lists display label-value pairs.

Definition list is deprecated in favor of [description list](./description-list.md). For more information, see the [definition list deprecation instructions](../learn/develop/deprecation/definition-list.md).

## Content

Don't use colons after definition list labels.

## Related information

### Components

- [Alert](./alert.md)
- [Toolbar](./toolbar.md)

## Installation

NPM package

`@skyux/layout`[View in NPM](https://www.npmjs.com/package/@skyux/layout) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/layout/src/lib/modules/definition-list/definition-list.module.ts#L32)

Install with NPM

`npm install --save-exact @skyux/layout`

## SkyDefinitionListModule

Type: Module

`import { SkyDefinitionListModule } from '@skyux/layout';`

Warning: **Deprecated.** Use `SkyDescriptionListModule` instead.

## SkyDefinitionListComponent

Type: Component

Selector: `sky-definition-list`

Warning: **Deprecated.** Use `SkyDescriptionListComponent` instead.

Creates a definition list to display label-value pairs.

### Inputs

#### `defaultValue: string | undefined`

The default value to display when no value is provided for a label-value pair.

Default: `"None found"`

#### `labelWidth: string | undefined`

The width of the label portion of the definition list.

Default: `"90px"`

## SkyDefinitionListHeadingComponent

Type: Component

Selector: `sky-definition-list-heading`

Specifies a title for the definition list.

## SkyDefinitionListContentComponent

Type: Component

Selector: `sky-definition-list-content`

Warning: **Deprecated.** Use `SkyDescriptionListContentComponent` instead.

Wraps the label-value pairs in the definition list.

## SkyDefinitionListLabelComponent

Type: Component

Selector: `sky-definition-list-label`

Warning: **Deprecated.** Use `SkyDescriptionListTermComponent` instead.

Specifies the label in a label-value pair.

## SkyDefinitionListValueComponent

Type: Component

Selector: `sky-definition-list-value`

Warning: **Deprecated.** Use `SkyDescriptionListDescriptionComponent` instead.

Specifies the value in a label-value pair.

## Code Examples

### Definition list with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyDefinitionListModule } from '@skyux/layout';

/**
 * @title Definition list with basic setup
 */
@Component({
  selector: 'app-layout-definition-list-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyDefinitionListModule],
})
export class LayoutDefinitionListBasicExampleComponent {
  protected items: { label: string; value?: string }[] = [
    {
      label: 'Field 1',
      value: 'Field 1 value',
    },
    {
      label: 'Field 2',
      value: 'Field 2 value',
    },
    {
      label: 'Field 3',
      value: undefined,
    },
    {
      label: 'Field 4',
      value: 'Field 4 value',
    },
  ];
}
```

#### example.component.html

```html
<sky-definition-list>
  <sky-definition-list-heading> Definition list heading </sky-definition-list-heading>
  @for (item of items; track item) {
  <sky-definition-list-content>
    <sky-definition-list-label> {{ item.label }} </sky-definition-list-label>
    <sky-definition-list-value> {{ item.value }} </sky-definition-list-value>
  </sky-definition-list-content>
  }
</sky-definition-list>
```
