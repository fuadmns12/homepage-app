import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Services from './Services'

describe('Services section', () => {
  it('renders modul tab by default with unlocked subject cards', () => {
    render(<Services backToMenu={jest.fn()} isActive={true} />)

    expect(screen.getByText('Fitur Kami')).toBeInTheDocument()
    expect(screen.getByText('Pronunciation')).toBeInTheDocument()
    expect(screen.getByText('Vocabulary')).toBeInTheDocument()
    expect(screen.getByText('Grammar')).toBeInTheDocument()
    expect(screen.getByText('Speaking')).toBeInTheDocument()
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

  it('calls backToMenu from back button', () => {
    const backToMenu = jest.fn()
    render(<Services backToMenu={backToMenu} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Menu' }))

    expect(backToMenu).toHaveBeenCalledTimes(1)
  })
})
