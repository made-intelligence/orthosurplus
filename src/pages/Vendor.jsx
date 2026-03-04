import { T } from '../tokens'
import { ic } from '../components/icons'
import { Card } from '../components/ui'

export default function Vendor({ go }) {
  return (
    <div className="section-pad" style={{ padding: '32px 48px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 28, flexWrap: 'wrap', gap: 12,
      }}>
        <div>
          <div style={{
            fontSize: 12, fontWeight: 600, color: T.teal,
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4,
          }}>
            For vendors
          </div>
          <h2 style={{
            fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
            margin: 0, letterSpacing: -0.5,
          }}>
            Reach orthopaedic surgeons across West Africa
          </h2>
        </div>
        <button onClick={() => go('landing')} style={{
          fontSize: 13, fontWeight: 600, color: T.ink40, background: 'none',
          border: 'none', cursor: 'pointer',
        }}>
          ← Back
        </button>
      </div>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Card style={{ padding: 28 }}>
          <h3 style={{
            fontSize: 17, fontWeight: 700, fontFamily: T.fH, color: T.ink, margin: '0 0 12px',
          }}>
            List your products
          </h3>
          <p style={{ fontSize: 14, color: T.ink40, lineHeight: 1.7, margin: '0 0 16px' }}>
            OrthoSurplus gives implant manufacturers and distributors a direct channel to orthopaedic
            surgeons in Nigeria, Ghana, and across the region. We handle demand generation, ordering,
            payment processing, and last-mile delivery.
          </p>
          <p style={{ fontSize: 14, color: T.ink40, lineHeight: 1.7, margin: 0 }}>
            You supply the product. We supply the market.
          </p>
        </Card>

        <Card style={{ padding: 28 }}>
          <h3 style={{
            fontSize: 17, fontWeight: 700, fontFamily: T.fH, color: T.ink, margin: '0 0 16px',
          }}>
            Why vendors work with us
          </h3>
          {[
            'Access to surgeons doing joint replacement across West Africa',
            'Transparent ordering — no middlemen or opaque distributor chains',
            'Payment processing handled (Paystack)',
            "We manage logistics and delivery to the surgeon's hospital",
            'Growing membership base of active orthopaedic surgeons',
          ].map((f) => (
            <div key={f} style={{
              display: 'flex', alignItems: 'start', gap: 10,
              fontSize: 14, color: T.ink60, padding: '7px 0', lineHeight: 1.5,
            }}>
              {ic.check({ size: 14, color: T.teal, sw: 2 })} {f}
            </div>
          ))}
          <button className="hBtn" style={{
            background: T.ink, color: '#fff', fontSize: 14, marginTop: 20, padding: '12px 28px',
          }}>
            Partner with OrthoSurplus
          </button>
        </Card>
      </div>
    </div>
  )
}
