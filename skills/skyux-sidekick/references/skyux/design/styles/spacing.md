---
Title: Spacing
Reference: https://developer.blackbaud.com/skyux/design/styles/spacing
---

# Spacing

This API was significantly updated in SKY UX 14. For the previous version, see the SKY UX 13 docs.

## Spacing system basics

The SKY UX spacing system defines how space communicates structure, hierarchy, and meaning across products. Spacing is built on a rem-based (8pt) scale that ensures consistency, accessibility, and predictable behavior across devices and contexts.

Components handle spacing intrinsically wherever possible so that common patterns feel cohesive and effortless out of the box. Spacing guidelines help designers and engineers use spacing flow to express relationships between elements in a consistent, intentional way when composing content in containers and page sections. Spacing principles ensure that spacing is not just visual decoration and that it provides a shared language that articulates content and layout.

## Page-level spacing

The [page component](../../components/page/README.md) supports standardized layouts and spacing for the main page elements. This creates a consistent, harmonious visual display when users navigate between pages.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/page-blocks-layout.f7860be5c278dda0278b434cb0de2dec.png)

Do use the page component for consistent page padding and layouts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xs-page-layout-blocks.c9aeb0e4887ffcbdfb9c4ff81c3f0143.png)

Do use the page component to automatically adjust padding for different screen sizes.

## Page layouts and regions

Use [tile dashboards](../../components/tile.md) and [fluid grids](../../components/fluid-grid.md) for the layout of containers and large content areas. Both respond to changes in the screen sizes and viewports. They provide consistent spacing at the edges and between columns. Columns are fluid, but spacing is constant.

When choosing a layout, consider the type of content and how users interact with it. For pages with dynamic or time-sensitive content, organize containers to emphasize tasks and optimize space usage across screen sizes. For pages that primarily display information, preserve the relative position of containers to support scanning and comprehension.

Tile dashboards and fluid grids support responsive layouts. When building page layouts, account for different screen sizes and viewports to ensure the intended structure is maintained across breakpoints. For breakpoint behavior and layout rules, see the [tile](../../components/tile.md) and [fluid grid](../../components/fluid-grid.md) documentation.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/container-fluid-grid-responsive.ac64262a2c1d84492279adadea90c4f5.png)

Containers in fluid grids respond to different screen sizes and viewports.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/container-height.2c6241666b68fba8dd83b495033a5b95.png)

Containers stacked in columns have different heights based on their contents.

## Container padding

Containers require padding to set content apart from their edges. The amount of padding depends on the container size. In general, SKY UX components handle padding. If you need to apply spacing classes manually within elements, only use uniform container padding explicitly when you are creating a custom container surface.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/container-padding.23a90c2bc7b4e52aebd45564027a14c1.png)

Do use padding classes for even spacing around the inside edges of containers.

### Extra small and small

Extra small and small container padding is typically applied to nested containers within another padded region. The content is already visually separated by the surrounding structure, and this padding helps maintain internal clarity without compounding whitespace.

Example:

- [Alert](../../components/alert.md)

### Medium

Medium container padding helps create a comfortable reading boundary without elevating a container's visual weight. It typically is used within secondary or supporting content regions or containers that don't sit directly against the viewport edge, such as [alerts](../../components/alert.md) and [toasts](../../components/toast.md).

Examples:

- [Split view](../../components/split-view.md) content panel
- [Tab](../../components/tabs.md) content panel

### Large and extra large

Large and extra-large container padding establishes a strong internal boundary so that content does not feel constrained or edge-bound. It's typically used within containers or content regions that act as a primary content region or surface, such the content panel on [split view page layouts](../guidelines/page-layouts/split-view-page.md) . These containers are visually prominent and tend to house a large amount of cotent.

Large example:

- [Popover](../../components/popover.md)

Extra large examples:

- [Action button](../../components/action-button.md)
- [Box](../../components/box.md)
- [Flyout](../../components/flyout.md) content panel
- [Modal](../../components/modal.md) content panel
- [Tile](../../components/tile.md)

The guidelines that follow apply to dense, structured content compositions within containers and regions to support tasks and workflows. They don't apply to long-form, narrative, or editorial page layouts for reading, reference, or promotion.

## Spacing within content regions

Intra-content spacing applies to content within containers or other bounded content regions that make up a page layout. Within these regions, spacing communicates continuity, grouping, and separation between elements. Spacing is applied based on how content is related, not solely on element type.

The guidance below focuses on applying vertical and horizontal spacing within content regions, such as panels, boxes, and data grid cells. It doesn't address component chrome, such as box headers, which manage their own structural spacing. Apply these patterns consistently and explicitly wherever possible.

### Spacing values

Spacing between elements indicates how closely related the elements are. The closer the relationship, the less spacing is required. The available spacing values are: None, Extra small, Small, Medium, Large, Extra large, and Extra, extra large. None only applies to vertical spacing, while Medium and Extra, extra large only apply to horizontal spacing.

Apply spacing between adjacent block-level elements in a content region. The vertical or horizontal orientation of the content determines which spacing values to use. For each orientation, a matrix defines the exact spacing to apply for common content patterns. For consistent, predictable results, follow these patterns.

Components that manage their own internal spacing are treated as a single block and are not subdivided by these rules.

## Vertical spacing

Vertical spacing controls the space between stacked elements in a content region. It establishes a visual hierarchy and reading flow by increasing or decreasing space based on how closely related elements are. Apply vertical spacing between adjacent block-level elements based on the following guidance:

<table>
  <tbody>
    <tr>
      <th>
Spacing value
</th>
      <th>
Usage
</th>
      <th>
Separates
</th>
    </tr>
    <tr>
      <td>

**None**

</td>
      <td>

**Single entity**

Use with elements that form a single semantic entity.

</td>
      <td>

- Labels and values
- Names and addresses

</td>
    </tr>
    <tr>
      <td>

**Extra small**

</td>
      <td>

**Bound unit**

Use with properties or information about a single subject.

</td>
      <td>

- Small sets of information about an entity, such as identifying text and its metadata, supplemental details, or status information
- Small headings (H4, H5) and content

</td>
    </tr>
    <tr>
      <td>

**Small**

</td>
      <td>

**Group**

Use with closely related elements in the same group.

</td>
      <td>

- Homogenous items in a set, such as links in a list
- Headings (H2, H3) and content

</td>
    </tr>
    <tr>
      <td>

**Large**

</td>
      <td>

**Section**

Use with distinct, peer groups of content.

</td>
      <td>

- Sections and headings
- Distinct or heterogenous content related to a parent group

</td>
    </tr>
    <tr>
      <td>

**Extra large**

</td>
      <td>

**Separation**

Use with loosely related regions in a container or with content and container-level actions to create a strong separation.

</td>
      <td>

- New or distinct content from other content
- Elements set off for more attention within a container, such as drill-in links

</td>
    </tr>
  </tbody>
</table>

### None

Use no spacing classes when elements form a single semantic entity that should read as one phrase or concept without visual separation. Spacing classes aren't needed when elements form a single, vertically oriented unit. Apply between:

- Labels and values
- Names and addresses

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/none-vertical.62d093fc4e823cf58e5ba503733c5bbd.png)

Do use no spacing for single semantic entities.

### Extra small

Use extra small spacing classes when adjacent elements form a bound relationship within the same object. Apply between:

- Small sets of information about an entity, such as identifying text and its metadata, supplemental details, or status information
- Small headings (H4, H5) and content

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xs-vertical.cb117d20d5b1eb1ec0699c8293925ad4.png)

Do use extra small spacing for closely related elements that form a bound unit.

### Small

Use small spacing classes as the default spacing flow when elements belong to the same group and contribute equally to the meaning. Apply between:

- Homogenous items in a set, such as links in a list, [description list](../../components/description-list.md) pairs, and [key info](../../components/key-info.md) items
- Headings (H2, H3) and content

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/s-vertical.0bd91c10591093a76d126ced9369b72c.png)

Do use content spacing when elements belong to the same content group and contribute equally to its meaning.

### Large

Use large spacing classes when distinct peer sections of content appear in a container or page section. Apply between:

- Sections and headings
- Distinct or heterogenous content related to a parent group

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/l-vertical-1.bc7605bd8c9562dfe3271a599ee81f06.png)

Do use section spacing to separate distinct content groups that don't belong to the same continuous content flow.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/l-vertical-2.d264126fec5a8b3c213d5b7ffc81f7ca.png)

Don't use section spacing to articulate close relationships

### Extra large

Use extra large spacing classes when a strong separation is required for loosely related regions in a container or for content and container-level actions. Apply between:

- New or distinct content from other content
- Elements set off for more attention within a container, such as drill-in links

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xl-vertical.de457dd9c7a55b256478f6589512eda4.png)

Do separate drill-in links from content groups using extra large spacing to signal a transition from reading content to taking action.

## Horizontal spacing

Horizontal spacing controls the space between side-by-side elements in a content region. It visually conveys the strength of the connection between related elements that are adjacent. SKY UX supports two horizontal spacing approaches that can be used together:

1.  Use [fluid grids](../../components/fluid-grid.md) to structure responsive page-level and container-level layouts.
2.  Use inline spacing classes with native CSS responsive frameworks, such as Flexbox, to apply consistent horizontal spacing between elements.

### Horizontal spacing with fluid grid

Use [fluid grids](../../components/fluid-grid.md) to organize content groups into defined sections, such as columns, in containers that already have padding.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/horizontal-fluid-grid.f71aff8dc0bbfe9eb0c7115392f8a80c.png)

Do use fluid grids to horizontally separate content into equally distributed columns.

### Fluid grid spacing application by size

Fluid grid spacing application by size defines how gutter sizes control the horizontal separation between columns and content groups. Select gutter sizes based on the relationship between adjacent content and the visual density of the layout. The guidance below describes when to use each gutter size and how it affects content grouping, alignment, and readability within fluid grid layouts.

### Small gutters

Use small gutters to separate content in containers, such as modals, when the content has visible borders. For example, use small gutters between side-by-side input boxes.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/small-gutters.d831890825534b7156a4190bc5058dc3.png)

Do use small gutters to separate content with visible borders, such as input boxes, in horizontal layouts.

### Medium gutters

Use medium gutters to separate containers with visible borders within large content areas, such as pages. For example, use medium gutters to separate boxes on pages.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/fluid-grid/size-m-containers.d38735cac659145b5ca9156fafd86032.png)

Do use medium gutters to separate containers with visible borders within large content areas.

### Large gutters

Use large gutters to separate content or containers in large areas, such as pages and split view workspaces, when the content or containers don't have visible borders.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/large-gutters-1.88d1186989c541fb91d6e2cc8605a7dd.png)

Do use large gutters to separate containers without visible borders.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/large-gutters-2.695effc8a2f06efff4448f7f66e7e3cf.png)

Do use large gutters to separate content in large areas

### Disable margin for fluid grid in containers

When fluid grids are inside containers that include padding, turn off the outer margin for the fluid grids using `disableMargin`.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/disable-margin.f9f9386fb9666906dd26674448364115.png)

Disable margins when fluid grids are in containers that include padding.

### Horizontal spacing with inline spacing classes

When content widths are static and don't change with the width of their container or content region, use inline spacing classes instead of fluid grid. The class to apply depends on the relationship between elements. Like vertical spacing, horizontal spacing communicates relationships and indicates how tightly related elements should read as a unit, even as visual footprint changes.

<table>
  <tbody>
    <tr>
      <th>
Spacing value
</th>
      <th>
Usage
</th>
      <th>
Separates
</th>
    </tr>
    <tr>
      <td>

**Extra small**

</td>
      <td>

**Single entity (inline)**

Use with properties or information that reads as a single unit.

</td>
      <td>

- Labels and values
- Small/medium icons and single-line labels

</td>
    </tr>
    <tr>
      <td>

**Small**

</td>
      <td>

**Tight pairing**

Use with elements for strong visual pairing.

</td>
      <td>

- Small/medium icons and multiple lines of stacked text

</td>
    </tr>
    <tr>
      <td>

**Medium**

</td>
      <td>

**Pairing**

Use with elements for visual pairing.

</td>
      <td>

- Small spot illustrations and labels
- Large icons and labels

</td>
    </tr>
    <tr>
      <td>

**Large**

</td>
      <td>

**Loose pairing**

Use with larger illustrative elements and text for pairing with increased visual separation.

</td>
      <td>

- Medium/large spot illustrations and labels

</td>
    </tr>
    <tr>
      <td>

**Extra large**

</td>
      <td>

**Grouped sections**

Use with related regions or groups of content in a container for visual separation.

</td>
      <td>

- Extra large spot illustrations and text
- Horizontally oriented label and value pairs

</td>
    </tr>
    <tr>
      <td>

**Extra, extra large**

</td>
      <td>

**Distinct sections**

Use with elements or regions that are conceptually related for a stronger visual boundary.

</td>
      <td>

- Distinct peer content groups
- Vertically oriented label and value pairs

</td>
    </tr>
  </tbody>
</table>

### Extra small

Use extra small inline spacing classes when adjacent elements form a bound relationship in the same group, such as small icons and a single line of text. Apply between:

- Labels and values
- Small or medium icons and single-line labels

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xs-horizontal.b4b733184c458be5b32715ebfd48b2ed.png)

Do use extra small inline spacing between strongly bonded elements.

### Small

Use small inline spacing classes when tight pairing is necessary to visually link smaller UI elements. Apply between:

- Small or medium icons and multiple lines of stacked text

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/s-horizontal-1.5cfcfb12fa59a14f9b1a4e11789428b8.png)

Do use small inline spacing to tightly pair UI elements.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/s-horizontal-2.fb07eb0100fc814ff80f110eddcf770d.png)

Do use small inline spacing to distinguish multiple larger UI elements from each other while remaining visually linked.

### Medium

Use medium inline spacing classes when you need to distinguish large UI elements from each other while still visually linking them. Apply between:

- Large icons and labels
- Small spot illustrations and labels

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/m-horizontal-1.f00b01e4c076baccc9152565df60a81c.png)

Do use medium inline spacing to distinguish multiple larger UI elements from each other while still visually linking them.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/m-horizontal-2.c93c6b80e88c2e00619513e965f197a7.png)

Do use medium inline spacing to distinguish multiple larger UI elements from each other while still visually linking them.

### Large

Use large inline spacing classes when larger UI elements need visual separation but remain loosely linked. Apply between:

- Medium or large spot illustrations and text

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/l-horizontal.6b866c4cf5b348cf346c9088799cc1b7.png)

Do use large inline spacing to distinguish medium or large spot illustrations from other content.

### Extra large

Use extra large inline spacing classes when visual separation is necessary between content sections within a container or region. Apply between:

- Extra large spot illustrations and text
- Horizontally oriented label and value pairs

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xl-horizontal-1.88331994b2de0ec0b581722f1faaf6a5.png)

Do use extra large inline spacing to distinguish extra large spot illustrations from other content.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xl-horizontal-2.1e0f0345ae22edee94b7bc070eb75b49.png)

Do use extra large inline spacing to separate horizontally oriented label and value pairs.

### Extra, extra large

Use extra, extra large inline spacing classes when borderless sections of loosely related content or sections of unrelated content require separation. This prevents them from running together visually. Apply between:

- Distinct peer content groups
- Vertically oriented label and value pairs

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xxl-horizontal-1.a2511d3dbc294ca5d7dd25b2b92875b7.png)

Do use extra, extra large inline spacing for strong boundaries that separate distinct peer groups of content within a container.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/xxl-horizontal-2.fa6d06e7dd8d50c63c705d3addd66d82.png)

Do use extra, extra large inline spacing for strong boundaries that separate vertically oriented label and value pairs.

## Example compositions

Full container content visual examples using vertical spacing values:

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/example-1.0660ffcfbac7c872bc327aaa2147e38c.png)

Example of a composed container showing how the full spacing hierarchy works together to express content relationships.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/example-2.311d0fa54314977541555ec9e4e95d78.png)

Example of a composed container showing how the full spacing hierarchy works together to express content relationships.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/example-3.815da868d9d7baf444632de1c30ddc5e.png)

Example of a composed container showing how the full spacing hierarchy works together to express content relationships.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/example-4.b7cee7101efe1e78be1373e0b6fff693.png)

Example of a composed container showing how the full spacing hierarchy works together to express content relationships.

## Form spacing

Form fields generally flow vertically, and [input boxes](../../components/input-box.md) and other SKY UX form field components provide styling, ordering, and positioning within forms. To add bottom margins that ensure consistent vertical spacing between form fields, use vertical `margin-bottom` spacing in most cases. For more information about form construction and patterns, see the [SKY UX form design guidelines](../guidelines/form-design.md).

**Don't use stacked when a form field:**

- Is the last field before a [field group](../../components/field-group.md)
- Is the last field on a form
- Is followed by one or more conditional fields. Use `sky-theme-margin-bottom-s` instead for closely related fields.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/form-spacing.401b024f3fd4cbbbccbd905661a3bd83.png)

### Vertical spacing in forms

#### Field groups

To separate forms into groups or sections, use [field groups](../../components/field-group.md). This wraps form fields in semantic and visual groups with headings.

#### Applying vertical spacing in forms

Forms are dense, content-rich UI compositions, which amplifies the vertical tightness. SKY UX components handle spacing in forms. For more information, see the documentation for specific components.

For guidance on adding non-form control content to a form, see the [content container guidelines](../guidelines/content-containers.md).

### Applying horizontal spacing in forms

On small, medium, and large modals, form fields should generally extend the full width of the modal. The most common exception is closely related fields, such as street address and ZIP code fields, that can flow horizontally. Use a [fluid grid](../../components/fluid-grid.md) layout with small gutters for these fields to provide horizontal margins and ensure that the form scales properly to smaller viewports.

The most common multi-column layouts are 1/2 width (6 fluid grid columns) and 1/3 width (4 fluid grid columns). However, single-line inputs can use different column widths when the form fields are related and the expected length of user input is predictable. Use a fluid grid layout with small gutters to provide horizontal margins and ensure that the form scales properly to smaller viewports.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/field-groups.78aa02f1b8824327e624e33b0371bb17.png)

Do use small gutters in fluid grids to separate input boxes in horizontal layouts. Inputs can use unbalanced column widths to match highly predictable lengths of user input.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/spacing/vertical-spacing-in-forms.9291df09882c4f69fd4b03b12f0d318e.png)

Do use fluid grid to horizontally display checkbox and radio button groups with short labels.

## Stacked margin

### Margin top

Use these classes to add a top margin to an element.

Element

Margin-top XS

`sky-theme-margin-top-xs`

Margin-top S

`sky-theme-margin-top-s`

Margin-top M

`sky-theme-margin-top-m`

Margin-top L

`sky-theme-margin-top-l`

Margin-top XL

`sky-theme-margin-top-xl`

Margin-top XXL

`sky-theme-margin-top-xxl`

### Margin bottom

Use these classes to add a bottom margin to an element.

Element

Margin-bottom XS

`sky-theme-margin-bottom-xs`

Deprecated:`sky-margin-stacked-xs`

Removed:`sky-margin-stacked-compact`

Margin-bottom S

`sky-theme-margin-bottom-s`

Deprecated:`sky-margin-stacked-sm`

Margin-bottom M

`sky-theme-margin-bottom-m`

Deprecated:`sky-margin-stacked-md`

Margin-bottom L

`sky-theme-margin-bottom-l`

Deprecated:`sky-margin-stacked-lg`

Removed:`sky-margin-stacked-default`

Margin-bottom XL

`sky-theme-margin-bottom-xl`

Deprecated:`sky-margin-stacked-xl`

Removed:`sky-margin-stacked-separate`

Margin-bottom XXL

`sky-theme-margin-bottom-xxl`

Deprecated:`sky-margin-stacked-xxl`

## Inline margin

### Margin right

Use these classes to add a right margin to an element.

Element

Margin-right XS

`sky-theme-margin-right-xs`

Deprecated:`sky-margin-inline-xs`

Removed:`sky-margin-inline-compact`

Margin-right S

`sky-theme-margin-right-s`

Deprecated:`sky-margin-inline-sm`

Removed:`sky-margin-inline-default`

Margin-right M

`sky-theme-margin-right-m`

Deprecated:`sky-margin-inline-md`

Margin-right L

`sky-theme-margin-right-l`

Deprecated:`sky-margin-inline-lg`

Margin-right XL

`sky-theme-margin-right-xl`

Deprecated:`sky-margin-inline-xl`

Margin-right XXL

`sky-theme-margin-right-xxl`

Deprecated:`sky-margin-inline-xxl`

### Margin left

Use these classes to add a left margin to an element.

Element

Margin-left XS

`sky-theme-margin-left-xs`

Margin-left S

`sky-theme-margin-left-s`

Margin-left M

`sky-theme-margin-left-m`

Margin-left L

`sky-theme-margin-left-l`

Margin-left XL

`sky-theme-margin-left-xl`

Margin-left XXL

`sky-theme-margin-left-xxl`

## Stacked padding

### Padding top

Use these classes to add top padding to an element.

Element

Padding-top XS

`sky-theme-padding-top-xs`

Padding-top S

`sky-theme-padding-top-s`

Padding-top M

`sky-theme-padding-top-m`

Padding-top L

`sky-theme-padding-top-l`

Padding-top XL

`sky-theme-padding-top-xl`

Padding-top XXL

`sky-theme-padding-top-xxl`

### Padding bottom

Use these classes to add bottom padding to an element.

Element

Padding-bottom XS

`sky-theme-padding-bottom-xs`

Padding-bottom S

`sky-theme-padding-bottom-s`

Padding-bottom M

`sky-theme-padding-bottom-m`

Padding-bottom L

`sky-theme-padding-bottom-l`

Padding-bottom XL

`sky-theme-padding-bottom-xl`

Padding-bottom XXL

`sky-theme-padding-bottom-xxl`

## Inline padding

### Padding right

Use these classes to add right padding to an element.

Element

Padding-right XS

`sky-theme-padding-right-xs`

Padding-right S

`sky-theme-padding-right-s`

Padding-right M

`sky-theme-padding-right-m`

Padding-right L

`sky-theme-padding-right-l`

Padding-right XL

`sky-theme-padding-right-xl`

Padding-right XXL

`sky-theme-padding-right-xxl`

### Padding left

Use these classes to add left padding to an element.

Element

Padding-left XS

`sky-theme-padding-left-xs`

Padding-left S

`sky-theme-padding-left-s`

Padding-left M

`sky-theme-padding-left-m`

Padding-left L

`sky-theme-padding-left-l`

Padding-left XL

`sky-theme-padding-left-xl`

Padding-left XXL

`sky-theme-padding-left-xxl`

## Insets within elements

Use these classes to add an even amount of inset padding all the way around the sides of an element.

### Balanced

Element

Inset balanced padding XS

`sky-theme-padding-inset-balanced-xs`

Inset balanced padding S

`sky-theme-padding-inset-balanced-s`

Deprecated:`sky-padding-even-small` , `sky-padding-even-sm`

Removed:`sky-padding-even-default`

Inset balanced padding M

`sky-theme-padding-inset-balanced-m`

Deprecated:`sky-padding-even-md`

Removed:`sky-padding-even-large`

Inset balanced padding L

`sky-theme-padding-inset-balanced-l`

Deprecated:`sky-padding-even-lg`

Inset balanced padding XL

`sky-theme-padding-inset-balanced-xl`

Deprecated:`sky-padding-even-xl`

## Conditional input inset padding

Use this class to add left inset padding to conditional inputs or content below a checkbox or radio button.

Checkbox label

Conditional field

Conditional input inset padding

`sky-theme-padding-conditional-input`

## Deprecated spacing

These spacing values are deprecated and will be removed in a future version of SKY UX

Horizontal padding SM

Replace this with one or more directional spacing classes above.

Deprecated:`sky-padding-horizontal-sm`

Horizontal padding MD

Replace this with one or more directional spacing classes above.

Deprecated:`sky-padding-horizontal-md`

Horizontal padding XL

Replace this with one or more directional spacing classes above.

Deprecated:`sky-padding-horizontal-xl`

Vertical padding MD

Replace this with one or more directional spacing classes above.

Deprecated:`sky-padding-vertical-md`

Vertical padding LG

Replace this with one or more directional spacing classes above.

Deprecated:`sky-padding-vertical-lg`

Squish padding default

To replace this with supported values, follow component patterns and use spacing classes above.

Deprecated:`sky-padding-squish-default`

Squish padding large

To replace this with supported values, follow component patterns and use spacing classes above.

Deprecated:`sky-padding-squish-large`

Squish padding small

To replace this with supported values, follow component patterns and use spacing classes above.

Deprecated:`sky-padding-squish-small`

Container

Replace this with an inset spacing class above.

Deprecated:`sky-container`

## Stacked space

Use stacked custom properties for vertical top and bottom space. Use them for either margin or padding.

Stacked space XS

`var(--sky-theme-space-stacked-xs)`

Stacked space S

`var(--sky-theme-space-stacked-s)`

Stacked space M

`var(--sky-theme-space-stacked-m)`

Stacked space L

`var(--sky-theme-space-stacked-l)`

Stacked space XL

`var(--sky-theme-space-stacked-xl)`

Stacked space XXL

`var(--sky-theme-space-stacked-xxl)`

## Inline space

Use inline custom properties for horizontal right and left space. Use them for either margin or padding.

Inline space XS

`var(--sky-theme-space-inline-xs)`

Inline space S

`var(--sky-theme-space-inline-s)`

Inline space M

`var(--sky-theme-space-inline-m)`

Inline space L

`var(--sky-theme-space-inline-l)`

Inline space XL

`var(--sky-theme-space-inline-xl)`

Inline space XXL

`var(--sky-theme-space-inline-xxl)`

## Inset padding

Use inset padding custom properties for padding around all sides of an element.

Inset balanced space XS

`var(--sky-theme-space-inset-balanced-xs)`

Inset balanced space S

`var(--sky-theme-space-inset-balanced-s)`

Inset balanced space M

`var(--sky-theme-space-inset-balanced-m)`

Inset balanced space L

`var(--sky-theme-space-inset-balanced-l)`

Inset balanced space XL

`var(--sky-theme-space-inset-balanced-xl)`

## Conditional form input space

Use this custom property for the left margin or padding of conditional inputs or content below a checkbox or radio button.

Conditional input inset

`var(--sky-theme-space-conditional-input)`

## Deprecated SCSS variables

SKY UX does not support these deprecated SCSS variables. In many cases, the styles in these variables are now built into components or supported classes and don't need to be manually applied. Read the style overview guidelines to find a suitable replacement.

`$sky-margin-stacked-compact`

`$sky-margin-stacked-default`

`$sky-margin-stacked-separate`

`$sky-margin-inline-compact`

`$sky-margin-inline-default`

`$sky-padding-even-small`

`$sky-padding-even-default`

`$sky-padding-even-large`

`$sky-padding`

`$sky-padding-half`

`$sky-padding-3_4`

`$sky-padding-plus-half`

`$sky-padding-double`

`$sky-padding-triple`

`$sky-margin`

`$sky-margin-half`

`$sky-margin-3_4`

`$sky-margin-plus-half`

`$sky-margin-double`

`$sky-margin-triple`

`$sky-context-menu-size`

`$sky-tab-btn-padding-top-bottom`

`$sky-tab-btn-padding-left-right`

`$sky-tile-header-tool-padding`

`$sky-padding-squish-default`

`$sky-padding-squish-small`

`$sky-padding-squish-large`

`$sky-space-default`

`$sky-space-xxs`

`$sky-space-xs`

`$sky-space-sm`

`$sky-space-md`

`$sky-space-lg`

`$sky-space-xl`

`$sky-theme-modern-space-xs`

`$sky-theme-modern-space-sm`

`$sky-theme-modern-space-md`

`$sky-theme-modern-space-lg`

`$sky-theme-modern-space-xl`

`$sky-theme-modern-space-xxl`

`$sky-theme-modern-padding-even-sm`

`$sky-theme-modern-padding-even-md`

`$sky-theme-modern-padding-even-lg`

`$sky-theme-modern-padding-even-xl`

`$sky-theme-modern-padding-v-md`

`$sky-theme-modern-padding-v-lg`

`$sky-theme-modern-padding-h-sm`

`$sky-theme-modern-padding-h-md`

`$sky-theme-modern-padding-h-xl`

`$sky-theme-modern-padding-button-standard`

`$sky-theme-modern-padding-button-icon`

`$sky-theme-modern-margin-inline-xs`

`$sky-theme-modern-margin-inline-sm`

`$sky-theme-modern-margin-inline-md`

`$sky-theme-modern-margin-inline-lg`

`$sky-theme-modern-margin-inline-xl`

`$sky-theme-modern-margin-inline-xxl`

`$sky-theme-modern-margin-stacked-xs`

`$sky-theme-modern-margin-stacked-sm`

`$sky-theme-modern-margin-stacked-md`

`$sky-theme-modern-margin-stacked-lg`

`$sky-theme-modern-margin-stacked-xl`

`$sky-theme-modern-margin-stacked-xxl`
