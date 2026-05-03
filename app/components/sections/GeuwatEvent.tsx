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

        <div className="intro-hero-visual" aria-hidden="true" style={{ position: 'relative' }}>
          <div className="intro-orb" style={{ opacity: 0.5 }}></div>
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}>
            <img 
              src="/Logo-riwayat-kursus/geuwat-tower.png" 
              alt="Geuwat Event Terkunci" 
              style={{
                width: '80%',
                height: 'auto',
                maxHeight: '100%',
                objectFit: 'contain',
                opacity: 0.4,
                filter: 'grayscale(50%) drop-shadow(0 0 20px rgba(0,0,0,0.5))'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

