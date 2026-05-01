import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GeuwatEvent from './GeuwatEvent'

describe('GeuwatEvent section', () => {
  it('renders coming soon content', () => {
    render(<GeuwatEvent backToMenu={jest.fn()} isActive={true} />)

    expect(screen.getAllByText('GEUWAT EVENT').length).toBeGreaterThan(0)
    expect(screen.getByText(/COMING SOON/i)).toBeInTheDocument()
  })

  it('calls backToMenu', () => {
    const backToMenu = jest.fn()
    render(<GeuwatEvent backToMenu={backToMenu} isActive={true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke Menu' }))
    expect(backToMenu).toHaveBeenCalledTimes(1)
  })
})
