'use client'
import Link from 'next/link'
import { modules } from '@/lib/courseData'

const BG = '#f2ede4'
const CARD = '#ffffff'
const DARK = '#1c1c1c'
const MUTED = '#7a6f63'
const BORDER = '#1c1c1c'
const GREEN = '#2d5a3d'
const GREEN_LIGHT = '#eaf3ec'
const BROWN = '#7a4f2d'
const BROWN_LIGHT = '#f5ede4'

export default function Home() {
  const totalDuration = modules.reduce((acc, m) => acc + parseInt(m.duration), 0)

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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🎯</span>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 20, fontWeight: 800, color: DARK, letterSpacing: '-0.02em',
            }}>
              Jägarexamen<span style={{ color: BROWN }}>Online</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/teori" style={{
              color: DARK, padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600,
              border: `2px solid ${DARK}`,
              textDecoration: 'none',
              backgroundColor: 'transparent',
            }}>
              📖 Jaktteori
            </Link>
            <Link href="/vilt" style={{
              color: DARK, padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600,
              border: `2px solid ${DARK}`,
              textDecoration: 'none',
              backgroundColor: 'transparent',
            }}>
              🦌 Viltuppslagsverk
            </Link>
            <Link href="/kurs" style={{
              backgroundColor: DARK, color: '#fff',
              padding: '8px 22px', borderRadius: 100,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}>
              Börja kursen →
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 1.5rem 72px', backgroundColor: BG }}>
        {/* Scrolling ticker */}
        <div style={{
          overflow: 'hidden',
          borderTop: `2px solid ${DARK}`,
          borderBottom: `2px solid ${DARK}`,
          padding: '12px 0',
          marginBottom: 56,
          backgroundColor: '#e8e0d4',
        }}>
          <div style={{
            display: 'flex', gap: 48,
            animation: 'marquee 20s linear infinite',
            whiteSpace: 'nowrap',
            fontSize: 13, fontWeight: 600, color: MUTED, letterSpacing: '0.05em',
          }}>
            {['🦌 Klövvilt', '🐺 Rovdjur', '🦆 Vattenfåglar', '🦃 Skogsfåglar', '🐇 Hardjur', '🎯 Jägarexamen', '🦌 Klövvilt', '🐺 Rovdjur', '🦆 Vattenfåglar', '🦃 Skogsfåglar', '🐇 Hardjur', '🎯 Jägarexamen'].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 900,
            color: DARK,
            lineHeight: 1.08,
            marginBottom: 28,
            letterSpacing: '-0.03em',
          }}>
            Klara jägarexamen<br />
            <span style={{ color: GREEN }}>med självförtroende</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: MUTED,
            maxWidth: 540,
            margin: '0 auto 44px',
            lineHeight: 1.75,
          }}>
            Strukturerad teori om vilt, regler, vapenlära och etik — byggt
            för dig som vill förstå helheten, inte bara pugga fraser.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
            <Link href="/kurs" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: DARK, color: '#fff',
              padding: '14px 32px', borderRadius: 100,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
            }}>
              🎯 Börja studera nu
            </Link>
            <Link href="/vilt" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: 'transparent', color: DARK,
              padding: '13px 31px', borderRadius: 100,
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
              border: `2px solid ${DARK}`,
            }}>
              🦌 Viltuppslagsverk
            </Link>
          </div>

          {/* Stats cards */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: `${modules.length}`, label: 'Moduler', emoji: '📚' },
              { value: `${totalDuration} min`, label: 'Studietid', emoji: '⏱' },
              { value: '100%', label: 'Gratis att prova', emoji: '✅' },
            ].map(s => (
              <div key={s.label} style={{
                backgroundColor: CARD,
                border: `2px solid ${BORDER}`,
                borderRadius: 20,
                padding: '20px 28px',
                textAlign: 'center',
                minWidth: 140,
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{s.emoji}</div>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 26, fontWeight: 800, color: DARK,
                }}>{s.value}</div>
                <div style={{ fontSize: 12, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE CARDS (Happy Golfer style) */}
      <section style={{ padding: '0 1.5rem 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {[
              { icon: '📚', title: 'Djupare förståelse >', text: 'Vi förklarar varför reglerna finns — inte bara vad de säger. Du förstår helheten.' },
              { icon: '⏱', title: 'Studiera i din takt >', text: 'Inga fasta tider. Läs när du vill, så länge du vill.' },
              { icon: '🎯', title: 'Provfokuserat >', text: 'Varje modul avslutas med quiz kopplade direkt till examensfrågor.' },
              { icon: '🦌', title: 'Viltuppslagsverk >', text: '39 djurarter med fullständig information om biologi, spår och jakt.' },
            ].map(f => (
              <div key={f.title} style={{
                backgroundColor: CARD,
                border: `2px solid ${BORDER}`,
                borderRadius: 20,
                padding: '28px 24px',
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 10,
                }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.65 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section id="moduler" style={{
        padding: '80px 1.5rem',
        backgroundColor: '#e8e0d4',
        borderTop: `2px solid ${DARK}`,
        borderBottom: `2px solid ${DARK}`,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, color: DARK,
            textAlign: 'center', marginBottom: 12,
          }}>
            Kursens {modules.length} moduler
          </h2>
          <p style={{ color: MUTED, fontSize: 16, textAlign: 'center', marginBottom: 48 }}>
            Gå igenom varje modul i ordning — eller hoppa direkt till det du vill fördjupa dig i.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 16,
          }}>
            {modules.map((mod) => (
              <Link key={mod.id} href={`/kurs/${mod.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: CARD,
                  border: `2px solid ${BORDER}`,
                  borderRadius: 20,
                  padding: '24px',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 24px rgba(28,28,28,0.12)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                    <div style={{
                      fontSize: 32,
                      backgroundColor: GREEN_LIGHT,
                      borderRadius: 12, padding: '8px 10px',
                      border: `1px solid ${GREEN}22`,
                    }}>
                      {mod.emoji}
                    </div>
                    <span style={{
                      fontSize: 12, fontWeight: 700, color: MUTED,
                      backgroundColor: '#f0e8dc',
                      padding: '4px 10px', borderRadius: 100,
                      border: '1px solid #c8b89a',
                    }}>
                      {String(mod.number).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 17, fontWeight: 700, color: DARK,
                    marginBottom: 6, lineHeight: 1.3,
                  }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.5, marginBottom: 16 }}>
                    {mod.subtitle}
                  </p>

                  <div style={{
                    borderTop: '1px solid #e8e0d4', paddingTop: 14,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <span style={{ fontSize: 12, color: MUTED }}>⏱ {mod.duration}</span>
                      <span style={{ fontSize: 12, color: MUTED }}>📖 {mod.theory.sections.length} avsnitt</span>
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 600, color: GREEN,
                      backgroundColor: GREEN_LIGHT,
                      padding: '3px 10px', borderRadius: 100,
                      border: `1px solid ${GREEN}44`,
                    }}>
                      {mod.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA VILT */}
      <section style={{ padding: '80px 1.5rem', backgroundColor: BG }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, color: DARK, marginBottom: 16,
          }}>
            Allt vilt du behöver känna till
          </h2>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            39 djurarter med fullständig fakta — biologi, habitat, jaktmetoder,
            spårtecken och mycket mer. Perfekt för teoridelen om vilt.
          </p>
          <Link href="/vilt" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            backgroundColor: GREEN, color: '#fff',
            padding: '14px 32px', borderRadius: 100,
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
          }}>
            🦌 Öppna viltuppslagsverket
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '40px 1.5rem',
        textAlign: 'center',
        borderTop: `2px solid ${DARK}`,
        backgroundColor: DARK,
        color: '#c8b89a',
      }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 18, fontWeight: 800, color: '#f2ede4', marginBottom: 10,
        }}>
          🎯 Jägarexamen<span style={{ color: '#d4a055' }}>Online</span>
        </div>
        <p style={{ fontSize: 13, color: '#8a7a60', maxWidth: 500, margin: '0 auto' }}>
          Innehållet är baserat på Naturvårdsverkets och Svenska Jägareförbundets riktlinjer.
        </p>
        <p style={{ marginTop: 8, fontSize: 12, color: '#6a5a50' }}>© 2025 JägarExamen Online</p>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
