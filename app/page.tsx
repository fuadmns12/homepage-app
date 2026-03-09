'use client'

import { useEffect, useRef, useState } from 'react'
import LoadingScreen from './components/ui/LoadingScreen'
import AmbientBg from './components/ui/AmbientBg'
import GridOverlay from './components/ui/GridOverlay'
import NotificationPrompt from './components/ui/NotificationPrompt'
import Header from './components/layout/Header'
import MenuGrid from './components/layout/MenuGrid'
import ConversionLanding from './components/sections/ConversionLanding'
import Introduction from './components/sections/Introduction'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')
  const [showFeatureHub, setShowFeatureHub] = useState(false)
  const [sectionSource, setSectionSource] = useState<'feature-hub' | 'conversion'>('conversion')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const showSectionTimerRef = useRef<number | null>(null)
  const backToMenuTimerRef = useRef<number | null>(null)

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
  
  const showSection = (sectionId: string, source: 'feature-hub' | 'conversion' = 'feature-hub') => {
    if (isTransitioning) return
    
    clearTransitionTimers()
    setIsTransitioning(true)
    
    showSectionTimerRef.current = window.setTimeout(() => {
      showSectionTimerRef.current = null
      setSectionSource(source)
      setActiveSection(sectionId)
      setIsTransitioning(false)
    }, 550)
  }

  const openFeatureHub = () => {
    setShowFeatureHub(true)
  }

  const backToConversion = () => {
    clearTransitionTimers()
    setIsTransitioning(false)
    setShowFeatureHub(false)
    setActiveSection('')
    setSectionSource('conversion')
  }
  
  const backToMenu = () => {
    if (isTransitioning) return
    clearTransitionTimers()
    setIsTransitioning(true)
    
    backToMenuTimerRef.current = window.setTimeout(() => {
      backToMenuTimerRef.current = null
      setActiveSection('')
      setShowFeatureHub(sectionSource === 'feature-hub')
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <>
      <LoadingScreen />
      <AmbientBg />
      <GridOverlay />
      <NotificationPrompt />
      
      <div className="container">
        {/* Feature Hub Header */}
        {!activeSection && showFeatureHub && (
          <div id="mainHeader">
            <Header />
          </div>
        )}

        {/* Conversion Landing - default first view */}
        {!activeSection && !showFeatureHub && (
          <ConversionLanding onOpenFeatureHub={openFeatureHub} />
        )}

        {/* Feature Hub (secondary flow) */}
        {!activeSection && showFeatureHub && (
          <>
            <MenuGrid
              showSection={(sectionId) => showSection(sectionId, 'feature-hub')}
              isTransitioning={isTransitioning}
            />
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
          <div className={`content-section ${activeSection === 'introduction' ? 'active' : ''}`} id="introduction" style={{ display: activeSection === 'introduction' ? 'block' : 'none' }}>
            <Introduction backToMenu={backToMenu} isActive={activeSection === 'introduction'} />
          </div>

          {/* Services Section */}
          <div className={`content-section ${activeSection === 'services' ? 'active' : ''}`} id="services" style={{ display: activeSection === 'services' ? 'block' : 'none' }}>
            <Services backToMenu={backToMenu} isActive={activeSection === 'services'} />
          </div>

          {/* Gallery Section */}
          <div className={`content-section ${activeSection === 'gallery' ? 'active' : ''}`} id="gallery" style={{ display: activeSection === 'gallery' ? 'block' : 'none' }}>
            <Gallery backToMenu={backToMenu} />
          </div>

          {/* Testimonials Section */}
          <div className={`content-section ${activeSection === 'testimonials' ? 'active' : ''}`} id="testimonials" style={{ display: activeSection === 'testimonials' ? 'block' : 'none' }}>
            <Testimonials backToMenu={backToMenu} isActive={activeSection === 'testimonials'} />
          </div>

          {/* About Section */}
          <div className={`content-section ${activeSection === 'about' ? 'active' : ''}`} id="about" style={{ display: activeSection === 'about' ? 'block' : 'none' }}>
            <About backToMenu={backToMenu} isActive={activeSection === 'about'} />
          </div>

          {/* Contact Section */}
          <div className={`content-section ${activeSection === 'contact' ? 'active' : ''}`} id="contact" style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
            <Contact backToMenu={backToMenu} />
          </div>
        </div>
      </div>
    </>
  )
}
