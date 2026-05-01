import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Introduction from './Introduction'

describe('Introduction section', () => {
  it('renders key section content', () => {
    render(<Introduction backToMenu={jest.fn()} isActive={true} />)

    expect(screen.getByRole('button', { name: 'Kembali ke Menu' })).toBeInTheDocument()
    expect(screen.getByText(/COMING SOON/i)).toBeInTheDocument()
    expect(screen.getByText(/GEUWAT Peduli/i)).toBeInTheDocument()
    expect(screen.getByText(/Bekal Nyata untuk Karier Pendidikan Pengajar Bahasa Inggris/i)).toBeInTheDocument()
    expect(screen.getByText(/Berbagi, Membangun Mimpi/i)).toBeInTheDocument()
  })

  it('calls backToMenu when back button is clicked', () => {
    const backToMenu = jest.fn()
    render(<Introduction backToMenu={backToMenu} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Menu' }))

    expect(backToMenu).toHaveBeenCalledTimes(1)
  })
})
