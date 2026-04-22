'use client'

import { useState } from 'react'
import { T } from '@/lib/tokens'
import { ic } from '@/components/icons'
import { Card, ComingSoon } from '@/components/ui'

export default function Kits() {
  const [done, setDone] = useState(false)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <h1 style={{
          fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
          margin: 0, letterSpacing: -0.5,
        }}>
          Instrument Kits
        </h1>
        <ComingSoon />
      </div>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Card style={{ padding: 28 }}>
          <h2 style={{
            fontSize: 17, fontWeight: 700, fontFamily: T.fH, color: T.ink, margin: '0 0 12px',
          }}>
            We deliver the kit. You operate.
          </h2>
          <p style={{ fontSize: 14, color: T.ink40, lineHeight: 1.7, margin: '0 0 16px' }}>
            Managed instrument kit logistics across West Africa. Book a kit for your surgery date —
            we deliver it sterilised and collect it afterward.
          </p>
          <p style={{ fontSize: 14, color: T.ink40, lineHeight: 1.7, margin: 0 }}>
            Professional and Elite members get priority access.
          </p>
        </Card>

        <Card style={{
          padding: 28, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        }}>
          {ic.wrench({ size: 40, color: T.ink10 })}
          <h2 style={{
            fontSize: 18, fontWeight: 700, fontFamily: T.fH, color: T.ink, margin: '16px 0 8px',
          }}>
            Get notified
          </h2>
          <p style={{
            fontSize: 14, color: T.ink40, marginBottom: 20, maxWidth: 280, lineHeight: 1.5,
          }}>
            We&rsquo;ll let you know when kits are available at your sites.
          </p>
          {!done ? (
            <button onClick={() => setDone(true)} className="hBtn" style={{
              background: T.ink, color: '#fff', fontSize: 14, padding: '12px 28px',
            }}>
              {ic.bell({ size: 15, color: '#fff' })} Notify me
            </button>
          ) : (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              color: T.green, fontSize: 14, fontWeight: 600,
            }}>
              {ic.check({ size: 18, color: T.green })} You&rsquo;re on the list.
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
