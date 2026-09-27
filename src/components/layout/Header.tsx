function Header() {
  const navigationItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#publications' },
    { label: 'Skills', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[var(--content-width)] items-center justify-between px-6">
        <a
          href="#top"
          className="font-semibold tracking-tight"
          aria-label="Hind Boufeligha — home"
        >
          HB
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle theme"
          className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm"
        >
          ◐
        </button>
      </div>
    </header>
  )
}

export default Header
