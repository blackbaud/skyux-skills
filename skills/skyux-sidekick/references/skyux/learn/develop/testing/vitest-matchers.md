---
Title: Vitest matchers (preview)
Reference: https://developer.blackbaud.com/skyux/learn/develop/testing/vitest-matchers
---

# Vitest matchers (preview)

The `@skyux-sdk/vitest` matchers are currently in [preview mode](../../preview.md) and aren't fully implemented or documented. We plan to officially release them after the SKY UX v15 release, and support for the Vite builder and Vitest test runner is rolling out soon for Blackbaud teams.

The `@skyux-sdk/vitest` package provides matchers for Vitest unit tests.

## Installation

To add the `@skyux-sdk/vitest` package to your project, run the following command:

Bash

    ng add @skyux-sdk/vitest

This adds the package and its `axe-core` peer dependency to your `devDependencies`. The remaining steps assume your project already runs its tests with Vitest through the `@angular/build:unit-test` builder.

### Register the matchers

Add the setup file to your project's `test` target. The builder resolves each entry in `setupFiles` from the workspace root.

angular.json JSON

    {
      "projects": {
        "my-project": {
          "architect": {
            "test": {
              "builder": "@angular/build:unit-test",
              "options": {
                "setupFiles": ["node_modules/@skyux-sdk/vitest/matchers-setup.mjs"]
              }
            }
          }
        }
      }
    }

### Add the matcher types

Add `@skyux-sdk/vitest/globals` to the `types` in your `tsconfig.spec.json` alongside `vitest/globals`.

tsconfig.spec.json JSON

    {
      "extends": "./tsconfig.json",
      "compilerOptions": {
        "types": ["vitest/globals", "@skyux-sdk/vitest/globals"]
      },
      "include": ["src/**/*.d.ts", "src/**/*.spec.ts"]
    }

## Usage

After setup, the matchers are available on Vitest's global `expect` without any additional imports.

my-component.spec.ts TypeScript

    it('should render an accessible button', async () => {
      const fixture = TestBed.createComponent(MyComponent);
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelector('.sky-btn');

      expect(el).toExist();
      expect(el).toBeVisible({ checkCssVisibility: true });
      expect(el).toHaveCssClass('sky-btn-primary');
      await expect(el).toHaveLibResourceText('sky_greeting');
      await expect(fixture.nativeElement).toBeAccessible();
    });

`toBeAccessible` and the resource string matchers return a promise, so `await` those assertions. The remaining matchers are synchronous.

## SkyVitestMatchers

Type: Interface

The custom matchers added to Vitest's `expect` by `@skyux-sdk/vitest`.

    interface SkyVitestMatchers {
      toBeAccessible: (config?: SkyToBeAccessibleOptions) => Promise<void>;
      toBeVisible: (config?: SkyToBeVisibleOptions) => void;
      toEqualLibResourceText: (resourceKey: string, resourceArgs?: unknown[]) => Promise<void>;
      toEqualResourceText: (resourceKey: string, resourceArgs?: unknown[]) => Promise<void>;
      toExist: () => void;
      toHaveCssClass: (expectedClassName: string) => void;
      toHaveLibResourceText: (resourceKey: string, resourceArgs?: unknown[], trimWhitespace?: boolean) => Promise<void>;
      toHaveResourceText: (resourceKey: string, resourceArgs?: unknown[], trimWhitespace?: boolean) => Promise<void>;
      toHaveStyle: (expectedStyles: Record<string, string>) => void;
      toHaveText: (expectedText: string, trimWhitespace?: boolean) => void;
      toMatchLibResourceTemplate: (resourceKey: string) => Promise<void>;
      toMatchResourceTemplate: (resourceKey: string) => Promise<void>;
    }

### Properties

#### `toBeAccessible: (config?: SkyToBeAccessibleOptions) => Promise<void>`

Asserts that the received element or document passes automated accessibility checks using axe-core.

##### Example

    await expect(fixture.nativeElement).toBeAccessible();

#### `toBeVisible: (config?: SkyToBeVisibleOptions) => void`

Asserts that the received element is visible.

##### Example

    expect(el).toBeVisible({ checkCssVisibility: true });

#### `toEqualLibResourceText: (resourceKey: string, resourceArgs?: unknown[]) => Promise<void>`

Asserts that the received text equals the text for the expected library resource string.

##### Example

    await expect(el.textContent).toEqualLibResourceText('sky_greeting');

#### `toEqualResourceText: (resourceKey: string, resourceArgs?: unknown[]) => Promise<void>`

Asserts that the received text equals the text for the expected app resource string.

##### Example

    await expect(el.textContent).toEqualResourceText('greeting', ['World']);

#### `toExist: () => void`

Asserts that the received value is truthy (exists).

##### Example

    expect(el.querySelector('.sky-btn')).toExist();

#### `toHaveCssClass: (expectedClassName: string) => void`

Asserts that the received element has the expected CSS class.

##### Example

    expect(el).toHaveCssClass('sky-btn-primary');

#### `toHaveLibResourceText: (resourceKey: string, resourceArgs?: unknown[], trimWhitespace?: boolean) => Promise<void>`

Asserts that the received element's text matches the text for the expected library resource string.

##### Example

    await expect(el).toHaveLibResourceText('sky_greeting');

#### `toHaveResourceText: (resourceKey: string, resourceArgs?: unknown[], trimWhitespace?: boolean) => Promise<void>`

Asserts that the received element's text matches the text for the expected app resource string.

##### Example

    await expect(el).toHaveResourceText('greeting', ['World']);

#### `toHaveStyle: (expectedStyles: Record<string, string>) => void`

Asserts that the received element has the expected computed style(s).

##### Example

    expect(el).toHaveStyle({ display: 'block' });

#### `toHaveText: (expectedText: string, trimWhitespace?: boolean) => void`

Asserts that the received element has the expected text content.

##### Example

    expect(el).toHaveText('Hello World');

#### `toMatchLibResourceTemplate: (resourceKey: string) => Promise<void>`

Asserts that the received element's text matches the expected library resource template pattern (ignoring interpolated values).

##### Example

    await expect(el).toMatchLibResourceTemplate('sky_greeting');

#### `toMatchResourceTemplate: (resourceKey: string) => Promise<void>`

Asserts that the received element's text matches the expected app resource template pattern (ignoring interpolated values).

##### Example

    await expect(el).toMatchResourceTemplate('greeting');

## SkyToBeAccessibleOptions

Type: Interface

The options for the `toBeAccessible` vitest matcher.

    interface SkyToBeAccessibleOptions {
      rules: Record<string, { enabled: boolean }>;
    }

### Properties

#### `rules: Record<string, { enabled: boolean }>`

## SkyToBeVisibleOptions

Type: Interface

The options for the `toBeVisible` vitest matcher.

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
