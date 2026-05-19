---
Title: Progress indicator wizard
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/progress-indicator-wizard
---

# Progress indicator wizard

The [progress indicator wizard](../../../components/progress-indicator-wizard.md) component is deprecated in favor of the [tabs wizard](../../../components/tabs-wizard.md) component.

## How to migrate

SKY UX created a migration script to help you migrate to the tabs wizard. From a project that uses the progress indicator wizard, run the following command:

Bash

    npx ng g @skyux/packages:convert-progress-indicator-wizard-to-tab-wizard

## What to review after the script

After you run the migration script, review the following items in your project:

- If your code used the `<sky-progress-indicator-title>` component, that element was converted to an `<h3>`. Review the change and update your code as necessary.
- If you used the `messageStream` input, the tabs wizard component doesn't support that input. Review the [`SkyTabsetComponent` documentation](../../../components/tabs-wizard.md#class_sky-tabset-component) for alternative inputs.
- If your code used the `<sky-progress-indicator-nav-button>` component with `(actionClick)="..."` or `buttonType="reset"`, the tabs wizard component doesn't support those features. Review the [`SkyTabsetNavButtonComponent`documentation](../../../components/tabs-wizard.md#class_sky-tabset-nav-button-component) for alternatives.
