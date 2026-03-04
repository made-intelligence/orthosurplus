import { T } from '../tokens'
import { ic } from '../components/icons'
import { Card, Tag } from '../components/ui'
import { formatNaira } from '../utils'

const ORDERS = [
  {
    num: 'ORD-0006', status: 'Processing', sc: T.amber, date: 'Mar 2, 2026',
    site: 'EKO Hospital, Ikeja', total: 698250,
    items: [{ name: 'CL-TH Cementless Stem', sku: 'AK-6-1100', size: '5', qty: 1, price: 698250 }],
  },
  {
    num: 'ORD-0005', status: 'Delivered', sc: T.green, date: 'Feb 28, 2026',
    site: 'Reddington Hospital, VI', total: 741000,
    items: [{ name: 'A3 Femoral Condylar', sku: 'AK-6916-1320', size: '4', qty: 1, price: 741000 }],
  },
]

export default function Orders() {
  return (
    <div>
      <h2 style={{
        fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
        margin: '0 0 20px', letterSpacing: -0.5,
      }}>
        Orders
      </h2>
      {ORDERS.map((o, i) => (
        <Card key={o.num} style={{
          padding: '20px 24px', marginBottom: 10,
          animation: `fadeUp .4s ${i * 0.06}s both`,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 14, flexWrap: 'wrap', gap: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 600, fontFamily: T.fM, color: T.ink60 }}>{o.num}</span>
              <span style={{ fontSize: 13, color: T.ink20 }}>{o.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 18, fontWeight: 700, fontFamily: T.fH, color: T.ink }}>
                {formatNaira(o.total)}
              </span>
              <Tag color={o.sc}>{o.status}</Tag>
            </div>
          </div>
          {o.items.map((item) => (
            <div key={item.sku} style={{
              padding: '8px 0', borderTop: `1px solid ${T.ink05}`,
              display: 'flex', justifyContent: 'space-between', fontSize: 13,
              flexWrap: 'wrap', gap: 4,
            }}>
              <span style={{ color: T.ink60 }}>
                {item.name}{' '}
                <span style={{ color: T.ink20, fontFamily: T.fM, fontSize: 11 }}>{item.sku}</span>
                {' '}· Size {item.size}
              </span>
              <span style={{ color: T.ink40, fontWeight: 600 }}>{formatNaira(item.price)}</span>
            </div>
          ))}
          <div style={{
            paddingTop: 8, borderTop: `1px solid ${T.ink05}`,
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: T.ink20,
          }}>
            {ic.pin({ size: 12, color: T.ink10 })} {o.site}
          </div>
        </Card>
      ))}
    </div>
  )
}
