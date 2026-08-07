---
Title: Bar chart (preview)
Reference: https://developer.blackbaud.com/skyux/components/chart-bar
---

# Bar chart (preview)

We created this bar chart component to provide a simple, declarative way to visualize categorical data. It is currently in [preview mode](../learn/preview.md) and isn't fully implemented or documented. We plan to finish development of this component and officially release it in SKY UX v15.

Bar charts visually compare discrete categories or groups of data. They provide a clear representation of differences in magnitude across categories. To render a bar chart from a category axis, a value axis, and one or more series, wrap the `sky-chart-bar` component in a `sky-chart` component and then supply a `sky-chart-axis-category`, `sky-chart-axis-value`, and `sky-chart-bar-series` component for each series to plot.

## Usage

Bar charts support vertical or horizontal orientations, and they support grouped or stacked layouts. Use the orientation and layout that best serves your scenario.

### Orientations

<table>
  <tbody>
    <tr>
      <td>
![Horizontal orientation thumbnail](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/horizontal-thumbnail.1d2ab7aefe0f347cc656000d44d97b63.png)
</td>
      <td>

### Horizontal

- Use the horizontal orientation to compare values across many categories or across categories with long labels when you need to conserve horizontal space.
- Use the horizontal orientation to rank items or compare categories without a time dimension.

</td>
    </tr>
    <tr>
      <td>
![Vertical orientation thumbnail](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/vertical-thumbnail.b8ead079fb5deffe6c421530c28ea0fe.png)
</td>
      <td>

### Vertical

- Use the vertical orientation to compare values across five or fewer categories that have short labels when you need to conserve vertical space.
- Use the vertical orientation to show changes in a metric over discrete time intervals. For continuous trends, use line charts instead.

</td>
    </tr>
  </tbody>
</table>

### Layouts

<table>
  <tbody>
    <tr>
      <td>
![Grouped layout thumbnail](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/grouped-thumbnail.0ef79d6b6b6ed743ead940ff43288c98.png)
</td>
      <td>

### Grouped

- Use the grouped layout to compare groups of related categories.
- Use the grouped layout to highlight differences between subcategories.

</td>
    </tr>
    <tr>
      <td>
![Stacked layout thumbnail](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/stacked-thumbnail.c5b12d491f7cc89a2f5a6fedeb0c5f35.png)
</td>
      <td>

### Stacked

- Use the stacked layout to compare categories when you need to show how individual components contribute to the whole within each category. For single-category composition, use donut charts instead.

</td>
    </tr>
  </tbody>
</table>

### Horizontal bar charts

### Use when

Use horizontal bar charts to compare values across many categories or across categories with long labels when you need to conserve horizontal space.

Use horizontal bar charts to rank items or compare categories without a time dimension.

### Vertical bar charts

### Use when

Use vertical bar charts to compare values when you need to conserve vertical space.

Use vertical bar charts to show changes in a metric over discrete time intervals.

### Don't use when

Don't use bar charts for trend analysis over continuous time intervals. Use line charts instead.

### Grouped bar charts

### Use when

Use grouped bar charts to compare multiple categories within a group to other groups of categories.

Use grouped bar charts to highlight differences between subcategories.

### Stacked bar charts

### Use when

Use stacked bar charts to compare categories when you need to show how individual components contribute to the whole within each category.

### Don't use when

Don't use stacked bar charts for single-category compositions. Use donut charts instead.

## Anatomy

1

Heading

2

Chart grid

3

Grid lines

4

Tick lines

5

Scale

6

Bar

7

Category axis

8

Measure axis

9

Chart menu

10

Subtitle or description (optional)

11

Help inline button (optional)

12

X and Y axis labels (optional)

13

Legend (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/bar-chart-anatomy.66e8b12645ce3d9425f7bd688ce1de92.png)

### Grouped bar chart anatomy

1

Category bar group

2

Series bar

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/grouped-bar-chart-anatomy.793d0e6f9f6e9ec4486da0da816430b7.png)

### Stacked bar chart anatomy

1

Segments

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/stacked-bar-chart-anatomy.b21f27d79988ec75e632c4b64eef52d0.png)

### Tooltip anatomy

1

Title

2

Category

3

Label

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/bar-chart-tooltip-anatomy.90957cd39c1852ec05cb43f4c9350db9.png)

## Options

### Heading

A chart's heading defines what it represents. Every chart must include a `headingText` value so that assistive technologies and the document structure can correctly identify the chart, but not every chart needs to display the heading.

Display chart headings when:

- Users can't infer the purpose from UI context.
- Multiple charts appear alongside each other.
- The additional clarity improves readability or scannability.

Hide chart headings visually with `headingHidden` when headings would be redundant because charts exist in a context where where other labels communicate the purpose, including container headers, tab labels, or section headers. For example, hide the chart heading when a chart is the only chart in a box or tile that already provides a heading.

Even when you hide headings, you must define `headingText` for accessibility and document structure.

### Subtitle or description

To provide additional context about a chart when the purpose is not obvious from the heading, use a subtitle or description.

In cases where chart isn't rendered in real-time, you can use the subtitle or description to denote the update frequency.

### Chart grid

All charts have grids, and you can generally rely on the default grid options.

By default, the min and max values are calculated based on the data values within the data series. However, you may want to define a min and max in some cases, such as when you want a more direct comparison between two charts.

Also define min and max values when you want to ensure that grid values aren't constrained by the data being visualized.

### X and Y axis labels

In most cases, category and measure labels are sufficient to clearly indicate the units and categories that a chart illustrates. However, in the rare cases when those labels aren't sufficient, you can supplement them with X and Y axis labels.

### Category and measure labels

Category and measure labels are required to clearly identify data in charts. Avoid using abbreviations that require interpretation.

### Chart menu

The chart menu provides access to export controls and a screen-reader accessible data table.

### Label lengths

Horizontal and vertical real estate is often at a premium, and therefore you will want to strive to keep labels short in your bar charts. You may not always have control of the length, but there are some general guidelines that can help.

### Horizontal and vertical bar chart labels

Keep labels short to prevent unwanted data visualization behavior. When you need to abbreviate dates or times, follow the [abbreviation guidelines](../design/guidelines/content/dates-times.md#abbreviations).

### Category count recommendations

### Horizontal bar charts

Best for larger category counts or longer labels.

- Ideal: 5-10 categories
- Acceptable max: 12-15 categories (if labels are short-to-medium length)
- Beyond 15 categories, readability suffers even horizontally—consider:
  - Paging
  - Collapsing into grouped categories
  - Providing filters

### Vertical bar charts

Best for smaller category counts and shorter labels.

- Ideal: 2-6 categories
- Acceptable max: 8 categories

### Grouped bar charts

Suitable for comparing multiple series across categories, but you must consider both the number of categories and the number of series.

- Max categories: 4-6
- Max series: 2-5
- More than 5 series creates visual noise at card sizes (⅓ or ½ width).
- More than 6 categories produces overly compressed groups.

### Stacked bar charts

Follow the category limits for horizontal and vertical bar charts.

- Limit to 6 dataset segments or fewer.
- If more than 6 segments are needed, consolidate smaller segments into an "Other" category or switch to a different chart type.

### Data ordering

- When ordering data, preserve natural sequences, such as time, progress, and ranked scales.
- When no natural sequence exists, sort categories by value (ascending or descending) for comparison charts.

## Behavior and states

Bar charts will adapt to use the approved color palette automatically and should not be overwritten.

### Empty states

When no data is available, bar charts display an empty state message.

### Chart menu

Include a menu for secondary action.

- Export options
- View data table

## Installation

NPM package

`@skyux/charts`[View in NPM](https://www.npmjs.com/package/@skyux/charts) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/charts/src/lib/chart/chart.ts#L50)

Install with NPM

`npm install --save-exact @skyux/charts`

## SkyChart

Type: Component Preview

Selector: `sky-chart`

Provides a consistent heading, subheading, and layout wrapper for a chart.

### Inputs

#### `headingHidden: InputSignalWithTransform<boolean, unknown>`

Whether to hide the chart's heading.

#### `headingLevel: InputSignalWithTransform<SkyChartHeadingLevel, unknown>`

The semantic heading level in the document structure.

Default: `3`

#### `headingStyle: InputSignalWithTransform<SkyChartHeadingStyle, unknown>`

The heading [font style](../design/styles/typography.md#headings).

Default: `3`

#### `headingText: InputSignal<string>`

The text to display as the chart's heading.

#### `helpKey: InputSignal<string | undefined>`

A help key that identifies the global help content to display. When specified, a [help inline](./help-inline.md) button is placed beside the chart heading. Clicking the button invokes [global help](../learn/develop/global-help.md) as configured by the application.

#### `helpPopoverContent: InputSignal<string | TemplateRef<unknown> | undefined>`

The content of the help popover. When specified, a [help inline](./help-inline.md) button is added to the chart heading. The help inline button displays a [popover](./popover.md) when clicked using the specified content and optional title.

#### `helpPopoverTitle: InputSignal<string | undefined>`

The title of the help popover. This property only applies when `helpPopoverContent` is also specified.

#### `loading: InputSignalWithTransform<boolean, unknown>`

Whether the chart's data is being loaded. When `true`, a wait overlay covers the chart's content area, which reserves the default chart height while no plot is rendered. The heading and help button stay interactive.

Default: `false`

#### `subheadingText: InputSignal<string | undefined>`

The text to display as the chart's subheading.

## SkyChartAxisCategory

Type: Component Preview

Selector: `sky-chart-axis-category`

Defines the category axis of a chart. Its categories are shared by every series plotted against it, and each series' values align to them by index.

### Inputs

#### `categories: InputSignal<readonly (string | number)[]>`

The categories shared by every series plotted against this axis. Each series' values are aligned to these categories by index.

#### `labelHidden: InputSignalWithTransform<boolean, unknown>`

Whether to hide the axis label.

#### `labelText: InputSignal<string>`

The text of the axis label.

## SkyChartAxisValue

Type: Component Preview

Selector: `sky-chart-axis-value`

Defines the value axis of a chart, which scales the plotted series and formats their values in axis labels, tooltips, and the data table.

### Inputs

#### `currencyCode: InputSignal<string | undefined>`

The ISO 4217 currency code used when `format` is `currency`. When unset, currency values format as `USD`.

#### `digits: InputSignalWithTransform<number | undefined, unknown>`

The number of decimal places to display. When unset, the format's locale-aware default is used (for example, two places for most currencies).

#### `format: InputSignal<SkyChartValueFormat>`

How to format the axis values in axis labels, tooltips, and the data table. The `percent` format expects fractional values, so `0.25` displays as `25%`.

Default: `'number'`

#### `labelHidden: InputSignalWithTransform<boolean, unknown>`

Whether to hide the axis label.

#### `labelText: InputSignal<string>`

The text of the axis label.

#### `max: InputSignalWithTransform<number | undefined, unknown>`

The highest value to display on the axis. When unset, the axis scales to fit the plotted values.

#### `min: InputSignalWithTransform<number | undefined, unknown>`

The lowest value to display on the axis. When unset, the axis scales to fit the plotted values.

#### `scaleType: InputSignal<SkyChartValueScaleType>`

The scale type for the value axis.

Default: `'linear'`

## SkyChartBar

Type: Component Preview

Selector: `sky-chart-bar`

Renders a bar chart from a category axis, a value axis, and one or more series.

### Inputs

#### `orientation: InputSignal<SkyChartBarOrientation>`

The orientation of the bars.

Default: `'vertical'`

#### `seriesLayout: InputSignal<SkyChartBarSeriesLayout>`

How the bars of multiple series are arranged within each category. `grouped` places the series' bars side by side; `stacked` accumulates the bars into a single bar per category. When `stacked`, assign each series a `stackId` value to subdivide the bar into side-by-side stacks (grouped, stacked bars). This has no visible effect when the chart has a single series.

Default: `'grouped'`

## SkyChartBarSeries

Type: Component Preview

Selector: `sky-chart-bar-series`

Defines a single series of values to plot on a bar chart, aligned to the category axis by index.

### Inputs

#### `labelText: InputSignal<string>`

The text that identifies this series in the legend and tooltips.

#### `stackId: InputSignal<string | undefined>`

The stack this series belongs to. When a bar chart's `seriesLayout` is `stacked`, series that share the same `stackId` value accumulate into a single bar per category, and series with different `stackId` values are placed side by side. Omit to stack every series into one bar per category. Has no effect when `seriesLayout` is `grouped`.

#### `values: InputSignal<readonly SkyChartBarSeriesValue[]>`

The values for this series, aligned to the category axis categories by index. A number renders a standard bar measured from the value axis's baseline, a `[start, end]` tuple renders a floating bar spanning the two values, and a `null` value renders a gap in the chart and an empty cell in the data table.

## SkyChartBarOrientation

Type: Type alias Preview

The orientation of a bar chart's bars.

    type SkyChartBarOrientation = "horizontal" | "vertical"

## SkyChartBarSeriesLayout

Type: Type alias Preview

How a bar chart arranges the bars of multiple series within each category. `grouped` places the series' bars side by side; `stacked` accumulates the bars into a single bar per category. Neither has a visible effect when the chart has a single series.

    type SkyChartBarSeriesLayout = "grouped" | "stacked"

## SkyChartBarSeriesValue

Type: Type alias Preview

A single value plotted by a bar chart series: a number renders a standard bar measured from the value axis's baseline, a `[start, end]` tuple renders a floating bar spanning the two values, and `null` renders a gap.

    type SkyChartBarSeriesValue = number | readonly [number, number] | null

## SkyChartHeadingLevel

Type: Type alias Preview

The allowed heading levels for charts, corresponding to the semantic heading levels in HTML.

    type SkyChartHeadingLevel = 2 | 3 | 4 | 5

## SkyChartHeadingStyle

Type: Type alias Preview

The allowed heading styles for charts, corresponding to the font styles defined in the SKY UX design system.

    type SkyChartHeadingStyle = 2 | 3 | 4 | 5

## SkyChartValueFormat

Type: Type alias Preview

How a chart formats its numeric values in axis labels, tooltips, and the data table. The `percent` format expects fractional values, so `0.25` displays as `25%`.

    type SkyChartValueFormat = "currency" | "number" | "percent"

## SkyChartValueScaleType

Type: Type alias Preview

The scale type for a chart value axis. Use `logarithmic` when values span several orders of magnitude; otherwise use the default `linear` scale. Note that the `logarithmic` scale cannot display zero or negative values.

    type SkyChartValueScaleType = "linear" | "logarithmic"

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyChartBarHarness

Type: Class Preview

`import { SkyChartBarHarness } from '@skyux/charts/testing';`

Harness for interacting with a bar chart component in tests.

### Methods

#### `isChartRendered(): Promise<boolean>`

Whether the bar chart has rendered its plot. The plot renders once the chart is given a category axis, a value axis, and at least one series.

#### Returns

`Promise<boolean>`

#### `SkyChartBarHarness.with(filters: SkyChartBarHarnessFilters): HarnessPredicate<SkyChartBarHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyChartBarHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyChartBarHarnessFilters`

#### Returns

`HarnessPredicate<SkyChartBarHarness>`

## SkyChartBarHarnessFilters

Type: Interface Preview

A set of criteria for filtering `SkyChartBarHarness` instances.

    interface SkyChartBarHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyChartHarness

Type: Class Preview

`import { SkyChartHarness } from '@skyux/charts/testing';`

Harness for interacting with a chart component in tests. Query the plot's harness (for example, `SkyChartBarHarness`) with `queryHarness`.

### Methods

#### `clickHelpInline(): Promise<void>`

Clicks the help inline button.

#### Returns

`Promise<void>`

#### `getHeadingHidden(): Promise<boolean>`

Whether the chart's heading is hidden.

#### Returns

`Promise<boolean>`

#### `getHeadingLevel(): Promise<SkyChartHeadingLevel | undefined>`

Gets the semantic heading level of the chart's heading, or `undefined` when the heading is hidden.

#### Returns

`Promise<SkyChartHeadingLevel | undefined>`

#### `getHeadingStyle(): Promise<SkyChartHeadingStyle | undefined>`

Gets the font style of the chart's heading, or `undefined` when the heading is hidden.

#### Returns

`Promise<SkyChartHeadingStyle | undefined>`

#### `getHeadingText(): Promise<string | undefined>`

Gets the chart's heading text, or `undefined` when the heading is hidden.

#### Returns

`Promise<string | undefined>`

#### `getHelpPopoverContent(): Promise<string | undefined>`

Gets the help popover content.

#### Returns

`Promise<string | undefined>`

#### `getHelpPopoverTitle(): Promise<string | undefined>`

Gets the help popover title.

#### Returns

`Promise<string | undefined>`

#### `getSubheadingText(): Promise<string | undefined>`

Gets the chart's subheading text, or `undefined` when no subheading is displayed.

#### Returns

`Promise<string | undefined>`

#### `isLoading(): Promise<boolean>`

Whether the chart displays its loading wait indicator.

#### Returns

`Promise<boolean>`

#### `openDataTableModal(): Promise<SkyChartTableModalHarness>`

Opens the chart's data table modal from the chart's context menu and returns a harness for interacting with it. The context menu is available once the chart's plot has data to display.

#### Returns

`Promise<SkyChartTableModalHarness>`

#### `queryHarness(query: HarnessQuery<T>): Promise<T>`

Returns a child harness or throws an error if not found.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T>`

#### `queryHarnesses(harness: HarnessQuery<T>): Promise<T[]>`

Returns child harnesses.

#### Parameters

##### `harness: HarnessQuery<T>`

#### Returns

`Promise<T[]>`

#### `queryHarnessOrNull(query: HarnessQuery<T>): Promise<T | null>`

Returns a child harness or null if not found.

#### Parameters

##### `query: HarnessQuery<T>`

#### Returns

`Promise<T | null>`

#### `querySelector(selector: string): Promise<TestElement>`

Returns a child test element or throws an error if not found.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement>`

#### `querySelectorAll(selector: string): Promise<TestElement[]>`

Returns child test elements.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement[]>`

#### `querySelectorOrNull(selector: string): Promise<TestElement | null>`

Returns a child test element or null if not found.

#### Parameters

##### `selector: string`

#### Returns

`Promise<TestElement | null>`

#### `SkyChartHarness.with(filters: SkyChartHarnessFilters): HarnessPredicate<SkyChartHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyChartHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyChartHarnessFilters`

#### Returns

`HarnessPredicate<SkyChartHarness>`

## SkyChartHarnessFilters

Type: Interface Preview

A set of criteria for filtering `SkyChartHarness` instances.

    interface SkyChartHarnessFilters {
      dataSkyId?: string | RegExp;
      headingText?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `headingText?: string | RegExp`

Only find instances whose heading text matches the given value.

## SkyChartTableModalHarness

Type: Class Preview

`import { SkyChartTableModalHarness } from '@skyux/charts/testing';`

Harness for interacting with a chart's data table modal in tests. Open the modal with `SkyChartHarness.openDataTableModal`.

### Methods

#### `close(): Promise<void>`

Closes the data table modal.

#### Returns

`Promise<void>`

#### `getCategories(): Promise<string[]>`

Gets the categories, shown as the table's row headers.

#### Returns

`Promise<string[]>`

#### `getCategoryLabel(): Promise<string>`

Gets the category axis label, shown as the table's corner header.

#### Returns

`Promise<string>`

#### `getSeriesLabels(): Promise<string[]>`

Gets the series labels, shown as the table's column headers.

#### Returns

`Promise<string[]>`

#### `getValues(): Promise<string[][]>`

Gets the formatted values of the table's body as one array per category row, ordered to match the series labels.

#### Returns

`Promise<string[][]>`
