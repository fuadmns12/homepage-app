import { useState } from 'react'
import Image from 'next/image'
import HomeTrustProof from './HomeTrustProof'
import { trackCtaClick } from '@/lib/analytics'

interface ConversionLandingProps {
  onOpenFeatureHub: () => void
}

const TRUST_CHIPS = [
  {
    label: 'VIEW',
    imageSrc: '/images/view.webp',
    imageAlt: 'Preview tampilan aplikasi GEUWAT'
  },
  {
    label: 'JALUR BELAJAR',
    imageSrc: '/images/jalur-belajar.webp',
    imageAlt: 'Preview jalur belajar GEUWAT'
  },
  {
    label: 'VOCABULARY',
    imageSrc: '/images/vocabulary.webp',
    imageAlt: 'Preview modul vocabulary GEUWAT'
  },
  {
    label: 'SPEAKING',
    imageSrc: '/images/speaking.webp',
    imageAlt: 'Preview modul speaking GEUWAT'
  },
  {
    label: 'GRAMMAR',
    imageSrc: '/images/grammar.webp',
    imageAlt: 'Preview modul grammar GEUWAT'
  },
  {
    label: 'PRONUNCIATION',
    imageSrc: '/images/pronunciation.webp',
    imageAlt: 'Preview modul pronunciation GEUWAT'
  },
  {
    label: 'GEUWAT',
    imageSrc: '/images/bot.webp',
    imageAlt: 'Preview robot GEUWAT'
  },
  {
    label: 'PROGRESS TRACKER',
    imageSrc: '/images/progress.webp',
    imageAlt: 'Preview progress tracker GEUWAT'
  }
] as const
type TrustChipLabel = (typeof TRUST_CHIPS)[number]['label']

export default function ConversionLanding({ onOpenFeatureHub }: ConversionLandingProps) {
  const [selectedChipLabel, setSelectedChipLabel] = useState<TrustChipLabel>(TRUST_CHIPS[0].label)
  const selectedChip = TRUST_CHIPS.find((chip) => chip.label === selectedChipLabel) ?? TRUST_CHIPS[0]

  const handleOpenFeatureHub = () => {
    trackCtaClick('hero_view_features', { location: 'conversion_landing' })
    onOpenFeatureHub()
  }

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
              <span className="conversion-price-highlight">Rp159.000</span>
            </span>
            <span className="conversion-price-duration">Akses penuh, sekali investasi.</span>
          </p>
        </div>

        <div className="conversion-cta-row">
          <a
            href="/register"
            className="intro-cta-primary conversion-primary-cta"
            onClick={() =>
              trackCtaClick('hero_register', {
                location: 'conversion_landing',
                target: '/register',
              })
            }
          >
            Daftar Sekarang
          </a>
        </div>
        <div className="conversion-secondary-row">
          <button type="button" className="conversion-secondary-link" onClick={handleOpenFeatureHub}>
            Lihat fitur selengkapnya
          </button>
        </div>

        <ul className="conversion-trust-chips" aria-label="Fakta fitur produk GEUWAT">
          {TRUST_CHIPS.map((chip) => (
            <li key={chip.label}>
              <button
                type="button"
                className={`conversion-trust-chip-btn${selectedChipLabel === chip.label ? ' active' : ''}`}
                onClick={() => setSelectedChipLabel(chip.label)}
                aria-pressed={selectedChipLabel === chip.label}
              >
                {chip.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="conversion-chip-preview" aria-live="polite">
          <div className="conversion-chip-preview-media">
            <Image
              src={selectedChip.imageSrc}
              alt={selectedChip.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              priority={false}
            />
          </div>
        </div>
      </div>

      <HomeTrustProof />
    </section>
  )
}

