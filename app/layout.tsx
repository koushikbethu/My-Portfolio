import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koushik Bethu | AI Engineer & Full Stack Developer',
  description: 'AI-focused software engineer and full-stack developer building intelligent systems that combine artificial intelligence with scalable software engineering.',
  keywords: 'AI Engineer, Full Stack Developer, Machine Learning, React, Next.js, Python, FastAPI',
  authors: [{ name: 'Koushik Bethu' }],
  icons: {
    icon: '/My-Portfolio/favicon.svg',
  },
  openGraph: {
    title: 'Koushik Bethu | AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems that combine artificial intelligence with scalable software engineering.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230f172a'/%3E%3Ctext x='50' y='70' font-family='Arial' font-size='45' font-weight='bold' fill='%2338bdf8' text-anchor='middle'%3EKB%3C/text%3E%3C/svg%3E" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
