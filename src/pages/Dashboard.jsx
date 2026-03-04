import { T } from '../tokens'
import { ic } from '../components/icons'
import { Stat, Card, Tag } from '../components/ui'
import { formatNaira } from '../utils'

export default function Dashboard({ go }) {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'start',
        marginBottom: 28, flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <h2 style={{
            fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
            margin: '0 0 4px', letterSpacing: -0.5,
          }}>
            Dr. Adewale
          </h2>
          <p style={{ fontSize: 14, color: T.ink20, margin: 0 }}>Professional member · FWACS</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
            {ic.bldg({ size: 14, color: T.teal })}
            <span style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>Reddington Hospital, VI</span>
          </div>
          <div style={{ fontSize: 12, color: T.ink20, marginTop: 2 }}>+ EKO Hospital Ikeja · LUTH</div>
        </div>
      </div>

      <div className="grid-4" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28,
      }}>
        <Stat icon={ic.cart} label="Orders" value="2" sub="1 delivered · 1 processing" color={T.teal} />
        <Stat icon={ic.trend} label="This month" value="₦1.4M" sub="Implant spend" color={T.green} delay={0.05} />
        <Stat icon={ic.gift} label="Credits" value="₦25,000" sub="1 referral earned" color={T.rose} delay={0.1} />
        <Stat icon={ic.crown} label="Plan" value="Pro" sub="5% discount active" color={T.teal} delay={0.15} />
      </div>

      <div className="grid-3" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 28,
      }}>
        {[
          { icon: ic.pkg, label: 'Catalogue', sub: 'Browse implants', color: T.teal, to: 'catalogue' },
          { icon: ic.cart, label: 'Orders', sub: 'Track deliveries', color: T.green, to: 'orders' },
          { icon: ic.wrench, label: 'Instrument Kits', sub: 'Coming soon', color: T.blue, to: 'kits' },
          { icon: ic.gift, label: 'Refer & Earn', sub: '₦25k per referral', color: T.rose, to: 'referrals' },
          { icon: ic.crown, label: 'Membership', sub: 'Professional plan', color: T.violet, to: 'membership' },
          { icon: ic.bldg, label: 'My Sites', sub: '3 delivery locations', color: T.ink60, to: 'home' },
        ].map((q, i) => (
          <Card key={q.label} hover onClick={() => go(q.to)} style={{
            padding: 18, animation: `fadeUp .5s ${i * 0.04}s both`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: `${q.color}08`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {q.icon({ size: 18, color: q.color })}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.ink, fontFamily: T.fH }}>{q.label}</div>
                <div style={{ fontSize: 12, color: T.ink20, marginTop: 2 }}>{q.sub}</div>
              </div>
              {ic.chev({ size: 16, color: T.ink10 })}
            </div>
          </Card>
        ))}
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: T.fH, color: T.ink, margin: '0 0 12px' }}>
        Recent orders
      </h3>
      {[
        { num: 'ORD-0005', status: 'Delivered', sc: T.green, date: 'Feb 28', item: 'A3 Femoral Condylar · Size 4', site: 'Reddington VI', total: 741000 },
        { num: 'ORD-0006', status: 'Processing', sc: T.amber, date: 'Mar 2', item: 'CL-TH Cementless Stem · Size 5', site: 'EKO Hospital Ikeja', total: 698250 },
      ].map((o) => (
        <Card key={o.num} hover style={{ padding: '16px 20px', marginBottom: 8 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 13, fontWeight: 600, fontFamily: T.fM, color: T.ink60 }}>{o.num}</span>
              <div style={{ width: 1, height: 20, background: T.ink05 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{o.item}</div>
                <div style={{ fontSize: 12, color: T.ink20, marginTop: 2 }}>{o.site} · {o.date}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 16, fontWeight: 700, fontFamily: T.fH, color: T.ink }}>
                {formatNaira(o.total)}
              </span>
              <Tag color={o.sc}>{o.status}</Tag>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
