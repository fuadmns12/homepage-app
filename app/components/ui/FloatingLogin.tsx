'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { trackCtaClick } from '@/lib/analytics'

const MEMBER_LOGIN_URL = 'https://learningenglishgeuwat.vercel.app'

type UserCountPayload = {
  count: number | null
  trialCount?: number | null
  paidCount?: number | null
}

function LightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13 2L3 14h7l-1 8 12-14h-7l1-6Z"
      />
    </svg>
  )
}

function DiamondIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2l7 7-7 13L5 9l7-7Zm0 3.2L7.9 9h8.2L12 5.2Z"
      />
    </svg>
  )
}

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FloatingLogin() {
  const [userCount, setUserCount] = useState<number | null>(null)
  const [trialCount, setTrialCount] = useState<number | null>(null)
  const [paidCount, setPaidCount] = useState<number | null>(null)
  const [breakdownOpen, setBreakdownOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const breakdownCloseTimerRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        const res = await fetch('/api/user-count', { signal: controller.signal })
        if (!res.ok) return
        const data = (await res.json()) as UserCountPayload
        setUserCount(typeof data.count === 'number' ? data.count : null)
        setTrialCount(typeof data.trialCount === 'number' ? data.trialCount : null)
        setPaidCount(typeof data.paidCount === 'number' ? data.paidCount : null)
      } catch (error) {
        if ((error as { name?: string }).name === 'AbortError') return
        setUserCount(null)
        setTrialCount(null)
        setPaidCount(null)
      }
    })()

    return () => controller.abort()
  }, [])

  const formattedCount = useMemo(() => {
    if (userCount == null) return null
    return new Intl.NumberFormat('id-ID').format(userCount)
  }, [userCount])

  const formattedTrialCount = useMemo(() => {
    if (trialCount == null) return null
    return new Intl.NumberFormat('id-ID').format(trialCount)
  }, [trialCount])

  const formattedPaidCount = useMemo(() => {
    if (paidCount == null) return null
    return new Intl.NumberFormat('id-ID').format(paidCount)
  }, [paidCount])

  const openBreakdown = () => {
    if (breakdownCloseTimerRef.current !== null) {
      window.clearTimeout(breakdownCloseTimerRef.current)
      breakdownCloseTimerRef.current = null
    }
    setBreakdownOpen(true)
  }

  const scheduleCloseBreakdown = () => {
    if (breakdownCloseTimerRef.current !== null) {
      window.clearTimeout(breakdownCloseTimerRef.current)
      breakdownCloseTimerRef.current = null
    }
    breakdownCloseTimerRef.current = window.setTimeout(() => {
      breakdownCloseTimerRef.current = null
      setBreakdownOpen(false)
    }, 160)
  }

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartYRef.current = event.touches[0]?.clientY ?? null
  }

  const onTouchEnd = (event: React.TouchEvent) => {
    const startY = touchStartYRef.current
    touchStartYRef.current = null
    if (startY == null) return
    const endY = event.changedTouches[0]?.clientY ?? startY
    const deltaY = endY - startY
    const threshold = 28
    if (deltaY <= -threshold) setCollapsed(true)
    if (deltaY >= threshold) setCollapsed(false)
  }

  return (
    <div
      className={`conversion-login-row ${collapsed ? 'is-collapsed' : ''}`}
      aria-label="Login ke Member GEUWAT"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="conversion-login-inner">
        {!collapsed ? (
          <nav className="conversion-chibi-menu" aria-label="Login GEUWAT">
            <div className="conversion-chibi-item">
              {formattedCount ? (
                <div className="conversion-menu-count-wrap">
                  <button
                    type="button"
                    className="conversion-menu-count-badge"
                    aria-label="Lihat rincian user"
                    title="Hover untuk lihat rincian"
                    onMouseEnter={openBreakdown}
                    onMouseLeave={scheduleCloseBreakdown}
                    onFocus={openBreakdown}
                    onBlur={scheduleCloseBreakdown}
                  >
                    {formattedCount}
                  </button>
                </div>
              ) : null}

              <a
                href={MEMBER_LOGIN_URL}
                className="conversion-chibi-card conversion-chibi-link conversion-chibi-spotlight"
                aria-label="Login (Chibi 1)"
                onClick={() =>
                  trackCtaClick('hero_login', {
                    location: 'homepage',
                    target: MEMBER_LOGIN_URL,
                  })
                }
              >
                <span className="conversion-chibi-frame" aria-hidden="true">
                  <Image src="/Chibi/chibi1.webp" alt="" fill sizes="72px" priority={false} className="conversion-chibi-image" />
                </span>
              </a>
            </div>

            <div className="conversion-chibi-card conversion-chibi-soon" aria-label="Chibi 2 (Soon)">
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/Chibi/chibi2.webp" alt="" fill sizes="72px" className="conversion-chibi-image" />
              </span>
              <span className="conversion-chibi-soon-overlay" aria-hidden="true">
                Soon
              </span>
            </div>

            <div className="conversion-chibi-card conversion-chibi-logo conversion-chibi-logo-static" role="img" aria-label="Logo GEUWAT">
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/NewLogoRB.webp" alt="" fill sizes="72px" priority={false} className="conversion-chibi-image" />
              </span>
            </div>

            <div className="conversion-chibi-card conversion-chibi-soon" aria-label="Chibi 3 (Soon)">
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/Chibi/chibi3.webp" alt="" fill sizes="72px" className="conversion-chibi-image" />
              </span>
              <span className="conversion-chibi-soon-overlay" aria-hidden="true">
                Soon
              </span>
            </div>

            <div className="conversion-chibi-card conversion-chibi-soon" aria-label="Chibi 4 (Soon)">
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/Chibi/chibi4.webp" alt="" fill sizes="72px" className="conversion-chibi-image" />
              </span>
              <span className="conversion-chibi-soon-overlay" aria-hidden="true">
                Soon
              </span>
            </div>

            <div
              className={`conversion-menu-breakdown ${breakdownOpen ? 'is-open' : ''}`}
              role="group"
              aria-label="Rincian user"
              onMouseEnter={openBreakdown}
              onMouseLeave={scheduleCloseBreakdown}
            >
              <div className="conversion-menu-breakdown-card conversion-menu-breakdown-card--trial" aria-label={`User trial: ${formattedTrialCount ?? '—'}`}>
                <LightningIcon className="conversion-menu-breakdown-icon" aria-hidden="true" />
                <span className="conversion-menu-breakdown-value">{formattedTrialCount ?? '—'}</span>
              </div>
              <div className="conversion-menu-breakdown-card conversion-menu-breakdown-card--paid" aria-label={`User berbayar: ${formattedPaidCount ?? '—'}`}>
                <DiamondIcon className="conversion-menu-breakdown-icon" aria-hidden="true" />
                <span className="conversion-menu-breakdown-value">{formattedPaidCount ?? '—'}</span>
              </div>
            </div>
          </nav>
        ) : null}

        <button
          type="button"
          className="conversion-login-handle"
          aria-label={collapsed ? 'Tampilkan login bar' : 'Sembunyikan login bar'}
          onClick={() => setCollapsed((v) => !v)}
        >
          <ChevronIcon className={`conversion-login-chevron ${collapsed ? 'is-down' : 'is-up'}`} />
        </button>
      </div>
    </div>
  )
}
