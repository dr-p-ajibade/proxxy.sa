# Proxxy Media website: project rules

Live site: https://proxxymedia.com. Hostinger deploys the `proxxymedia-site` branch to public_html on every push.
The deploy REPLACES public_html with this branch, so anything that must stay on the server lives in this repo (for example `funda/.htaccess` for the funda.proxxymedia.com Node app).

## Design skills (always use for any visual work)
Installed in `.claude/skills/`:
* `taste` and `taste-skill` (design-taste-frontend): anti generic design direction and critique.
* `impeccable`: design, critique, audit, polish, animate, harden playbooks (prose only, no scripts).
* `getdesign`: turn a reference URL into a design spec.
Read the relevant SKILL.md before designing, redesigning or polishing a page.

## Motion and component stack (Pat's standing choice)
Always include these on every website project:
* **GSAP** (https://github.com/greensock/GSAP) with ScrollTrigger.
* **Lenis** smooth scrolling (https://github.com/darkroomengineering/lenis), driven by the GSAP ticker.
* **React Bits** (https://github.com/DavidHDev/react-bits) and **21st.dev** components whenever the build is React (they are React component sources, so they do not apply to plain HTML pages).

Rules:
* `prefers-reduced-motion: reduce` turns ALL of it off: no Lenis, no GSAP tweens, no autoplay motion. Use `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)`.
* Content must be visible if JavaScript or a library fails (use `gsap.from`, never hide content in CSS).
* Self host libraries in `js/vendor/` with pinned versions. Current: GSAP 3.13.0, Lenis 1.3.26.
* Spend motion in one or two meaningful places (hero entrance, real sequences), not on every section.

## Content rules
* Never use hyphens or dashes in visible copy. Rephrase instead.
* Only facts Pat has confirmed. No invented statistics, clients, testimonials, guarantees, partners or scarcity claims.
* Google must be able to read every page: plain HTML, or a React build that is prerendered to HTML.

## Checks before pushing
`php -l contact.php`, a scan of visible text for dashes, and Playwright screenshots at 1366px, 390px, dark mode and reduced motion.
