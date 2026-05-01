import type { Metadata } from 'next'
import Link from 'next/link'
import About from '../components/sections/About'

export const metadata: Metadata = {
  title: 'Tentang',
  description:
    'Kenali misi GEUWAT: membangun fondasi bahasa Inggris terstruktur, berbasis pengalaman mengajar, menuju pembelajaran yang makin personal.',
  alternates: { canonical: '/tentang' },
}

export default function TentangPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <header className="section-header" style={{ paddingTop: 0 }}>
          <h1 className="section-title">Tentang GEUWAT</h1>
          <p className="section-subtitle">Cerita, misi, dan arah pengembangan.</p>
        </header>

        <nav aria-label="Navigasi halaman" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/fitur" className="conversion-secondary-link">Fitur</Link>
          <Link href="/galeri" className="conversion-secondary-link">Galeri</Link>
          <Link href="/testimoni" className="conversion-secondary-link">Testimoni</Link>
          <Link href="/kontak" className="conversion-secondary-link">Kontak</Link>
          <Link href="/register" className="conversion-secondary-link">Daftar</Link>
        </nav>
      </div>

      <About backToMenu={() => {}} isActive={true} standalone />
    </main>
  )
}
