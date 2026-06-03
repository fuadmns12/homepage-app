import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://learningenglishgeuwat-ten.vercel.app'

export const metadata: Metadata = {
  title: 'Register GEUWAT - Website Belajar Bahasa Inggris',
  description:
    'Daftar member GEUWAT untuk akses setahun materi Pronunciation, Vocabulary, Grammar, dan Speaking dengan Pembayaran Sekali Rp169.000.',
  alternates: {
    canonical: '/register',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: `${BASE_URL}/register`,
    title: 'Register GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Daftar member GEUWAT untuk akses setahun materi Pronunciation, Vocabulary, Grammar, dan Speaking dengan Pembayaran Sekali Rp169.000.',
    siteName: 'GEUWAT',
    images: [
      {
        url: '/images/view.webp',
        width: 1634,
        height: 524,
        alt: 'GEUWAT register page preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Daftar member GEUWAT untuk akses setahun materi Pronunciation, Vocabulary, Grammar, dan Speaking dengan Pembayaran Sekali Rp169.000.',
    images: ['/images/view.webp'],
  },
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
