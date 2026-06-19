---
Title: Action hub
Reference: https://developer.blackbaud.com/skyux/components/action-hub
---

# Action hub

Action hubs direct user attention to important actions and provide quick access to common tasks. They aggregate entry points into tasks that might otherwise be spread across multiple pages.

## Usage

### Use when

Use action hubs to present prescriptive calls to action for things users must, should, or could do within an area of the system. They are often appropriate as landing pages for main navigation items but can also be descendant pages.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/action-hub-use-when.f5702fcb50f8fd613b9c18faf8e951db.png)

Do use action hubs to present prescriptive calls to action.

### Don't use when

Don't use action hubs to present information that is not actionable. Analyze information for users to provide context and make it actionable.

## Anatomy

1

Page heading

2

Related links

3

Needs attention

4

Recently accessed

5

Content area

6

Common actions (optional)

7

Settings (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/action-hub-anatomy.01bf467e0d29a369fc5f6fde6c5dbb07.png)

## Options

### Common actions

You can include up to three secondary buttons to provide quick access to common tasks, such as adding a record. If you need to group multiple related actions, use a menu button.

## Content

### Needs attention

Display actions that users must perform based on business requirements or best practices, and link users to the place where they can complete the action, such as a [modal](./modal.md), [split view page](../design/guidelines/page-layouts/split-view-page.md), or [record page](../design/guidelines/page-layouts/record-page.md).

Start each item in the list with a verb that communicates the action to perform. After the verb, include the number of items that require attention and a succinct description.

Order the items by workflow order, or by importance if they are not part of the same workflow.

Consider ways to operationalize strategic tasks by breaking them down into smaller, achievable chunks of work.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/needs-attention-order-600.f7d13bf69af6b36c894d1486ed949008.png)

Do order items by workflow or importance.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/needs-attention-achievable-600.33831790ebc533cf639cd485175b8628.png)

Do break tasks into achievable chunks.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/needs-attention-unachievable-600.538420d9933d78ba6443e7a82bbe2500.png)

Don't present unrealistic or overly ambitious tasks.

### Content area

Additional content should reflect one of the following sets of principles.

#### Operational but optional

Content that is operational but optional should:

- be operational in nature, reflecting work that the user does on a regular basis to run the business
- provide contextual information to help the user decide whether to act
- be elevated to a needs attention item after a specific threshold is met

#### Strategic and prescriptive

Content that is strategic and prescriptive should:

- be strategic in nature, oriented towards longer term organizational goals rather than day to day tasks
- prescribe one or more actions which may take place inside or outside the system
- be synthesized and provide a context for comparison — don't require the user to figure out what the information means

#### Strategic and tied to a needs attention item

Content that is strategic and tied to a needs attention item should:

- be strategic in nature, oriented towards longer term organizational goals rather than day to day tasks
- represent progress towards an outcome that is impacted by a least one existing needs attention item
- be synthesized and provide a context for comparison — don't require the user to figure out what the information means

#### Key information call to action

Use key information calls to action when the condition for prescribing an action can be distilled to a single piece of information.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/content-section-keyinfo-cta-600.c4e74adf8329b1cf57c5a9ecb4583ba1.png)

#### Charts

Action hubs are not intended for analytical tasks. If you include charts, scope the data set to the appropriate strategic or operational view for the user. You can use one filter if necessary to swap between relevant contexts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/content-section-chart-context-cta-600.81b09016cdbee106e4db7e19931c7ade.png)

Do use charts to provide decision-making context for optional operational tasks.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/content-section-chart-history-600.f07f06167f0c813d0325320dc20ff7a7.png)

Do use charts to show categorical or time-based views of strategic information.

### Page links

Groups of links to include and display in the following order.

#### Related links

Display up to 10 links to related pages in alphabetical order.

#### Recently accessed

Display up to five items in reverse chronological order to indicate what users accessed most recently.

#### Settings

Optionally include links to the settings applicable to functionality within the action hub and its descendant pages.

## Behavior and states

### Needs attention

#### Navigation

Link needs attention items to the place where users can complete the action, such as a [modal](./modal.md), [split view page](../design/guidelines/page-layouts/split-view-page.md), or [record page](../design/guidelines/page-layouts/record-page.md).

#### Empty state

When no needs attention items are available, an [empty state message](../design/guidelines/user-assistance.md#empty-state-help) indicates that users are caught up.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/needs-attention-empty-600.5f5e9218db5b27300f26c925381b1343.png)

#### Columns

When more than six needs attention items are available in a viewpoint that is 768 pixels or larger, the content splits into two columns.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/needs-attention-2-column.17b7274a54a89d6d2d5fb134ebe31acd.png)

### Settings

Open settings forms in modals.

### Responsiveness

Action hubs reflow content in small viewports.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/action-hub/action-hub-responsive-600.9b0cbf8ae4e49923d5d5cd9a8c68a4b8.png)

## Related information

### Guidelines

- [Record page](../design/guidelines/page-layouts/record-page.md)
- [Split view page](../design/guidelines/page-layouts/split-view-page.md)

### Components

- [Modal](./modal.md)

## Installation

NPM package

`@skyux/pages`[View in NPM](https://www.npmjs.com/package/@skyux/pages) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/pages/src/lib/modules/action-hub/action-hub.module.ts#L45)

Install with NPM

`npm install --save-exact @skyux/pages`

## SkyActionHubModule

Type: Module

`import { SkyActionHubModule } from '@skyux/pages';`

## SkyActionHubComponent

Type: Component

Selector: `sky-action-hub`

Creates an action hub to direct user attention to important actions and provide quick access to common tasks.

### Inputs

#### `needsAttention: SkyActionHubNeedsAttentionInput | undefined`

The list of actions that users must perform based on business requirements or best practices, or `"loading"` to display a wait indicator.

#### `parentLink: SkyPageLink | undefined`

Links back to a parent page.

#### `recentLinks: SkyRecentLinksInput`

The list of recently accessed links, or `"loading"` to display a wait indicator.

Default: `[]`

#### `relatedLinks: SkyPageLinksInput`

The list of related links, or `"loading"` to display a wait indicator.

Default: `[]`

#### `settingsLinks: SkyPageModalLinksInput`

The list of settings with modal parameters, or `"loading"` to display a wait indicator.

Default: `[]`

#### `title: string`

The page title.

Default: `""`

## SkyActionHubContentComponent

Type: Component

Selector: `sky-action-hub-content`

Displays additional content after the action items.

## SkyActionHubButtonsComponent

Type: Component

Selector: `sky-action-hub-buttons`

Displays buttons after the page title.

### Example

    <a class="sky-btn sky-btn-default" href="path/to/new">New</a>

## SkyActionHubNeedsAttentionClickHandlerArgs

Type: Interface

    interface SkyActionHubNeedsAttentionClickHandlerArgs {
      item: unknown;
    }

### Properties

#### `item: unknown`

The `SkyPageLink`, `SkyPageModalLink`, or `SkyRecentLink` that was clicked.

## SkyActionHubNeedsAttentionClickHandler

Type: Type alias

    type SkyActionHubNeedsAttentionClickHandler = (_: SkyActionHubNeedsAttentionClickHandlerArgs) => void

## SkyActionHubNeedsAttentionInput

Type: Type alias

A list of actions that users must perform based on business requirements or best practices.

    type SkyActionHubNeedsAttentionInput = SkyActionHubNeedsAttention[] | "loading"

## SkyActionHubNeedsAttention

Type: Interface

Specifies action items that require attention and directs users to pages where they can resolve them.

    interface SkyActionHubNeedsAttention {
      click?: SkyActionHubNeedsAttentionClickHandler;
      message?: string;
      permalink?: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string };
      title: string;
    }

### Properties

#### `click?: SkyActionHubNeedsAttentionClickHandler`

The click handler for the action item.

#### `message?: string`

Warning: **Deprecated.** Use `title` instead.

Text to display after the title.

#### `permalink?: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string }`

The link to resolve the action item.

#### `title: string`

The title of the action item.

## SkyPageLink

Type: Interface

Displays links to related information or recently accessed items.

    interface SkyPageLink {
      label: string;
      permalink: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string };
    }

### Properties

#### `label: string`

The link text.

#### `permalink: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string }`

The link destination.

## SkyPageLinksInput

Type: Type alias

    type SkyPageLinksInput = SkyPageLink[] | "loading" | undefined

## SkyModalLinkListComponent

Type: Component

Selector: `sky-modal-link-list`

A component that displays a list of links such as within a `<sky-page-links>` component.

### Inputs

#### `headingText: InputSignal<string | undefined>`

The text to display as the list's heading.

#### `links: InputSignal<SkyPageModalLinksInput>`

Option to pass links as an array of `SkyPageModalLink` objects or `'loading'` to display a loading indicator.

## SkyPageModalLink

Type: Interface

Displays links to related information or recently accessed items.

    interface SkyPageModalLink {
      click?: SkyActionHubNeedsAttentionClickHandler;
      label: string;
      modal?: { component: any; config?: SkyModalConfigurationInterface };
      permalink?: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string };
    }

### Properties

#### `click?: SkyActionHubNeedsAttentionClickHandler`

The click handler for the link, which should be used to open a modal dialog.

#### `label: string`

The link text.

#### `modal?: { component: any; config?: SkyModalConfigurationInterface }`

The modal parameters.

#### `permalink?: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string }`

The link destination.

## SkyPageModalLinkClickHandler

Type: Type alias

    type SkyPageModalLinkClickHandler = SkyActionHubNeedsAttentionClickHandler

## SkyPageModalLinkClickHandlerArgs

Type: Interface

    interface SkyPageModalLinkClickHandlerArgs {
      item: unknown;
    }

### Properties

#### `item: unknown`

The `SkyPageLink`, `SkyPageModalLink`, or `SkyRecentLink` that was clicked.

## SkyPageModalLinksInput

Type: Type alias

    type SkyPageModalLinksInput = SkyPageModalLink[] | "loading" | undefined

## SkyRecentLink

Type: Interface

Link that also has a date field to sort by.

    interface SkyRecentLink {
      label: string;
      lastAccessed: string | Date;
      permalink: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string };
    }

### Properties

#### `label: string`

The link text.

#### `lastAccessed: string | Date`

The date when the link was last accessed. Valid types are a Date object or ISO-8601 string.

#### `permalink: { route?: { commands: any[]; extras?: NavigationExtras }; url?: string }`

The link destination.

## SkyRecentLinksInput

Type: Type alias

Recently accessed links to display in a link list component.

    type SkyRecentLinksInput = SkyRecentLink[] | "loading" | SkyRecentlyAccessedGetLinksArgs | undefined

## SkyRecentlyAccessedGetLinksArgs

Type: Interface

Parameters for retrieving a list of recently accessed links.

    interface SkyRecentlyAccessedGetLinksArgs {
      requestedRoutes: { app: string; route: string }[];
    }

### Properties

#### `requestedRoutes: { app: string; route: string }[]`

The links to retrieve.

SKY UX test harnesses are built upon Angular CDK component harnesses. For more information see the [Angular CDK component harness documentation](https://material.angular.io/cdk/test-harnesses/overview).

## SkyActionHubHarness

Type: Class

`import { SkyActionHubHarness } from '@skyux/pages/testing';`

Harness for interacting with an action hub component in tests.

### Methods

#### `getNeedsAttentionBlock(): Promise<SkyNeedsAttentionHarness>`

Get the testing harness for the needs attention block.

#### Returns

`Promise<SkyNeedsAttentionHarness>`

#### `getNeedsAttentionItem(filter: SkyNeedsAttentionItemHarnessFilters): Promise<SkyNeedsAttentionItemHarness>`

Gets a specific needs attention item based on the filter criteria.

#### Parameters

##### `filter: SkyNeedsAttentionItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyNeedsAttentionItemHarness>`

#### `getNeedsAttentionItems(filters?: SkyNeedsAttentionItemHarnessFilters): Promise<SkyNeedsAttentionItemHarness[]>`

Gets an array of needs attention items based on the filter criteria. If no filter is provided, returns all needs attention items.

#### Parameters

##### `filters?: SkyNeedsAttentionItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyNeedsAttentionItemHarness[]>`

#### `getRecentLinks(): Promise<SkyLinkListHarness>`

Get the testing harness for the recent links block.

#### Returns

`Promise<SkyLinkListHarness>`

#### `getRelatedLinks(): Promise<SkyLinkListHarness>`

Get the testing harness for the related links block.

#### Returns

`Promise<SkyLinkListHarness>`

#### `getSettingsLinks(): Promise<SkyLinkListHarness>`

Get the testing harness for the settings links block.

#### Returns

`Promise<SkyLinkListHarness>`

#### `getTitle(): Promise<string | undefined>`

Gets the title of the action hub.

#### Returns

`Promise<string | undefined>`

#### `SkyActionHubHarness.with(filters: SkyActionHubHarnessFilters): HarnessPredicate<SkyActionHubHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyLinkListHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyActionHubHarnessFilters`

#### Returns

`HarnessPredicate<SkyActionHubHarness>`

## SkyActionHubHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyActionHubHarness](./action-hub.md#class_sky-action-hub-harness) instances.

    interface SkyActionHubHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyNeedsAttentionHarness

Type: Class

`import { SkyNeedsAttentionHarness } from '@skyux/pages/testing';`

Harness for interacting with the needs-attention component in tests.

### Methods

#### `getEmptyListText(): Promise<string | undefined>`

Gets the text from an empty list. If there are items in the list, this will return `undefined`.

#### Returns

`Promise<string | undefined>`

#### `getTitle(): Promise<string | undefined>`

Gets the component's heading text. If there are no links, this will return `undefined`.

#### Returns

`Promise<string | undefined>`

#### `hasItems(): Promise<boolean>`

Whether the link list is showing a list of links.

#### Returns

`Promise<boolean>`

#### `SkyNeedsAttentionHarness.with(filters: SkyNeedsAttentionHarnessFilters): HarnessPredicate<SkyNeedsAttentionHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyNeedsAttentionHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyNeedsAttentionHarnessFilters`

#### Returns

`HarnessPredicate<SkyNeedsAttentionHarness>`

## SkyNeedsAttentionHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyNeedsAttentionHarness](./action-hub.md#class_sky-needs-attention-harness) instances.

    interface SkyNeedsAttentionHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyNeedsAttentionItemHarness

Type: Class

`import { SkyNeedsAttentionItemHarness } from '@skyux/pages/testing';`

Harness for interacting with a needs attention item in tests.

### Methods

#### `click(): Promise<void>`

Clicks the item.

#### Returns

`Promise<void>`

#### `getText(): Promise<string>`

Gets the text content of the item.

#### Returns

`Promise<string>`

#### `SkyNeedsAttentionItemHarness.with(filters: SkyNeedsAttentionItemHarnessFilters): HarnessPredicate<SkyNeedsAttentionItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyNeedsAttentionItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyNeedsAttentionItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyNeedsAttentionItemHarness>`

## SkyNeedsAttentionItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyNeedsAttentionItemHarness](./action-hub.md#class_sky-needs-attention-item-harness) instances.

    interface SkyNeedsAttentionItemHarnessFilters {
      dataSkyId?: string | RegExp;
      text?: string;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `text?: string`

Only find instances whose text content matches the given value.

## SkyLinkListHarness

Type: Class

`import { SkyLinkListHarness } from '@skyux/pages/testing';`

Harness for interacting with a link list component in tests.

### Methods

#### `getHeadingText(): Promise<string | undefined>`

Gets the link list's heading text. If there are no links, this will return `undefined`.

#### Returns

`Promise<string | undefined>`

#### `getListItem(filter: SkyLinkListItemHarnessFilters): Promise<SkyLinkListItemHarness>`

Gets a specific link list item based on the filter criteria.

#### Parameters

##### `filter: SkyLinkListItemHarnessFilters`

The filter criteria.

#### Returns

`Promise<SkyLinkListItemHarness>`

#### `getListItems(filter?: SkyLinkListItemHarnessFilters): Promise<SkyLinkListItemHarness[]>`

Gets an array of link list items based on the filter criteria. If no filter is provided, returns all link list items.

#### Parameters

##### `filter?: SkyLinkListItemHarnessFilters`

The optional filter criteria.

#### Returns

`Promise<SkyLinkListItemHarness[]>`

#### `isVisible(): Promise<boolean>`

Whether the link list is showing a list of links.

#### Returns

`Promise<boolean>`

#### `isWaiting(): Promise<boolean>`

Gets the status of the wait indicator.

#### Returns

`Promise<boolean>`

#### `SkyLinkListHarness.with(filters: SkyLinkListHarnessFilters): HarnessPredicate<SkyLinkListHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyLinkListHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyLinkListHarnessFilters`

#### Returns

`HarnessPredicate<SkyLinkListHarness>`

## SkyLinkListHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyLinkListHarness](./action-hub.md#class_sky-link-list-harness) instances.

    interface SkyLinkListHarnessFilters {
      dataSkyId?: string | RegExp;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

## SkyLinkListItemHarness

Type: Class

`import { SkyLinkListItemHarness } from '@skyux/pages/testing';`

Harness for interacting with a linked list item in tests.

### Methods

#### `click(): Promise<void>`

Clicks the item.

#### Returns

`Promise<void>`

#### `getText(): Promise<string>`

Gets the text content of the item.

#### Returns

`Promise<string>`

#### `SkyLinkListItemHarness.with(filters: SkyLinkListItemHarnessFilters): HarnessPredicate<SkyLinkListItemHarness>`

Gets a `HarnessPredicate` that can be used to search for a `SkyLinkListItemHarness` that meets certain criteria.

#### Parameters

##### `filters: SkyLinkListItemHarnessFilters`

#### Returns

`HarnessPredicate<SkyLinkListItemHarness>`

## SkyLinkListItemHarnessFilters

Type: Interface

A set of criteria that can be used to filter a list of [SkyLinkListItemHarness](./action-hub.md#class_sky-link-list-item-harness) instances.

    interface SkyLinkListItemHarnessFilters {
      dataSkyId?: string | RegExp;
      text?: string;
    }

### Properties

#### `dataSkyId?: string | RegExp`

Only find instances whose `data-sky-id` attribute matches the given value.

#### `text?: string`

Only find instances whose text content matches the given value.

## Code Examples

### Action hub with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyActionHubModule, SkyPageModalLinksInput } from '@skyux/pages';

import { MODAL_TITLE } from './modal-title-token';
import { SettingsModalComponent } from './settings-modal.component';

const pastHours = Array.from(Array(5).keys()).map((i) => {
  const date = new Date();
  date.setHours(date.getHours() - (i + 1));
  return date;
});

/**
 * @title Action hub with basic setup
 * @docsDemoHidden
 */
@Component({
  selector: 'app-pages-action-hub-example',
  templateUrl: './example.component.html',
  imports: [SkyActionHubModule],
})
export class PagesActionHubExampleComponent {
  public buttons = [
    {
      label: 'Action 1',
      ariaLabel: 'Accounts action 1',
      permalink: {
        url: '#',
      },
    },
    {
      label: 'Action 2',
      ariaLabel: 'Accounts action 2',
      permalink: {
        url: '#',
      },
    },
    {
      label: 'Action 3',
      ariaLabel: 'Accounts action 3',
      permalink: {
        url: '#',
      },
    },
  ];

  public needsAttention = [
    {
      title: '9',
      message: 'updates from portal',
      permalink: {
        url: '#',
      },
    },
    {
      title: '8',
      message: 'new messages from online donation',
      permalink: {
        url: '#',
      },
    },
    {
      title: '7',
      message: 'possible duplicates from constituent lists',
      permalink: {
        url: '#',
      },
    },
    {
      title: '6',
      message: 'updates from portal',
      permalink: {
        url: '#',
      },
    },
    {
      title: '5',
      message: 'new messages from online donation',
      permalink: {
        url: '#',
      },
    },
    {
      title: '4',
      message: 'possible duplicates from constituent lists',
      permalink: {
        url: '#',
      },
    },
    {
      title: '3',
      message: 'update from portal',
      permalink: {
        url: '#',
      },
    },
    {
      title: '2',
      message: 'new messages from online donation',
      permalink: {
        url: '#',
      },
    },
    {
      title: '1',
      message: 'possible duplicate from constituent lists',
      permalink: {
        url: '#',
      },
    },
  ];

  public recentLinks = [
    {
      label: 'Recent 1',
      permalink: {
        url: '#',
      },
      lastAccessed: pastHours[0],
    },
    {
      label: 'Recent 2',
      permalink: {
        url: '#',
      },
      lastAccessed: pastHours[1],
    },
    {
      label: 'Recent 3',
      permalink: {
        url: '#',
      },
      lastAccessed: pastHours[2],
    },
    {
      label: 'Recent 4',
      permalink: {
        url: '#',
      },
      lastAccessed: pastHours[3],
    },
    {
      label: 'Recent 5',
      permalink: {
        url: '#',
      },
      lastAccessed: pastHours[4],
    },
  ];

  public relatedLinks = [
    {
      label: 'Link 1',
      permalink: {
        url: '#',
      },
    },
    {
      label: 'Link 2',
      permalink: {
        url: '#',
      },
    },
    {
      label: 'Link 3',
      permalink: {
        url: '#',
      },
    },
  ];

  public settingsLinks: SkyPageModalLinksInput = [
    {
      label: 'Number',
      modal: {
        component: SettingsModalComponent,
        config: {
          size: 'large',
          providers: [
            {
              provide: MODAL_TITLE,
              useValue: 'Number',
            },
          ],
        },
      },
    },
    {
      label: 'Color',
      modal: {
        component: SettingsModalComponent,
        config: {
          size: 'large',
          providers: [
            {
              provide: MODAL_TITLE,
              useValue: 'Color',
            },
          ],
        },
      },
    },
  ];

  public title = 'Active accounts';
}
```

#### example.component.html

```html
<sky-action-hub
  data-sky-id="action-hub"
  [needsAttention]="needsAttention"
  [recentLinks]="recentLinks"
  [relatedLinks]="relatedLinks"
  [settingsLinks]="settingsLinks"
  [title]="title"
>
  <sky-action-hub-buttons>
    @for (button of buttons; track button) {
    <a
      class="sky-btn sky-btn-default sky-theme-margin-right-s"
      [attr.aria-label]="button.ariaLabel"
      [href]="button.permalink.url"
    >
      {{ button.label }}
    </a>
    }
  </sky-action-hub-buttons>

  <sky-action-hub-content>
    <h2>Additional content</h2>
    <p>More content can go here as needed for the functional area.</p>
  </sky-action-hub-content>
</sky-action-hub>
```

#### example.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ApplicationRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyModalTestingController, SkyModalTestingModule } from '@skyux/modals/testing';
import { SkyActionHubHarness } from '@skyux/pages/testing';

import { PagesActionHubExampleComponent } from './example.component';
import { SettingsModalComponent } from './settings-modal.component';

describe('Action hub', () => {
  async function setupTest(): Promise<{
    actionHubHarness: SkyActionHubHarness;
    fixture: ComponentFixture<PagesActionHubExampleComponent>;
    loader: HarnessLoader;
  }> {
    const fixture = TestBed.createComponent(PagesActionHubExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const actionHubHarness = await loader.getHarness(
      SkyActionHubHarness.with({
        dataSkyId: 'action-hub',
      }),
    );

    return { actionHubHarness, fixture, loader };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PagesActionHubExampleComponent, SkyModalTestingModule],
    });
  });

  it('should have correct page title', async () => {
    const { actionHubHarness } = await setupTest();

    expect(await actionHubHarness.getTitle()).toBe('Active accounts');
  });

  it('should show needs-attention items', async () => {
    const { actionHubHarness } = await setupTest();

    expect(
      await actionHubHarness
        .getNeedsAttentionItems()
        .then(async (items) => await Promise.all(items.map((item) => item.getText()))),
    ).toEqual([
      '9 updates from portal',
      '8 new messages from online donation',
      '7 possible duplicates from constituent lists',
      '6 updates from portal',
      '5 new messages from online donation',
      '4 possible duplicates from constituent lists',
      '3 update from portal',
      '2 new messages from online donation',
      '1 possible duplicate from constituent lists',
    ]);
  });

  it('should show recent links', async () => {
    const { actionHubHarness } = await setupTest();

    const linkListHarness = await actionHubHarness.getRecentLinks();
    const listItems = await linkListHarness.getListItems();
    expect(await Promise.all(listItems.map((item) => item.getText()))).toEqual([
      'Recent 1',
      'Recent 2',
      'Recent 3',
      'Recent 4',
      'Recent 5',
    ]);
  });

  it('should show related links', async () => {
    const { actionHubHarness } = await setupTest();

    const linkListHarness = await actionHubHarness.getRelatedLinks();
    const listItems = await linkListHarness.getListItems();
    expect(await Promise.all(listItems.map((item) => item.getText()))).toEqual(['Link 1', 'Link 2', 'Link 3']);
  });

  it('should show settings links', async () => {
    const { actionHubHarness } = await setupTest();

    const linkListHarness = await actionHubHarness.getSettingsLinks();
    const listItems = await linkListHarness.getListItems();
    expect(await Promise.all(listItems.map((item) => item.getText()))).toEqual(['Number', 'Color']);
    const modalController = TestBed.inject(SkyModalTestingController);
    modalController.expectNone();
    await listItems[0].click();
    const app = TestBed.inject(ApplicationRef);
    app.tick();
    await app.whenStable();
    modalController.expectCount(1);
    modalController.expectOpen(SettingsModalComponent);
  });
});
```

#### modal-title-token.ts

```typescript
import { InjectionToken } from '@angular/core';

export const MODAL_TITLE = new InjectionToken<string>('MODAL_TITLE');
```

#### settings-modal.component.html

```html
<form [formGroup]="formGroup" (submit)="modalInstance.save()">
  <sky-modal data-sky-id="settings-modal" [headingText]="title">
    <sky-modal-content>
      @for (field of fields; track field) {
      <ng-container class="row">
        @switch (title) { @case ('Color') {
        <sky-colorpicker #colorPicker stacked [labelText]="field">
          <input type="text" [formControlName]="field" [skyColorpickerInput]="colorPicker" />
        </sky-colorpicker>
        } @default {
        <sky-input-box stacked [labelText]="field">
          <input type="text" [formControlName]="field" />
        </sky-input-box>
        } }
      </ng-container>
      }
    </sky-modal-content>
    <sky-modal-footer>
      <button class="sky-btn sky-btn-primary sky-theme-margin-right-s" type="submit">Save</button>
      <button class="sky-btn sky-btn-link" type="button" (click)="modalInstance.close()">Close</button>
    </sky-modal-footer>
  </sky-modal>
</form>
```

#### settings-modal.component.spec.ts

```typescript
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyModalHarness } from '@skyux/modals/testing';
import { SkyActionHubHarness } from '@skyux/pages/testing';

import { PagesActionHubExampleComponent } from './example.component';
import { MODAL_TITLE } from './modal-title-token';

describe('SettingsModalComponent', () => {
  async function setupTest(): Promise<{
    actionHubHarness: SkyActionHubHarness;
    fixture: ComponentFixture<PagesActionHubExampleComponent>;
    loader: HarnessLoader;
    rootLoader: HarnessLoader;
  }> {
    const fixture = TestBed.createComponent(PagesActionHubExampleComponent);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    const actionHubHarness = await loader.getHarness(
      SkyActionHubHarness.with({
        dataSkyId: 'action-hub',
      }),
    );

    return { actionHubHarness, rootLoader, fixture, loader };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PagesActionHubExampleComponent],
      providers: [
        {
          provide: MODAL_TITLE,
          useValue: 'Settings Modal Test',
        },
      ],
    });
  });

  it('should show settings modal', async () => {
    const { actionHubHarness, rootLoader } = await setupTest();
    const settingsLinksHarness = await actionHubHarness.getSettingsLinks();
    const settingsLinks = await settingsLinksHarness.getListItems();
    expect(settingsLinks).toHaveSize(2);
    await settingsLinks[1].click();
    const modalHarness = await rootLoader.getHarness(
      SkyModalHarness.with({
        dataSkyId: 'settings-modal',
      }),
    );
    expect(await modalHarness.getHeadingText()).toBe('Color');
    const consoleSpy = spyOn(console, 'log').and.stub();
    const modalElement = TestbedHarnessEnvironment.getNativeElement(await modalHarness.host());
    const submit = modalElement.querySelector('button[type="submit"]');
    expect(submit).toBeTruthy();
    expect(submit?.textContent?.trim()).toBe('Save');
    (submit as HTMLButtonElement).click();
    expect(consoleSpy).toHaveBeenCalledWith({
      'Color 1': '',
      'Color 2': '',
      'Color 3': '',
      'Color 4': '',
      'Color 5': '',
    });
  });
});
```

#### settings-modal.component.ts

```typescript
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyColorpickerModule } from '@skyux/colorpicker';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyModalInstance, SkyModalModule } from '@skyux/modals';

import { MODAL_TITLE } from './modal-title-token';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  imports: [FormsModule, ReactiveFormsModule, SkyColorpickerModule, SkyInputBoxModule, SkyModalModule],
})
export class SettingsModalComponent {
  protected formGroup: FormGroup;
  protected fields: string[] = [];

  protected readonly modalInstance = inject(SkyModalInstance);
  protected readonly title = inject(MODAL_TITLE);
  readonly #formBuilder = inject(FormBuilder);

  constructor() {
    const controls: Record<string, AbstractControl> = {};

    for (let i = 1; i <= 5; i++) {
      const field = `${this.title} ${i}`;
      this.fields.push(field);
      controls[field] = this.#formBuilder.control('');
    }

    this.formGroup = this.#formBuilder.group(controls);

    this.modalInstance.closed.subscribe((args) => {
      if (args.reason === 'save') {
        console.log(this.formGroup.value);
      }
    });
  }
}
```
