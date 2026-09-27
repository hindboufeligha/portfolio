import { ExternalLink } from 'lucide-react'
import { publications } from '../../data/publications'

function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Research & Academic Work
          </p>

          <h2
            id="publications-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Research & Publications
          </h2>
          {/* 
          <p className="mt-5 leading-8 text-[var(--color-muted)]">
            Research contributions exploring computing systems, data analysis,
            and machine learning.
          </p>
          */}
        </div>

        <div className="mt-12 space-y-6">
          {publications.map((publication) => (
            <article
              key={publication.id}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-accent)]">
                  {publication.status.replace('-', ' ')}
                </span>

                <span className="text-sm text-[var(--color-muted)]">
                  {publication.year}
                </span>
              </div>

              <h3 className="mt-6 max-w-4xl text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                {publication.title}
              </h3>

              <p className="mt-3 text-sm text-[var(--color-muted)]">
                {publication.authors.join(', ')}
              </p>

              <p className="mt-1 text-sm font-medium">{publication.venue}</p>

              <p className="mt-5 max-w-3xl leading-7 text-[var(--color-muted)]">
                {publication.description}
              </p>

              {publication.url && (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  {publication.status === 'msc-thesis'
                    ? 'View thesis'
                    : 'View publication'}
                  <ExternalLink
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
