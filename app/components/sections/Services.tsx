'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import FeaturePreviewCarousel from './FeaturePreviewCarousel'
import { FAQ_ITEMS } from './faq-items'

interface ServicesProps {
  backToMenu?: () => void
  isActive?: boolean
  standalone?: boolean
}

export default function Services({ backToMenu, isActive = true, standalone = false }: ServicesProps) {
  const BRAND = 'GEUWAT' as const
  const WHATSAPP_CHAT_URL = 'https://wa.me/6285846003119' as const
  type SupportFaqCategory = 'all' | 'mulai' | 'akun' | 'batch' | 'pembayaran' | 'update' | 'akses'

  const SUPPORT_FAQ_CATEGORIES: ReadonlyArray<{ key: SupportFaqCategory; label: string }> = [
    { key: 'all', label: 'Semua' },
    { key: 'mulai', label: 'Mulai' },
    { key: 'akun', label: 'Akun' },
    { key: 'batch', label: 'Batch' },
    { key: 'pembayaran', label: 'Pembayaran' },
    { key: 'update', label: 'Update' },
    { key: 'akses', label: 'Akses' },
  ]

  const SUPPORT_FAQ_QUESTION_SETS: Record<Exclude<SupportFaqCategory, 'all'>, ReadonlySet<string>> = {
    mulai: new Set([
      'Apakah GEUWAT cocok untuk pemula?',
      'Materi apa saja yang tersedia?',
      'Bagaimana cara daftarnya?',
    ]),
    akun: new Set([
      'Apakah akun saya bisa diperjualbelikan atau dipindahtangankan?',
      'Mengapa login dibagi menjadi 4 halaman berbeda?',
      'Saya lupa login di Batch mana, apa yang harus saya lakukan?',
    ]),
    batch: new Set([
      'Apa perbedaan antara User Trial dan User Berbayar?',
      'Bagaimana jika saya sedang Trial dan Batch tiba-tiba penuh?',
      'Kapan Batch selanjutnya dibuka?',
      'Kapan kompetisi bahasa Inggris dengan hadiah uang pembinaan dimulai?',
      'Siapa yang berhak mengikuti lomba?',
    ]),
    pembayaran: new Set([
      'Sekali bayar atau langganan?',
      'Bagaimana cara upgrade dari Trial ke akses penuh?',
    ]),
    update: new Set(['Di mana saya bisa melihat update sisa kuota dan pembukaan Batch?']),
    akses: new Set(['Bisa diakses di HP?']),
  }

  const [activeTab, setActiveTab] = React.useState<'modul' | 'desain' | 'konsultasi' | 'dukungan' | 'update'>('modul')
  const [showPronunciationTopics, setShowPronunciationTopics] = React.useState(false)
  const [activeSupportFaqCategory, setActiveSupportFaqCategory] = React.useState<SupportFaqCategory>('all')
  const coreLearningModules = [
    'Pengucapan',
    'Kosakata',
    'Tata Bahasa',
    'Speaking',
    'Learning Path',
    'Progres',
    'Tutorial',
    'Achievement',
  ] as const
  const subjectModules = [
    {
      label: 'Pronunciation',
      imageSrc: '/images/pronunciation.webp',
      imageAlt: 'Preview modul pronunciation',
      shortDesc: 'Tujuan belajarnya adalah melatih pengucapan agar lebih jelas, natural, dan mudah dipahami.',
      locked: false,
    },
    {
      label: 'Vocabulary',
      imageSrc: '/images/vocabulary.webp',
      imageAlt: 'Preview modul vocabulary',
      shortDesc: 'Tujuan belajarnya adalah menambah kosakata aktif yang langsung bisa kamu pakai dalam komunikasi harian.',
      locked: false,
    },
    {
      label: 'Grammar',
      imageSrc: '/images/grammar.webp',
      imageAlt: 'Preview modul grammar',
      shortDesc: 'Tujuan belajarnya adalah menyusun kalimat yang lebih tepat, rapi, dan sesuai konteks.',
      locked: false,
    },
    {
      label: 'Speaking',
      imageSrc: '/images/speaking.webp',
      imageAlt: 'Preview modul speaking',
      shortDesc: 'Tujuan belajarnya adalah meningkatkan kelancaran bicara lewat latihan dialog bertahap.',
      locked: false,
    },
  ] as const
  const pronunciationTopics = [
    { title: 'Alphabet', shortDesc: 'Tujuan belajarnya adalah menguasai bunyi huruf A-Z dengan pelafalan yang konsisten.', locked: false },
    { title: 'Phonetic Symbols', shortDesc: 'Tujuan belajarnya adalah membaca simbol IPA untuk meniru bunyi kata dengan lebih akurat.', locked: false },
    { title: 'Stressing', shortDesc: 'Tujuan belajarnya adalah menempatkan tekanan suku kata agar ritme bicara terdengar natural.', locked: false },
    { title: 'Final Sound', shortDesc: 'Tujuan belajarnya adalah melafalkan bunyi akhir kata dengan jelas agar makna tidak berubah.', locked: false },
    { title: 'American /t/', shortDesc: 'Tujuan belajarnya adalah membedakan pola bunyi /t/ Amerika sesuai posisi kata dalam kalimat.', locked: false },
    { title: 'Connected Speech', shortDesc: 'Tujuan belajarnya adalah memahami sambungan bunyi antarkata saat berbicara cepat.', locked: true },
  ]

  React.useEffect(() => {
    if (!isActive) {
      setActiveTab('modul')
      setShowPronunciationTopics(false)
      setActiveSupportFaqCategory('all')
    }
  }, [isActive])

  return (
    <>
      {standalone ? (
        <Link className="back-btn" href="/">Kembali ke Menu</Link>
      ) : (
        <button className="back-btn" onClick={backToMenu ?? (() => {})}>Kembali ke Menu</button>
      )}
      
      <div className="section-header">
        <h2 className="section-title">Fitur Kami</h2>
        <p className="section-subtitle">Fitur utama untuk Digital Learning yang menyeluruh</p>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'modul' ? 'active' : ''}`}
            onClick={() => setActiveTab('modul')}
            type="button"
          >
            Modul Digital
          </button>
          <button
            className={`tab-btn ${activeTab === 'desain' ? 'active' : ''}`}
            onClick={() => setActiveTab('desain')}
            type="button"
          >
            Desain
          </button>
          <button
            className={`tab-btn ${activeTab === 'konsultasi' ? 'active' : ''}`}
            onClick={() => setActiveTab('konsultasi')}
            type="button"
          >
            Konsultasi
          </button>
          <button
            className={`tab-btn ${activeTab === 'dukungan' ? 'active' : ''}`}
            onClick={() => setActiveTab('dukungan')}
            type="button"
          >
            Dukungan
          </button>
          <button
            className={`tab-btn ${activeTab === 'update' ? 'active' : ''}`}
            onClick={() => setActiveTab('update')}
            type="button"
          >
            Update
          </button>
        </div>
        
        {activeTab === 'modul' && (
          <div className="tab-pane active">
            <div className="intro-hero">
              <div className="intro-hero-content">
                <h3 className="intro-headline">
                  Intinya {BRAND}, menjadi variabel
                  <br />
                  <span>dalam takdirmu, that&apos;s simple</span>
                </h3>
                <p className="intro-subtext">
                  Platform khusus dengan jalur pengucapan, kosakata, tata bahasa, speaking, pelacakan progres serta
                  learning path terarah.
                </p>
              </div>
              <div className="intro-hero-visual" aria-hidden="true">
                <div className="intro-floating-card card-1">
                  <span className="card-text">Pengucapan?</span>
                </div>
                <div className="intro-floating-card card-2">
                  <span className="card-text">Kosakata?</span>
                </div>
                <div className="intro-floating-card card-3">
                  <span className="card-text">Tata Bahasa?</span>
                </div>
                <div className="intro-floating-card card-4">
                  <span className="card-text">Speaking?</span>
                </div>
                <div className="intro-orb"></div>
              </div>
            </div>

            <div className="intro-values" aria-label="Keuntungan">
              <div className="value-card">
                <div className="value-number">01</div>
                <h3>Jalur Personal</h3>
                <p>Tentukan tujuanmu dan dapatkan learning path terstruktur sesuai target bahasa Inggrismu.</p>
              </div>
              <div className="value-card">
                <div className="value-number">02</div>
                <h3>Modul Skill</h3>
                <p>Fokus pada pengucapan, kosakata, tata bahasa, dan speaking dengan pembelajaran terarah.</p>
              </div>
              <div className="value-card">
                <div className="value-number">03</div>
                <h3>Akses Aman</h3>
                <p>Akses khusus member dengan keamanan perangkat menjaga data belajarmu tetap aman dan konsisten.</p>
              </div>
            </div>

            <FeaturePreviewCarousel />

            <div className="services-subject-grid">
              {subjectModules.map(({ label, imageSrc, imageAlt, shortDesc, locked }) => (
                <div
                  key={label}
                  className={`services-subject-card${locked ? ' locked' : ''}`}
                  {...(label === 'Pronunciation'
                    ? {
                        role: 'button',
                        tabIndex: 0,
                        onClick: () => setShowPronunciationTopics((prev) => !prev),
                        onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            setShowPronunciationTopics((prev) => !prev)
                          }
                        },
                      }
                    : {})}
                >
                  <div
                    className={`services-module-tag ${
                      label === 'Pronunciation' ? 'services-module-tag-focus' : 'services-module-tag-bonus'
                    }`}
                  >
                    {label === 'Pronunciation' ? 'FOCUS' : 'BONUS'}
                  </div>
                  <div className="services-module-image">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <h4>{label}</h4>
                  <p>{shortDesc}</p>
                  {label === 'Pronunciation' && (
                    <div className="services-topic-toggle">
                      {showPronunciationTopics ? 'Sembunyikan topik' : 'Lihat topik'}
                    </div>
                  )}
                  {locked && <span className="services-locked">soon</span>}
                  {label === 'Pronunciation' && (
                    <div className={`services-topic-dropdown${showPronunciationTopics ? ' show' : ''}`}>
                      <ul className="services-topic-list">
                        {pronunciationTopics.map((topic) => (
                          <li key={topic.title} className={topic.locked ? 'locked' : ''}>
                            <span className="topic-title">{topic.title}</span>
                            <span className="topic-desc">{topic.shortDesc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="intro-tech">
              <p className="tech-label">Modul Inti Pembelajaran</p>
              <div className="tech-marquee">
                <div className="tech-track">
                  {coreLearningModules.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                  {coreLearningModules.map((tech, index) => (
                    <span key={`dup-${index}`} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'desain' && (
          <div className="tab-pane active">
            <div className="services-design-grid">
              <div className="services-subject-card">
                <h4>Laptop</h4>
                <p>Desain responsif optimal untuk layar desktop dan laptop.</p>
                <div className="services-video" aria-label="Video desain laptop">
                  <iframe
                    src="https://www.youtube.com/embed/33JP1F-lfAs"
                    title="Desain Laptop"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="services-subject-card">
                <h4>HP</h4>
                <p>Tampilan mobile yang ringan, ringkas, dan mudah dinavigasi.</p>
                <div className="services-video" aria-label="Video desain HP">
                  <iframe
                    src="https://www.youtube.com/embed/FMD3y8bXcZ8"
                    title="Desain HP"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'konsultasi' && (
          <div className="tab-pane active">
            <div className="glass-card" aria-label="Konsultasi via WhatsApp">
              <h3 style={{ marginTop: 0 }}>Konsultasi</h3>
              <p style={{ marginTop: 8, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                Butuh arahan cepat soal modul dan alur belajar? Chat langsung via WhatsApp.
              </p>
              <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="intro-cta-primary"
                  style={{ textDecoration: 'none' }}
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dukungan' && (
          <div className="tab-pane active">
            <div className="conversion-faq" aria-label={`Pertanyaan umum ${BRAND}`}>
              <div className="conversion-preview-head">
                <div className="conversion-preview-copy">
                  <h3 className="conversion-preview-title">Pertanyaan Umum</h3>
                  <p className="conversion-preview-subtitle">Jawaban cepat untuk hal-hal yang paling sering ditanyakan.</p>
                </div>
              </div>

              <div className="services-support-categories" role="tablist" aria-label="Kategori pertanyaan umum">
                {SUPPORT_FAQ_CATEGORIES.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    role="tab"
                    aria-selected={activeSupportFaqCategory === category.key}
                    className={`services-support-cat${activeSupportFaqCategory === category.key ? ' is-active' : ''}`}
                    onClick={() => setActiveSupportFaqCategory(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="conversion-faq-list" role="list" aria-label="Daftar pertanyaan umum">
                {(activeSupportFaqCategory === 'all'
                  ? FAQ_ITEMS
                  : FAQ_ITEMS.filter((item) => SUPPORT_FAQ_QUESTION_SETS[activeSupportFaqCategory].has(item.question))
                ).map((item) => (
                  <details key={item.question} className="conversion-faq-item" role="listitem">
                    <summary className="conversion-faq-question">{item.question}</summary>
                    <div className="conversion-faq-answer">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'update' && (
          <div className="tab-pane active">
            <SocialMedia trackLocation="services_update" />
          </div>
        )}
      </div>
    </>
  )
}
