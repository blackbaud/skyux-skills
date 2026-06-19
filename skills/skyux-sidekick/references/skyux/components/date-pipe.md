---
Title: Date pipe
Reference: https://developer.blackbaud.com/skyux/components/date-pipe
---

# Date pipe

The date pipe formats date values according to locale rules. The fuzzy date pipe formats date values using two or more date tokens that represent the day, month, and year.

## Installation

NPM package

`@skyux/datetime`[View in NPM](https://www.npmjs.com/package/@skyux/datetime) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/datetime/src/lib/modules/date-pipe/date-pipe.module.ts#L13)

Install with NPM

`npm install --save-exact @skyux/datetime`

## SkyDatePipeModule

Type: Module

`import { SkyDatePipeModule } from '@skyux/datetime';`

## SkyDatePipe

Type: Pipe

Pipe name: `skyDate`

Formats date values according to locale rules.

### Example

    {{ myDate | skyDate }}

### Methods

#### `transform(value: any, format?: string, locale?: string): string`

Transforms a date value using locale and format rules.

#### Parameters

##### `value: any`

Specifies the date value to transform.

##### `format?: string`

Specifies the format to apply to the transform. The format string is constructed by a series of symbols that represent date-time values. The symbols are identical to [Angular's `DatePipe`](https://angular.dev/api/common/DatePipe#pre-defined-format-options) format options.

##### `locale?: string`

Specifies the locale code to use in the transform.

#### Returns

`string`

## SkyFuzzyDatePipe

Type: Pipe

Pipe name: `skyFuzzyDate`

Formats date values using two or more date tokens that represent the day, month, and year. The tokens are described in the [moment.js values](https://momentjs.com/docs/#/displaying/).

### Example

    {{ myFuzzyDate | skyFuzzyDate:'MMM Y' }}

### Methods

#### `transform(value: SkyFuzzyDate, format?: string, locale?: string): string`

Transforms fuzzy date values using two or more date tokens that represent the day, month, and year.

#### Parameters

##### `value: SkyFuzzyDate`

Specifies the date value to transform.

##### `format?: string`

Specifies the format to apply to the transform. You construct the format string with a two or more tokens that specify the components of date-time value. The tokens are described in the [moment.js values](https://momentjs.com/docs/#/displaying/). If you don't provide a format, `SkyFuzzyDatePipe` attempts to format fuzzy dates based on the browser's default locale.

##### `locale?: string`

Specifies the locale code to use in the transform.

#### Returns

`string`

## SkyFuzzyDate

Type: Interface

    interface SkyFuzzyDate {
      day?: number;
      month?: number;
      year?: number;
    }

### Properties

#### `day?: number`

The day in a fuzzy date, where `1` sets the day to the first day of the specified month.

#### `month?: number`

The month in a fuzzy date, where `1` sets the month to January.

#### `year?: number`

The year in a fuzzy date.

## Code Examples

### Date pipe basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyDatePipeModule } from '@skyux/datetime';

/**
 * @title Date pipe basic setup
 */
@Component({
  selector: 'app-datetime-date-pipe-basic-example',
  templateUrl: './example.component.html',
  imports: [SkyDatePipeModule],
})
export class DatetimeDatePipeBasicExampleComponent {
  protected myDate = new Date('11/05/1955');
}
```

#### example.component.html

```html
<div>{{ myDate | skyDate }}</div>
<div>{{ myDate | skyDate: 'medium' }}</div>
<div>{{ myDate | skyDate: 'medium' : 'es-MX' }}</div>
```
