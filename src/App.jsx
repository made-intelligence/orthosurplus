import { useState } from 'react'
import { T } from './tokens'
import { ic } from './components/icons'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Catalogue from './pages/Catalogue'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Kits from './pages/Kits'
import Referrals from './pages/Referrals'
import Membership from './pages/Membership'
import Vendor from './pages/Vendor'

const SCREENS = {
  landing: { C: Landing, t: 'Landing', full: true },
  home: { C: Dashboard, t: 'Dashboard' },
  catalogue: { C: Catalogue, t: 'Catalogue' },
  product: { C: Product, t: 'Product' },
  orders: { C: Orders, t: 'Orders' },
  kits: { C: Kits, t: 'Kits' },
  referrals: { C: Referrals, t: 'Referrals' },
  membership: { C: Membership, t: 'Membership' },
  vendor: { C: Vendor, t: 'Vendor', full: true },
}

const NAV_ITEMS = [
  { id: 'home', icon: ic.home, l: 'Home' },
  { id: 'catalogue', icon: ic.pkg, l: 'Catalogue' },
  { id: 'orders', icon: ic.cart, l: 'Orders' },
  { id: 'kits', icon: ic.wrench, l: 'Kits' },
  { id: 'referrals', icon: ic.gift, l: 'Refer' },
  { id: 'membership', icon: ic.crown, l: 'Plan' },
]

export default function App() {
  const [screen, setScreen] = useState('landing')
  const go = (to) => {
    setScreen(to)
    window.scrollTo(0, 0)
  }

  const cur = SCREENS[screen] || SCREENS.landing
  const isApp = !cur.full

  return (
    <div style={{
      width: '100%', height: '100vh', display: 'flex', flexDirection: 'column',
      background: T.bg, fontFamily: T.fB, overflow: 'hidden', color: T.ink,
    }}>
      {/* Prototype navigation bar */}
      <div className="proto-bar" style={{
        background: T.ink, padding: '6px 24px', display: 'flex', gap: 4,
        alignItems: 'center', flexShrink: 0,
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, color: T.ink40, letterSpacing: 1.5,
          marginRight: 12, fontFamily: T.fM, whiteSpace: 'nowrap',
        }}>
          PROTOTYPE
        </span>
        {Object.entries(SCREENS).map(([k, v]) => (
          <button key={k} onClick={() => go(k)} style={{
            padding: '5px 14px', borderRadius: 6, fontSize: 12,
            fontWeight: screen === k ? 700 : 500, whiteSpace: 'nowrap',
            background: screen === k ? T.teal : 'rgba(255,255,255,.06)',
            color: screen === k ? '#fff' : T.ink20,
            border: 'none', cursor: 'pointer', transition: 'all .15s',
          }}>
            {v.t}
          </button>
        ))}
      </div>

      {/* App header — only for logged-in screens */}
      {isApp && (
        <header style={{
          background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${T.ink05}`, padding: '0 32px', height: 56,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 7, background: T.teal,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: '#fff', fontFamily: T.fH }}>OS</span>
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, fontFamily: T.fH, letterSpacing: -0.3 }}>
              OrthoSurplus
            </span>
          </div>

          <div style={{ display: 'flex', gap: 2, alignItems: 'center', overflowX: 'auto' }}>
            {NAV_ITEMS.map((n) => {
              const active = screen === n.id
              return (
                <button key={n.id} onClick={() => go(n.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '7px 14px', borderRadius: 8, fontSize: 13,
                  fontWeight: active ? 600 : 500, whiteSpace: 'nowrap',
                  background: active ? `${T.teal}08` : 'transparent',
                  color: active ? T.tealDark : T.ink40,
                  border: 'none', cursor: 'pointer', transition: 'all .15s',
                }}>
                  {n.icon({ size: 15, color: active ? T.teal : T.ink20 })} {n.l}
                </button>
              )
            })}
            <div style={{ width: 1, height: 24, background: T.ink05, margin: '0 8px' }} />
            <div style={{
              width: 32, height: 32, borderRadius: 99, background: T.tealLight,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.tealDark, fontFamily: T.fH }}>DA</span>
            </div>
          </div>
        </header>
      )}

      {/* Page content */}
      <main className="app-pad" style={{
        flex: 1, overflow: 'auto',
        padding: isApp ? '28px 40px 48px' : 0,
      }}>
        <cur.C go={go} />
      </main>
    </div>
  )
}
