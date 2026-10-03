---
Title: Jasmine matchers
Reference: https://developer.blackbaud.com/skyux/learn/develop/testing/jasmine-matchers
---

# Jasmine matchers

The `@skyux-sdk/testing` package provides matchers for Karma and Jasmine unit tests.

## expect

Type: Function

Create an expectation for a spec.

    function expect(actual: T): <a class="sky-docs-codespan-anchor" href="https://developer.blackbaud.com/skyux/learn/develop/testing/jasmine-matchers#interface_sky-matchers">SkyMatchers</a><T>

### Parameters

#### `actual: T`

Actual computed value to test expectations against.

## expectAsync

Type: Function

Create an async expectation for a spec.

    function expectAsync(actual: T | PromiseLike<T>): <a class="sky-docs-codespan-anchor" href="https://developer.blackbaud.com/skyux/learn/develop/testing/jasmine-matchers#interface_sky-async-matchers">SkyAsyncMatchers</a><T, U>

### Parameters

#### `actual: T | PromiseLike<T>`

Actual computed value to test expectations against.

## SkyAsyncMatchers

Type: Interface

Interface for "asynchronous" custom Sky matchers which cannot be paired with a `.not` operator.

    interface SkyAsyncMatchers {
      not: SkyAsyncMatchers<T, U>;
      toBeAccessible: Promise<CustomMatcherResult>;
      toEqualLibResourceText: Promise<CustomMatcherResult>;
      toEqualResourceText: Promise<CustomMatcherResult>;
      toHaveLibResourceText: Promise<CustomMatcherResult>;
      toHaveResourceText: Promise<CustomMatcherResult>;
      toMatchLibResourceTemplate: Promise<CustomMatcherResult>;
      toMatchResourceTemplate: Promise<CustomMatcherResult>;
    }

### Properties

#### `not: SkyAsyncMatchers<T, U>`

Invert the matcher following this `expect`

#### `toBeAccessible: Promise<CustomMatcherResult>`

`expect` an element to be accessible based on Web Content Accessibility Guidelines 2.0 (WCAG20) Level A and AA success criteria.

#### `toEqualLibResourceText: Promise<CustomMatcherResult>`

`expect` the actual text to equal the text for the expected resource string. Uses `SkyLibResourcesService.getString(name, args)` to fetch the expected resource string and compares using ===.

#### `toEqualResourceText: Promise<CustomMatcherResult>`

`expect` the actual text to equal the text for the expected resource string. Uses `SkyAppResourcesService.getString(name, args)` to fetch the expected resource string and compares using ===.

#### `toHaveLibResourceText: Promise<CustomMatcherResult>`

`expect` the actual element to have the text for the expected resource string. Uses `SkyLibResourcesService.getString(name, args)` to fetch the expected resource string and compares using ===.

#### `toHaveResourceText: Promise<CustomMatcherResult>`

`expect` the actual element to have the text for the expected resource string. Uses `SkyAppResourcesService.getString(name, args)` to fetch the expected resource string and compares using ===.

#### `toMatchLibResourceTemplate: Promise<CustomMatcherResult>`

`expect` the actual element to have the text for the expected resource string. Uses `SkyLibResourcesService.getString(name, args)` to fetch the expected resource string and compares the tokenized element text against the template. Essentially this matches any text that has the non-parameterized text of the template in the order of the template, regardless of the value of each of the parameters.

#### `toMatchResourceTemplate: Promise<CustomMatcherResult>`

`expect` the actual element to have the text for the expected resource string. Uses `SkyAppResourcesService.getString(name, args)` to fetch the expected resource string and compares the tokenized element text against the template. Essentially this matches any text that has the non-parameterized text of the template in the order of the template, regardless of the value of each of the parameters.

## SkyMatchers

Type: Interface

Interface for "normal" custom Sky matchers (includes original jasmine matchers).

    interface SkyMatchers {
      not: SkyMatchers<T>;
      toBeAccessible: void;
      toBeVisible: void;
      toEqualResourceText: void;
      toExist: void;
      toHaveCssClass: void;
      toHaveResourceText: void;
      toHaveStyle: void;
      toHaveText: void;
      toMatchResourceTemplate: void;
    }

### Properties

#### `not: SkyMatchers<T>`

Invert the matcher following this `expect`

#### `toBeAccessible: void`

Warning: **Deprecated.** Use `await expectAsync(element).toBeAccessible()` instead.

`expect` the actual component to be accessible based on Web Content Accessibility Guidelines 2.0 (WCAG20) Level A and AA success criteria.

#### `toBeVisible: void`

`expect` the actual element to be visible. Checks elements style display and visibility and bounding box width/height.

#### `toEqualResourceText: void`

Warning: **Deprecated.** Use `await expectAsync('Some message.').toEqualResourceText('foo_bar_key')` instead.

`expect` the actual text to equal the text for the expected resource string. Uses `SkyAppResourcesService.getString(name, args)` to fetch the expected resource string and compares using ===.

#### `toExist: void`

`expect` the actual element to exist.

#### `toHaveCssClass: void`

`expect` the actual element to have the expected css class.

#### `toHaveResourceText: void`

Warning: **Deprecated.** Use `await expectAsync(element).toHaveResourceText('foo_bar_key')` instead.

`expect` the actual element to have the text for the expected resource string. Uses `SkyAppResourcesService.getString(name, args)` to fetch the expected resource string and compares using ===.

#### `toHaveStyle: void`

`expect` the actual element to have the expected style(s).

#### `toHaveText: void`

`expect` the actual element to have the expected text.

#### `toMatchResourceTemplate: void`

Warning: **Deprecated.** Use `await expectAsync(element).toMatchResourceTemplate('foo_bar_key')` instead.

`expect` the actual element to have the text for the expected resource string. Uses `SkyAppResourcesService.getString(name, args)` to fetch the expected resource string and compares the tokenized element text against the template. Essentially this matches any text that has the non-parameterized text of the template in the order of the template, regardless of the value of each of the parameters.

## SkyA11yAnalyzerConfig

Type: Interface

    interface SkyA11yAnalyzerConfig {
      rules: Record<string, { enabled: boolean }>;
    }

### Properties

#### `rules: Record<string, { enabled: boolean }>`

## SkyToBeVisibleOptions

Type: Interface

Represents options for the `toBeVisible` Jasmine matcher.

    interface SkyToBeVisibleOptions {
      checkCssDisplay?: boolean;
      checkCssVisibility?: boolean;
      checkDimensions?: boolean;
      checkExists?: boolean;
    }

### Properties

#### `checkCssDisplay?: boolean`

Indicates if the CSS `display` property should be considered when checking an element's visibility. If the `display` property is set to "none", the element is not considered visible.

#### `checkCssVisibility?: boolean`

Indicates if the CSS `visibility` property should be considered when checking an element's visibility. If the `visibility` property is set to "hidden", the element is not considered visible.

#### `checkDimensions?: boolean`

Indicates if the element's height and width should be considered when checking an element's visibility. If the element has a height and width greater than zero, the element is considered visible.

#### `checkExists?: boolean`

Warning: **Deprecated.** Existence is always checked, so this option has no effect.

Indicates if the element's existence on the document should be considered when checking an element's visibility. If the element exists, it is considered visible.
