'use client'

import { useEffect, useState } from 'react'
import {
  hideCookieConsent,
  readCookieConsent,
  readCookieConsentHidden,
  writeCookieConsent,
  type CookieConsentValue,
} from './cookieConsentState'

export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsentValue>('unknown')
  const [hidden, setHidden] = useState<boolean>(false)

  useEffect(() => {
    const refresh = () => {
      setConsent(readCookieConsent())
      setHidden(readCookieConsentHidden())
    }

    // Important for SSR/hydration: initial state on the server is always "unknown",
    // so we need to re-read client storage once mounted.
    refresh()

    window.addEventListener('geuwat_cookie_consent_changed', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('geuwat_cookie_consent_changed', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  if (hidden || consent !== 'unknown') return null

  return (
    <section className="cookie-consent" aria-live="polite" aria-label="Izin cookies">
      <button
        type="button"
        className="cookie-consent__close"
        aria-label="Tutup izin cookies"
        onClick={() => {
          setHidden(true)
          hideCookieConsent()
        }}
      >
        &#215;
      </button>
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
