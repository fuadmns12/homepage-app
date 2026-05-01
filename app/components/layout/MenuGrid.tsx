'use client'
import Image from 'next/image'

interface MenuGridProps {
  showSection: (sectionId: string) => void
  isTransitioning: boolean
}

interface MenuItem {
  id: string
  badge: React.ReactNode
  title: string
  section: string
}

const menuItems: MenuItem[] = [
  {
    id: '4',
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="menu-badge-icon">
        <rect x="12" y="14" width="40" height="36" rx="5" fill="currentColor" opacity="0.08" />
        <rect x="16" y="18" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="24" cy="26" r="3" fill="#ff00d4" opacity="0.9" />
        <path d="M18 38l8-8 6 6 6-5 10 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Galeri',
    section: 'gallery'
  },
  {
    id: '2',
    badge: <span aria-hidden="true">&#9654;</span>,
    title: 'Start',
    section: 'contact'
  },
  {
    id: '3',
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="menu-badge-icon">
        <rect x="12" y="12" width="40" height="40" rx="6" fill="currentColor" opacity="0.08" />
        <rect x="18" y="18" width="10" height="10" rx="2" fill="#00f0ff" opacity="0.9" />
        <rect x="30" y="18" width="10" height="10" rx="2" fill="#ff00d4" opacity="0.9" />
        <rect x="42" y="18" width="6" height="10" rx="2" fill="#ffffff" opacity="0.7" />
        <rect x="18" y="30" width="14" height="10" rx="2" fill="#9d4edd" opacity="0.9" />
        <rect x="34" y="30" width="14" height="10" rx="2" fill="#00f0ff" opacity="0.5" />
        <rect x="18" y="42" width="30" height="6" rx="2" fill="#ff00d4" opacity="0.6" />
      </svg>
    ),
    title: 'Fitur',
    section: 'services'
  },
  {
    id: '1',
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="menu-badge-icon">
        <rect x="12" y="12" width="40" height="40" rx="8" fill="currentColor" opacity="0.08" />
        <path
          d="M32 24.2c-1.7-2.1-5-2.6-7.2-.7-2.4 2.1-2.5 5.7-.4 7.9l7.6 7.7 7.6-7.7c2.1-2.2 2-5.8-.4-7.9-2.2-1.9-5.5-1.4-7.2.7z"
          fill="#ff00d4"
          opacity="0.88"
        />
        <path
          d="M18 38c5.5 0 8.7-3.8 14-3.8S40.5 38 46 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M20 41.5c5 0 7.8-3.2 12-3.2s7 3.2 12 3.2"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="2.6"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="46.5" cy="19" r="2" fill="#00f0ff" opacity="0.8" />
      </svg>
    ),
    title: 'GEUWAT Peduli',
    section: 'introduction'
  },
  {
    id: '5',
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="menu-badge-icon">
        <path
          d="M14 18h28a8 8 0 0 1 8 8v10a8 8 0 0 1-8 8H28l-10 8v-8h-4a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#00f0ff">
          <circle cx="24" cy="30" r="2.2" />
          <circle cx="32" cy="30" r="2.2" />
          <circle cx="40" cy="30" r="2.2" />
        </g>
      </svg>
    ),
    title: 'Testimoni',
    section: 'testimonials'
  },
  {
    id: '7',
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="menu-badge-icon">
        <rect x="12" y="14" width="40" height="36" rx="7" fill="currentColor" opacity="0.08" />
        <rect x="16" y="20" width="32" height="26" rx="5" fill="none" stroke="currentColor" strokeWidth="2.6" />
        <path d="M22 16v8M42 16v8" fill="none" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <path d="M22 30h20" fill="none" stroke="#ff00d4" strokeWidth="2.8" strokeLinecap="round" opacity="0.75" />
        <path d="M22 36h14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
    title: 'GEUWAT EVENT',
    section: 'event',
  },
  {
    id: '8',
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="menu-badge-icon">
        <rect x="12" y="12" width="40" height="40" rx="9" fill="currentColor" opacity="0.08" />
        <path
          d="M32 22c3.6 0 6.5 2.9 6.5 6.5S35.6 35 32 35s-6.5-2.9-6.5-6.5S28.4 22 32 22z"
          fill="#00f0ff"
          opacity="0.75"
        />
        <path
          d="M19.5 46.5c1.7-6.4 7.1-10.5 12.5-10.5s10.8 4.1 12.5 10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M32 16.5l2.2 4.4 4.9.7-3.5 3.4.8 4.9-4.4-2.3-4.4 2.3.8-4.9-3.5-3.4 4.9-.7L32 16.5z"
          fill="#ffb347"
          opacity="0.85"
        />
      </svg>
    ),
    title: 'GEUWAT AMBASSADOR',
    section: 'ambassador',
  },
  {
    id: '6',
    badge: (
      <Image
        src="/NewLogoRB.webp"
        alt="GEUWAT"
        className="menu-badge-icon"
        width={64}
        height={64}
      />
    ),
    title: 'Tentang',
    section: 'about'
  }
]

export default function MenuGrid({ showSection, isTransitioning }: MenuGridProps) {
  const handleMenuClick = (section: string) => {
    if (!isTransitioning) {
      showSection(section)
    }
  }

  return (
    <div className="menu-grid" id="menuGrid">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="menu-item initial-load"
          data-section={item.section}
          onClick={() => handleMenuClick(item.section)}
          style={{
            cursor: 'pointer',
            zIndex: 50,
            position: 'relative'
          }}
        >
          <div className="menu-badge">{item.badge}</div>
          <div className="menu-title">{item.title}</div>
        </div>
      ))}
    </div>
  )
}
