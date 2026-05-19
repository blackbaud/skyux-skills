# Contributing

Thanks for the interest. A few things to know before you file an issue or
open a PR.

## What this repo is

It is *two* skill definitions (`SKILL.md` + supporting files) plus a
**generated** SKY UX documentation corpus under
`skills/skyux-sidekick/references/`. The corpus is produced by a scraper in
the private `blackbaud/skyux-skills-conservator` repo and mirrored here via
`rsync`. It is not authored in place.

## Where to report SKY UX content issues

Anything wrong about SKY UX itself — a missing API, a wrong component
description, a stale example — belongs upstream:

→ https://github.com/blackbaud/skyux/issues

PRs that hand-edit files under `references/skyux/` or
`references/skills/project-modernization/available-*.md` will be closed with a
pointer to the upstream tracker. The next scraper refresh would overwrite
those edits anyway.

## What contributions ARE welcome here

- `SKILL.md` clarifications (workflow tweaks, wording, examples).
- New hand-authored process guides under `references/skills/`.
- README / `marketplace.json` / install-instruction corrections.
- CI fixes.

## Filing repo-level issues

Use this repo's issue tracker for problems with how the skills are *used*
(install failures, marketplace metadata problems, broken cross-references in
hand-authored guides, etc.). Be specific about the install path you tried
and the agent (Claude Code, gh-skill, manual).
