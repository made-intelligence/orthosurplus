import Referrals from '@/components/pages/referrals'

export const metadata = {
  title: 'Refer & Earn',
  description: 'Refer a colleague. They get 5% off their first order. You earn ₦25,000 in platform credit.',
  alternates: { canonical: '/referrals' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <Referrals />
}
