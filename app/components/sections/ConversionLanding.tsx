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
  {
    question: 'Apa perbedaan antara User Trial dan User Berbayar?',
    answer: (
      <p>
        User Trial diberikan akses sementara untuk mencoba fitur kami. Namun, posisi Anda di dalam Batch (kuota 150
        orang) tidak aman hingga Anda melakukan pembayaran. User berbayar akan langsung mengambil slot User Trial jika
        kuota hampir penuh.
      </p>
    ),
  },
  {
    question: 'Bagaimana jika saya sedang Trial dan Batch tiba-tiba penuh?',
    answer: (
      <p>
        Jika kuota 150 orang sudah terpenuhi oleh pengguna yang membayar, maka User Trial akan otomatis tersingkir dari
        Batch tersebut. Anda harus menunggu pembukaan Batch selanjutnya di pintu login yang berbeda untuk mencoba
        kembali atau langsung mendaftar sebagai User Berbayar.
      </p>
    ),
  },
  {
    question: 'Kapan Batch selanjutnya dibuka?',
    answer: (
      <p>
        Batch baru hanya akan dibuka setelah Batch sebelumnya benar-benar penuh (150 User Berbayar). Pastikan Anda segera
        mengamankan akses belajar penuh agar posisi Anda tidak digantikan oleh orang lain.
      </p>
    ),
  },
  {
    question: 'Kapan kompetisi bahasa Inggris dengan hadiah uang pembinaan dimulai?',
    answer: (
      <p>
        Kompetisi hanya akan dipicu (triggered) setelah Batch Anda mencapai 150 User Berbayar. Selama masih ada User
        Trial di dalam Batch tersebut, kompetisi belum akan dimulai. Ini adalah motivasi agar komunitas di Batch Anda
        segera solid dan siap bertanding.
      </p>
    ),
  },
  {
    question: 'Siapa yang berhak mengikuti lomba?',
    answer: (
      <p>
        Hanya User Berbayar yang memiliki akses belajar penuh yang berhak mengikuti lomba dan memperebutkan hadiah uang
        pembinaan. User Trial tidak diikutsertakan dalam kompetisi.
      </p>
    ),
  },
  {
    question: 'Di mana saya bisa melihat update sisa kuota dan pembukaan Batch?',
    answer: (
      <p>
        Informasi paling update mengenai sisa slot Batch 1-4, pengumuman pemenang lomba, dan pembukaan pendaftaran baru
        selalu kami bagikan di Instagram:{' '}
        <a
          href="https://www.instagram.com/learningenglishgeuwat/"
          target="_blank"
          rel="noreferrer"
        >
          @learningenglishgeuwat
        </a>
        . Pastikan Anda mengikuti akun tersebut agar tidak tertinggal informasi.
      </p>
    ),
  },
  {
    question: 'Mengapa login dibagi menjadi 4 halaman berbeda?',
    answer: (
      <p>
        Setiap halaman login mewakili Batch tertentu. Ini memudahkan kami mengelola 150 orang per kelompok agar
        persaingan lomba lebih adil dan sistem aplikasi tetap ringan serta cepat.
      </p>
    ),
  },
  {
    question: 'Bagaimana cara upgrade dari Trial ke akses penuh?',
    answer: (
      <p>
        Anda bisa melakukan pembayaran melalui instruksi yang ada di dalam aplikasi atau hubungi Admin via{' '}
        <a
          href="https://wa.me/6282338792512?text=Halo%20Admin%20GEUWAT%2C%20saya%20ingin%20upgrade%20dari%20Trial%20ke%20akses%20penuh."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        .
      </p>
    ),
  },
  {
    question: 'Saya lupa login di Batch mana, apa yang harus saya lakukan?',
    answer: (
      <p>
        Silakan hubungi Admin atau kirim DM ke Instagram @learningenglishgeuwat dengan melampirkan bukti pembayaran atau
        nama akun Anda.
      </p>
    ),
  },
] as const

export default function ConversionLanding({ onOpenFeatureHub }: ConversionLandingProps) {
  const [selectedChipLabel, setSelectedChipLabel] = useState<TrustChipLabel>(TRUST_CHIPS[0].label)
  const selectedChip = TRUST_CHIPS.find((chip) => chip.label === selectedChipLabel) ?? TRUST_CHIPS[0]
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(0)
  const selectedFaq = FAQ_ITEMS[selectedFaqIndex] ?? FAQ_ITEMS[0]

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
            <div className="conversion-faq-select-block">
              <label className="conversion-faq-select-sr" htmlFor="conversion-faq-select">
                Pilih pertanyaan
              </label>
              <select
                id="conversion-faq-select"
                className="conversion-faq-select"
                value={selectedFaqIndex}
                onChange={(event) => setSelectedFaqIndex(Number(event.target.value))}
              >
                {FAQ_ITEMS.map((item, index) => (
                  <option key={item.question} value={index}>
                    {item.question}
                  </option>
                ))}
              </select>
            </div>

            <div className="conversion-faq-flow" aria-hidden="true">
              <svg className="conversion-faq-flow-icon" viewBox="0 0 24 36" focusable="false" aria-hidden="true">
                <line
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 22 L12 30 L18 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="conversion-faq-answer conversion-faq-answer--select">{selectedFaq.answer}</div>
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

