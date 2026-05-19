# skyux-skills

Agent skills for SKY UX / Angular work, plus a committed corpus of SKY UX
documentation that the skills consult before writing code.

Two skills ship from this repo:

- **`skyux-sidekick`** — Use for any Angular or SKY UX frontend work: building
  a new SPA, adding a component, fixing a bug, migrating, modernizing, writing
  specs, or styling. Consults the bundled SKY UX docs in `references/` before
  generating code.
- **`create-a-new-skyux-project`** — Use when scaffolding a new SKY UX 14 /
  Angular 21 project from scratch.

## Install

### Claude Code

```text
/plugin marketplace add blackbaud/skyux-skills
```

Then install `skyux-sidekick` and/or `create-a-new-skyux-project` from the
marketplace.

### GitHub CLI (`gh skill`)

Pin to a specific tagged release (recommended, since the repo uses per-skill
tags):

```sh
gh skill install blackbaud/skyux-skills skyux-sidekick
gh skill install blackbaud/skyux-skills create-a-new-skyux-project
```

### Manual

```sh
git clone https://github.com/blackbaud/skyux-skills.git
cp -r skyux-skills/skills/skyux-sidekick ~/.claude/skills/
cp -r skyux-skills/skills/create-a-new-skyux-project ~/.claude/skills/
```

## Updating the corpus (maintainers)

The SKY UX docs corpus under `skills/skyux-sidekick/references/` is generated
by a scraper in the private `blackbaud/skyux-skills-conservator` repo and
mirrored here. To refresh it:

```sh
# In the conservator repo, run the update script.

# Back at the conservator repo root, mirror into a sibling clone of skyux-skills:
rsync -av --delete \
  --exclude='.gitkeep' \
  skills/ ../skyux-skills/skills/

# Then in skyux-skills/:
git add -A
git diff --cached    # review
git commit -m "chore(skyux-sidekick): refresh references on $(date -u +%Y-%m-%dT%H:%MZ)"
```

Commit corpus refreshes separately from SKILL.md edits so reviewers can see
behavior changes without scrolling past generated content.

## Releases

Per-skill semver tags: `<skill-name>-v<version>`. Versions follow
`0.{skyux_major}{counter:03d}.{patch}` — initial releases are at
`0.14001.0`, tracking SKY UX 14. Tags are immutable; failed releases are
fixed by bumping forward.

The local pre-tag check (`node scripts/verify-release.mjs <skill> <version>`)
is the same check CI runs after a tag is pushed.

## License

MIT. See `LICENSE`.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). SKY UX content issues (wrong API,
missing component, stale example) belong at
https://github.com/blackbaud/skyux/issues, not here.
