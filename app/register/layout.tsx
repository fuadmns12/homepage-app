import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register GEUWAT - Website Belajar Bahasa Inggris',
  description:
    'Daftar member GEUWAT untuk akses seumur hidup materi Pronunciation, Vocabulary, Grammar, dan Speaking dengan Pembayaran Sekali Rp169.000.',
  alternates: {
    canonical: '/register',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://learningenglishgeuwat-ten.vercel.app/register',
    title: 'Register GEUWAT - Website Belajar Bahasa Inggris',
    description:
      'Daftar member GEUWAT untuk akses seumur hidup materi Pronunciation, Vocabulary, Grammar, dan Speaking dengan Pembayaran Sekali Rp169.000.',
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
      'Daftar member GEUWAT untuk akses seumur hidup materi Pronunciation, Vocabulary, Grammar, dan Speaking dengan Pembayaran Sekali Rp169.000.',
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
