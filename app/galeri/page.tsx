import type { Metadata } from 'next'
import Link from 'next/link'
import Gallery from '../components/sections/Gallery'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Galeri GEUWAT: preview tampilan aplikasi dan highlight program.',
  alternates: { canonical: '/galeri' },
}

export default function GaleriPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <header className="section-header" style={{ paddingTop: 0 }}>
          <h1 className="section-title">Galeri GEUWAT</h1>
          <p className="section-subtitle">Preview tampilan dan highlight program.</p>
        </header>

        <nav aria-label="Navigasi halaman" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/fitur" className="conversion-secondary-link">Fitur</Link>
          <Link href="/tentang" className="conversion-secondary-link">Tentang</Link>
          <Link href="/testimoni" className="conversion-secondary-link">Testimoni</Link>
          <Link href="/kontak" className="conversion-secondary-link">Kontak</Link>
          <Link href="/register" className="conversion-secondary-link">Daftar</Link>
        </nav>
      </div>

      <Gallery standalone />
    </main>
  )
}
