import Catalogue from '@/components/pages/catalogue'

export const metadata = {
  title: 'Catalogue — certified orthopaedic implants',
  description:
    'Browse CE + FDA certified knee and hip implants with transparent pricing. A3 Femoral, CL-TH Cementless Stem, Biolox Delta Head, and more.',
  alternates: { canonical: '/catalogue' },
  openGraph: {
    title: 'OrthoSurplus catalogue — certified orthopaedic implants',
    description:
      'Browse knee and hip implants by SKU, size, and material. Transparent pricing, delivered to your theatre.',
    url: '/catalogue',
  },
}

export default function Page() {
  return <Catalogue />
}
