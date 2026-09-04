---
Title: Typography
Reference: https://developer.blackbaud.com/skyux/design/styles/typography
---

# Typography

This API was significantly updated in SKY UX 14. For the previous version, see the SKY UX 13 docs.

## Headings

Use `<h1>` through `<h5>` headings to introduce pages and sections of content within pages. Headings contrast with body text and other elements to create a visual hierarchy that guides the eye. They orient users and provide structure so that users can scan pages to quickly understand the structure.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/headings-ramp.249980f90630e19af52b0c16f830ad3f.png)

Do use headings to create a visual hierarchy on pages.

Use one `<h1>` heading per page and style it with the `sky-theme-font-heading-1` class. This heading uniquely identifies and describes the page content.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/headings-page-heading.1a525bd55e537ca3c8157b52492c6ede.png)

Do use one <h1> heading per page.

Don't use `<strong>` or `<em>` tags to visually emphasize body text in a way that mimics headings. Use semantic HTML headings with heading styles instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/headings-body-text-dont.a299d84c1b2450d6c602cfbff38ce67e.png)

Don't use bold or italicized body text to mimic headings.

Don't skip heading levels within a layout's visual hierarchy. Semantic HTML elements help describe the contents of pages and components, so use `<h1>` through `<h5>` headings in their sequential order.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/headings-skip-dont.8027505593647da10948ff1949ca64be.png)

Don't skip heading levels in hierarchical layouts.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/headings-skip-do.dc843b12783b42348b70b2455c3f7552.png)

Do use heading levels in the proper order.

## Body text

Body text styles are used for most content on pages, including labels, data, and paragraphs. Body text contrasts with headings, which are shorter and emphasized, to orient users and provide structure. To create a clear information hierarchy, use the size options and the emphasized and deemphasized styles.

### Medium body text

Use medium body text (`sky-theme-font-body-m`) as the default size for text in components and on pages. It's the main text style for content in components that display information, such as [alerts](../../components/alert.md), [description lists](../../components/description-list.md), and [toasts](../../components/toast.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-body-examples.113701ef5bde97fcaa3e23a384e2f4a5.png)

Do use medium body text for most of your content.

### Medium emphasized

Use medium emphasized body text (`sky-theme-font-body-emphasized-m`) to increase the position of text elements in the visual hierarchy. For example, use this style for the primary element in a single-entity composition where multiple text elements are combined to represent a record.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-emphasized-do-other-m.f38c726b3597e9ef29a692149a26169c.png)

Do use medium emphasized body text to emphasize the primary text in the visual hierarchy.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-emphasized-secondary.16050be69fa17ceeba908d138cdcdedb.png)

Do use medium emphasized body text to emphasize the primary text in the visual hierarchy when it is paired with secondary information.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-emphasized-long-desc.c14d6a5206cc8f6973948d9b6dc7cb93.png)

Long description lists use medium emphasized body text to emphasize a term relative to its description.

### Medium deemphasized

Use medium deemphasized body text (`sky-theme-font-body-deemphasized-m`) to create secondary relationships with medium body text. This style decreases the position of text elements in the visual hierarchy. Use it for metadata and for information within a single entity that supplements the primary identifying element, which can be text, a link, or a text component such as [status indicator](../../components/status-indicator.md).

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-deemphasized-do.27ad77eb427ce1c881aaec56eb94e4a2.png)

Do use medium deemphasized body text for secondary relationships with medium body text.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-deemphasized-dont.b93575a5b9c4b53898d3f1210699398c.png)

Don't use small body text for secondary relationships with medium body text. Use medium deemphasized body text instead.

Use medium deemphasized body text for labels that appear beside larger, more important text elements. For example, [key info items](../../components/key-info.md) use medium deemphasized body text for labels that appear beside values.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/m-deemphasized-key-info.1403d0d04fe9c335afc91b2f22ef26cd.png)

Do use medium deemphasized body text for labels beside larger text elements.

### Small body text

Use small body text (`sky-theme-font-body-s`) to maximize viewable content when space is limited. Use this style selectively because it is more difficult to read than medium body text. Don't use small body text for the main content or for long blocks of text.

Don't use small body text to achieve higher density for an entire page or for large sections of a page.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/s-body.067608102db56631e943c52bee739471.png)

Do use small body text selectively when space is limited.

### Small emphasized

Use small emphasized body text (`sky-theme-font-body-emphasized-s`) to increase the position of text elements in the visual hierarchy. Use this style for the primary element in a single-entity composition where multiple text elements that use small body text are combined to represent a record.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/s-emphasized.3762f9d4bdc5ac03caa04c786f34992a.png)

Do use small emphasized body text to increase the visual emphasis of a text element in compositions that use small body text because space is limited.

### Small deemphasized

Use small deemphasized body text (`sky-theme-font-body-deemphasized-s`) as labels for secondary or supplementary text that uses the medium deemphasized style. For example, [description list terms](../../components/description-list.md) use small deemphasized body text.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/s-deemphasized-desc-list.019f13f1d3c35143671782dbb9d2b2d6.png)

Do use small deemphasized body text to label medium deemphasized body text.

In single-entity compositions where multiple text elements represent an item, use small deemphasized body text to decrease the position of text elements in the visual hierarchy to the lowest level. Only use this style to place text at a level below deemphasized medium text when it is necessary to differentiate. For example, use it for metadata relative to other supplemental information.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/s-deemphasized-below-m-deemphasized.55a96f43c31f0f472494676585101809.png)

Do use small deemphasized body text for the lowest level in the visual hierarchy to a level beneath medium deemphasized.

Use small deemphasized body text when medium deemphasized body text doesn't sufficiently decrease the position of text elements in the visual hierarchy of a composition that includes a large number of text elements.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/s-deemphasized-m-body.feff506ab7bf11e32310aee4f9978189.png)

Do use small deemphasized body text to decrease visual emphasis in a composition with many text elements.

### Large body text

Use large body text (`sky-theme-font-body-l`) for lead paragraphs in long-form content. A lead paragraph is the initial paragraph that introduces or summarizes the core message of the content that follows. Limit it to a few sentences or lines of text because a large block of text can overwhelm users and the visual hierarchy.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/l-body.7f009330c893a171d109d5f51e86898d.png)

Do use large body text for lead paragraphs.

## Paragraphs

Use the HTML `<p>` element to create a paragraph with one or more complete sentences. This element applies the correct line-height for readability.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/para-sentences.d82336ce37c20dd4dca51b9803663dbd.png)

Do use the <p> element to create a paragraph.

Use the `<strong>` tag within paragraphs to create visual and semantic importance. Don't use the deprecated `sky-font-emphasized` class or underline words.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/para-strong.789fa5e5af1e5a1f458a9d8ef1834487.png)

Do use <strong> to visually and semantically indicate importance.

Use the `<em>` tag within paragraphs to create visual and semantic emphasis or stress. Don't use the deprecated `sky-font-deemphasized` class.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/para-em.ed50a8d5524bf0ee51a1bf01003a6d17.png)

Do use <em> to visually and semantically indicate emphasis or stress.

Don't fully justify paragraphs because this adds white space within the text and makes it harder to read. Instead, use starting alignment for paragraphs.

Don't indent paragraphs. Vertical margins separate paragraphs visually and make it easy to understand paragraph breaks without indents.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/para-justify-dont.fe7a39feb12c364995f77dc9ada6a91c.png)

Don't fully justify or indent paragraphs.

## Display text

Use display text styles to call attention to key metrics and to highlight short, prominent messages.

Use the [key info component](../../components/key-info.md) to call attention to key metrics with its built-in display text sizes and secondary label.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/display-keyinfo.0dd3fe936dd7e0747bf60a6c5403a09f.png)

The key info component uses display text styles to call attention to key metrics.

Don't use display text styles as headings. Use semantic HTML headings with heading styles instead.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/display-text-dont.a77a744306899db634b63f7334c54298.png)

Don't use display text styles to mimic headings.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/display-headings-do.8f06c8dd8f9d706df834e68bedfbc10e.png)

Do use heading styles to create visually emphasized headings.

Don't use display text styles in single-entity compositions. Display text increases the position of text elements in the visual hierarchy and draws too much attention relative to its importance on the page.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/display-entity-dont.8c71f7f68b8cf42cde2d61c2fb2f4c00.png)

Don't use display text styles in grouped-text compositions.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/display-entity-do.3e316179d9580857b1ce66343fbe5a15.png)

Do use body text styles in grouped-text compositions to create the correct visual relationship with the parent heading.

## Hint text

Use hint text styles for [persistent inline help](../guidelines/user-assistance.md#inline-help) that helps users understand tasks.

### Medium hint text

Use medium hint text (`sky-theme-font-hint-m`) to provide persistent inline help for top-level elements. For example, use medium hint text for page-, form-, and field group-level user assistance. The style is built into the [field group](../../components/field-group.md) component.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/hint-m.7bdbe6323af0afd5d59562a46133a264.png)

Do use medium hint text for page-, form-, and field group-level inline help.

### Small hint text

Use small hint text (`sky-theme-font-hint-s`) to provide persistent inline help for individual form input elements where users require assistance. The style is built into all form field components.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/hint-s.1f8b86a5578146f4fe45285e25901056.png)

Small hint text is built into components for field- and label-level inline help.

## Visual hierarchy

Visual hierarchy helps users quickly understand the structure, importance, and relationships within pages. Typography is a key contributor to visual hierarchy, along with [layout](../guidelines/page-layouts/README.md), [spacing](./spacing.md), and [color](./color.md). Typography uses size and weight to guide user attention and to support efficient scanning in dense interfaces.

For compositions where three or more elements represent an item, use deemphasized and emphasized text styles (along with spacing) to create a visual hierarchy and establish relationships between text elements.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/viz-hierarchy-grouped-examples.7e6360f4b793393c42c24c75f96ebfb0.png)

Grouped text compositions use a combination of body styles to create a visual hierarchy.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/viz-hierarchy-dont.42fea0b0b9ca69c32dbc89c0c481442e.png)

Don't rely on link color alone to increase the position of a primary text element in a grouped composition.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/viz-hierarchy-do.52bb90cf013920e4975df0d6b6b0934d.png)

Do use emphasized text to increase the position of a primary text element in a grouped composition when it is a link or plain text.

## Foundation

### Typeface

SKY UX uses BLKB Sans, a custom typeface that is designed to feel modern and techie but still friendly. Its visual characteristics are crafted to ensure that text is flexible and readable across use cases on screens and on small screen sizes. This includes both higher-density information display and longer-form reading.

BLKB Sans is used for all interface text, including headings, body copy, UI labels, and data-heavy content. Consistent use of the typeface reinforces visual cohesion, improves scannability, and ensures predictable rendering across platforms and browsers.

### Font size ramp

Font sizes are defined using rem units to support responsiveness, accessibility, and user-defined browser preferences. These relative units ensure that text scales consistently when users adjust default font sizes, which supports inclusive design and accessibility requirements.

The font size ramp uses the major second ratio (1.125) for the progression of font sizes. It is optimized for efficient information density without sacrificing readability. Smaller steps between sizes allow for nuanced hierarchy in data-rich interfaces while still scaling appropriately for long-form oriented experiences.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/typography/font-size-ramp.b6c41a3f2717a97446cbac7334db9ad9.png)

The font size ramp uses the major second ratio (1.125) for the progression of font sizes.

## Headings

Use headings to introduce the page and sections of content within a page. Don't skip heading levels within the same page to clearly communicate the organization and hierarchy of the page content.

Bb

Heading 1

Use for page titles and record names. Use only one heading 1 element per page.

`<h1>`

`sky-theme-font-heading-1`

Deprecated:`sky-font-heading-1`

Removed:`sky-page-heading`

Bb

Heading 2

Use for main sections and container headings.

`<h2>`

`sky-theme-font-heading-2`

Deprecated:`sky-font-heading-2`

Removed:`sky-section-heading`

Bb

Heading 3

Use for subsections within containers and within heading 2 sections.

`<h3>`

`sky-theme-font-heading-3`

Deprecated:`sky-font-heading-3`

Removed:`sky-subsection-heading`

Bb

Heading 4

Use for subsections within heading 3 sections.

`<h4>`

`sky-theme-font-heading-4`

Deprecated:`sky-font-heading-4`

Bb

Heading 5

Use for subsections within heading 4 sections.

`<h5>`

`sky-theme-font-heading-5`

Deprecated:`sky-font-heading-5`

## Body text

Bb

Medium body

Default size for majority of information on the page including component labels, data, and paragraphs.

`sky-theme-font-body-m`

Deprecated:`sky-font-body-default`

Bb

Medium emphasized

Use for elevating the primary text that identifies an item in a text group's visual hierarchy.

`sky-theme-font-body-emphasized-m`

Deprecated:`sky-font-emphasized`

Removed:`sky-emphasized`

Bb

Medium deemphasized

Use for secondary information that describes or contextualizes an item to lower it in the visual hierarchy alongside the primary text that identifies an item.

`sky-theme-font-body-deemphasized-m`

Bb

Small body

Use for text only when space is limited and only for a section or container within a page.

`sky-theme-font-body-s`

Deprecated:`sky-font-body-sm`

Bb

Small emphasized

Use to elevate the primary text that identifies an item in a text group's visual hierarchy when using small body text.

`sky-theme-font-body-emphasized-s`

Bb

Small deemphasized

Use for tertiary information in a text group to lower it in the visual hierarchy below secondary information.

`sky-theme-font-body-deemphasized-s`

Bb

Large body

Use for lead paragraphs in long-form content.

`sky-theme-font-body-l`

Deprecated:`sky-font-body-lg`

## Paragraphs

They are volunteers.

Paragraph

Use paragraphs to give one or more complete sentences reading line-height.

`<p>`

**Strong**

Strong

Use <strong> to create visual and semantic importance on a word or words.

`<strong>`

_Italicized_

Stressed text

Use <em> to create reading and semantic emphasis or stress on a word or words.

`<em>`

## Lists

Unstyled list

Use for lists of unordered items without bullet points to have correct semantic structure.

`sky-theme-list-unstyled`

Deprecated:`sky-list-unstyled`

## Display text

Use display text styles to call attention to key metrics or highlight a prominent, short message. Use the key info component which has the display text sizes and secondary label built-in.

Bb

Display 1

`sky-theme-font-display-1`

Deprecated:`sky-font-display-1`

Bb

Display 2

`sky-theme-font-display-2`

Deprecated:`sky-font-display-2`

Bb

Display 3

`sky-theme-font-display-3`

Deprecated:`sky-font-display-3`

Removed:`sky-headline`

Bb

Display 4

`sky-theme-font-display-4`

Deprecated:`sky-font-display-4`

## Help text

Bb

Hint medium

Use for page- and form-level help.

`sky-theme-font-hint-m`

Bb

Hint small

Used for field- and label-level help within components.

`sky-theme-font-hint-s`

## Deprecated typography

These typography classes are deprecated and will be removed in a future version of SKY UX.

Data label

To replace this, follow component patterns and use supported typography classes above.

Deprecated:`sky-font-data-label` , `sky-field-label` , `sky-font-field-label`

Deemphasized

Replace this with one of the deemphasized or help text classes above.

Deprecated:`sky-font-deemphasized` , `sky-deemphasized`

Hint text M

Replace this with a help text class above.

Deprecated:`sky-font-hint-text-m`

Hint text S

Replace this with a help text class above.

Deprecated:`sky-font-hint-text-s`

Paragraph

Replace this with a &lt;p&gt; element.

Deprecated:`sky-paragraph`

Text danger

Replace this with the status indicator component.

Deprecated:`sky-text-danger`

Text info

Replace this with the status indicator component.

Deprecated:`sky-text-info`

Text success

Replace this with the status indicator component.

Deprecated:`sky-text-success`

Text warning

Replace this with the status indicator component.

Deprecated:`sky-text-warning`

## Font families

Primary font family

The font family used for all elements on a page including headings, content, and components.

`var(--sky-theme-font-family-primary)`

## Headings

Use headings to introduce the page and sections of content within a page. Don't skip heading levels within the same page to clearly communicate the organization and hierarchy of the page content.

Bb

Heading 1

Use for page titles and record names. Use only one heading 1 element per page.

font-weight`var(--sky-theme-font-weight-heading-1)`

font-size`var(--sky-theme-font-size-heading-1)`

line-height`var(--sky-theme-font-line_height-heading-1)`

font-family`var(--sky-theme-font-family-heading-1)`

Bb

Heading 2

Use for main sections and container headings.

font-weight`var(--sky-theme-font-weight-heading-2)`

font-size`var(--sky-theme-font-size-heading-2)`

line-height`var(--sky-theme-font-line_height-heading-2)`

font-family`var(--sky-theme-font-family-heading-2)`

Bb

Heading 3

Use for subsections within containers and within heading 2 sections.

font-weight`var(--sky-theme-font-weight-heading-3)`

font-size`var(--sky-theme-font-size-heading-3)`

line-height`var(--sky-theme-font-line_height-heading-3)`

font-family`var(--sky-theme-font-family-heading-3)`

Bb

Heading 4

Use for subsections within heading 3 sections.

font-weight`var(--sky-theme-font-weight-heading-4)`

font-size`var(--sky-theme-font-size-heading-4)`

line-height`var(--sky-theme-font-line_height-heading-4)`

font-family`var(--sky-theme-font-family-heading-4)`

Bb

Heading 5

Use for subsections within heading 4 sections.

font-weight`var(--sky-theme-font-weight-heading-5)`

font-size`var(--sky-theme-font-size-heading-5)`

line-height`var(--sky-theme-font-line_height-heading-5)`

font-family`var(--sky-theme-font-family-heading-5)`

## Body text

Bb

Medium body

Default size for majority of information on the page including component labels, data, and paragraphs.

font-weight`var(--sky-theme-font-weight-body-m)`

font-size`var(--sky-theme-font-size-body-m)`

line-height`var(--sky-theme-font-line_height-body-m)`

font-family`var(--sky-theme-font-family-body-m)`

Bb

Medium emphasized

Use for elevating the primary text that identifies an item in a text group's visual hierarchy.

font-weight`var(--sky-theme-font-weight-body-emphasized-m)`

font-size`var(--sky-theme-font-size-body-emphasized-m)`

line-height`var(--sky-theme-font-line_height-body-emphasized-m)`

font-family`var(--sky-theme-font-family-body-emphasized-m)`

Bb

Medium deemphasized

Use for secondary information that describes or contextualizes an item to lower it in the visual hierarchy alongside the primary text that identifies an item.

font-weight`var(--sky-theme-font-weight-body-deemphasized-m)`

font-size`var(--sky-theme-font-size-body-deemphasized-m)`

line-height`var(--sky-theme-font-line_height-body-deemphasized-m)`

font-family`var(--sky-theme-font-family-body-deemphasized-m)`

Bb

Small body

Use for text only when space is limited and only for a section or container within a page.

font-weight`var(--sky-theme-font-weight-body-s)`

font-size`var(--sky-theme-font-size-body-s)`

line-height`var(--sky-theme-font-line_height-body-s)`

font-family`var(--sky-theme-font-family-body-s)`

Bb

Small emphasized

Use to elevate the primary text that identifies an item in a text group's visual hierarchy when using small body text.

font-weight`var(--sky-theme-font-weight-body-emphasized-s)`

font-size`var(--sky-theme-font-size-body-emphasized-s)`

line-height`var(--sky-theme-font-line_height-body-emphasized-s)`

font-family`var(--sky-theme-font-family-body-emphasized-s)`

Bb

Small deemphasized

Use for tertiary information in a text group to lower it in the visual hierarchy below secondary information.

font-weight`var(--sky-theme-font-weight-body-deemphasized-s)`

font-size`var(--sky-theme-font-size-body-deemphasized-s)`

line-height`var(--sky-theme-font-line_height-body-deemphasized-s)`

font-family`var(--sky-theme-font-family-body-deemphasized-s)`

Bb

Large body

Use for lead paragraphs in long-form content.

font-weight`var(--sky-theme-font-weight-body-l)`

font-size`var(--sky-theme-font-size-body-l)`

line-height`var(--sky-theme-font-line_height-body-l)`

font-family`var(--sky-theme-font-family-body-l)`

## Display text

Use display text styles to call attention to key metrics or highlight a prominent, short message. Use the key info component which has the display text sizes and secondary label built-in.

Bb

Display 1

font-weight`var(--sky-theme-font-weight-display-1)`

font-size`var(--sky-theme-font-size-display-1)`

line-height`var(--sky-theme-font-line_height-display-1)`

font-family`var(--sky-theme-font-family-display-1)`

Bb

Display 2

font-weight`var(--sky-theme-font-weight-display-2)`

font-size`var(--sky-theme-font-size-display-2)`

line-height`var(--sky-theme-font-line_height-display-2)`

font-family`var(--sky-theme-font-family-display-2)`

Bb

Display 3

font-weight`var(--sky-theme-font-weight-display-3)`

font-size`var(--sky-theme-font-size-display-3)`

line-height`var(--sky-theme-font-line_height-display-3)`

font-family`var(--sky-theme-font-family-display-3)`

Bb

Display 4

font-weight`var(--sky-theme-font-weight-display-4)`

font-size`var(--sky-theme-font-size-display-4)`

line-height`var(--sky-theme-font-line_height-display-4)`

font-family`var(--sky-theme-font-family-display-4)`

## Paragraphs

They are volunteers.

Paragraph line height

`var(--sky-theme-font-line_height-paragraph-m)`

Strong

Strong font weight

`var(--sky-theme-font-style-strong)`

Italicized

Stressed text

font-style`var(--sky-theme-font-style-em-style)`

font-weight`var(--sky-theme-font-style-em-weight)`

## Help text

Bb

Hint medium

Use for page- and form-level help.

font-style`var(--sky-theme-font-style-hint-m-style)`

font-weight`var(--sky-theme-font-style-hint-m-weight)`

font-size`var(--sky-theme-font-size-hint-m)`

line-height`var(--sky-theme-font-line_height-hint-m)`

font-family`var(--sky-theme-font-family-hint-m)`

Bb

Hint small

Used for field- and label-level help within components.

font-style`var(--sky-theme-font-style-hint-s-style)`

font-weight`var(--sky-theme-font-style-hint-s-weight)`

font-size`var(--sky-theme-font-size-hint-s)`

line-height`var(--sky-theme-font-line_height-hint-s)`

font-family`var(--sky-theme-font-family-hint-s)`

letter-spacing`var(--sky-theme-font-letter_spacing-hint-s)`

## Other

### Text decoration

Use in rare cases to decorate action text when underlines are necessary for accessibility.

Action text on status background

`var(--sky-theme-font-text_decoration-action-on_status)`

## Deprecated SCSS variables

SKY UX does not support these deprecated SCSS variables. In many cases, the styles in these variables are now built into components or supported classes and don't need to be manually applied. Read the style overview guidelines to find a suitable replacement.

`$sky-font-family`

`$sky-font-size-base`

`$sky-font-family-condensed`

`$sky-line-height-base`

`$sky-text-size-100`

`$sky-theme-modern-text-size-100`

`$sky-text-size-125`

`$sky-theme-modern-text-size-125`

`$sky-text-size-150`

`$sky-theme-modern-text-size-150`

`$sky-text-size-200`

`$sky-theme-modern-text-size-200`

`$sky-text-size-250`

`$sky-theme-modern-text-size-250`

`$sky-text-size-300`

`$sky-theme-modern-text-size-300`

`$sky-text-size-400`

`$sky-theme-modern-text-size-400`

`$sky-text-size-500`

`$sky-theme-modern-text-size-500`

`$sky-text-size-600`

`$sky-theme-modern-text-size-600`

`$sky-text-size-800`

`$sky-theme-modern-text-size-800`

`$sky-text-weight-thin-file`

`$sky-text-weight-thin-value`

`$sky-text-weight-light-file`

`$sky-text-weight-light-value`

`$sky-theme-modern-text-weight-light-value`

`$sky-text-weight-regular-file`

`$sky-text-weight-regular-value`

`$sky-theme-modern-text-weight-regular-value`

`$sky-text-weight-semibold-file`

`$sky-text-weight-semibold-value`

`$sky-theme-modern-text-weight-semibold-value`

`$sky-text-weight-bold-file`

`$sky-text-weight-bold-value`

`$sky-theme-modern-text-weight-bold-value`

`$sky-text-weight-condensed-light-file`

`$sky-text-weight-condensed-light-value`

`$sky-text-weight-condensed-semibold-file`

`$sky-text-weight-condensed-semibold-value`

`$sky-text-style-italic-file`

`$sky-text-style-italic-value`

`$sky-theme-modern-text-style-italic-value`

`$sky-text-style-uppercase`

`$sky-theme-modern-text-style-uppercase`

`$sky-theme-modern-font-body-default-size`

`$sky-theme-modern-font-body-default-weight`

`$sky-theme-modern-font-body-sm-size`

`$sky-theme-modern-font-body-sm-weight`

`$sky-theme-modern-font-body-lg-size`

`$sky-theme-modern-font-body-lg-weight`

`$sky-theme-modern-font-display-1-size`

`$sky-theme-modern-font-display-1-weight`

`$sky-theme-modern-font-display-2-size`

`$sky-theme-modern-font-display-2-weight`

`$sky-theme-modern-font-display-3-size`

`$sky-theme-modern-font-display-3-weight`

`$sky-theme-modern-font-display-4-size`

`$sky-theme-modern-font-display-4-weight`

`$sky-theme-modern-font-heading-1-size`

`$sky-theme-modern-font-heading-1-weight`

`$sky-theme-modern-font-heading-2-size`

`$sky-theme-modern-font-heading-2-weight`

`$sky-theme-modern-font-heading-3-size`

`$sky-theme-modern-font-heading-3-weight`

`$sky-theme-modern-font-heading-4-size`

`$sky-theme-modern-font-heading-4-weight`

`$sky-theme-modern-font-heading-4-color`

`$sky-theme-modern-font-heading-4-transform`

`$sky-theme-modern-font-heading-5-size`

`$sky-theme-modern-font-heading-5-weight`

`$sky-theme-modern-font-heading-5-color`

`$sky-theme-modern-font-heading-5-transform`

`$sky-theme-modern-font-paragraph-line-height`

`$sky-theme-modern-font-deemphasized-size`

`$sky-theme-modern-font-deemphasized-weight`

`$sky-theme-modern-font-deemphasized-color`

`$sky-theme-modern-font-deemphasized-style`

`$sky-theme-modern-font-emphasized-weight`

`$sky-theme-modern-font-data-label-size`

`$sky-theme-modern-font-data-label-weight`

`$sky-theme-modern-font-data-label-color`
