import HomeTrustProof from './HomeTrustProof'

interface ConversionLandingProps {
  onOpenFeatureHub: () => void
}

const TRUST_CHIPS = [
  'JALUR BELAJAR',
  'VOCABULARY',
  'SPEAKING',
  'GRAMMAR',
  'PRONUNCIATION',
  'PROGRESS TRACKER'
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
          <p className="conversion-price-main conversion-price-stack">
            <span className="conversion-price-label">Upgrade Diri</span>
            <span className="conversion-price-value">
              <span className="conversion-price-highlight">Rp149.000</span>
            </span>
            <span className="conversion-price-duration">Akses penuh, sekali investasi.</span>
          </p>
        </div>

        <div className="conversion-cta-row">
          <a href="/register" className="intro-cta-primary conversion-primary-cta">
            Daftar Sekarang
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
