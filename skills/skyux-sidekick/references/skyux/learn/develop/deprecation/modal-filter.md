---
Title: Modal filter
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/modal-filter
---

# Modal filter

The modal filter pattern of the [filter](../../../components/filter.md) component is deprecated in favor of the [filter bar](../../../components/filter-bar.md) component.

The expandable inline filter pattern is still supported, and the documentation now reflects this by renaming the page to [expandable inline filter](../../../components/filter.md).

## How to migrate

SKY UX didn't create a migration script because of differences between how you implement the filter component's modal filter pattern and how you implement the filter bar component. Existing modals need to be refactored to implement the [SkyFilterItemModal](../../../components/filter-bar.md#interface_sky-filter-item-modal) interface.

To migrate modal filters to the filter bar, create separate modals for each filter option. In the filter bar, users select filter buttons to open the modals. The filter bar natively supports the lookup filter type, and you can can extend the filter bar to support other filter types.

After you set up modals for your filters, select the default filters to display when the filter bar loads. Users can change the default filters using the filter bar's filter chooser. Limit your default filters to the most important or most commonly used filters.

### Example: Migrating a few filters for a list of events

When a modal filter only has a few available filters, you migrate to a filter bar by creating a modal for each filter and displaying buttons for all of them.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/deprecation/modal-filter/event-modal-filter.400c1283a68b7d51dca08cbe6b7e96e9.png)

A list of events includes a modal with a few filters.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/deprecation/modal-filter/event-list-filter-bar.089f8740e41cf3ff5e9491d0789cdfdf.png)

In the filter bar, display buttons for each filter to open individual modals.

### Example: Migrating a large number of filters for a list of transactions

When a modal filter has a large number of filters, you migrate to a filter bar by creating a modal for each filter and then selecting which which filters to display by default in the filter bar.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/deprecation/modal-filter/transactions-list-filters.4feb10c6a4d6dda66743a78732ae0725.png)

A list of transactions has a large number of filters in multiple groups.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/deprecation/modal-filter/transactions-list-filter-bar.f53076e5220c4acdbdb15805238e6161.png)

In the filter bar, display filter buttons for the most important or most commonly used filters based on the main tasks that the list supports. The rest are available to users through the filter chooser.

Each filter in the filter bar opens a modal with its options. The filter bar natively supports the lookup filter type, and you can can extend the filter bar to support other filter types. Users can open a filter chooser to change add and remove filters from the filter bar.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/deprecation/modal-filter/transactions-list-post-status-filter.ef84dab49b06c1db3ed480d3a8190027.png)

The lookup filter for post status.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/deprecation/modal-filter/transaction-list-select-filters.70d3cadb5b407340c9f4f24c81d5e0f3.png)

The filter chooser allows users to add and remove filter buttons from the filter bar.
