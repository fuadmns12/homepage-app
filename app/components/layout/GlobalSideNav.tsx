'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import FeatureHubSideNav from './FeatureHubSideNav'

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

export default function GlobalSideNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [sideNavOpen, setSideNavOpen] = useState(false)

  // On the home page, HomeClient handles its own side nav
  if (pathname === '/') return null

  // Try to match current pathname to a section (e.g. /galeri -> gallery)
  // This is a rough mapping if needed, otherwise it just won't highlight any section
  let activeSection = ''
  if (pathname.includes('/galeri')) activeSection = 'gallery'
  else if (pathname.includes('/fitur')) activeSection = 'services'
  else if (pathname.includes('/tentang')) activeSection = 'about'
  else if (pathname.includes('/testimoni')) activeSection = 'testimonials'
  else if (pathname.includes('/geuwat-ambassador')) activeSection = 'ambassador'

  if (sideNavOpen) {
    return (
      <div className="sidenav-active">
        <FeatureHubSideNav
          activeSection={activeSection}
          onNavigate={(section) => {
            setSideNavOpen(false)
            router.push(`/#${section}`)
          }}
          onShowMenu={() => {
            setSideNavOpen(false)
            router.push('/')
          }}
          onGoHome={() => {
            setSideNavOpen(false)
            router.push('/')
          }}
          mode="landing"
          mobileOpen={sideNavOpen}
          onMobileOpenChange={setSideNavOpen}
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      className="featurehub-entry-arrow"
      aria-label="Buka navigasi"
      onClick={() => setSideNavOpen(true)}
    >
      <ChevronIcon className="featurehub-entry-arrow-icon" />
    </button>
  )
}
