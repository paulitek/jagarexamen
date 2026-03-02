'use client'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { getKategori, getViltByKategori } from '@/lib/viltData'

const BG = '#f2ede4'
const DARK = '#1c1c1c'
const MUTED = '#7a6f63'
const BORDER = '#1c1c1c'
const CARD = '#ffffff'
const GREEN = '#2d5a3d'

export default function KategoriPage() {
  const params = useParams()
  const kat = getKategori(params.kategori as string)
  if (!kat) return notFound()
  const djur = getViltByKategori(kat.id)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: BG, borderBottom: `2px solid ${DARK}`, padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 10, height: 68, flexWrap: 'wrap' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 800, color: DARK }}>
            🎯 JägarexamenOnline
          </Link>
          <span style={{ color: '#c8b89a' }}>›</span>
          <Link href="/vilt" style={{ color: MUTED, fontSize: 14, textDecoration: 'none' }}>Viltuppslagsverk</Link>
          <span style={{ color: '#c8b89a' }}>›</span>
          <span style={{ color: DARK, fontSize: 14, fontWeight: 600 }}>{kat.namn}</span>
        </div>
      </nav>

      <section style={{ padding: '60px 1.5rem 48px', textAlign: 'center', borderBottom: `2px solid ${DARK}` }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{kat.emoji}</div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900, color: DARK, marginBottom: 16,
          }}>
            {kat.namn}
          </h1>
          <p style={{ fontSize: 17, color: MUTED, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            {kat.beskrivning}
          </p>
        </div>
      </section>

      <section style={{ padding: '50px 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {djur.map(d => (
            <Link key={d.id} href={`/vilt/${kat.id}/${d.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: CARD, border: `2px solid ${BORDER}`,
                borderRadius: 20, padding: '24px', cursor: 'pointer',
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
                <div style={{ fontSize: 48, marginBottom: 14 }}>{d.emoji}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 20, fontWeight: 800, color: DARK, marginBottom: 4,
                }}>
                  {d.namn} ›
                </h3>
                <p style={{ fontSize: 12, color: MUTED, fontStyle: 'italic', marginBottom: 12 }}>{d.latinNamn}</p>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 16 }}>
                  {d.kortBeskrivning}
                </p>
                {d.fakta.jakttid && (
                  <span style={{
                    display: 'inline-block', fontSize: 12, fontWeight: 600, color: GREEN,
                    backgroundColor: '#eaf3ec', padding: '3px 12px', borderRadius: 100,
                    border: `1px solid ${GREEN}44`,
                  }}>
                    🗓 {d.fakta.jakttid}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ padding: '36px 1.5rem', textAlign: 'center', borderTop: `2px solid ${DARK}`, backgroundColor: DARK, color: '#8a7a60', fontSize: 13 }}>
        <p>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
