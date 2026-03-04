import { useState } from 'react'
import { T } from '../tokens'
import { ic } from '../components/icons'
import { Card, Tag } from '../components/ui'
import { formatNaira } from '../utils'

const TIERS = [
  {
    name: 'Essentials', monthly: 75000, annual: 750000, color: T.ink60,
    desc: 'Reliable supply for your practice.',
    features: ['Full catalogue access', 'Order to any delivery site', 'Email & WhatsApp support', 'Referral program'],
  },
  {
    name: 'Professional', monthly: 150000, annual: 1500000, color: T.teal, current: true,
    desc: 'For surgeons doing regular joint work.',
    features: ['Everything in Essentials', '5% catalogue discount', 'Multi-site delivery management', 'Priority support', 'Instrument kit access at launch'],
  },
  {
    name: 'Elite', monthly: 350000, annual: 3500000, color: T.amber,
    desc: 'For high-volume practices.',
    features: ['Everything in Professional', '10% catalogue discount', 'Dedicated account manager', 'Custom implant requests'],
  },
]

export default function Membership() {
  const [period, setPeriod] = useState('monthly')

  return (
    <div>
      <h2 style={{
        fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
        margin: '0 0 4px', letterSpacing: -0.5,
      }}>
        Membership
      </h2>
      <p style={{ fontSize: 14, color: T.ink20, margin: '0 0 16px' }}>
        Every plan includes the full catalogue. Higher tiers save more per implant.
      </p>

      <Card style={{ padding: '12px 20px', marginBottom: 20 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {ic.crown({ size: 16, color: T.teal })}
            <span style={{ fontSize: 15, fontWeight: 700, color: T.ink, fontFamily: T.fH }}>
              Current: Professional
            </span>
            <Tag color={T.teal}>Active</Tag>
          </div>
          <span style={{ fontSize: 13, color: T.ink20 }}>₦150,000/mo · Renews Apr 1</span>
        </div>
      </Card>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{
          display: 'flex', background: T.bg, borderRadius: T.r, padding: 4,
          border: `1px solid ${T.ink05}`,
        }}>
          {['monthly', 'annual'].map((p) => (
            <button key={p} onClick={() => setPeriod(p)} style={{
              padding: '8px 22px', borderRadius: 7, fontSize: 13, fontWeight: 600,
              border: 'none', cursor: 'pointer',
              background: period === p ? T.card : 'transparent',
              color: period === p ? T.ink : T.ink40,
              boxShadow: period === p ? T.sh : 'none',
            }}>
              {p === 'monthly' ? 'Monthly' : 'Annual (save 17%)'}
            </button>
          ))}
        </div>
      </div>

      <div className="membership-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
      }}>
        {TIERS.map((p, i) => (
          <Card key={p.name} style={{
            padding: 28, borderColor: p.current ? `${p.color}40` : T.ink05,
            animation: `fadeUp .5s ${i * 0.05}s both`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: p.color, letterSpacing: 0.8 }}>
                {p.name}
              </div>
              {p.current && <Tag color={p.color}>Current</Tag>}
            </div>
            <div style={{
              fontSize: 36, fontWeight: 700, fontFamily: T.fH, color: T.ink,
              margin: '8px 0 4px', letterSpacing: -1,
            }}>
              {formatNaira(period === 'annual' ? p.annual : p.monthly)}
              <span style={{ fontSize: 14, fontWeight: 500, color: T.ink20 }}>
                /{period === 'annual' ? 'yr' : 'mo'}
              </span>
            </div>
            <div style={{ fontSize: 13, color: T.ink40, marginBottom: 20, lineHeight: 1.5 }}>
              {p.desc}
            </div>
            {p.features.map((f) => (
              <div key={f} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, color: T.ink60, padding: '5px 0',
              }}>
                {ic.check({ size: 14, color: p.color, sw: 2 })} {f}
              </div>
            ))}
            {!p.current && (
              <button className="hBtn" style={{
                width: '100%', justifyContent: 'center', marginTop: 20,
                background: p.color === T.amber ? p.color : 'transparent',
                color: p.color === T.amber ? '#fff' : T.ink60,
                border: p.color === T.amber ? 'none' : `1px solid ${T.ink10}`,
                fontSize: 14, padding: '12px 28px',
              }}>
                {p.name === 'Elite' ? 'Contact sales' : 'Downgrade'}
              </button>
            )}
            {p.current && (
              <div style={{ textAlign: 'center', padding: '14px 0 0', fontSize: 13, color: T.ink20 }}>
                Your current plan
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
