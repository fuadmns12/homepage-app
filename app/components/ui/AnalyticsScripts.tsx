'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { readCookieConsent, type CookieConsentValue, COOKIE_CONSENT_STORAGE_KEY } from './cookieConsent'

type AnalyticsScriptsProps = {
  measurementId: string
}

export default function AnalyticsScripts({ measurementId }: AnalyticsScriptsProps) {
  const [consent, setConsent] = useState<CookieConsentValue>('unknown')

  useEffect(() => {
    const refresh = () => setConsent(readCookieConsent())
    refresh()

    const onStorage = (event: StorageEvent) => {
      if (event.key !== COOKIE_CONSENT_STORAGE_KEY) return
      refresh()
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener('geuwat_cookie_consent_changed', refresh)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('geuwat_cookie_consent_changed', refresh)
    }
  }, [])

  if (consent !== 'granted') return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}

