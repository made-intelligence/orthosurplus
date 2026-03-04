import { useState } from 'react'
import { T } from '../tokens'
import { ic } from '../components/icons'
import { Stat, Card, Tag } from '../components/ui'

export default function Referrals() {
  const [copied, setCopied] = useState(false)

  return (
    <div>
      <h2 style={{
        fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
        margin: '0 0 4px', letterSpacing: -0.5,
      }}>
        Refer & Earn
      </h2>
      <p style={{ fontSize: 14, color: T.ink20, margin: '0 0 24px' }}>
        ₦25,000 credit per qualified referral
      </p>

      <div className="grid-3" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 24,
      }}>
        <Stat icon={ic.users} label="Referred" value="1" color={T.teal} />
        <Stat icon={ic.gift} label="Qualified" value="1" color={T.green} delay={0.05} />
        <Stat icon={ic.trend} label="Credits" value="₦25,000" color={T.amber} delay={0.1} />
      </div>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <Card style={{ padding: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.ink40, marginBottom: 10 }}>
            Your referral code
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
            <div style={{
              flex: 1, background: T.bg, border: `1px solid ${T.ink05}`, borderRadius: T.r,
              padding: '14px 18px', fontSize: 20, fontWeight: 700, fontFamily: T.fM,
              color: T.ink, letterSpacing: 1,
            }}>
              OS-A4D2F1
            </div>
            <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000) }} style={{
              width: 48, height: 48, borderRadius: T.r, background: T.ink, border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {copied ? ic.check({ size: 18, color: '#fff' }) : ic.copy({ size: 18, color: '#fff' })}
            </button>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              flex: 1, padding: 12, borderRadius: T.r, border: `1px solid ${T.ink05}`,
              background: T.card, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              {ic.copy({ size: 14 })} {copied ? 'Copied!' : 'Copy link'}
            </button>
            <button style={{
              flex: 1, padding: 12, borderRadius: T.r, border: 'none',
              background: '#25D366', color: '#fff', fontSize: 13, fontWeight: 600,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              {ic.share({ size: 14, color: '#fff' })} WhatsApp
            </button>
          </div>
        </Card>

        <div>
          <div style={{
            fontSize: 15, fontWeight: 700, fontFamily: T.fH, color: T.ink, marginBottom: 10,
          }}>
            History
          </div>
          <Card style={{ padding: '12px 16px', marginBottom: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>Dr. Eze (Enugu)</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.green }}>+₦25,000</span>
                <Tag color={T.green}>Qualified</Tag>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
