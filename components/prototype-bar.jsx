'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { T } from '@/lib/tokens'

const SCREENS = [
  { path: '/', t: 'Landing' },
  { path: '/dashboard', t: 'Dashboard' },
  { path: '/catalogue', t: 'Catalogue' },
  { path: '/product', t: 'Product' },
  { path: '/orders', t: 'Orders' },
  { path: '/kits', t: 'Kits' },
  { path: '/referrals', t: 'Referrals' },
  { path: '/membership', t: 'Membership' },
  { path: '/vendor', t: 'Vendor' },
]

export default function PrototypeBar() {
  const pathname = usePathname()
  const isActive = (path) => (path === '/' ? pathname === '/' : pathname.startsWith(path))

  return (
    <div className="proto-bar" style={{
      background: T.ink, padding: '6px 24px', display: 'flex', gap: 4,
      alignItems: 'center', flexShrink: 0, position: 'sticky', top: 0, zIndex: 60,
    }}>
      <span style={{
        fontSize: 10, fontWeight: 700, color: T.ink40, letterSpacing: 1.5,
        marginRight: 12, fontFamily: T.fM, whiteSpace: 'nowrap',
      }}>
        PROTOTYPE
      </span>
      {SCREENS.map((s) => {
        const active = isActive(s.path)
        return (
          <Link key={s.path} href={s.path} style={{
            padding: '5px 14px', borderRadius: 6, fontSize: 12,
            fontWeight: active ? 700 : 500, whiteSpace: 'nowrap',
            background: active ? T.teal : 'rgba(255,255,255,.06)',
            color: active ? '#fff' : T.ink20,
            border: 'none', transition: 'all .15s', textDecoration: 'none',
          }}>
            {s.t}
          </Link>
        )
      })}
    </div>
  )
}
