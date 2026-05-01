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

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
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
  {
    key: 'discord',
    label: 'Discord',
    href: 'https://discord.gg/kpPQHW7gFA',
    Icon: DiscordIcon,
  },
] as const

interface SocialMediaProps {
  trackLocation?: string
}

export default function SocialMedia({ trackLocation = 'conversion_landing' }: SocialMediaProps) {
  return (
    <section className="glass-card conversion-social" aria-label="Sosial media GEUWAT">
    <div className="conversion-social-head">
        <h2 className="conversion-social-title">Social Media</h2>
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
                location: trackLocation,
                target: href,
              })
            }
          >
            <span className="conversion-social-icon" aria-hidden="true">
              <Icon className="conversion-social-icon-svg" />
            </span>
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
