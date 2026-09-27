import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollProjects = (direction: 'left' | 'right') => {
    projectsRef.current?.scrollBy({
      left:
        direction === 'right'
          ? projectsRef.current.clientWidth
          : -projectsRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Selected Work
            </p>

            <h2
              id="projects-heading"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Projects
            </h2>
            {/*
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              A selection of engineering and research projects exploring
              software development, machine learning, and data-intensive
              systems.
            </p>
            */}
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollProjects('left')}
              aria-label="Previous projects"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects('right')}
              aria-label="Next projects"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={projectsRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scrollbar-none"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[calc(100%-2rem)] shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
