import { Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import PwaRegister from '@/components/pwa-register'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://orthosurplus.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'OrthoSurplus — Orthopaedic Implant Procurement for West Africa',
    template: '%s · OrthoSurplus',
  },
  description:
    "Lower implant costs. More patients on the table. CE/FDA-certified orthopaedic implants sourced direct, with transparent pricing, delivered to your theatre.",
  applicationName: 'OrthoSurplus',
  keywords: [
    'orthopaedic implants',
    'knee replacement Nigeria',
    'hip replacement West Africa',
    'surgical implants procurement',
    'CE FDA certified implants',
    'Lagos orthopaedic surgeon',
    'joint replacement Nigeria',
  ],
  authors: [{ name: 'OrthoSurplus' }],
  creator: 'OrthoSurplus',
  publisher: 'OrthoSurplus',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'OrthoSurplus',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'OrthoSurplus',
    title: 'OrthoSurplus — Lower implant costs. More patients on the table.',
    description:
      'The procurement platform for orthopaedic surgeons in West Africa. Certified implants, transparent pricing, delivered to your hospital.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OrthoSurplus — orthopaedic implant procurement for West Africa',
      },
    ],
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OrthoSurplus — Orthopaedic Implant Procurement',
    description: 'Lower implant costs. More patients on the table.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport = {
  themeColor: '#0D9488',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OrthoSurplus',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      'Orthopaedic implant procurement platform for surgeons in West Africa.',
    areaServed: ['NG', 'GH'],
    sameAs: [],
  }

  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <PwaRegister />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  )
}
