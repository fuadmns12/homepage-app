'use client'

import { useEffect, useRef, useState } from 'react'
import HomeTrustProof from './HomeTrustProof'
import OriginEvolutionSynergy from './OriginEvolutionSynergy'
import SocialMedia from './SocialMedia'
import FeaturePreviewCarousel from './FeaturePreviewCarousel'
import { FAQ_ITEMS } from './faq-items'
import { trackCtaClick } from '@/lib/analytics'

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
          <span className="conversion-hook-line">Ketika Kamu Mulai dari Nol</span>
          <span className="conversion-hook-line">Dan Waktu Tak Pernah Longgar</span>
          <span className="conversion-hook-line conversion-hook-line--accent">
            GEUWAT Susun Jalannya Untuk Kamu Belajar Bahasa Inggris
          </span>
        </h1>

        <p className="conversion-subtitle">
          Fokus di GEUWAT cuma satu: Bikin lidahmu fasih dengan sistem pelafalan yang akurat Begitu paham polanya, kamu
          bakal bisa cari dan ucapkan kata apa pun sendiri
          <br />
          Materi grammar &amp; kosakata? Tenang, itu bonus buat bantu progresmu
        </p>

        <div className="conversion-video-wrapper">
          <div className="conversion-video-border">
            <div className="conversion-video-inner">
              <iframe
                src="https://www.youtube.com/embed/tVR6EhKQruE"
                title="Belajar Bahasa Inggris - GEUWAT Versi 1.7.1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="conversion-pricing-wrap">
          <p className="conversion-price-main conversion-price-stack">
            <span className="conversion-price-label">Akun Belajar GEUWAT</span>
            <span className="conversion-price-value">
              <span className="conversion-price-highlight">Rp26.900</span>
            </span>
            <span className="conversion-price-duration">
              Akses Sebulan
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

        <div className="conversion-secondary-row" aria-label="Grup WhatsApp GEUWAT">
          <a
            href="https://chat.whatsapp.com/JLaBgBoQM5zB5KNfSfEaCI"
            target="_blank"
            rel="noopener noreferrer"
            className="conversion-secondary-link"
            style={{ textAlign: 'center', textDecoration: 'none' }}
            onClick={() =>
              trackCtaClick('hero_whatsapp_group', {
                location: 'conversion_landing',
                target: 'https://chat.whatsapp.com/JLaBgBoQM5zB5KNfSfEaCI',
              })
            }
          >
            Dapatkan lebih banyak BONUS termasuk diskon{' '}
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
      <section className="conversion-map-section glass-card conversion-map-target" aria-label="Peta lokasi GEUWAT">
        <div className="conversion-map-copy">
          <h2 className="conversion-map-title">Temukan Lokasi Kami</h2>
          <p className="conversion-map-subtitle">
            Ikuti update dan konten terbaru dari GEUWAT. Lihat lokasi kami dan arahkan perjalananmu melalui peta.
          </p>
          <div className="conversion-map-frame conversion-video-border">
            <div className="conversion-video-inner">
              <iframe
                title="Peta Lokasi GEUWAT"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253738.11083192806!2d106.71481300000002!3d-6.437953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57f45477a60b%3A0x22821d6a0b620788!2sEnglish%20GEUWAT%20Tasikmalaya!5e0!3m2!1sid!2sus!4v1782205757441!5m2!1sid!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/uLuuKgE83R7CpJ9z9"
            target="_blank"
            rel="noopener noreferrer"
            className="conversion-map-link"
          >
            Buka di Google Maps
          </a>
        </div>
      </section>
      <SocialMedia />
    </section>
  )
}
