---
Title: Colors
Reference: https://developer.blackbaud.com/skyux/design/styles/color
---

# Colors

This API was significantly updated in SKY UX 14. For the previous version, see the SKY UX 13 docs.

## Text colors

SKY UX uses text colors to communicate information hierarchy, state, and interaction. These colors are built into SKY UX components and typography classes, and in most cases, they should not be applied manually.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/text-color-1.64fb3c643c1e3341eaa16544057f8b14.png)

SKY UX uses text colors to convey information hierarchy, state, and interaction.

SKY UX uses HTML headings to apply colors to headings for pages, containers, and sections. This subtly distinguishes the headings from other content. For more information, see [Typography](./typography.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/text-color-heading.359a5dd28ab8fe606a3d527ef3832fb4.png)

Do use HTML headings to apply color to headings.

SKY UX uses body and deemphasized text colors in [typography](./typography.md) classes to create a visual hierarchy. Use typography classes to control all text properties, including size and color.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/text-color-hierarchy.4e3a2ba17fd20d0429e5f8567f08d685.png)

Do use typography classes to control text properties, such as color.

SKY UX uses an action text color for hyperlinked text and tertiary "link" button text. Use `<a>` elements or button classes instead of applying this color directly.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/text-color-links.25dbdd34725464cc192345dff8bd62eb.png)

Do use hyperlinks or SKY UX button classes to include the action text color.

SKY UX uses inverse text on high-contrast backgrounds, such as [primary buttons](../../components/button.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/text-color-backgrounds.0cbf9bb05c60d726079e96bd288e48e8.png)

SKY UX button classes include inverse text color when appropriate.

## Icon colors

SKY UX uses icon colors to communicate hierarchy and interaction. These colors are built into SKY UX components, and in most cases, they should not be applied manually.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/icon-color.2b0033223aa92746e010a1fb987b98ce.png)

SKY UX components, such as borderless icon buttons, control icon colors.

In most cases, communicate status with icons by using SKY UX components, such as [label](../../components/label.md) and [status indicator](../../components/status-indicator.md). For more information, see status colors below.

## Icon matte colors

SKY UX uses icon matte colors to provide extra context or emphasis to icons. These colors are built into SKY UX components, and in most cases, they should not be applied manually.

In most cases, communicate status with icons and icon mattes by using SKY UX components, such as [label](../../components/label.md) and [status indicator](../../components/status-indicator.md). For more information, see status colors below.

## Background colors

The page background color is the surface color for pages behind all content and containers.

The default container background color is for content containers, such as [boxes](../../components/box.md), [data grids](../../components/data-grid.md), [modals](../../components/modal.md), and [tiles](../../components/tile.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/background-color-page.69856fc1df51b04696e1e56b3bba23c9.png)

SKY UX components, such as page and box, control background colors.

The dimmed container background color is a subdued background color for containers of content that is supplemental or supportive, such as [toolbar](../../components/toolbar.md) and [list summary](../../components/list-summary.md) on a [list page](../guidelines/page-layouts/list-page.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/background-color-container.618667955ef64b63cb4aeba4bb00211c.png)

Do use the dimmed container background color for containers of supplemental or supportive content.

The backdrop container background color is a neutral background color for use behind design canvases, WYSIWYG editors, and real-time previews. Use containers for text and other content inside canvases and previews. Don't put text directly on the backdrop container background color.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/background-color-backdrop.4d9d460334095de03c70ac9e8220e646.png)

Do use the backdrop container color behind real-time previews or WYSIWYG editors.

The disabled background color is a consistent color for interactive objects that are disabled. In most cases, this color should be applied through SKY UX component states or the Angular `disabled` property instead of setting it directly.

## Border colors

SKY UX uses border colors to define containers, create sections inside them, and establish relationships between regions of the interface. These colors are built into SKY UX components and border classes, and in most cases, they should not be applied manually.

The container default border color is for containers of content, such as [boxes](../../components/box.md), [modals](../../components/modal.md), and [tiles](../../components/tile.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/border-color-default.69856fc1df51b04696e1e56b3bba23c9.png)

Do use the container default border color for containers of content.

The divider default border color is for separating sections of an interface with different roles. This includes the border between [tabs](../../components/tabs.md) and their content and the border between a [split view](../../components/split-view.md) list and workspace.

The divider soft border color is for separating members of a homogenous set, such as rows in a grid or [repeater](../../components/repeater.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/border-color-divider.618667955ef64b63cb4aeba4bb00211c.png)

Do use the divider default border color to separate sections of a page. Use the divider soft border color to separate rows in a list.

The disabled border color is a consistent color for interactive objects that are disabled. In most cases, this color should be applied through SKY UX component states or the Angular `disabled` property, instead of setting it directly.

## Status colors

In most cases, communicate status with SKY UX components, such as [label](../../components/label.md) and [status indicator](../../components/status-indicator.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/status-color.a184b6d959714e6f7796e94fa9b4542c.png)

Do use SKY UX components to communicate status when possible.

In rare cases, apply status colors directly to other objects or content. Don't rely on color alone to communicate status; include icons or labels for users with color vision differences.

<table>
  <tbody>
    <tr>
      <td>

![](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/status-danger.e69289134943278d47f83671a2c4dc30.png)

</td>
      <td>

**Danger**

Use the danger color to represent statuses that require immediate attention.

</td>
    </tr>
    <tr>
      <td>

![](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/status-info.bf8cb639378b68feb52b781213801122.png)

</td>
      <td>

**Info**

Use the info color to represent statuses or content with high interest but neutral meaning.

</td>
    </tr>
    <tr>
      <td>

![](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/status-success.a2e83aad62ae6c523201a0247ed6758e.png)

</td>
      <td>

**Success**

Use the success color to represent statuses of positive completion.

</td>
    </tr>
    <tr>
      <td>

![](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/status-warning.a43f8002df5528ca9c9e2f8faf69df9f.png)

</td>
      <td>

**Warning**

Use the warning color to represent statuses or decisions with significant consequences.

</td>
    </tr>
  </tbody>
</table>

### Status background and border colors

To communicate a status on an object or block of content, combine background colors and status border classes for the appropriate status type.

### Status icon and icon matte colors

To communicate a status on an icon, combine icon and icon matte colors of the appropriate status.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/status-color-icon.a91b12b2092320239c70eedb88b1ec4f.png)

Do use icon and icon matte status colors to combine the meaning of a status with a specific icon.

## Classification colors

Use classification colors to color-code blocks of content when the distinction between types of content is significant. For example, use classification colors in calendars to differentiate between types of events. Don't rely on color alone to classify content; include icons or labels for users with color vision differences.

Classification colors don't carry inherent meaning, so they can be chosen in any sequence. In some cases, you can let users choose classification colors themselves.

Don't use classification colors to communicate statuses, such as danger or success.

Use classification background colors for container backgrounds. Use classification foreground colors for icons and for borders on containers.

Use default colors for text and icons in containers with classification background colors. Deemphasized colors don't have sufficient contrast.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/classification-color.a22be1cfc0ebfe0fce807c098b519a7c.png)

Do use classification colors to color-code related content.

### Combining status and classification colors

When an object needs to communicate both a classification and a status, you can combine both concepts. Use classification backgrounds and foregrounds in combination with status backgrounds, borders, and icon colors to represent both dimensions independently.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/classification-color-with-status-color.f1c3cd45fbcd244d1182d65cfec15339.png)

Do combine status and classification colors when necessary.

## Data visualization colors

### Category palette for multi-series data

Use the category palette to represent discrete categories in multi-series data, such as slices in a donut chart or bars in a bar chart. Category colors are visually distinct, and all 8 meet 3:1 contrast on container backgrounds to support accessibility.

Use category colors in sequential order. They use different color families and alternate light and dark luminance to support users with color vision differences.

Avoid data visualizations with more than 8 categories. In rare cases where more than 8 categories are necessary, start the category palette over again, using the category 1 color for the ninth category and so on.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/viz-multi-series-data.594f868379d1ec4fac517792249db157.png)

Do use the category palette for multi-series data, such as bar charts.

### Category palette for single-series data

Use the category 1 color for single-series data visualizations with only one category or no category, such as line charts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/viz-single-series-data.2e062d319f5d0fa9ebbeee36207c26f4.png)

Do use the category 1 color for single-series data.

### Sequential palette

Use the sequential palette to indicate different magnitudes in a range. When data has fewer than 10 magnitudes, always use the first and last colors in the palette for the minimum and maximum magnitudes and distribute the remaining values as evenly as possible between them.

You can use a linear gradient from the first to the last color in the sequential palette to create a visualization with finer distinctions.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/viz-sequential-palette.0da975b86d61e7d888bd198ea6c86428.png)

Do use the sequential palette colors to represent a range of magnitudes.

### Diverging palettes

Use the diverging palettes to indicate positive and negative deviations from a central value, such as zero, a baseline, or an average.

Always use the positive and negative diverging palettes together in data visualizations. Don't use them as alternatives for the sequential palette.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/viz-diverging-palette.20a2981ba20aa9c05159666e5e49b5db.png)

Do use the diverging palette to represent positive and negative ranges at the same time.

### Chart elements

SKY UX uses neutral colors for chart elements.

- Gridlines and tick marks use the softest color, which provides a subtle visual aid to help users interpret charts.
- Axis lines use a heavier color with more contrast to define chart boundaries.
- Chart markers use the heaviest color to contrast with the colors of data sets. These markers represent the basis of comparison for data in charts, such as thresholds, benchmarks, or goals.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/colors/viz-chart-elements.6c1940ec3943f9fe2923d75eafc8705a.png)

Do use chart element colors for gridlines, axis lines, and chart markers.

## Backgrounds

### Page background

Page background

The background color for the page.

`sky-theme-color-background-page`

### Container backgrounds

Default container background

The main backgrounds color for containers that hold content and actions on a page.

`sky-theme-color-background-container-default`

Dimmed container background

The background color for containers holding actions or content that is secondary or supporting base containers.

`sky-theme-color-background-container-dimmed`

Backdrop container background

The background color for containers behind a canvas, WYSIWYG editor, or preview.

`sky-theme-color-background-container-backdrop`

Disabled background

The background color for disabled elements.

`sky-theme-color-background-disabled`

## Borders

When using SKY UX classes, use specific border classes to include all properties of the border, including color. In rare cases, use custom properties to assign a border color directly.

Disabled border

The border color for disabled elements.

`sky-theme-color-border-disabled`

## Text

When using SKY UX classes, use specific typography classes to include all properties of the font, including color. In rare cases, use custom properties to assign a text color directly.

Bb

Inverse text

The color for text on heavy background colors, such as primary and danger button labels.

`sky-theme-color-text-inverse`

## Icons

### Icon glyphs

Use icon colors for the glyphs in the icon component.

Default icon

The color for icons that match default text.

`sky-theme-color-icon-default`

Deemphasized icon

`sky-theme-color-icon-deemphasized`

Action icon

The color for icons on links and link buttons.

`sky-theme-color-icon-action`

Inverse icon

The color for icons on heavy background colors, such as primary and danger button labels.

`sky-theme-color-icon-inverse`

### Icon mattes

Use icon matte colors for small backgrounds behind icons. For icons placed on icon mattes, use default, inverse, or action icon color so the icon has a high color contrast with the matte color.

Action soft icon matte

The color for a matte behind an icon with the action icon color.

`sky-theme-color-background-icon_matte-action-soft`

## Status colors

### Status backgrounds

Use status background colors for containers of elements that convey a status or urgency.

Danger background

The background color for an element that conveys danger, error, or a critical warning.

`sky-theme-color-background-container-danger`

Info background

The background color for an element that contains important information, but conveys no danger.

`sky-theme-color-background-container-info`

Success background

The background color for an element that conveys success or completion.

`sky-theme-color-background-container-success`

Warning background

The background color for an element that conveys warning or caution.

`sky-theme-color-background-container-warning`

### Status borders

Use status borders for elements that convey a status or urgency.

Danger border

The border color for an element that conveys danger, error, or a critical warning.

`sky-theme-color-border-danger`

Info border

The border color for an element that contains important information, but conveys no danger.

`sky-theme-color-border-info`

Success border

The border color for an element that conveys success or completion.

`sky-theme-color-border-success`

Warning border

The border color for an element that conveys warning or caution.

`sky-theme-color-border-warning`

### Status icon glyphs

Use status icon colors for icons that convey a status or urgency.

Danger icon

The color for an icon that conveys danger, error, or a critical warning.

`sky-theme-color-icon-danger`

Info icon

The color for an icon that conveys important information, but no danger.

`sky-theme-color-icon-info`

Success icon

The color for an icon that conveys success or completion.

`sky-theme-color-icon-success`

### Status icon mattes

Use status icon matte colors for small backgrounds behind icons that convey status or urgency.

Danger icon matte

The color for a small background behind an icon that conveys danger, error, or a critical warning.

`sky-theme-color-background-icon_matte-danger`

Info icon matte

The color for a small background behind an icon that conveys important information, but no danger.

`sky-theme-color-background-icon_matte-info`

Success icon matte

The color for a small background behind an icon that conveys success or completion.

`sky-theme-color-background-icon_matte-success`

Warning icon matte

The color for a small background behind an icon that conveys warning or caution.

`sky-theme-color-background-icon_matte-warning`

## Classification

Use classification colors to color-code blocks of content when the distinction between types of content is significant to users. For example, use classification colors for different types of events in calendars. Don't rely on color alone to classify content; include classification labels for users with color vision differences. Don't use classification colors to communicate statuses, such as danger or success.

### Backgrounds

Use classification background colors to color-code containers that include text or icons. Use the default colors for text and icons in these containers to maintain high color contrast.

Classification background 1

`sky-theme-color-classify-1-soft`

Classification background 2

`sky-theme-color-classify-2-soft`

Classification background 3

`sky-theme-color-classify-3-soft`

Classification background 4

`sky-theme-color-classify-4-soft`

Classification background 5

`sky-theme-color-classify-5-soft`

Classification background 6

`sky-theme-color-classify-6-soft`

Classification background 7

`sky-theme-color-classify-7-soft`

## Data visualization

### Chart elements

Chart axis

The color for axis lines on charts.

`sky-theme-color-viz-axis`

Chart gridline

The color for gridlines and tick marks on charts.

`sky-theme-color-viz-gridline`

Chart marker

The color for thresholds, benchmarks, or goals on charts.

`sky-theme-color-viz-marker`

## Backgrounds

### Page background

Page background

The background color for the page.

`var(--sky-theme-color-background-page)`

Deprecated:`var(--sky-background-color-page-default)`

### Container backgrounds

Default container background

The main background color for containers that hold content and actions on a page.

`var(--sky-theme-color-background-container-default)`

Deprecated:`var(--sky-background-color-container-default)`

Dimmed container background

The background color for containers holding actions or content that is secondary or supporting base containers.

`var(--sky-theme-color-background-container-dimmed)`

Backdrop container background

The background color for containers behind a canvas, WYSIWYG editor, or preview.

`var(--sky-theme-color-background-container-backdrop)`

Disabled background

The background color for disabled elements.

`var(--sky-theme-color-background-disabled)`

Deprecated:`var(--sky-background-color-disabled)`

## Borders

### Container borders

Default container border

The border color for separating containers from their surroundings.

`var(--sky-theme-color-border-container-default)`

Disabled border

The border color around disabled elements.

`var(--sky-theme-color-border-disabled)`

### Dividers

Divider default

`var(--sky-theme-color-border-divider-default)`

Deprecated:`var(--sky-border-color-neutral-medium)`

Divider soft

`var(--sky-theme-color-border-divider-soft)`

## Text

Bb

Default text

The default color for text on the page.

`var(--sky-theme-color-text-default)`

Deprecated:`var(--sky-text-color-default)`

Bb

Deemphasized text

The color for deemphasized text, such as content labels or hint text.

`var(--sky-theme-color-text-deemphasized)`

Deprecated:`var(--sky-text-color-deemphasized)`

Bb

Heading text

The color for headings.

`var(--sky-theme-color-text-heading)`

Bb

Action text

The color for text in links and link buttons.

`var(--sky-theme-color-text-action)`

Deprecated:`var(--sky-text-color-action-primary)`

Bb

Action contrast text

The color for links and link buttons on backgrounds that require more color contrast to meet accessibility success criteria, such as status containers.

`var(--sky-theme-color-text-action_contrast)`

Bb

Inverse text

The color for text on heavy background colors, such as primary and danger button labels.

`var(--sky-theme-color-text-inverse)`

Deprecated:`var(--sky-text-color-on-dark)`

## Icons

### Icon glyphs

Use icon colors for the glyphs in the icon component.

Default icon

The color for icons that match default text.

`var(--sky-theme-color-icon-default)`

Deemphasized icon

`var(--sky-theme-color-icon-deemphasized)`

Action icon

The color for icons on links and link buttons.

`var(--sky-theme-color-icon-action)`

Inverse icon

The color for icons on heavy background colors, such as primary and danger button labels.

`var(--sky-theme-color-icon-inverse)`

### Icon mattes

Use icon matte colors for the background of elements that an icon component is placed inside of. For icons placed on icon mattes, use default, inverse, or action icon color so the icon has a high color contrast with the matte color.

Action soft icon matte

`var(--sky-theme-color-background-icon_matte-action-soft)`

## Status colors

### Status backgrounds

Use status background colors for containers of elements that convey a status or urgency.

Danger background

The background color for an element that conveys danger, error, or a critical warning.

`var(--sky-theme-color-background-container-danger)`

Deprecated:`var(--sky-background-color-danger)`

Info background

The background color for an element that contains important information, but conveys no danger.

`var(--sky-theme-color-background-container-info)`

Deprecated:`var(--sky-background-color-info)`

Success background

The background color for an element that conveys success or completion.

`var(--sky-theme-color-background-container-success)`

Deprecated:`var(--sky-background-color-success)`

Warning background

The background color for an element that conveys warning or caution.

`var(--sky-theme-color-background-container-warning)`

Deprecated:`var(--sky-background-color-warning)`

### Status borders

Use status borders for elements that convey a status or urgency.

Danger border

The border color for an element that conveys danger, error, or a critical warning.

`var(--sky-theme-color-border-danger)`

Deprecated:`var(--sky-highlight-color-danger)`

Info border

The border color for an element that contains important information, but conveys no danger.

`var(--sky-theme-color-border-info)`

Deprecated:`var(--sky-highlight-color-info)`

Success border

The border color for an element that conveys success or completion.

`var(--sky-theme-color-border-success)`

Deprecated:`var(--sky-highlight-color-success)`

Warning border

The border color for an element that conveys warning or caution.

`var(--sky-theme-color-border-warning)`

Deprecated:`var(--sky-highlight-color-warning)`

### Status icon glyphs

Use status icon colors for icons that convey a status or urgency.

Danger icon

The color for an icon that conveys danger, error, or a critical warning.

`var(--sky-theme-color-icon-danger)`

Info icon

The color for an icon that conveys important information, but no danger.

`var(--sky-theme-color-icon-info)`

Success icon

The color for an icon that conveys success or completion.

`var(--sky-theme-color-icon-success)`

### Status icon mattes

Use status icon matte colors for small backgrounds behind icons that convey status or urgency.

Danger icon matte

The color for a small background behind an icon that conveys danger, error, or a critical warning.

`var(--sky-theme-color-background-icon_matte-danger)`

Info icon matte

The color for a small background behind an icon that conveys important information, but no danger.

`var(--sky-theme-color-background-icon_matte-info)`

Success icon matte

The color for a small background behind an icon that conveys success or completion.

`var(--sky-theme-color-background-icon_matte-success)`

Warning icon matte

The color for a small background behind an icon that conveys warning or caution.

`var(--sky-theme-color-background-icon_matte-warning)`

## Classification

Use classification colors to color-code blocks of content when the distinction between types of content is significant to users. For example, use classification colors for different types of events in calendars. Don't rely on color alone to classify content; include classification labels for users with color vision differences. Don't use classification colors to communicate statuses, such as danger or success.

### Backgrounds

Use classification background colors to color-code containers that include text or icons. Use the default colors for text and icons in these containers to maintain high color contrast.

Classification background 1

`var(--sky-theme-color-classify-1-soft)`

Deprecated:`var(--sky-category-color-teal)`

Classification background 2

`var(--sky-theme-color-classify-2-soft)`

Deprecated:`var(--sky-category-color-purple)`

Classification background 3

`var(--sky-theme-color-classify-3-soft)`

Deprecated:`var(--sky-category-color-blue)`

Classification background 4

`var(--sky-theme-color-classify-4-soft)`

Deprecated:`var(--sky-category-color-orange)`

Classification background 5

`var(--sky-theme-color-classify-5-soft)`

Deprecated:`var(--sky-category-color-yellow)`

Classification background 6

`var(--sky-theme-color-classify-6-soft)`

Deprecated:`var(--sky-category-color-green)`

Classification background 7

`var(--sky-theme-color-classify-7-soft)`

Deprecated:`var(--sky-category-color-red)`

### Foregrounds

Use classification foreground colors to color-code icons or add classifying borders to containers.

Classification foreground 1

`var(--sky-theme-color-classify-1-heavy)`

Classification foreground 2

`var(--sky-theme-color-classify-2-heavy)`

Classification foreground 3

`var(--sky-theme-color-classify-3-heavy)`

Classification foreground 4

`var(--sky-theme-color-classify-4-heavy)`

Classification foreground 5

`var(--sky-theme-color-classify-5-heavy)`

Classification foreground 6

`var(--sky-theme-color-classify-6-heavy)`

Classification foreground 7

`var(--sky-theme-color-classify-7-heavy)`

## Data visualization

### Chart elements

Chart axis

The color for axis lines on charts.

`var(--sky-theme-color-viz-axis)`

Chart gridline

The color for gridlines and tick marks on charts.

`var(--sky-theme-color-viz-gridline)`

Chart marker

The color for thresholds, benchmarks, or goals on charts.

`var(--sky-theme-color-viz-marker)`

### Categorical palette

Use the categorical palette to differentiate categories and data in charts and other data visualizations. For example, use categorical colors for slices in a pie chart and bars in a bar chart. Categorical colors are visually distinct, and all eight meet 3:1 contrast on white backgrounds. Use them in their intended order, and use the first one when visualizations have just one category or no categories.

Category 1

`var(--sky-theme-color-viz-category-1)`

Deprecated:`var(--sky-category-color-teal)`

Category 2

`var(--sky-theme-color-viz-category-2)`

Deprecated:`var(--sky-category-color-purple)`

Category 3

`var(--sky-theme-color-viz-category-3)`

Deprecated:`var(--sky-category-color-blue)`

Category 4

`var(--sky-theme-color-viz-category-4)`

Deprecated:`var(--sky-category-color-sky)`

Category 5

`var(--sky-theme-color-viz-category-5)`

Deprecated:`var(--sky-category-color-orange)`

Category 6

`var(--sky-theme-color-viz-category-6)`

Deprecated:`var(--sky-category-color-red)`

Category 7

`var(--sky-theme-color-viz-category-7)`

Deprecated:`var(--sky-category-color-pink)`

Category 8

`var(--sky-theme-color-viz-category-8)`

Deprecated:`var(--sky-category-color-green)`

### Sequential palette

Use the sequential palette to indicate different magnitudes within a range. For data with fewer than 10 magnitudes, always use the first and last color in the palette for the minimum and maximum magnitudes and evenly distribute the remaining values between them.

Sequence 1

`var(--sky-theme-color-viz-sequence-1)`

Sequence 2

`var(--sky-theme-color-viz-sequence-2)`

Sequence 3

`var(--sky-theme-color-viz-sequence-3)`

Sequence 4

`var(--sky-theme-color-viz-sequence-4)`

Sequence 5

`var(--sky-theme-color-viz-sequence-5)`

Sequence 6

`var(--sky-theme-color-viz-sequence-6)`

Sequence 7

`var(--sky-theme-color-viz-sequence-7)`

Sequence 8

`var(--sky-theme-color-viz-sequence-8)`

Sequence 9

`var(--sky-theme-color-viz-sequence-9)`

Sequence 10

`var(--sky-theme-color-viz-sequence-10)`

### Positive diverging palette

Positive 1

`var(--sky-theme-color-viz-diverge-pos-1)`

Positive 2

`var(--sky-theme-color-viz-diverge-pos-2)`

Positive 3

`var(--sky-theme-color-viz-diverge-pos-3)`

Positive 4

`var(--sky-theme-color-viz-diverge-pos-4)`

Positive 5

`var(--sky-theme-color-viz-diverge-pos-5)`

Positive 6

`var(--sky-theme-color-viz-diverge-pos-6)`

Positive 7

`var(--sky-theme-color-viz-diverge-pos-7)`

Positive 8

`var(--sky-theme-color-viz-diverge-pos-8)`

Positive 9

`var(--sky-theme-color-viz-diverge-pos-9)`

Positive 10

`var(--sky-theme-color-viz-diverge-pos-10)`

### Negative diverging palette

Negative 1

`var(--sky-theme-color-viz-diverge-neg-1)`

Negative 2

`var(--sky-theme-color-viz-diverge-neg-2)`

Negative 3

`var(--sky-theme-color-viz-diverge-neg-3)`

Negative 4

`var(--sky-theme-color-viz-diverge-neg-4)`

Negative 5

`var(--sky-theme-color-viz-diverge-neg-5)`

Negative 6

`var(--sky-theme-color-viz-diverge-neg-6)`

Negative 7

`var(--sky-theme-color-viz-diverge-neg-7)`

Negative 8

`var(--sky-theme-color-viz-diverge-neg-8)`

Negative 9

`var(--sky-theme-color-viz-diverge-neg-9)`

Negative 10

`var(--sky-theme-color-viz-diverge-neg-10)`

## Deprecated colors

These colors are deprecated and will be removed in a future version of SKY UX. To replace them with supported values, follow component patterns and use concepts above.

Primary action background

Deprecated:`var(--sky-background-color-primary-dark)`

Light background

Deprecated:`var(--sky-background-color-neutral-light)`

Selected element background

Deprecated:`var(--sky-background-color-input-selected)`

Info background light

Deprecated:`var(--sky-background-color-info-light)`

Danger background dark

Deprecated:`var(--sky-background-color-danger-dark)`

Neutral medium dark border

Deprecated:`var(--sky-border-color-neutral-medium-dark)`

Selected item background

Deprecated:`var(--sky-background-color-item-selected)`

## Deprecated SCSS variables

SKY UX does not support these deprecated SCSS variables. In many cases, the styles in these variables are now built into components or supported classes and don't need to be manually applied. Read the style overview guidelines to find a suitable replacement.

`$sky-theme-modern-background-color-page-default`

`$sky-background-color-page-default`

`$sky-theme-modern-background-color-disabled`

`$sky-background-color-disabled`

`$sky-border-color-neutral-medium`

`$sky-theme-modern-background-color-neutral-medium`

`$sky-text-color-default`

`$sky-text-color-deemphasized`

`$sky-text-color-action-primary`

`$sky-theme-modern-text-color-action-primary`

`$sky-text-color-on-dark`

`$sky-background-color-danger`

`$sky-background-color-info`

`$sky-background-color-success`

`$sky-background-color-warning`

`$sky-highlight-color-danger`

`$sky-highlight-color-info`

`$sky-highlight-color-success`

`$sky-highlight-color-warning`

`$sky-category-color-teal`

`$sky-category-color-purple`

`$sky-category-color-blue`

`$sky-category-color-orange`

`$sky-category-color-yellow`

`$sky-category-color-light-blue`

`$sky-category-color-red`

`$sky-background-color-primary-dark`

`$sky-theme-modern-background-color-primary-dark`

`$sky-background-color-neutral-light`

`$sky-theme-modern-background-color-neutral-light`

`$sky-background-color-selected`

`$sky-background-color-info-light`

`$sky-background-color-danger-dark`

`$sky-theme-modern-border-color-neutral-medium-dark`

`$sky-color-white`

`$sky-color-black`

`$sky-color-gray-01`

`$sky-color-gray-05`

`$sky-color-gray-10`

`$sky-color-gray-20`

`$sky-color-gray-70`

`$sky-color-gray-80`

`$sky-color-gray-90`

`$sky-color-gray-100`

`$sky-color-gray-105`

`$sky-color-blue-05`

`$sky-color-blue-10`

`$sky-color-blue-30`

`$sky-color-blue-50`

`$sky-color-blue-70`

`$sky-color-blue-75`

`$sky-color-green-30`

`$sky-color-green-50`

`$sky-color-yellow-30`

`$sky-color-yellow-50`

`$sky-color-red-30`

`$sky-color-red-50`

`$sky-color-red-70`

`$sky-color-purple-10`

`$sky-color-purple-50`

`$sky-color-teal-50`

`$sky-color-teal-70`

`$sky-color-blackbaud-sky-blue-20`

`$sky-color-blackbaud-sky-blue-40`

`$sky-color-blackbaud-green-30`

`$sky-color-blackbaud-yellow-30`

`$sky-color-blackbaud-orange-30`

`$sky-color-blackbaud-red-30`

`$sky-color-blackbaud-purple-30`

`$sky-text-color-icon-borderless`

`$sky-border-color-neutral-light`

`$sky-theme-modern-color-gray-003`

`$sky-theme-modern-color-gray-005`

`$sky-theme-modern-color-gray-07`

`$sky-theme-modern-color-gray-15`

`$sky-theme-modern-color-gray-30`

`$sky-theme-modern-color-gray-50`

`$sky-theme-modern-color-gray-70`

`$sky-theme-modern-color-gray-102`

`$sky-theme-modern-color-gray-103`

`$sky-theme-modern-color-gray-110`

`$sky-theme-modern-color-gray-115`

`$sky-theme-modern-color-blue-60`

`$sky-theme-modern-color-blue-74`

`$sky-theme-modern-border-color-neutral-light`

`$sky-theme-modern-border-color-primary-dark`

`$sky-theme-modern-mode-dark-background-color-page-default`

`$sky-theme-modern-mode-dark-background-color-primary-dark`

`$sky-theme-modern-mode-dark-background-color-elevation-1`

`$sky-theme-modern-mode-dark-background-color-elevation-3`

`$sky-theme-modern-mode-dark-background-color-elevation-4`

`$sky-theme-modern-mode-dark-background-color-elevation-8`

`$sky-theme-modern-mode-dark-background-color-elevation-16`

`$sky-theme-modern-mode-dark-background-color-elevation-24`

`$sky-theme-modern-mode-dark-border-color-neutral-medium`

`$sky-theme-modern-mode-dark-text-color-action-primary`

`$sky-theme-modern-mode-dark-font-body-default-color`

`$sky-theme-modern-mode-dark-font-deemphasized-color`

`$sky-theme-modern-mode-dark-elevation-0-bordered-border`
