---
Title: List page
Reference: https://developer.blackbaud.com/skyux/design/guidelines/page-layouts/list-page
---

# List page

List pages allow the user to filter, sort, search and take action on lists of items.

## Usage

### Use when

Use list pages when users need to work with an item or collection of items and you can't otherwise provide a first-class experience for the task.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-page-use-when.700f9a6fee8d5750e5caa57dcae3aeea.png)

Do use list pages when users need to work with a set, subset or individual item.

### Don't use when

Don't use list pages when you can predict what users need to do and can provide a first-class experience for that task.

## Anatomy

1

[Page](../../../components/page/README.md)

2

Page heading

3

[List summary](../../../components/list-summary.md)

4

List

5

[Pagination](../../../components/paging.md)

6

[Tabs](../../../components/tabs.md) (optional)

7

View switcher  (optional)

8

[Toolbar](../../../components/toolbar.md) (optional)

9

[Filter bar](../../../components/filter-bar.md) (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-page-anatomy.156f15c0a47b182b300fab6ce97c0199.png)

## Options

### Tabs

You can use [tabs](../../../components/tabs.md) to provide [pre-filtered views of lists](../filtering-lists.md#pre-filtering-full-page-lists) to support common tasks. Only provide pre-filtered views if there will always be items in those views.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-page-options-tabs.5f91251d1111b81c8fd7021490e8cc98.png)

You can use tabs to provide pre-filtered views of lists.

### View switcher

The view switcher lets users control how to display a list. They can display it as a [data grid](../../../components/data-grid.md), [repeater](../../../components/repeater.md), or map. The view switcher is made from the [icon radio buttons](../../../components/radio.md) component.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/toolbar/toolbar-view-switcher.dec8b3825a3862ecadf47f1f5cbe5054.png)

### Toolbar

The [toolbar](../../../components/toolbar.md) displays actions to manipulate individual list items or the entire list. Don't include a primary action in list toolbars. If the page supports a specific, predictable workflow, consider using a different [page layout, such as action hubs or split view pages](./README.md#page-layouts).

### Filter bar

The [filter bar](../../../components/filter-bar.md) enables users to adjust lists to only display the items that match their specific criteria.

### List summary

The [list summary](../../../components/list-summary.md) component displays up to three small [key info](../../../components/key-info.md) items above lists to highlight important information that users should know at a glance.

### Use when

Use the list summary to highlight important information about lists when users should know it at a glance. Use the first summary item to indicate the number of items in the list. Most lists should include the list summary because this list count provides valuable context.

To assist users with tasks and help them interpret lists, you can display up to two additional summary items to the right of the list count. For example, in a list of gifts, you can highlight the total value of all gifts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-count.8378fb30e0a7146555fbb94e560aa67b.png)

Do use the list summary to provide users with a list count and up to two additional items that summarize a list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-count-summaries.a458ebdfe3ff80c93a95e8ec31df0dcb.png)

Don't use the list summary to display data that doesn't help users interpret the list.

### Don't use when

Don't use the list summary when a list includes fewer than 15 items and is unlikely to change. In this scenario, the list count and other summary items are unlikely to help users.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page/list-count-small-fixed-list.732b2a92852843beca2b09d4d0a6b513.png)

Don't use the list summary to provide a list count on a small, static list.

Don't use the list summary in contexts other than above a list.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-dont-use-context.439e0cff109911cef5c260ea9ba33f10.png)

Don't display the list summary without a list.

### Updates to summary details

When filters or search criteria are applied to a list, update the list summary to reflect the filtered list. Update both the list count and any additional summary items, and add "match" to the list count's label to indicate that the list is in a filtered state.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/list-summary/list-summary-behavior-update-details.aef6fa1fcb3e3a3a8b2cd1e4394bd03c.png)

Do update the details in the list summary when filters or search criteria are applied to a list.

## Behavior and states

### Links to records

Links to records in the list should navigate users to the record page.

### Pagination

Use pagination with 30 items per page to divide up lists. Don't use infinite scroll.

## Content

### Tab label

The tab should only include the descriptive label. Do not include the list count in the tab.

## Layout

For the list page layout, use the [page](../../../components/page/README.md) component.

## Related information

### Components

- [Data grid](../../../components/data-grid.md)
- [Data manager](../../../components/data-manager.md)
- [Filter bar](../../../components/filter-bar.md)
- [List summary](../../../components/list-summary.md)
- [Page](../../../components/page/README.md)
- [Paging](../../../components/paging.md)
- [Repeater](../../../components/repeater.md)
- [Tabs](../../../components/tabs.md)
- [Toolbar](../../../components/toolbar.md)

### Guidelines

- [Filtering lists](../filtering-lists.md)
