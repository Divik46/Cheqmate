import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://reflect.app'),
  title: 'Reflect Notes',
  description: 'A beautifully minimalist note-taking app designed to mirror the way you think. Now with a native AI integration.',
  keywords: 'notes, note-taking, AI, productivity, organization, reflect',
  authors: [{ name: 'Reflect' }],
  creator: 'Reflect',
  publisher: 'Reflect',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reflect.app',
    title: 'Reflect',
    description: 'A beautifully minimalist note-taking app designed to mirror the way you think. Now with a native AI integration.',
    siteName: 'Reflect',
    images: [
      {
        url: 'https://site.reflect.app/home/build/q-11289093.jpeg',
        width: 1200,
        height: 630,
        alt: 'Reflect Notes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reflectnotes',
    creator: '@reflectnotes',
    title: 'Reflect',
    description: 'A beautifully minimalist note-taking app designed to mirror the way you think. Now with a native AI integration.',
    images: ['https://site.reflect.app/home/build/q-11289093.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
