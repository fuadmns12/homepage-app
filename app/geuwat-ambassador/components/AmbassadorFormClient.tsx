'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import AmbassadorTermsModal from './AmbassadorTermsModal'

type AmbassadorFormVariant = '18-plus' | 'under-18'

const ADMIN_WA = '6285846003119'

export default function AmbassadorFormClient({ variant }: { variant: AmbassadorFormVariant }) {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const normalizedEmail = email.trim()
  const hasEmail = normalizedEmail.length > 0

  const whatsappHref = useMemo(() => {
    const baseMessage =
      variant === '18-plus'
        ? 'Halo Admin GEUWAT, saya sudah mengisi form pendaftaran GEUWAT Ambassador +18. Mohon verifikasi pendaftaran saya.'
        : 'Halo Admin GEUWAT, saya sudah mengisi form pendaftaran GEUWAT Ambassador <18. Mohon verifikasi pendaftaran saya.'

    const message = hasEmail ? `${baseMessage}\n\nEmail: ${normalizedEmail}` : baseMessage
    return `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`
  }, [hasEmail, normalizedEmail, variant])

  return (
    <>
      <div className="glass-card" style={{ padding: 18 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ paddingTop: 0, marginBottom: 6 }}>
              {variant === '18-plus' ? 'GEUWAT Ambassador +18' : 'GEUWAT Ambassador <18'}
            </h2>
            <p className="section-subtitle">Isi form, lalu lanjutkan verifikasi via WhatsApp.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
              <button
                type="button"
                onClick={() => setIsTermsOpen(true)}
                className="conversion-secondary-link"
                style={{ width: 'fit-content' }}
              >
                Baca Ketentuan dan Kebijakan Privasi
              </button>
              {variant === 'under-18' && (
                <a
                  href="https://docs.google.com/document/d/1x8XbezNFF59Uvq5OePJ8MtVPyktnvlBT/edit?usp=sharing&ouid=115056304457337211926&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                  className="conversion-secondary-link"
                  style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Surat Izin Orang Tua
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Tab pendaftaran" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Link href="/geuwat-ambassador/18-plus" className="conversion-secondary-link">
              +18
            </Link>
            <Link href="/geuwat-ambassador/under-18" className="conversion-secondary-link">
              &lt;18
            </Link>
          </nav>
        </div>
      </div>

      {!hasSubmitted ? (
        <div className="glass-card" style={{ padding: 18, marginTop: 14 }}>
          <div style={{ display: 'grid', gap: 14 }}>
            {variant === '18-plus' ? (
              <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <iframe
                  title="Form Pendaftaran GEUWAT Ambassador +18"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfOU6eWYSSb04n-SpvUpCS4a9pvD78gRUwM_EJjEWw3USo6vQ/viewform?embedded=true"
                  width="100%"
                  height={1864}
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                >
                  Memuat…
                </iframe>
              </div>
            ) : (
              <div className="glass-card" style={{ padding: 16 }}>
                <p className="section-subtitle" style={{ marginBottom: 10 }}>
                  Silakan isi form pendaftaran dengan klik tombol di bawah ini.
                </p>
                <a
                  href="https://forms.gle/BTA8sutVkfTzBAis9"
                  target="_blank"
                  rel="noreferrer"
                  className="intro-cta-primary conversion-primary-cta"
                  style={{ textDecoration: 'none', width: 'fit-content' }}
                >
                  Buka Google Form &lt;18
                </a>
              </div>
            )}

            <div style={{ display: 'grid', gap: 10 }}>
              <label style={{ display: 'grid', gap: 6, width: 'min(520px, 100%)' }}>
                <span className="section-subtitle" style={{ marginBottom: 0 }}>
                  Silahkan masukkan email yang didaftarkan
                </span>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="contoh: nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    borderRadius: 12,
                    padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(0,0,0,0.18)',
                    color: 'inherit',
                    outline: 'none',
                  }}
                />
              </label>

              <button
                type="button"
                className="intro-cta-primary conversion-primary-cta"
                onClick={() => {
                  window.open(whatsappHref, '_blank')
                  setHasSubmitted(true)
                }}
                disabled={!hasEmail}
                style={{
                  width: 'fit-content',
                  opacity: !hasEmail ? 0.6 : 1,
                  cursor: !hasEmail ? 'not-allowed' : 'pointer',
                }}
              >
                Konfirmasi Pengaktifan Akun
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card" style={{ padding: 18, marginTop: 14 }}>
          <h3 className="section-title" style={{ paddingTop: 0, marginBottom: 6 }}>
            Verifikasi Pendaftaran
          </h3>
          <p className="section-subtitle">
            Klik tombol WhatsApp untuk mengirim pesan ke admin dan memproses verifikasi pendaftaran.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14 }}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="intro-cta-primary conversion-primary-cta"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Chat WhatsApp Admin
            </a>
            <button type="button" className="conversion-secondary-link" onClick={() => setHasSubmitted(false)}>
              Kembali ke Form
            </button>
          </div>
        </div>
      )}

      <AmbassadorTermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  )
}
