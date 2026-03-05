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
    icon: '/favicon.svg',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
