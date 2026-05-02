import React from 'react'
import Link from 'next/link'

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
        aria-label="GEUWAT AMBASSADOR"
        data-active={isActive ? 'true' : 'false'}
      >
        <div className="intro-hero-content">
          <span className="intro-badge">DAFTAR AMBASSADOR</span>
          <h3 className="intro-headline">Pendaftaran GEUWAT Ambassador</h3>
          <p className="intro-subtext">
            Pilih kategori usia untuk membuka halaman pendaftaran (Google Form).
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14 }} aria-label="Tab pendaftaran">
            <Link href="/geuwat-ambassador/18-plus" className="conversion-secondary-link">
              GEUWAT Ambassador +18
            </Link>
            <Link href="/geuwat-ambassador/under-18" className="conversion-secondary-link">
              GEUWAT Ambassador &lt;18
            </Link>
          </div>
        </div>

        <div className="intro-hero-visual" aria-hidden="true">
          <div className="intro-orb"></div>
        </div>
      </div>
    </>
  )
}

