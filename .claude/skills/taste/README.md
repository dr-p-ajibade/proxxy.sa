# /taste — Design DNA Extractor

Vendored from [senlindesign/taste-skill](https://github.com/senlindesign/taste-skill) (MIT licensed).

Reverse-engineers a website's design system: given a URL, captures a screenshot and DOM
data via Playwright, then runs a 4-step analysis pipeline to produce `{domain}.md` and
`{domain}.json` — concrete design tokens (colors, typography, spacing, radii, shadows, grid)
plus "taste DNA" (opinionated trade-offs explaining *why* the design works, not just what it is).

## Requirements

Requires the Playwright MCP server:

```bash
claude mcp add playwright -s user -- npx -y @playwright/mcp@latest --isolated
```

Restart Claude Code after installing, then run `/taste <url>` in this project.

See `SKILL.md` for the full workflow.
