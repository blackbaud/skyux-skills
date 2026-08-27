---
Title: Style API setup
Reference: https://developer.blackbaud.com/skyux/learn/develop/style-api-setup
---

# Style API setup

The SKY UX style API exposes CSS custom properties and classes that enable you to follow SKY UX design guidelines and maintain visual consistency with SKY UX components. This page describes how to set up the public API; for usage documentation, see [styles](../../design/styles/README.md).

## Using SKY UX directly

If you are using SKY UX components directly, the style API is already available via the `@skyux/theme/css/sky.css` file added to `angular.json`.

## Using NPM

If you aren't using Angular, you can still consume the SKY UX style API by installing the `@blackbaud/skyux-design-tokens` package via NPM and including the `base_blackbaud_public-api.css` file in your project. You can follow the typical pattern for your framework, or you can import it directly into your stylesheet, like below:

CSS

    @import '@blackbaud/skyux-design-tokens/bundles/base_blackbaud_public-api.css';

## Using the CDN

The stylesheet is also available via a CDN. The current major version is 6; the URL will return the latest minor and patch version.

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://sky.blackbaudcdn.net/static/skyux-design-tokens/6/base_blackbaud_public-api.css"
        />
      </head>
      <body class="sky-theme-modern sky-theme-brand-base sky-theme-brand-blackbaud">
      </body>
    </html>
