import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GEUWAT Ambassador',
  description: 'Pendaftaran GEUWAT Ambassador berdasarkan kategori usia.',
  alternates: { canonical: '/geuwat-ambassador' },
}

export default function GeuwatAmbassadorPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <header className="section-header" style={{ paddingTop: 0 }}>
          <h1 className="section-title">GEUWAT Ambassador</h1>
          <p className="section-subtitle">Pilih kategori usia untuk membuka halaman pendaftaran.</p>
        </header>

        <nav aria-label="Tab pendaftaran" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/geuwat-ambassador/18-plus" className="conversion-secondary-link">
            GEUWAT Ambassador +18
          </Link>
          <Link href="/geuwat-ambassador/under-18" className="conversion-secondary-link">
            GEUWAT Ambassador &lt;18
          </Link>
          <Link href="/" className="conversion-secondary-link">
            Beranda
          </Link>
        </nav>
      </div>
    </main>
  )
}

