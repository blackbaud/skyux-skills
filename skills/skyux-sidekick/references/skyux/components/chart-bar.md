---
Title: Bar chart
Reference: https://developer.blackbaud.com/skyux/components/chart-bar
---

# Bar chart

Bar charts provide a simple, declarative way to visualize categorical data. They visually compare discrete categories or groups of data and provide a clear representation of differences in magnitude across categories. To render a bar chart from a category axis, a value axis, and one or more series, wrap the `sky-chart-bar` component in a `sky-chart` component and then supply a `sky-chart-axis-category`, `sky-chart-axis-value`, and `sky-chart-bar-series` component for each series to plot.

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

- Use the horizontal orientation to compare values across up to 15 categories or across categories with long labels when you need to conserve horizontal space.
- Use the horizontal orientation to rank items or compare categories without a time dimension.

</td>
    </tr>
    <tr>
      <td>
![Vertical orientation thumbnail](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/bar-chart/vertical-thumbnail.b8ead079fb5deffe6c421530c28ea0fe.png)
</td>
      <td>

### Vertical

- Use the vertical orientation to compare values across 2-6 categories that have short labels when you need to conserve vertical space.
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

### Use horizontal bar charts when

Use horizontal bar charts to compare values across up to 15 categories or across categories with long labels when you need to conserve horizontal space.

Use horizontal bar charts to rank items or compare categories without a time dimension.

### Use vertical bar charts when

Use vertical bar charts to compare values across 2-6 categories that have short labels when you need to conserve vertical space.

Use vertical bar charts to show changes in a metric over discrete time intervals.

### Don't use vertical bar charts when

Don't use bar charts for trend analysis over continuous time intervals. Use line charts instead.

### Use grouped bar charts when

Use grouped bar charts to compare multiple categories within a group to other groups of categories.

Use grouped bar charts to highlight differences between subcategories.

### Use stacked bar charts when

Use stacked bar charts to compare categories when you need to show how individual components contribute to the whole within each category.

### Don't use stacked bar charts when

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

Subheading (optional)

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

Segment

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

The heading defines what a chart represents. The heading is required because assistive technologies and the document structure use the `headingText` input to identify the chart, but the chart doesn't always need to visually display a heading.

Display a chart heading when:

- Users can't infer the chart's purpose from UI context.
- Multiple charts appear alongside each other.
- The additional clarity improves readability or scannability.

Hide a chart heading with `headingHidden` when the heading is redundant because the chart exists in a context where another label, such as a container heading, tab label, or section heading, communicates the purpose. For example, hide the heading when a single chart appears in a box or tile that already provides a heading, but still define `headingText` for accessibility and document structure.

### Subheading

To provide additional context about a chart when the purpose is not obvious from the heading, use a subheading.

When the chart isn't rendered in real-time, use the subheading to denote the update frequency.

### X and Y axis labels

In many cases, category and measure labels are sufficient to clearly indicate the units and categories that a chart illustrates. When those labels aren't sufficient, supplement them with X and Y axis labels.

## Content

### Label lengths

Horizontal and vertical space is often at a premium, so strive to keep labels short in both horizontal and vertical bar charts. Short labels prevent unwanted data visualization behavior. If you need to abbreviate dates or times, avoid abbreviations that require interpretation and follow the [abbreviation guidelines](../design/guidelines/content/dates-times.md#abbreviations).

### Category count recommendations

Horizontal bar charts

Best for larger category counts and longer labels. We recommend 10-15 categories, but if the labels are long, reduce the categories. After 15 categories, readability suffers, and you should consider paging, collapsing categories into grouped categories, and providing filters.

Vertical bar charts

Best for smaller category counts and shorter labels. We recommend 2-6 categories, but in rare cases, you can use up to 12 categories. For example, use 12 categories to visualize per-month data over the course of a year, but make sure the X and Y axis labels are short enough to support a responsive context.

Grouped bar charts

Best for comparing multiple series across categories, but you must consider both the number of categories and the number of series. We recommend 4-6 categories and 2-5 series. More than 6 categories produces overly compressed groups, and more than 5 series creates visual noise at card sizes (⅓ or ½ width).

Stacked bar charts

Best for comparing a handful of segments within categories. We recommend 6 data segments or fewer. If you need more than 6 segments, consolidate smaller segments into an "Other" category or use a different type of chart. We also recommend limiting the number of categories based on the layout horizontal or vertical orientation.

### Data ordering

When ordering data, preserve natural sequences, such as time, progress, and ranked scales. If no natural sequence exists, sort categories by value (ascending or descending) for comparison charts.

## Behavior and states

### Colors

Bar charts will adapt to use the approved color palette automatically and should not be overwritten.

### Empty states

When no data is available, bar charts display an empty state message.

### Chart grid

All charts have grids, and you can generally rely on the default grid options. By default, the chart calculates minimum and maximum values based on the values in the data series. In some cases, you may want to define minimum and maximum values, such as when you want a more direct comparison between two charts.

Also define minimum and maximum values when you want to ensure that grid values aren't constrained by the data being visualized.

### Category and measure labels

Category and measure labels clearly identify data in charts. Avoid abbreviations that require interpretation.

### Chart menu

The chart menu provides access to export controls and a screen-reader accessible data table.

## Installation

NPM package

`@skyux/charts`[View in NPM](https://www.npmjs.com/package/@skyux/charts) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/charts/src/lib/chart/chart.ts#L46)

Install with NPM

`npm install --save-exact @skyux/charts`

## SkyChart

Type: Component

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

Type: Component

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

Type: Component

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

Type: Component

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

Type: Component

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

Type: Type alias

The orientation of a bar chart's bars.

    type SkyChartBarOrientation = "horizontal" | "vertical"

## SkyChartBarSeriesLayout

Type: Type alias

How a bar chart arranges the bars of multiple series within each category. `grouped` places the series' bars side by side; `stacked` accumulates the bars into a single bar per category. Neither has a visible effect when the chart has a single series.

    type SkyChartBarSeriesLayout = "grouped" | "stacked"

## SkyChartBarSeriesValue

Type: Type alias

A single value plotted by a bar chart series: a number renders a standard bar measured from the value axis's baseline, a `[start, end]` tuple renders a floating bar spanning the two values, and `null` renders a gap.

    type SkyChartBarSeriesValue = number | readonly [number, number] | null

## SkyChartHeadingLevel

Type: Type alias

The allowed heading levels for charts, corresponding to the semantic heading levels in HTML.

    type SkyChartHeadingLevel = 2 | 3 | 4 | 5

## SkyChartHeadingStyle

Type: Type alias

The allowed heading styles for charts, corresponding to the font styles defined in the SKY UX design system.

    type SkyChartHeadingStyle = 2 | 3 | 4 | 5

## SkyChartValueFormat

Type: Type alias

How a chart formats its numeric values in axis labels, tooltips, and the data table. The `percent` format expects fractional values, so `0.25` displays as `25%`.

    type SkyChartValueFormat = "currency" | "number" | "percent"

## SkyChartValueScaleType

Type: Type alias

The scale type for a chart value axis. Use `logarithmic` when values span several orders of magnitude; otherwise use the default `linear` scale. Note that the `logarithmic` scale cannot display zero or negative values.

    type SkyChartValueScaleType = "linear" | "logarithmic"

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyChartBarHarness

Type: Class

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

Type: Interface

A set of criteria for filtering `SkyChartBarHarness` instances.

    interface SkyChartBarHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyChartHarness

Type: Class

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

Type: Interface

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

Type: Class

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

## Code Examples

### Basic bar chart

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Basic bar chart
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-basic-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarBasicExample {
  protected readonly years = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
  protected readonly acquisitions = [10, 20, 15, 25, 22, 30, 28];
}
```

#### example.html

```html
<sky-chart data-sky-id="acquisitions-by-year" headingText="Acquisitions by year">
  <sky-chart-bar data-sky-id="acquisitions-bar">
    <sky-chart-axis-category labelText="Year" [categories]="years" />
    <sky-chart-axis-value labelText="Acquisitions" />
    <sky-chart-bar-series labelText="Acquisitions by year" [values]="acquisitions" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarBasicExample } from './example';

describe('Basic bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarBasicExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarBasicExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'acquisitions-by-year' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Acquisitions by year');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness.with({ dataSkyId: 'acquisitions-bar' }));

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose the chart data through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Year');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Acquisitions by year']);
    await expectAsync(dataTable.getCategories().then((categories) => categories.length)).toBeResolvedTo(7);

    await dataTable.close();
  });
});
```

### Horizontal bar chart

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Horizontal bar chart
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-horizontal-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarHorizontalExample {
  protected readonly regions = ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'];
  protected readonly sales = [42, 58, 35, 47, 63];
}
```

#### example.html

```html
<sky-chart data-sky-id="sales-by-region" headingText="Sales by region">
  <sky-chart-bar orientation="horizontal">
    <sky-chart-axis-category labelText="Region" [categories]="regions" />
    <sky-chart-axis-value labelText="Sales" />
    <sky-chart-bar-series labelText="Sales" [values]="sales" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarHorizontalExample } from './example';

describe('Horizontal bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarHorizontalExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarHorizontalExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'sales-by-region' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Sales by region');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose the chart data through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Region');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Sales']);
    await expectAsync(dataTable.getCategories()).toBeResolvedTo([
      'Northeast',
      'Southeast',
      'Midwest',
      'Southwest',
      'West',
    ]);

    await dataTable.close();
  });
});
```

### Bar chart with multiple series (grouped bars)

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Bar chart with multiple series (grouped bars)
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-multiple-series-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarMultipleSeriesExample {
  protected readonly years = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
  protected readonly actual = [10, 20, 15, 25, 22, 30, 28];
  protected readonly target = [12, 18, 20, 22, 26, 28, 32];
}
```

#### example.html

```html
<sky-chart data-sky-id="actual-vs-target" headingText="Actual vs. target">
  <sky-chart-bar>
    <sky-chart-axis-category labelText="Year" [categories]="years" />
    <sky-chart-axis-value labelText="Acquisitions" />
    <sky-chart-bar-series labelText="Actual" [values]="actual" />
    <sky-chart-bar-series labelText="Target" [values]="target" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarMultipleSeriesExample } from './example';

describe('Multiple series bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarMultipleSeriesExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarMultipleSeriesExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'actual-vs-target' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Actual vs. target');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose both series through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Year');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Actual', 'Target']);

    await dataTable.close();
  });
});
```

### Stacked bar chart

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Stacked bar chart
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-stacked-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarStackedExample {
  protected readonly months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  protected readonly online = [38, 6, 54, 69, 88, 13, 87];
  protected readonly inStore = [37, 84, 28, 84, 97, 22, 63];
  protected readonly phone = [86, 4, 7, 85, 8, 51, 30];
}
```

#### example.html

```html
<sky-chart data-sky-id="monthly-sales" headingText="Monthly sales">
  <sky-chart-bar seriesLayout="stacked">
    <sky-chart-axis-category labelText="Month" [categories]="months" />
    <sky-chart-axis-value labelText="Sales" />
    <sky-chart-bar-series labelText="In store" [values]="inStore" />
    <sky-chart-bar-series labelText="Online" [values]="online" />
    <sky-chart-bar-series labelText="Phone" [values]="phone" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarStackedExample } from './example';

describe('Stacked bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarStackedExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarStackedExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'monthly-sales' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Monthly sales');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose every stacked series through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Month');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['In store', 'Online', 'Phone']);

    await dataTable.close();
  });
});
```

### Bar chart with grouped, stacked series

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Bar chart with grouped, stacked series
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-grouped-stacked-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarGroupedStackedExample {
  protected readonly months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  protected readonly westInStore = [38, 6, 54, 69, 88, 13, 87];
  protected readonly westOnline = [37, 84, 28, 84, 97, 22, 63];
  protected readonly eastInStore = [24, 51, 40, 33, 62, 45, 51];
  protected readonly eastOnline = [55, 30, 47, 58, 41, 66, 39];
}
```

#### example.html

```html
<sky-chart data-sky-id="monthly-sales-by-region" headingText="Monthly sales by region">
  <sky-chart-bar seriesLayout="stacked">
    <sky-chart-axis-category labelText="Month" [categories]="months" />
    <sky-chart-axis-value labelText="Sales" />
    <sky-chart-bar-series labelText="West in store" stackId="West" [values]="westInStore" />
    <sky-chart-bar-series labelText="West online" stackId="West" [values]="westOnline" />
    <sky-chart-bar-series labelText="East in store" stackId="East" [values]="eastInStore" />
    <sky-chart-bar-series labelText="East online" stackId="East" [values]="eastOnline" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarGroupedStackedExample } from './example';

describe('Grouped, stacked bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarGroupedStackedExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarGroupedStackedExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'monthly-sales-by-region' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Monthly sales by region');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose every stack through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Month');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo([
      'West in store',
      'West online',
      'East in store',
      'East online',
    ]);

    await dataTable.close();
  });
});
```

### Floating bar chart (value ranges)

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SkyChart,
  SkyChartAxisCategory,
  SkyChartAxisValue,
  SkyChartBar,
  SkyChartBarSeries,
  type SkyChartBarSeriesValue,
} from '@skyux/charts';

/**
 * @title Floating bar chart (value ranges)
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-floating-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarFloatingExample {
  protected readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  protected readonly temperatureRanges: SkyChartBarSeriesValue[] = [
    [-2, 5],
    [0, 8],
    [4, 14],
    [9, 19],
    [14, 24],
    [18, 28],
  ];
}
```

#### example.html

```html
<sky-chart data-sky-id="temperature-range" headingText="Temperature range by month">
  <sky-chart-bar>
    <sky-chart-axis-category labelText="Month" [categories]="months" />
    <sky-chart-axis-value labelText="Temperature (°C)" />
    <sky-chart-bar-series labelText="Temperature range" [values]="temperatureRanges" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarFloatingExample } from './example';

describe('Floating bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarFloatingExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarFloatingExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'temperature-range' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Temperature range by month');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose the floating series through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Month');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Temperature range']);

    await dataTable.close();
  });
});
```

### Floating bar chart with multiple series

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SkyChart,
  SkyChartAxisCategory,
  SkyChartAxisValue,
  SkyChartBar,
  SkyChartBarSeries,
  type SkyChartBarSeriesValue,
} from '@skyux/charts';

/**
 * @title Floating bar chart with multiple series
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-floating-multiple-series-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarFloatingMultipleSeriesExample {
  protected readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  protected readonly anchorage: SkyChartBarSeriesValue[] = [
    [-13, -6],
    [-11, -3],
    [-7, 1],
    [0, 8],
    [6, 14],
    [11, 18],
  ];
  protected readonly asheville: SkyChartBarSeriesValue[] = [
    [-3, 8],
    [-1, 11],
    [3, 15],
    [7, 20],
    [12, 24],
    [16, 28],
  ];
}
```

#### example.html

```html
<sky-chart data-sky-id="temperature-range-by-city" headingText="Temperature range by month and city">
  <sky-chart-bar>
    <sky-chart-axis-category labelText="Month" [categories]="months" />
    <sky-chart-axis-value labelText="Temperature (°C)" />
    <sky-chart-bar-series labelText="Anchorage" [values]="anchorage" />
    <sky-chart-bar-series labelText="Asheville" [values]="asheville" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarFloatingMultipleSeriesExample } from './example';

describe('Floating multiple series bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarFloatingMultipleSeriesExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarFloatingMultipleSeriesExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'temperature-range-by-city' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Temperature range by month and city');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose both floating series through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Month');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Anchorage', 'Asheville']);

    await dataTable.close();
  });
});
```

### Bar chart with hidden axis labels

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Bar chart with hidden axis labels
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-hidden-labels-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarHiddenLabelsExample {
  protected readonly years = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
  protected readonly acquisitions = [10, 20, 15, 25, 22, 30, 28];
}
```

#### example.html

```html
<sky-chart data-sky-id="acquisitions-by-year-minimal" headingText="Acquisitions by year">
  <sky-chart-bar>
    <sky-chart-axis-category labelHidden labelText="Year" [categories]="years" />
    <sky-chart-axis-value labelHidden labelText="Acquisitions" />
    <sky-chart-bar-series labelText="Acquisitions by year" [values]="acquisitions" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarHiddenLabelsExample } from './example';

describe('Hidden axis labels bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarHiddenLabelsExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarHiddenLabelsExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'acquisitions-by-year-minimal' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Acquisitions by year');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should still label the axes in the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Year');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Acquisitions by year']);

    await dataTable.close();
  });
});
```

### Bar chart with a logarithmic value scale

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Bar chart with a logarithmic value scale
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-logarithmic-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarLogarithmicExample {
  protected readonly categories = [
    'Cat-1',
    'Cat-2',
    'Cat-3',
    'Cat-4',
    'Cat-5',
    'Cat-6',
    'Cat-7',
    'Cat-8',
    'Cat-9',
    'Cat-10',
    'Cat-11',
    'Cat-12',
    'Cat-13',
  ];
  protected readonly values = [1, 1.1, 1.9, 2.1, 4.9, 5.1, 9, 11, 90, 110, 900, 1100, 9000];
}
```

#### example.html

```html
<sky-chart data-sky-id="spending-by-category" headingText="Spending by category">
  <sky-chart-bar>
    <sky-chart-axis-category labelText="Category" [categories]="categories" />
    <sky-chart-axis-value labelText="Spending" scaleType="logarithmic" />
    <sky-chart-bar-series labelText="Spending" [values]="values" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarLogarithmicExample } from './example';

describe('Logarithmic bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarLogarithmicExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarLogarithmicExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'spending-by-category' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Spending by category');
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose every category through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Category');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Spending']);
    await expectAsync(dataTable.getCategories().then((categories) => categories.length)).toBeResolvedTo(13);

    await dataTable.close();
  });
});
```

### Bar chart with fixed value bounds

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Bar chart with fixed value bounds
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-value-bounds-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarValueBoundsExample {
  protected readonly months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Percent values are fractional, so 0.85 displays as 85%. Pinning the axis
  // to [0, 1] keeps the scale at 0–100% regardless of the plotted values.
  protected readonly goalCompletion = [0.62, 0.71, 0.68, 0.79, 0.85, 0.91, 0.88];
}
```

#### example.html

```html
<sky-chart
  data-sky-id="goal-completion"
  headingText="Goal completion by month"
  subheadingText="The percent value axis is pinned to 0–100% with min and max, so the scale stays fixed regardless of the plotted values."
>
  <sky-chart-bar>
    <sky-chart-axis-category labelHidden labelText="Month" [categories]="months" />
    <sky-chart-axis-value format="percent" labelText="Goal completion" max="1" min="0" />
    <sky-chart-bar-series labelText="Goal completion" [values]="goalCompletion" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarValueBoundsExample } from './example';

describe('Fixed value bounds bar chart example', () => {
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarValueBoundsExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarValueBoundsExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'goal-completion' }));

    return { fixture, harness };
  }

  it('should render the chart with the expected heading and subheading', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Goal completion by month');
    await expectAsync(harness.getSubheadingText()).toBeResolvedTo(
      'The percent value axis is pinned to 0–100% with min and max, so the scale stays fixed regardless of the plotted values.',
    );
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should format the values as percentages in the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Month');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Goal completion']);
    await expectAsync(dataTable.getValues().then((rows) => rows[0][0])).toBeResolvedTo('62%');

    await dataTable.close();
  });
});
```

### Bar chart value formats (number, currency, and percent)

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

/**
 * @title Bar chart value formats (number, currency, and percent)
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-value-format-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarValueFormatExample {
  protected readonly months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  protected readonly acquisitions = [10, 20, 15, 25, 22, 30, 28];
  protected readonly revenue = [1000, 2200, 1800, 2600, 2400, 3100, 2900];

  // Percent values are fractional, so 0.25 displays as 25%.
  protected readonly conversionRate = [0.1, 0.14, 0.12, 0.18, 0.16, 0.22, 0.2];
}
```

#### example.html

```html
<sky-chart
  class="sky-theme-margin-bottom-l"
  data-sky-id="acquisitions-by-month"
  headingText="Acquisitions by month"
  subheadingText="Number format: values display as plain, locale-aware numbers."
>
  <sky-chart-bar>
    <sky-chart-axis-category labelHidden labelText="Month" [categories]="months" />
    <sky-chart-axis-value labelText="Acquisitions" />
    <sky-chart-bar-series labelText="Acquisitions" [values]="acquisitions" />
  </sky-chart-bar>
</sky-chart>

<sky-chart
  class="sky-theme-margin-bottom-l"
  data-sky-id="revenue-by-month"
  headingText="Revenue by month"
  subheadingText="Currency format: values display with the specified currency code (EUR)."
>
  <sky-chart-bar>
    <sky-chart-axis-category labelHidden labelText="Month" [categories]="months" />
    <sky-chart-axis-value currencyCode="EUR" digits="0" format="currency" labelText="Revenue" />
    <sky-chart-bar-series labelText="Revenue" [values]="revenue" />
  </sky-chart-bar>
</sky-chart>

<sky-chart
  data-sky-id="conversion-rate-by-month"
  headingText="Conversion rate by month"
  subheadingText="Percent format: fractional values display as percentages, so 0.25 shows as 25%."
>
  <sky-chart-bar>
    <sky-chart-axis-category labelText="Month" [categories]="months" />
    <sky-chart-axis-value format="percent" labelText="Conversion" />
    <sky-chart-bar-series labelText="Conversion rate" [values]="conversionRate" />
  </sky-chart-bar>
</sky-chart>
```

#### example.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarValueFormatExample } from './example';

describe('Value format bar chart example', () => {
  function setupTest(): { loader: HarnessLoader } {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarValueFormatExample);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    return { loader };
  }

  it('should render every value format as a separate chart', async () => {
    const { loader } = setupTest();

    const numberChart = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'acquisitions-by-month' }));
    const currency = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'revenue-by-month' }));
    const percent = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'conversion-rate-by-month' }));

    await expectAsync(numberChart.getHeadingText()).toBeResolvedTo('Acquisitions by month');
    await expectAsync(currency.getHeadingText()).toBeResolvedTo('Revenue by month');
    await expectAsync(percent.getHeadingText()).toBeResolvedTo('Conversion rate by month');
  });

  it('should render each chart plot', async () => {
    const { loader } = setupTest();

    const charts = await loader.getAllHarnesses(SkyChartHarness);

    expect(charts.length).toBe(3);

    for (const chart of charts) {
      const barHarness = await chart.queryHarness(SkyChartBarHarness);

      await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
    }
  });

  it('should format each axis format in the data table modal', async () => {
    const { loader } = setupTest();

    const numberChart = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'acquisitions-by-month' }));
    const numberTable = await numberChart.openDataTableModal();

    await expectAsync(numberTable.getSeriesLabels()).toBeResolvedTo(['Acquisitions']);
    await expectAsync(numberTable.getValues().then((rows) => rows[0][0])).toBeResolvedTo('10');

    await numberTable.close();

    const currency = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'revenue-by-month' }));
    const currencyTable = await currency.openDataTableModal();

    await expectAsync(currencyTable.getSeriesLabels()).toBeResolvedTo(['Revenue']);
    await expectAsync(currencyTable.getValues().then((rows) => rows[0][0])).toBeResolvedTo('€1,000');

    await currencyTable.close();

    const percent = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'conversion-rate-by-month' }));
    const percentTable = await percent.openDataTableModal();

    await expectAsync(percentTable.getSeriesLabels()).toBeResolvedTo(['Conversion rate']);
    await expectAsync(percentTable.getValues().then((rows) => rows[0][0])).toBeResolvedTo('10%');

    await percentTable.close();
  });
});
```

### Bar chart with asynchronously loaded data

#### example.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component, input, resource } from '@angular/core';
import { SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries } from '@skyux/charts';

interface ChartBarAsyncData {
  categories: string[];
  values: number[];
}

/**
 * @title Bar chart with asynchronously loaded data
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-bar-async-example',
  templateUrl: './example.html',
  imports: [SkyChart, SkyChartAxisCategory, SkyChartAxisValue, SkyChartBar, SkyChartBarSeries],
})
export class ChartsChartBarAsyncExample {
  // Simulate network latency.
  public readonly delay = input(1200);

  // A real SPA might use `httpResource` to load remote data. While reloading,
  // the resource keeps its previous value, so the chart stays rendered
  // beneath the wait overlay.
  protected readonly donations = resource({
    params: () => ({ delay: this.delay() }),
    loader: ({ params }) => fetchDonationsFromServer(params.delay),
  });
}

/**
 * Simulates a server-side call that returns the chart's data after a delay.
 */
async function fetchDonationsFromServer(delay: number): Promise<ChartBarAsyncData> {
  await new Promise((resolve) => setTimeout(resolve, delay));

  return {
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    values: [45, 72, 38, 90],
  };
}
```

#### example.html

```html
<button
  class="sky-btn sky-btn-default sky-theme-margin-bottom-s"
  type="button"
  [disabled]="donations.isLoading()"
  (click)="donations.reload()"
>
  Reload data
</button>
<sky-chart data-sky-id="donations-by-quarter" headingText="Donations by quarter" [loading]="donations.isLoading()">
  @if (donations.value(); as data) {
  <sky-chart-bar>
    <sky-chart-axis-category labelText="Quarter" [categories]="data.categories" />
    <sky-chart-axis-value format="currency" labelText="Donations" />
    <sky-chart-bar-series labelText="Donations" [values]="data.values" />
  </sky-chart-bar>
  }
</sky-chart>
```

#### example.spec.ts

```typescript
import { manualChangeDetection } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyChartBarHarness, SkyChartHarness } from '@skyux/charts/testing';
import { provideNoopSkyAnimations } from '@skyux/core';

import { ChartsChartBarAsyncExample } from './example';

describe('Async bar chart example', () => {
  // The harness loader waits for the fixture to stabilize, which resolves the
  // example's simulated server call, so the chart is loaded by the time a
  // harness is returned. The delay is set to 0 to keep the test fast.
  async function setupTest(): Promise<{
    fixture: ComponentFixture<ChartsChartBarAsyncExample>;
    harness: SkyChartHarness;
  }> {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarAsyncExample);
    fixture.componentRef.setInput('delay', 0);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
    const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'donations-by-quarter' }));

    return { fixture, harness };
  }

  it('should render the chart once the data resolves', async () => {
    const { harness } = await setupTest();

    await expectAsync(harness.getHeadingText()).toBeResolvedTo('Donations by quarter');
    await expectAsync(harness.isLoading()).toBeResolvedTo(false);
  });

  it('should show the loading state until the request resolves', async () => {
    TestBed.configureTestingModule({
      providers: [provideNoopSkyAnimations()],
    });

    const fixture = TestBed.createComponent(ChartsChartBarAsyncExample);
    fixture.componentRef.setInput('delay', 0);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    // Drive change detection manually so the CDK does not auto-stabilize the
    // fixture, which would resolve the simulated request before the loading
    // state can be observed.
    await manualChangeDetection(async () => {
      fixture.detectChanges();

      const harness = await loader.getHarness(SkyChartHarness.with({ dataSkyId: 'donations-by-quarter' }));

      await expectAsync(harness.isLoading()).toBeResolvedTo(true);

      // A pending timer keeps the zone unstable, so `whenStable` waits for the
      // simulated request to resolve without a fixed wall-clock delay.
      await fixture.whenStable();
      fixture.detectChanges();

      await expectAsync(harness.isLoading()).toBeResolvedTo(false);
    });
  });

  it('should render the bar chart plot', async () => {
    const { harness } = await setupTest();

    const barHarness = await harness.queryHarness(SkyChartBarHarness);

    await expectAsync(barHarness.isChartRendered()).toBeResolvedTo(true);
  });

  it('should expose the loaded data through the data table modal', async () => {
    const { harness } = await setupTest();

    const dataTable = await harness.openDataTableModal();

    await expectAsync(dataTable.getCategoryLabel()).toBeResolvedTo('Quarter');
    await expectAsync(dataTable.getSeriesLabels()).toBeResolvedTo(['Donations']);
    await expectAsync(dataTable.getCategories()).toBeResolvedTo(['Q1', 'Q2', 'Q3', 'Q4']);
    await expectAsync(dataTable.getValues()).toBeResolvedTo([['$45.00'], ['$72.00'], ['$38.00'], ['$90.00']]);

    await dataTable.close();
  });
});
```
