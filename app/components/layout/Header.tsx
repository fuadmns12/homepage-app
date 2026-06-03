'use client'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Image src="/rasio_1_1_2K_202606030906.webp" alt="GEUWAT logo" width={160} height={160} />
      </div>
      <p className="brand-name">GEUWAT</p>
      <p className="tagline">Website Belajar Bahasa Inggris</p>
    </div>
  )
}
