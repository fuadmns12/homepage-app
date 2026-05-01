'use client'

import React from 'react'
import { Home, Info, LayoutGrid, MessageCircle, CalendarDays, Users, Images, Star, House, Gift, Instagram, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

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

type FeatureSection =
  | 'introduction'
  | 'services'
  | 'gallery'
  | 'testimonials'
  | 'event'
  | 'ambassador'
  | 'about'
  | 'contact'

const NAV_ITEMS: ReadonlyArray<{
  section: FeatureSection
  label: string
  Icon: LucideIcon
}> = [
  { section: 'services', label: 'Fitur', Icon: LayoutGrid },
  { section: 'introduction', label: 'GEUWAT Peduli', Icon: Info },
  { section: 'gallery', label: 'Galeri', Icon: Images },
  { section: 'testimonials', label: 'Testimoni', Icon: Star },
  { section: 'event', label: 'GEUWAT Event', Icon: CalendarDays },
  { section: 'ambassador', label: 'GEUWAT Ambassador', Icon: Users },
  { section: 'about', label: 'Tentang', Icon: Home },
  { section: 'contact', label: 'Start', Icon: MessageCircle },
] as const

const FREE_TRIAL_WA_URL =
  'https://wa.me/6285846003119?text=' +
  encodeURIComponent('Halo Admin GEUWAT, saya ingin Free Trial dan minta dimasukkan ke grup WA. Terima kasih.')
const MEDSOS_URL = 'https://www.instagram.com/learningenglishgeuwat/'
const GROUP_URL = 'https://discord.gg/kpPQHW7gFA'

interface FeatureHubSideNavProps {
  activeSection: string
  onNavigate: (sectionId: FeatureSection) => void
  onShowMenu: () => void
  onGoHome?: () => void
  mode?: 'landing' | 'featureHub'
  mobileOpen?: boolean
  onMobileOpenChange?: (open: boolean) => void
}

export default function FeatureHubSideNav({
  activeSection,
  onNavigate,
  onShowMenu,
  onGoHome,
  mode = 'featureHub',
  mobileOpen,
  onMobileOpenChange,
}: FeatureHubSideNavProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(mode === 'featureHub')

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const effectiveMobileOpen = typeof mobileOpen === 'boolean' ? mobileOpen : isMobileOpen
  const setEffectiveMobileOpen = (open: boolean) => {
    if (onMobileOpenChange) {
      onMobileOpenChange(open)
      return
    }
    setIsMobileOpen(open)
  }

  const closeMobile = () => setEffectiveMobileOpen(false)

  return (
    <>
      <button
        type="button"
        className={`featurehub-mobile-launcher ${effectiveMobileOpen ? 'is-open' : ''}`}
        aria-label={effectiveMobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
        onClick={() => setEffectiveMobileOpen(!effectiveMobileOpen)}
      >
        <ChevronIcon
          className={`featurehub-mobile-launcher-icon ${effectiveMobileOpen ? 'is-left' : 'is-right'}`}
        />
      </button>

      <div
        className={`featurehub-sidenav-backdrop ${effectiveMobileOpen ? 'is-open' : ''}`}
        aria-hidden={!effectiveMobileOpen}
        onClick={closeMobile}
      />

      <aside
        className={`featurehub-sidenav ${isCollapsed ? 'is-collapsed' : ''} ${effectiveMobileOpen ? 'is-mobile-open' : ''}`}
        aria-label="Navigasi GEUWAT"
      >
        <button
          type="button"
          className="featurehub-sidenav-handle"
          aria-label={effectiveMobileOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          onClick={() => {
            if (effectiveMobileOpen) {
              closeMobile()
              return
            }
            setEffectiveMobileOpen(true)
          }}
        >
          <ChevronIcon
            className={`featurehub-sidenav-handle-icon ${isCollapsed ? 'is-right' : 'is-left'}`}
          />
        </button>

        <div className="featurehub-sidenav-head">
          <button
            type="button"
            className="featurehub-sidenav-home"
            aria-label="Kembali ke landing page"
            onClick={() => {
              closeMobile()
              onGoHome?.()
            }}
          >
            <House aria-hidden="true" className="featurehub-sidenav-home-icon" />
          </button>
        </div>

        <nav className="featurehub-sidenav-list" aria-label="Menu website">
          <button
            type="button"
            className="featurehub-sidenav-menu"
            onClick={() => {
              closeMobile()
              onShowMenu()
            }}
          >
            <span className="featurehub-sidenav-menu-dot" aria-hidden="true" />
            <span className="featurehub-sidenav-menu-text">Menu</span>
          </button>

          {NAV_ITEMS.map(({ section, label, Icon }) => {
            const isActive = activeSection === section
            return (
              <React.Fragment key={section}>
                <button
                  type="button"
                  className={`featurehub-sidenav-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    closeMobile()
                    onNavigate(section)
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  title={label}
                >
                  <Icon aria-hidden="true" className="featurehub-sidenav-icon" />
                  <span className="featurehub-sidenav-label">{label}</span>
                </button>

                {section === 'ambassador' ? (
                  <>
                    <button
                      type="button"
                      className="featurehub-sidenav-item"
                      onClick={() => {
                        closeMobile()
                        openExternal(FREE_TRIAL_WA_URL)
                      }}
                      title="Free Trial (Masuk grup WA)"
                    >
                      <Gift aria-hidden="true" className="featurehub-sidenav-icon" />
                      <span className="featurehub-sidenav-label">Free Trial</span>
                    </button>

                    <button
                      type="button"
                      className="featurehub-sidenav-item"
                      onClick={() => {
                        closeMobile()
                        openExternal(MEDSOS_URL)
                      }}
                      title="Medsos"
                    >
                      <Instagram aria-hidden="true" className="featurehub-sidenav-icon" />
                      <span className="featurehub-sidenav-label">Medsos</span>
                    </button>

                    <button
                      type="button"
                      className="featurehub-sidenav-item"
                      onClick={() => {
                        closeMobile()
                        openExternal(GROUP_URL)
                      }}
                      title="Grup"
                    >
                      <UsersRound aria-hidden="true" className="featurehub-sidenav-icon" />
                      <span className="featurehub-sidenav-label">Grup</span>
                    </button>
                  </>
                ) : null}
              </React.Fragment>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
