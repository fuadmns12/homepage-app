'use client'

import Image from 'next/image'
import { trackCtaClick } from '@/lib/analytics'

const MEMBER_LOGIN_URL = 'https://learningenglishgeuwat.vercel.app'

export default function FloatingLogin() {
  return (
    <div className="conversion-login-row" aria-label="Login ke Member GEUWAT">
      <div className="conversion-login-stack">
        <a
          href={MEMBER_LOGIN_URL}
          className="conversion-login-avatar-link"
          aria-label="Login"
          onClick={() =>
            trackCtaClick('hero_login', {
              location: 'homepage',
              target: MEMBER_LOGIN_URL,
            })
          }
        >
          <Image
            src="/Kepala1.png"
            alt="Login ke Member GEUWAT"
            width={58}
            height={58}
            priority={false}
            className="conversion-login-image"
          />
        </a>
        <span className="conversion-login-text">Login</span>
      </div>
    </div>
  )
}
