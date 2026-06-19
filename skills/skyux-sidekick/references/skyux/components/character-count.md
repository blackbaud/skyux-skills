---
Title: Character count
Reference: https://developer.blackbaud.com/skyux/components/character-count
---

# Character count

The character count indicator extends a text input to apply a character limit and display the number of characters entered and the character limit.

## Usage

### Use when

Use character count indicators when users are likely to exceed character limits. Indicators are useful when technical requirements lead to restrictive character limits or when user entries are freeform and could be very long.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/character-count/character-count-usage-1.8e79a2112b6194f5331735bbed6d7ffb.png)

Do use character count indicators on input fields where users may realistically exceed character limits.

### Don't use when

Don't use character count indicators when character limits are apparent or implied by the data type.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/character-count/character-count-usage-2.9b9830a2dbe15378ee72d3cf4f25ae44.png)

Don't use character count indicators on input fields where user entries follow expected or standard lengths.

Don't use character count indicators on inputs when users are unlikely to exceed character limits. Instead, use Angular's [max length validator](https://angular.io/api/forms/MaxLengthValidator) and a `maxlength` attribute on the input to handle maximum length validation.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/character-count/character-count-usage-3.17dcdab2217ed1f6e1aee34dd9d4e3ca.png)

Don't use character count indicators on input fields where users should not realistically exceed character limits.

## Anatomy

1

Input field

2

[Status indicator](./status-indicator.md) (danger)

3

Character count indicator (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/character-count/character-count-anatomy.1153f353f3226ebf3f4d487a79e930cd.png)

## Options

### Character count indicator

The character count indicator displays the number of characters that users enter, the character limit, and a danger icon if users exceed the limit. For inputs where users are unlikely to reach the character limit, you don't need to display the character count indicator.

## Content

For validation messages when users exceed character limits, use the following format:

**Limit <input field label> to <n> characters.**

## Layout

The character count indicator always appears in the top right above the input field. Long field labels do not displace indicators. The labels wrap to multiple lines instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/character-count/character-count-layout.edab30d4d4a87a01e935ec16149f47d6.png)

## Related information

### Components

- [Input box](./input-box.md)

### Guidelines

- [Form design](../design/guidelines/form-design.md)

## Installation

NPM package

`@skyux/forms`[View in NPM](https://www.npmjs.com/package/@skyux/forms) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/forms/src/lib/modules/character-counter/character-counter.module.ts#L28)

Install with NPM

`npm install --save-exact @skyux/forms`

## SkyCharacterCounterModule

Type: Module

`import { SkyCharacterCounterModule } from '@skyux/forms';`

## SkyCharacterCounterIndicatorComponent

Type: Component

Selector: `sky-character-counter-indicator`

## SkyCharacterCounterInputDirective

Type: Directive

Selector: `[skyCharacterCounter]`

Creates an input field that validates the number of characters. Place this directive on an `input` or `textarea` element. If users enter more characters than allowed, then the input field is invalid and the component displays an error indicator.

### Inputs

#### `skyCharacterCounterLimit: number | undefined`

Required

The maximum number of characters allowed in the input field. Place this directive on an `input` or `textarea` element. This property accepts `number` values.

#### `skyCharacterCounterIndicator: SkyCharacterCounterIndicatorComponent | undefined`

The character count indicator component that displays the character count, character limit, and over-the-limit indicator. Place this directive on an `input` or `textarea` element.

## SkyCharacterCounterScreenReaderPipe

Type: Pipe

Pipe name: `skyCharacterCounterScreenReader`

### Methods

#### `transform(characterCount: number | undefined, characterCountLimit: number | undefined): string`

#### Parameters

##### `characterCount: number | undefined`

##### `characterCountLimit: number | undefined`

#### Returns

`string`

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyCharacterCounterIndicatorHarness

Type: Class

`import { SkyCharacterCounterIndicatorHarness } from '@skyux/forms/testing';`

Harness for interacting with a character counter indicator component in tests.

### Methods

#### `getCharacterCount(): Promise<number>`

Gets the current character count.

#### Returns

`Promise<number>`

#### `getCharacterCountLimit(): Promise<number>`

Gets the character counter limit.

#### Returns

`Promise<number>`

#### `isOverLimit(): Promise<boolean>`

Indicates whether the character counter is in an error state because the current character count is greater than the limit.

#### Returns

`Promise<boolean>`

#### `SkyCharacterCounterIndicatorHarness.with(filters: SkyCharacterCounterIndicatorHarnessFilters): HarnessPredicate<SkyCharacterCounterIndicatorHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyCharacterCounterIndicatorHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyCharacterCounterIndicatorHarnessFilters`

#### Returns

`HarnessPredicate<SkyCharacterCounterIndicatorHarness>`

## SkyCharacterCounterIndicatorHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyCharacterCounterIndicatorHarness](./character-count.md#class_sky-character-counter-indicator-harness) instances.

    interface SkyCharacterCounterIndicatorHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.
