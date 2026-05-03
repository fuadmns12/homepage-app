import type { Metadata, Viewport } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import './styles/GEUWAT.css'
import AnalyticsScripts from './components/ui/AnalyticsScripts'
import CookieConsent from './components/ui/CookieConsent'
import FloatingLogin from './components/ui/FloatingLogin'
import GlobalSideNav from './components/layout/GlobalSideNav'

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600']
})

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
  weight: ['400', '500', '600', '700']
})

const GA_MEASUREMENT_ID = 'G-SPZJEWNXSR'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b12',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://learningenglishgeuwat-ten.vercel.app'),
  title: {
    default: 'GEUWAT - Website Belajar Bahasa Inggris',
    template: '%s | GEUWAT',
  },
  description:
    'Belajar English terarah dengan jalur Pronunciation, Vocabulary, Grammar, dan Speaking. Akses seumur hidup Rp169.000 dengan Pembayaran Sekali.',
  applicationName: 'GEUWAT',
  generator: 'Next.js',
  keywords: [
    'belajar bahasa inggris',
    'pronunciation',
    'speaking',
    'vocabulary',
    'grammar',
    'kursus bahasa inggris online',
    'GEUWAT',
  ],
  creator: 'GEUWAT',
  publisher: 'GEUWAT',
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'fe4f2e7852b5ef54',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://learningenglishgeuwat-ten.vercel.app/',
    title: 'GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Belajar English terarah dengan jalur Pronunciation, Vocabulary, Grammar, dan Speaking. Akses seumur hidup Rp169.000 dengan Pembayaran Sekali.',
    siteName: 'GEUWAT',
    images: [
      {
        url: '/images/view.webp',
        width: 1634,
        height: 524,
        alt: 'GEUWAT learning platform preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Belajar English terarah dengan jalur Pronunciation, Vocabulary, Grammar, dan Speaking. Akses seumur hidup Rp169.000 dengan Pembayaran Sekali.',
    images: ['/images/view.webp'],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    shortcut: [{ url: '/favicon.ico' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${syne.variable}`}>
        <AnalyticsScripts measurementId={GA_MEASUREMENT_ID} />
        {children}
        <CookieConsent />
        <FloatingLogin />
        <GlobalSideNav />
      </body>
    </html>
  )
}
