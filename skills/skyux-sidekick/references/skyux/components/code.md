---
Title: Code (preview)
Reference: https://developer.blackbaud.com/skyux/components/code
---

# Code (preview)

The code component is currently in [preview mode](../learn/preview.md). We plan to officially support it in an upcoming minor version of SKY UX v15.

The code component formats text, such as a file name or property name, to display an inline code fragment within a larger body of text.

## Usage

### Use when

Use code components for short code references within surrounding body text. For example, use code components for:

- File names, such as `app.component.html`.
- Property and input names, such as `headingText`.
- Component selectors, such as `sky-box`.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/code/code-usage-1.9097699e.png)

Do use code components for code snippets within a body of text.

### Don't use when

Don't use code components when code spans multiple lines. Display multiline code in code blocks instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/code/code-usage-2.7c93a1a1.png)

Don't use code components for multiple lines of code.

Don't use code components to emphasize text that isn't code. Use [typography styles](../design/styles/typography.md) instead.

## Anatomy

1

Code text

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/code/code-anatomy.a44432e0.png)

## Content

Only place code inside code components. Don't include punctuation or surrounding words, such as "input" and "component."

## Related information

### Styles

- [Typography](../design/styles/typography.md)

## Installation

NPM package

`@skyux/code`[View in NPM](https://www.npmjs.com/package/@skyux/code) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/code/src/lib/modules/code/code.ts#L13)

Install with NPM

`npm install --save-exact @skyux/code`

## SkyCode

Type: Component Preview

Selector: `sky-code`

Displays an inline code token, such as a file name or property name, within a body of text.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyCodeHarness

Type: Class Preview

`import { SkyCodeHarness } from '@skyux/code/testing';`

Harness for interacting with a code component in tests.

### Methods

#### `getText(): Promise<string>`

Gets the text of the code token.

#### Returns

`Promise<string>`

#### `SkyCodeHarness.with(filters: SkyCodeHarnessFilters): HarnessPredicate<SkyCodeHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyCodeHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyCodeHarnessFilters`

#### Returns

`HarnessPredicate<SkyCodeHarness>`

## SkyCodeHarnessFilters

Type: Interface Preview

A set of criteria that can be used to filter a list of `SkyCodeHarness` instances.

    interface SkyCodeHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Inline code within body text

#### example.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyCode } from '@skyux/code';

/**
 * @title Inline code within body text
 */
@Component({
  selector: 'app-code-inline-text-example',
  templateUrl: './example.html',
  imports: [SkyCode],
})
export class CodeInlineTextExample {}
```

#### example.html

```html
<p>
  To display a heading, set the
  <sky-code data-sky-id="input-name">headingText</sky-code> input on the
  <sky-code data-sky-id="component-name">sky-box</sky-code> component.
</p>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { SkyCodeHarness } from '@skyux/code/testing';

import { CodeInlineTextExample } from './example';

describe('Inline code within body text example', () => {
  async function setupTest(options: { dataSkyId: string }): Promise<{
    codeHarness: SkyCodeHarness;
  }> {
    const fixture = TestBed.createComponent(CodeInlineTextExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const codeHarness = await loader.getHarness(SkyCodeHarness.with({ dataSkyId: options.dataSkyId }));

    return { codeHarness };
  }

  it('should show the input name as code', async () => {
    const { codeHarness } = await setupTest({ dataSkyId: 'input-name' });

    await expectAsync(codeHarness.getText()).toBeResolvedTo('headingText');
  });

  it('should show the component name as code', async () => {
    const { codeHarness } = await setupTest({ dataSkyId: 'component-name' });

    await expectAsync(codeHarness.getText()).toBeResolvedTo('sky-box');
  });
});
```
