import React from 'react'
import { Facebook, Instagram } from 'lucide-react'
import { trackCtaClick } from '@/lib/analytics'

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.6 5.2c.8.9 1.9 1.5 3 1.6v3.1c-1.4-.1-2.7-.6-3.8-1.4v6.2c0 3-2.5 5.3-5.5 5.1-2.2-.1-4.1-1.8-4.5-4-.6-3.2 1.9-6.1 5-6.1.3 0 .7 0 1 .1v3.3c-.3-.2-.7-.3-1.1-.3-1.2 0-2.2 1-2.2 2.2 0 1.4 1.3 2.5 2.8 2.2 1-.2 1.7-1.1 1.7-2.1V2.5h3.6c.1 1 .5 1.9 1 2.7Z"
      />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61579689853941',
    Icon: Facebook,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/learningenglishgeuwat/',
    Icon: Instagram,
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@learningenglishgeuwat',
    Icon: TikTokIcon,
  },
] as const

export default function SocialMedia() {
  return (
    <section className="glass-card conversion-social" aria-label="Sosial media GEUWAT">
      <div className="conversion-social-head">
        <h2 className="conversion-social-title">Sosial Media</h2>
        <p className="conversion-social-subtitle">Ikuti update dan konten terbaru dari GEUWAT.</p>
      </div>

      <div className="conversion-social-grid" role="list" aria-label="Daftar sosial media">
        {SOCIAL_LINKS.map(({ key, label, href, Icon }) => (
          <a
            key={key}
            role="listitem"
            className="conversion-social-card"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka ${label}`}
            onClick={() =>
              trackCtaClick(`social_${key}`, {
                location: 'conversion_landing',
                target: href,
              })
            }
          >
            <span className="conversion-social-icon" aria-hidden="true">
              <Icon className="conversion-social-icon-svg" />
            </span>
            <span className="conversion-social-name">{label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

