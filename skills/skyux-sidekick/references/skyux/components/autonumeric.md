---
Title: Autonumeric
Reference: https://developer.blackbaud.com/skyux/components/autonumeric
---

# Autonumeric

The autonumeric directive automatically formats currency and other numbers that users enter in form inputs. This directive wraps the third-party autoNumeric library. For in-depth information about autoNumeric and its capabilities, see [the autoNumeric documentation.](https://github.com/autoNumeric/autoNumeric/blob/next/README.md)

## Installation

NPM package

`@skyux/autonumeric`[View in NPM](https://www.npmjs.com/package/@skyux/autonumeric) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/autonumeric/src/lib/modules/autonumeric/autonumeric.module.ts#L9)

Install with NPM

`npm install --save-exact @skyux/autonumeric`

## SkyAutonumericModule

Type: Module

`import { SkyAutonumericModule } from '@skyux/autonumeric';`

## SkyAutonumericDirective

Type: Directive

Selector: `input[skyAutonumeric]`

Wraps the [autoNumeric utility](https://github.com/autoNumeric/autoNumeric) to format any type of number, including currency.

### Inputs

#### `skyAutonumeric: SkyAutonumericOptions | undefined`

Assigns the name of a property from `SkyAutonumericOptionsProvider`.

## SkyAutonumericOptions

Type: Type alias

Custom options to provide to the underlying [AutoNumeric library](https://github.com/autoNumeric/autoNumeric). The value can be set to `string`, which is an alias that represents a [set of predefined set of options](https://github.com/autoNumeric/autoNumeric#predefined-options) for a currency or language, or `Options`, which is a [custom set of options](https://github.com/autoNumeric/autoNumeric#options) that override any default options that the `skyAutonumeric` attribute specifies.

    type SkyAutonumericOptions = string | keyof AutoNumeric.PredefinedOptions | AutoNumeric.Options

## SkyAutonumericOptionsProvider

Type: Service

Provides options to the underlying [AutoNumeric library](https://github.com/autoNumeric/autoNumeric). This can set global options on multiple input fields.

### Methods

#### `getConfig(): SkyAutonumericOptions`

The value for a settings object to pass to the AutoNumeric library. This overrides any default options specified by the `skyAutonumeric` attribute.

#### Returns

`SkyAutonumericOptions`

## Code Examples

### Predefined options

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SkyAutonumericModule, SkyAutonumericOptions } from '@skyux/autonumeric';
import { SkyInputBoxModule } from '@skyux/forms';

/**
 * @title Predefined options
 */
@Component({
  selector: 'app-autonumeric-preset-example',
  templateUrl: './example.component.html',
  imports: [ReactiveFormsModule, SkyAutonumericModule, SkyInputBoxModule],
})
export class AutonumericPresetExampleComponent {
  protected autonumericOptions: SkyAutonumericOptions = 'Chinese';

  protected formGroup: FormGroup;

  constructor() {
    this.formGroup = inject(FormBuilder).group({
      donationAmount: new FormControl(1234.5678, [Validators.required]),
    });
  }
}
```

#### example.component.html

```html
<form [formGroup]="formGroup">
  <sky-input-box labelText="Donation amount">
    <input formControlName="donationAmount" type="text" [skyAutonumeric]="autonumericOptions" />
  </sky-input-box>
</form>
```

### Currency

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SkyAutonumericModule, SkyAutonumericOptions } from '@skyux/autonumeric';
import { SkyInputBoxModule } from '@skyux/forms';

/**
 * @title Currency
 */
@Component({
  selector: 'app-autonumeric-currency-example',
  templateUrl: './example.component.html',
  imports: [ReactiveFormsModule, SkyAutonumericModule, SkyInputBoxModule],
})
export class AutonumericCurrencyExampleComponent {
  protected autonumericOptions: SkyAutonumericOptions | undefined;

  protected formGroup: FormGroup;

  constructor() {
    this.formGroup = inject(FormBuilder).group({
      donationAmount: new FormControl(1234.5678, [Validators.required]),
    });

    this.autonumericOptions = {
      currencySymbol: ' €',
      currencySymbolPlacement: 's',
      decimalPlaces: 2,
      decimalCharacter: ',',
      digitGroupSeparator: '',
    };
  }
}
```

#### example.component.html

```html
<form [formGroup]="formGroup">
  <sky-input-box labelText="Donation amount">
    <input formControlName="donationAmount" type="text" [skyAutonumeric]="autonumericOptions" />
  </sky-input-box>
</form>
```

### International formatting

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SkyAutonumericModule, SkyAutonumericOptions } from '@skyux/autonumeric';
import { SkyInputBoxModule } from '@skyux/forms';

/**
 * @title International formatting
 */
@Component({
  selector: 'app-autonumeric-international-formatting-example',
  templateUrl: './example.component.html',
  imports: [ReactiveFormsModule, SkyAutonumericModule, SkyInputBoxModule],
})
export class AutonumericInternationalFormattingExampleComponent {
  protected autonumericOptions: SkyAutonumericOptions | undefined;

  protected formGroup: FormGroup;

  constructor() {
    this.formGroup = inject(FormBuilder).group({
      donationAmount: new FormControl(1234.5678, [Validators.required]),
    });

    this.autonumericOptions = {
      decimalCharacter: ',',
      decimalPlaces: 4,
      digitGroupSeparator: '',
    };
  }
}
```

#### example.component.html

```html
<form [formGroup]="formGroup">
  <sky-input-box labelText="Autonumeric value">
    <input formControlName="donationAmount" type="text" [skyAutonumeric]="autonumericOptions" />
  </sky-input-box>
</form>
```

### Options provider

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SkyAutonumericModule, SkyAutonumericOptions, SkyAutonumericOptionsProvider } from '@skyux/autonumeric';
import { SkyInputBoxModule } from '@skyux/forms';

import { DemoAutonumericOptionsProvider } from './options-provider';

/**
 * @title Options provider
 */
@Component({
  selector: 'app-autonumeric-options-provider-example',
  templateUrl: './example.component.html',
  providers: [
    {
      provide: SkyAutonumericOptionsProvider,
      useClass: DemoAutonumericOptionsProvider,
    },
  ],
  imports: [ReactiveFormsModule, SkyAutonumericModule, SkyInputBoxModule],
})
export class AutonumericOptionsProviderExampleComponent {
  protected donationOptions: SkyAutonumericOptions = {};

  protected formGroup: FormGroup;

  protected pledgeOptions: SkyAutonumericOptions = {
    decimalPlaces: 0,
  };

  constructor() {
    this.formGroup = inject(FormBuilder).group({
      donationAmount: new FormControl(1234.5678, [Validators.required]),
      pledgeAmount: new FormControl(2345.6789, [Validators.required]),
    });
  }
}
```

#### example.component.html

```html
<form [formGroup]="formGroup">
  <sky-input-box labelText="Donation amount" stacked="true">
    <input formControlName="donationAmount" type="text" [skyAutonumeric]="donationOptions" />
  </sky-input-box>
  <sky-input-box labelText="Pledge amount">
    <input formControlName="pledgeAmount" type="text" [skyAutonumeric]="pledgeOptions" />
  </sky-input-box>
</form>
```

#### options-provider.ts

```typescript
import { Injectable } from '@angular/core';
import { SkyAutonumericOptions, SkyAutonumericOptionsProvider } from '@skyux/autonumeric';

@Injectable()
export class DemoAutonumericOptionsProvider extends SkyAutonumericOptionsProvider {
  constructor() {
    super();
  }

  public override getConfig(): SkyAutonumericOptions {
    return {
      currencySymbol: ' €',
      currencySymbolPlacement: 's',
      decimalPlaces: 2,
      decimalCharacter: ',',
      digitGroupSeparator: '',
    };
  }
}
```
