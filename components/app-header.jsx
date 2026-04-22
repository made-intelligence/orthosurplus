'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { T } from '@/lib/tokens'
import { ic } from './icons'

const NAV_ITEMS = [
  { path: '/dashboard', icon: ic.home, l: 'Home' },
  { path: '/catalogue', icon: ic.pkg, l: 'Catalogue' },
  { path: '/orders', icon: ic.cart, l: 'Orders' },
  { path: '/kits', icon: ic.wrench, l: 'Kits' },
  { path: '/referrals', icon: ic.gift, l: 'Refer' },
  { path: '/membership', icon: ic.crown, l: 'Plan' },
]

export default function AppHeader() {
  const pathname = usePathname()

  return (
    <header style={{
      background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${T.ink05}`, padding: '0 32px', height: 56,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0,
      position: 'sticky', top: 28, zIndex: 40,
    }}>
      <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7, background: T.teal,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: '#fff', fontFamily: T.fH }}>OS</span>
        </div>
        <span style={{ fontSize: 15, fontWeight: 700, fontFamily: T.fH, letterSpacing: -0.3, color: T.ink }}>
          OrthoSurplus
        </span>
      </Link>

      <div style={{ display: 'flex', gap: 2, alignItems: 'center', overflowX: 'auto' }}>
        {NAV_ITEMS.map((n) => {
          const active = pathname.startsWith(n.path)
          return (
            <Link key={n.path} href={n.path} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', borderRadius: 8, fontSize: 13,
              fontWeight: active ? 600 : 500, whiteSpace: 'nowrap',
              background: active ? `${T.teal}08` : 'transparent',
              color: active ? T.tealDark : T.ink40,
              transition: 'all .15s', textDecoration: 'none',
            }}>
              {n.icon({ size: 15, color: active ? T.teal : T.ink20 })} {n.l}
            </Link>
          )
        })}
        <div style={{ width: 1, height: 24, background: T.ink05, margin: '0 8px' }} />
        <div style={{
          width: 32, height: 32, borderRadius: 99, background: T.tealLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }} aria-label="Dr. Adewale">
          <span style={{ fontSize: 11, fontWeight: 700, color: T.tealDark, fontFamily: T.fH }}>DA</span>
        </div>
      </div>
    </header>
  )
}
