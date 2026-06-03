---
Title: Linting
Reference: https://developer.blackbaud.com/skyux/learn/develop/linting
---

# Linting

SKY UX provides a set of recommended [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) rules for Angular CLI projects.

## ESLint prerequisites

The `eslint-config-skyux` package requires `angular-eslint`. Follow the [`angular-eslint` installation instructions](https://github.com/angular-eslint/angular-eslint?tab=readme-ov-file#quick-start) before continuing.

## ESLint installation and setup

To install the `eslint-config-skyux` package, run the following command in the context of your Angular CLI project.

Bash

    ng add eslint-config-skyux

Open your `eslint.config.mjs` file in the root of your project and replace its contents with the following code.

eslint.config.mjs JavaScript

    import skyux from 'eslint-config-skyux';
    import tseslint from 'typescript-eslint';

    export default tseslint.config(
      ...skyux,
      {
        languageOptions: {
          parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
      {
        files: ['**/*.ts'],
        rules: {
          '@angular-eslint/directive-selector': [
            'error',
            {
              type: 'attribute',
              prefix: 'app',
              style: 'camelCase',
            },
          ],
          '@angular-eslint/component-selector': [
            'error',
            {
              type: 'element',
              prefix: 'app',
              style: 'kebab-case',
            },
          ],
        }
      }
    );

## ESLint usage

To lint your project, run the following command. The `--fix` option automatically fixes some errors in your code, but this option can't fix all errors.

Bash

    ng lint --fix

## ESLint rules

We deprecated the `@skyux-sdk/eslint-config/recommended` config in favor of `eslint-config-skyux` to align with ESLint naming conventions. Both packages provide the same rules.

The `eslint-config-skyux` recommended config includes:

- the [recommended type-checked rules from `typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/recommended-type-checked.ts)
- the [recommended rules from `angular-eslint`](https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/ts-recommended.ts)
- the [recommended rules from `skyux-eslint`](https://github.com/blackbaud/skyux/blob/main/libs/sdk/skyux-eslint/src/configs/ts-recommended.ts)
- [additional best-practice rules](https://github.com/blackbaud/skyux/blob/main/libs/sdk/eslint-config-skyux/src/index.ts)

## Stylelint installation and setup

To install the `stylelint-config-skyux` package, run the following command in the context of your Angular CLI project.

Bash

    ng add stylelint-config-skyux

Then create a `stylelint.config.mjs` file in the root of your project and add the following code.

stylelint.config.mjs JavaScript

    export default {
      extends: ['stylelint-config-skyux'],
    };

## Stylelint usage

To lint your stylesheets, run the following command. The `--fix` option automatically fixes some errors, but this option can't fix all errors.

Bash

    npx stylelint "src/**/*.scss" --fix

## Stylelint rules

The `stylelint-config-skyux` recommended config includes:

- the [recommended rules from `stylelint-config-recommended-scss`](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
- the [recommended rules from `skyux-stylelint`](https://github.com/blackbaud/skyux/tree/main/libs/sdk/skyux-stylelint)

## Experimental style API rules

These ESLint and Stylelint rules ensure that you don't use deprecated, private, or invalid SKY UX classes or SCSS variables. They will become part of the recommended ruleset in SKY UX 15; if you'd like to take advantage of them in SKY UX 14, you can add them to your lint configs.

To use the ESLint rules, include the following in your `eslint.config.mjs` file:

JavaScript

    {
      files: ['**/*.ts'],
      rules: {
        'skyux-eslint/no-invalid-sky-classnames': ['error'],
        // other ts rules here...
      },
    },
    {
      files: ['**/*.html'],
      rules: {
        'skyux-eslint-template/no-invalid-sky-classnames': ['error'],
        // other html rules here...
      },
    },

To use the Stylelint rules, include the following in your `stylelint.config.mjs` file:

JavaScript

    rules: {
        'skyux-stylelint/no-invalid-sky-custom-properties': true,
        'skyux-stylelint/no-deprecated-sky-scss-variables': true
      },

## Contributions

The source code for [`eslint-config-skyux`](https://github.com/blackbaud/skyux/tree/main/libs/sdk/eslint-config-skyux) and [`stylelint-config-skyux`](https://github.com/blackbaud/skyux/tree/main/libs/sdk/stylelint-config-skyux) is available on GitHub. You can [file an issue](https://github.com/blackbaud/skyux/issues) or [review our contribution process](../../contribute.md).
