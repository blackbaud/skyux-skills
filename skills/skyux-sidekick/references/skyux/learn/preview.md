---
Title: Preview features
Reference: https://developer.blackbaud.com/skyux/learn/preview
---

# Preview features

Monitor this page for updates to the SKY UX API that are not yet fully documented. In the developer docs, a preview tag will highlight these updates and indicate that features aren't yet represented in the design docs, demo, and code examples. This helps facilitate far-reaching changes that span multiple iterations and affect multiple components. It can also highlight breaking changes in minor versions, but the SKY UX team strives to avoid those.

## August 2026

### New bar chart component

To provide a simple, declarative way to visualize categorical data, we added a [new bar chart component](../components/chart-bar.md). This new component renders one or more bar series from a category axis and a value axis. It includes support for horizontal and vertical orientations and support for grouped and stacked layouts.

This new component is currently in preview and not yet fully implemented and documented. We plan to officially release it in SKY UX v15, and we are also working on components for other types of charts, including line charts.

## July 2026

### Simpler data grid option

To simplify the implementation of the data grid for common use cases, we added a [new option to the data grid component](../components/data-grid-component.md) that provides a simpler API for basic data grids. This new data grid uses template-driven configuration:

- Support for multiselect, sorting, and paging.
- Column configuration through templates instead of a configuration object, supporting flexible widths, pinned columns, inline help, custom cell templates, and more.
- Removes the `gridOptions` object and supports template-based translation of column headers and other text.

This new option is currently in preview and not yet fully implemented and documented. Additional features not yet available include:

- Support for data manager
- Support for row deletion confirmation.
