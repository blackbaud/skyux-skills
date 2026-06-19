---
Title: Tree view
Reference: https://developer.blackbaud.com/skyux/components/angular-tree
---

# Tree view

Tree views provide hierarchical list views with multiple modes for selecting items in the lists.

## Usage

### Use when

Use tree views to represent hierarchical information. You can make tree views read-only or allow users to select list items.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/use-when-default.2d458a600256ee30925700b372313178.png)

Do use tree views for hierarchical lists.

## Anatomy

1

Expand/collapse button

2

List item

3

Checkbox (optional)

4

Context menu (optional)

5

Help inline button  (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/tree-view-anatomy-default.5913592646172044f2ee9a83d0444f94.png)

## Options

### Selection mode

You can use the single-select and multiselect modes to allow users to select list items.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/option-select-default.6e3757f4a3e25a04b8ce807dd790c993.png)

You can use the cascading selection mode to select descendant nodes when users select items. Use this mode when users are likely to select all descendants within nodes.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/option-cascading-default.34472060e80e4523a02e57a3c3b22e72.png)

You can use the leaf-only selection mode to limit user selections to leaf nodes. Use this mode when higher-level nodes are categories that contain leaf nodes for users to select.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/option-leaf-only-default.ee33bea1c9cc373d7963838eb6d8169d.png)

### Help inline button

When you need to supplement a tree view list item with additional information but don't require persistent inline help, you can place a [help inline button](./help-inline.md) beside the list item to invoke contextual user assistance.

### Navigation mode

When users need to work with the items in hierarchical lists and take actions, you can place tree views within [split views](./split-view.md). When users select items to work on, tree views highlight those items with the active state.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/option-split-view-default.005f485047c1383d9ecbbdafbc18563a.png)

### Read-only mode

You can use the read-only mode to allow users to view hierarchical information in cases where items are not selectable and are not used for navigation. You can still include interactive elements such as hyperlinks in the list items.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/option-read-only-default.6676713b94627cd0d6421145fd8754ed.png)

### Context menus

When users need to perform actions on items in hierarchical lists, you can include [context menus](./dropdown.md) to provide access to those actions.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/option-context-menu-default.fb5aa7ce9a6aa313acd3895eb740c3c9.png)

## Behavior and states

### Expand and collapse nodes

The button beside items expands and collapses the node.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/tree-view/behavior-expand-default.6ee87478950a12397c25e3a96f801be6.png)

## Related information

### Components

- [Angular tree component](https://circlongroup.github.io/angular-tree-component/)
- [Data grid](./data-grid.md)
- [Dropdown](./dropdown.md)
- [Help inline button](./help-inline.md)
- [Repeater](./repeater.md)
- [Split view](./split-view.md)

## Installation

NPM package

`@skyux/angular-tree-component`[View in NPM](https://www.npmjs.com/package/@skyux/angular-tree-component) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/angular-tree-component/src/lib/modules/angular-tree/angular-tree.module.ts#L22)

Install with NPM

`npm install --save-exact @skyux/angular-tree-component`

## SkyAngularTreeModule

Type: Module

`import { SkyAngularTreeModule } from '@skyux/angular-tree-component';`

## SkyAngularTreeWrapperComponent

Type: Component

Selector: `sky-angular-tree-wrapper`

Wraps the Angular `tree-root` component as part of the `SkyAngularTreeModule` that provides SKY UX components and styles to complement the `angular-tree-component` library and apply SKY UX themes and functionality to hierarchical list views. For information about the `tree-root` component, see the [Angular tree component documentation](https://angular2-tree.readme.io/docs).

### Inputs

#### `readOnly: boolean | undefined`

Whether to render the tree view in read-only mode. This mode disables selected and active states on the tree view nodes.

Default: `false`

#### `selectLeafNodesOnly: boolean | undefined`

Whether to use leaf-only selection mode. For tree views with [checkboxes](https://angular2-tree.readme.io/docs/tri-state-checkboxes), this mode limits user selections to leaf nodes and prevents users from selecting parent nodes.

Default: `false`

#### `selectSingle: boolean | undefined`

Whether to use single-select mode. For tree views with [checkboxes](https://angular2-tree.readme.io/docs/tri-state-checkboxes), this mode limits user selections to one node at a time.

Default: `false`

#### `showToolbar: boolean | undefined`

Whether to display a toolbar with buttons to expand and collapse all nodes and buttons to select and clear all checkboxes. The select and clear buttons only appear when you enable checkboxes. To enable [checkboxes](https://angular2-tree.readme.io/docs/tri-state-checkboxes).

Default: `false`

## SkyAngularTreeNodeComponent

Type: Component

Selector: `sky-angular-tree-node`

Replaces the default tree node template with a SKY UX node as part of the `SkyAngularTreeModule` that provides SKY UX components and styles to complement the `angular-tree-component` library and apply SKY UX themes and functionality to hierarchical list views. You must wrap this component in an `ng-template` tag with the template reference variable `#treeNodeFullTemplate`. For information about tree node templates, see the [Angular tree component documentation](https://angular2-tree.readme.io/docs/templates). To display context menus with actions for individual items in hierarchical lists, place [dropdowns](../-popovers/docs/dropdown.md) inside the Angular tree node component, which automatically handles styling and positioning for context menus.

### Inputs

#### `index: number | undefined`

Required

The `index` property from the parent `ng-template`.

#### `node: TreeNode | undefined`

Required

The `node` property from the parent `ng-template`. For information about the `TreeNode` object, see the [Angular tree component documentation](https://angular2-tree.readme.io/docs/api).

#### `helpKey: string | undefined`

A help key that identifies the global help content to display. When specified, a [help inline](./help-inline.md) button is placed beside the tree node label. Clicking the button invokes [global help](../learn/develop/global-help.md) as configured by the application.

#### `helpPopoverContent: string | TemplateRef<unknown> | undefined`

The content of the help popover. When specified, a [help inline](./help-inline.md) button is added to the tree node. The help inline button displays a [popover](./popover.md) when clicked using the specified content and optional title.

#### `helpPopoverTitle: string | undefined`

The title of the help popover. This property only applies when `helpPopoverContent` is also specified.

#### `templates: any`

The `templates` property from the parent `ng-template`.

## Code Examples

### Tree view with basic setup

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeModule } from '@blackbaud/angular-tree-component';
import { SkyAngularTreeModule } from '@skyux/angular-tree-component';
import { SkyHelpInlineModule } from '@skyux/help-inline';

/**
 * @title Tree view with basic setup
 */
@Component({
  selector: 'app-angular-tree-component-angular-tree-basic-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyAngularTreeModule, SkyHelpInlineModule, TreeModule],
})
export class AngularTreeComponentAngularTreeBasicExampleComponent {
  protected nodes = [
    {
      name: 'Animals',
      isExpanded: true,
      helpPopoverContent: 'Example help content for animals.',
      children: [
        {
          name: 'Cats',
          isExpanded: true,
          helpPopoverContent: 'Example help content for cats.',
          helpPopoverTitle: 'What is a cat?',
          children: [{ name: 'Burmese' }, { name: 'Persian' }, { name: 'Tabby' }],
        },
        {
          name: 'Dogs',
          isExpanded: true,
          children: [
            {
              name: 'Beagle',
              helpPopoverContent: 'Example help content for beagles.',
            },
            { name: 'German shepherd' },
            { name: 'Labrador retriever' },
          ],
        },
      ],
    },
  ];
}
```

#### example.component.html

```html
<sky-angular-tree-wrapper>
  <tree-root #tree [nodes]="nodes">
    <ng-template #treeNodeFullTemplate let-index="index" let-node let-templates="templates">
      <sky-angular-tree-node
        [helpPopoverContent]="node.data.helpPopoverContent"
        [helpPopoverTitle]="node.data.helpPopoverTitle"
        [index]="index"
        [node]="node"
        [templates]="templates"
      />
    </ng-template>
  </tree-root>
</sky-angular-tree-wrapper>
```

### Tree view with help key

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeModule } from '@blackbaud/angular-tree-component';
import { SkyAngularTreeModule } from '@skyux/angular-tree-component';
import { SkyHelpInlineModule } from '@skyux/help-inline';

/**
 * @title Tree view with help key
 */
@Component({
  selector: 'app-angular-tree-component-angular-tree-help-key-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyAngularTreeModule, SkyHelpInlineModule, TreeModule],
})
export class AngularTreeComponentAngularTreeHelpKeyExampleComponent {
  protected nodes = [
    {
      name: 'Animals',
      isExpanded: true,
      helpPopoverContent: 'Example help content for animals.',
      children: [
        {
          name: 'Cats',
          isExpanded: true,
          helpPopoverContent: 'Example help content for cats.',
          helpPopoverTitle: 'What is a cat?',
          children: [
            { name: 'Burmese', helpKey: 'cat-burmese' },
            { name: 'Persian', helpKey: 'cat-persian' },
            { name: 'Tabby', helpKey: 'cat-tabby' },
          ],
        },
        {
          name: 'Dogs',
          isExpanded: true,
          children: [
            {
              name: 'Beagle',
              helpPopoverContent: 'Example help content for beagles.',
            },
            { name: 'German shepherd', helpKey: 'dog-shepherd' },
            { name: 'Labrador retriever', helpKey: 'dog-lab' },
          ],
        },
      ],
    },
  ];
}
```

#### example.component.html

```html
<sky-angular-tree-wrapper>
  <tree-root #tree [nodes]="nodes">
    <ng-template #treeNodeFullTemplate let-index="index" let-node let-templates="templates">
      <sky-angular-tree-node
        [attr.data-sky-id]="'node-' + node.data.name"
        [helpKey]="node.data.helpKey"
        [helpPopoverContent]="node.data.helpPopoverContent"
        [helpPopoverTitle]="node.data.helpPopoverTitle"
        [index]="index"
        [node]="node"
        [templates]="templates"
      />
    </ng-template>
  </tree-root>
</sky-angular-tree-wrapper>
```

### Tree view with pre selected nodes example

#### example.component.ts (primary file)

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITreeOptions, ITreeState, TreeModule } from '@blackbaud/angular-tree-component';
import { SkyAngularTreeModule } from '@skyux/angular-tree-component';
import { SkyHelpInlineModule } from '@skyux/help-inline';

/**
 * @title Tree view with pre selected nodes example
 */
@Component({
  selector: 'app-angular-tree-component-angular-tree-preselected-nodes-example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SkyAngularTreeModule, SkyHelpInlineModule, TreeModule],
})
export class AngularTreeComponentAngularTreePreselectedNodesExampleComponent {
  protected nodes = [
    {
      id: 'animals-node',
      name: 'Animals',
      isExpanded: true,
      helpPopoverContent: 'Example help content for animals.',
      children: [
        {
          id: 'cat-node',
          name: 'Cats',
          isExpanded: true,
          helpPopoverContent: 'Example help content for cats.',
          helpPopoverTitle: 'What is a cat?',
          children: [
            { id: 'cat-burmese-node', name: 'Burmese' },
            { id: 'cat-persian-node', name: 'Persian' },
            { id: 'cat-tabby-node', name: 'Tabby' },
          ],
        },
        {
          id: 'dog-node',
          name: 'Dogs',
          isExpanded: true,
          children: [
            {
              id: 'dog-beagle-node',
              name: 'Beagle',
              helpPopoverContent: 'Example help content for beagles.',
            },
            { id: 'dog-german-shepherd-node', name: 'German shepherd' },
            { id: 'dog-labrador-retriever-node', name: 'Labrador retriever' },
          ],
        },
      ],
    },
  ];

  protected state: ITreeState = {
    selectedLeafNodeIds: {
      'dog-labrador-retriever-node': true,
      'cat-burmese-node': true,
      'cat-persian-node': true,
      'cat-tabby-node': true,
    },
  };

  protected options: ITreeOptions = {
    useCheckbox: true,
  };
}
```

#### example.component.html

```html
<sky-angular-tree-wrapper>
  <tree-root #tree [nodes]="nodes" [options]="options" [state]="state">
    <ng-template #treeNodeFullTemplate let-index="index" let-node let-templates="templates">
      <sky-angular-tree-node
        [helpPopoverContent]="node.data.helpPopoverContent"
        [helpPopoverTitle]="node.data.helpPopoverTitle"
        [index]="index"
        [node]="node"
        [templates]="templates"
      />
    </ng-template>
  </tree-root>
</sky-angular-tree-wrapper>
```
