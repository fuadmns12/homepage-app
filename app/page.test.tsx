/* eslint-disable react/display-name */
import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Home from './page'

jest.mock('./components/ui/LoadingScreen', () => () => <div data-testid="loading-screen" />)
jest.mock('./components/ui/AmbientBg', () => () => <div data-testid="ambient-bg" />)
jest.mock('./components/ui/GridOverlay', () => () => <div data-testid="grid-overlay" />)
jest.mock('./components/ui/NotificationPrompt', () => () => <div data-testid="notification-prompt" />)
jest.mock('./components/layout/Header', () => () => <div data-testid="header">Header</div>)

jest.mock('./components/sections/ConversionLanding', () => {
  return function MockConversionLanding(props: { onOpenFeatureHub: () => void }) {
    return (
      <div data-testid="conversion-landing">
        <a href="/register">Daftar Sekarang</a>
        <button onClick={props.onOpenFeatureHub}>Open Feature Hub</button>
      </div>
    )
  }
})

jest.mock('./components/layout/MenuGrid', () => {
  return function MockMenuGrid(props: { showSection: (sectionId: string) => void }) {
    return (
      <div data-testid="menu-grid">
        <button onClick={() => props.showSection('about')}>Open About</button>
      </div>
    )
  }
})

jest.mock('./components/sections/Introduction', () => () => <div data-testid="introduction-section" />)
jest.mock('./components/sections/Services', () => () => <div data-testid="services-section" />)
jest.mock('./components/sections/Gallery', () => () => <div data-testid="gallery-section" />)
jest.mock('./components/sections/Testimonials', () => () => <div data-testid="testimonials-section" />)
jest.mock('./components/sections/Contact', () => () => <div data-testid="contact-section" />)
jest.mock('./components/sections/About', () => {
  return function MockAbout(props: { backToMenu: () => void; isActive: boolean }) {
    return (
      <div data-testid="about-section">
        <span>{props.isActive ? 'active' : 'inactive'}</span>
        <button onClick={props.backToMenu}>Back To Menu</button>
      </div>
    )
  }
})

describe('Home page conversion-first navigation', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    window.localStorage.clear()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('shows conversion landing by default', () => {
    render(<Home />)

    expect(screen.getByTestId('conversion-landing')).toBeInTheDocument()
    expect(screen.queryByTestId('menu-grid')).not.toBeInTheDocument()
    expect(screen.queryByTestId('header')).not.toBeInTheDocument()
  })

  it('opens feature hub, then opens section and returns to feature hub', () => {
    render(<Home />)

    fireEvent.click(screen.getByText('Open Feature Hub'))

    expect(screen.getByTestId('menu-grid')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Kembali ke Penawaran' })).toBeInTheDocument()

    fireEvent.click(screen.getByText('Open About'))
    act(() => {
      jest.advanceTimersByTime(550)
    })

    expect(screen.queryByTestId('menu-grid')).not.toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toHaveTextContent('active')

    fireEvent.click(screen.getByText('Back To Menu'))
    act(() => {
      jest.advanceTimersByTime(200)
    })

    expect(screen.getByTestId('menu-grid')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.queryByTestId('conversion-landing')).not.toBeInTheDocument()
  })

  it('returns to conversion landing when user clicks back to offer from feature hub', () => {
    render(<Home />)

    fireEvent.click(screen.getByText('Open Feature Hub'))
    expect(screen.getByTestId('menu-grid')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Penawaran' }))

    expect(screen.getByTestId('conversion-landing')).toBeInTheDocument()
    expect(screen.queryByTestId('menu-grid')).not.toBeInTheDocument()
    expect(screen.queryByTestId('header')).not.toBeInTheDocument()
  })

  it('starts from conversion landing even when localStorage has previous section', () => {
    window.localStorage.setItem('homepage_active_section', 'about')

    render(<Home />)

    expect(screen.getByTestId('conversion-landing')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toHaveTextContent('inactive')
  })

  it('cleans transition timers on unmount without console errors', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const { unmount } = render(<Home />)
    fireEvent.click(screen.getByText('Open Feature Hub'))
    fireEvent.click(screen.getByText('Open About'))

    unmount()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(errorSpy).not.toHaveBeenCalled()
    errorSpy.mockRestore()
  })
})
