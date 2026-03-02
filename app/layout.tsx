import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JägarExamen Online – Klara teorin med självförtroende',
  description: 'Sveriges bästa digitala förberedelse för jägarexamen. Teori, regler, vapenlära och etik – allt du behöver för att klara provet.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f2ede4', fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
