---
Title: Page design
Reference: https://developer.blackbaud.com/skyux/design/guidelines/page-layouts
---

# Page design

Page design patterns accommodate a wide variety scenarios and workflow requirements to facilitate consistent, cohesive user experiences.

## Page patterns

While you can use SKY UX to create any page layout you need, Blackbaud solutions utilize on some common page patterns.

[![Action hub illustration](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/action-hub-layout.a3aced5c.png)](./action-hub.md)

### [Action hub](./action-hub.md)

Direct users to important actions and provide quick access to common tasks.

[![List page illustration](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/list-page-layout.aeeabfce.png)](./list-page.md)

### [List page](./list-page.md)

Present a list for users to review and search, and enable users to manipulate list items.

[![Record page illustration](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/record-page-layout.bdbfc8a7.png)](./record-page.md)

### [Record page](./record-page.md)

Aggregate tasks and content related to a particular record.

[![Split view page illustration](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/split-view-layout.b0788358.png)](./split-view-page.md)

### [Split view page](./split-view-page.md)

Provide a workspace for users to quickly work through a list of items.

## Page titles

Page titles uniquely identify the contents of pages. They are concise and direct, and they indicate the purpose of the pages to get users up to speed quickly. For guidance on creating page titles, see the [Content guidelines](../content/README.md#page-titles).

## Fluid grid system

SKY UX layouts use a [fluid grid](../../../components/fluid-grid.md) system to respond to changes in the size of devices or viewports. Fluid grids provide padding on both sides of columns for consistent spacing between columns and at the edges. Columns are fluid, but spacing is constant.

This fluid grid system supports multiple page layouts and conforms to [design principles](../../principles.md).

To organize content in fluid grids, consider the type of content and how users interact with it. On pages with dynamic or time-sensitive content, organize content containers to emphasize tasks and make the best use of space at all screen sizes. On pages that primarily display information, maintain the relative position of containers regardless of screen size.

If you hide or display content based on screen size, use layouts that ensure the correct placement at all screen sizes. Don't rely on the expected fluid grid behavior. Move the surrounding content to maintain consistent positioning and fill the available space.

When you hide a single container, content moves up within the same column. Content doesn't move when you hide a container at the bottom of a column.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/container-shift-up.867ea897.png)

Containers in a column move up to fill space.

When you hide all containers in a column, the surrounding content moves to the left.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/container-shift-left.9cc2f8a0.png)

Columns move left when you hide an entire column.

## Responsive design

### Responsive patterns using [fluid grid](../../../components/fluid-grid.md)

To create responsive layouts, use the column drop pattern. It starts with a multi-column layout and uses the full width of the screen to display columns horizontally. As screens get narrower, it stacks columns vertically based on the content and on the settings specified for different breakpoints.

For example, a page can have a fluid grid row with three columns where `screenXSmall="12"` and `screenSmall="4"`. At screen sizes larger than the extra small breakpoint, each column spans one-third of the row's width. And at the extra small breakpoint, each column spans the full width of the row and stacks vertically.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/page-three-column-full.0e711dad.png)

Horizontal columns at a viewport larger than the extra small breakpoint.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/page-three-column-mobile.433883ef.png)

Vertically stacked columns at the extra small breakpoint.

Within containers, content in a fluid guid adjusts as the size of the viewport changes. For example, a container with a repeater can use a fluid grid to display horizontal columns at larger screen sizes and to stack columns vertically when the container hits the extra small breakpoint.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/repeater-content-full.c6445aec.png)

Horizontal columns in a repeater at larger screen sizes.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/repeater-content-mobile.9643ab3a.png)

Vertically stacked columns in a repeater at the extra small breakpoint.

### Responsive component behavior

Many components also respond at different breakpoints to best present page content based on screen width.

[Action buttons](../../../components/action-button.md) adapt their presentation at smaller viewport widths to stack vertically instead of horizontally.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/responsive-action-button.1550dee4.png)

[Tabs](../../../components/tabs.md) collapse into a dropdown when the number of tabs exceeds the available horizontal space.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/responsive-tabs.35949c68.png)

Horizontal [description lists](../../../components/description-list.md) respond to the width of their containers and change to 1- or 2-column layouts when appropriate.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/responsive-description-list-full.af8d696e.png)

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/responsive-description-list-two-column.03a8f775.png)

## Primary button guidelines

All SKY UX page layouts follow consistent guidelines for the placement and styling of primary buttons.

Usage

Use a primary action to trigger the most important or most frequently used action on a page or modal. If the action applies to an entire page, place the button in the page header. If the action applies to child content, place the button in the container for that content.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-page-level.d41f8d73.png)

Do use primary buttons in the containers that they directly impact.

Don't use multiple primary actions. Pages and modals only include one primary button to ensure that it draws user attention.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-dont-multiple-actions.f47781d3.png)

Don't use multiple primary buttons.

Don't use multiple primary buttons when users have multiple options to complete a primary action. Instead, use [action buttons](../../../components/action-button.md) to present the initial decision.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-dont-multiple-ways.d337e49d.png)

Don't use multiple primary buttons to present options.

Don't use primary buttons when pages and modals don't have a most important or most frequently used action.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-no-primary.ae6fef2c.png)

Some pages don't have a primary action.

Placement

For a list page where the primary action applies to list items, place the primary action in the summary action bar that appears when users select list items.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-list-multiselect.4e6ae5fb.png)

Do place a primary action that applies to list items in the summary action bar.

For a record page, place the primary action to the left of the other actions under the page title.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-record.47fc89fc.png)

Do place the primary action to the left of the page actions on a record page.

For a split view page, place the primary action in the summary action bar below the split view workspace.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-split-view.4cde9507.png)

Do place the primary action in the summary action bar below the split view workspace.

Don't place a primary action on an action hub page. Action hubs use other patterns such as the Needs attention section to direct users to important actions.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-action-hub.cc1ec4a8.png)

Don't place a primary action on an action hub page.

Don't place a primary action in the list toolbar on a list page. List pages are not recommended for completing predictable tasks and do not suggest any particular action in the list toolbar.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-list-toolbar.a9130d31.png)

Don't place a primary action in the list toolbar.
