import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main portfolio navigation', () => {
    render(<App />)

    expect(
      screen.getByRole('navigation', { name: 'Main navigation' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
    )

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )

    expect(screen.getByRole('link', { name: 'Research' })).toHaveAttribute(
      'href',
      '#publications',
    )

    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute(
      'href',
      '#contact',
    )

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('renders the portfolio home link', () => {
    render(<App />)

    expect(
      screen.getByRole('link', { name: 'Hind Boufeligha — home' }),
    ).toHaveAttribute('href', '#top')
  })
})
