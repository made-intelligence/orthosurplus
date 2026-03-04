import { T } from '../tokens'
import { ic } from './icons'

export const Tag = ({ color, bg, children }) => (
  <span style={{
    display: 'inline-block', fontSize: 11, fontWeight: 600, fontFamily: T.fB,
    padding: '3px 10px', borderRadius: 6,
    background: bg || `${color}10`, color, letterSpacing: 0.2,
    whiteSpace: 'nowrap', lineHeight: 1.4,
  }}>
    {children}
  </span>
)

export const Stat = ({ label, value, sub, icon, color = T.teal, delay = 0 }) => (
  <div style={{
    background: T.card, border: `1px solid ${T.ink05}`, borderRadius: T.rL,
    padding: '20px 22px', animation: `fadeUp .5s ${delay}s both`,
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: -8, right: -8, width: 64, height: 64,
      borderRadius: 99, background: `${color}06`,
    }} />
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, position: 'relative',
    }}>
      {icon && icon({ size: 16, color })}
      <span style={{
        fontSize: 11, color: T.ink40, fontWeight: 600,
        letterSpacing: 0.5, textTransform: 'uppercase',
      }}>
        {label}
      </span>
    </div>
    <div className="stat-value" style={{
      fontSize: 28, fontWeight: 700, fontFamily: T.fH,
      color: T.ink, letterSpacing: -0.5, position: 'relative',
    }}>
      {value}
    </div>
    {sub && <div style={{ fontSize: 12, color: T.ink20, marginTop: 4 }}>{sub}</div>}
  </div>
)

export const Card = ({ children, onClick, style = {}, hover = false }) => (
  <div
    onClick={onClick}
    style={{
      background: T.card, border: `1px solid ${T.ink05}`, borderRadius: T.rL,
      boxShadow: T.sh, cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow .2s, border-color .2s', ...style,
    }}
    onMouseEnter={(e) => {
      if (hover) {
        e.currentTarget.style.boxShadow = T.shM
        e.currentTarget.style.borderColor = T.ink10
      }
    }}
    onMouseLeave={(e) => {
      if (hover) {
        e.currentTarget.style.boxShadow = T.sh
        e.currentTarget.style.borderColor = T.ink05
      }
    }}
  >
    {children}
  </div>
)

export const ComingSoon = ({ label }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: T.amberLight, padding: '4px 12px', borderRadius: 6,
  }}>
    {ic.clock({ size: 13, color: T.amber })}
    <span style={{ fontSize: 11, fontWeight: 700, color: T.amber }}>
      {label || 'Coming soon'}
    </span>
  </div>
)
