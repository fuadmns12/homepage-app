import type { Metadata } from 'next'
import Link from 'next/link'
import Testimonials from '../components/sections/Testimonials'

export const metadata: Metadata = {
  title: 'Testimoni',
  description:
    'Lihat testimoni dan pengalaman belajar dengan GEUWAT: alur jelas, progres terukur, dan materi praktis untuk dipakai sehari-hari.',
  alternates: { canonical: '/testimoni' },
}

export default function TestimoniPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <header className="section-header" style={{ paddingTop: 0 }}>
          <h1 className="section-title">Testimoni</h1>
          <p className="section-subtitle">Cerita dan pengalaman belajar bersama GEUWAT.</p>
        </header>

        <nav aria-label="Navigasi halaman" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/fitur" className="conversion-secondary-link">Fitur</Link>
          <Link href="/tentang" className="conversion-secondary-link">Tentang</Link>
          <Link href="/galeri" className="conversion-secondary-link">Galeri</Link>
          <Link href="/kontak" className="conversion-secondary-link">Kontak</Link>
          <Link href="/register" className="conversion-secondary-link">Daftar</Link>
        </nav>
      </div>

      <Testimonials backToMenu={() => {}} isActive={true} standalone />
    </main>
  )
}
