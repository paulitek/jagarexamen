'use client'
import Link from 'next/link'
import { modules } from '@/lib/courseData'

export default function KursPage() {
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
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: '#f5e8cc' }}>
              JägarExamen<span style={{ color: '#b8843a' }}>Online</span>
            </span>
          </Link>
          <span style={{ fontSize: 13, color: '#6a8a6a' }}>← Tillbaka till start</span>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem' }}>
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: '#f5e8cc',
          marginBottom: 12,
        }}>
          Alla moduler
        </h1>
        <p style={{ color: '#8a7a60', fontSize: 16, marginBottom: 48 }}>
          Välj en modul för att börja läsa teorin.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {modules.map((mod, idx) => (
            <Link key={mod.id} href={`/kurs/${mod.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                backgroundColor: '#1a2e1a',
                border: '1px solid #2d4d2d',
                borderRadius: 12,
                padding: '20px 24px',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#4e8a4e'
                  el.style.backgroundColor = '#1f351f'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#2d4d2d'
                  el.style.backgroundColor = '#1a2e1a'
                }}
              >
                <div style={{
                  fontSize: 13, fontWeight: 800, color: '#4d6b4d',
                  minWidth: 32, letterSpacing: '0.05em',
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: 28 }}>{mod.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 17, color: '#f5e8cc', fontWeight: 700 }}>
                    {mod.title}
                  </div>
                  <div style={{ fontSize: 13, color: '#6a8a6a', marginTop: 2 }}>{mod.subtitle}</div>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#4d6b4d' }}>⏱ {mod.duration}</span>
                  <span style={{ color: '#2d4d2d', fontSize: 18 }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
