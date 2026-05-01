import React from 'react'

interface IntroductionProps {
  backToMenu: () => void
  isActive: boolean
}

export default function Introduction({ backToMenu, isActive }: IntroductionProps) {
  const BRAND = 'GEUWAT' as const

  return (
    <>
      <button className="back-btn" onClick={backToMenu}>Kembali ke Menu</button>

      <div
        className="intro-hero"
        aria-label={`${BRAND} Peduli (Coming Soon)`}
        data-active={isActive ? 'true' : 'false'}
      >
        <div className="intro-hero-content">
          <span className="intro-badge">COMING SOON</span>
          <h1 className="intro-headline">{BRAND} Peduli</h1>
          <p className="intro-subtext">Bekal Nyata untuk Karier Pendidikan Pengajar Bahasa Inggris</p>
          <p className="intro-subtext" style={{ marginTop: 12 }}>
            Berbagi, Membangun Mimpi: Kelas Bahasa Inggris untuk Panti Asuhan
          </p>
        </div>

        <div className="intro-hero-visual" aria-hidden="true">
          <div className="intro-orb"></div>
        </div>
      </div>
    </>
  )
}




