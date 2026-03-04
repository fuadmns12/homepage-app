import HomeTrustProof from './HomeTrustProof'

interface ConversionLandingProps {
  onOpenFeatureHub: () => void
}

const TRUST_CHIPS = [
  'JALUR BELAJAR INTI',
  'TOPIK VOCABULARY',
  'SPEAKING GOALS',
  'TOPIK GRAMMAR RESOURCE',
  'MODUL PRONUNCIATION',
  'PROGRESS TRACKER',
  'MAU JAJAN?\u{1F92B}'
]

export default function ConversionLanding({ onOpenFeatureHub }: ConversionLandingProps) {
  return (
    <section className="conversion-landing" data-testid="conversion-landing">
      <div className="glass-card conversion-hero">
        <p className="conversion-badge">BARU RILIS | GEUWAT 2026</p>

        <h1 className="conversion-title conversion-hook-title">
          <span className="conversion-hook-line">Ketika Kamu Mulai dari Kosong,</span>
          <span className="conversion-hook-line">Dan Waktu Tak Pernah Longgar,</span>
          <span className="conversion-hook-line conversion-hook-line--accent">
            GEUWAT Susun Jalannya Untukmu.
          </span>
        </h1>

        <p className="conversion-subtitle">
          Dibuat untuk belajar harian yang realistis: materi pengucapan, kosakata, tata bahasa,
          dan speaking tersusun rapi supaya progresmu lebih terarah.
        </p>

        <div className="conversion-pricing-wrap">
          <div className="conversion-price-main">
            <p className="conversion-price-label">Special Offer</p>
            <p className="conversion-price-value">
              <span className="conversion-price-highlight">100K</span>{' '}
              <span className="conversion-price-duration">/ 6 BULAN</span>
            </p>
          </div>
          <p className="conversion-price-anchor">
            Harga normal: <strong>30K / BULAN</strong>
          </p>
          <p className="conversion-price-note">Harga launching untuk member batch awal.</p>
        </div>

        <div className="conversion-cta-row">
          <a href="/register" className="intro-cta-primary conversion-primary-cta">
            Register Now
          </a>
        </div>
        <div className="conversion-secondary-row">
          <button type="button" className="conversion-secondary-link" onClick={onOpenFeatureHub}>
            Lihat fitur selengkapnya
          </button>
        </div>

        <ul className="conversion-trust-chips" aria-label="Fakta fitur produk GEUWAT">
          {TRUST_CHIPS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <HomeTrustProof />
    </section>
  )
}
