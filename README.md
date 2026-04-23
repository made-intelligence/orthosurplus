# OrthoSurplus

Orthopaedic implant procurement platform for West African surgeons.

Live: [orthosurplus.com](https://orthosurplus.com)

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

Node 20 is pinned in `.nvmrc` and `netlify.toml`.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack public key (`pk_test_…` or `pk_live_…`). Required for the Pay button on the product page. |
| `NEXT_PUBLIC_APP_URL` | Canonical origin, used in metadata, sitemap, and OG tags. Defaults to `https://orthosurplus.com`. |

**On Netlify**, set these under Site settings → Environment variables → Production.

## Deployment

Production is on **Netlify**, auto-deployed from the `v1` branch.

- `netlify.toml` declares the build command (`npm run build`), the publish directory (`.next`), the Node version (20), and enables `@netlify/plugin-nextjs` for full SSR / server components / `next/image` support.
- Pushing to `v1` triggers a build. No manual UI config needed.
- Other branches (e.g. `next-migration`) get deploy previews automatically.

## Project Structure

```
orthosurplus/
├── app/                          # Next.js App Router
│   ├── layout.jsx                # Root layout, fonts, metadata, Org JSON-LD, Paystack script
│   ├── globals.css               # Reset, keyframes, responsive breakpoints, shared classes
│   ├── icon.jsx                  # Dynamic favicon (512×512) — generated at build
│   ├── apple-icon.jsx            # Dynamic apple-touch-icon (180×180)
│   ├── opengraph-image.jsx       # Dynamic OG share card (1200×630)
│   ├── manifest.js               # PWA manifest
│   ├── sitemap.js                # sitemap.xml
│   ├── robots.js                 # robots.txt
│   ├── sw.js                     # Serwist service-worker source
│   ├── (marketing)/              # Route group: Landing + Vendor, no app chrome
│   │   ├── page.jsx              # /
│   │   └── vendor/page.jsx       # /vendor
│   └── (app)/                    # Route group: app pages, with sticky app header
│       ├── layout.jsx            # AppHeader + main content padding
│       ├── catalogue/page.jsx    # /catalogue
│       ├── dashboard/page.jsx    # /dashboard
│       ├── kits/page.jsx         # /kits
│       ├── membership/page.jsx   # /membership
│       ├── orders/page.jsx       # /orders
│       ├── product/page.jsx      # /product (+ Product JSON-LD)
│       └── referrals/page.jsx    # /referrals
├── components/
│   ├── app-header.jsx            # Client — sticky header for (app) routes
│   ├── icons.jsx                 # SVG icon set (`ic.*`)
│   ├── ui.jsx                    # Client — Tag, Stat, Card, ComingSoon
│   ├── pwa-register.jsx          # Client — registers /sw.js in prod
│   └── pages/                    # Client page bodies wrapped by server pages
│       ├── catalogue.jsx
│       ├── dashboard.jsx
│       ├── kits.jsx
│       ├── landing.jsx
│       ├── membership.jsx
│       ├── product.jsx           # Paystack pay flow lives here
│       └── referrals.jsx
├── lib/
│   ├── tokens.js                 # Design tokens (T) — colors, fonts, radii, shadows
│   └── utils.js                  # formatNaira, etc.
├── public/
│   ├── favicon.svg               # OS monogram (also referenced by manifest)
│   └── implant-hero.jpeg         # Hero image
├── netlify.toml                  # Build command, plugin, Node version
├── next.config.js                # next config + Serwist wrapper
└── jsconfig.json                 # `@/*` path alias
```

## Design System

- **Typography**: Sora (headings/body) + JetBrains Mono (codes/SKUs), loaded via `next/font/google` — zero layout shift, self-hosted by Next at build.
- **Colors**: Warm teal (#0D9488) + ink (#0C1222), amber/green/blue/rose/violet accents.
- **Style**: "Precision Luxury" — generous spacing, thin borders, staggered `fadeUp`/`scaleIn` animations.
- **Responsive**: 1024px / 768px / 480px breakpoints in `globals.css`.

## Tech Stack

- **Next.js 15** (App Router) — React Server Components, file-based routing, static generation of 13 routes.
- **React 19**.
- **@serwist/next** — service-worker-powered PWA (installable, offline-ready precache).
- **Paystack inline JS** — payments; wired in the product page client component.
- **Netlify** with `@netlify/plugin-nextjs` — hosting.

## SEO & PWA

- Per-route `metadata` exports: title, description, canonical, OG, Twitter.
- JSON-LD: `Organization` in root layout, `Product` on `/product`.
- `app/sitemap.js` generates `/sitemap.xml` with priority/frequency.
- `app/robots.js` generates `/robots.txt` (private pages — dashboard, orders, referrals — are noindex).
- PWA: `manifest.webmanifest`, theme-color, Apple meta, service worker (production only).
- Dynamic icon + OG image generation via Next's built-in `ImageResponse` (no external raster files to maintain).

## Next Steps for Production

- [ ] Backend API (auth, orders, inventory, user profiles).
- [ ] Database for users, orders, and product stock.
- [ ] **Paystack webhook** — currently the Pay button initiates payment client-side only; success still needs server-side verification before fulfilling orders.
- [ ] Real auth flow (email/phone OTP — common in Nigeria).
- [ ] Admin panel for inventory and order management.
- [ ] WhatsApp Business API for order notifications.
- [ ] Analytics (Mixpanel/Amplitude for surgeon engagement funnels).
