---
Title: Elevation
Reference: https://developer.blackbaud.com/skyux/design/styles/elevation
---

# Elevation

This API was significantly updated in SKY UX 14. For the previous version, see the SKY UX 13 docs.

## Raised elevation

The raised elevation gives a subtle emphasis to elements on page backgrounds to give the impression that they rise off the page. This elevation is built into SKY UX components, such as [alerts](../../components/alert.md), [avatars](../../components/avatar.md), and [boxes](../../components/box.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/elevation/raised-elevation.d5d5a58287db7a6b84729cc316a401e2.png)

An alert uses the raised elevation to rise off the page background.

## Overflow elevation

The overflow elevation lifts elements that remain fixed during scrolling so that they appear to float above scrolling content. This elevation is built into SKY UX components, such as [back to top](../../components/back-to-top.md), [modal headers and footers](../../components/modal.md), and [summary action bar](../../components/summary-action-bar.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/elevation/overflow-elevation.3f85feeb9ff8619d7e10905b33349f44.png)

A modal header uses the overflow elevation to float above scrolling content.

## Overlay elevation

Overlay elevations lift elements so that they appear above or outside the context of the surface. This highlights temporary and user-prompted elements, such as [dropdown menus](../../components/dropdown.md), as well as elements that interrupt or command attention, such as [modals](../../components/modal.md) and [toasts](../../components/toast.md).

The overlay 100 elevation adds a shadow to small and temporary elements that are easily dismissed, such as [dropdown menus](../../components/dropdown.md), [popovers](../../components/popover.md), and picker menus on inputs such as [lookup](../../components/lookup.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/elevation/overlay-elevation-100.9f58ef347814d79523910174cd4741dd.png)

A dropdown menu uses the overlay 100 elevation.

The overlay 200 elevation adds a shadow to large elements that are used in conjunction with a page, such as [flyouts](../../components/flyout.md), and to large elements that have their own interactions.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/elevation/overlay-elevation-200.ca602fda2c8b740a1d16f22d2bae262f.png)

A flyout uses the overlay 200 elevation.

The overlay 300 elevation adds a shadow to provide a clear visual separation to elements that command attention or interrupt users, such as [modals](../../components/modal.md) and [toasts](../../components/toast.md). These elements use the elevation to establish a context that is separate from a page.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/elevation/overlay-elevation-300.36ed13b18b186cb673d083dd902ed696.png)

A toast uses the overlay 300 elevation.

## Raised

Raised 100

For slightly raised elevation to give a subtle emphasis to elements on the page background. Examples: alerts and avatars

`sky-theme-elevation-raised-100`

Deprecated:`sky-elevation-1` , `sky-elevation-1-bordered`

## Overflow

Overflow

For elements that remain fixed, staying in view on scroll, to appear above scrolling content. Examples: back to top and summary action bar

`sky-theme-elevation-overflow`

Deprecated:`sky-elevation-3` , `sky-shadow`

## Overlays

Overlay elevation is used for elements that are temporal and more visually distinct via higher elevation from the surface.

Overlay 100

For a small overlay elevation on temporal elements that are easily dismissed. Examples: popovers, dropdown menus, and picker inputs

`sky-theme-elevation-overlay-100`

Deprecated:`sky-elevation-4`

Overlay 200

For an overlay elevation that gives more emphasis to larger elements that are used in conjunction with the main page. Example: flyouts

`sky-theme-elevation-overlay-200`

Deprecated:`sky-elevation-8`

Overlay 300

For floating overlays that require clear visual separation. Use for interruptive elements. Examples: modals and toasts

`sky-theme-elevation-overlay-300`

Deprecated:`sky-elevation-16` , `sky-elevation-24`

## Raised

Raised

For slightly raised elevation to give a subtle emphasis to elements on the page background. Examples: alerts and avatars

`var(--sky-theme-elevation-raised-100)`

## Overflow

Overflow

For elements that remain fixed, staying in view on scroll, to appear above scrolling content. Examples: back to top and summary action bar

`var(--sky-theme-elevation-overflow)`

## Overlays

Overlay elevation is used for elements that are temporary and more visually distinct via higher elevation from the surface.

Overlay 100

For a small overlay elevation on temporary elements that are easily dismissed. Examples: popovers, dropdown menus, and picker inputs

`var(--sky-theme-elevation-overlay-100)`

Overlay 200

For an overlay elevation that gives more emphasis to larger elements that are used in conjunction with the main page. Example: flyouts

`var(--sky-theme-elevation-overlay-200)`

Overlay 300

For floating overlays that require clear visual separation. Use for interruptive elements. Examples: modals and toasts

`var(--sky-theme-elevation-overlay-300)`

## Deprecated SCSS variables

SKY UX does not support these deprecated SCSS variables. In many cases, the styles in these variables are now built into components or supported classes and don't need to be manually applied. Read the style overview guidelines to find a suitable replacement.

`$sky-theme-modern-shadow-border`

`$sky-theme-modern-shadow-color`

`$sky-theme-modern-shadow-size-1`

`$sky-theme-modern-shadow-size-3`

`$sky-theme-modern-shadow-size-4`

`$sky-theme-modern-shadow-size-8`

`$sky-theme-modern-shadow-size-16`

`$sky-theme-modern-shadow-size-24`

`$sky-theme-modern-elevation-1-shadow-color`

`$sky-theme-modern-elevation-1-shadow-size`

`$sky-theme-modern-elevation-3-shadow-color`

`$sky-theme-modern-elevation-3-shadow-size`

`$sky-theme-modern-elevation-4-shadow-color`

`$sky-theme-modern-elevation-4-shadow-size`

`$sky-theme-modern-elevation-8-shadow-color`

`$sky-theme-modern-elevation-8-shadow-size`

`$sky-theme-modern-elevation-16-shadow-color`

`$sky-theme-modern-elevation-16-shadow-size`

`$sky-theme-modern-elevation-24-shadow-color`

`$sky-theme-modern-elevation-24-shadow-size`

`$sky-theme-modern-elevation-0-bordered-border`

`$sky-theme-modern-elevation-1-bordered-border`

`$sky-theme-modern-elevation-1-bordered-shadow-color`

`$sky-theme-modern-elevation-1-bordered-shadow-size`

`$sky-page-wait-z-index`

`$sky-component-wait-z-index`
