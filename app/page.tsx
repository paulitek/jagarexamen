'use client'
import Link from 'next/link'
import { modules } from '@/lib/courseData'

export default function Home() {
  const totalDuration = modules.reduce((acc, m) => {
    const mins = parseInt(m.duration)
    return acc + mins
  }, 0)

  const difficultyColor = (d: string) => {
    if (d === 'Grundläggande') return '#6aaa6a'
    if (d === 'Mellannivå') return '#d4a055'
    return '#e06060'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d1a0d' }}>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: 'rgba(13,26,13,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2d4d2d',
        padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 26 }}>🎯</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, color: '#f5e8cc', letterSpacing: '-0.02em' }}>
              JägarExamen<span style={{ color: '#b8843a' }}>Online</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link href="/vilt" style={{
              backgroundColor: 'transparent',
              color: '#c8b896',
              padding: '9px 18px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              border: '1px solid #2d4d2d',
            }}>
              🦌 Viltuppslagsverk
            </Link>
            <Link href="/kurs" style={{
              backgroundColor: '#7a5220',
              color: '#fdf6e8',
              padding: '9px 22px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
            }}>
              Börja kursen →
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, #0d1a0d 0%, #1a2e1a 60%, #243d24 100%)',
        padding: '100px 1.5rem 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background texture lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(0deg, #4e8a4e 0px, transparent 1px, transparent 60px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: 'rgba(184,132,58,0.15)',
            border: '1px solid rgba(184,132,58,0.3)',
            borderRadius: 9999, padding: '6px 16px',
            fontSize: 13, fontWeight: 600, color: '#d4a055',
            letterSpacing: '0.05em', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            🌲 Godkänd av Jägarförbundets kursstruktur
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700,
            color: '#f5e8cc',
            lineHeight: 1.15,
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            Klara jägarexamen<br />
            <span style={{ color: '#6aaa6a' }}>med självförtroende</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#c8b896',
            maxWidth: 560,
            margin: '0 auto 44px',
            lineHeight: 1.7,
          }}>
            Strukturerad teori om vilt, regler, vapenlära och etik — byggt för dig som vill förstå
            helheten, inte bara pugga fraser.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kurs" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #7a5220, #9a6b2a)',
              color: '#fdf6e8', padding: '14px 32px',
              borderRadius: 10, fontSize: 16, fontWeight: 700,
              boxShadow: '0 4px 20px rgba(122,82,32,0.4)',
              transition: 'all 0.2s',
            }}>
              🎯 Börja studera nu
            </Link>
            <a href="#moduler" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent',
              color: '#f5e8cc', padding: '13px 31px',
              borderRadius: 10, fontSize: 16, fontWeight: 600,
              border: '1px solid #2d4d2d',
              transition: 'all 0.2s',
            }}>
              Se alla moduler ↓
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 32, justifyContent: 'center',
            marginTop: 56, flexWrap: 'wrap',
          }}>
            {[
              { value: `${modules.length}`, label: 'moduler' },
              { value: `${totalDuration} min`, label: 'total studietid' },
              { value: '100%', label: 'gratis att prova' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'Georgia, serif', color: '#b8843a' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#8a7a60', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES GRID */}
      <section id="moduler" style={{ padding: '80px 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: '#f5e8cc', marginBottom: 12,
          }}>
            Kursens 8 moduler
          </h2>
          <p style={{ color: '#8a7a60', fontSize: 16 }}>
            Gå igenom varje modul i ordning — eller hoppa direkt till det du vill fördjupa dig i.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {modules.map((mod) => (
            <Link key={mod.id} href={`/kurs/${mod.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#1a2e1a',
                border: '1px solid #2d4d2d',
                borderRadius: 14,
                padding: '24px 26px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#4e8a4e'
                  el.style.backgroundColor = '#1f351f'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 8px 32px rgba(13,26,13,0.7)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2d4d2d'
                  el.style.backgroundColor = '#1a2e1a'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Module number */}
                <div style={{
                  position: 'absolute', top: 16, right: 20,
                  fontSize: 13, color: '#4d6b4d', fontWeight: 700,
                  letterSpacing: '0.05em',
                }}>
                  {String(mod.number).padStart(2, '0')}
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                  <div style={{
                    fontSize: 32, lineHeight: 1,
                    backgroundColor: 'rgba(78,138,78,0.12)',
                    borderRadius: 10, padding: '8px 10px',
                    border: '1px solid rgba(78,138,78,0.2)',
                  }}>
                    {mod.emoji}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 18, fontWeight: 700,
                      color: '#f5e8cc', marginBottom: 4,
                      lineHeight: 1.3,
                    }}>
                      {mod.title}
                    </h3>
                    <p style={{ fontSize: 13, color: '#8a7a60', lineHeight: 1.4 }}>
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #2d4d2d', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ fontSize: 12, color: '#6a8a6a' }}>⏱ {mod.duration}</span>
                    <span style={{ fontSize: 12, color: '#6a8a6a' }}>📖 {mod.theory.sections.length} avsnitt</span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: difficultyColor(mod.difficulty),
                    backgroundColor: `${difficultyColor(mod.difficulty)}22`,
                    padding: '3px 9px', borderRadius: 9999,
                    border: `1px solid ${difficultyColor(mod.difficulty)}44`,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {mod.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section style={{
        padding: '80px 1.5rem',
        backgroundColor: '#132213',
        borderTop: '1px solid #2d4d2d',
        borderBottom: '1px solid #2d4d2d',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: '#f5e8cc', textAlign: 'center', marginBottom: 48,
          }}>
            Varför JägarExamen Online?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { icon: '📚', title: 'Djupare förståelse', text: 'Vi förklarar varför reglerna finns — inte bara vad de säger. Du förstår helheten.' },
              { icon: '⏱', title: 'Studiera i din takt', text: 'Inga fasta tider. Läs när du vill, så länge du vill. Perfekt för dig med ett fullspäckat schema.' },
              { icon: '🎯', title: 'Provfokuserat', text: 'Varje modul avslutas med quiz och scenarion direkt kopplade till examensfrågor.' },
              { icon: '🌲', title: 'Byggt för jägarmän', text: 'Rak, respektfull ton utan onödigt fluff. Precis som det ska vara i skogen.' },
            ].map(f => (
              <div key={f.title} style={{
                padding: '24px',
                backgroundColor: '#1a2e1a',
                border: '1px solid #2d4d2d',
                borderRadius: 12,
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 17, color: '#f5e8cc', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#8a7a60', lineHeight: 1.6 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '40px 1.5rem',
        textAlign: 'center',
        color: '#4d6b4d',
        fontSize: 13,
        borderTop: '1px solid #1f351f',
      }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: '#6a8a6a', marginBottom: 8 }}>
          🎯 JägarExamen<span style={{ color: '#7a5220' }}>Online</span>
        </div>
        <p>Innehållet är baserat på Naturvårdsverkets och Svenska Jägareförbundets riktlinjer.</p>
        <p style={{ marginTop: 4 }}>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
