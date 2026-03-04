import { useState } from 'react'
import { T } from '../tokens'
import { ic } from '../components/icons'
import { Card, Tag } from '../components/ui'
import { formatNaira } from '../utils'

const SITES = [
  { name: 'Reddington Hospital', area: 'Victoria Island, Lagos', tag: 'Home' },
  { name: 'EKO Hospital', area: 'Ikeja, Lagos', tag: 'Secondary' },
  { name: 'LUTH', area: 'Surulere, Lagos', tag: 'Secondary' },
]

export default function Product({ go }) {
  const [size, setSize] = useState('4')
  const [site, setSite] = useState(0)
  const price = 780000
  const disc = Math.round(price * 0.95)

  return (
    <div>
      <button onClick={() => go('catalogue')} style={{
        display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600,
        color: T.ink40, background: 'none', border: 'none', cursor: 'pointer',
        padding: 0, marginBottom: 20,
      }}>
        ← Back to catalogue
      </button>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Left — product info */}
        <Card style={{ padding: 28 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            <Tag color={T.teal}>Knee · Primary TKR</Tag>
            <Tag color={T.green}>CE + FDA</Tag>
          </div>
          <div style={{ fontSize: 11, color: T.ink20, fontFamily: T.fM, marginBottom: 8 }}>AK-6916-1320</div>
          <h2 style={{
            fontSize: 28, fontWeight: 700, fontFamily: T.fH, color: T.ink,
            margin: '0 0 6px', letterSpacing: -0.5,
          }}>
            A3 Femoral Condylar
          </h2>
          <p style={{ fontSize: 14, color: T.ink40, margin: '0 0 24px' }}>
            CoCr alloy posterior-stabilized femoral component. 3D-printed trabecular titanium fixation surface.
          </p>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              ['Material', 'CoCr Alloy'],
              ['Fixation', '3D Trabecular Ti'],
              ['Sizes', '2, 2.5, 3, 4, 5, 6, 7'],
              ['Available', '6 units'],
            ].map(([k, val]) => (
              <div key={k} style={{ background: T.bg, borderRadius: T.r, padding: '12px 16px' }}>
                <div style={{
                  fontSize: 10, color: T.ink20, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 3,
                }}>
                  {k}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{val}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right — order config */}
        <Card style={{ padding: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.ink40, marginBottom: 8 }}>Size</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['2', '2.5', '3', '4', '5', '6', '7'].map((s) => (
              <button key={s} onClick={() => setSize(s)} style={{
                minWidth: 44, height: 44, borderRadius: T.r, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', fontFamily: T.fM,
                border: `2px solid ${size === s ? T.teal : T.ink05}`,
                background: size === s ? T.tealLight : T.card,
                color: size === s ? T.tealDark : T.ink40, transition: 'all .15s',
              }}>
                {s}
              </button>
            ))}
          </div>

          <div style={{ fontSize: 13, fontWeight: 600, color: T.ink40, marginBottom: 8 }}>Deliver to</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {SITES.map((s, i) => (
              <button key={i} onClick={() => setSite(i)} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 16px', borderRadius: T.r,
                border: `2px solid ${site === i ? T.teal : T.ink05}`,
                background: site === i ? `${T.teal}06` : T.card,
                cursor: 'pointer', textAlign: 'left', transition: 'all .15s',
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: T.ink20, marginTop: 1 }}>{s.area}</div>
                </div>
                <Tag color={s.tag === 'Home' ? T.teal : T.ink20}>{s.tag}</Tag>
              </button>
            ))}
          </div>

          {/* Price summary */}
          <div style={{ background: T.bg, borderRadius: T.rL, padding: 20, marginBottom: 16 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', fontSize: 14, color: T.ink40, marginBottom: 6,
            }}>
              <span>A3 Femoral · Size {size} × 1</span>
              <span style={{ textDecoration: 'line-through', color: T.ink20 }}>{formatNaira(price)}</span>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', fontSize: 13, color: T.teal, marginBottom: 10,
            }}>
              <span>Pro discount (5%)</span>
              <span>−{formatNaira(price - disc)}</span>
            </div>
            <div style={{ height: 1, background: T.ink05 }} />
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: 20, fontWeight: 700, fontFamily: T.fH, marginTop: 10, color: T.ink,
            }}>
              <span>Total</span>
              <span>{formatNaira(disc)}</span>
            </div>
          </div>

          <button style={{
            width: '100%', padding: 16, borderRadius: T.rL, background: T.ink, color: '#fff',
            fontSize: 16, fontWeight: 600, fontFamily: T.fH, border: 'none', cursor: 'pointer',
          }}>
            Pay {formatNaira(disc)}
          </button>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 10,
          }}>
            {ic.shield({ size: 14, color: T.ink20 })}
            <span style={{ fontSize: 12, color: T.ink20 }}>Secure payment via Paystack</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
