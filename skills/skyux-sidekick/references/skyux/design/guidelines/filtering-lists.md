---
Title: Filtering lists
Reference: https://developer.blackbaud.com/skyux/design/guidelines/filtering-lists
---

# Filtering lists

Filters enable users to adjust lists to only display the items that match their specific criteria.

## Principles

Follow these [SKY UX design principles](../principles.md) when you include filters with lists, and present the filtering options based on the needs of users and the specific scenarios.

<table>
  <tbody>
    <tr>
      <td>
**Structure content around tasks**
</td>
      <td>
Include filters, set defaults, and organize filters based on user goals.
</td>
    </tr>
    <tr>
      <td>
**Maintain a clean, cohesive interface**
</td>
      <td>
Don't overwhelm users or clutter the user interface with too many filters. Collapse filtering options that users can discover on their own.
</td>
    </tr>
    <tr>
      <td>
**Offload work from users**
</td>
      <td>
Consider options, such as pre-filtered lists, to present lists that don't require filtering.
</td>
    </tr>
  </tbody>
</table>

## Usage

Include filters with lists when users can:

- Select individual items to take action or navigate to more information.
- Create smaller, filtered lists to take action on multiple items or to complete related tasks.
- Create datasets to review, export, or take action on items.

## Contexts for filtering lists

### Context 1: Full-page lists

When the main, or only, task on a page is to narrow a collection of items or manipulate a pre-filtered collection, use a [filter bar](../../components/filter-bar.md) or tabs to support the filtering tasks.

Dedicated full-page lists can appear on [list pages](./page-layouts/list-page.md) or in tabs on [record pages](./page-layouts/record-page.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/full-page-context.9eb411599b85fa6f4db8d7bd047c56ca.png)

On list pages, use the filter bar to apply search criteria to full-page lists\`.

### Context 2: Lists in containers

When lists appear in containers such as boxes, use simple filters, such as checkboxes and HTML select inputs, and make them persistent or expandable.

#### Persistent inline filters

When users only need one or two simple filters and containers have room to display the filter controls above the lists, use persistent inline filters. Persistent inline filters are always visible, so users can apply them directly to lists without invoking a button. They are especially useful for controls that users will use frequently or that have significant impact.

Persistent inline filters appear in a toolbar above lists and are applied immediately after users make selections.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/inline-context-select.56727e137a110fb2cb3f1d3edc39b354.png)

Users can select filter criteria in HTML select fields.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/inline-context-checkbox.c195abade33b7027835df0e22a4794c1.png)

Users can toggle filter criteria with checkboxes.

#### Expandable inline filters

When users need up to four simple filters for lists within containers, use [expandable inline filters](../../components/filter.md). Filter controls are hidden by default and accessed through a **Filter** button, so they are especially useful for filters that users don't need frequently or that don't have significant impact.

If users need more filters or more complex filtering, use a dedicated list view with a [filter bar](./filtering-lists.md#filter-bar-anatomy) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/expandable-diagram.14572586e63325f731cc65d0bcf65f39.png)

Expandable filters let users expand and collapse the filters. The filter button is highlighted when filters are set.

## Pre-filtering full-page lists

When users regularly need to access or work with collections of items, consider providing pre-filtered lists in [tabs](../../components/tabs.md).

### Use pre-filtered lists in tabs when

- Users need regular access to a small number of lists.
- One list in a small group of lists needs priority or will be used most frequently.
- A small number of lists have different tasks for users to complete.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/tab-filters-do.a85b9657b36b424fb17d4181a0055b86.png)

Do use tabs to support easy access to a few pre-filtered lists.

### Don't use pre-filtered lists in tabs when

- Users need to access a large number of lists.
- Users don't need to access lists regularly.
- Pre-filtered lists already exist in the system. Use call-to-action patterns, such as notifications or needs attention items in [action hubs](./page-layouts/action-hub.md), instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/tab-filters-dont.441ceda3f3c48f19dcf846f16d25cf0e.png)

Don't use tabs for a large set of pre-filtered lists.

### Use a pre-filtered list with a filter bar when

- Users need to adjust preset filter values or add additional filters to refine lists.
- Users access lists through calls to action and need to further narrow the lists before taking action.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/filteringrecords/pre-filtered-bar.f07731a9eaf12f820440ca81321a7e81.png)

Do use pre-filtered lists with filter bars to make user workflows more efficient. Users can narrow lists further as necessary.

## Related information

### Components

- [Confirmation dialog](../../components/confirm.md)
- [Data grid](../../components/data-grid.md)
- [Data manager](../../components/data-manager.md)
- [Dropdown](../../components/dropdown.md)
- [Expandable inline filter](../../components/filter.md)
- [Filter bar](../../components/filter-bar.md)
- [Inline form](../../components/inline-form.md)
- [List summary](../../components/list-summary.md)
- [Popover](../../components/popover.md)
- [Sectioned form](../../components/sectioned-form.md)
- [Tabs](../../components/tabs.md)

### Guidelines

- [List page](./page-layouts/list-page.md)
