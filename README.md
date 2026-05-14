# marmotmanuscript.com

The marketing website for [Marmot](https://github.com/hawkirk/marmot-v2), a
minimalist macOS writing app for novelists.

Built with [Astro](https://astro.build), styled with the
[Flexoki](https://stephango.com/flexoki) palette and [Inter](https://rsms.me/inter),
deployed to GitHub Pages.

---

## Local development

Requires Node 20.3+ or 22+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build to dist/
npm run preview  # serve the built site locally
```

## Project layout

```
src/
  components/      # Hero, Features, Philosophy, Comparison, FAQ, Footer, etc.
  layouts/         # BaseLayout — html shell, font preload, SEO
  pages/           # index.astro, privacy.astro, 404.astro
  styles/
    tokens.css     # Flexoki palette + fluid type scale
    global.css     # reset + base typography
    fonts.css      # @font-face for self-hosted Inter Variable
public/
  fonts/           # InterVariable.woff2 + italic + license
  logos/           # 10 SVG logo variants
  CNAME            # marmotmanuscript.com (carries the custom domain)
  favicon.svg
  robots.txt
```

## Editing the content

Most copy lives directly inside the components in `src/components/`:

- **Hero copy** — `src/components/Hero.astro`
- **Features grid** — `src/components/Features.astro` (the `features` array)
- **Philosophy / manifesto** — `src/components/Philosophy.astro`
- **Comparison rows** — `src/components/Comparison.astro` (the `rows` array)
- **FAQ entries** — `src/components/FAQ.astro` (the `faqs` array)
- **Footer links + email** — `src/components/Footer.astro`
- **Privacy policy** — `src/pages/privacy.astro`

## Theming

Flexoki tokens live in `src/styles/tokens.css`. Light mode is the default;
dark mode is applied automatically via `@media (prefers-color-scheme: dark)`.
There is no theme toggle in the UI — the site follows the visitor's system
preference.

The logo swaps via `<picture>` in `src/components/Logo.astro`. The `-dark`
variants of the SVGs are used in light mode (dark ink on paper), and the
`-light` variants in dark mode (light ink on black).

## Replacing the placeholders

A few placeholders are deliberately left in for you to swap in over time:

- [ ] **Mac App Store URL** — currently `#` with a "Coming Soon" label. Once
      the app is live, pass `comingSoon={false}` and the real `href` to
      `<AppStoreBadge />` inside `Hero.astro`.
- [ ] **Official Apple badge** — `AppStoreBadge.astro` is a custom recreation.
      For App Store launch, replace it with Apple's official SVG from the
      [Marketing Resources](https://developer.apple.com/app-store/marketing/guidelines/)
      page (must not be resized below 40px or recolored).
- [ ] **Screenshot** — `<Screenshot />` renders a placeholder until you pass
      a `src` prop. Drop a 2560×1600 product shot into `public/screenshots/`.
- [ ] **og-image.png** — generate a 1200×630 social card and place it at
      `public/og-image.png`.
- [ ] **apple-touch-icon.png** — generate a 180×180 PNG from
      `marmot-icon-light-gradient.svg` and place it at
      `public/apple-touch-icon.png`.
- [ ] **Support email** — update `supportEmail` in `Footer.astro` and
      `privacy.astro` if `hello@marmotmanuscript.com` is not the right address.

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via
`.github/workflows/deploy.yml`. The first push will not be reachable until
the Pages + DNS setup below is completed once.

### One-time GitHub setup

1. Push this repo to GitHub.
2. Repository **Settings → Pages**:
   - Source: **GitHub Actions**
   - Custom domain: `marmotmanuscript.com`
   - Enforce HTTPS: enable once the certificate provisions (~15 minutes
     after DNS propagates).

### One-time Squarespace DNS setup

In the Squarespace Domains dashboard for `marmotmanuscript.com`, remove any
parking A records and add:

```
A      @     185.199.108.153
A      @     185.199.109.153
A      @     185.199.110.153
A      @     185.199.111.153
CNAME  www   hawkirk.github.io.
```

DNS typically propagates within an hour but can take up to 24 hours. Verify
with:

```bash
dig marmotmanuscript.com +short
curl -I https://marmotmanuscript.com
```

## Verification checklist before launch

- [ ] `npm run build` completes with 0 errors / 0 warnings
- [ ] Open `npm run preview` and walk through every section
- [ ] Toggle macOS Appearance → verify dark mode renders correctly
- [ ] Resize to 320px, 768px, 1280px to confirm responsive layouts
- [ ] Lighthouse: target 100 / 100 / 100 / 100 on the built preview
- [ ] Update the **privacy** page's "Last updated" date if anything has changed
- [ ] Apple App Store Connect: paste `https://marmotmanuscript.com` as both
      Marketing URL and Support URL, and
      `https://marmotmanuscript.com/privacy` as Privacy Policy URL

## Credits

- [Flexoki](https://stephango.com/flexoki) color palette by Steph Ango (MIT)
- [Inter](https://rsms.me/inter) typeface by Rasmus Andersson (SIL OFL 1.1)
- [Astro](https://astro.build) framework
