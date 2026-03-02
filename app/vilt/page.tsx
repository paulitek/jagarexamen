'use client'
import Link from 'next/link'
import { viltKategorier, allaVilt } from '@/lib/viltData'

const BG = '#f2ede4'
const DARK = '#1c1c1c'
const MUTED = '#7a6f63'
const BORDER = '#1c1c1c'
const GREEN = '#2d5a3d'
const CARD = '#ffffff'

export default function ViltuppslagsverkPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: BG,
        borderBottom: `2px solid ${DARK}`,
        padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 800, color: DARK }}>
              Jägarexamen<span style={{ color: '#7a4f2d' }}>Online</span>
            </span>
          </Link>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/kurs" style={{
              color: DARK, padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600, border: `2px solid ${DARK}`,
              textDecoration: 'none',
            }}>
              📚 Kursen
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        padding: '72px 1.5rem 60px',
        textAlign: 'center',
        borderBottom: `2px solid ${DARK}`,
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 900, color: DARK,
            lineHeight: 1.1, marginBottom: 20,
          }}>
            Viltuppslagsverk
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, marginBottom: 12 }}>
            Djupgående information om alla relevanta viltarter i Sverige —
            utseende, beteende, ekologi och jakt.
          </p>
          <p style={{
            display: 'inline-block',
            backgroundColor: CARD,
            border: `2px solid ${DARK}`,
            borderRadius: 100,
            padding: '6px 20px',
            fontSize: 14, fontWeight: 600, color: DARK,
          }}>
            {allaVilt.length} arter dokumenterade
          </p>
        </div>
      </section>

      {/* KATEGORIER */}
      <section style={{ padding: '60px 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {viltKategorier.map(kat => {
            const djurIKat = allaVilt.filter(v => v.kategoriId === kat.id)
            return (
              <Link key={kat.id} href={`/vilt/${kat.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: CARD,
                  border: `2px solid ${BORDER}`,
                  borderRadius: 20,
                  padding: '28px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 24px rgba(28,28,28,0.1)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontSize: 44, marginBottom: 16 }}>{kat.emoji}</div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 22, fontWeight: 800, color: DARK, marginBottom: 10,
                  }}>
                    {kat.namn} &rsaquo;
                  </h2>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65, marginBottom: 18 }}>
                    {kat.beskrivning}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    fontSize: 13, fontWeight: 600, color: GREEN,
                    backgroundColor: '#eaf3ec',
                    padding: '4px 14px', borderRadius: 100,
                    border: `1px solid ${GREEN}44`,
                  }}>
                    {djurIKat.length} arter
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <footer style={{
        padding: '36px 1.5rem', textAlign: 'center',
        borderTop: `2px solid ${DARK}`,
        backgroundColor: DARK, color: '#8a7a60', fontSize: 13,
      }}>
        <p>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
