'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getModule, modules } from '@/lib/courseData'

export async function generateStaticParams() {
  return modules.map(m => ({ moduleId: m.id }))
}

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params
  const mod = getModule(moduleId)
  if (!mod) notFound()

  const currentIdx = modules.findIndex(m => m.id === moduleId)
  const prevMod = currentIdx > 0 ? modules[currentIdx - 1] : null
  const nextMod = currentIdx < modules.length - 1 ? modules[currentIdx + 1] : null

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
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <span style={{ fontSize: 20 }}>🎯</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700, color: '#f5e8cc' }}>
              JägarExamen<span style={{ color: '#b8843a' }}>Online</span>
            </span>
          </Link>
          <Link href="/kurs" style={{ fontSize: 13, color: '#6a8a6a', textDecoration: 'none' }}>
            ← Alla moduler
          </Link>
        </div>
      </nav>

      {/* MODULE HEADER */}
      <div style={{
        background: 'linear-gradient(160deg, #132213 0%, #1a2e1a 100%)',
        borderBottom: '1px solid #2d4d2d',
        padding: '48px 1.5rem 40px',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, color: '#6a8a6a', marginBottom: 16, letterSpacing: '0.05em' }}>
            MODUL {String(mod.number).padStart(2, '0')}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
            <span style={{ fontSize: 48, lineHeight: 1 }}>{mod.emoji}</span>
            <div>
              <h1 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                color: '#f5e8cc',
                lineHeight: 1.2,
                marginBottom: 8,
              }}>
                {mod.title}
              </h1>
              <p style={{ fontSize: 16, color: '#8a7a60' }}>{mod.subtitle}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, color: '#6a8a6a' }}>⏱ {mod.duration}</span>
            <span style={{ fontSize: 13, color: '#6a8a6a' }}>📖 {mod.theory.sections.length} avsnitt</span>
            <span style={{ fontSize: 13, color: '#6a8a6a' }}>📊 {mod.difficulty}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 1.5rem' }}>

        {/* INTRO */}
        <div style={{
          backgroundColor: '#132213',
          border: '1px solid #2d4d2d',
          borderLeft: '4px solid #4e8a4e',
          borderRadius: 12,
          padding: '28px 32px',
          marginBottom: 48,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#4e8a4e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            Introduktion
          </div>
          <p style={{ fontSize: 16, color: '#c8b896', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
            {mod.theory.intro}
          </p>
        </div>

        {/* THEORY SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {mod.theory.sections.map((section, i) => (
            <div key={i}>
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36,
                  backgroundColor: 'rgba(78,138,78,0.15)',
                  border: '1px solid rgba(78,138,78,0.3)',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 800, color: '#6aaa6a',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                  color: '#f5e8cc',
                  fontWeight: 700,
                }}>
                  {section.heading}
                </h2>
              </div>

              {/* Body */}
              <div style={{
                backgroundColor: '#1a2e1a',
                border: '1px solid #2d4d2d',
                borderRadius: 12,
                padding: '28px 32px',
                marginBottom: section.keyPoints.length > 0 ? 16 : 0,
              }}>
                <p style={{ fontSize: 15, color: '#c8b896', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                  {section.body}
                </p>

                {section.tip && (
                  <div style={{
                    marginTop: 20,
                    backgroundColor: 'rgba(184,132,58,0.1)',
                    border: '1px solid rgba(184,132,58,0.25)',
                    borderRadius: 8,
                    padding: '12px 16px',
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: 16 }}>💡</span>
                    <p style={{ fontSize: 13, color: '#d4a055', lineHeight: 1.6 }}>{section.tip}</p>
                  </div>
                )}
              </div>

              {/* Key points */}
              {section.keyPoints.length > 0 && (
                <div style={{
                  backgroundColor: '#132213',
                  border: '1px solid #2d4d2d',
                  borderRadius: 12,
                  padding: '20px 28px',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#4e8a4e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
                    Kom ihåg
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {section.keyPoints.map((kp, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: '#4e8a4e', marginTop: 2, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 14, color: '#c8b896', lineHeight: 1.5 }}>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Divider between sections */}
              {i < mod.theory.sections.length - 1 && (
                <div style={{ borderBottom: '1px solid #1f351f', marginTop: 40 }} />
              )}
            </div>
          ))}
        </div>

        {/* QUIZ PLACEHOLDER */}
        <div style={{
          marginTop: 64,
          backgroundColor: '#1a2e1a',
          border: '2px dashed #2d4d2d',
          borderRadius: 14,
          padding: '40px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>🎯</div>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#4d6b4d', marginBottom: 8 }}>
            Quiz kommer snart
          </h3>
          <p style={{ fontSize: 14, color: '#3d5a3d' }}>
            Frågorna till denna modul läggs till inom kort.
          </p>
        </div>

        {/* SCENARIOS PLACEHOLDER */}
        <div style={{
          marginTop: 20,
          backgroundColor: '#1a2e1a',
          border: '2px dashed #2d4d2d',
          borderRadius: 14,
          padding: '40px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>🌲</div>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#4d6b4d', marginBottom: 8 }}>
            Jaktscenarier kommer snart
          </h3>
          <p style={{ fontSize: 14, color: '#3d5a3d' }}>
            Praktiska situationer och beslutsfrågor läggs till inom kort.
          </p>
        </div>

        {/* PREV / NEXT NAVIGATION */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 60,
          gap: 16,
          flexWrap: 'wrap',
        }}>
          {prevMod ? (
            <Link href={`/kurs/${prevMod.id}`} style={{
              textDecoration: 'none',
              backgroundColor: '#1a2e1a',
              border: '1px solid #2d4d2d',
              borderRadius: 10,
              padding: '16px 22px',
              flex: 1, minWidth: 200,
            }}>
              <div style={{ fontSize: 11, color: '#4d6b4d', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>← Föregående</div>
              <div style={{ fontSize: 15, color: '#f5e8cc', fontFamily: 'Georgia, serif' }}>{prevMod.title}</div>
            </Link>
          ) : <div />}

          {nextMod && (
            <Link href={`/kurs/${nextMod.id}`} style={{
              textDecoration: 'none',
              backgroundColor: '#1a2e1a',
              border: '1px solid #2d4d2d',
              borderRadius: 10,
              padding: '16px 22px',
              flex: 1, minWidth: 200,
              textAlign: 'right',
            }}>
              <div style={{ fontSize: 11, color: '#4d6b4d', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Nästa →</div>
              <div style={{ fontSize: 15, color: '#f5e8cc', fontFamily: 'Georgia, serif' }}>{nextMod.title}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
