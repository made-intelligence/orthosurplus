'use client'

import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { T } from '@/lib/tokens'
import { ic } from '@/components/icons'
import { Card, Tag } from '@/components/ui'
import { formatNaira } from '@/lib/utils'

const PAYSTACK_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY

const SITES = [
  { name: 'Reddington Hospital', area: 'Victoria Island, Lagos', tag: 'Home' },
  { name: 'EKO Hospital', area: 'Ikeja, Lagos', tag: 'Secondary' },
  { name: 'LUTH', area: 'Surulere, Lagos', tag: 'Secondary' },
]

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Product() {
  const [size, setSize] = useState('4')
  const [site, setSite] = useState(0)
  const [email, setEmail] = useState('')
  const [paying, setPaying] = useState(false)
  const [paid, setPaid] = useState(null)
  const [error, setError] = useState('')

  const price = 780000
  const disc = Math.round(price * 0.95)

  const onPay = () => {
    setError('')
    setPaid(null)

    if (!isEmail(email)) {
      setError('Enter a valid email so we can send your receipt.')
      return
    }
    if (!PAYSTACK_KEY) {
      setError("Payments aren't configured yet — please contact support.")
      return
    }
    if (typeof window === 'undefined' || !window.PaystackPop) {
      setError('Payment library is still loading — try again in a moment.')
      return
    }

    setPaying(true)

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: disc * 100,
      currency: 'NGN',
      ref: `OS-${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`,
      metadata: {
        custom_fields: [
          { display_name: 'Product', variable_name: 'product', value: 'A3 Femoral Condylar' },
          { display_name: 'SKU', variable_name: 'sku', value: 'AK-6916-1320' },
          { display_name: 'Size', variable_name: 'size', value: size },
          { display_name: 'Delivery site', variable_name: 'site', value: SITES[site].name },
        ],
      },
      callback: (response) => {
        setPaying(false)
        setPaid({ ref: response.reference })
      },
      onClose: () => {
        setPaying(false)
      },
    })

    handler.openIframe()
  }

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />
      <div>
        <Link href="/catalogue" style={{
          display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600,
          color: T.ink40, textDecoration: 'none', marginBottom: 20,
        }}>
          ← Back to catalogue
        </Link>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Left — product info */}
          <Card style={{ padding: 28 }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
              <Tag color={T.teal}>Knee · Primary TKR</Tag>
              <Tag color={T.green}>CE + FDA</Tag>
            </div>
            <div style={{ fontSize: 11, color: T.ink20, fontFamily: T.fM, marginBottom: 8 }}>AK-6916-1320</div>
            <h1 style={{
              fontSize: 28, fontWeight: 700, fontFamily: T.fH, color: T.ink,
              margin: '0 0 6px', letterSpacing: -0.5,
            }}>
              A3 Femoral Condylar
            </h1>
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
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }} role="radiogroup" aria-label="Size">
              {['2', '2.5', '3', '4', '5', '6', '7'].map((s) => (
                <button key={s} onClick={() => setSize(s)} role="radio" aria-checked={size === s} style={{
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }} role="radiogroup" aria-label="Delivery site">
              {SITES.map((s, i) => (
                <button key={i} onClick={() => setSite(i)} role="radio" aria-checked={site === i} style={{
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

            {/* Email for receipt */}
            <label style={{ display: 'block', marginBottom: 16 }}>
              <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.ink40, marginBottom: 8 }}>
                Email for receipt
              </span>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="surgeon@example.com"
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: T.r,
                  border: `1.5px solid ${T.ink05}`, background: T.card,
                  fontSize: 14, color: T.ink, fontFamily: T.fB,
                  outline: 'none',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = T.teal }}
                onBlur={(e) => { e.currentTarget.style.borderColor = T.ink05 }}
              />
            </label>

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

            {error && (
              <div style={{
                background: `${T.rose}08`, border: `1px solid ${T.rose}20`,
                borderRadius: T.r, padding: '10px 14px', marginBottom: 12,
                fontSize: 13, color: T.rose, fontWeight: 500,
              }}>
                {error}
              </div>
            )}

            {paid ? (
              <div style={{
                background: `${T.green}08`, border: `1px solid ${T.green}30`,
                borderRadius: T.rL, padding: 16, textAlign: 'center',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  color: T.green, fontSize: 15, fontWeight: 700, fontFamily: T.fH,
                }}>
                  {ic.check({ size: 18, color: T.green })} Payment received
                </div>
                <div style={{ fontSize: 12, color: T.ink40, marginTop: 6, fontFamily: T.fM }}>
                  Ref {paid.ref}
                </div>
                <div style={{ fontSize: 12, color: T.ink20, marginTop: 4 }}>
                  We&rsquo;ll email your receipt and delivery timeline shortly.
                </div>
              </div>
            ) : (
              <button
                onClick={onPay}
                disabled={paying}
                style={{
                  width: '100%', padding: 16, borderRadius: T.rL,
                  background: paying ? T.ink60 : T.ink, color: '#fff',
                  fontSize: 16, fontWeight: 600, fontFamily: T.fH,
                  border: 'none', cursor: paying ? 'wait' : 'pointer',
                  opacity: paying ? 0.85 : 1, transition: 'all .15s',
                }}
              >
                {paying ? 'Opening Paystack…' : `Pay ${formatNaira(disc)}`}
              </button>
            )}

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 10,
            }}>
              {ic.shield({ size: 14, color: T.ink20 })}
              <span style={{ fontSize: 12, color: T.ink20 }}>Secure payment via Paystack</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
