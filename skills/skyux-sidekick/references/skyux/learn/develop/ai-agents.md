---
Title: AI agents
Reference: https://developer.blackbaud.com/skyux/learn/develop/ai-agents
---

# AI agents

AI coding agents, such as GitHub Copilot, Claude Code, and Cursor, can write better SKY UX code when they have access to current SKY UX documentation. SKY UX provides that documentation to agents as an agent skill and through the Context7 MCP server.

## Overview

If agents rely on training data that predates the current version of SKY UX, it can lead to deprecated components, invalid APIs, or patterns that don't follow SKY UX guidelines. To avoid this, give your agent access to the SKY UX documentation through one of these resources:

- The [`skyux-sidekick` agent skill](https://github.com/blackbaud/skyux-skills) bundles the SKY UX documentation with instructions that direct your agent to consult it before it writes code.
- The [SKY UX library on Context7](https://context7.com/blackbaud/skyux-skills) serves the same documentation to your agent on demand through the Context7 Model Context Protocol (MCP) server.

Both resources draw from the content on this documentation site, including component APIs, test harnesses, code examples, design guidelines, and developer guides.

## Agent skill

The `skyux-sidekick` skill applies to Angular and SKY UX frontend work such as building pages, adding components, fixing bugs, writing tests, and migrating to new versions. To install the skill, run the following command in the context of your project.

Bash

    npx skills add https://github.com/blackbaud/skyux-skills --skill skyux-sidekick

After you install the skill, your agent loads it automatically when a task involves SKY UX. For other installation options, such as plugin marketplaces or manual installation, see the [`blackbaud/skyux-skills` repository](https://github.com/blackbaud/skyux-skills).

## Context7 MCP server

[Context7](https://context7.com) provides up-to-date documentation for many open source projects directly to an agent through an MCP server. To use it, add the Context7 MCP server to your agent by following the [Context7 installation instructions](https://github.com/upstash/context7#installation).

Then ask your agent to use the SKY UX library on Context7 by including the library ID `/blackbaud/skyux-skills` in your prompt.

Markdown

    Add a SKY UX data grid to the customers page. use library /blackbaud/skyux-skills

## Contributions

If an agent receives incorrect SKY UX documentation, such as a wrong API, a missing component, or an out-of-date example, you can [file an issue](https://github.com/blackbaud/skyux/issues) or review our contribution process.
