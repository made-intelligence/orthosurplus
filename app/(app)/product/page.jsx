import Product from '@/components/pages/product'

export const metadata = {
  title: 'A3 Femoral Condylar · Primary TKR',
  description:
    'CoCr alloy posterior-stabilized femoral component with 3D-printed trabecular titanium fixation surface. CE + FDA certified.',
  alternates: { canonical: '/product' },
  openGraph: {
    title: 'A3 Femoral Condylar · CE + FDA Primary TKR implant',
    description:
      'Posterior-stabilized femoral component. CoCr alloy, 3D trabecular Ti fixation. Sizes 2–7.',
    url: '/product',
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'A3 Femoral Condylar',
  sku: 'AK-6916-1320',
  category: 'Orthopaedic implant / Knee / Primary TKR',
  description:
    'CoCr alloy posterior-stabilized femoral component with 3D-printed trabecular titanium fixation surface. CE + FDA certified.',
  material: 'CoCr Alloy',
  brand: { '@type': 'Brand', name: 'OrthoSurplus' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NGN',
    price: '741000',
    availability: 'https://schema.org/InStock',
    url: '/product',
  },
}

export default function Page() {
  return (
    <>
      <Product />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </>
  )
}
