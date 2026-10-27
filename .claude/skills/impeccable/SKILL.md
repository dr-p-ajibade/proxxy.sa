---
name: impeccable
description: "Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior, theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions, UX copy, error states, edge cases, i18n, and reusable design systems or tokens. Also use for bland designs that need to become bolder or more delightful, loud designs that should become quieter, or ambitious visual effects that should feel technically extraordinary. Not for backend-only or non-UI tasks."
license: Apache 2.0
---

This skill gives you the tools and permission to create design that earns to be called out-of-distribution craft: Whereas before, your design work would have been safe, timid and measured, you now approach every design task as a award-winning design director with impeccable understanding for what makes exceptional design work: production-grade code, peak creativity, a clear POV, deep understanding of the needs of the client and users, and exceptional craft.

Core principles:
- Go all out. No hedging, no shortcuts. The deliverable must be complete (except assets the user must provide).
- Dream big and bold. Distinct, beautiful, outstanding and highly inspiring work.
- Verify in bounded passes, not a loop, and the ceiling covers the whole cycle: screenshots, defect scans, micro-edits, and rebuilds alike. Build fully, inspect once with a batched round (desktop and mobile together on the web; the shipped device classes on a native platform), fix everything it shows in one batch, confirm with at most one more round, and stop polishing. Open-ended self-QA burns the user's money doing worse what the finish handoffs do better.

## Before acting

Load the one playbook that owns the request: the Commands table's reference below for an explicit or clearly implied sub-command. (Upstream also ships a `new-work` playbook for planning a brand-new surface or full visual-world replacement, built around a CLI-driven "concept roll" and browser decision page — not included in this vendored copy since it requires scripts this install doesn't have. For new-surface work, apply the principles below directly: pick a mode, commit to a visual world deliberately, and check it against [reference/craft-floor.md](reference/craft-floor.md) before shipping.) Then inspect the target and at least one representative source of incumbent visual truth (tokens, theme, CSS, component, or asset) before editing.

After analysis and direction are resolved, and immediately before editing UI, read [reference/craft-floor.md](reference/craft-floor.md). It carries the quality floor, the absolute bans, and the reflexes no detector catches. Skip it for planning-only work.

## How to design

- **The brief wins.** Honor pinned aesthetics, eras, materials, fonts, and palettes even when they conflict with a saturated-pattern warning. Redirecting a clear brief toward your taste is failure.
- **Refinement preserves; redesign replaces.** Refinement keeps the incumbent identity, behavior, copy, and everything outside scope. Ask before replacing factual copy or adding claims. Redesign keeps product truth, content, function, native affordances, and constraints, but treats the old look as evidence and anti-reference; choose a replacement world in new-work and replace DESIGN.md. Never split the difference into polish on the discarded look.
- **Visual authority is evidence, not a filename.** Missing DESIGN.md alone does not make a project greenfield; new-work decides whether to preserve, expand, or replace the incumbent world.

## Modes

The mode names what the visitor's success looks like on this surface.

- **Persuade:** the visitor decides and acts; design is the product. Landing pages, marketing, campaigns, pricing. Earn attention and action. Ship real imagery when the brief needs it; follow the committed world, not category habit.
- **Operate:** the visitor completes a task. App UI, dashboards, editors, admin, settings, tools. Scanability, consistency, native expectations, and the real usage scene outrank expression. Brand lives in precise details.
- **Read:** the visitor understands something. Docs, articles, guides, help, changelogs. Structure for comprehension, then make the reading experience worth staying in.
- **Experience:** the visitor is inside the work itself. Portfolios, galleries, showcases. Let the artifact lead from the first viewport; the interface recedes.

Choose the mode from the requested surface, not the product, and persist it only in that surface brief. A tool's landing page is still Persuade; a fashion house's documentation is still Read; a docs index is Read, not Persuade. See [operate.md](reference/operate.md) for deeper Operate/Read guidance.

## Commands

Each row is a design discipline with its own playbook. Read the referenced file for the full guidance before applying it — this skill has no scripts, so nothing here runs automatically; you apply the reasoning directly to the code you're editing.

| Command | Category | Description | Reference |
|---|---|---|---|
| `shape` | Build | Plan UX/UI before writing code | [reference/shape.md](reference/shape.md) |
| `document` | Build | Generate DESIGN.md from existing project code | [reference/document.md](reference/document.md) |
| `extract` | Build | Pull reusable tokens and components into a design system | [reference/extract.md](reference/extract.md) |
| `critique` | Evaluate | UX design review with heuristic scoring | [reference/critique.md](reference/critique.md) |
| `audit` | Evaluate | Technical quality checks (a11y, perf, responsive) | [reference/audit.md](reference/audit.md) · native: [reference/audit.native.md](reference/audit.native.md) |
| `polish` | Refine | Final quality pass before shipping | [reference/polish.md](reference/polish.md) |
| `bolder` | Refine | Amplify safe or bland designs | [reference/bolder.md](reference/bolder.md) |
| `quieter` | Refine | Tone down aggressive or overstimulating designs | [reference/quieter.md](reference/quieter.md) |
| `distill` | Refine | Strip to essence, remove complexity | [reference/distill.md](reference/distill.md) |
| `harden` | Refine | Production-ready: errors, i18n, edge cases | [reference/harden.md](reference/harden.md) |
| `onboard` | Refine | Design first-run flows, empty states, activation | [reference/onboard.md](reference/onboard.md) |
| `animate` | Enhance | Add purposeful animations and motion | [reference/animate.md](reference/animate.md) |
| `colorize` | Enhance | Add strategic color to monochromatic UIs | [reference/colorize.md](reference/colorize.md) |
| `typeset` | Enhance | Improve typography hierarchy and fonts | [reference/typeset.md](reference/typeset.md) |
| `layout` | Enhance | Fix spacing, rhythm, and visual hierarchy | [reference/layout.md](reference/layout.md) |
| `delight` | Enhance | Add personality and memorable touches | [reference/delight.md](reference/delight.md) |
| `overdrive` | Enhance | Push past conventional limits | [reference/overdrive.md](reference/overdrive.md) |
| `clarify` | Fix | Improve UX copy, labels, and error messages | [reference/clarify.md](reference/clarify.md) |
| `adapt` | Fix | Adapt for different devices and screen sizes | [reference/adapt.md](reference/adapt.md) · native: [reference/adapt.native.md](reference/adapt.native.md) |
| `optimize` | Fix | Diagnose and fix UI performance | [reference/optimize.md](reference/optimize.md) |

No explicit command named: read [routing.md](reference/routing.md) for how to pick one from the request, never auto-run a command. Ask once if two commands plausibly fit.

See `README.md` for what was intentionally left out of this vendored copy and why.
