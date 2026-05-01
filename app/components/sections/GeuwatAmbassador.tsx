import React from 'react'

interface GeuwatAmbassadorProps {
  backToMenu: () => void
  isActive: boolean
}

export default function GeuwatAmbassador({ backToMenu, isActive }: GeuwatAmbassadorProps) {
  return (
    <>
      <button className="back-btn" onClick={backToMenu}>
        Kembali ke Menu
      </button>

      <div className="section-header">
        <h2 className="section-title">GEUWAT AMBASSADOR</h2>
        <p className="section-subtitle">Program kolaborasi dan komunitas GEUWAT.</p>
      </div>

      <div
        className="intro-hero"
        aria-label="GEUWAT AMBASSADOR (Coming Soon)"
        data-active={isActive ? 'true' : 'false'}
      >
        <div className="intro-hero-content">
          <span className="intro-badge">COMING SOON</span>
          <h3 className="intro-headline">GEUWAT AMBASSADOR</h3>
          <p className="intro-subtext">Halaman ambassador sedang kami siapkan. Nantinya berisi syarat, benefit, dan cara daftar.</p>
        </div>

        <div className="intro-hero-visual" aria-hidden="true">
          <div className="intro-orb"></div>
        </div>
      </div>
    </>
  )
}

