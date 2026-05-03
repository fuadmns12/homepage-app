import {
  readCookieConsent,
  readCookieConsentHidden,
  hideCookieConsent,
  writeCookieConsent,
  COOKIE_CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_SESSION_KEY,
  COOKIE_CONSENT_HIDDEN_SESSION_KEY,
} from './cookieConsentState'

function clearConsentCookie() {
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=; Max-Age=0; Path=/`
}

describe('cookieConsent', () => {
  beforeEach(() => {
    clearConsentCookie()
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
    window.sessionStorage.removeItem(COOKIE_CONSENT_SESSION_KEY)
    window.sessionStorage.removeItem(COOKIE_CONSENT_HIDDEN_SESSION_KEY)
  })

  afterEach(() => {
    jest.restoreAllMocks()
    clearConsentCookie()
  })

  it('falls back to cookies when localStorage access throws', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })

    document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=granted; Path=/`

    expect(readCookieConsent()).toBe('granted')
  })

  it('does not throw when localStorage write throws', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })

    const dispatchSpy = jest.spyOn(window, 'dispatchEvent')

    expect(() => writeCookieConsent('granted')).not.toThrow()
    expect(document.cookie).toContain(`${COOKIE_CONSENT_COOKIE_NAME}=granted`)
    expect(dispatchSpy).toHaveBeenCalled()
  })

  it('can be hidden without changing consent', () => {
    expect(readCookieConsent()).toBe('unknown')
    expect(readCookieConsentHidden()).toBe(false)

    const dispatchSpy = jest.spyOn(window, 'dispatchEvent')
    expect(() => hideCookieConsent()).not.toThrow()

    expect(readCookieConsent()).toBe('unknown')
    expect(readCookieConsentHidden()).toBe(true)
    expect(dispatchSpy).toHaveBeenCalled()
  })
})
