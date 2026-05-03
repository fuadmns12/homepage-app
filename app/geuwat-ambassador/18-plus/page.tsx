import type { Metadata } from 'next'
import Link from 'next/link'
import AmbassadorFormClient from '../components/AmbassadorFormClient'

export const metadata: Metadata = {
  title: 'GEUWAT Ambassador +18',
  description: 'Form pendaftaran GEUWAT Ambassador untuk usia 18 tahun ke atas.',
  alternates: { canonical: '/geuwat-ambassador/18-plus' },
}

export default function GeuwatAmbassador18PlusPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <nav aria-label="Navigasi" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/geuwat-ambassador" className="conversion-secondary-link">
            Kembali
          </Link>
        </nav>
      </div>

      <AmbassadorFormClient variant="18-plus" />
    </main>
  )
}

