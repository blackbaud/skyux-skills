---
Title: Visual theme
Reference: https://developer.blackbaud.com/skyux/learn/visual-theme
---

# Visual theme

We updated the modern visual theme as part of the improvements to SKY UX in v13! However, the visual styling of screenshots in our documentation will be out-of-date until we complete the updates.

SKY UX features two visual themes in its patterns and component library: default theme and modern theme. Starting in v12, the default visual theme is deprecated, and Blackbaud is adopting the updated and improved modern visual theme across our products. While the design principles and patterns of SKY UX are the same in both themes, modern visual theme carries several advantages, including:

- Supports AA standards of WCAG 2.2 accessibility guidelines (default visual theme color contrast and sizing align to WCAG 2.0 criteria). [Learn about delivering accessibility with SKY UX](../accessibility/README.md).
- Provides relative size and space definitions that respond to browser font-size settings.
- Improves usability with larger click/touch targets.
- Creates a more useful visual hierarchy with typography and spacing.
- Reduces clutter and noise for a cleaner, more focused visual aesthetic.
- Increases alignment with Blackbaud brand elements.
- Enables the future support of UI personalization for dark mode, compact mode, and other user preferences.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/theme/default-modal-example.aa37d1e58a7ea41b39232925adff69bb.png)

Example of a modal in the default visual theme

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/theme/modern-v13-modal-example.fd3fd3672e1062e663a008e365113a8c.png)

Example of a modal in the modern visual theme

## Modern theme adoption

Partners and developers should enable theme support alongside Blackbaud's rolling adoption of modern visual theme. When SPAs and SKY Add-ins are properly designed and configured, they can present either the default theme or modern theme to match the solution where they appear. This keeps user experiences consistent no matter when or where an add-in is applied. It is important to use the most up-to-date SKY UX syntax for [styles](../../design/styles/README.md) and follow [design guidelines](../../design/guidelines/README.md) for the best results in both visual themes.

[Read more about enabling theme support](./enable-modern.md).

## Theme switching in SKY UX documentation

The toggle switch under the navigation bar changes the visual theme displayed on this site.

- [Component](../../components/README.md) and [guideline](../../design/guidelines/README.md) pages display example images and live demos in the visual theme you select, but the underlying design and development content does not change. Default visual theme design example images are no longer maintained and may not reflect the actual state of the component.
- [Style](../../design/styles/README.md) pages change their content when viewed in the different themes. This is because they contain the specific values of the styling properties each theme applies to SKY UX classes and variables.
