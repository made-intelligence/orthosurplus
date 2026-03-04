import { useState } from 'react'
import { T } from '../tokens'
import { ic } from '../components/icons'
import { Card, Tag } from '../components/ui'
import { formatNaira } from '../utils'

const ALL_PRODUCTS = [
  { name: 'A3 Femoral Condylar', sku: 'AK-6916-1320', cat: 'Knee', sub: 'Primary TKR (PS)', price: 780000, stock: 6, mat: 'CoCr' },
  { name: 'A3 GT Tibial Tray', sku: 'AK-1229-2003', cat: 'Knee', sub: 'Primary TKR', price: 640000, stock: 8, mat: 'Ti6Al4V' },
  { name: 'A3 PS Tibial Insert', sku: 'AK-328-1508', cat: 'Knee', sub: 'PS Insert', price: 275000, stock: 12, mat: 'UHMWPE' },
  { name: 'CCK Femoral Component', sku: 'AK-8661-CCK', cat: 'Knee', sub: 'Revision CCK', price: 920000, stock: 2, mat: 'CoCr' },
  { name: 'CL-TH Cementless Stem', sku: 'AK-6-1100', cat: 'Hip', sub: 'Cementless THR', price: 735000, stock: 5, mat: 'Ti6Al4V' },
  { name: 'CLS Cemented Stem', sku: 'AK-2209-1001', cat: 'Hip', sub: 'Cemented THR', price: 410000, stock: 4, mat: 'CoCr' },
  { name: 'CP II Acetabular Cup', sku: 'AK-703-2050', cat: 'Hip', sub: 'Cementless Cup', price: 505000, stock: 7, mat: 'Ti Trabecular' },
  { name: 'Biolox Delta Femoral Head', sku: 'AK-2202-0A', cat: 'Hip', sub: 'Ceramic Head', price: 505000, stock: 6, mat: 'Ceramic' },
  { name: 'Dual Mobility Cup', sku: 'AK-DM-501', cat: 'Hip', sub: 'Dual Mobility', price: 680000, stock: 3, mat: 'CoCr+PE' },
]

export default function Catalogue({ go }) {
  const [cat, setCat] = useState('All')
  const prods = ALL_PRODUCTS.filter((p) => cat === 'All' || p.cat === cat)
  const disc = 0.95

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 20, flexWrap: 'wrap', gap: 12,
      }}>
        <div>
          <h2 style={{
            fontSize: 26, fontWeight: 700, fontFamily: T.fH, color: T.ink,
            margin: '0 0 4px', letterSpacing: -0.5,
          }}>
            Catalogue
          </h2>
          <p style={{ fontSize: 14, color: T.ink20, margin: 0 }}>
            {prods.length} products · CE + FDA certified ·{' '}
            <span style={{ color: T.teal, fontWeight: 600 }}>5% Pro discount applied</span>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['All', 'Knee', 'Hip'].map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: '7px 18px', borderRadius: 8, fontSize: 13, fontWeight: 600,
              cursor: 'pointer', border: `1.5px solid ${cat === c ? T.teal : T.ink05}`,
              background: cat === c ? `${T.teal}08` : T.card,
              color: cat === c ? T.tealDark : T.ink40, transition: 'all .15s',
            }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {prods.map((p, i) => (
          <Card key={p.sku} hover onClick={() => go('product')} style={{
            padding: 22, display: 'flex', flexDirection: 'column',
            animation: `fadeUp .4s ${i * 0.03}s both`,
          }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
              <Tag color={T.teal}>{p.sub}</Tag>
            </div>
            <div style={{
              fontSize: 16, fontWeight: 700, fontFamily: T.fH, color: T.ink,
              marginBottom: 4, letterSpacing: -0.3,
            }}>
              {p.name}
            </div>
            <div style={{ fontSize: 11, color: T.ink20, fontFamily: T.fM, marginBottom: 4 }}>
              {p.sku} · {p.mat}
            </div>
            <div style={{
              marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${T.ink05}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'end',
            }}>
              <div>
                <div style={{ fontSize: 11, color: T.ink20, textDecoration: 'line-through' }}>
                  {formatNaira(p.price)}
                </div>
                <div style={{
                  fontSize: 22, fontWeight: 700, fontFamily: T.fH, color: T.teal, letterSpacing: -0.5,
                }}>
                  {formatNaira(Math.round(p.price * disc))}
                </div>
              </div>
              <span style={{
                fontSize: 12, fontWeight: 600,
                color: p.stock > 5 ? T.green : p.stock > 2 ? T.amber : T.rose,
              }}>
                {p.stock} in stock
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
