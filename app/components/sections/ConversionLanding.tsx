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

const FAQ_ITEMS = [
  {
    question: 'Apakah GEUWAT cocok untuk pemula?',
    answer: (
      <p>
        Ya. GEUWAT disusun untuk kamu yang mulai dari nol, step-by-step, supaya tidak bingung urutan belajarnya.
      </p>
    ),
  },
  {
    question: 'Sekali bayar atau langganan?',
    answer: <p>Sekali bayar Rp169.000 untuk akses penuh (sekali investasi).</p>,
  },
  {
    question: 'Materi apa saja yang tersedia?',
    answer: (
      <p>
        Pronunciation, Vocabulary, Grammar, dan Speaking dengan alur belajar yang terstruktur agar progres lebih terarah.
      </p>
    ),
  },
  {
    question: 'Bisa diakses di HP?',
    answer: <p>Bisa. GEUWAT berbasis website, jadi bisa dibuka via browser di HP atau laptop (disarankan Chrome).</p>,
  },
  {
    question: 'Bagaimana cara daftarnya?',
    answer: (
      <>
        <p>Pilih jalur yang sesuai dengan posisi kamu sekarang.</p>

        <div className="conversion-faq-steps">
          <div className="conversion-faq-step-group">
            <div className="conversion-faq-step-head">
              <span className="conversion-faq-step-title">Mulai dari Instagram</span>
            </div>
            <div className="conversion-faq-step-images" aria-label="Langkah daftar dari Instagram">
              <div className="conversion-faq-step-frame">
                <Image
                  src="/CaraDaftar/reg1.webp"
                  alt="Langkah daftar dari Instagram 1"
                  fill
                  sizes="(max-width: 480px) 110px, 130px"
                />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image
                  src="/CaraDaftar/reg2.webp"
                  alt="Langkah daftar dari Instagram 2"
                  fill
                  sizes="(max-width: 480px) 110px, 130px"
                />
              </div>
            </div>
          </div>

          <div className="conversion-faq-step-group">
            <div className="conversion-faq-step-head">
              <span className="conversion-faq-step-title">Sudah di Website GEUWAT</span>
            </div>
            <div className="conversion-faq-step-images" aria-label="Langkah daftar dari website GEUWAT">
              <div className="conversion-faq-step-frame">
                <Image
                  src="/CaraDaftar/reg3.webp"
                  alt="Langkah daftar di website 1"
                  fill
                  sizes="(max-width: 480px) 110px, 130px"
                />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image
                  src="/CaraDaftar/reg4.webp"
                  alt="Langkah daftar di website 2"
                  fill
                  sizes="(max-width: 480px) 110px, 130px"
                />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image
                  src="/CaraDaftar/reg5.webp"
                  alt="Langkah daftar di website 3"
                  fill
                  sizes="(max-width: 480px) 110px, 130px"
                />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame">
                <Image
                  src="/CaraDaftar/reg6.webp"
                  alt="Langkah daftar di website 4"
                  fill
                  sizes="(max-width: 480px) 110px, 130px"
                />
              </div>
              <div className="conversion-faq-step-arrow" aria-hidden="true" />
              <div className="conversion-faq-step-frame conversion-faq-step-frame--action">
                <div className="conversion-faq-step-action" aria-label="Langkah berikutnya: selesaikan pembayaran">
                  <div className="conversion-faq-step-action-text">Selesaikan Pembayaran</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
] as const

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
        <p className="conversion-badge">GEUWAT 2026</p>

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
              <span className="conversion-price-highlight">Rp169.000</span>
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

        <div className="conversion-faq" aria-label="FAQ GEUWAT">
          <h2 className="conversion-faq-title">Pertanyaan Umum</h2>
          <div className="conversion-faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="conversion-faq-item">
                <summary className="conversion-faq-question">{item.question}</summary>
                <div className="conversion-faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="conversion-chip-preview conversion-feature-card" aria-live="polite">
          <div className="conversion-feature-select-block">
            <label className="conversion-feature-select-sr" htmlFor="conversion-feature-select">
              Pilih preview
            </label>
            <select
              id="conversion-feature-select"
              className="conversion-feature-select"
              value={selectedChipLabel}
              onChange={(event) => setSelectedChipLabel(event.target.value as TrustChipLabel)}
            >
              {TRUST_CHIPS.map((chip) => (
                <option key={chip.label} value={chip.label}>
                  {chip.label}
                </option>
              ))}
            </select>
          </div>

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

        <div className="conversion-secondary-row">
          <button type="button" className="conversion-secondary-link" onClick={handleOpenFeatureHub}>
            Lihat fitur selengkapnya
          </button>
        </div>
      </div>

      <HomeTrustProof />
    </section>
  )
}

