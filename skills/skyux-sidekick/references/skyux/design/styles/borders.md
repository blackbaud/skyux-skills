---
Title: Borders
Reference: https://developer.blackbaud.com/skyux/design/styles/borders
---

# Borders

This API was significantly updated in SKY UX 14. For the previous version, see the SKY UX 13 docs.

## Container borders

The container default border wraps content containers to separate them from their surroundings. It is built into SKY UX container components, such as [boxes](../../components/box.md), [modals](../../components/modal.md), and [tiles](../../components/tile.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/container-border.69856fc1df51b04696e1e56b3bba23c9.png)

Use the container default border to separate containers from their surroundings.

## Dividers

Use the default divider border to separate heterogeneous sections or regions of a page. It is built into SKY UX components, such as [split view](../../components/split-view.md), [tabs](../../components/tabs.md), and [toolbar](../../components/toolbar.md).

Use the soft divider border to separate homogenous sections or rows in a container. Use this border to define instances of content that repeat a pattern, such as items in a list. It is built into SKY UX components, such as [data grid](../../components/data-grid.md), [repeater](../../components/repeater.md), and [selection modal](../../components/selection-modal.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/divider.618667955ef64b63cb4aeba4bb00211c.png)

Use the default divider border to separate sections of a page, and use the soft divider border to separate rows in a list.

## Status borders

Use SKY UX components, such as [alerts](../../components/alert.md) and [toasts](../../components/toast.md), to communicate statuses.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/status-border.761d0cebb9b568296b758b05658cb38f.png)

Use alerts to communicate statuses.

To communicate statuses on objects or blocks of content, combine status background colors and status border classes for the appropriate status type.

## Border widths

Most SKY UX borders use a single pixel width. In rare cases, such as when using custom status borders or classification colors, add border width modifiers to add emphasis.

Use the emphasized border width to add visual emphasis to elements.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/border-width-emphasized.db1df2c8664d7d6d48406d291df0e8aa.png)

Use the emphasized border width modifier to add emphasis to an element.

Use the accent border width to increase the visual emphasis on elements that have a meaningful border color in the visual hierarchy. Only apply the accent border width to one side of the elements.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/border-width-accent.5e2c0b44e057a48ee22c80cd48827fb4.png)

Use the accent border width modifier to draw attention to an element, such as a status, that has a meaningful border color.

## Border styles

SKY UX includes border styles in components and border classes. In rare cases, you can add border style custom properties to create custom dividers or accent borders.

## Border radii

SKY UX uses different border radii for different interactive elements and containers.

The extra small border radius is used for very small elements, such as [tokens](../../components/tokens.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/border-radii-xs.f5ecffb9edc56d27c0bd85384d01e4e7.png)

Very small elements, such as tokens, use the extra small border radius.

The small border radius is used for most interactive elements, such as [buttons](../../components/button.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/border-radii-s.0cbf9bb05c60d726079e96bd288e48e8.png)

Most interactive elements in SKY UX use the small border radius.

The medium border radius is used for overlay containers, such as [dropdown menus](../../components/dropdown.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/border-radii-m.9f58ef347814d79523910174cd4741dd.png)

Overlay containers, such as dropdown and input menus, use the medium border radius.

The pill border radius is used for rounded rectangles, such as [labels](../../components/label.md).

The round border radius is used for circular elements, such as [avatars](../../components/avatar.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/border/border-radii-pill.963768c55807586c4acde0239714224b.png)

Rounded rectangles, such as labels, use the pill border radius, and circular elements, such as avatars, use the round border radius.

## Containers

A border that wraps around a container and separates it from its surroundings.

Container default

`sky-theme-border-container-default`

Deprecated:`sky-border-dark` , `sky-border-light` , `sky-elevation-0-bordered`

## Dividers

Borders that separate a page into heterogeneous sections or areas.

### Divider default

Divider default top

`sky-theme-border-divider-default-top`

Divider default right

`sky-theme-border-divider-default-right`

Divider default bottom

`sky-theme-border-divider-default-bottom`

Deprecated:`sky-border-bottom-dark`

Divider default left

`sky-theme-border-divider-default-left`

### Divider soft

Borders that separate homogenous sections or rows inside of a container.

Divider soft top

`sky-theme-border-divider-soft-top`

Divider soft right

`sky-theme-border-divider-soft-right`

Divider soft bottom

`sky-theme-border-divider-soft-bottom`

Deprecated:`sky-border-bottom-row` , `sky-border-bottom-light`

Divider soft left

`sky-theme-border-divider-soft-left`

## Status borders

Use status borders for elements that convey status or urgency.

### Danger borders

The borders for an element that conveys danger, error, or a critical warning.

Danger border top

`sky-theme-border-danger-top`

Danger border right

`sky-theme-border-danger-right`

Danger border bottom

`sky-theme-border-danger-bottom`

Danger border left

`sky-theme-border-danger-left`

### Info borders

The borders for an element that contains important information, but conveys no danger.

Info border top

`sky-theme-border-info-top`

Info border right

`sky-theme-border-info-right`

Info border bottom

`sky-theme-border-info-bottom`

Info border left

`sky-theme-border-info-left`

### Success borders

The borders for an element that conveys success or completion.

Success border top

`sky-theme-border-success-top`

Success border right

`sky-theme-border-success-right`

Success border bottom

`sky-theme-border-success-bottom`

Success border left

`sky-theme-border-success-left`

### Warning borders

The borders for an element that conveys warning or caution.

Warning border top

`sky-theme-border-warning-top`

Warning border right

`sky-theme-border-warning-right`

Warning border bottom

`sky-theme-border-warning-bottom`

Warning border left

`sky-theme-border-warning-left`

## Border widths

Add these in addition to border classes to modify the border width of certain elements.

Emphasized border width

The width to add emphasis to dividers or status borders.

`sky-theme-border-width-emphasized`

Accent border width

The width to highlight an element with a status border in the visual hierarchy.

`sky-theme-border-width-accent`

## Border radius

Border radius XS

The border radius for very small elements like tokens.

`sky-theme-border-radius-xs`

Border radius S

The border radius for most interactive elements like buttons.

`sky-theme-border-radius-s`

Deprecated:`sky-rounded-corners`

Border radius M

The border radius for overlay containers like menus.

`sky-theme-border-radius-m`

Pill border radius

The border radius for heavily rounded rectangles like labels.

`sky-theme-border-radius-pill`

Round border radius

The border radius for circular elements like avatars.

`sky-theme-border-radius-round`

Deprecated:`sky-rounded-circle`

## Containers

Borders that wrap around a container and separate it from its surroundings.

Container default

`var(--sky-theme-border-container-default)`

## Dividers

Divider default

A border that separates a page into heterogeneous sections or areas.

`var(--sky-theme-border-divider-default)`

Divider soft

A border that separates homogenous sections or rows inside of a container.

`var(--sky-theme-border-divider-soft)`

## Status borders

Use status borders for elements that convey status or urgency.

Danger border

The border for an element that conveys danger, error, or a critical warning.

`var(--sky-theme-border-danger)`

Info border

The border for an element that contains important information, but conveys no danger.

`var(--sky-theme-border-info)`

Success border

The border for an element that conveys success or completion.

`var(--sky-theme-border-success)`

Warning border

The border for an element that conveys warning or caution.

`var(--sky-theme-border-warning)`

## Border widths

Add these in addition to border properties to modify the border width of certain elements.

Container default width

The width for borders that wrap around a container.

`var(--sky-theme-border-width-container-default)`

Divider default width

The width for borders that separate a page into heterogeneous sections or areas.

`var(--sky-theme-border-width-divider-default)`

Divider soft width

The width for borders that separate homogenous sections or rows inside of a container.

`var(--sky-theme-border-width-divider-soft)`

Emphasized border width

The width to add emphasis to dividers or status borders.

`var(--sky-theme-border-width-emphasized)`

Accent border width

The width to highlight an element with a status border in the visual hierarchy.

`var(--sky-theme-border-width-accent)`

## Border styles

Add these in addition to border properties to modify the border style of certain elements.

Divider default style

The style of a border that wraps around a container or separates a page into heterogeneous sections or areas.

`var(--sky-theme-border-style-divider-default)`

Divider soft style

The style of a border that separates homogenous sections or rows inside of a container.

`var(--sky-theme-border-style-divider-soft)`

Accent border style

The style of a border that highlights an element with a status border in the visual hierarchy.

`var(--sky-theme-border-style-accent)`

## Border radius

Border radius XS

The border radius for very small elements like tokens.

`var(--sky-theme-border-radius-xs)`

Border radius S

The border radius for most interactive elements like buttons.

`var(--sky-theme-border-radius-s)`

Border radius M

The border radius for overlay containers like menus.

`var(--sky-theme-border-radius-m)`

Pill border radius

The border radius for heavily rounded rectangles like labels.

`var(--sky-theme-border-radius-pill)`

Round border radius

The border radius for circular elements like avatars.

`var(--sky-theme-border-radius-round)`

## Deprecated SCSS variables

SKY UX does not support these deprecated SCSS variables. In many cases, the styles in these variables are now built into components or supported classes and don't need to be manually applied. Read the style overview guidelines to find a suitable replacement.

`$sky-theme-modern-border-radius-md`

`$sky-theme-modern-box-border-radius-default`

`$sky-nav-selected-border-width`
