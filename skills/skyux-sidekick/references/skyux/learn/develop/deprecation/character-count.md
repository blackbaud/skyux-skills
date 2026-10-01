---
Title: Character count
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/character-count
---

# Character count

The character count component is deprecated in favor of the [input box](../../../components/input-box.md) component's `characterLimit` input. To view development documentation for the character count component, see the SKY UX 14 docs.

## How to migrate

SKY UX didn't create a migration script because the character count component requires consumers to wire up their own indicator and error message, and those implementations vary. Instead, SKY UX created the following AI prompt to manually migrate your code. An AI tool will speed up the migration, but be sure to review the output carefully because AI responses may not be 100 percent complete and accurate.

Markdown

    Scan the .html and .ts files in this repository, find the files that use the
    `skyCharacterCounter` directive or the `sky-character-counter-indicator`
    element, and use the instructions at
    https://github.com/blackbaud/skyux/blob/main/docs/migrating-deprecated-components/character-count-to-input-box-character-limit/README.md
    to convert them to the `characterLimit` input on `sky-input-box`. If you
    find any cases where the conversion is not clear, please ask questions.

## What to review after the migration

After you migrate your code, review the following items in your project:

- The `characterLimit` input adds Angular's max length validator to the form control and displays the error message, so remove the error indicator that your code displayed for the `skyCharacterCounter` error. If your code inspected that error key directly, use Angular's `maxlength` error instead.
- The input box uses its `labelText` input in the error message, so make sure every migrated input box specifies `labelText`.
- The `characterLimit` input requires a form control because it adds the validator to that control. Make sure every migrated input is bound to `formControlName`, `formControl`, or `ngModel`.
- Unit tests that use `SkyCharacterCounterIndicatorHarness` or `SkyInputBoxHarness.getCharacterCounter()` should use the `getCharacterCount()`, `getCharacterLimit()`, and `isOverCharacterLimit()` methods on `SkyInputBoxHarness` instead.
- Use `characterLimit` only for inputs where users are likely to approach the limit. For other inputs, use Angular's max length validator and a `maxLength` attribute on the input element instead.
