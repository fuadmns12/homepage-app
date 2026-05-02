import type { Metadata } from 'next'
import Link from 'next/link'
import AmbassadorFormClient from '../components/AmbassadorFormClient'

export const metadata: Metadata = {
  title: 'GEUWAT Ambassador <18',
  description: 'Form pendaftaran GEUWAT Ambassador untuk usia di bawah 18 tahun.',
  alternates: { canonical: '/geuwat-ambassador/under-18' },
}

export default function GeuwatAmbassadorUnder18Page() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <nav aria-label="Navigasi" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/geuwat-ambassador" className="conversion-secondary-link">
            Kembali
          </Link>
          <Link href="/" className="conversion-secondary-link">
            Beranda
          </Link>
        </nav>
      </div>

      <AmbassadorFormClient variant="under-18" />
    </main>
  )
}

