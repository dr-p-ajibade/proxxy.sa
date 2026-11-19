# Proxxy Media site source (Next.js, ORHET house design)

Built with the ORHET design system skill (orhet-design-system). Do not change tokens, fonts, line patterns, component shapes or motion rules.

* Content: `lib/services.ts` (the eight services, plans and "from" prices in ZAR and USD) and `lib/site.ts`.
* Motifs: `public/icons/<slug>.svg`, one per service, original carved glyphs.
* Form: `public/contact.php` emails info@proxxymedia.com and keeps a CSV copy outside public_html.
* Rules: no dashes or hyphens in visible copy; only facts Pat confirms; every number sourced; GSAP and Lenis only, off under reduced motion.

## Build and deploy
Static export. Hostinger serves the `proxxymedia-site` branch of dr-p-ajibade/proxxy.sa as public_html, with no build step.
* Preview: `NEXT_PUBLIC_BASE_PATH=/v2 npx next build`, copy `out/` to `v2/` on the deploy branch.
* Live: `npx next build`, copy `out/` to the deploy branch root, keeping `funda/.htaccess`, `.htaccess`, `robots.txt` and backups.
The deploy replaces public_html with the branch, so everything that must stay on the server lives on that branch.
