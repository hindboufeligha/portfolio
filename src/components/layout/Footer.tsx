function Footer() {
  return (
    <footer className="bg-[var(--color-muted)] px-6 py-10 text-[var(--color-background)]">
      <div className="mx-auto flex max-w-[var(--content-width)] flex-col gap-3 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold text-[var(--color-accent-foreground)]/60">
          © 2026 Hind Boufeligha
        </p>

        <p className="text-xs font-semibold text-[var(--color-accent-foreground)]/60">
          v0.1 · Pre-release
        </p>
      </div>
    </footer>
  )
}

export default Footer
