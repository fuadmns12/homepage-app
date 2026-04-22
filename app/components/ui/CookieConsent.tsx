'use client'

import { useState } from 'react'
import { readCookieConsent, writeCookieConsent, type CookieConsentValue } from './cookieConsent'

export default function CookieConsent() {
  const [nextConsent, setNextConsent] = useState<CookieConsentValue | null>(null)
  const consent = nextConsent ?? readCookieConsent()

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
            writeCookieConsent('granted')
            setNextConsent('granted')
          }}
        >
          Setujui
        </button>
        <button
          type="button"
          className="cookie-consent__button cookie-consent__button--secondary"
          onClick={() => {
            writeCookieConsent('denied')
            setNextConsent('denied')
          }}
        >
          Tolak
        </button>
      </div>
    </section>
  )
}
