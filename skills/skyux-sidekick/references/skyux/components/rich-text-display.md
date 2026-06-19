---
Title: Rich text display
Reference: https://developer.blackbaud.com/skyux/components/rich-text-display
---

# Rich text display

The rich text display sanitizes HTML strings before displaying them. It searches HTML for any malicious code, such as `script` tags, and removes it as necessary. This allows you to safely display HTML strings from various sources.

## Usage

### Use when

Use rich text display to safely display read-only rich text.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/rich-text-display/rich-text-display-usage-1.e371e7c2e6d397d99593e3d51c1a7cb0.png)

Do use rich text display to show rich text content in read-only contexts.

### Don't use

Don't use rich text display anywhere users enter or edit rich text. Use the [text editor](./text-editor.md) component instead.

## Related information

### Components

- [Text editor](./text-editor.md)

## Installation

NPM package

`@skyux/text-editor`[View in NPM](https://www.npmjs.com/package/@skyux/text-editor) | [View in GitHub](https://github.com/blackbaud/skyux/blob/14.x.x
/libs/components/text-editor/src/lib/modules/rich-text-display/rich-text-display.module.ts#L9)

Install with NPM

`npm install --save-exact @skyux/text-editor`

## SkyRichTextDisplayModule

Type: Module

`import { SkyRichTextDisplayModule } from '@skyux/text-editor';`

## SkyRichTextDisplayComponent

Type: Component

Selector: `sky-rich-text-display`

### Inputs

#### `richText: string | undefined`

The rich text to display.

## Code Examples

### Rich text display with basic setup

#### example.component.ts (primary file)

```typescript
import { Component } from '@angular/core';
import { SkyRichTextDisplayModule } from '@skyux/text-editor';

/**
 * @title Rich text display with basic setup
 */
@Component({
  selector: 'app-text-editor-rich-text-display-example',
  templateUrl: './example.component.html',
  imports: [SkyRichTextDisplayModule],
})
export class TextEditorRichTextDisplayExampleComponent {
  protected richText = `<font style="font-size: 18px" face="Arial" color="#a25353"><b>Exclusively committed to your impact</b></font><p>Since day one, Blackbaud has been 100% focused on driving impact for social good organizations.</p><p>We equip change agents with <b>cloud software</b>, <i>services</i>, <u>expertise</u>, and <font color="#a25353">data intelligence</font> designed with unmatched insight and supported with unparalleled commitment. Every day, our <b>customers</b> achieve unmatched impact as they advance their missions.</p><ul><li><a href="#">Build a better world</a></li><li><a href="#">Explore our solutions</a></li></ul>`;
}
```

#### example.component.html

```html
<sky-rich-text-display [richText]="richText" />
```
