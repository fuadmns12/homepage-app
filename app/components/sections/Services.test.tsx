import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Services from './Services'

describe('Services section', () => {
  it('renders modul tab by default with unlocked subject cards', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    expect(screen.getByText('Fitur Kami')).toBeInTheDocument()
    expect(screen.getByText(/Intinya GEUWAT/i)).toBeInTheDocument()
    expect(screen.getByText('Jalur Personal')).toBeInTheDocument()
    expect(screen.getByText('Modul Skill')).toBeInTheDocument()
    expect(screen.getByText('Akses Aman')).toBeInTheDocument()
    expect(screen.getByText('Apa aja sih di GEUWAT?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pronunciation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Vocabulary' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Grammar' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Speaking' })).toBeInTheDocument()
    expect(screen.getByText('Modul Inti Pembelajaran')).toBeInTheDocument()
    expect(screen.getAllByText('Pengucapan').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Achievement').length).toBeGreaterThan(0)
    expect(screen.queryByText('Locked')).not.toBeInTheDocument()
    expect(screen.queryByText('Soon')).not.toBeInTheDocument()
  })

  it('toggles pronunciation topic dropdown and keeps connected speech as soon', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    const pronunciationCard = screen.getByRole('button', { name: /Pronunciation/i })
    expect(screen.getByText('Lihat topik')).toBeInTheDocument()

    fireEvent.click(pronunciationCard)
    expect(screen.getByText('Sembunyikan topik')).toBeInTheDocument()
    expect(screen.getByText('Connected Speech').closest('li')).toHaveClass('locked')
    expect(screen.getByText('Stressing').closest('li')).not.toHaveClass('locked')
    expect(screen.getByText('Final Sound').closest('li')).not.toHaveClass('locked')
    expect(screen.getByText('American /t/').closest('li')).not.toHaveClass('locked')
  })

  it('opens desain tab and renders both youtube videos', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Desain' }))

    const laptop = screen.getByTitle('Desain Laptop')
    const hp = screen.getByTitle('Desain HP')

    expect(laptop).toHaveAttribute('src', expect.stringContaining('33JP1F-lfAs'))
    expect(hp).toHaveAttribute('src', expect.stringContaining('FMD3y8bXcZ8'))
  })

  it('opens konsultasi tab and shows WhatsApp chat button', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Konsultasi' }))

    const chat = screen.getByRole('link', { name: 'Chat WhatsApp' })
    expect(chat).toHaveAttribute('href', 'https://wa.me/6285846003119')
  })

  it('opens dukungan tab and shows FAQ list', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Dukungan' }))

    expect(screen.getByText('Pertanyaan Umum')).toBeInTheDocument()
    expect(screen.getByText(/Apakah GEUWAT cocok untuk pemula/i)).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Semua' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Batch' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('tab', { name: 'Batch' }))
    expect(screen.getByText(/Kapan Batch selanjutnya dibuka/i)).toBeInTheDocument()
    expect(screen.queryByText(/Bagaimana cara daftarnya/i)).not.toBeInTheDocument()
  })

  it('opens update tab and shows social media cards', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Update' }))

    expect(screen.getByText('Social Media')).toBeInTheDocument()
    expect(screen.getByLabelText('Buka Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Buka TikTok')).toBeInTheDocument()
  })

  it('calls backToMenu from back button', () => {
    const backToMenu = jest.fn()
    render(<Services backToMenu={backToMenu} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Menu' }))

    expect(backToMenu).toHaveBeenCalledTimes(1)
  })
})
