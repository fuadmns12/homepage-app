'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { trackCtaClick } from '@/lib/analytics'

const MEMBER_LOGIN_URL = 'https://learningenglishgeuwat.vercel.app'

type UserCountPayload = {
  count: number | null
  trialCount?: number | null
  paidCount?: number | null
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
  const [collapsed, setCollapsed] = useState(true)
  const touchStartYRef = useRef<number | null>(null)


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
            <a
              href={MEMBER_LOGIN_URL}
              className="conversion-chibi-card conversion-chibi-logo conversion-chibi-logo-static conversion-chibi-link"
              aria-label="Login ke GEUWAT"
              onClick={() =>
                trackCtaClick('logo_login', {
                  location: 'homepage',
                  target: MEMBER_LOGIN_URL,
                })
              }
            >
              <span className="conversion-chibi-frame" aria-hidden="true">
                <Image src="/rasio_1_1_2K_202606030906.webp" alt="" fill sizes="72px" priority={false} className="conversion-chibi-image" />
              </span>
            </a>
            <span className="conversion-login-text">LOGIN</span>
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
