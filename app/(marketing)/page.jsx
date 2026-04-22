import Landing from '@/components/pages/landing'

export const metadata = {
  title: { absolute: 'OrthoSurplus — Orthopaedic Implant Procurement for West Africa' },
  description:
    "Lower implant costs. More patients on the table. CE/FDA-certified orthopaedic implants sourced direct, with transparent pricing, delivered to your theatre.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'OrthoSurplus — Lower implant costs. More patients on the table.',
    description:
      'The procurement platform for orthopaedic surgeons in West Africa. Certified implants, transparent pricing, delivered to your hospital.',
    url: '/',
  },
}

export default function Page() {
  return <Landing />
}
