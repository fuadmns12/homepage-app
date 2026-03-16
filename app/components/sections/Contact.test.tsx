import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'

describe('Contact section', () => {
  it('renders contact header and static subscription price', () => {
    render(<Contact backToMenu={jest.fn()} />)

    expect(screen.getByText('Kontak')).toBeInTheDocument()
    expect(screen.getByText('Hubungi tim GEUWAT')).toBeInTheDocument()
    expect(screen.queryByText('Harga Program')).not.toBeInTheDocument()
    expect(screen.getAllByText('Rp159.000')).toHaveLength(1)
    expect(screen.getByText('Upgrade Diri')).toBeInTheDocument()
    expect(screen.getByText('Akses penuh, sekali investasi.')).toBeInTheDocument()
  })

  it('renders register, login, and contact links', () => {
    render(<Contact backToMenu={jest.fn()} />)

    expect(screen.getByRole('link', { name: 'Daftar Sekarang' })).toHaveAttribute('href', '/register')
    expect(screen.getByRole('link', { name: 'Login to Account' })).toHaveAttribute(
      'href',
      'https://learningenglishgeuwat.vercel.app'
    )
    expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute('href', 'https://wa.me/6285846003119')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/learningenglishgeuwat/'
    )
    expect(screen.getByText('learningenglishgeuwat@gmail.com')).toBeInTheDocument()
  })

  it('calls backToMenu when back button is clicked', () => {
    const backToMenu = jest.fn()
    render(<Contact backToMenu={backToMenu} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Menu' }))

    expect(backToMenu).toHaveBeenCalledTimes(1)
  })
})
