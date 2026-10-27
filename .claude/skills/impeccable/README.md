# Impeccable (prose-only vendor)

Vendored from [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (Apache-2.0), built
by Paul Bakaus. This is deliberately the **stripped-down, static** version — not the full
`npx impeccable install` — chosen specifically because it:

- has **no auto-running hook** (nothing wired into `.claude/settings.json`; no `PostToolUse`/
  `Stop` behavior changes),
- has **no `scripts/` directory at all** — no CLI, no local server, no `child_process`/network
  calls of any kind,
- needs **no `OPENAI_API_KEY`** or any other credential.

It's design-principle reading material and 21 command playbooks that Claude applies by
reasoning about your code directly — nothing here executes.

## What's different from upstream

- `SKILL.md` frontmatter drops the `allowed-tools: [Bash(npx impeccable *), Bash(node ...)]`
  grant and the `Setup` step that mandates running `scripts/context.mjs` every session —
  neither applies without the CLI.
- `reference/new-work.md` and `reference/visualize.md` are **not included**. Unlike the other
  playbooks (which occasionally *mention* a script as one optional QA step), these two are
  structured as a mandatory CLI-driven workflow — a "concept roll" script and a local
  browser decision page — with upstream's own text calling skipping it "a contract
  violation." Including them here would have Claude try to run a script that doesn't exist.
  `SKILL.md` has a short inline paraphrase of the new-surface guidance instead.
- `reference/init.md`, `hooks.md`, `live.md`, `live-setup.md`, `doctor.md`, `craft.md` are
  dropped outright — each is entirely about CLI/hook/Live-Mode functionality not present here.
- The remaining 27 reference files are **verbatim** from upstream. A few (`critique.md`,
  `polish.md`, `layout.md`, `typeset.md`, `routing.md`, `audit.native.md`) mention running a
  script (e.g. `node .../scripts/detect.mjs`) as *one* optional step among broader guidance —
  **skip those specific lines**; the script doesn't exist in this install. Treat every other
  instruction in those files as normal design guidance.

## Commands

See `SKILL.md` for the full table — `shape`, `critique`, `audit`, `polish`, `bolder`,
`quieter`, `distill`, `harden`, `onboard`, `animate`, `colorize`, `typeset`, `layout`,
`delight`, `overdrive`, `clarify`, `adapt`, `optimize`, `extract`, `document`.

## If you want the full version later

The complete package (23 commands including `live`, the auto-run anti-pattern hook, the
`detect` CLI, optional image generation) is documented at
[impeccable.style](https://impeccable.style) and installed via `npx impeccable install`. That
was evaluated too — see the repo history on this branch for the safety review (CLI install
behavior, hook contents, browser extension permissions, Live Mode networking) if you want to
revisit installing it with the hook.
