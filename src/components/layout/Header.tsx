import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#hero', active: true },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Skills', href: '#contact' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [activeItem, setActiveItem] = useState('Home')

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section) => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting)
        if (visibleSections.length === 0) return

        const referencePoint = window.innerHeight * 0.3

        const activeSection = visibleSections.reduce((closest, current) => {
          return Math.abs(current.boundingClientRect.top - referencePoint) <
            Math.abs(closest.boundingClientRect.top - referencePoint)
            ? current
            : closest
        })

        const activeNavigationItem = navigationItems.find(
          (item) => item.href === `#${activeSection.target.id}`,
        )

        if (activeNavigationItem) {
          setActiveItem(activeNavigationItem.label)
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[var(--content-width)] items-center justify-between px-6">
        <a
          href="#hero"
          className="shrink-0 font-semibold tracking-tight"
          aria-label="Hind Boufeligha — home"
          onClick={() => setActiveItem('Home')}
        >
          Hind Boufeligha
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => {
              const isActive = activeItem === item.label

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={item.active ? 'location' : undefined}
                    onClick={() => setActiveItem(item.label)}
                    className={`relative py-2 text-sm transition-colors hover:text-[var(--color-foreground)] ${
                      item.active
                        ? 'font-medium text-[var(--color-foreground)]'
                        : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--color-accent)]"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle theme"
          className="shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm"
        >
          ◐
        </button>
      </div>
    </header>
  )
}

export default Header
