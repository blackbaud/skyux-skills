---
Title: Numeric
Reference: https://developer.blackbaud.com/skyux/components/numeric
---

# Numeric

The numeric pipe and numeric service format numbers with proper localization and currency symbol placement.

## Installation

NPM package

`@skyux/core`[View in NPM](https://www.npmjs.com/package/@skyux/core) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/core/src/lib/modules/numeric/numeric.module.ts#L12)

Install with NPM

`npm install --save-exact @skyux/core`

## SkyNumericModule

Type: Module

`import { SkyNumericModule } from '@skyux/core';`

## SkyNumericPipe

Type: Pipe

Pipe name: `skyNumeric`

Shortens numbers to rounded numbers and abbreviation characters such as K for thousands, M for millions, B for billions, and T for trillions. The pipe also formats for currency. Be sure you have a space after the two curly brackets opening the pipe and a space before the two curly brackets closing the pipe or it will not work.

### Methods

#### `transform(value: number | null | undefined, config?: SkyNumericOptions): string`

Formats a number based on the provided options.

#### Parameters

##### `value: number | null | undefined`

##### `config?: SkyNumericOptions`

#### Returns

`string`

## SkyNumericService

Type: Service

### Methods

#### `formatNumber(value: number | null | undefined, options: SkyNumericOptions): string`

Formats a number based on the provided options.

#### Parameters

##### `value: number | null | undefined`

The number to format.

##### `options: SkyNumericOptions`

Format options.

#### Returns

`string`

## SkyNumericOptions

Type: Interface

Provides arguments for the number to format.

    interface SkyNumericOptions {
      currencyDisplay?: "symbol" | "code" | "name" | "narrowSymbol";
      currencySign?: "standard" | "accounting";
      digits?: number;
      format?: string;
      iso?: string;
      locale?: string;
      minDigits?: number;
      truncate?: boolean;
      truncateAfter?: number;
    }

### Properties

#### `currencyDisplay?: "symbol" | "code" | "name" | "narrowSymbol"`

Specifies the display of the currency. Defaults to 'symbol'.

#### `currencySign?: "standard" | "accounting"`

Specifies the format of the currency.

#### `digits?: number`

Specifies the maximum number of digits after the decimal separator.

#### `format?: string`

Specifies how to format the number. Options are `currency` or `number`.

#### `iso?: string`

Specifies the ISO4217 currency code to use for currency formatting.

#### `locale?: string`

Specifies the locale code to use when formatting.

#### `minDigits?: number`

Specifies the minimum number of digits after the decimal separator. This property only applies when the `truncate` property is set to `false`. If `digits` specifies a maximum number of digits, then `minDigits` must be less than that value.

#### `truncate?: boolean`

Indicates whether to shorten numbers to rounded numbers and abbreviation characters such as K for thousands, M for millions, B for billions, and T for trillions.

#### `truncateAfter?: number`

Specifies the minimum value at which numbers are shortened to rounded numbers and abbreviation characters. Values less than `1000` are not truncated.

## Code Examples

### Numeric pipe with basic setup

#### example.component.ts (primary file)

```typescript
import { Component, Input } from '@angular/core';
import { SkyNumericModule, SkyNumericOptions } from '@skyux/core';
import { SkyDescriptionListModule } from '@skyux/layout';

/**
 * @title Numeric pipe with basic setup
 */
@Component({
  selector: 'app-core-numeric-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyDescriptionListModule, SkyNumericModule],
})
export class CoreNumericBasicExampleComponent {
  @Input()
  public defaultValue = 1000000;

  @Input()
  public configuredValue = 1234567;

  @Input()
  public numericOptions: SkyNumericOptions = {
    digits: 3,
    format: 'currency',
    iso: 'JPY',
  };
}
```

#### example.component.html

```html
<sky-description-list mode="vertical">
  <sky-description-list-content>
    <sky-description-list-term> Default setup </sky-description-list-term>
    <sky-description-list-description>
      <span class="default-value"> {{ defaultValue | skyNumeric }} </span>
    </sky-description-list-description>
  </sky-description-list-content>
  <sky-description-list-content>
    <sky-description-list-term> With options </sky-description-list-term>
    <sky-description-list-description>
      <span class="configured-value"> {{ configuredValue | skyNumeric: numericOptions }} </span>
    </sky-description-list-description>
  </sky-description-list-content>
</sky-description-list>
```

#### example.component.spec.ts

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyNumericOptions } from '@skyux/core';

import { CoreNumericBasicExampleComponent } from './example.component';

describe('Basic numeric options', () => {
  async function setupTest(options?: {
    defaultValue?: number;
    configuredValue?: number;
    config?: SkyNumericOptions;
  }): Promise<{ fixture: ComponentFixture<CoreNumericBasicExampleComponent> }> {
    const fixture = TestBed.createComponent(CoreNumericBasicExampleComponent);

    if (options?.defaultValue !== undefined) {
      fixture.componentInstance.defaultValue = options.defaultValue;
    }

    if (options?.configuredValue !== undefined) {
      fixture.componentInstance.configuredValue = options.configuredValue;
    }

    if (options?.config !== undefined) {
      fixture.componentInstance.numericOptions = options.config;
    }

    fixture.detectChanges();
    await fixture.whenStable();

    return { fixture };
  }

  function getTextContent(fixture: ComponentFixture<CoreNumericBasicExampleComponent>, selector: string): string {
    const el = (fixture.nativeElement as HTMLElement).querySelector<HTMLSpanElement>(selector);

    return el?.textContent?.trim() ?? '';
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreNumericBasicExampleComponent],
    });
  });

  it('should show the expected number in the default format', async () => {
    const { fixture } = await setupTest({ defaultValue: 123456 });

    fixture.detectChanges();

    expect(getTextContent(fixture, '.default-value')).toEqual('123.5K');
  });

  it('should show the expected number in a specified format', async () => {
    const { fixture } = await setupTest({
      configuredValue: 5000000,
      config: { truncate: false },
    });

    expect(getTextContent(fixture, '.configured-value')).toEqual('5,000,000');
  });
});
```
