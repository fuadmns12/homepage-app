'use client'

import Image from 'next/image'
import Link from 'next/link'

interface GalleryProps {
  backToMenu?: () => void
  standalone?: boolean
}

export default function Gallery({ backToMenu, standalone = false }: GalleryProps) {
  return (
    <>
      {standalone ? (
        <Link className="back-btn" href="/">Kembali ke Menu</Link>
      ) : (
        <button className="back-btn" onClick={backToMenu ?? (() => {})}>Kembali ke Menu</button>
      )}
      
      <div className="section-header">
        <h2 className="section-title">Galeri Kami</h2>
        <p className="section-subtitle">Menampilkan program dan pencapaian terbaik</p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          <Image src="/images/view.webp" alt="Preview Tampilan" width={1634} height={524} />
          <div className="gallery-overlay">
            <h4>Preview Tampilan</h4>
            <p>Desain responsif untuk desktop dan HP</p>
          </div>
        </div>
      </div>
    </>
  )
}




