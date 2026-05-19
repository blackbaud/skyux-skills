# SKY UX Documentation

This is the entry point for AI-assisted Angular and SKY UX development. Read this file first, then follow links as needed — don't bulk-read everything.

## How to use this wiki

- **Skills** are process guides. When your task matches a skill's trigger description, read that skill's index for step-by-step methodology. Skills link to supporting references — only read those when the skill directs you to.
- **Reference docs** are for on-demand lookup during implementation. The components page is a lookup table — consult individual component pages as needed, don't read them all.
- **Examples indexes** are line-range cheatsheets for component code examples. Use them to pull one named example at a time with `Read offset=… limit=…` instead of opening a multi-thousand-line component README.
- **Sections indexes** sit beside every component README and break it into `## ` sections tagged by tab (`design` / `development` / `testing` / `examples`). Load only the section you need — typically <100 lines — instead of the whole file. See **Fast paths** below.

## Fast paths

Common starting points that skip the search step:

- **Creating a new page** → start at the [Page component](./skyux/components/page/README.md) and its [examples index](./skyux/components/page/examples-index.md). The page README ships **seven complete patterns** that cover almost every Blackbaud page shape:
  1. Home page with blocks layout, using tile dashboard and recently accessed links
  2. List page with list layout using data manager
  3. List page with tabs layout using data manager
  4. Record page with blocks layout using box components
  5. Record page with tabs layout using data manager
  6. Split view page with fit layout
  7. Data manager with split view in a fit layout page

  Pick the pattern that matches your use case, copy the `Read file_path=… offset=… limit=…` invocation from the examples index, and pull only that example into context. The README itself covers when to use each layout, heading conventions, page links, and harnesses.

- **Looking up a code example for any other component** → start at the [components examples index](./skyux/components/examples-index.md). It lists every component that has upstream code examples with line ranges; components without upstream examples (e.g. `button`) are flagged separately.
- **Loading just one section of a component README** (just the API, just the harnesses, just the "when to use" guidance) → open the sibling `sections-index.md` (e.g. `./skyux/components/page/sections-index.md`, `./skyux/components/autocomplete.sections-index.md`). Each row is tagged `design` / `development` / `testing` / `examples` so you can pick the tab the SPA would have shown.

If a component isn't in the examples index, its README is still the canonical reference for API, anatomy, and usage guidelines — and the sections index works regardless of whether the component ships code examples.

## Skills

- [Known SKY UX 14 update fixes](./skills/known-skyux-v14-update-fixes.md) — use IMMEDIATELY when troubleshooting migration/update/upgrade issues in a SKY UX 14 update.
- [Migration & debugging](./skills/migration-debugger/README.md) — use IMMEDIATELY for any "migration", "update", "upgrade", or "skyux update" request; also use when encountering any bug, test failure, build error, compilation failure, or unexpected behavior in Angular or SKY UX code, before proposing fixes
- [Project modernization](./skills/project-modernization/README.md) — use only when the application already builds and tests pass, and the user wants to modernize patterns (NgModule to standalone, deprecated APIs, test coverage, anti-patterns); do NOT use for migration/update/upgrade troubleshooting
- [Test-driven development](./skills/test-driven-development/README.md) — use when implementing any Angular/SKY UX feature or bugfix, before writing implementation code
- [Verification before completion](./skills/verification-before-completion.md) — use before making ANY success claim in an Angular or SKY UX project — whether mid-task ("that should fix it"), at completion ("tests pass"), or before committing/creating PRs

## Reference

- [Components](./skyux/components/README.md) — lookup table of all SKY UX components with one-line descriptions; follow individual links for API details, code examples, and usage guidance
- [Components examples index](./skyux/components/examples-index.md) — per-component line-range cheatsheet of every named code example, generated from the component READMEs
- Per-component **sections indexes** (sibling files: `<component>/sections-index.md` or `<component>.sections-index.md`) — line-range cheatsheet of every `## ` section in each component README, tagged by tab (`design` / `development` / `testing` / `examples`)
- [Learn](./skyux/learn/README.md) — getting started, development guides, accessibility, and visual theme documentation
- [Design](./skyux/design/README.md) — design principles, guidelines, and style references
- [Home](./skyux/README.md) — marketing overview; skip unless the user asks about SKY UX's purpose
