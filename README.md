# stakeslinger.com

Static website + contact page for **Stakeslinger** — company building Android/iOS apps.
Bilingual (EN/DE), hosted on **Cloudflare Pages**.

## Structure

```
stakeslinger.com/
├── index.html            # Landing: hero, apps, contact
├── privacy-policy.html   # Privacy policy (Google Play + Apple compliant, EN/DE)
├── terms.html            # Terms of Service (EN/DE)
├── impressum.html        # German legal notice (§5 DDG) — FILL IN required fields
├── 404.html
├── manifest.json         # PWA manifest
├── robots.txt
├── sitemap.xml
├── _headers              # Cloudflare Pages cache/security headers
├── css/style.css
├── js/main.js            # Language toggle (EN/DE, localStorage)
├── icons/                # PWA icons (icon-16 … icon-512) — ADD from logo
└── images/               # logo.png, og-image.png — ADD
```

## TODO before launch

- [ ] Add logo → `images/logo.png` (and `icons/icon-*.png`, `favicon.ico`, `images/og-image.png`)
- [ ] Fill in `impressum.html` (name, address — legally required in Germany)
- [ ] Replace placeholder app cards in `index.html` with real apps + store links
- [ ] Review `privacy-policy.html` data table to match what each app actually collects

## Local preview

```sh
python -m http.server 8080
# open http://localhost:8080
```

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → select this repo.
3. Build settings: **Framework preset: None**, **Build command: (empty)**, **Output directory: `/`**.
4. Add custom domain `stakeslinger.com` in Pages → Custom domains.

## Language toggle

Bilingual content uses `<span data-lang="en">` / `<span data-lang="de">`.
CSS shows only the active language; `js/main.js` sets `<html lang>` and persists choice in `localStorage`.
