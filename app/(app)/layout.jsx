import AppHeader from '@/components/app-header'

export default function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      <main className="app-pad" style={{ padding: '28px 40px 48px' }}>
        {children}
      </main>
    </>
  )
}
