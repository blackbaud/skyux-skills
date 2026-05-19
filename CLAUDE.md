# CLAUDE.md

Rules for Claude (or any agent reading `AGENTS.md`) working on this repo.

## Purpose

This repo ships two agent skills for SKY UX / Angular work:

- `skyux-sidekick` — frontend design skill backed by a committed corpus of
  SKY UX documentation under `skills/skyux-sidekick/references/`.
- `create-a-new-skyux-project` — scaffolding skill for new SKY UX 14 / Angular
  21 apps.

The marketplace entry (`.claude-plugin/marketplace.json`) makes both skills
installable via Claude Code's plugin system; the raw `skills/<name>/`
directories make them installable via `gh skill install` or a manual `cp -r`.

## How the corpus gets here

The corpus under `skills/skyux-sidekick/references/` is **generated**. It is
produced by a scraper in the private `blackbaud/skyux-skills-conservator`
repo and mirrored here via `rsync`. Do **not** hand-edit files under
`references/skyux/` or `references/skills/project-modernization/available-*.md`
— the next refresh will overwrite them.

Hand-authored content that is allowed:

- `SKILL.md` files.
- Process guides under `references/skills/` *other than*
  `project-modernization/available-*.md`.

## Commit hygiene

- Corpus refreshes (`rsync` mirror) are their own commit, separate from any
  `SKILL.md` or metadata change. Reviewers should not have to read 10k lines
  of generated docs to find a one-line behavior change.
- Do not commit or open PRs unless explicitly asked.

## Release discipline

Tags are immutable. If a release fails CI verification, fix forward by
bumping to the next version — never delete or move a tag.
