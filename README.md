# OrthoSurplus

Orthopaedic implant procurement platform for West African surgeons.

## Quick Start (deploy in under 1 hour)

### Option A: Deploy to Vercel (fastest — ~5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Test locally
npm run dev

# 3. Deploy
npx vercel --prod
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Vite and deploys with zero config.

### Option B: Deploy to Netlify

```bash
npm install
npm run build
# Upload the `dist/` folder to Netlify, or connect your GitHub repo
```

### Option C: Any static host

```bash
npm install
npm run build
# Serve the `dist/` directory
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_PAYSTACK_PUBLIC_KEY` | Your Paystack public key (pk_test_... or pk_live_...) |
| `VITE_APP_URL` | Your production URL |

## Project Structure

```
orthosurplus/
├── index.html          # Entry HTML with SEO meta tags
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite build configuration
├── vercel.json         # Vercel SPA routing
├── .env.example        # Environment variables template
├── public/
│   ├── favicon.svg     # OS monogram favicon
│   └── implant-hero.jpeg  # Hero section product image
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main shell + routing
    ├── styles.css      # Global reset, animations, responsive
    ├── tokens.js       # Design tokens (colors, fonts, spacing)
    ├── utils.js        # Formatters (₦ currency)
    ├── components/
    │   ├── icons.jsx   # SVG icon components
    │   └── ui.jsx      # Shared UI (Card, Tag, Stat, ComingSoon)
    └── pages/
        ├── Landing.jsx     # Public landing page
        ├── Dashboard.jsx   # Logged-in dashboard
        ├── Catalogue.jsx   # Product catalogue with filters
        ├── Product.jsx     # Product detail + order config
        ├── Orders.jsx      # Order history
        ├── Kits.jsx        # Instrument kits (coming soon)
        ├── Referrals.jsx   # Referral program
        ├── Membership.jsx  # Membership tiers
        └── Vendor.jsx      # Vendor/partner page
```

## Design System

- **Typography**: Sora (headings) + JetBrains Mono (codes/SKUs)
- **Colors**: Warm teal (#0D9488) + ink (#0C1222) palette
- **Style**: "Precision Luxury" — generous spacing, thin borders, staggered animations

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool (fast dev server + optimized production builds)
- **react-paystack** — Payment integration (Paystack gateway)
- **Vercel** — Recommended hosting (zero-config deploy)

## What This Prototype Demonstrates

1. **Landing page** — Surgeon pain-point driven messaging
2. **Catalogue** — Filterable product grid with real SKUs and pricing
3. **Product detail** — Size selection, delivery site picker, discount breakdown
4. **Order tracking** — Status, delivery location, line items
5. **Membership tiers** — Essentials / Professional / Elite
6. **Referral system** — Code sharing, WhatsApp integration
7. **Instrument kits** — Coming soon waitlist
8. **Vendor page** — Partner recruitment

## Next Steps for Production

- [ ] Backend API (Node/Python) for auth, orders, inventory
- [ ] Database (PostgreSQL) for users, orders, products
- [ ] Paystack webhook integration for payment verification
- [ ] Real auth flow (email/phone OTP — common in Nigeria)
- [ ] Admin panel for inventory management
- [ ] WhatsApp Business API integration for notifications
- [ ] Analytics (Mixpanel/Amplitude for surgeon engagement)
