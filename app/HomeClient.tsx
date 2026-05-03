'use client'

import { useEffect, useRef, useState } from 'react'
import type { SVGProps } from 'react'
import { trackSectionView } from '@/lib/analytics'
import LoadingScreen from './components/ui/LoadingScreen'
import AmbientBg from './components/ui/AmbientBg'
import GridOverlay from './components/ui/GridOverlay'
import NotificationPrompt from './components/ui/NotificationPrompt'
import ScrollTracker from './components/ui/ScrollTracker'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import Header from './components/layout/Header'
import MenuGrid from './components/layout/MenuGrid'
import FeatureHubSideNav from './components/layout/FeatureHubSideNav'
import ConversionLanding from './components/sections/ConversionLanding'
import Introduction from './components/sections/Introduction'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import GeuwatEvent from './components/sections/GeuwatEvent'
import GeuwatAmbassador from './components/sections/GeuwatAmbassador'

const FEATURE_SECTIONS = [
  'introduction',
  'services',
  'gallery',
  'testimonials',
  'event',
  'ambassador',
  'about',
  'contact',
] as const

type FeatureSection = (typeof FEATURE_SECTIONS)[number]

const isFeatureSection = (value: string): value is FeatureSection =>
  (FEATURE_SECTIONS as readonly string[]).includes(value)

function ChevronIcon(props: SVGProps<SVGSVGElement>) {
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

export default function HomeClient() {
  const [activeSection, setActiveSection] = useState('')
  const [showFeatureHub, setShowFeatureHub] = useState(false)
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [sectionSource, setSectionSource] = useState<'feature-hub' | 'conversion'>('conversion')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const showSectionTimerRef = useRef<number | null>(null)
  const backToMenuTimerRef = useRef<number | null>(null)
  const lastSectionViewRef = useRef<string | null>(null)
  const swipeStartXRef = useRef<number | null>(null)
  const swipeStartYRef = useRef<number | null>(null)
  const swipeEdgeEligibleRef = useRef(false)

  const setUrlHash = (sectionId: string | null) => {
    const url = new URL(window.location.href)
    url.hash = sectionId ? `#${sectionId}` : ''
    window.history.replaceState(null, '', url)
  }

  const clearTransitionTimers = () => {
    if (showSectionTimerRef.current !== null) {
      window.clearTimeout(showSectionTimerRef.current)
      showSectionTimerRef.current = null
    }
    if (backToMenuTimerRef.current !== null) {
      window.clearTimeout(backToMenuTimerRef.current)
      backToMenuTimerRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (showSectionTimerRef.current !== null) {
        window.clearTimeout(showSectionTimerRef.current)
        showSectionTimerRef.current = null
      }
      if (backToMenuTimerRef.current !== null) {
        window.clearTimeout(backToMenuTimerRef.current)
        backToMenuTimerRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '')
      if (!hash) return
      if (!isFeatureSection(hash)) return
      setSectionSource('conversion')
      setShowFeatureHub(false)
      setSideNavOpen(false)
      setActiveSection(hash)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  useEffect(() => {
    let viewKey = ''
    let source = sectionSource

    if (activeSection) {
      viewKey = activeSection
    } else if (showFeatureHub) {
      viewKey = 'feature_hub'
      source = 'feature-hub'
    } else {
      viewKey = 'conversion_landing'
      source = 'conversion'
    }

    if (viewKey && lastSectionViewRef.current !== viewKey) {
      trackSectionView(viewKey, { source })
      lastSectionViewRef.current = viewKey
    }
  }, [activeSection, showFeatureHub, sectionSource])

  const showSection = (sectionId: string, source: 'feature-hub' | 'conversion' = 'feature-hub') => {
    if (isTransitioning) return

    clearTransitionTimers()
    setIsTransitioning(true)

    showSectionTimerRef.current = window.setTimeout(() => {
      showSectionTimerRef.current = null
      setSectionSource(source)
      setActiveSection(sectionId)
      if (isFeatureSection(sectionId)) setUrlHash(sectionId)
      setIsTransitioning(false)
    }, 550)
  }

  const openFeatureHub = () => {
    setSectionSource('feature-hub')
    setShowFeatureHub(true)
  }

  const openSideNav = () => {
    setSideNavOpen(true)
  }

  const goHomeLanding = () => {
    setSideNavOpen(false)
    backToConversion()
  }

  const onLandingTouchStart = (event: React.TouchEvent) => {
    if (showFeatureHub || activeSection) return
    const touch = event.touches[0]
    if (!touch) return

    swipeStartXRef.current = touch.clientX
    swipeStartYRef.current = touch.clientY
    swipeEdgeEligibleRef.current = touch.clientX <= 28
  }

  const onLandingTouchEnd = (event: React.TouchEvent) => {
    if (showFeatureHub || activeSection) return
    if (!swipeEdgeEligibleRef.current) return

    const startX = swipeStartXRef.current
    const startY = swipeStartYRef.current
    swipeStartXRef.current = null
    swipeStartYRef.current = null
    swipeEdgeEligibleRef.current = false

    if (startX == null || startY == null) return
    const touch = event.changedTouches[0]
    if (!touch) return

    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    if (deltaX > 52 && Math.abs(deltaY) < 36) {
      openSideNav()
    }
  }

  const backToConversion = () => {
    clearTransitionTimers()
    setIsTransitioning(false)
    setShowFeatureHub(false)
    setActiveSection('')
    setSectionSource('conversion')
    setUrlHash(null)
  }

  const backToMenu = () => {
    if (isTransitioning) return
    clearTransitionTimers()
    setIsTransitioning(true)

    backToMenuTimerRef.current = window.setTimeout(() => {
      backToMenuTimerRef.current = null
      setActiveSection('')
      setShowFeatureHub(sectionSource === 'feature-hub')
      setUrlHash(null)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <>
      <LoadingScreen />
      <AmbientBg />
      <GridOverlay />
      <NotificationPrompt />
      <ScrollTracker />
      <FloatingWhatsApp />

      <div
        className={`container ${isTransitioning ? 'container-transitioning' : ''} ${
          showFeatureHub || Boolean(activeSection) || sideNavOpen ? 'sidenav-active' : ''
        }`}
        onTouchStart={onLandingTouchStart}
        onTouchEnd={onLandingTouchEnd}
      >
        {showFeatureHub || Boolean(activeSection) || sideNavOpen ? (
          <FeatureHubSideNav
            activeSection={activeSection}
            mode={!showFeatureHub && !activeSection ? 'landing' : 'featureHub'}
            mobileOpen={!showFeatureHub && !activeSection ? sideNavOpen : undefined}
            onMobileOpenChange={!showFeatureHub && !activeSection ? setSideNavOpen : undefined}
            onGoHome={goHomeLanding}
            onShowMenu={
              !showFeatureHub && !activeSection
                ? () => {
                    setSideNavOpen(false)
                    openFeatureHub()
                  }
                : showFeatureHub
                  ? backToMenu
                  : openFeatureHub
            }
            onNavigate={(sectionId) => showSection(sectionId, showFeatureHub ? 'feature-hub' : 'conversion')}
          />
        ) : (
          <button
            type="button"
            className="featurehub-entry-arrow"
            aria-label="Buka navigasi"
            onClick={openSideNav}
          >
            <ChevronIcon className="featurehub-entry-arrow-icon" />
          </button>
        )}
        {/* Feature Hub Header */}
        {!activeSection && showFeatureHub && (
          <div id="mainHeader">
            <Header />
          </div>
        )}

        {/* Conversion Landing - default first view */}
        {!activeSection && !showFeatureHub && <ConversionLanding onOpenFeatureHub={openFeatureHub} />}

        {/* Feature Hub (secondary flow) */}
        {!activeSection && showFeatureHub && (
          <>
            <MenuGrid showSection={(sectionId) => showSection(sectionId, 'feature-hub')} isTransitioning={isTransitioning} />
            <div className="feature-hub-toolbar">
              <button
                type="button"
                className="conversion-secondary-link feature-hub-back-btn"
                onClick={backToConversion}
              >
                Kembali ke Penawaran
              </button>
            </div>
          </>
        )}

        {/* Content Sections */}
        <div id="contentArea">
          {/* Introduction Section */}
          <div
            className={`content-section ${activeSection === 'introduction' ? 'active' : ''}`}
            id="introduction"
            style={{ display: activeSection === 'introduction' ? 'block' : 'none' }}
          >
            <Introduction backToMenu={backToMenu} isActive={activeSection === 'introduction'} />
          </div>

          {/* Services Section */}
          <div
            className={`content-section ${activeSection === 'services' ? 'active' : ''}`}
            id="services"
            style={{ display: activeSection === 'services' ? 'block' : 'none' }}
          >
            <Services backToMenu={backToMenu} isActive={activeSection === 'services'} />
          </div>

          {/* Gallery Section */}
          <div
            className={`content-section ${activeSection === 'gallery' ? 'active' : ''}`}
            id="gallery"
            style={{ display: activeSection === 'gallery' ? 'block' : 'none' }}
          >
            <Gallery backToMenu={backToMenu} />
          </div>

          {/* Testimonials Section */}
          <div
            className={`content-section ${activeSection === 'testimonials' ? 'active' : ''}`}
            id="testimonials"
            style={{ display: activeSection === 'testimonials' ? 'block' : 'none' }}
          >
            <Testimonials backToMenu={backToMenu} isActive={activeSection === 'testimonials'} />
          </div>

          {/* Event Section */}
          <div
            className={`content-section ${activeSection === 'event' ? 'active' : ''}`}
            id="event"
            style={{ display: activeSection === 'event' ? 'block' : 'none' }}
          >
            <GeuwatEvent backToMenu={backToMenu} isActive={activeSection === 'event'} />
          </div>

          {/* Ambassador Section */}
          <div
            className={`content-section ${activeSection === 'ambassador' ? 'active' : ''}`}
            id="ambassador"
            style={{ display: activeSection === 'ambassador' ? 'block' : 'none' }}
          >
            <GeuwatAmbassador backToMenu={backToMenu} isActive={activeSection === 'ambassador'} />
          </div>

          {/* About Section */}
          <div
            className={`content-section ${activeSection === 'about' ? 'active' : ''}`}
            id="about"
            style={{ display: activeSection === 'about' ? 'block' : 'none' }}
          >
            <About backToMenu={backToMenu} isActive={activeSection === 'about'} />
          </div>

          {/* Contact Section */}
          <div
            className={`content-section ${activeSection === 'contact' ? 'active' : ''}`}
            id="contact"
            style={{ display: activeSection === 'contact' ? 'block' : 'none' }}
          >
            <Contact backToMenu={backToMenu} />
          </div>
        </div>

        <div aria-hidden="true" className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`} />
      </div>
    </>
  )
}
