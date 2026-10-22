# proxxymedia.com

Static site for Proxxy Media: workflow records management, proposals, training and automation for public bodies, NGOs and small firms worldwide.

* `index.html`, `privacy.html`, `thanks.html`: pages (plain HTML, crawlable)
* `css/site.css`: styles, light and dark mode
* `contact.php`: audit form handler. Emails info@proxxymedia.com and keeps a CSV copy (consultation_requests.csv) in `../proxxy_leads/` (outside public_html)
* `funda/.htaccess`: config for the funda.proxxymedia.com Node app. Keep it.
* `_backup_vite_2026-10-22/`: the previous Vite site, kept as a backup

Hostinger deploys the `proxxymedia-site` branch to public_html on every push.
