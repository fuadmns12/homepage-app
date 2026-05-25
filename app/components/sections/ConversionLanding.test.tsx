import { render, screen } from '@testing-library/react'
import ConversionLanding from './ConversionLanding'

jest.mock('@/lib/analytics', () => ({
  trackCtaClick: jest.fn(),
}))

describe('ConversionLanding', () => {
  it('renders the hero pricing and new lower pricing card', () => {
    render(<ConversionLanding onOpenFeatureHub={() => {}} />)

    expect(screen.getByText(/Paket Edukasi/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Rp599.000/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Akses penuh sekali bayar, bukan langganan/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Daftar Sekarang/i })).toHaveAttribute('href', '/register')
  })

  it('includes the FAQ pricing confirmation text', () => {
    render(<ConversionLanding onOpenFeatureHub={() => {}} />)

    expect(
      screen.getByText(/Kami menyediakan dua pilihan fleksibel/i)
    ).toBeInTheDocument()
  })
})
