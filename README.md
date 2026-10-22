# proxxymedia.com

Static site for Proxxy Media: workflow automation and records systems for South African professional firms.

* `index.html`, `privacy.html`, `thanks.html`: pages (plain HTML, crawlable)
* `css/site.css`: styles, light and dark mode
* `contact.php`: audit form handler. Emails info@proxxymedia.com and keeps a CSV copy in `../proxxy_leads/` (outside public_html)
* `funda/.htaccess`: config for the funda.proxxymedia.com Node app. Keep it.
* `_backup_vite_2026-10-22/`: the previous Vite site, kept as a backup

Hostinger deploys the `proxxymedia-site` branch to public_html on every push.
