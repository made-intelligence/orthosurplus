import Membership from '@/components/pages/membership'

export const metadata = {
  title: 'Membership — Essentials, Professional, Elite',
  description:
    'Three tiers for every practice. Essentials from ₦75k/mo. Professional unlocks a 5% discount. Elite unlocks 10%. Annual billing saves 17%.',
  alternates: { canonical: '/membership' },
  openGraph: {
    title: 'OrthoSurplus Membership',
    description:
      'Monthly or annual membership for orthopaedic surgeons. Higher tiers save more per implant.',
    url: '/membership',
  },
}

export default function Page() {
  return <Membership />
}
