---
Title: Select field
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/select-field
---

# Select field

The [select field](../../../components/select-field.md) component is deprecated. In most cases, we recommend using the [lookup](../../../components/lookup.md) component instead, but some scenarios require a different option, such as a [selection box](../../../components/selection-box.md) component or an HTML `<select>` element in an [input box](../../../components/input-box.md).

## How to migrate

SKY UX didn't create a migration script because of differences between the select field and lookup components, particularly in single-select mode, and because lookup isn't always the right choice for migration. Instead, SKY UX created the following AI prompt to manually migrate your code. An AI tool will speed up the migration, but be sure to review the output carefully because AI responses may not be 100 percent complete and accurate.

Markdown

    Scan the .html files in this repository, find the files that use the
    `sky-select-field` element, and use the instructions at
    https://github.com/blackbaud/skyux/blob/12.x.x/docs/migrating-deprecated-components/select-field/README.md
    to convert the `sky-select-field` elements to `sky-lookup` elements. If you
    find any cases where the conversion is not clear, please ask questions.
