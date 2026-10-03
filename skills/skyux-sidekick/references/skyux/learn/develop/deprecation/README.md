---
Title: Deprecation
Reference: https://developer.blackbaud.com/skyux/learn/develop/deprecation
---

# Deprecation

As SKY UX evolves, sometimes features are replaced by newer patterns or no longer recommended for use. When a component or API is slated to be removed, we first mark it as deprecated. Deprecated features should no longer be pulled into new projects, and existing projects should plan to refactor as part of ongoing maintenance.

Deprecated features remain available within SKY UX, but they may be removed in the next major version.

## Deprecation stages

#### Initial deprecation

When we deprecate a feature, we document the deprecation and flag the feature as deprecated in [linting](../linting.md). On the [Components page](../../../components/README.md), we highlight deprecated components, services, and modules, and the documentation for each deprecated feature includes a warning with a recommended path forward. In addition, the development docs for all components, services, and modules highlights any deprecated inputs, methods, or other properties and also recommends a path forward.

#### Maintenance mode

After deprecation, features remain in the public API, but maintenance is limited to critical issues. At the next major release, the SKY UX team evaluates whether to remove the feature.

#### Sunset

After we remove a feature, projects that rely on the feature need to move to an alternative to stay current with SKY UX.

## Deprecated components

Character count

Deprecated in favor of the input box component's characterLimit input.

Definition list

Deprecated in favor of the description list component.

Grid

Deprecated in favor of the data grid component.

List

Deprecated, but with plans to develop a new version.

List view grid

Deprecated in favor of the data grid component.

Modal filter

Deprecated in favor of the filter bar component.

NgModule

Deprecated in favor of standalone components.

Page summary

Deprecated in favor of the page header component.

Progress indicator wizard

Deprecated in favor of the tabs wizard component.

Stache action buttons

Deprecated in favor of the SKY UX action button component.
