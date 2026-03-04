const PROOF_CARDS = [
  {
    title: 'Belajar Terstruktur',
    description:
      'Jalur Pronunciation, Vocabulary, Grammar, dan Speaking sudah disusun dengan roadmap yang jelas dari dasar sampai praktik.'
  },
  {
    title: 'Progress dan Pendampingan',
    description:
      'Kamu bisa pantau perkembangan dari dashboard, dibantu tutorial in-app, dan bot tourguide saat butuh arahan cepat.'
  }
]

const AUDIENCE_SEGMENTS = [
  {
    title: 'Pemula yang butuh arah belajar',
    description: 'Mulai dari materi dasar, lanjut step-by-step tanpa harus bingung pilih urutan belajar.'
  },
  {
    title: 'Karyawan atau mahasiswa sibuk',
    description: 'Belajar ringkas dan praktis, fokus pada materi yang langsung bisa dipakai dalam aktivitas harian.'
  },
  {
    title: 'Member yang ingin progres terukur',
    description: 'Setiap perkembangan bisa dipantau agar latihan lebih konsisten dan hasilnya terlihat.'
  }
]

export default function HomeTrustProof() {
  return (
    <div className="home-trust-stack">
      <section className="glass-card home-proof-block" aria-label="Fitur yang sudah bisa tersedia">
        <div className="home-proof-head">
          <h2 className="home-proof-title">Fitur yang Sudah Bisa Tersedia</h2>
        </div>

        <div className="home-proof-grid">
          {PROOF_CARDS.map((card) => (
            <article key={card.title} className="home-proof-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="home-proof-cta">
          <a href="/register" className="intro-cta-primary conversion-primary-cta">
            Register Now
          </a>
        </div>
      </section>

      <section className="glass-card home-audience-block" aria-label="Untuk siapa produk ini">
        <div className="home-proof-head">
          <h2 className="home-proof-title">Untuk siapa produk ini</h2>
          <p className="home-proof-subtitle">
            Fokus untuk user yang ingin belajar English dengan cara yang praktis, terarah, dan konsisten.
          </p>
        </div>

        <div className="home-audience-grid">
          {AUDIENCE_SEGMENTS.map((item) => (
            <article key={item.title} className="home-audience-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="home-proof-cta">
          <a href="/register" className="intro-cta-primary conversion-primary-cta">
            Register Now
          </a>
        </div>
      </section>
    </div>
  )
}
