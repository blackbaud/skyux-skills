---
Title: Email validation
Reference: https://developer.blackbaud.com/skyux/components/email-validation
---

# Email validation

The email validation module validates the format of email addresses in input fields.

## Usage

### Use when

Use email validation when users must enter valid email addresses.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/email-validation/email-validation-usage1-modern.e5b1cc69c5833ca71b279d1bf1a714ea.png)

Do validate email addresses that users will store as data.

### Don't use when

Don't use email validation when users can enter multiple types of data in an input field.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/email-validation/email-validation-usage-2-modern.d1d87487aa583cdde25e42459f83ffb7.png)

Don't validate email addresses in search fields or filters.

## Anatomy

1

Input field

2

[Status indicator](./status-indicator.md) (danger)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/email-validation/email-validation-anatomy-modern.e1a51c14e0ab5d637b702f81d37e3e7f.png)

## Behavior and states

You apply the email validation directive to an input field. The directive triggers the normal and error states, but the input field defines styles and the appearance of those states.

The directive applies its logic when the input field loses focus. It does not trigger error states while users type. After the field enters an error state, it remains in that state until the content matches a valid email address format.

## Content

Use a succinct error message, and explain that users need to use a valid email address format.

## Related information

### Components

- [Status indicator](./status-indicator.md)
- [URL validation](./url-validation.md)

### Guidelines

- [Error handling](../design/guidelines/error-handling.md)
- [Form design](../design/guidelines/form-design.md)

## Installation

NPM package

`@skyux/validation`[View in NPM](https://www.npmjs.com/package/@skyux/validation) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/validation/src/lib/modules/email-validation/email-validation.module.ts#L11)

Install with NPM

`npm install --save-exact @skyux/validation`

## SkyEmailValidationModule

Type: Module

`import { SkyEmailValidationModule } from '@skyux/validation';`

## SkyEmailValidationDirective

Type: Directive

Selector: `[skyEmailValidation]`

Adds email address validation to an input element. The directive uses `NgModel` to bind data.

## SkyValidators

Type: Class

### Methods

#### `SkyValidators.email(control: AbstractControl): ValidationErrors | null`

Validates email addresses in reactive forms. Add this validator directly to the form control model in the component class. If users enter values that are not valid email addresses, the validator throws an error. Since this is a sync validator, it returns a set of validation errors or `null` immediately when users enter values.

#### Parameters

##### `control: AbstractControl`

#### Returns

`ValidationErrors | null`

#### `SkyValidators.url(abstractControl: AbstractControl): ValidationErrors | null`

Validates URLs in reactive forms. Add this validator directly to the form control model in the component class. If users enter values that are not valid URLs, the validator throws an error. Since this is a sync validator, it returns a set of validation errors or `null` immediately when users enter values.

#### Parameters

##### `abstractControl: AbstractControl`

#### Returns

`ValidationErrors | null`

## Code Examples

### Email validation using input directive

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyEmailValidationModule } from '@skyux/validation';

/**
 * @title Email validation using input directive
 */
@Component({
  selector: 'app-validation-email-validation-directive-example',
  templateUrl: './example.component.html',
  imports: [FormsModule, ReactiveFormsModule, SkyEmailValidationModule, SkyInputBoxModule],
})
export class ValidationEmailValidationDirectiveExampleComponent {
  protected exampleModel: {
    emailAddress?: string;
  } = {};
}
```

#### example.component.html

```html
<form novalidate>
  <div>
    <sky-input-box stacked="true" labelText="Email address">
      <input name="emailAddress" skyEmailValidation type="text" [(ngModel)]="exampleModel.emailAddress" />
    </sky-input-box>
  </div>
</form>
```

### Email validation on reactive form controls

#### example.component.ts (primary file)

```typescript
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyValidators } from '@skyux/validation';

/**
 * @title Email validation on reactive form controls
 */
@Component({
  selector: 'app-validation-email-validation-control-validator-example',
  templateUrl: './example.component.html',
  imports: [FormsModule, ReactiveFormsModule, SkyInputBoxModule],
})
export class ValidationEmailValidationControlValidatorExampleComponent {
  protected get emailControl(): AbstractControl | null {
    return this.formGroup.get('email');
  }

  protected formGroup: FormGroup;

  constructor() {
    this.formGroup = inject(FormBuilder).group({
      email: new FormControl(undefined, [Validators.required, SkyValidators.email]),
    });
  }
}
```

#### example.component.html

```html
<form novalidate [formGroup]="formGroup">
  <div>
    <sky-input-box stacked="true" labelText="Email address">
      <input formControlName="email" type="text" />
    </sky-input-box>
  </div>
</form>
```
