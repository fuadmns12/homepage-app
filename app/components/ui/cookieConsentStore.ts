'use client'

export type CookieConsentValue = 'unknown' | 'granted' | 'denied'

export const COOKIE_CONSENT_STORAGE_KEY = 'geuwat_cookie_consent'

export function readCookieConsent(): CookieConsentValue {
  if (typeof window === 'undefined') return 'unknown'
  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (stored === 'granted' || stored === 'denied') return stored
    return 'unknown'
  } catch {
    return 'unknown'
  }
}

export function writeCookieConsent(value: Exclude<CookieConsentValue, 'unknown'>) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value)
    window.dispatchEvent(new Event('geuwat_cookie_consent_changed'))
  } catch {
    // ignore storage failures (privacy modes, blocked storage, etc.)
  }
}

