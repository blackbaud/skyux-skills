---
Title: Visual themes and modes
Reference: https://developer.blackbaud.com/skyux/learn/visual-theme
---

# Visual themes and modes

SKY UX has two primary visual settings that control the overall appearance of solutions:

- Visual themes are configured at the product- or application-level, and they control styles for the look and feel of the entire user experience. The two current options are modern theme and default theme.
- Visual modes are user-controlled preferences, such as color modes, that adjust the look and feel on top of the visual theme. Color modes are only available in solutions that enable modern theme, but when available, they allow users to select between dark mode and light mode.

## Visual themes

SKY UX features two visual themes in its patterns and component library: default theme and modern theme. Default visual theme was deprecated in v12, and we plan to remove it in v17 because Blackbaud is adopting the improved modern visual theme across our products.

We updated the visual styling of modern visual theme in SKY UX 13, but some screenshots on this website still show the old styles. We are still in the process of updating those screenshots.

The design principles and patterns are the same in both themes, but modern visual theme provides several advantages, including:

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

## Visual modes

SKY UX supports dark mode across the design system. To display dark surface colors, users can select this visual mode from the **Preferences** option in the omnibar menu.

Dark mode serves as more than an aesthetic preference. It provides an important accommodation for users who find high-luminance interfaces difficult or uncomfortable to use. Dark mode offers more comfortable viewing in low-light environments and reduces visual strain. The greatest benefit is often for users managing light-sensitivity conditions, such as migraines or photophobia.

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/theme/modern-v13-modal-example.fd3fd3672e1062e663a008e365113a8c.png)

Example of a modal in light mode

![undefined](https://sky.blackbaudcdn.net/skyuxapps/skyux/assets/img/guidelines/theme/dark-mode-modal-example.d1e51c6d56faf70eb47fd91ae5c7bf9f.png)

Example of a modal in dark mode
