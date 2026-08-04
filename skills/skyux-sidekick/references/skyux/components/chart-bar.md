---
Title: Bar chart (preview)
Reference: https://developer.blackbaud.com/skyux/components/chart-bar
---

# Bar chart (preview)

We created this bar chart component to provide a simple, declarative way to visualize categorical data. It is currently in [preview mode](../learn/preview.md) and isn't fully implemented or documented. We plan to finish development of this component and officially release it in SKY UX v15.

The `sky-chart-bar` component renders a bar chart from a category axis, a value axis, and one or more series. Wrap it in a `sky-chart` component to provide a consistent heading and layout, then supply a `sky-chart-axis-category`, a `sky-chart-axis-value`, and a `sky-chart-bar-series` for each series to plot. The component supports vertical and horizontal orientations, grouped and stacked layouts, and an accessible data table.

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
