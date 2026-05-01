import React from 'react'

interface GeuwatEventProps {
  backToMenu: () => void
  isActive: boolean
}

export default function GeuwatEvent({ backToMenu, isActive }: GeuwatEventProps) {
  return (
    <>
      <button className="back-btn" onClick={backToMenu}>
        Kembali ke Menu
      </button>

      <div className="section-header">
        <h2 className="section-title">GEUWAT EVENT</h2>
        <p className="section-subtitle">Info event, agenda, dan pengumuman.</p>
      </div>

      <div className="intro-hero" aria-label="GEUWAT EVENT (Coming Soon)" data-active={isActive ? 'true' : 'false'}>
        <div className="intro-hero-content">
          <span className="intro-badge">COMING SOON</span>
          <h3 className="intro-headline">GEUWAT EVENT</h3>
          <p className="intro-subtext">Halaman event sedang kami siapkan. Pantau tab Update untuk info terbaru.</p>
        </div>

        <div className="intro-hero-visual" aria-hidden="true">
          <div className="intro-orb"></div>
        </div>
      </div>
    </>
  )
}

