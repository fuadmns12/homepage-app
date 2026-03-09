interface ContactProps {
  backToMenu: () => void
}

export default function Contact({ backToMenu }: ContactProps) {
  return (
    <>
      <button className="back-btn" onClick={backToMenu}>Kembali ke Menu</button>
      
      <div className="section-header">
        <h2 className="section-title">Kontak</h2>
        <p className="section-subtitle">Hubungi tim GEUWAT</p>
      </div>

      <div className="contact-grid">
        <div className="contact-form">
          <h3>Mulai Sekarang</h3>
          <p>Gabung dan mulai belajar bersama GEUWAT</p>
          <div className="conversion-price-main conversion-price-stack">
            <span className="conversion-price-label">Upgrade Diri</span>
            <span className="conversion-price-value">
              <span className="conversion-price-highlight">Rp149.000</span>
            </span>
            <span className="conversion-price-duration">Akses penuh, sekali investasi.</span>
          </div>
          <div className="glass-card">
            <a href="/register" className="intro-cta-primary" style={{display: 'block', textAlign: 'center', marginBottom: '15px'}}>
              Daftar Sekarang
            </a>
            <a href="https://learningenglishgeuwat.vercel.app" className="intro-cta-secondary" style={{display: 'block', textAlign: 'center'}}>
              Login to Account
            </a>
          </div>
        </div>
        <div className="glass-card">
          <h3>Kontak Cepat</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <a
              href="https://wa.me/6285846003119"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'var(--primary)', textDecoration: 'none'}}
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/learningenglishgeuwat/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'var(--primary)', textDecoration: 'none'}}
            >
              Instagram
            </a>
            <span style={{color: 'var(--primary)'}}>
              learningenglishgeuwat@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
