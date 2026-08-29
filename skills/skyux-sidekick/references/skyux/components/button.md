---
Title: Button
Reference: https://developer.blackbaud.com/skyux/components/button
---

# Button

Button classes provide styles for buttons and hyperlinks that trigger actions.

## Usage

The styles for buttons and hyperlinks convey meaning about their roles, distinguish between navigation and action, and indicate levels of emphasis or priority.

### Use when

#### Primary buttons

Use a primary button to trigger the most important or most frequently used action on a page or modal. To group multiple actions, use a [dropdown button](./dropdown.md).

For example, use a primary button for a modal's terminal **Save** action. For more information, see the primary button guidelines below.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-primary.367ef6c1a734bacb281c52a8c4c85b81.png)

The primary button uses a bold, saturated color to convey importance and drive user workflows.

#### Secondary buttons

Use secondary buttons to trigger important or common actions that aren't the most important or most frequently used actions on pages and modals. To group multiple actions, use a [dropdown button](./dropdown.md).

For example, use secondary buttons for common page-level actions on [record pages](../design/guidelines/page-layouts/record-page.md) and [action hub pages](../design/guidelines/page-layouts/action-hub.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-secondary.6ea488097db757876cccf6240f6849f4.png)

Secondary buttons use a style that stands out but draws less attention than a primary button.

#### Link buttons

Use link buttons to trigger infrequently used actions and actions that exit tasks or modals without saving. To group multiple actions, use a [dropdown button](./dropdown.md).

For example, use link buttons for a modal's regressive **Cancel** action.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-link.eaff5ffe9584ff68ae93067620724a79.png)

Link buttons use a lighter visual weight than secondary buttons but occupy the same amount of space.

#### Block buttons

Use block buttons to add emphasis to primary, secondary, and link buttons in linear workflows with limited options. Typically, you stack block buttons and place a primary button on top. Don't use block buttons in experiences where users can start many different tasks.

For example, use block buttons in authentication workflows and checkout experiences. Block buttons are suitable for mobile experiences where workflows are typically narrow with limited paths. Always extend block buttons to fill their container.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/block-button-do.5cd1109480783340424b691a88489dd5.png)

Use block buttons when workflows have few options, limited content, and linear objectives.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/block-button-do-not.d7f7dfb2c944d3a52a5b77a8bf1ced41.png)

Don't use block buttons when an action is just one of many tasks that users can start or when an action isn't relevant to all the surrounding content.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/block-button-mobile.d7762beb8c31cd53662c8b47a5a677e5.png)

Use block buttons for mobile experiences with straightforward, linear workflows.

#### Logo block buttons

Use logo block buttons to include business logos within block buttons, even if some of the buttons in a group contain icons that aren't logos. The left-aligned icons make identification easier, especially in groups.

For example, use logo block buttons for options to sign in through specific companies.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/block-button-logo.4b1b1d8dbcbcf35f25c79038335b6988.png)

Use logo block buttons when actions are specific to a company.

#### Toolbar buttons

Use toolbar buttons to trigger actions that apply to list views or the items in list views. To group multiple actions, use a [dropdown button](./dropdown.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-toolbar.4f09d3e93440afd07db324fa2f0b1f77.png)

Toolbar buttons reduce the width of secondary buttons to allow more options in the toolbar.

#### Borderless icon buttons

Use borderless icon buttons to trigger common actions, such as edit and delete, when space is too tight for labels and icons are sufficient to represent actions.

For example, use borderless icon buttons to invoke inline forms from repeater rows or to edit the contents of a box.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-borderless.ea258ed092e95878abb2175990adf968.png)

Borderless icon buttons use a visual weight that is noticable but not attention-drawing.

#### Inline links

Use inline links to navigate between pages and to link to external applications or services. Don't group inline links with other buttons.

For example, use inline links to create hyperlinks between street addresses and a map application.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-inline-link.ba2c1c94a8147c73cc26d36242c3ad9b.png)

Inline links use no padding or spacing adn appear inline with text instead of in their own rectangular space.

#### Danger buttons

Use danger buttons for primary actions that delete existing data, such as records or settings. Don't use danger buttons for actions that delete unsaved data or for secondary actions.

The main use cases for danger buttons are [confirmation dialogs](./confirm.md) and [inline delete confirmations](./inline-delete.md) that appear when users delete existing data.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/confirm/confirm-content-1.680e21b3d5d3c14ffc942e0f734cd449.png)

Confirmation dialogs use danger buttons for actions that delete existing data.

#### Prominent header borderless icon buttons

Use prominent header borderless icon buttons inside prominent container headers. Prominent containers, such as chat panels, WYSIWYG editors, and help files, display tools or systems alongside the main page content but don't extend the page content.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/prominent-header-icon-button.31f85257d539c47a24f33b938a6ae6d9.png)

Use prominent header borderless icon buttons for actions inside prominent container headers.

### Don't use when

Don't use multiple buttons in a row for a similar, but distinct actions. To group multiple actions, use a [dropdown button](./dropdown.md) instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-dont-use-multiple.b11fb7bce11ae1f57b07bacb47f21215.png)

Don't place multiple similar actions in a row.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-use-multiple.de846b0bc55f2a434c8fd496eee996b2.png)

Do group multiple similar actions in a dropdown button.

## Primary button guidelines

All SKY UX page layouts follow consistent guidelines for the placement and styling of primary buttons.

### Use primary buttons when

Use a primary button to trigger the most important or most frequently used action on a page or modal. If the action applies to an entire page, place the button in the page header. If the action applies to child content, place the button in the container for that content.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-page-level.d41f8d7366756aae876a6f206592774a.png)

Do use primary buttons in the containers that they directly impact.

### Don't use primary buttons when

Don't use multiple primary actions on a page and modal. Only include one primary button to ensure that it draws user attention.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-dont-multiple-actions.f47781d38e22b21d45a75093975aa95e.png)

Don't use multiple primary buttons.

Don't use multiple primary buttons when users have multiple options to complete a primary action. Instead, use [action buttons](./action-button.md) to present the initial decision.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-dont-multiple-ways.d337e49da27f69f10ad9f66f2283a0ab.png)

Don't use multiple primary buttons to present options.

Don't use primary buttons when pages and modals don't have a most important or most frequently used action.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/pagelayout/primary-usage-no-primary.ae6fef2ce7f2041992af75fa7d0dba97.png)

Some pages don't have a primary button.

## Anatomy

1

Label

2

Icon (optional)

![image](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-anatomy.b855af210b389ea6c8807b90a49bd817.png)

## Options

### Icons

Use meaningful icons alongside button labels to help users understand the purpose of buttons at a glance, but don't use icons solely for visual interest or decoration. For more details on when to use icons, see the [icon guidelines](./icon.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/button-options-icons.fdbaed406ead2d7504e151d416d56c60.png)

Do use icons when they supplement button labels.

### Tooltips

For buttons that use icons without labels and buttons that aren't intuitive, you can provide tooltips to describe the button. However, we recommend that you use tooltips sparingly and rely on labels whenever possible. Don't arbitrarily replace button labels with tooltips.

Tooltip text needs to be clear and concise, and it doesn't need to use complete sentences. Don't restate labels or provide extraneous details. Create tooltips with the `title` attribute of the button; don't use [popovers](./popover.md).

## Behavior and states

### Disabled states

Disabled buttons prevent user interactions. The most common use case is to disable buttons until users complete prerequisites. To disable buttons or hyperlinks, use HTML or Angular attributes instead of CSS classes.

## Content

### Button labels

For buttons with only one possible direct object, such as **New** buttons in record list toolbars, use the following format for labels:

**<Verb>**

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/buttons-usage-1-modern.1a3709b6f28b9886b4f2a63577e93aa5.png)

For buttons with multiple possible direct objects, such as **Edit goals** or **Email contact** buttons in page headers, use the following format for labels:

**<Verb> <direct object>**

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/button/buttons-usage-2-modern.ebbf46797cdaff41eff0a33f1fb8ca4f.png)

#### Additional button label guidelines

- Use sentence-style capitalization.
- Use singular or plural direct objects to indicate whether buttons act on one or multiple items.
- Don't include articles. For example, use **Delete goal** instead of **Delete a goal**.
- Don't append extra words such as “details.” For example, use **Edit goal** instead of **Edit goal details**.

### Labels to create and remove items

Button labels for actions that create or remove items require consistent terminology to send a clear message. In general, actions fall into one of two categories:

1.  Actions create new items or delete existing items. This is the most common scenario, and when in doubt, use the following terminology for button labels:
    - **New**: For buttons that open a modal to create something that didn't exist before, use **New**. For example, **New contact**.
    - **Delete**: For buttons that remove something that existed previously, use **Delete**. For example, **Delete contact**.

2.  Actions create or sever connections between items that already exist. This scenario is less common and uses the following terminology for button labels:
    - **Add**: For buttons that associate an existing item with another item, use **Add**. For example, **Add student to class**.
    - **Remove**: For buttons that remove the association between items, use **Remove**. For example, **Remove student from class**.

Don't use **Create** as an alternative to **New** or **Add** in button labels.

This guidance applies to button labels and also to the headings on the pages or modals that appear when users create and remove items. In other UI text, use the most appropriate terminology for the particular scenario. For example, the label for the primary button in a modal that appears after users select **New** or **Add** buttons should generally be **Save** and doesn't need to use the **New** or **Add** terminology.

## Related information

### Components

- [Dropdown](./dropdown.md)
- [Icon](./icon.md)
- [Toolbar](./toolbar.md)

### Guidelines

- [Buttons and links](../design/guidelines/buttons-links.md)
- [Manage data](../design/guidelines/managing-records.md)
- [Page design](../design/guidelines/page-layouts/README.md)

## Installation

To use button styles, add the following to the `build` architect in the application's `angular.json` file:

    "styles": [
          "@skyux/theme/css/sky.css",
          "@skyux/theme/css/themes/modern/styles.css"
        ]

## Markup

SKY UX styles allow `<a>` and `<button>` elements to appear interchangeable, but subtle differences in behavior make it important to select the correct implementation. Most notably, the elements differ in right-click options, long-touch and force-touch behaviors for mobile browsers, keyboard shortcuts, and their behavior with screen readers and other assistive technology.

Follow this guidance on which HTML tag to use in SKY UX:

- For actions that only load new URLs in the browser, use the `<a>` element.
- For all other actions, use the `<button>` element.

Only use `<a>` elements when nothing changes about the state of the system and users just navigate from one view to another. If affordances load new URLs but also perform other actions, use `<button>` elements. For example, while an affordance to delete a record page redirects users to a new view, it also changes the state of the system by deleting data, so it requires a `<button>` element.

## Accessible labels

If multiple button with the same visible label, such as "Edit," appear on the same page, include a unique `aria-label` attribute, such as "Edit phone" and "Edit address," to provide a text equivalent that ensures that users of assistive technology can distinguish the buttons on the page.

Icon-only buttons must also include `aria-label` attributes with text label values.

## Primary buttons

`sky-btn sky-btn-primary` classes style primary buttons.

Label only

    <button
      type="button"
      class="sky-btn sky-btn-primary"
    >
      Primary
    </button>

Label and icon

    <button
      type="button"
      class="sky-btn sky-btn-primary"
    >
      <sky-icon iconName="add" />
      Primary
    </button>

Icon only

    <button
      type="button"
      class="sky-btn sky-btn-primary"
      aria-label="Primary action"
    >
      <sky-icon iconName="add" />
    </button>

Block

<button
      type="button"
      class="sky-btn sky-btn-primary sky-btn-block"
    >
Block button
</button>

## Secondary buttons

`sky-btn sky-btn-default` classes style secondary buttons.

Label only

    <button
      type="button"
      class="sky-btn sky-btn-default"
    >
      Secondary
    </button>

Label and icon

    <button
      type="button"
      class="sky-btn sky-btn-default"
    >
      <sky-icon iconName="add" />
      Secondary
    </button>

Icon only

    <button
      type="button"
      class="sky-btn sky-btn-default"
      aria-label="Secondary action"
    >
      <sky-icon iconName="add" />
    </button>

Block

    <button
    type="button"
    class="sky-btn sky-btn-default sky-btn-block"
    >
      Block button
    </button>

Block logo

    <button
      type="button"
      class="sky-btn sky-btn-default sky-btn-block"
    >
      <sky-icon
        class="sky-btn-block-logo"
        iconName="google-branded"
      />
      Block logo
    </button>

## Link buttons

The `sky-btn sky-btn-link` classes style link buttons.

Label only

    <button
      type="button"
      class="sky-btn sky-btn-link"
    >
      Link
    </button>

Label and icon

    <button
      type="button"
      class="sky-btn sky-btn-link"
    >
      <sky-icon iconName="add" /> Link
    </button>

## Toolbar buttons

`sky-btn sky-btn-default` classes style toolbar buttons. These are the same classes that style secondary buttons, but when they are applied within `sky-toolbar-item` elements, the [toolbar component](./toolbar.md) applies additional styling in modern theme.

Label only

    <sky-toolbar>
      <sky-toolbar-item>
        <button
          type="button"
          class="sky-btn sky-btn-default"
        >
          Toolbar
        </button>
      </sky-toolbar-item>
    </sky-toolbar>

Label and icon

    <sky-toolbar>
      <sky-toolbar-item>
        <button
          type="button"
          class="sky-btn sky-btn-default"
        >
          <sky-icon iconName="add" /> Toolbar
        </button>
      </sky-toolbar-item>
    </sky-toolbar>

Icon only

    <sky-toolbar>
      <sky-toolbar-item>
        <button
          type="button"
          class="sky-btn sky-btn-default"
          aria-label="Toolbar action"
          >
          <sky-icon iconName="add" />
        </button>
      </sky-toolbar-item>
    </sky-toolbar>

## Borderless icon buttons

`sky-btn sky-btn-icon-borderless` classes style borderless icon buttons. Always provide an `aria-label` attribute to support assistive technology users.

Icon only

    <button
      type="button"
      class="sky-btn sky-btn-icon-borderless"
      aria-label="Borderless icon action"
    >
      <sky-icon iconName="edit" />
    </button>

## Prominent header borderless icon buttons

`sky-btn sky-btn-icon-borderless-on_prominent` classes style borderless icon buttons that sit on the [prominent container header background](../design/styles/color.md). Use them for actions in the headers of containers that display tools alongside the main page content, such as chat panels, WYSIWYG editors, and help files. Always provide an `aria-label` attribute to support assistive technology users.

Icon only

    <div
      class="sky-theme-color-background-container-header-prominent sky-theme-border-container-header-prominent"
    >
      <button
        type="button"
        class="sky-btn sky-btn-icon-borderless-on_prominent"
        aria-label="Prominent header icon action"
      >
        <sky-icon iconName="edit" />
      </button>
    </div>

## Inline link

`sky-btn sky-btn-link-inline` classes style inline links.

Label only

Inline link

    <a
      class="sky-btn sky-btn-link-inline"
    >
      Inline link
    </a>

## Disabled buttons

To disable buttons and hyperlinks, use HTML or Angular attributes instead of CSS classes. Use `disabled` in HTML or `[disabled]="true"` in Angular.
