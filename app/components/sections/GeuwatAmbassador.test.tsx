import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GeuwatAmbassador from './GeuwatAmbassador'

describe('GeuwatAmbassador section', () => {
  it('renders ambassador navigation', () => {
    render(<GeuwatAmbassador backToMenu={jest.fn()} isActive={true} />)

    expect(screen.getAllByText('GEUWAT AMBASSADOR').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'GEUWAT Ambassador +18' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GEUWAT Ambassador <18' })).toBeInTheDocument()
  })

  it('calls backToMenu', () => {
    const backToMenu = jest.fn()
    render(<GeuwatAmbassador backToMenu={backToMenu} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Menu' }))
    expect(backToMenu).toHaveBeenCalledTimes(1)
  })
})
