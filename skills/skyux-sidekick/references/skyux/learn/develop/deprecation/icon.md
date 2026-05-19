---
Title: Icon
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation/icon
---

# Icon

The `icon` input was removed from the [icon](../../../components/icon.md) component in favor of the `iconName` input as part of the SKY UX 12 [migration from FontAwesome icons to Fluent SVG icons](https://github.com/blackbaud/skyux/discussions/3394).

## How to migrate

Since SKY UX 12, the update process has automatically converted static, unbound usage of the `icon` input. For example, `<sky-icon icon="check-circle" />` is automatically updated to `<sky-icon iconName="success" />` with the appropriate icon name mapping applied.

However, bound template attributes require manual conversion because the automatic migration can't determine icon names at build time when they are bound to component properties. To migrate these icons, you need to manually update the template attribute names from `icon` to `iconName` and make sure the `iconName` values match the new icon names in the table below. For example:

    <!-- Before (using icon with bound attribute) -->
    <sky-icon [icon]="myIconName"></sky-icon>

    <!-- After (using iconName with mapped value) -->
    <sky-icon [iconName]="myIconName"></sky-icon>

## Icon name mappings

This table maps legacy FontAwesome icon names to the new Fluent SVG icon names. Use it to manually convert icons with bound names. For icons where a variant is specified, use the `variant` input to specify the `solid` or `line` style. When no variant is specified, icons use the default line style.

    <!-- Before: -->
    <sky-icon icon="certificate" />

    <!-- After: Icon with solid variant -->
    <sky-icon iconName="ribbon" variant="solid" />

<table>
  <thead>
    <tr>
      <th>
Legacy icon name
</th>
      <th>
New icon name
</th>
      <th>
Variant
</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>add</code></td>
      <td><code>add</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>address-book</code></td>
      <td><code>book-contacts</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>address-card</code></td>
      <td><code>contact-card</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>align-center</code></td>
      <td><code>text-align-center</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>align-left</code></td>
      <td><code>text-align-left</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>align-right</code></td>
      <td><code>text-align-right</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>angle-double-down</code></td>
      <td><code>chevron-double-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>angle-double-up</code></td>
      <td><code>chevron-double-up</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>angle-down</code></td>
      <td><code>chevron-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>angle-left</code></td>
      <td><code>chevron-left</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>angle-right</code></td>
      <td><code>chevron-right</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>angle-up</code></td>
      <td><code>chevron-up</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>apple</code></td>
      <td><code>apple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrow-circle-left</code></td>
      <td><code>arrow-circle-left</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrow-circle-right</code></td>
      <td><code>arrow-circle-right</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrow-down</code></td>
      <td><code>arrow-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrow-left</code></td>
      <td><code>arrow-left</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrow-right</code></td>
      <td><code>arrow-right</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrows</code></td>
      <td><code>arrow-move</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrows-v</code></td>
      <td><code>arrow-bidirectional-up-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>arrow-up-right-dots</code></td>
      <td><code>arrow-trending-lines</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>at</code></td>
      <td><code>mention</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>ban</code></td>
      <td><code>prohibited</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bar-chart</code></td>
      <td><code>data-bar-vertical-ascending</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bars</code></td>
      <td><code>navigation</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bars-2</code></td>
      <td><code>navigation</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bars-progress</code></td>
      <td><code>data-bar-horizontal-descending</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bb-diamond-2</code></td>
      <td><code>bb-diamond</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bb-diamond-2-solid</code></td>
      <td><code>bb-diamond</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>bell</code></td>
      <td><code>alert</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>binoculars</code></td>
      <td><code>eye</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>birthday-cake</code></td>
      <td><code>food-cake</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>bold</code></td>
      <td><code>text-bold</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bolt</code></td>
      <td><code>flash</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>book</code></td>
      <td><code>book</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>bookmark</code></td>
      <td><code>bookmark</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>building</code></td>
      <td><code>building</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>building-o</code></td>
      <td><code>building</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bullhorn</code></td>
      <td><code>megaphone</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>bullseye</code></td>
      <td><code>target</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>calculator</code></td>
      <td><code>calculator</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>calendar</code></td>
      <td><code>calendar-ltr</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>caret-down</code></td>
      <td><code>chevron-down</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>caret-left</code></td>
      <td><code>chevron-left</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>caret-right</code></td>
      <td><code>chevron-right</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>caret-up</code></td>
      <td><code>chevron-up</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cash-payment-bill-2</code></td>
      <td><code>cash-payment-bill</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cash-register</code></td>
      <td><code>money-hand</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>certificate</code></td>
      <td><code>ribbon</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>chalkboard-teacher</code></td>
      <td><code>share-screen-person</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chart-bar</code></td>
      <td><code>data-bar-horizontal</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chart-column</code></td>
      <td><code>data-bar-vertical-ascending</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chart-gantt</code></td>
      <td><code>gantt-chart</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chart-line</code></td>
      <td><code>data-trending</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chart-pie</code></td>
      <td><code>data-pie</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chart-simple</code></td>
      <td><code>data-histogram</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>check</code></td>
      <td><code>checkmark</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>check-circle</code></td>
      <td><code>success</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>check-square</code></td>
      <td><code>checkmark-square</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>check-square-o</code></td>
      <td><code>checkmark-square</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chess</code></td>
      <td><code>chess</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>chevron-down</code></td>
      <td><code>chevron-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>chevron-left</code></td>
      <td><code>chevron-left</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>chevron-right</code></td>
      <td><code>chevron-right</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>chevron-up</code></td>
      <td><code>chevron-up</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>circle</code></td>
      <td><code>circle</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>circle-o-notch</code></td>
      <td><code>spinner-ios</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>clipboard</code></td>
      <td><code>clipboard-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>clipboard-check</code></td>
      <td><code>clipboard-checkmark</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>clipboard-list</code></td>
      <td><code>clipboard-bullet-list</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>clock-o</code></td>
      <td><code>clock</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>clone</code></td>
      <td><code>copy</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>close</code></td>
      <td><code>close</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cloud</code></td>
      <td><code>cloud</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>cloud-download</code></td>
      <td><code>arrow-download</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cloud-upload</code></td>
      <td><code>arrow-upload</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>code</code></td>
      <td><code>code</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>code-branch</code></td>
      <td><code>branch-fork</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>code-fork</code></td>
      <td><code>branch-fork</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cog</code></td>
      <td><code>settings</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>cog-2</code></td>
      <td><code>settings</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cogs</code></td>
      <td><code>settings-cog-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>columns</code></td>
      <td><code>layout-column-three</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>comment</code></td>
      <td><code>chat-empty</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>comment-o</code></td>
      <td><code>chat-empty</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>comments</code></td>
      <td><code>chat-multiple</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>comments-o</code></td>
      <td><code>chat-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>compass</code></td>
      <td><code>compass-northwest</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>copy</code></td>
      <td><code>copy</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>copy-to-clipboard</code></td>
      <td><code>clipboard-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>credit-card</code></td>
      <td><code>payment</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>crop</code></td>
      <td><code>crop</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cubes</code></td>
      <td><code>cube-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>cutlery</code></td>
      <td><code>food</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>dashboard</code></td>
      <td><code>top-speed</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>database</code></td>
      <td><code>database-stack</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>database-2</code></td>
      <td><code>database-stack</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>desktop</code></td>
      <td><code>desktop</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>diagram-predecessor</code></td>
      <td><code>text-arrow-down-right-column</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>divider-line</code></td>
      <td><code>insert</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>doc-file</code></td>
      <td><code>document-doc</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>dollar</code></td>
      <td><code>dollar</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>double-chevron-down</code></td>
      <td><code>chevron-double-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>double-chevron-left</code></td>
      <td><code>chevron-double-left</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>double-chevron-right</code></td>
      <td><code>chevron-double-right</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>double-chevron-up</code></td>
      <td><code>chevron-double-up</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>download</code></td>
      <td><code>arrow-download</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>edit</code></td>
      <td><code>edit</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>ellipsis</code></td>
      <td><code>more-actions</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>ellipsis-h</code></td>
      <td><code>more-actions</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>ellipsis-v</code></td>
      <td><code>more-vertical</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>envelope</code></td>
      <td><code>mail</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>envelope-o</code></td>
      <td><code>mail</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>eraser</code></td>
      <td><code>eraser</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>exclamation-circle</code></td>
      <td><code>error-circle</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>exclamation-triangle</code></td>
      <td><code>warning</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>expand</code></td>
      <td><code>arrow-maximize</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>external-link</code></td>
      <td><code>open</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>external-link-alt</code></td>
      <td><code>open</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>eye</code></td>
      <td><code>eye</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>f</code></td>
      <td><code>letter-f</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>facebook</code></td>
      <td><code>facebook</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>fas fa-plus-circle</code></td>
      <td><code>add</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>fa-solid fa-map-pin</code></td>
      <td><code>location</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>feather-alt</code></td>
      <td><code>bookmark</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>file</code></td>
      <td><code>document</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-alt</code></td>
      <td><code>document-text</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>file-code</code></td>
      <td><code>document-chevron-double</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-code-o</code></td>
      <td><code>document-chevron-double</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-contract</code></td>
      <td><code>document-contract</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-excel-o</code></td>
      <td><code>document-xls</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-image-o</code></td>
      <td><code>document-image</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-invoice</code></td>
      <td><code>document-table</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-o</code></td>
      <td><code>document</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-pdf-o</code></td>
      <td><code>document-pdf</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>files-o</code></td>
      <td><code>document-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>file-text-o</code></td>
      <td><code>document-text</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>filter</code></td>
      <td><code>filter</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>flag</code></td>
      <td><code>flag</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>folder-open-o</code></td>
      <td><code>folder-open</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>gavel</code></td>
      <td><code>gavel</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>gear</code></td>
      <td><code>settings</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>gift</code></td>
      <td><code>gift</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>git</code></td>
      <td><code>git</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>github</code></td>
      <td><code>github</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>git-square</code></td>
      <td><code>git</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>globe</code></td>
      <td><code>globe</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>google</code></td>
      <td><code>google</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>graduation-cap</code></td>
      <td><code>hat-graduation</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>group</code></td>
      <td><code>people-team</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>hammer-wrench-2</code></td>
      <td><code>wrench-screwdriver</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>hand-paper-o</code></td>
      <td><code>hand-left</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>handshake</code></td>
      <td><code>handshake</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>handshake-o</code></td>
      <td><code>handshake</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>hands-helping</code></td>
      <td><code>handshake</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>help</code></td>
      <td><code>question-circle</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>hide</code></td>
      <td><code>eye-off</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>history</code></td>
      <td><code>history</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>hourglass-start</code></td>
      <td><code>hourglass-half</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>id-card</code></td>
      <td><code>contact-card</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td><code>image</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>images</code></td>
      <td><code>image-multiple</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>inbox</code></td>
      <td><code>mail-inbox</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>info</code></td>
      <td><code>info</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>info-circle</code></td>
      <td><code>info</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>info-circle info-circle-icon</code></td>
      <td><code>info</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>institution</code></td>
      <td><code>building-bank</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>italic</code></td>
      <td><code>text-italic</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>key</code></td>
      <td><code>key</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>keyboard-o</code></td>
      <td><code>keyboard</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>laptop</code></td>
      <td><code>laptop</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>laptop-code</code></td>
      <td><code>code</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>life-ring</code></td>
      <td><code>person-support</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>lightbulb</code></td>
      <td><code>lightbulb</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>lightbulb-o</code></td>
      <td><code>lightbulb</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>line-chart</code></td>
      <td><code>data-trending</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td><code>link</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>linkedin</code></td>
      <td><code>linkedin</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>list</code></td>
      <td><code>text-bullet-list</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>list-check</code></td>
      <td><code>task-list-ltr</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>list-ol</code></td>
      <td><code>text-number-list-ltr</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>list-ul</code></td>
      <td><code>text-bullet-list-ltr</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>lock</code></td>
      <td><code>lock-closed</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>lock-2</code></td>
      <td><code>lock-closed</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>long-arrow-down</code></td>
      <td><code>arrow-down</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>long-arrow-up</code></td>
      <td><code>arrow-up</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>m</code></td>
      <td><code>letter-m</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>magic</code></td>
      <td><code>wand</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>map</code></td>
      <td><code>map</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>map-marker</code></td>
      <td><code>location</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>map-o</code></td>
      <td><code>map</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>map-signs</code></td>
      <td><code>street-sign</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>microphone</code></td>
      <td><code>mic</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>minus</code></td>
      <td><code>subtract</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>minus-circle</code></td>
      <td><code>subtract-circle</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>mobile</code></td>
      <td><code>phone</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>money</code></td>
      <td><code>money</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>newspaper-o</code></td>
      <td><code>news</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>object-group</code></td>
      <td><code>group</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>open-new-tab</code></td>
      <td><code>open</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>open-new-tab-line</code></td>
      <td><code>open</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>paintbrush</code></td>
      <td><code>paint-brush</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>paperclip</code></td>
      <td><code>attach</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>paper-plane</code></td>
      <td><code>send</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>pdf-file</code></td>
      <td><code>document-pdf</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>pencil</code></td>
      <td><code>edit</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>pencil-alt</code></td>
      <td><code>edit</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>pencil-square-o</code></td>
      <td><code>note-edit</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>pen-to-square</code></td>
      <td><code>window-edit</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>people-group</code></td>
      <td><code>people-team</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>phone</code></td>
      <td><code>call</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>phone-square</code></td>
      <td><code>call</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>pie-chart</code></td>
      <td><code>data-pie</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>play</code></td>
      <td><code>play</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>play-circle</code></td>
      <td><code>play-circle</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>plug</code></td>
      <td><code>plug-disconnected</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>plus</code></td>
      <td><code>add</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>plus-circle</code></td>
      <td><code>add</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>plus-square</code></td>
      <td><code>add-square</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>power-off</code></td>
      <td><code>power</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>print</code></td>
      <td><code>print</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>printer</code></td>
      <td><code>print</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>puzzle-piece</code></td>
      <td><code>puzzle-piece</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>question</code></td>
      <td><code>question</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>question-circle</code></td>
      <td><code>question-circle</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>question-circle-o</code></td>
      <td><code>question-circle</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>recycle</code></td>
      <td><code>recycle</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>redo</code></td>
      <td><code>arrow-redo</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>refresh</code></td>
      <td><code>arrow-clockwise</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>road</code></td>
      <td><code>road</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>robot</code></td>
      <td><code>bot</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>rocket</code></td>
      <td><code>rocket</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>s</code></td>
      <td><code>letter-s</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>save</code></td>
      <td><code>save</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>search</code></td>
      <td><code>search</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>send</code></td>
      <td><code>send</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>server</code></td>
      <td><code>server</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>settings</code></td>
      <td><code>settings</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>shapes</code></td>
      <td><code>shapes</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>share</code></td>
      <td><code>share</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>share-alt</code></td>
      <td><code>share-android</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>share-square-o</code></td>
      <td><code>share</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>shield</code></td>
      <td><code>shield</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>shield-alt</code></td>
      <td><code>shield</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>shield-virus</code></td>
      <td><code>shield-keyhole</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td><code>eye</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sign-in</code></td>
      <td><code>arrow-enter</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sign-in-alt</code></td>
      <td><code>arrow-enter</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sitemap</code></td>
      <td><code>cube-tree</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>slack</code></td>
      <td><code>slack</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sliders</code></td>
      <td><code>options</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sort</code></td>
      <td><code>arrow-sort</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sparkles-2</code></td>
      <td><code>sparkles</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>spinner</code></td>
      <td><code>spinner-ios</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>square-o</code></td>
      <td><code>square</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>star</code></td>
      <td><code>star</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>sticky-note</code></td>
      <td><code>note</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>sticky-note-o</code></td>
      <td><code>note</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>stop</code></td>
      <td><code>stop</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>sync</code></td>
      <td><code>arrow-sync</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>t</code></td>
      <td><code>letter-t</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>table</code></td>
      <td><code>table</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>tablet</code></td>
      <td><code>tablet</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>tachometer-alt</code></td>
      <td><code>top-speed</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>tag</code></td>
      <td><code>tag</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>tags</code></td>
      <td><code>tag-multiple</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>tasks</code></td>
      <td><code>task-list-ltr</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>th</code></td>
      <td><code>re-order-dots-vertical</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>thermometer-half</code></td>
      <td><code>temperature</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>th-large</code></td>
      <td><code>grid</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>thumbs-o-down</code></td>
      <td><code>thumb-dislike</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>thumbs-o-up</code></td>
      <td><code>thumb-like</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>thumbs-up</code></td>
      <td><code>thumb-like</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>ticket</code></td>
      <td><code>ticket-diagonal</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>tile-drag</code></td>
      <td><code>re-order-dots-vertical</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>times</code></td>
      <td><code>close</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>times-circle</code></td>
      <td><code>dismiss-circle</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>toolbox</code></td>
      <td><code>toolbox</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>tools</code></td>
      <td><code>wrench-screwdriver</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>train</code></td>
      <td><code>vehicle-subway</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>trash</code></td>
      <td><code>delete</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>trash-o</code></td>
      <td><code>delete</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>truck</code></td>
      <td><code>vehicle-truck-profile</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>twitter</code></td>
      <td><code>twitter</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>underline</code></td>
      <td><code>text-underline</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>universal-access</code></td>
      <td><code>accessibility</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>university</code></td>
      <td><code>building-bank</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>unlock-alt</code></td>
      <td><code>lock-open</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>upload</code></td>
      <td><code>arrow-upload</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>usd</code></td>
      <td><code>dollar</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>user</code></td>
      <td><code>person</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>user-check</code></td>
      <td><code>person-available</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>user-circle</code></td>
      <td><code>person-circle</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>user-lock</code></td>
      <td><code>person-lock</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>user-o</code></td>
      <td><code>person</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>user-plus</code></td>
      <td><code>person-add</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>users</code></td>
      <td><code>people-team</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>user-tag</code></td>
      <td><code>person-tag</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>video</code></td>
      <td><code>video</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>volume-off</code></td>
      <td><code>speaker-mute</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>w</code></td>
      <td><code>letter-w</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>wallet</code></td>
      <td><code>wallet</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>wand-sparkles</code></td>
      <td><code>wand</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>warehouse</code></td>
      <td><code>building-factory</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>warning</code></td>
      <td><code>warning</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>window-close</code></td>
      <td><code>dismiss-square</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>windows</code></td>
      <td><code>windows</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>wrench</code></td>
      <td><code>wrench</code></td>
      <td>
solid
</td>
    </tr>
    <tr>
      <td><code>xls-file</code></td>
      <td><code>document-xls</code></td>
      <td>

</td>
    </tr>
    <tr>
      <td><code>youtube</code></td>
      <td><code>youtube</code></td>
      <td>

</td>
    </tr>
  </tbody>
</table>
