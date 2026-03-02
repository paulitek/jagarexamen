'use client'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { getVilt, getKategori } from '@/lib/viltData'

const BG = '#f2ede4'
const DARK = '#1c1c1c'
const MUTED = '#7a6f63'
const BORDER = '#1c1c1c'
const CARD = '#ffffff'
const GREEN = '#2d5a3d'
const BROWN = '#7a4f2d'

export default function DjurPage() {
  const params = useParams()
  const djur = getVilt(params.djur as string)
  const kat = getKategori(params.kategori as string)
  if (!djur || !kat) return notFound()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: BG }}>
      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: BG, borderBottom: `2px solid ${DARK}`, padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 10, height: 68, flexWrap: 'wrap' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 16, fontWeight: 800, color: DARK }}>
            🎯 JägarexamenOnline
          </Link>
          <span style={{ color: '#c8b89a' }}>›</span>
          <Link href="/vilt" style={{ color: MUTED, fontSize: 13, textDecoration: 'none' }}>Viltuppslagsverk</Link>
          <span style={{ color: '#c8b89a' }}>›</span>
          <Link href={`/vilt/${kat.id}`} style={{ color: MUTED, fontSize: 13, textDecoration: 'none' }}>{kat.namn}</Link>
          <span style={{ color: '#c8b89a' }}>›</span>
          <span style={{ color: DARK, fontSize: 13, fontWeight: 600 }}>{djur.namn}</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        padding: '60px 1.5rem 48px',
        borderBottom: `2px solid ${DARK}`,
        backgroundColor: BG,
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 80, lineHeight: 1 }}>{djur.emoji}</span>
            <div>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 900, color: DARK,
                marginBottom: 6, lineHeight: 1.1,
              }}>
                {djur.namn}
              </h1>
              <p style={{ fontSize: 15, color: MUTED, fontStyle: 'italic', marginBottom: 10 }}>{djur.latinNamn}</p>
              <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.65, maxWidth: 520 }}>{djur.kortBeskrivning}</p>
            </div>
          </div>

          {/* Faktaruta */}
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
          }}>
            {[
              { label: 'Vikt', value: djur.fakta.vikt },
              { label: 'Längd', value: djur.fakta.längd },
              { label: 'Livslängd', value: djur.fakta.livslängd },
              { label: 'Jakttid', value: djur.fakta.jakttid, accent: BROWN },
              { label: 'Status', value: djur.fakta.status, accent: GREEN },
            ].filter(f => f.value).map(f => (
              <div key={f.label} style={{
                backgroundColor: CARD,
                border: `2px solid ${BORDER}`,
                borderRadius: 16,
                padding: '14px 20px',
                textAlign: 'center',
                minWidth: 100,
              }}>
                <div style={{ fontSize: 11, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{f.label}</div>
                <div style={{ fontSize: 15, color: f.accent || DARK, fontWeight: 700 }}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNEHÅLLSFÖRTECKNING */}
      <div style={{ maxWidth: 860, margin: '32px auto 0', padding: '0 1.5rem' }}>
        <div style={{
          backgroundColor: CARD, border: `2px solid ${BORDER}`,
          borderRadius: 16, padding: '16px 20px',
        }}>
          <p style={{ fontSize: 11, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>Innehåll</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
            {djur.sektioner.map((s, i) => (
              <a key={i} href={`#sektion-${i}`} style={{
                fontSize: 13, color: GREEN, textDecoration: 'none', fontWeight: 500,
              }}>
                {s.rubrik}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SEKTIONER */}
      <article style={{ maxWidth: 860, margin: '0 auto', padding: '32px 1.5rem 80px' }}>
        {djur.sektioner.map((s, i) => (
          <section key={i} id={`sektion-${i}`} style={{
            marginBottom: 40,
            backgroundColor: CARD,
            border: `2px solid ${BORDER}`,
            borderRadius: 20,
            padding: '28px 32px',
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              color: DARK, fontWeight: 800,
              marginBottom: 16,
              paddingBottom: 12,
              borderBottom: '1px solid #e8e0d4',
            }}>
              {s.rubrik}
            </h2>
            <div style={{ fontSize: 16, color: MUTED, lineHeight: 1.85 }}>
              {s.text.split('\n\n').map((para, j) => (
                <p key={j} style={{ marginBottom: 16 }}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Navigering */}
        <div style={{
          paddingTop: 24, marginTop: 8,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <Link href={`/vilt/${kat.id}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: CARD, border: `2px solid ${DARK}`,
            borderRadius: 100, padding: '10px 20px',
            color: DARK, fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>
            ← Tillbaka till {kat.namn}
          </Link>
          <Link href="/vilt" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: DARK, borderRadius: 100, padding: '10px 20px',
            color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>
            Alla kategorier →
          </Link>
        </div>
      </article>

      <footer style={{ padding: '36px 1.5rem', textAlign: 'center', borderTop: `2px solid ${DARK}`, backgroundColor: DARK, color: '#8a7a60', fontSize: 13 }}>
        <p>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
