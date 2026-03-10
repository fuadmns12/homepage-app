import React from 'react'
import Image from 'next/image'

interface ServicesProps {
  backToMenu: () => void
  isActive: boolean
}

export default function Services({ backToMenu, isActive }: ServicesProps) {
  const [activeTab, setActiveTab] = React.useState<'modul' | 'desain' | 'konsultasi' | 'dukungan'>('modul')
  const [showPronunciationTopics, setShowPronunciationTopics] = React.useState(false)
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
    }
  }, [isActive])

  return (
    <>
      <button className="back-btn" onClick={backToMenu}>Kembali ke Menu</button>
      
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
        </div>
        
        {activeTab === 'modul' && (
          <div className="tab-pane active">
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
            <div className="services-empty">Konten konsultasi segera hadir.</div>
          </div>
        )}

        {activeTab === 'dukungan' && (
          <div className="tab-pane active">
            <div className="services-empty">Konten dukungan segera hadir.</div>
          </div>
        )}
      </div>
    </>
  )
}
