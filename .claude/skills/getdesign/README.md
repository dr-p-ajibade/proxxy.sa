# getdesign

Vendored from [MohtashamMurshid/getdesign](https://github.com/MohtashamMurshid/getdesign)
(`skills/getdesign/`), the portable agent-skill twin of the hosted
[getdesign.app](https://getdesign.app) pipeline.

Turns any public URL into a grounded, 9-section `design.md` (visual theme, color palette,
typography, components, layout, depth, motion, responsive behavior, agent prompt guide) using
only the agent's own built-in tools — WebFetch and a browser/screenshot tool if available. No
MCP server, no npm install, no sandbox required; every value in the output must trace back to
an actual fetched stylesheet, computed style, or screenshot.

Complements the other two design skills in this repo:
- `taste-skill` (`design-taste-frontend`) — generates *new* designs, anti-slop rules.
- `taste` — reverse-engineers a live site into tokens *and* opinionated "why" trade-offs
  (requires Playwright MCP).
- `getdesign` (this one) — reverse-engineers a live site into grounded tokens only, zero
  extra setup.

See `SKILL.md` for the workflow and `TEMPLATE.md` for the exact output schema.
