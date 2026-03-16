import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import './styles/GEUWAT.css'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://learningenglishgeuwat-ten.vercel.app'),
  title: 'GEUWAT - Website Belajar Bahasa Inggris',
  description:
    'Belajar English terarah dengan jalur Pronunciation, Vocabulary, Grammar, dan Speaking. Akses seumur hidup Rp159.000 dengan Pembayaran Sekali.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://learningenglishgeuwat-ten.vercel.app/',
    title: 'GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Belajar English terarah dengan jalur Pronunciation, Vocabulary, Grammar, dan Speaking. Akses seumur hidup Rp159.000 dengan Pembayaran Sekali.',
    siteName: 'GEUWAT',
    images: [
      {
        url: '/Fitur/LaptopView.png',
        width: 1919,
        height: 893,
        alt: 'GEUWAT learning platform preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Belajar English terarah dengan jalur Pronunciation, Vocabulary, Grammar, dan Speaking. Akses seumur hidup Rp159.000 dengan Pembayaran Sekali.',
    images: ['/Fitur/LaptopView.png'],
  },
  icons: {
    icon: '/favicon.ico',
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
        {children}
      </body>
    </html>
  )
}
