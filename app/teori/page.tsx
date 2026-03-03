'use client'
import Link from 'next/link'
import { teoriKapitel } from '@/lib/teoriData'

const BG = '#f2ede4'
const DARK = '#1c1c1c'
const MUTED = '#7a6f63'
const BORDER = '#1c1c1c'
const GREEN = '#2d5a3d'
const CARD = '#ffffff'
const BROWN = '#7a4f2d'

const kapitelEmojis: Record<string, string> = {
  inledning: '🌿',
  jagaren: '🎯',
  jakten: '🦌',
  jakthunden: '🐕',
  vapnen: '🔫',
  jakttermer: '📖',
}

export default function TeoriPage() {
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
              Jägarexamen<span style={{ color: BROWN }}>Online</span>
            </span>
          </Link>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/vilt" style={{
              color: DARK, padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600, border: `2px solid ${DARK}`,
              textDecoration: 'none',
            }}>
              🦌 Viltuppslagsverk
            </Link>
            <Link href="/kurs" style={{
              backgroundColor: DARK, color: '#fff',
              padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600,
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
            Jaktteori
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, marginBottom: 12 }}>
            Genomgång av all teori du behöver för jägarexamen — från ekosystem och
            viltvård till vapenkunskap och jaktlagstiftning.
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.6 }}>
            Innehållet är strukturerat efter de kapitel som ingår i den officiella
            jägarexamensutbildningen.
          </p>
        </div>
      </section>

      {/* CHAPTERS */}
      <section style={{ padding: '60px 1.5rem', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {teoriKapitel.map((kap) => (
            <Link
              key={kap.id}
              href={`/teori/${kap.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: CARD,
                border: `2px solid ${BORDER}`,
                borderRadius: 20,
                padding: '28px 28px 24px',
                cursor: 'pointer',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>
                  {kapitelEmojis[kap.id] || '📖'}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
                  Kapitel {kap.number}
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.4rem', fontWeight: 800, color: DARK,
                  marginBottom: 10,
                }}>
                  {kap.title}
                </h2>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, marginBottom: 16 }}>
                  {kap.intro.slice(0, 120)}...
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: MUTED }}>
                    {kap.avsnitt.length} avsnitt
                  </span>
                  <span style={{
                    backgroundColor: GREEN, color: '#fff',
                    padding: '6px 14px', borderRadius: 100, fontSize: 13, fontWeight: 600,
                  }}>
                    Läs kapitel →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: DARK, color: '#fff',
        padding: '40px 1.5rem',
        marginTop: 60,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 14, color: '#aaa' }}>
          © 2025 JägarexamenOnline · Teoriinnehållet är baserat på officiell jägarexamenslitteratur.
        </p>
      </footer>
    </div>
  )
}
