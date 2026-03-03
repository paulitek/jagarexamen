'use client'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { getKapitel, teoriKapitel } from '@/lib/teoriData'
import { useState } from 'react'

const BG = '#f2ede4'
const DARK = '#1c1c1c'
const MUTED = '#7a6f63'
const GREEN = '#2d5a3d'
const GREEN_LIGHT = '#eaf3ec'
const CARD = '#ffffff'
const BROWN = '#7a4f2d'

export default function KapitelPage() {
  const params = useParams()
  const kapitel = getKapitel(params.kapitel as string)
  const [aktivtAvsnitt, setAktivtAvsnitt] = useState(0)

  if (!kapitel) return notFound()

  const avsnitt = kapitel.avsnitt[aktivtAvsnitt]

  // Prev/next chapter
  const idx = teoriKapitel.findIndex(k => k.id === kapitel.id)
  const prevKap = idx > 0 ? teoriKapitel[idx - 1] : null
  const nextKap = idx < teoriKapitel.length - 1 ? teoriKapitel[idx + 1] : null

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
            <Link href="/teori" style={{
              color: DARK, padding: '8px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600, border: `2px solid ${DARK}`,
              textDecoration: 'none',
            }}>
              ← Alla kapitel
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

      {/* BREADCRUMB */}
      <div style={{ padding: '12px 1.5rem', borderBottom: `1px solid rgba(28,28,28,0.1)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', fontSize: 13, color: MUTED }}>
          <Link href="/teori" style={{ color: MUTED, textDecoration: 'none' }}>Jaktteori</Link>
          {' / '}
          <span style={{ color: DARK, fontWeight: 600 }}>Kapitel {kapitel.number}: {kapitel.title}</span>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: 32, paddingTop: 40, paddingBottom: 80 }}>

        {/* SIDEBAR */}
        <aside style={{
          width: 260,
          flexShrink: 0,
          position: 'sticky',
          top: 90,
          alignSelf: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: MUTED, marginBottom: 8 }}>
            Kapitel {kapitel.number}: {kapitel.title}
          </div>
          {kapitel.avsnitt.map((av, i) => (
            <button
              key={av.id}
              onClick={() => setAktivtAvsnitt(i)}
              style={{
                textAlign: 'left',
                padding: '10px 14px',
                borderRadius: 10,
                border: aktivtAvsnitt === i ? `2px solid ${GREEN}` : '2px solid transparent',
                backgroundColor: aktivtAvsnitt === i ? GREEN_LIGHT : 'transparent',
                color: aktivtAvsnitt === i ? GREEN : DARK,
                fontSize: 14,
                fontWeight: aktivtAvsnitt === i ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {av.title}
            </button>
          ))}

          {/* Chapter nav */}
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid rgba(28,28,28,0.1)` }}>
            {prevKap && (
              <Link href={`/teori/${prevKap.id}`} style={{
                display: 'block', padding: '8px 12px', borderRadius: 8,
                fontSize: 13, color: MUTED, textDecoration: 'none', marginBottom: 6,
              }}>
                ← Kap {prevKap.number}: {prevKap.title}
              </Link>
            )}
            {nextKap && (
              <Link href={`/teori/${nextKap.id}`} style={{
                display: 'block', padding: '8px 12px', borderRadius: 8,
                fontSize: 13, color: GREEN, fontWeight: 600, textDecoration: 'none',
              }}>
                Kap {nextKap.number}: {nextKap.title} →
              </Link>
            )}
          </div>
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {/* Chapter intro */}
          {aktivtAvsnitt === 0 && (
            <div style={{
              backgroundColor: GREEN_LIGHT,
              border: `2px solid ${GREEN}`,
              borderRadius: 16,
              padding: '24px 28px',
              marginBottom: 32,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: GREEN, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                Om detta kapitel
              </div>
              <p style={{ fontSize: 15, color: DARK, lineHeight: 1.7, margin: 0 }}>
                {kapitel.intro}
              </p>
            </div>
          )}

          {/* Section content */}
          <div style={{
            backgroundColor: CARD,
            border: `2px solid ${DARK}`,
            borderRadius: 20,
            padding: '36px 40px',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
              Kapitel {kapitel.number} · Avsnitt {aktivtAvsnitt + 1} av {kapitel.avsnitt.length}
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 900, color: DARK,
              marginBottom: 28, lineHeight: 1.2,
            }}>
              {avsnitt.title}
            </h1>

            {/* Body text */}
            <div style={{ color: DARK, lineHeight: 1.85, fontSize: '1.05rem' }}>
              {avsnitt.body.split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: 20 }}>{para}</p>
              ))}
            </div>
          </div>

          {/* Prev / Next avsnitt buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, gap: 12 }}>
            <button
              onClick={() => setAktivtAvsnitt(Math.max(0, aktivtAvsnitt - 1))}
              disabled={aktivtAvsnitt === 0}
              style={{
                padding: '12px 24px', borderRadius: 100,
                border: `2px solid ${DARK}`, backgroundColor: 'transparent',
                color: DARK, fontWeight: 600, fontSize: 14, cursor: 'pointer',
                opacity: aktivtAvsnitt === 0 ? 0.3 : 1,
              }}
            >
              ← Föregående avsnitt
            </button>
            <button
              onClick={() => setAktivtAvsnitt(Math.min(kapitel.avsnitt.length - 1, aktivtAvsnitt + 1))}
              disabled={aktivtAvsnitt === kapitel.avsnitt.length - 1}
              style={{
                padding: '12px 24px', borderRadius: 100,
                border: 'none', backgroundColor: GREEN,
                color: '#fff', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                opacity: aktivtAvsnitt === kapitel.avsnitt.length - 1 ? 0.3 : 1,
              }}
            >
              Nästa avsnitt →
            </button>
          </div>

          {/* Next chapter CTA (last section) */}
          {aktivtAvsnitt === kapitel.avsnitt.length - 1 && nextKap && (
            <div style={{
              marginTop: 32,
              backgroundColor: DARK, color: '#fff',
              borderRadius: 16, padding: '28px 32px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 12, color: '#aaa', marginBottom: 4 }}>Nästa kapitel</div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 800 }}>
                  Kapitel {nextKap.number}: {nextKap.title}
                </div>
              </div>
              <Link href={`/teori/${nextKap.id}`} style={{
                backgroundColor: GREEN, color: '#fff',
                padding: '12px 24px', borderRadius: 100,
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
              }}>
                Fortsätt →
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
