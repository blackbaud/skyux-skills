---
Title: Enable dark mode
Reference: https://developer.blackbaud.com/skyux/learn/visual-theme/enable-dark-mode
---

# Enable dark mode

## Standalone SKY UX SPAs

Dark mode is only available in SPAs that enable modern theme. In general, standalone SPAs should try to maintain a consistent visual experience by matching the theme that users encounter on other related SPAs, but if the standalone SPA uses default theme, then it can't support dark mode.

To enable modern theme and support dark mode in a standalone SPA, add `provideInitialTheme('modern', {mode: 'dark'},)` to `providers` in the `ApplicationConfig`:

main.ts TypeScript

    import { bootstrapApplication } from '@angular/platform-browser';
    import { provideInitialTheme } from '@skyux/theme';
    import { AppComponent } from './app/app.component';
    bootstrapApplication(AppComponent, { providers: [provideInitialTheme('modern', {mode: 'dark'},)] });

## SKY Add-ins

Add-ins that use Angular and the latest SKY UX libraries automatically display the same visual theme as the solution where they appear. If that solution uses the modern visual theme and also supports color modes, then add-ins also automatically support dark mode. For guidance on using SKY UX with SKY add-ins, see the [SKY API documentation](https://developer.blackbaud.com/skyapi/docs/addins).
