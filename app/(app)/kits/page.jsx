import Kits from '@/components/pages/kits'

export const metadata = {
  title: 'Instrument Kits — coming soon',
  description:
    'Managed instrument kit logistics across West Africa. Book a kit for your surgery date — we deliver sterilised and collect after.',
  alternates: { canonical: '/kits' },
  openGraph: {
    title: 'OrthoSurplus Instrument Kits',
    description:
      'Book an instrument kit for your surgery. Delivered sterilised, collected afterward. Coming soon to West Africa.',
    url: '/kits',
  },
}

export default function Page() {
  return <Kits />
}
