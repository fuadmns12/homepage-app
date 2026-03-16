type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

export const trackSectionView = (section: string, params: AnalyticsParams = {}) => {
  trackEvent('section_view', { section, ...params })
}

export const trackCtaClick = (label: string, params: AnalyticsParams = {}) => {
  trackEvent('cta_click', { label, ...params })
}
