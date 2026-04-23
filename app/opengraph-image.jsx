import { ImageResponse } from 'next/og'

export const alt = 'OrthoSurplus — orthopaedic implant procurement for West Africa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0C1222',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: '#0D9488',
              borderRadius: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: -1.5,
            }}
          >
            OS
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            OrthoSurplus
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 980,
            }}
          >
            Lower implant costs. More patients on the table.
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#94A3B8',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Certified orthopaedic implants sourced direct, with transparent pricing, delivered to your theatre.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#64748B',
            fontSize: 20,
          }}
        >
          <span>Lagos · Abuja · Accra</span>
          <span style={{ color: '#0D9488', fontWeight: 600 }}>orthosurplus.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
