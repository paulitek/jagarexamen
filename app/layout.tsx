import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JägarExamen Online – Klara teorin med självförtroende',
  description: 'Sveriges bästa digitala förberedelse för jägarexamen. Teori, regler, vapenlära och etik – allt du behöver för att klara provet.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
