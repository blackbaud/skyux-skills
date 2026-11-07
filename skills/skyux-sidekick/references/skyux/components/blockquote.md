---
Title: Blockquote (preview)
Reference: https://developer.blackbaud.com/skyux/components/blockquote
---

# Blockquote (preview)

The blockquote component is currently in [preview mode](../learn/preview.md). We plan to officially support it in an upcoming minor version of SKY UX v15.

Blockquotes set quotes, such as customer testimonials, apart from the surrounding body text.

## Usage

### Use when

Use blockquotes to emphasize quotes from people or other sources. For example, use blockquotes for:

- Customer testimonials.
- Quotes from articles, reports, or other sources.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/blockquote/blockquote-usage-1.173997e8.png)

Do use blockquotes to highlight direct quotes.

### Don't use when

Don't use blockquotes to emphasize text that isn't a quote, including important information, tips, or callouts. Use [alerts](./alert.md), [inline help](./help-inline.md), or [typography styles](../design/styles/typography.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/blockquote/blockquote-usage-2.95b4c109.png)

Don't use blockquotes when the text to highlight isn't a direct quote.

## Anatomy

1

Quote

2

Attribution (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/blockquote/blockquote-anatomy.cdad62ac.png)

## Options

### Attribution

To attribute the quote to a person or organization, set the `author` input.

To link the attribution to the quote's source, use the `quoteSource` input to specify the URL. If you set the `quoteSource` input without the `author` input, the attribution reads "Source."

## Content

Only place quoted text inside blockquotes. Use the `author` and `quoteSource` inputs for the attribution.

Don't add quotation marks to the beginning or end of the quoted text. For nested quotation, place single quotation marks around the nested quote.

You can use `strong` or `em` tags on quoted text to add visual and semantic emphasis. Don't add links, text color changes, or any other styling to the quote text.

## Related information

### Guidelines

- [Call out information](../design/guidelines/call-out-info.md)

### Styles

- [Typography](../design/styles/typography.md)

## Installation

NPM package

`@skyux/layout`[View in NPM](https://www.npmjs.com/package/@skyux/layout) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/layout/src/lib/modules/blockquote/blockquote.ts#L17)

Install with NPM

`npm install --save-exact @skyux/layout`

## SkyBlockquote

Type: Component Preview

Selector: `sky-blockquote`

Sets a quotation, such as a customer testimonial, apart from the surrounding body text.

### Inputs

#### `author: InputSignal<string | undefined>`

The name of the person or organization the quotation is attributed to.

#### `quoteSource: InputSignal<string | undefined>`

The URL of the quotation's source. When set, the attribution links to it, and it reads "Source" when `author` isn't set.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyBlockquoteHarness

Type: Class Preview

`import { SkyBlockquoteHarness } from '@skyux/layout/testing';`

Harness for interacting with a blockquote component in tests.

### Methods

#### `getAuthor(): Promise<string | undefined>`

Gets the name the quotation is attributed to, or `undefined` when `author` isn't set.

#### Returns

`Promise<string | undefined>`

#### `getQuoteSource(): Promise<string | undefined>`

Gets the URL of the quotation's source, or `undefined` when it isn't set.

#### Returns

`Promise<string | undefined>`

#### `getText(): Promise<string>`

Gets the text of the quotation.

#### Returns

`Promise<string>`

#### `SkyBlockquoteHarness.with(filters: SkyBlockquoteHarnessFilters): HarnessPredicate<SkyBlockquoteHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyBlockquoteHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyBlockquoteHarnessFilters`

#### Returns

`HarnessPredicate<SkyBlockquoteHarness>`

## SkyBlockquoteHarnessFilters

Type: Interface Preview

A set of criteria that can be used to filter a list of `SkyBlockquoteHarness` instances.

    interface SkyBlockquoteHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Customer testimonial with attribution

#### example.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyBlockquote } from '@skyux/layout';

/**
 * @title Customer testimonial with attribution
 */
@Component({
  selector: 'app-layout-blockquote-customer-testimonial-example',
  templateUrl: './example.html',
  imports: [SkyBlockquote],
})
export class LayoutBlockquoteCustomerTestimonialExample {}
```

#### example.html

```html
<sky-blockquote author="Happy Customer" data-sky-id="customer-testimonial" quoteSource="https://www.blackbaud.com">
  Sample testimonial: “This product has been an absolute joy to use from day one. Everything feels thoughtful and
  intuitive, making even the busiest days feel more manageable. We couldn’t be happier with the experience and would
  recommend it without hesitation.”
</sky-blockquote>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { SkyBlockquoteHarness } from '@skyux/layout/testing';

import { LayoutBlockquoteCustomerTestimonialExample } from './example';

describe('Customer testimonial with attribution example', () => {
  async function setupTest(): Promise<{
    blockquoteHarness: SkyBlockquoteHarness;
  }> {
    const fixture = TestBed.createComponent(LayoutBlockquoteCustomerTestimonialExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const blockquoteHarness = await loader.getHarness(SkyBlockquoteHarness.with({ dataSkyId: 'customer-testimonial' }));

    return { blockquoteHarness };
  }

  it("should show the customer's testimonial", async () => {
    const { blockquoteHarness } = await setupTest();

    await expectAsync(blockquoteHarness.getText()).toBeResolvedTo(
      jasmine.stringContaining('This product has been an absolute joy to use'),
    );
  });

  it('should credit and link to the customer', async () => {
    const { blockquoteHarness } = await setupTest();

    await expectAsync(blockquoteHarness.getAuthor()).toBeResolvedTo('Happy Customer');
    await expectAsync(blockquoteHarness.getQuoteSource()).toBeResolvedTo('https://www.blackbaud.com');
  });
});
```
