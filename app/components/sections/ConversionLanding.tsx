'use client'

import { useEffect, useRef, useState } from 'react'
import HomeTrustProof from './HomeTrustProof'
import OriginEvolutionSynergy from './OriginEvolutionSynergy'
import SocialMedia from './SocialMedia'
import FeaturePreviewCarousel from './FeaturePreviewCarousel'
import { FAQ_ITEMS } from './faq-items'
import { trackCtaClick } from '@/lib/analytics'
import Link from 'next/link'

interface ConversionLandingProps {
  onOpenFeatureHub: () => void
}

export default function ConversionLanding({ onOpenFeatureHub }: ConversionLandingProps) {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(0)

  const [faqDisplayIndex, setFaqDisplayIndex] = useState(0)
  const faqDisplayItem = FAQ_ITEMS[faqDisplayIndex] ?? FAQ_ITEMS[0]
  const [faqPhase, setFaqPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const faqTimeoutRef = useRef<number | null>(null)
  const faqSwapTimeoutRef = useRef<number | null>(null)

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

    const outTimeout = window.setTimeout(() => {
      setFaqPhase('out')
    }, 0)

    faqSwapTimeoutRef.current = window.setTimeout(() => {
      faqSwapTimeoutRef.current = null
      setFaqDisplayIndex(selectedFaqIndex)
      setFaqPhase('in')

      faqTimeoutRef.current = window.setTimeout(() => {
        faqTimeoutRef.current = null
        setFaqPhase('idle')
      }, 180)
    }, 120)

    return () => window.clearTimeout(outTimeout)
  }, [faqDisplayIndex, selectedFaqIndex])

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
          Fokus di GEUWAT cuma satu: Bikin lidahmu fasih dengan sistem pelafalan yang akurat. Begitu paham polanya, kamu
          bakal bisa cari dan ucapkan kata apa pun sendiri.
          <br />
          Materi grammar &amp; kosakata? Tenang, itu bonus buat bantu progresmu.
        </p>

        <div className="conversion-pricing-wrap">
          <p className="conversion-price-main conversion-price-stack">
            <span className="conversion-price-label">Akun Belajar GEUWAT</span>
            <span className="conversion-price-value">
              <span className="conversion-price-highlight">Rp169.000</span>
            </span>
            <span className="conversion-price-duration">
              Edisi Terbatas
              <br />
              Hanya Tersedia untuk <span className="conversion-inline-red">150</span> Akun
            </span>
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

        <div className="conversion-secondary-row" aria-label="Diskon GEUWAT Ambassador">
          <a
            href="https://discord.gg/kpPQHW7gFA"
            target="_blank"
            rel="noopener noreferrer"
            className="conversion-secondary-link"
            onClick={() =>
              trackCtaClick('hero_ambassador_discount', {
                location: 'conversion_landing',
                target: 'https://discord.gg/kpPQHW7gFA',
              })
            }
          >
            Dapatkan Rekomendasi dari GEUWAT Ambassador untuk mendapatkan diskon{' '}
            <span className="conversion-inline-accent">5-10%</span>
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

        <FeaturePreviewCarousel />

        <div className="conversion-secondary-row">
          <button type="button" className="conversion-secondary-link" onClick={handleOpenFeatureHub}>
            Lihat fitur selengkapnya
          </button>
        </div>
      </div>

      <HomeTrustProof />
      <OriginEvolutionSynergy />
      <SocialMedia />
    </section>
  )
}
