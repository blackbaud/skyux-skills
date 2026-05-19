---
Title: Page summary (deprecated)
Reference: https://developer.blackbaud.com/skyux/components/page-summary
---
> **Deprecated.** Use [page](./page/README.md) instead. See below for migration details.


# Page summary (deprecated)

The page summary displays critical information and actions for users to access quickly and frequently.

Page summary is deprecated in favor of [page](./page/README.md)'s `sky-page-header` component. For more information, see the [page summary deprecation instructions](../learn/develop/deprecation/page-summary.md).

## Usage

### Use when

Use page summary effectively by limiting the number of items included. The page summary is prime real estate on the page, and when you limit the number of items, you magnify the impact of each one.

## Options

### Toolbar

Use the [toolbar component](./toolbar.md) a to add page summary actions in a SKY UX-themed toolbar. Only include actions that relate to the page as a whole, and exclude actions that are specific to the tiles on the page. Limit the number of actions in the toolbar. If the page summary requires many actions, re-examine the tasks and consider alternative workflows.

Display the toolbar below the page summary. Place frequently used actions directly in the toolbar, and place less-frequently used actions in a more actions menu. Actions to collapse and expand all tiles on the record are docked on the right side of the toolbar.

## Content

### Title and subtitle

You can display a title and subtitle in the summary to uniquely identify the page content. You can pull data for the title from multiple sources, and you can combine multiple pieces of data in the title. The data to use depends on your users and the context in which they visit the page. You can display additional information in the subtitle. For example, you can display a record's natural language name in the title and its system-generated or coded identifier in the subtitle.

### Image

You can display an image in the summary to help users identify a record or complete a core task. We recommend that you do not include images just for decorative purposes because they are likely to distract users and interfere with task completion.

### Status

You can display important status information about a page's content with labels in the status section of the page summary.

### Arbitrary content

You can highlight important information about a page's content in the key information section of the page summary. This section can display any type of content, but it generally highlights a key information block such as important summary numbers.

### Alert

You can display messages that require immediate attention as alerts within the page summary. For example, you can display system-generated messages when certain criteria are met.

## Related information

### Components

- [Toolbar](./toolbar.md)

## Installation

NPM package

`@skyux/layout`[View in NPM](https://www.npmjs.com/package/@skyux/layout) | [View in GitHub](https://github.com/blackbaud/skyux/blob/main/libs/components/layout/src/lib/modules/page-summary/page-summary.module.ts#L39)

Install with NPM

`npm install --save-exact @skyux/layout`

## SkyPageSummaryModule

Type: Module

`import { SkyPageSummaryModule } from '@skyux/layout';`

Warning: **Deprecated.** `SkyPageSummaryModule` is deprecated. For page templates and techniques to summarize page content, see the page design guidelines. For more information, see [https://developer.blackbaud.com/skyux/design/guidelines/page-layouts](../design/guidelines/page-layouts/README.md).

## SkyPageSummaryComponent

Type: Component

Selector: `sky-page-summary`

Warning: **Deprecated.** `SkyPageSummaryComponent` is deprecated. For page templates and techniques to summarize page content, see the page design guidelines. For more information, see [https://developer.blackbaud.com/skyux/design/guidelines/page-layouts](../design/guidelines/page-layouts/README.md).

Specifies the components to display in the page summary.

## SkyPageSummaryTitleComponent

Type: Component

Selector: `sky-page-summary-title`

Specifies a title to identify the page content.

## SkyPageSummarySubtitleComponent

Type: Component

Selector: `sky-page-summary-subtitle`

Specifies a subtitle to identify the page content.

## SkyPageSummaryAlertComponent

Type: Component

Selector: `sky-page-summary-alert`

Displays messages that require immediate attention as [alerts](./alert.md) within the page summary.

## SkyPageSummaryContentComponent

Type: Component

Selector: `sky-page-summary-content`

Displays content in the arbitrary section of the page summary.

## SkyPageSummaryImageComponent

Type: Component

Selector: `sky-page-summary-image`

Displays an image in the page summary to identify a record or help users complete a core task.

## SkyPageSummaryKeyInfoComponent

Type: Component

Selector: `sky-page-summary-key-info`

Highlights important information about a page in the key information section of the page summary.

## SkyPageSummaryStatusComponent

Type: Component

Selector: `sky-page-summary-status`

Displays [labels](./label.md) to highlight important status information about a page's content.

## Code Examples

### Page summary with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyAvatarModule } from '@skyux/avatar';
import { SkyCheckboxModule } from '@skyux/forms';
import { SkyAlertModule, SkyKeyInfoModule, SkyLabelModule } from '@skyux/indicators';
import { SkyPageSummaryModule } from '@skyux/layout';

/**
 * @title Page summary with basic setup
 */
@Component({
  selector: 'app-layout-page-summary-basic-example',
  templateUrl: './example.component.html',
  imports: [
    FormsModule,
    SkyAlertModule,
    SkyAvatarModule,
    SkyCheckboxModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyPageSummaryModule,
  ],
})
export class LayoutPageSummaryBasicExampleComponent {
  protected name = 'Robert C. Hernandez';
  protected showAlert = true;
  protected showContent = true;
  protected showImage = true;
  protected showKeyInfo = true;
  protected showStatus = true;
  protected showSubtitle = true;
  protected showTitle = true;
}
```

#### example.component.html

```html
<sky-page-summary>
  @if (showAlert) {
  <sky-page-summary-alert>
    <sky-alert alertType="info"> This is an alert. </sky-alert>
  </sky-page-summary-alert>
  } @if (showImage) {
  <sky-page-summary-image>
    <sky-avatar [name]="name" [canChange]="true" />
  </sky-page-summary-image>
  } @if (showTitle) {
  <sky-page-summary-title> {{ name }} </sky-page-summary-title>
  } @if (showSubtitle) {
  <sky-page-summary-subtitle> Board member </sky-page-summary-subtitle>
  } @if (showStatus) {
  <sky-page-summary-status>
    <sky-label labelType="success"> Fundraiser </sky-label>
    <sky-label> Inactive </sky-label>
  </sky-page-summary-status>
  } @if (showContent) {
  <sky-page-summary-content>
    This is the arbitrary content section. You can display any kind of content to complement the content on a page. We
    recommend that you display content to support the key tasks of users of users who visit the page. We also recommend
    that you keep in mind the context of how users will use the content and limit the amount of content to avoid
    overloading the summary.
  </sky-page-summary-content>
  } @if (showKeyInfo) {
  <sky-page-summary-key-info>
    <sky-key-info>
      <sky-key-info-value> $1,500 </sky-key-info-value>
      <sky-key-info-label> Largest gift </sky-key-info-label>
    </sky-key-info>
    <sky-key-info>
      <sky-key-info-value> 37 </sky-key-info-value>
      <sky-key-info-label> Total gifts </sky-key-info-label>
    </sky-key-info>
  </sky-page-summary-key-info>
  }
</sky-page-summary>

<ul class="sky-theme-list-unstyled">
  <li>
    <sky-checkbox labelText="Show title" [(ngModel)]="showTitle" />
  </li>
  <li>
    <sky-checkbox labelText="Show subtitle" [(ngModel)]="showSubtitle" />
  </li>
  <li>
    <sky-checkbox labelText="Show image" [(ngModel)]="showImage" />
  </li>
  <li>
    <sky-checkbox labelText="Show record status" [(ngModel)]="showStatus" />
  </li>
  <li>
    <sky-checkbox labelText="Show key information" [(ngModel)]="showKeyInfo" />
  </li>
  <li>
    <sky-checkbox labelText="Show arbitrary content" [(ngModel)]="showContent" />
  </li>
  <li>
    <sky-checkbox labelText="Show alert" [(ngModel)]="showAlert" />
  </li>
</ul>
```
