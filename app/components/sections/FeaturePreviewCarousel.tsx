import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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
    imageAlt: 'Preview tampilan aplikasi GEUWAT',
  },
  {
    label: 'PRONUNCIATION',
    title: 'Pronunciation',
    description:
      'Bicara dengan pelafalan layaknya Native Speaker. Pelajari teknik intonasi, penekanan kata, hingga detail terkecil.',
    imageSrc: '/images/pronunciation.webp',
    imageAlt: 'Preview modul pronunciation GEUWAT',
  },
  {
    label: 'JALUR BELAJAR',
    title: 'Jalur Belajar',
    description:
      'Belajar lebih terarah dengan Roadmap sistematis. Bangun fondasi kuat dan tingkatkan levelmu langkah demi langkah.',
    imageSrc: '/images/jalur-belajar.webp',
    imageAlt: 'Preview jalur belajar GEUWAT',
  },
  {
    label: 'VOCABULARY',
    title: 'Vocabulary (Bonus)',
    bonus:
      'Perkaya Kosakata Pendukung. Tidak sekadar tahu arti, tapi langsung tahu cara mengucapkannya dengan benar lewat panduan audio dan simbol IPA di setiap kata.',
    description: '',
    imageSrc: '/images/vocabulary.webp',
    imageAlt: 'Preview modul vocabulary GEUWAT',
  },
  {
    label: 'SPEAKING',
    title: 'Speaking (Bonus)',
    bonus: 'Roadmap Bicara Siap Pakai. Gunakan pelafalan hebatmu pada ribuan kalimat kunci yang telah disusun rapi.',
    description: '',
    imageSrc: '/images/speaking.webp',
    imageAlt: 'Preview modul speaking GEUWAT',
  },
  {
    label: 'GRAMMAR',
    title: 'Grammar (Bonus)',
    bonus:
      'Fondasi Akurasi. Lengkapi kemahiran bicaramu dengan pemahaman struktur kalimat yang tepat agar pesanmu tersampaikan dengan jelas dan benar.',
    description: '',
    imageSrc: '/images/grammar.webp',
    imageAlt: 'Preview modul grammar GEUWAT',
  },
  {
    label: 'GEUWAT',
    title: 'Robot GEUWAT',
    description:
      'Asisten pribadi yang selalu siap membantu. Cukup ketik perintah singkat untuk navigasi, kuis, atau tanya jawab instan.',
    imageSrc: '/images/bot.webp',
    imageAlt: 'Preview robot GEUWAT',
  },
  {
    label: 'PROGRESS TRACKER',
    title: 'Progress Tracker',
    description:
      'Visualisasikan kemajuanmu setiap hari. Pantau perkembangan tiap skill agar kamu tahu kapan harus melangkah lebih jauh.',
    imageSrc: '/images/progress.webp',
    imageAlt: 'Preview progress tracker GEUWAT',
  },
] as const satisfies ReadonlyArray<TrustChip>
type TrustChipLabel = (typeof TRUST_CHIPS)[number]['label']

export default function FeaturePreviewCarousel() {
  const [selectedChipIndex, setSelectedChipIndex] = useState(0)
  const selectedChip = TRUST_CHIPS[selectedChipIndex] ?? TRUST_CHIPS[0]

  const [captionChipIndex, setCaptionChipIndex] = useState(0)
  const captionChip = TRUST_CHIPS[captionChipIndex] ?? TRUST_CHIPS[0]
  const [captionPhase, setCaptionPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const captionTimeoutRef = useRef<number | null>(null)
  const captionSwapTimeoutRef = useRef<number | null>(null)

  const captionChipBonus = 'bonus' in captionChip ? captionChip.bonus : undefined
  const bonusText = captionChipBonus ?? ''
  const bonusPrefix = bonusText.startsWith('Bonus:') ? 'Bonus:' : ''
  const bonusBody = bonusPrefix ? bonusText.slice(bonusPrefix.length).trimStart() : bonusText

  const renderChipTitle = (title: string) => {
    const token = '(Bonus)'
    const idx = title.indexOf(token)
    if (idx === -1) return title

    const before = title.slice(0, idx).trimEnd()
    const after = title.slice(idx + token.length)

    return (
      <>
        {before} <span className="conversion-bonus-tag">{token}</span>
        {after}
      </>
    )
  }

  const carouselRef = useRef<HTMLDivElement | null>(null)
  const selectedChipIndexRef = useRef(0)
  const scrollRafRef = useRef<number | null>(null)

  useEffect(() => {
    selectedChipIndexRef.current = selectedChipIndex
  }, [selectedChipIndex])

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

    const outTimeout = window.setTimeout(() => {
      setCaptionPhase('out')
    }, 0)

    captionSwapTimeoutRef.current = window.setTimeout(() => {
      captionSwapTimeoutRef.current = null
      setCaptionChipIndex(selectedChipIndex)
      setCaptionPhase('in')

      captionTimeoutRef.current = window.setTimeout(() => {
        captionTimeoutRef.current = null
        setCaptionPhase('idle')
      }, 180)
    }, 120)

    return () => window.clearTimeout(outTimeout)
  }, [captionChipIndex, selectedChipIndex])

  const scrollToChipIndex = (nextIndex: number, behavior: ScrollBehavior = 'smooth') => {
    const carouselEl = carouselRef.current
    if (!carouselEl) return

    const chipCount = TRUST_CHIPS.length
    const slideWidth = carouselEl.clientWidth || 1

    const normalizedIndex = ((nextIndex % chipCount) + chipCount) % chipCount

    const isWrapJump = nextIndex < 0 || nextIndex >= chipCount
    const nextLeft = normalizedIndex * slideWidth
    if (typeof carouselEl.scrollTo === 'function') {
      carouselEl.scrollTo({ left: nextLeft, behavior: isWrapJump ? 'auto' : behavior })
    } else {
      carouselEl.scrollLeft = nextLeft
    }
    setSelectedChipIndex(normalizedIndex)
  }

  useEffect(() => {
    scrollToChipIndex(selectedChipIndexRef.current, 'auto')

    const handleResize = () => scrollToChipIndex(selectedChipIndexRef.current, 'auto')
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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

  return (
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
          <h3 className="conversion-chip-caption-title">{renderChipTitle(captionChip.title)}</h3>
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
            {'\u2039'}
          </button>
          <button
            type="button"
            className="conversion-carousel-btn conversion-carousel-btn--next"
            onClick={() => scrollToChipIndex(selectedChipIndexRef.current + 1)}
            aria-label="Preview berikutnya"
          >
            {'\u203A'}
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
              <Image src={chip.imageSrc} alt={chip.imageAlt} fill sizes="(max-width: 768px) 100vw, 720px" priority={index === 0} />
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
  )
}
