'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { T } from '@/lib/tokens'
import { ic } from '@/components/icons'

const implantImg = '/implant-hero.jpeg'

export default function Landing() {
  const router = useRouter()
  const [v, setV] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setV(true), 100)
    return () => clearTimeout(t)
  }, [])

  const go = (path) => {
    setMobileMenu(false)
    router.push(path)
  }

  return (
    <div style={{ background: '#fff', minHeight: '100%' }}>
      {/* NAV */}
      <nav className="nav-pad" style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(226,232,240,.6)',
        padding: '0 48px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        animation: 'fadeIn .6s both',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: T.teal,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: '#fff', fontFamily: T.fH, letterSpacing: -0.5 }}>OS</span>
          </div>
          <span style={{ fontSize: 17, fontWeight: 700, color: T.ink, fontFamily: T.fH, letterSpacing: -0.5 }}>
            OrthoSurplus
          </span>
        </Link>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link className="navL" href="/catalogue">Catalogue</Link>
          <Link className="navL" href="/membership">Membership</Link>
          <Link className="navL" href="/vendor">For vendors</Link>
        </div>

        <div className="nav-auth" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/dashboard" className="navL" style={{ color: T.ink60, fontWeight: 600 }}>Log in</Link>
          <Link href="/dashboard" style={{
            background: T.ink, color: '#fff', fontSize: 14, fontWeight: 600,
            padding: '9px 22px', borderRadius: 8, border: 'none', textDecoration: 'none',
          }}>
            Join →
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="nav-mobile"
          aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
          style={{ display: 'none', background: 'none', border: 'none', padding: 4 }}
        >
          {mobileMenu ? ic.x({ size: 24, color: T.ink }) : ic.menu({ size: 24, color: T.ink })}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenu && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 40,
          background: '#fff', padding: 24, animation: 'fadeIn .2s both',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {[
            { label: 'Catalogue', to: '/catalogue' },
            { label: 'Membership', to: '/membership' },
            { label: 'For vendors', to: '/vendor' },
          ].map((l) => (
            <button key={l.to} onClick={() => go(l.to)} style={{
              padding: '16px 0', fontSize: 18, fontWeight: 600, color: T.ink,
              background: 'none', border: 'none', borderBottom: `1px solid ${T.ink05}`,
              textAlign: 'left',
            }}>
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <button onClick={() => go('/dashboard')} className="hBtn" style={{
              flex: 1, justifyContent: 'center', background: 'transparent',
              color: T.ink60, border: `1px solid ${T.ink10}`,
            }}>
              Log in
            </button>
            <button onClick={() => go('/dashboard')} className="hBtn" style={{
              flex: 1, justifyContent: 'center', background: T.ink, color: '#fff',
            }}>
              Join →
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="section-pad hero-grid" style={{
        padding: '96px 48px 80px', maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center',
      }}>
        <div className="hero-text" style={{ animation: v ? 'fadeUp .7s both' : 'none' }}>
          <h1 style={{
            fontSize: 50, fontWeight: 700, lineHeight: 1.08, color: T.ink,
            margin: '0 0 20px', fontFamily: T.fH, letterSpacing: -2,
          }}>
            Lower implant costs.<br />More patients on<br />the table.
          </h1>
          <p style={{
            fontSize: 18, color: T.ink40, lineHeight: 1.7,
            margin: '0 0 36px', maxWidth: 480,
          }}>
            Too many patients in West Africa walk away from joint replacement because they can't afford it.
            OrthoSurplus gives surgeons access to quality, certified implants at better prices — so you can
            treat more patients and grow your practice.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/catalogue" className="hBtn" style={{ background: T.ink, color: '#fff', textDecoration: 'none' }}>
              Browse catalogue {ic.arr({ size: 16, color: '#fff', sw: 2 })}
            </Link>
            <Link href="/membership" className="hBtn" style={{
              background: 'transparent', color: T.ink60, border: `1px solid ${T.ink10}`, textDecoration: 'none',
            }}>
              Membership plans
            </Link>
          </div>
        </div>

        <div className="hero-visual" style={{ animation: v ? 'scaleIn .8s .2s both' : 'none' }}>
          <div style={{
            background: `radial-gradient(circle at 50% 35%, #ffffff 0%, ${T.bg} 75%)`,
            borderRadius: 24, padding: '40px 32px 28px',
            border: `1px solid ${T.ink05}`, boxShadow: T.shL, textAlign: 'center',
          }}>
            <Image
              src={implantImg}
              alt="CE/FDA certified knee implant"
              width={200}
              height={200}
              priority
              style={{
                width: 200, height: 'auto', margin: '0 auto 20px', display: 'block',
                filter: 'drop-shadow(0 8px 20px rgba(12,18,34,.10))',
              }}
            />
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: T.fH, color: T.ink, marginBottom: 4 }}>
              CE + FDA certified
            </div>
            <div style={{ fontSize: 13, color: T.ink40, lineHeight: 1.5 }}>
              Knee and hip systems sourced direct<br />from verified manufacturers.
            </div>
            <div style={{
              marginTop: 16, paddingTop: 14, borderTop: `1px solid ${T.ink05}`,
              display: 'flex', justifyContent: 'center', gap: 28,
            }}>
              {[['20+', 'SKUs'], ['Knee & Hip', 'Systems'], ['In stock', 'Lagos']].map(([val, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: T.fH, color: T.teal }}>{val}</div>
                  <div style={{ fontSize: 10, color: T.ink20, marginTop: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-pad" style={{ background: T.ink, padding: '64px 48px' }}>
        <div className="stats-grid" style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, textAlign: 'center',
        }}>
          {[
            { val: '₦5–15M', label: 'Total joint replacement cost in Nigeria', sub: 'Most patients pay out of pocket' },
            { val: '40–60%', label: 'of that cost is the implant alone', sub: 'The single biggest line item' },
            { val: 'Thousands', label: 'of patients turned away each year', sub: "Because they simply can't afford it" },
          ].map((s, i) => (
            <div key={i} style={{ padding: 28, animation: v ? `fadeUp .5s ${i * 0.1}s both` : 'none' }}>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: T.fH, color: T.teal, letterSpacing: -1 }}>
                {s.val}
              </div>
              <div style={{ fontSize: 15, color: '#fff', fontWeight: 600, marginTop: 8, lineHeight: 1.4 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 13, color: T.ink20, marginTop: 6 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section-pad" style={{ padding: '80px 48px', borderTop: `1px solid ${T.ink05}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            fontSize: 12, fontWeight: 600, color: T.teal,
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8,
          }}>
            How OrthoSurplus works
          </div>
          <h2 style={{
            fontSize: 36, fontWeight: 700, fontFamily: T.fH, color: T.ink,
            margin: '0 0 12px', letterSpacing: -1,
          }}>
            We handle the supply chain.<br />You focus on your patients.
          </h2>
          <p style={{
            fontSize: 16, color: T.ink40, maxWidth: 560, margin: '0 0 48px', lineHeight: 1.6,
          }}>
            No more chasing distributors, negotiating prices, or waiting weeks for imports.
            Browse, order, and we deliver certified implants to your theatre.
          </p>

          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              {
                icon: ic.dollar, n: '01', title: 'Better pricing',
                desc: 'We source direct from manufacturers and pass the savings to you. Lower implant costs mean you can offer more competitive procedure pricing to patients.',
                color: T.teal,
              },
              {
                icon: ic.pkg, n: '02', title: 'Browse & order online',
                desc: "See every SKU, size, and price upfront. No phone calls, no back-and-forth. Select what you need and checkout in minutes.",
                color: T.green,
              },
              {
                icon: ic.truck, n: '03', title: 'Delivered to your theatre',
                desc: "Choose your hospital — home or secondary site. We handle customs, storage, and last-mile delivery. Implants arrive when you need them.",
                color: T.blue,
              },
              {
                icon: ic.wrench, n: '04', title: 'Instrument kits (coming)',
                desc: "We're building a fleet of managed instrument kits across West Africa. Book a kit, we deliver it sterilised, and collect after surgery.",
                color: T.violet,
              },
            ].map((s, i) => (
              <div key={i} className="sCard" style={{
                background: T.card, borderRadius: T.rL, padding: 28,
                border: `1px solid ${T.ink05}`, cursor: 'default',
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: `${s.color}08`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {s.icon({ size: 20, color: s.color })}
                  </div>
                  <span style={{
                    fontSize: 32, fontWeight: 700, fontFamily: T.fH, color: T.ink05, letterSpacing: -1,
                  }}>
                    {s.n}
                  </span>
                </div>
                <div style={{
                  fontSize: 17, fontWeight: 700, fontFamily: T.fH, color: T.ink,
                  marginBottom: 8, letterSpacing: -0.3,
                }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 14, color: T.ink40, lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="section-pad" style={{
        background: T.bg, padding: '80px 48px', borderTop: `1px solid ${T.ink05}`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{
              fontSize: 12, fontWeight: 600, color: T.violet,
              textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8,
            }}>
              Membership
            </div>
            <h2 style={{
              fontSize: 36, fontWeight: 700, fontFamily: T.fH, color: T.ink,
              margin: '0 0 8px', letterSpacing: -1,
            }}>
              The more you operate, the more you save
            </h2>
            <p style={{ fontSize: 16, color: T.ink40, maxWidth: 480, margin: '0 auto' }}>
              Every plan includes the full catalogue and direct ordering. Higher tiers unlock deeper discounts and priority services.
            </p>
          </div>

          <div className="membership-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20,
          }}>
            {[
              {
                name: 'Essentials', price: '₦75k', per: '/mo', color: T.ink60,
                desc: 'For surgeons getting started.',
                features: ['Full catalogue access', 'Order to any hospital', 'Transparent pricing', 'Email & WhatsApp support'],
                cta: 'Get started',
              },
              {
                name: 'Professional', price: '₦150k', per: '/mo', color: T.teal, pop: true,
                desc: 'For surgeons doing regular joint work.',
                features: ['Everything in Essentials', '5% catalogue discount', 'Priority kit access at launch', 'Priority support', 'Multi-site delivery management'],
                cta: 'Start 14-day trial',
              },
              {
                name: 'Elite', price: '₦350k', per: '/mo', color: T.amber,
                desc: 'For high-volume practices.',
                features: ['Everything in Professional', '10% catalogue discount', 'Dedicated account manager', 'Custom implant requests'],
                cta: 'Contact sales',
              },
            ].map((p) => (
              <div key={p.name} style={{
                background: T.card, borderRadius: 16, padding: 32,
                border: p.pop ? `2px solid ${p.color}` : `1px solid ${T.ink05}`,
                position: 'relative',
              }}>
                {p.pop && (
                  <div style={{
                    position: 'absolute', top: -13, left: 24,
                    fontSize: 11, fontWeight: 700, color: '#fff',
                    background: p.color, padding: '4px 14px', borderRadius: 6,
                  }}>
                    Most popular
                  </div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: p.color, letterSpacing: 0.5, marginBottom: 12 }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 40, fontWeight: 700, fontFamily: T.fH, color: T.ink, letterSpacing: -1.5 }}>
                  {p.price}
                  <span style={{ fontSize: 16, fontWeight: 500, color: T.ink20 }}>{p.per}</span>
                </div>
                <div style={{ fontSize: 14, color: T.ink40, margin: '8px 0 24px', lineHeight: 1.5 }}>
                  {p.desc}
                </div>
                {p.features.map((f) => (
                  <div key={f} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: 14, color: T.ink60, padding: '6px 0',
                  }}>
                    {ic.check({ size: 15, color: p.color, sw: 2 })} {f}
                  </div>
                ))}
                <Link href="/dashboard" className="hBtn" style={{
                  width: '100%', justifyContent: 'center', marginTop: 24,
                  background: p.pop ? p.color : 'transparent',
                  color: p.pop ? '#fff' : T.ink60,
                  border: p.pop ? 'none' : `1px solid ${T.ink10}`,
                  fontSize: 14, padding: '14px 32px', textDecoration: 'none',
                }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURGEON QUOTE */}
      <section className="section-pad" style={{ padding: '64px 48px', borderTop: `1px solid ${T.ink05}` }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: 22, fontWeight: 500, fontFamily: T.fH, color: T.ink,
            lineHeight: 1.6, fontStyle: 'italic', letterSpacing: -0.3,
          }}>
            &ldquo;I had a patient who needed bilateral TKR. The implant cost alone was going to be over ₦6 million.
            She couldn&rsquo;t afford it. She&rsquo;s still walking with a cane.&rdquo;
          </div>
          <div style={{ marginTop: 20, fontSize: 14, color: T.ink40 }}>
            — Consultant Orthopaedic Surgeon, Lagos
          </div>
          <div style={{ fontSize: 15, color: T.ink60, marginTop: 16, fontWeight: 600 }}>
            This is the problem OrthoSurplus exists to solve.
          </div>
        </div>
      </section>

      {/* REFERRAL */}
      <section className="section-pad" style={{
        background: T.bg, padding: '48px 48px', borderTop: `1px solid ${T.ink05}`,
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 24, fontWeight: 700, fontFamily: T.fH, color: T.ink,
            margin: '0 0 8px', letterSpacing: -0.5,
          }}>
            Refer a colleague. Earn ₦25,000.
          </h2>
          <p style={{ fontSize: 14, color: T.ink40, margin: '0 0 16px' }}>
            They get 5% off their first order. You earn ₦25,000 in platform credit.
          </p>
          <Link href="/referrals" className="hBtn" style={{ background: T.ink, color: '#fff', fontSize: 14, textDecoration: 'none' }}>
            Learn more {ic.arr({ size: 15, color: '#fff', sw: 2 })}
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad" style={{
        padding: '80px 48px', textAlign: 'center', background: '#fff',
        borderTop: `1px solid ${T.ink05}`,
      }}>
        <h2 style={{
          fontSize: 40, fontWeight: 700, fontFamily: T.fH, color: T.ink,
          margin: '0 0 12px', letterSpacing: -1.5,
        }}>
          Help your patients get the surgery they need.
        </h2>
        <p style={{ fontSize: 16, color: T.ink40, margin: '0 0 32px' }}>
          Membership starts at ₦75,000/month. Cancel anytime.
        </p>
        <Link href="/dashboard" className="hBtn" style={{ background: T.ink, color: '#fff', fontSize: 16, textDecoration: 'none' }}>
          Join OrthoSurplus {ic.arr({ size: 16, color: '#fff', sw: 2 })}
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="nav-pad" style={{
        borderTop: `1px solid ${T.ink05}`, padding: '20px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
      }}>
        <span style={{ fontSize: 14, fontWeight: 700, fontFamily: T.fH, color: T.ink }}>
          OrthoSurplus
        </span>
        <span style={{ fontSize: 12, color: T.ink20 }}>Lagos · Abuja · Accra · © 2026</span>
      </footer>
    </div>
  )
}
