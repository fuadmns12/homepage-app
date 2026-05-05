'use client'

import React, { useState, useMemo } from 'react'
import { User } from 'lucide-react'
import Link from 'next/link'
import AmbientBg from '../components/ui/AmbientBg'
import GridOverlay from '../components/ui/GridOverlay'
import TermsModal from './components/TermsModal'

const ADMIN_WA = '6285846003119'

export default function RegisterPage() {
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [edition, setEdition] = useState<'free' | 'pro' | null>(null)

  const normalizedEmail = email.trim()
  const hasEmail = normalizedEmail.length > 0

  const whatsappHref = useMemo(() => {
    const baseMessage = 'Halo Admin GEUWAT, saya sudah mengisi form pendaftaran member baru. Mohon verifikasi pendaftaran saya.'
    let message = baseMessage
    if (hasEmail) message += `\n\nEmail: ${normalizedEmail}`
    if (edition === 'free') message += `\nPilihan: Free Edition`
    if (edition === 'pro') message += `\nPilihan: Pro Edition (Akses Selamanya)`
    return `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`
  }, [hasEmail, normalizedEmail, edition])

  return (
    <>
      <AmbientBg />
      <GridOverlay />
      <Link href="/" className="back-btn">
        Kembali ke Menu
      </Link>
      
      <div className="min-h-screen flex items-center justify-center relative z-10 py-16">
        <div className="container">
          <div className="max-w-2xl w-full mx-auto">
            {/* Header Card */}
            <div className="glass-card mb-4" style={{ padding: 18 }}>
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--glow-cyan)' }}>
                  <User className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-white mb-1">Form Pendaftaran</h1>
                <p className="text-gray-400 text-xs">Bergabung dengan platform pembelajaran English GEUWAT</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="conversion-secondary-link"
                  style={{ width: 'fit-content' }}
                >
                  Baca Ketentuan dan Kebijakan Privasi
                </button>
              </div>
            </div>

            {/* Form / Verification Card */}
            {!hasSubmitted ? (
              <div className="glass-card" style={{ padding: 18 }}>
                <div style={{ display: 'grid', gap: 14 }}>
                  <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdVhc9VCg_9QmsgYLMR2oNFsmZNeyzXeUfLR1BnImTYJ514JA/viewform?embedded=true" 
                      width="100%" 
                      height="1313" 
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                    >
                      Memuat…
                    </iframe>
                  </div>

                  <div style={{ display: 'grid', gap: 10, marginTop: 10 }}>
                    <label style={{ display: 'grid', gap: 6, width: '100%' }}>
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
                          width: '100%'
                        }}
                      />
                    </label>

                    <div style={{ display: 'grid', gap: 8 }}>
                      <span className="section-subtitle" style={{ marginBottom: 0 }}>
                        Silahkan ceklis dari pilihan tersedia:
                      </span>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', padding: '10px 14px', borderRadius: 12, border: edition === 'free' ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.12)', background: edition === 'free' ? 'rgba(0,255,128,0.05)' : 'rgba(0,0,0,0.18)' }}>
                        <input
                          type="radio"
                          name="edition"
                          value="free"
                          checked={edition === 'free'}
                          onChange={() => setEdition('free')}
                          style={{ accentColor: 'var(--primary)', width: 16, height: 16 }}
                        />
                        <span style={{ color: edition === 'free' ? 'var(--primary)' : 'inherit', fontSize: '14px', fontWeight: edition === 'free' ? 500 : 400 }}>Free Edition</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', padding: '10px 14px', borderRadius: 12, border: edition === 'pro' ? '1px solid var(--glow-cyan)' : '1px solid rgba(255,255,255,0.12)', background: edition === 'pro' ? 'rgba(0,255,255,0.05)' : 'rgba(0,0,0,0.18)' }}>
                        <input
                          type="radio"
                          name="edition"
                          value="pro"
                          checked={edition === 'pro'}
                          onChange={() => setEdition('pro')}
                          style={{ accentColor: 'var(--glow-cyan)', width: 16, height: 16 }}
                        />
                        <span style={{ color: edition === 'pro' ? 'var(--glow-cyan)' : 'inherit', fontSize: '14px', fontWeight: edition === 'pro' ? 500 : 400 }}>Pro Edition (Akses Selamanya)</span>
                      </label>
                    </div>

                    <button
                      type="button"
                      className="intro-cta-primary conversion-primary-cta"
                      onClick={() => {
                        window.open(whatsappHref, '_blank')
                        setHasSubmitted(true)
                      }}
                      disabled={!hasEmail || !edition}
                      style={{
                        width: '100%',
                        opacity: (!hasEmail || !edition) ? 0.6 : 1,
                        cursor: (!hasEmail || !edition) ? 'not-allowed' : 'pointer',
                        justifyContent: 'center'
                      }}
                    >
                      Konfirmasi Pengaktifan Akun
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-card" style={{ padding: 18 }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--glow-green)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="section-title" style={{ paddingTop: 0, marginBottom: 6 }}>
                    Verifikasi Pendaftaran
                  </h3>
                  <p className="section-subtitle mb-6">
                    Klik tombol WhatsApp untuk mengirim pesan ke admin dan memproses verifikasi pendaftaran.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="intro-cta-primary conversion-primary-cta"
                      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
                    >
                      Chat WhatsApp Admin
                    </a>
                    <button type="button" className="conversion-secondary-link" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setHasSubmitted(false)}>
                      Kembali ke Form
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-400">
                Sudah punya akun?{' '}
                <Link href="https://learningenglishgeuwat.vercel.app" className="font-medium transition-colors text-xs sm:text-sm"
                  style={{ color: 'var(--primary)' }}>
                  Masuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Privacy Modal */}
      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAcknowledge={() => setShowTermsModal(false)}
      />
    </>
  )
}

