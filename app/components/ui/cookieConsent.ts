export type CookieConsentValue = 'unknown' | 'granted' | 'denied'

export const COOKIE_CONSENT_STORAGE_KEY = 'geuwat_cookie_consent'
export const COOKIE_CONSENT_COOKIE_NAME = 'geuwat_cookie_consent'
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

function readCookie(name: string) {
  if (typeof document === 'undefined') return null
  const parts = document.cookie.split(';').map((part) => part.trim())
  const found = parts.find((part) => part.startsWith(`${name}=`))
  if (!found) return null
  const raw = found.slice(name.length + 1)
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

export function readCookieConsent(): CookieConsentValue {
  if (typeof window === 'undefined') return 'unknown'

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (stored === 'granted' || stored === 'denied') return stored
  } catch {
  }

  const cookie = readCookie(COOKIE_CONSENT_COOKIE_NAME)
  if (cookie === 'granted' || cookie === 'denied') return cookie

  return 'unknown'
}

export function writeCookieConsent(value: Exclude<CookieConsentValue, 'unknown'>) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value)
  } catch {
  }

  try {
    document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`
  } catch {
  }

  try {
    window.dispatchEvent(new Event('geuwat_cookie_consent_changed'))
  } catch {
  }
}
