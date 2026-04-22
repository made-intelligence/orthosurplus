import Dashboard from '@/components/pages/dashboard'

export const metadata = {
  title: 'Dashboard',
  description: 'Your OrthoSurplus dashboard — orders, implant spend, credits, and quick actions.',
  alternates: { canonical: '/dashboard' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <Dashboard />
}
