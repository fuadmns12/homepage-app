'use client'

import React from 'react'
import { trackCtaClick } from '@/lib/analytics'

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.5 11.9c0 4.7-3.8 8.6-8.6 8.6-1.5 0-3-.4-4.3-1.1L3 21l1.7-4.5c-.6-1.3-.9-2.7-.9-4.2C3.8 7.6 7.7 3.8 12.4 3.8c4.8 0 8.1 3.4 8.1 8.1Zm-8.1-6.3c-3.6 0-6.6 3-6.6 6.6 0 1.3.4 2.5 1 3.5l-.9 2.5 2.6-.8c1 .6 2.2.9 3.4.9 3.6 0 6.6-3 6.6-6.6 0-3.4-2.5-6.1-6.1-6.1Zm3.8 8.9c0 .1-.1.5-.3.7-.2.3-.5.5-.9.5-.3 0-.6 0-1.1-.2-.4-.1-1-.3-1.7-.7-1.9-1.1-3.1-2.8-3.2-3-.1-.2-.7-.9-.7-1.7 0-.8.4-1.1.6-1.3.1-.1.3-.2.5-.2h.4c.1 0 .3 0 .4.3.1.3.5 1.2.5 1.3.1.1.1.3 0 .4 0 .1-.1.3-.2.4-.1.1-.2.2-.3.4-.1.1-.2.2-.1.4.1.2.4.8 1 1.3.7.7 1.3 1 1.5 1.1.2.1.3 0 .4-.1.1-.1.6-.7.7-.9.1-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3Z"
      />
    </svg>
  )
}

const WHATSAPP_PHONE_ID = '6285846003119'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_ID}`

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp GEUWAT"
      onClick={() =>
        trackCtaClick('whatsapp_floating', {
          location: 'homepage',
          target: WHATSAPP_URL,
        })
      }
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <WhatsAppIcon className="floating-whatsapp-icon-svg" />
      </span>
      <span className="floating-whatsapp-text">WhatsApp</span>
    </a>
  )
}

