'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { trackCtaClick } from '@/lib/analytics'

const MEMBER_LOGIN_URL = 'https://learningenglishgeuwat.vercel.app'

export default function FloatingLogin() {
  const [userCount, setUserCount] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        const res = await fetch('/api/user-count', { signal: controller.signal })
        if (!res.ok) return
        const data = (await res.json()) as { count: number | null }
        setUserCount(typeof data.count === 'number' ? data.count : null)
      } catch (error) {
        if ((error as { name?: string }).name === 'AbortError') return
        setUserCount(null)
      }
    })()

    return () => controller.abort()
  }, [])

  const formattedCount = useMemo(() => {
    if (userCount == null) return null
    return new Intl.NumberFormat('id-ID').format(userCount)
  }, [userCount])

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

  return (
    <div className="conversion-login-row" aria-label="Login ke Member GEUWAT">
      <div className="conversion-login-stack" ref={rootRef}>
        {menuOpen ? (
          <div className="conversion-chibi-menu" role="menu" aria-label="Pilih akun login">
            <div className="conversion-chibi-item" role="none">
              {formattedCount ? (
                <span className="conversion-login-count" aria-label={`Jumlah user: ${formattedCount}`}>
                  {formattedCount}
                </span>
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
          </div>
        ) : null}

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

        <span className="conversion-login-text">Login</span>
      </div>
    </div>
  )
}
