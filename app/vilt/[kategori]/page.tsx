'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getKategori, getViltByKategori } from '@/lib/viltData'

export default function KategoriPage({ params }: { params: { kategori: string } }) {
  const kat = getKategori(params.kategori)
  if (!kat) return notFound()
  const djur = getViltByKategori(kat.id)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d1a0d' }}>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: 'rgba(13,26,13,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2d4d2d',
        padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: '#f5e8cc' }}>
            🎯 JägarExamen<span style={{ color: '#b8843a' }}>Online</span>
          </Link>
          <span style={{ color: '#2d4d2d' }}>›</span>
          <Link href="/vilt" style={{ color: '#8a7a60', fontSize: 14, textDecoration: 'none' }}>Viltuppslagsverk</Link>
          <span style={{ color: '#2d4d2d' }}>›</span>
          <span style={{ color: '#c8b896', fontSize: 14 }}>{kat.namn}</span>
        </div>
      </nav>

      <section style={{
        background: 'linear-gradient(160deg, #0d1a0d 0%, #1a2e1a 60%, #243d24 100%)',
        padding: '60px 1.5rem 40px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{kat.emoji}</div>
          <h1 style={{
            fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700, color: '#f5e8cc', marginBottom: 16,
          }}>
            {kat.namn}
          </h1>
          <p style={{ fontSize: 17, color: '#c8b896', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            {kat.beskrivning}
          </p>
        </div>
      </section>

      <section style={{ padding: '50px 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {djur.map(d => (
            <Link key={d.id} href={`/vilt/${kat.id}/${d.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#1a2e1a', border: '1px solid #2d4d2d',
                borderRadius: 12, padding: '22px 24px', cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#4e8a4e'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2d4d2d'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 36 }}>{d.emoji}</span>
                  <div>
                    <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 19, color: '#f5e8cc', marginBottom: 2 }}>{d.namn}</h2>
                    <p style={{ fontSize: 12, color: '#5a7a5a', fontStyle: 'italic' }}>{d.latinNamn}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#8a7a60', lineHeight: 1.6, marginBottom: 14 }}>
                  {d.kortBeskrivning}
                </p>
                <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#6a8a6a' }}>
                  {d.fakta.jakttid && <span>🗓 {d.fakta.jakttid}</span>}
                  {d.fakta.vikt && <span>⚖️ {d.fakta.vikt}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ padding: '40px 1.5rem', textAlign: 'center', color: '#4d6b4d', fontSize: 13, borderTop: '1px solid #1f351f' }}>
        <p>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
