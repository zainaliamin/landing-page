# German POS Website

Static marketing website for `germanpos.com`.

## Pages

- `index.html`
- `features.html`
- `pricing.html`
- `about.html`
- `demo.html`
- `contact.html`

## Assets

- Shared CSS: `assets/css/styles.css`
- Shared JS: `assets/js/main.js`
- Images: `assets/images/`

## Hosting

Upload the contents of this `website/` folder to the document root for `germanpos.com`.

## Sitemap

`sitemap.xml` and self-referencing canonical URLs are generated automatically from public HTML files. Run `npm run build:website` before deploying the website; this is the required website build step and regenerates the sitemap and one canonical URL per public page without manual edits. The generator excludes pages in private, admin, login, dashboard, API, error, and development paths from the sitemap, and also excludes any page with a `robots` `noindex` meta tag. Set `SITE_URL` when generating for a different production domain.

The deployment platform must serve `404.html` with an HTTP `404 Not Found` status. Do not redirect unknown URLs to the homepage, as that creates a soft 404 for search engines.

The forms currently show an on-page confirmation only. Connect them to email, WhatsApp, or a backend endpoint when live lead capture is required.
