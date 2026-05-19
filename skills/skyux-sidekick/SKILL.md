---
name: skyux-sidekick
description: Use for ANY Angular or SKY UX frontend work — building a new SPA, adding a component, fixing a bug, migrating, modernizing, writing specs, or styling. Forces consultation of the bundled SKY UX documentation in references/ before any code is written and produces a concrete, citation-backed implementation plan that the work must follow.
---

# SKY UX Sidekick

This skill governs frontend design for Angular and SKY UX projects. The documentation under `references/` is the **canonical source of truth**. It is not a suggestion, not a starting point, and not one input among many — it is _the_ specification.

## The Iron Law

```text
NO SKY UX / ANGULAR FRONTEND WORK WITHOUT FIRST CONSULTING references/
AND PRODUCING A CONCRETE, CITATION-BACKED IMPLEMENTATION PLAN.
```

Deviating from the bundled documentation or fabricating an alternative approach (a different component, a different API, a pattern from training data, a "modern" rewrite, "what Angular usually does") is a **complete failure of this skill**, regardless of whether the resulting code compiles, passes tests, or looks reasonable.

If the documentation does not cover the case in front of you, **stop and say so**. Do not invent. Do not extrapolate from generic Angular knowledge.

## Mandatory Workflow

Every frontend task — no matter how small — goes through these three phases in order. Skipping or compressing a phase is a violation of this skill.

### Phase 1 — Consult `references/` first

1. **Check freshness.** Read `references/_manifest.json` and compute the age of `generated_at`. If the bundle is more than **30 days old**, warn the user that the SKY UX docs may be stale, cite the date, and suggest running `node skills/skyux-sidekick/scripts/check-updates.mjs` for a definitive comparison against upstream (exit `0` = fresh, `1` = stale, `2` = error). Proceed with the rest of Phase 1 either way — do not block on staleness.
2. Read `references/README.md`. It routes you to the right sub-skill or component doc, and lists **fast paths** for common starting points (e.g. "creating a new page"). Don't bulk-read; follow links.
3. For **process tasks** (migration, debugging, modernization, TDD, verification), open the matching skill in `references/skills/` and follow it as a rigid checklist.
4. For **component / API / styling questions**, open the specific page under `references/skyux/components/`, `references/skyux/design/`, or `references/skyux/learn/`.
   - **First**, open the sibling `sections-index.md` (e.g. `references/skyux/components/page/sections-index.md` for components with their own directory, or `references/skyux/components/autocomplete.sections-index.md` for sibling-index components). It lists every `## ` section in the component README with a `tab` label (`design` / `development` / `testing` / `examples`) and an exact `Read file_path=… offset=… limit=…` invocation. Read only the sections that match your task — usually one or two.
   - **For code examples specifically:** the sections-index `examples` row points at the sibling `examples-index.md`, which breaks the code-examples section into one entry per named example. Pull only the example you need with its own `Read offset=… limit=…`. Do NOT read the full component README to get to its examples — these READMEs run thousands of lines and the bulk is example code.
   - **If you don't know which component to look at**, scan `references/skyux/components/README.md` (the lookup table) or `references/skyux/components/examples-index.md` (which components ship upstream code examples).
5. If multiple references apply, read all of them before planning. Components have interaction rules (e.g., harnesses, modules, form-control wiring) that only surface when you cross-reference.

If, after reading, the documentation contradicts what you "know" about Angular or SKY UX — **the documentation wins**.

### Phase 2 — Write a concrete implementation plan

Before editing or generating any code, produce a written plan with:

- **Goal** — one or two sentences restating the task in SKY UX terms.
- **Components / APIs to use** — each one cited by filename, e.g. `references/skyux/components/autocomplete.md`. If you cannot cite a reference for a component or API you intend to use, you may not use it.
- **Package installation check** — for every SKY UX component you intend to use, verify the owning npm package is already a dependency of the target project (check `package.json`). If it isn't, the plan must include the exact install step (e.g. `ng add @skyux/<package>` or `npm install @skyux/<package>`) **before** any code that imports from it. The component's reference page names the package; don't guess.
- **Test plan — harness-first** — for every component under test, the plan must name the SKY UX test harness you'll use (cited by filename in `references/`) and the queries / interactions you'll drive through it. If a harness exists for a component, you **must** use it. Direct DOM queries (`By.css`, `querySelector`, `fixture.nativeElement.querySelector`, raw `DebugElement` walking, etc.) against a component that ships a harness are a **violation of this skill**, regardless of whether the test passes. The only acceptable reason to bypass a harness is that the documentation confirms no harness covers the case — and that gap must be listed under **Open questions / gaps**.
- **Process skills that apply** — e.g. `references/skills/test-driven-development/README.md` for new features, `references/skills/migration-debugger/README.md` for bugs.
- **File-level changes** — which files will be created/modified and what each one will contain at a high level.
- **Verification steps** — exact commands you will run (per `references/skills/verification-before-completion.md`).
- **Open questions / gaps** — anything the documentation doesn't cover. Surface these to the user before proceeding; do not fill the gap by guessing.

Share the plan with the user and get confirmation before implementing, unless the user has already pre-authorized the specific change.

### Phase 3 — Implement per the plan

- Follow the plan. If you discover the plan is wrong, **stop and revise the plan first** — do not silently diverge.
- Keep citations in commit messages and PR descriptions when the user asks for them.
- Verify per `references/skills/verification-before-completion.md` before claiming completion. No success claims without fresh evidence.

## What counts as a frontend task

Trigger this skill for, at minimum:

- Creating, scaffolding, or modifying an Angular SPA that uses SKY UX.
- Adding, removing, or reconfiguring any SKY UX component.
- Writing or fixing Angular/SKY UX specs, harnesses, or mocks.
- SKY UX or Angular version updates, migrations, deprecation cleanup.
- Visual theme, layout, accessibility, or styling work in a SKY UX app.
- Debugging build, test, or runtime failures in Angular/SKY UX code.

If you're unsure whether a task qualifies: it qualifies.

## Failure Modes — STOP

You are about to violate this skill if you catch yourself thinking:

| Thought                                                                        | Reality                                                                                                         |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| "I know how to do this in Angular, I don't need the doc."                      | The doc encodes SKY UX-specific rules generic Angular knowledge misses. Read it.                                |
| "The doc is probably out of date."                                             | The bundled doc is the canonical version for this project. If it's wrong, surface that — don't route around it. |
| "I'll write a quick stub now and check the doc later."                         | The plan precedes the code. Always.                                                                             |
| "This component isn't in `references/`, I'll use a similar one."               | Stop and tell the user. Do not substitute.                                                                      |
| "I'll just use a plain `<input>` / Material / Bootstrap / a custom CSS class." | If SKY UX has a component for it, use the SKY UX component.                                                     |
| "The user is in a hurry, I'll skip the plan."                                  | The plan is faster than the rework. No exceptions.                                                              |
| "Tests pass, so the approach must be right."                                   | Passing tests do not prove the approach is the SKY UX-sanctioned one. Cite the doc.                             |
| "The import looks fine, the package must already be installed."                | Check `package.json`. SKY UX components live in many packages (`@skyux/lookup`, `@skyux/layout`, `@skyux/forms`, …) and a missing dependency surfaces as a runtime/build error after the fact. Verify before you write the import. |
| "I'll just query the DOM in the spec — it's faster than wiring up the harness." | If a harness exists for the component, DOM queries are forbidden. Harnesses encode the component's intended interactions and survive internal markup changes; DOM queries are brittle and bypass the supported API. Use the harness. |
| "There's no harness page in `references/`, so I'll grab the DOM directly."     | First, re-check `sections-index.md` for a `testing` tab — harness docs are tab-gated. If genuinely absent, surface it under **Open questions / gaps** before bypassing. |

## Fast paths

For these common starting points, jump straight to the cited file instead of searching:

- **Creating a new page** → `references/skyux/components/page/README.md` (and its sibling `examples-index.md`). The page component ships **seven complete patterns** — home / list / record / split-view, in various layouts — that cover almost every Blackbaud page shape. Use the examples index to pull just the one that matches your use case. Full list of named patterns lives in `references/README.md` under "Fast paths."
- **Pulling a code example for any other component** → its `examples-index.md` (e.g. `autocomplete.examples-index.md` for a sibling-index component, or `<component>/examples-index.md` for one with its own directory). Each row gives the literal `Read offset=… limit=…` invocation.
- **Loading just one section of a component README** (e.g. just the API, just the harnesses, just the "when to use" guidance) → the sibling `sections-index.md`. Rows are tagged `design` / `development` / `testing` / `examples` so you can jump straight to the right tab.
- **Finding which components ship code examples upstream at all** → `references/skyux/components/examples-index.md` (top-level summary).

## Where to look

The full routing table lives in `references/README.md`. The high-level shape:

- `references/skills/` — process guides (migration, debugging, modernization, TDD, verification, known v14 fixes). These are **rigid**; follow them exactly.
- `references/skyux/components/` — one file per component. Lookup table at `references/skyux/components/README.md`.
- `references/skyux/components/examples-index.md` and the per-component `*examples-index.md` siblings — line-range cheatsheets for code examples.
- The per-component `*sections-index.md` siblings — line-range cheatsheets for _every_ `## ` section in the README, tagged by tab (`design` / `development` / `testing` / `examples`). Use this when you need anything other than a code example.
- `references/skyux/design/` — design principles, guidelines, and styles.
- `references/skyux/learn/` — getting started, accessibility, visual theme, developer guides.

Read on demand. Don't preload the whole tree.

## Relationship to other skills

This skill **layers on top of** general-purpose skills you may already be following (brainstorming, TDD, verification, debugging). When they conflict, the SKY UX references win for anything Angular- or SKY UX-specific. When they don't conflict, run both.
