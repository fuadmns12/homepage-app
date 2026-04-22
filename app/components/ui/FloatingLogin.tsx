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

export default function FloatingLogin() {
  const [userCount, setUserCount] = useState<number | null>(null)
  const [trialCount, setTrialCount] = useState<number | null>(null)
  const [paidCount, setPaidCount] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [breakdownOpen, setBreakdownOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const breakdownCloseTimerRef = useRef<number | null>(null)

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

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const root = rootRef.current
      if (!root) return
      const target = event.target as Node | null
      if (!target) return
      if (root.contains(target)) return
      setMenuOpen(false)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown, true)
    document.addEventListener('touchstart', onPointerDown, true)
    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      document.removeEventListener('mousedown', onPointerDown, true)
      document.removeEventListener('touchstart', onPointerDown, true)
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [menuOpen])

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

  useEffect(() => {
    if (!menuOpen) {
      setBreakdownOpen(false)
    }
  }, [menuOpen])

  return (
    <div className="conversion-login-row" aria-label="Login ke Member GEUWAT">
      <div className="conversion-login-stack" ref={rootRef}>
        <button
          type="button"
          className="conversion-chibi-card conversion-chibi-trigger conversion-chibi-logo"
          aria-label="Buka pilihan login"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="conversion-chibi-frame" aria-hidden="true">
            <Image
              src="/NewLogoRB.webp"
              alt=""
              fill
              sizes="72px"
              priority={false}
              className="conversion-chibi-image"
            />
          </span>
        </button>

        {menuOpen ? (
          <div className="conversion-chibi-menu" role="menu" aria-label="Pilih akun login">
            <div className="conversion-chibi-item" role="none">
              {formattedCount ? (
                <div className="conversion-menu-count-wrap" role="none">
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
                className="conversion-chibi-card conversion-chibi-link"
                role="menuitem"
                aria-label="Login (Chibi 1)"
                onClick={() =>
                  trackCtaClick('hero_login', {
                    location: 'homepage',
                    target: MEMBER_LOGIN_URL,
                  })
                }
              >
                <span className="conversion-chibi-frame" aria-hidden="true">
                  <Image
                    src="/Chibi/chibi1.webp"
                    alt=""
                    fill
                    sizes="72px"
                    priority={false}
                    className="conversion-chibi-image"
                  />
                </span>
              </a>
            </div>

            <div className="conversion-chibi-card conversion-chibi-soon" role="menuitem" aria-label="Chibi 2 (Soon)">
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/Chibi/chibi2.webp" alt="" fill sizes="72px" className="conversion-chibi-image" />
              </span>
              <span className="conversion-chibi-soon-overlay" aria-hidden="true">
                Soon
              </span>
            </div>

            <div className="conversion-chibi-card conversion-chibi-soon" role="menuitem" aria-label="Chibi 3 (Soon)">
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/Chibi/chibi3.webp" alt="" fill sizes="72px" className="conversion-chibi-image" />
              </span>
              <span className="conversion-chibi-soon-overlay" aria-hidden="true">
                Soon
              </span>
            </div>

            <div className="conversion-chibi-card conversion-chibi-soon" role="menuitem" aria-label="Chibi 4 (Soon)">
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
              <div
                className="conversion-menu-breakdown-card conversion-menu-breakdown-card--trial"
                aria-label={`User trial: ${formattedTrialCount ?? '—'}`}
              >
                <LightningIcon className="conversion-menu-breakdown-icon" aria-hidden="true" />
                <span className="conversion-menu-breakdown-value">{formattedTrialCount ?? '—'}</span>
              </div>
              <div
                className="conversion-menu-breakdown-card conversion-menu-breakdown-card--paid"
                aria-label={`User berbayar: ${formattedPaidCount ?? '—'}`}
              >
                <DiamondIcon className="conversion-menu-breakdown-icon" aria-hidden="true" />
                <span className="conversion-menu-breakdown-value">{formattedPaidCount ?? '—'}</span>
              </div>
            </div>
          </div>
        ) : null}

        <span className="conversion-login-text">Login</span>
      </div>
    </div>
  )
}
