import type { Metadata } from 'next'
import Link from 'next/link'
import Contact from '../components/sections/Contact'

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Mulai belajar di GEUWAT: daftar akun, login member, atau hubungi admin via WhatsApp/Instagram untuk tanya akses & batch.',
  alternates: { canonical: '/kontak' },
}

export default function KontakPage() {
  return (
    <main className="conversion-landing">
      <div className="glass-card" style={{ padding: 24 }}>
        <header className="section-header" style={{ paddingTop: 0 }}>
          <h1 className="section-title">Kontak</h1>
          <p className="section-subtitle">Mulai daftar atau hubungi tim GEUWAT.</p>
        </header>

        <nav aria-label="Navigasi halaman" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/fitur" className="conversion-secondary-link">Fitur</Link>
          <Link href="/tentang" className="conversion-secondary-link">Tentang</Link>
          <Link href="/galeri" className="conversion-secondary-link">Galeri</Link>
          <Link href="/testimoni" className="conversion-secondary-link">Testimoni</Link>
          <Link href="/register" className="conversion-secondary-link">Daftar</Link>
        </nav>
      </div>

      <Contact backToMenu={() => {}} standalone />
    </main>
  )
}
