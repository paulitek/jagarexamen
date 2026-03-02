'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getVilt, getKategori } from '@/lib/viltData'

export default function DjurPage({ params }: { params: { kategori: string; djur: string } }) {
  const djur = getVilt(params.djur)
  const kat = getKategori(params.kategori)
  if (!djur || !kat) return notFound()

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
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12, height: 64, flexWrap: 'wrap' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700, color: '#f5e8cc' }}>
            🎯 JägarExamenOnline
          </Link>
          <span style={{ color: '#2d4d2d' }}>›</span>
          <Link href="/vilt" style={{ color: '#8a7a60', fontSize: 13, textDecoration: 'none' }}>Viltuppslagsverk</Link>
          <span style={{ color: '#2d4d2d' }}>›</span>
          <Link href={`/vilt/${kat.id}`} style={{ color: '#8a7a60', fontSize: 13, textDecoration: 'none' }}>{kat.namn}</Link>
          <span style={{ color: '#2d4d2d' }}>›</span>
          <span style={{ color: '#c8b896', fontSize: 13 }}>{djur.namn}</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, #0d1a0d 0%, #1a2e1a 60%, #243d24 100%)',
        padding: '60px 1.5rem 40px',
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 64 }}>{djur.emoji}</span>
            <div>
              <h1 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700, color: '#f5e8cc',
                marginBottom: 6, lineHeight: 1.1,
              }}>
                {djur.namn}
              </h1>
              <p style={{ fontSize: 15, color: '#5a7a5a', fontStyle: 'italic', marginBottom: 8 }}>{djur.latinNamn}</p>
              <p style={{ fontSize: 16, color: '#c8b896', lineHeight: 1.6 }}>{djur.kortBeskrivning}</p>
            </div>
          </div>

          {/* Faktaruta */}
          <div style={{
            display: 'flex', gap: 20, flexWrap: 'wrap',
            backgroundColor: 'rgba(45,77,45,0.3)',
            border: '1px solid #2d4d2d',
            borderRadius: 10, padding: '16px 20px',
            marginTop: 16,
          }}>
            {djur.fakta.vikt && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#5a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Vikt</div>
                <div style={{ fontSize: 15, color: '#f5e8cc', fontWeight: 600 }}>{djur.fakta.vikt}</div>
              </div>
            )}
            {djur.fakta.längd && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#5a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Längd</div>
                <div style={{ fontSize: 15, color: '#f5e8cc', fontWeight: 600 }}>{djur.fakta.längd}</div>
              </div>
            )}
            {djur.fakta.livslängd && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#5a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Livslängd</div>
                <div style={{ fontSize: 15, color: '#f5e8cc', fontWeight: 600 }}>{djur.fakta.livslängd}</div>
              </div>
            )}
            {djur.fakta.jakttid && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#5a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Jakttid</div>
                <div style={{ fontSize: 15, color: '#d4a055', fontWeight: 600 }}>{djur.fakta.jakttid}</div>
              </div>
            )}
            {djur.fakta.status && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#5a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Status</div>
                <div style={{ fontSize: 15, color: '#6aaa6a', fontWeight: 600 }}>{djur.fakta.status}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INNEHÅLLSFÖRTECKNING */}
      <div style={{ maxWidth: 860, margin: '32px auto 0', padding: '0 1.5rem' }}>
        <div style={{
          backgroundColor: '#132213',
          border: '1px solid #2d4d2d',
          borderRadius: 10, padding: '16px 20px',
        }}>
          <p style={{ fontSize: 12, color: '#5a7a5a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Innehåll</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
            {djur.sektioner.map((s, i) => (
              <a key={i} href={`#sektion-${i}`} style={{
                fontSize: 13, color: '#8a9a8a', textDecoration: 'none',
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
          <section key={i} id={`sektion-${i}`} style={{ marginBottom: 48 }}>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: '#f5e8cc',
              marginBottom: 16,
              paddingBottom: 10,
              borderBottom: '1px solid #2d4d2d',
            }}>
              {s.rubrik}
            </h2>
            <div style={{ fontSize: 16, color: '#c8b896', lineHeight: 1.85 }}>
              {s.text.split('\n\n').map((para, j) => (
                <p key={j} style={{ marginBottom: 18 }}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Navigation till angränsande djur */}
        <div style={{
          borderTop: '1px solid #2d4d2d', paddingTop: 32, marginTop: 16,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <Link href={`/vilt/${kat.id}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: '#1a2e1a', border: '1px solid #2d4d2d',
            borderRadius: 8, padding: '10px 18px',
            color: '#c8b896', fontSize: 14, textDecoration: 'none',
          }}>
            ← Tillbaka till {kat.namn}
          </Link>
          <Link href="/vilt" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: '#1a2e1a', border: '1px solid #2d4d2d',
            borderRadius: 8, padding: '10px 18px',
            color: '#c8b896', fontSize: 14, textDecoration: 'none',
          }}>
            Alla kategorier →
          </Link>
        </div>
      </article>

      <footer style={{ padding: '40px 1.5rem', textAlign: 'center', color: '#4d6b4d', fontSize: 13, borderTop: '1px solid #1f351f' }}>
        <p>© 2025 JägarExamen Online</p>
      </footer>
    </div>
  )
}
