import type { Metadata } from 'next'
import Link from 'next/link'
import Services from '../components/sections/Services'

export const metadata: Metadata = {
  title: 'Fitur',
  description:
    'Fitur GEUWAT bantu pemula fasih pelafalan: Pronunciation, Vocabulary, Grammar, Speaking, learning path, progres, dan konsultasi.',
  alternates: { canonical: '/fitur' },
}

export default function FiturPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <header className="section-header" style={{ paddingTop: 0 }}>
          <h1 className="section-title">Fitur GEUWAT</h1>
          <p className="section-subtitle">Ringkasan fitur utama dan dukungan belajar.</p>
        </header>

        <nav aria-label="Navigasi halaman" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/tentang" className="conversion-secondary-link">Tentang</Link>
          <Link href="/galeri" className="conversion-secondary-link">Galeri</Link>
          <Link href="/testimoni" className="conversion-secondary-link">Testimoni</Link>
          <Link href="/kontak" className="conversion-secondary-link">Kontak</Link>
          <Link href="/register" className="conversion-secondary-link">Daftar</Link>
        </nav>
      </div>

      <Services standalone />
    </main>
  )
}
