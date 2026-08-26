---
Title: Fluid grid
Reference: https://developer.blackbaud.com/skyux/components/fluid-grid
---

# Fluid grid

Fluid grids provide responsive 12-column layouts to organize content for all screen sizes.

## Usage

### Use when

Use fluid grids to organize content and containers into uniform columns that fill space responsively at different screen sizes.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/use-spacing.a6d3e499906ba0b18851096c54155bc2.png)

Do use fluid grids to visually align content and containers and to communicate relationships.

### Don't use when

Don't use fluid grids for padding on pages, including padding around page headers and other page content. Use the [page component](./page/README.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/dont-page.afdfb34aaad458c3a0de0109b8c0061d.png)

Don't use fluid grids for page padding. Use the page component instead.

## Anatomy

1

Row

2

Column

3

Gutter

4

Margin (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/anatomy.0cd885c62ebd0e84a904a12e3f32754d.png)

## Options

### Margin

When you use fluid grids in containers that already include padding, turn off the fluid grid's outer margin using `disableMargin` to avoid double padding. For example, turn off the margin for [boxes](./box.md), [modals](./modal.md), layouts in [pages](./page/README.md) and [tabs](./tabs.md), and [tiles](./tile.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/disable-margin-tile.086d3b10a05feb4584c2d0dfb7f6caa4.png)

Disable margins when fluid grids are in containers that include padding.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/disable-margin-page.80010c9832febc49b40d87d77415f90c.png)

Disable margins in blocks layouts where fluid grids display containers or other content.

### Gutter size

#### Small

Use `small` gutters to separate content with visible borders within containers. For example, use `small` gutters to separate side-by-side [input boxes](./input-box.md) in [modals](./modal.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/size-s.b325e14fb584549a4ba56d75d260f9b4.png)

Use small gutters to separate input boxes in horizontal layouts. Inputs can use unbalanced column widths to match highly predictable lengths of user input.

#### Medium

Use `medium` gutters to separate containers with visible borders within large content areas, such as [pages](./page/README.md). For example, use `medium` gutters to separate [boxes](./box.md) on pages.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/size-m-containers.d38735cac659145b5ca9156fafd86032.png)

Use medium gutters to separate boxes within a page.

#### Large

Use `large` gutters to separate columns of content within containers and large content areas when the content doesn't have visible borders. For example, use `large` gutters to separate columns of content on [pages](./page/README.md) or [split view workspaces](./split-view.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/size-l-content-groups.31e7a474dbd4b0d14c0353d2e54227c7.png)

Use large gutters to separate columns of content within content containers.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/size-l-content-containers.eb8e8d6abd58819515419020458b766f.png)

Use large gutters to separate columns of content within containers.

Use `large` gutters within [pages](./page/README.md) to separate columns of content from containers. This visual separation indicates that the columns of content and containers aren't grouped together.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/size-l-border-non-border.1b1864db724671d3ab97daa3409bf9db.png)

Use large gutters within pages to separate columns of content from containers.

### Fluid grid columns

Fluid grids provide responsive 12-column layouts, and within each row, columns can use 1 to 12 fluid grid columns. For example, a column can use 6 fluid grid columns to span half of a row's width or use 4 fluid grid columns to span one-third of its width.

To specify the width of a column within a row, specify a number from 1 to 12 to indicate the number of fluid grid columns it spans. To support responsive layouts, you can set different values for different breakpoints, as described below.

## Layout

### Responsive patterns

To create responsive layouts, use the column drop pattern. It starts with a multi-column layout and uses the full width of the screen to display columns horizontally. As screens get narrower, it stacks columns vertically based on the content and on the settings specified for different breakpoints.

For example, a page can have a fluid grid row with three columns where `screenXSmall="12"` and `screenSmall="4"`. At screen sizes larger than the extra small breakpoint, each column spans one-third of the row's width. And at the extra small breakpoint, each column spans the full width of the row and stacks vertically.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/page-three-column-full.0e711dadbb81c380800fc229f1a3ee7c.png)

Horizontal columns at a viewport larger than the extra small breakpoint.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/page-three-column-mobile.433883ef6f1df0774b187030299c0f07.png)

Vertically stacked columns at the extra small breakpoint.

Within containers, content in a fluid guid adjusts as the size of the viewport changes. For example, a container with a repeater can use a fluid grid to display horizontal columns at larger screen sizes and to stack columns vertically when the container hits the extra small breakpoint.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/repeater-content-full.c6445aecc38324a0a903bc9b2fd924e4.png)

Horizontal columns in a repeater at larger screen sizes.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/repeater-content-mobile.9643ab3a79e8085539eb3537b1fb5fe5.png)

Vertically stacked columns in a repeater at the extra small breakpoint.

## Related information

### Components

- [Box](./box.md)
- [Modal](./modal.md)
- [Page](./page/README.md)
- [Split view](./split-view.md)
- [Tabs](./tabs.md)
- [Tile](./tile.md)

### Guidelines

- [Form design](../design/guidelines/form-design.md)
- [Page design](../design/guidelines/page-layouts/README.md)
- [Responsiveness](../design/styles/responsiveness.md)
- [Spacing](../design/styles/spacing.md)

## Installation

NPM package

`@skyux/layout`[View in NPM](https://www.npmjs.com/package/@skyux/layout) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/layout/src/lib/modules/fluid-grid/fluid-grid.module.ts#L13)

Install with NPM

`npm install --save-exact @skyux/layout`

## SkyFluidGridModule

Type: Module

`import { SkyFluidGridModule } from '@skyux/layout';`

## SkyFluidGridComponent

Type: Component

Selector: `sky-fluid-grid`

Wraps the fluid grid to ensure proper spacing. Without the wrapper, the alignment, padding, and margins do not behave as expected.

### Inputs

#### `disableMargin: boolean | undefined`

Disables the outer left and right margin of the fluid grid container.

Default: `false`

#### `gutterSize: SkyFluidGridGutterSizeType`

The type that defines the size of the padding between columns.

Default: `"large"`

## SkyRowComponent

Type: Component

Selector: `sky-row`

Displays a row within the `sky-fluid-grid` wrapper. Previously, you could display a row without a wrapper, but we no longer officially support that option.

### Inputs

#### `reverseColumnOrder: boolean | undefined`

Whether to reverse the display order for columns in the row.

Default: `false`

## SkyColumnComponent

Type: Component

Selector: `sky-column`

Displays a column within a row of the fluid grid.

### Inputs

#### `screenLarge: number | undefined`

The number of columns (1-12) on large screens (more than 1200px). If you do not specify a value, the column inherits the `screenMedium` value.

#### `screenMedium: number | undefined`

The number of columns (1-12) on medium screens (992-1199px). If you do not specify a value, the column inherits the `screenSmall` value.

#### `screenSmall: number | undefined`

The number of columns (1-12) on small screens (768-991px). If you do not specify a value, the column inherits the `screenXSmall` value.

#### `screenXSmall: number`

The number of columns (1-12) on extra-small screens (less than 768px). If you do not specify a value, the fluid grid displays the column at the full width of the screen.

Default: `12`

## SkyFluidGridGutterSizeType

Type: Type alias

    type SkyFluidGridGutterSizeType = "small" | "medium" | "large"

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyFluidGridHarness

Type: Class

`import { SkyFluidGridHarness } from '@skyux/layout/testing';`

Harness for interacting with a fluid grid component in tests.

### Methods

#### `getGutterSize(): Promise<string>`

Gets the gutter size for the grid.

#### Returns

`Promise<string>`

#### `getRows(): Promise<SkyRowHarness[]>`

Gets all of the rows in the grid.

#### Returns

`Promise<SkyRowHarness[]>`

#### `hasMargin(): Promise<boolean>`

Whether the fluid grid has margin enabled.

#### Returns

`Promise<boolean>`

#### `SkyFluidGridHarness.with(filters: SkyFluidGridHarnessFilters): HarnessPredicate<SkyFluidGridHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyFluidGridHarness` that meets certain criteria

#### Parameters

##### `filters: SkyFluidGridHarnessFilters`

#### Returns

`HarnessPredicate<SkyFluidGridHarness>`

## SkyFluidGridHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyFluidGridHarness` instances.

    interface SkyFluidGridHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyRowHarness

Type: Class

`import { SkyRowHarness } from '@skyux/layout/testing';`

Harness for interacting with a fluid grid column component in tests.

### Methods

#### `getColumnOrder(): Promise<string>`

Gets the ordering of the columns in the row.

#### Returns

`Promise<string>`

#### `getColumns(): Promise<SkyColumnHarness[]>`

Gets all of the columns in the row.

#### Returns

`Promise<SkyColumnHarness[]>`

#### `SkyRowHarness.with(filters: SkyRowHarnessFilters): HarnessPredicate<SkyRowHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyRowHarness` that meets certain criteria

#### Parameters

##### `filters: SkyRowHarnessFilters`

#### Returns

`HarnessPredicate<SkyRowHarness>`

## SkyRowHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyRowHarness` instances.

    interface SkyRowHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyColumnHarness

Type: Class

`import { SkyColumnHarness } from '@skyux/layout/testing';`

Harness for interacting with a fluid grid column component in tests.

### Methods

#### `getLargeSize(): Promise<number>`

Gets the size of the column in a Large responsive context.

#### Returns

`Promise<number>`

#### `getMediumSize(): Promise<number>`

Gets the size of the column in a Medium responsive context.

#### Returns

`Promise<number>`

#### `getSmallSize(): Promise<number>`

Gets the size of the column in a Small responsive context.

#### Returns

`Promise<number>`

#### `getXSmallSize(): Promise<number>`

Gets the size of the column in an XSmall responsive context.

#### Returns

`Promise<number>`

#### `SkyColumnHarness.with(filters: SkyColumnHarnessFilters): HarnessPredicate<SkyColumnHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyColumnHarness` that meets certain criteria

#### Parameters

##### `filters: SkyColumnHarnessFilters`

#### Returns

`HarnessPredicate<SkyColumnHarness>`

## SkyColumnHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of `SkyColumnHarness` instances.

    interface SkyColumnHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## Code Examples

### Fluid grid with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyFluidGridGutterSizeType, SkyFluidGridModule } from '@skyux/layout';

/**
 * @title Fluid grid with basic setup
 */
@Component({
  selector: 'app-layout-fluid-grid-example',
  templateUrl: './example.component.html',
  styles: [
    `
      .highlight-columns .sky-column {
        background-color: #97eced;
        border: 1px solid #56e0e1;
        overflow-wrap: break-word;
      }
    `,
  ],
  imports: [SkyFluidGridModule],
})
export class LayoutFluidGridExampleComponent {
  public gutterSize: SkyFluidGridGutterSizeType | undefined;
  public disableMargin = false;
}
```

#### example.component.html

```html
<div class="highlight-columns">
  <sky-fluid-grid data-sky-id="fluid-grid" [disableMargin]="disableMargin" [gutterSize]="gutterSize">
    <sky-row data-sky-id="test-row">
      <sky-column data-sky-id="test-column" [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="3"> [screenSmall]="3" </sky-column>
      <sky-column [screenSmall]="3"> [screenSmall]="3" </sky-column>
      <sky-column [screenSmall]="3"> [screenSmall]="3" </sky-column>
      <sky-column [screenSmall]="3"> [screenSmall]="3" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="4"> [screenSmall]="4" </sky-column>
      <sky-column [screenSmall]="4"> [screenSmall]="4" </sky-column>
      <sky-column [screenSmall]="4"> [screenSmall]="4" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="5"> [screenSmall]="5" </sky-column>
      <sky-column [screenSmall]="7"> [screenSmall]="7" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="6"> [screenSmall]="6" </sky-column>
      <sky-column [screenSmall]="6"> [screenSmall]="6" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="8"> [screenSmall]="8" </sky-column>
      <sky-column [screenSmall]="4"> [screenSmall]="4" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="9"> [screenSmall]="9" </sky-column>
      <sky-column [screenSmall]="3"> [screenSmall]="3" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="10"> [screenSmall]="10" </sky-column>
      <sky-column [screenSmall]="2"> [screenSmall]="2" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column [screenSmall]="11"> [screenSmall]="11" </sky-column>
      <sky-column [screenSmall]="1"> [screenSmall]="1" </sky-column>
    </sky-row>

    <sky-row>
      <sky-column
        data-sky-id="dynamic-column"
        [screenXSmall]="6"
        [screenSmall]="8"
        [screenMedium]="9"
        [screenLarge]="10"
      >
        [screenXSmall]="6" [screenSmall]="8" [screenMedium]="9" [screenLarge]="10"
      </sky-column>
      <sky-column [screenXSmall]="6" [screenSmall]="4" [screenMedium]="3" [screenLarge]="2">
        [screenXSmall]="6" [screenSmall]="4" [screenMedium]="3" [screenLarge]="2"
      </sky-column>
    </sky-row>

    <sky-row data-sky-id="reverse-row" [reverseColumnOrder]="true">
      <sky-column [screenSmall]="4"> First column </sky-column>
      <sky-column [screenSmall]="4"> Second column </sky-column>
      <sky-column [screenSmall]="4"> Third column </sky-column>
    </sky-row>
  </sky-fluid-grid>
</div>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyColumnHarness, SkyFluidGridHarness, SkyRowHarness } from '@skyux/layout/testing';

import { LayoutFluidGridExampleComponent } from './example.component';

describe('Basic fluid grid', () => {
  async function setupTest(): Promise<{
    fluidGridHarness: SkyFluidGridHarness;
    fixture: ComponentFixture<LayoutFluidGridExampleComponent>;
    loader: HarnessLoader;
  }> {
    const fixture = TestBed.createComponent(LayoutFluidGridExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const fluidGridHarness = await loader.getHarness(
      SkyFluidGridHarness.with({
        dataSkyId: 'fluid-grid',
      }),
    );

    return { fluidGridHarness, fixture, loader };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutFluidGridExampleComponent],
    });
  });

  it('should display the correct fluid grid', async () => {
    const { fluidGridHarness, fixture } = await setupTest();

    fixture.detectChanges();

    const rows = await fluidGridHarness.getRows();

    expect(rows.length).toEqual(12);
  });

  it('should indicate the grid has margins', async () => {
    const { fluidGridHarness, fixture } = await setupTest();

    fixture.detectChanges();

    await expectAsync(fluidGridHarness.hasMargin()).toBeResolvedTo(true);

    fixture.componentInstance.disableMargin = true;
    fixture.detectChanges();

    await expectAsync(fluidGridHarness.hasMargin()).toBeResolvedTo(false);
  });

  it('should get the gutter size', async () => {
    const { fluidGridHarness, fixture } = await setupTest();

    fixture.detectChanges();

    await expectAsync(fluidGridHarness.getGutterSize()).toBeResolvedTo('large');

    fixture.componentInstance.gutterSize = 'medium';
    fixture.detectChanges();

    await expectAsync(fluidGridHarness.getGutterSize()).toBeResolvedTo('medium');

    fixture.componentInstance.gutterSize = 'small';
    fixture.detectChanges();

    await expectAsync(fluidGridHarness.getGutterSize()).toBeResolvedTo('small');
  });

  it('should get the correct row harness', async () => {
    const { fixture, loader } = await setupTest();
    const rowHarness = await loader.getHarness(SkyRowHarness.with({ dataSkyId: 'test-row' }));

    fixture.detectChanges();

    const columns = await rowHarness.getColumns();

    expect(columns.length).toEqual(12);
    await expectAsync(rowHarness.getColumnOrder()).toBeResolvedTo('normal');
  });

  it('should get the row direction from the row harness', async () => {
    const { fixture, loader } = await setupTest();
    const rowHarness = await loader.getHarness(SkyRowHarness.with({ dataSkyId: 'reverse-row' }));

    fixture.detectChanges();

    await expectAsync(rowHarness.getColumnOrder()).toBeResolvedTo('reverse');
  });

  it('should get the correct column harness', async () => {
    const { fixture, loader } = await setupTest();
    const columnHarness = await loader.getHarness(SkyColumnHarness.with({ dataSkyId: 'test-column' }));

    fixture.detectChanges();

    await expectAsync(columnHarness.getXSmallSize()).toBeResolvedTo(12);
    await expectAsync(columnHarness.getLargeSize()).toBeResolvedTo(1);
  });

  it('should get the column sizes from the column harness', async () => {
    const { fixture, loader } = await setupTest();
    const columnHarness = await loader.getHarness(SkyColumnHarness.with({ dataSkyId: 'dynamic-column' }));

    fixture.detectChanges();

    await expectAsync(columnHarness.getXSmallSize()).toBeResolvedTo(6);
    await expectAsync(columnHarness.getSmallSize()).toBeResolvedTo(8);
    await expectAsync(columnHarness.getMediumSize()).toBeResolvedTo(9);
    await expectAsync(columnHarness.getLargeSize()).toBeResolvedTo(10);
  });
});
```
