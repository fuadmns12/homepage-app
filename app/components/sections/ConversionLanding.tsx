import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import HomeTrustProof from './HomeTrustProof'
import OriginEvolutionSynergy from './OriginEvolutionSynergy'
import { trackCtaClick } from '@/lib/analytics'

interface ConversionLandingProps {
  onOpenFeatureHub: () => void
}

type TrustChip = {
  label: string
  title: string
  bonus?: string
  description?: string
  imageSrc: string
  imageAlt: string
}

const TRUST_CHIPS = [
  {
    label: 'VIEW',
    title: 'Aksesibilitas',
    description:
      'Satu Akun, Akses Tanpa Batas di Semua Perangkat. Latih pelafalanmu kapan saja, di mana saja, baik di Laptop, Tablet, maupun Smartphone.',
    imageSrc: '/images/view.webp',
    imageAlt: 'Preview tampilan aplikasi GEUWAT'
  },
  {
    label: 'JALUR BELAJAR',
    title: 'Jalur Belajar',
    description:
      'Belajar lebih terarah dengan Roadmap sistematis. Bangun fondasi kuat dan tingkatkan levelmu langkah demi langkah.',
    imageSrc: '/images/jalur-belajar.webp',
    imageAlt: 'Preview jalur belajar GEUWAT'
  },
  {
    label: 'VOCABULARY',
    title: 'Vocabulary',
    bonus:
      'Bonus: Perkaya Kosakata Pendukung. Tidak sekadar tahu arti, tapi langsung tahu cara mengucapkannya dengan benar lewat panduan audio dan simbol IPA di setiap kata.',
    description: '',
    imageSrc: '/images/vocabulary.webp',
    imageAlt: 'Preview modul vocabulary GEUWAT'
  },
  {
    label: 'SPEAKING',
    title: 'Speaking',
    bonus:
      'Bonus: Roadmap Bicara Siap Pakai. Gunakan pelafalan hebatmu pada ribuan kalimat kunci yang telah disusun rapi.',
    description: '',
    imageSrc: '/images/speaking.webp',
    imageAlt: 'Preview modul speaking GEUWAT'
  },
  {
    label: 'GRAMMAR',
    title: 'Grammar',
    bonus:
      'Bonus: Fondasi Akurasi. Lengkapi kemahiran bicaramu dengan pemahaman struktur kalimat yang tepat agar pesanmu tersampaikan dengan jelas dan benar.',
    description: '',
    imageSrc: '/images/grammar.webp',
    imageAlt: 'Preview modul grammar GEUWAT'
  },
  {
    label: 'PRONUNCIATION',
    title: 'Pronunciation', 
    description:
      'Bicara dengan pelafalan layaknya Native Speaker. Pelajari teknik intonasi, penekanan kata, hingga detail terkecil.',
    imageSrc: '/images/pronunciation.webp',
    imageAlt: 'Preview modul pronunciation GEUWAT'
  },
  {
    label: 'GEUWAT',
    title: 'Robot GEUWAT',
    description:
      'Asisten pribadi yang selalu siap membantu. Cukup ketik perintah singkat untuk navigasi, kuis, atau tanya jawab instan.',
    imageSrc: '/images/bot.webp',
    imageAlt: 'Preview robot GEUWAT'
  },
  {
    label: 'PROGRESS TRACKER',
    title: 'Progress Tracker',
    description:
      'Visualisasikan kemajuanmu setiap hari. Pantau perkembangan tiap skill agar kamu tahu kapan harus melangkah lebih jauh.',
    imageSrc: '/images/progress.webp',
    imageAlt: 'Preview progress tracker GEUWAT'
  }
] as const satisfies ReadonlyArray<TrustChip>
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
    question: 'Apakah akun saya bisa diperjualbelikan atau dipindahtangankan?',
    answer: (
      <p>
        Bisa. Namun, untuk menjaga keamanan data dan kualitas ekosistem belajar, setiap perpindahan kepemilikan akun
        dikenakan Biaya Administrasi sebesar 50% dari harga resmi saat ini. Biaya ini mencakup penggantian data akses,
        pembersihan riwayat belajar (jika diperlukan), dan validasi keamanan akun.
      </p>
    ),
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
                  <div className="conversion-faq-step-action-subtext">
                    Detail E-wallet dan Rekening Bank akan dikirimkan melalui WhatsApp
                  </div>
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
  const [selectedChipIndex, setSelectedChipIndex] = useState(0)
  const selectedChip = TRUST_CHIPS[selectedChipIndex] ?? TRUST_CHIPS[0]
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(0)

  const [faqDisplayIndex, setFaqDisplayIndex] = useState(0)
  const faqDisplayItem = FAQ_ITEMS[faqDisplayIndex] ?? FAQ_ITEMS[0]
  const [faqPhase, setFaqPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const faqTimeoutRef = useRef<number | null>(null)
  const faqSwapTimeoutRef = useRef<number | null>(null)

  const [captionChipIndex, setCaptionChipIndex] = useState(0)
  const captionChip = TRUST_CHIPS[captionChipIndex] ?? TRUST_CHIPS[0]
  const [captionPhase, setCaptionPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const captionTimeoutRef = useRef<number | null>(null)
  const captionSwapTimeoutRef = useRef<number | null>(null)

  const captionChipBonus = 'bonus' in captionChip ? captionChip.bonus : undefined
  const bonusText = captionChipBonus ?? ''
  const bonusPrefix = bonusText.startsWith('Bonus:') ? 'Bonus:' : ''
  const bonusBody = bonusPrefix ? bonusText.slice(bonusPrefix.length).trimStart() : bonusText

  const carouselRef = useRef<HTMLDivElement | null>(null)
  const selectedChipIndexRef = useRef(0)
  const scrollRafRef = useRef<number | null>(null)

  useEffect(() => {
    selectedChipIndexRef.current = selectedChipIndex
  }, [selectedChipIndex])

  useEffect(() => {
    if (selectedFaqIndex === faqDisplayIndex) return

    if (faqTimeoutRef.current !== null) {
      window.clearTimeout(faqTimeoutRef.current)
      faqTimeoutRef.current = null
    }

    if (faqSwapTimeoutRef.current !== null) {
      window.clearTimeout(faqSwapTimeoutRef.current)
      faqSwapTimeoutRef.current = null
    }

    setFaqPhase('out')

    faqSwapTimeoutRef.current = window.setTimeout(() => {
      faqSwapTimeoutRef.current = null
      setFaqDisplayIndex(selectedFaqIndex)
      setFaqPhase('in')

      faqTimeoutRef.current = window.setTimeout(() => {
        faqTimeoutRef.current = null
        setFaqPhase('idle')
      }, 180)
    }, 120)
  }, [faqDisplayIndex, selectedFaqIndex])

  useEffect(() => {
    if (selectedChipIndex === captionChipIndex) return

    if (captionTimeoutRef.current !== null) {
      window.clearTimeout(captionTimeoutRef.current)
      captionTimeoutRef.current = null
    }

    if (captionSwapTimeoutRef.current !== null) {
      window.clearTimeout(captionSwapTimeoutRef.current)
      captionSwapTimeoutRef.current = null
    }

    setCaptionPhase('out')

    captionSwapTimeoutRef.current = window.setTimeout(() => {
      captionSwapTimeoutRef.current = null
      setCaptionChipIndex(selectedChipIndex)
      setCaptionPhase('in')

      captionTimeoutRef.current = window.setTimeout(() => {
        captionTimeoutRef.current = null
        setCaptionPhase('idle')
      }, 180)
    }, 120)
  }, [captionChipIndex, selectedChipIndex])

  const scrollToChipIndex = (nextIndex: number, behavior: ScrollBehavior = 'smooth') => {
    const carouselEl = carouselRef.current
    if (!carouselEl) return

    const chipCount = TRUST_CHIPS.length
    const slideWidth = carouselEl.clientWidth || 1

    const normalizedIndex = ((nextIndex % chipCount) + chipCount) % chipCount

    const isWrapJump = nextIndex < 0 || nextIndex >= chipCount
    carouselEl.scrollTo({ left: normalizedIndex * slideWidth, behavior: isWrapJump ? 'auto' : behavior })
    setSelectedChipIndex(normalizedIndex)
  }

  useEffect(() => {
    // Start on the first "real" slide (index 1 because index 0 is the "last" clone).
    scrollToChipIndex(selectedChipIndexRef.current, 'auto')

    const handleResize = () => scrollToChipIndex(selectedChipIndexRef.current, 'auto')
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCarouselScroll = () => {
    if (scrollRafRef.current !== null) return

    scrollRafRef.current = window.requestAnimationFrame(() => {
      scrollRafRef.current = null

      const carouselEl = carouselRef.current
      if (!carouselEl) return

      const slideWidth = carouselEl.clientWidth || 1
      const nextIndex = Math.round(carouselEl.scrollLeft / slideWidth)

      if (nextIndex !== selectedChipIndexRef.current && nextIndex >= 0 && nextIndex < TRUST_CHIPS.length) {
        setSelectedChipIndex(nextIndex)
      }
    })
  }

  const handleCarouselKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollToChipIndex(selectedChipIndexRef.current - 1)
      return
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollToChipIndex(selectedChipIndexRef.current + 1)
    }
  }

  const handleOpenFeatureHub = () => {
    trackCtaClick('hero_view_features', { location: 'conversion_landing' })
    onOpenFeatureHub()
  }

  const moveFaq = (delta: number) => {
    setSelectedFaqIndex((prev) => {
      const count = FAQ_ITEMS.length
      return (prev + delta + count) % count
    })
  }

  return (
    <section className="conversion-landing" data-testid="conversion-landing">
      <div className="glass-card conversion-hero">
        <p className="conversion-badge">GEUWAT 2026</p>

        <h1 className="conversion-title conversion-hook-title">
          <span className="conversion-hook-line">Ketika Kamu Mulai dari Nol,</span>
          <span className="conversion-hook-line">Dan Waktu Tak Pernah Longgar,</span>
          <span className="conversion-hook-line conversion-hook-line--accent">
            GEUWAT Susun Jalannya Untuk Kamu Belajar Bahasa Inggris.
          </span>
        </h1>

        <p className="conversion-subtitle">
          Dibuat untuk belajar harian yang realistis: materi pengucapan, kosakata, tata bahasa,
          dan speaking tersusun rapi supaya progresmu lebih terarah.
        </p>

        <div className="conversion-pricing-wrap">
          <p className="conversion-price-main conversion-price-stack">
            <span className="conversion-price-label">Akun Belajar GEUWAT</span>
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
          <div className="conversion-preview-head">
            <div className="conversion-preview-copy">
              <h2 className="conversion-preview-title">Pertanyaan Umum</h2>
            </div>
          </div>

          <label className="conversion-feature-select-sr" htmlFor="conversion-faq-select">
            Pilih pertanyaan
          </label>
          <select
            id="conversion-faq-select"
            className="conversion-feature-select conversion-feature-select--sr"
            value={selectedFaqIndex}
            onChange={(event) => setSelectedFaqIndex(Number(event.target.value))}
          >
            {FAQ_ITEMS.map((item, index) => (
              <option key={item.question} value={index}>
                {item.question}
              </option>
            ))}
          </select>

          <div className={`conversion-chip-caption conversion-faq-caption ${faqPhase !== 'idle' ? `is-${faqPhase}` : ''}`}>
            <div className="conversion-chip-caption-head">
              <h3 className="conversion-chip-caption-title">{faqDisplayItem.question}</h3>
            </div>
            <div className="conversion-faq-body">{faqDisplayItem.answer}</div>
          </div>

          <div className="conversion-faq-controls" aria-label="Navigasi pertanyaan umum">
            <button
              type="button"
              className="conversion-carousel-btn"
              onClick={() => moveFaq(-1)}
              aria-label="Pertanyaan sebelumnya"
            >
              {'\u2039'}
            </button>

            <div className="conversion-faq-dots" role="tablist" aria-label="Pilih pertanyaan">
              {FAQ_ITEMS.map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                  role="tab"
                  className={`conversion-carousel-dot ${index === selectedFaqIndex ? 'is-active' : ''}`}
                  aria-selected={index === selectedFaqIndex}
                  aria-label={`Pilih pertanyaan: ${item.question}`}
                  onClick={() => setSelectedFaqIndex(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="conversion-carousel-btn"
              onClick={() => moveFaq(1)}
              aria-label="Pertanyaan berikutnya"
            >
              {'\u203A'}
            </button>
          </div>
        </div>

        <div className="conversion-chip-preview conversion-feature-card" aria-live="polite">
          <div className="conversion-preview-head">
            <div className="conversion-preview-copy">
              <h2 className="conversion-preview-title">Apa aja sih di GEUWAT?</h2>
            </div>

          </div>

          <label className="conversion-feature-select-sr" htmlFor="conversion-feature-select">
            Pilih preview
          </label>
          <select
            id="conversion-feature-select"
            className="conversion-feature-select conversion-feature-select--sr"
            value={selectedChip.label}
            onChange={(event) => {
              const nextLabel = event.target.value as TrustChipLabel
              const nextIndex = TRUST_CHIPS.findIndex((chip) => chip.label === nextLabel)
              if (nextIndex !== -1) scrollToChipIndex(nextIndex)
            }}
          >
            {TRUST_CHIPS.map((chip) => (
              <option key={chip.label} value={chip.label}>
                {chip.title}
              </option>
            ))}
          </select>

          <div className={`conversion-chip-caption ${captionPhase !== 'idle' ? `is-${captionPhase}` : ''}`} aria-live="polite">
            <div className="conversion-chip-caption-head">
              <h3 className="conversion-chip-caption-title">{captionChip.title}</h3>
            </div>
            <p className="conversion-chip-caption-bonus">
              {bonusPrefix ? (
                <>
                  <span className="conversion-chip-caption-bonus-label">{bonusPrefix}</span> {bonusBody}
                </>
              ) : (
                bonusBody
              )}
            </p>
            <p className="conversion-chip-caption-desc">{captionChip.description ?? ''}</p>
          </div>

          <div className="conversion-chip-preview-media">
            <div className="conversion-carousel-nav" aria-label="Kontrol carousel preview">
              <button
                type="button"
                className="conversion-carousel-btn conversion-carousel-btn--prev"
                onClick={() => scrollToChipIndex(selectedChipIndexRef.current - 1)}
                aria-label="Preview sebelumnya"
              >
                ‹
              </button>
              <button
                type="button"
                className="conversion-carousel-btn conversion-carousel-btn--next"
                onClick={() => scrollToChipIndex(selectedChipIndexRef.current + 1)}
                aria-label="Preview berikutnya"
              >
                ›
              </button>
            </div>

            <div
              ref={carouselRef}
              className="conversion-carousel"
              role="region"
              aria-roledescription="carousel"
              aria-label="Preview fitur. Geser untuk melihat."
              tabIndex={0}
              onScroll={handleCarouselScroll}
              onKeyDown={handleCarouselKeyDown}
            >
              {TRUST_CHIPS.map((chip, index) => (
                <div
                  key={chip.label}
                  className="conversion-carousel-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} dari ${TRUST_CHIPS.length}`}
                >
                  <Image
                    src={chip.imageSrc}
                    alt={chip.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="conversion-carousel-dots" role="tablist" aria-label="Pilih preview">
              {TRUST_CHIPS.map((chip, index) => (
                <button
                  key={chip.label}
                  type="button"
                  role="tab"
                  className={`conversion-carousel-dot ${index === selectedChipIndex ? 'is-active' : ''}`}
                  aria-selected={index === selectedChipIndex}
                  aria-label={`Pilih ${chip.title}`}
                  onClick={() => scrollToChipIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="conversion-secondary-row">
          <button type="button" className="conversion-secondary-link" onClick={handleOpenFeatureHub}>
            Lihat fitur selengkapnya
          </button>
        </div>
      </div>

      <HomeTrustProof />
      <OriginEvolutionSynergy />
    </section>
  )
}
