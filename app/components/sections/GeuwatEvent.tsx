import React, { useState } from 'react'

interface GeuwatEventProps {
  backToMenu: () => void
  isActive: boolean
}

export default function GeuwatEvent({ backToMenu, isActive }: GeuwatEventProps) {
  const [showTutorial, setShowTutorial] = useState(false)
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

      <h3 style={{ textAlign: 'center', color: '#00ffff', marginTop: '2rem', fontSize: '1.5rem', fontWeight: '600' }}>
        GEUWAT TOWER
      </h3>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href="https://geuwat-tower.netlify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8), 0 6px 16px rgba(0, 0, 0, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            <img
              src="/GEUWAT-TOWER-BUILD.jpeg"
              alt="Login ke Geuwat Tower"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </a>
          <span style={{ fontSize: '0.75rem', color: '#e0e0e0', fontWeight: '500' }}>Login</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setShowTutorial(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.8), 0 6px 16px rgba(0, 0, 0, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2"/>
              <path d="M12 16V12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 8H12.01" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <span style={{ fontSize: '0.75rem', color: '#e0e0e0', fontWeight: '500' }}>Petunjuk</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href="https://docs.google.com/spreadsheets/d/1mvYokNQwpEQV9XwGD9_Yj5rejW4lkZNe/edit?usp=sharing&ouid=115056304457337211926&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#000000',
              boxShadow: '0 0 20px rgba(0, 200, 83, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 200, 83, 0.8), 0 6px 16px rgba(0, 0, 0, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 200, 83, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 13H16" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 17H16" stroke="#0F9D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <span style={{ fontSize: '0.75rem', color: '#e0e0e0', fontWeight: '500' }}>Data Sheets</span>
        </div>
      </div>

      {showTutorial && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowTutorial(false)}
        >
          <div
            style={{
              backgroundColor: '#1a1a2e',
              padding: '2rem',
              borderRadius: '1rem',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
              Petunjuk Akses
            </h3>
            <div style={{ color: '#e0e0e0', lineHeight: '1.8', fontSize: '1rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#00ffff' }}>1.</strong> Klik tombol dengan gambar Geuwat Tower untuk mengakses halaman login.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#00c853' }}>2.</strong> Gunakan akun yang terdaftar di Google Sheets untuk proses autentikasi.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowTutorial(false)}
              style={{
                backgroundColor: '#00ffff',
                color: '#0b0b12',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00cccc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#00ffff'
              }}
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  )
}

