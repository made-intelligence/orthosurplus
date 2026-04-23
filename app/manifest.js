export default function manifest() {
  return {
    name: 'OrthoSurplus',
    short_name: 'OrthoSurplus',
    description:
      'Orthopaedic implant procurement for surgeons in West Africa. CE/FDA certified implants, transparent pricing, delivered to your theatre.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FAFAF9',
    theme_color: '#0D9488',
    categories: ['medical', 'business', 'productivity'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Catalogue',
        short_name: 'Catalogue',
        url: '/catalogue',
      },
      {
        name: 'Orders',
        short_name: 'Orders',
        url: '/orders',
      },
    ],
  }
}
