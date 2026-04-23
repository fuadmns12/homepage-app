'use client'

import { useEffect, useState } from 'react'
import { readCookieConsent, writeCookieConsent, type CookieConsentValue } from './cookieConsent'

export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsentValue>(() => readCookieConsent())

  useEffect(() => {
    const refresh = () => setConsent(readCookieConsent())
    window.addEventListener('geuwat_cookie_consent_changed', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('geuwat_cookie_consent_changed', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  if (consent !== 'unknown') return null

  return (
    <section className="cookie-consent" aria-live="polite" aria-label="Izin cookies">
      <p className="cookie-consent__title">Izin cookies</p>
      <p className="cookie-consent__desc">
        GEUWAT menggunakan cookies untuk analitik dan meningkatkan pengalaman. Kamu bisa setujui atau tolak.
      </p>
      <div className="cookie-consent__actions">
        <button
          type="button"
          className="cookie-consent__button"
          onClick={() => {
            setConsent('granted')
            writeCookieConsent('granted')
          }}
        >
          Setujui
        </button>
        <button
          type="button"
          className="cookie-consent__button cookie-consent__button--secondary"
          onClick={() => {
            setConsent('denied')
            writeCookieConsent('denied')
          }}
        >
          Tolak
        </button>
      </div>
    </section>
  )
}
