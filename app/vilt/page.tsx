'use client'
import Link from 'next/link'
import { viltKategorier, allaVilt } from '@/lib/viltData'

export default function ViltuppslagsverkPage() {
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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <span style={{ fontSize: 26 }}>🎯</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, color: '#f5e8cc', letterSpacing: '-0.02em' }}>
              JägarExamen<span style={{ color: '#b8843a' }}>Online</span>
            </span>
          </Link>
          <Link href="/kurs" style={{
            backgroundColor: '#7a5220', color: '#fdf6e8',
            padding: '9px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600,
          }}>
            Kursen →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, #0d1a0d 0%, #1a2e1a 60%, #243d24 100%)',
        padding: '80px 1.5rem 60px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: 'rgba(184,132,58,0.15)',
            border: '1px solid rgba(184,132,58,0.3)',
            borderRadius: 9999, padding: '6px 16px',
            fontSize: 13, fontWeight: 600, color: '#d4a055',
            letterSpacing: '0.05em', textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            📖 Viltuppslagsverk
          </div>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700, color: '#f5e8cc',
            lineHeight: 1.2, marginBottom: 20,
          }}>
            Viltuppslagsverk
          </h1>
          <p style={{ fontSize: 18, color: '#c8b896', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Djupgående information om alla relevanta viltarter i Sverige — utseende, beteende, ekologi och jakt.
          </p>
          <p style={{ marginTop: 12, fontSize: 14, color: '#6a8a6a' }}>
            {allaVilt.length} arter dokumenterade
          </p>
        </div>
      </section>

      {/* KATEGORIER */}
      <section style={{ padding: '60px 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {viltKategorier.map(kat => {
            const djurIKat = allaVilt.filter(v => v.kategoriId === kat.id)
            return (
              <Link key={kat.id} href={`/vilt/${kat.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: '#1a2e1a',
                  border: '1px solid #2d4d2d',
                  borderRadius: 14,
                  padding: '28px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#4e8a4e'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#2d4d2d'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{kat.emoji}</div>
                  <h2 style={{
                    fontFamily: 'Georgia, serif', fontSize: 22,
                    color: '#f5e8cc', marginBottom: 10,
                  }}>
                    {kat.namn}
                  </h2>
                  <p style={{ fontSize: 14, color: '#8a7a60', lineHeight: 1.6, marginBottom: 16 }}>
                    {kat.beskrivning}
                  </p>
                  <div style={{ fontSize: 13, color: '#6aaa6a', fontWeight: 600 }}>
                    {djurIKat.length} arter →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <footer style={{ padding: '40px 1.5rem', textAlign: 'center', color: '#4d6b4d', fontSize: 13, borderTop: '1px solid #1f351f' }}>
        <p>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
