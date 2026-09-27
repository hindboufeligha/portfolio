import { useEffect, useState } from 'react'
import { Briefcase, Heart, ArrowRight, X, ChevronRight } from 'lucide-react'
import Linkedin from '../../styles/Linkedin'
import Github from '../../styles/Github'
import Envelope1 from '../../styles/Envelope1'
import Rocket5 from '../../styles/Rocket5'
import ChatBubble2 from '../../styles/ChatBubble2'

const rose = '#b76e8a'
const roseDeep = '#b76e8a'
const pillBg = '#f6e9ea'
const pillText = '#3d4351'
const ink = '#2c3242'
const muted = '#8b8f9c'
const hairline = '#ece3e2'
const panelBg = '#fdf7f6'

// keep this short:
const skillHighlights: string[] = [
  'Python',
  'Java',
  'C',
  'SQL',
  'NoSQL',
  'PyTorch',
  'Flask',
  'React',
  'Typescript',
  'Docker',
  'Kubernetes',
  'Vue',
  'GCP',
  'nolds',
]

// full, categorized list
type SkillCategory = {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Data Science, Machine Learning',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn',
      'SciPy',
      'statsmodels',
      'nolds',
      'PyTorch',
    ],
  },
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'SQL', 'LaTeX'],
  },
  {
    category: 'Data & Backend Services',
    skills: [
      'Flask',
      'RESTful APIs',
      'Microservices',
      'Apache Kafka',
      'BigQuery',
      'MongoDB',
      'MySQL',
      'SQLite',
    ],
  },
  {
    category: 'Databases & Data Formats',
    skills: ['Firebase (Realtime Database, Firestore, Storage)', 'JSON', 'XML'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'Google Cloud Platform (GCP)',
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Git',
      'GitHub',
      'GitLab CI/CD',
      'JIRA',
      'YAML',
    ],
  },
  {
    category: 'Front-end',
    skills: ['Vue.js', 'Vuetify', 'HTML5', 'CSS3'],
  },
  {
    category: 'Testing',
    skills: ['unittest'],
  },
  {
    category: 'UI/UX',
    skills: ['Figma'],
  },
]

type ExperienceItem = {
  period: string
  title: string
  company: string
  description: string
}

const experience: ExperienceItem[] = [
  {
    period: 'Feb – Apr 2026',
    title: 'Machine Learning Developer for R&D Intern',
    company: 'Swisdata',
    description:
      'Contributed to an R&D project (LabIntel) on Bayesian optimisation before transitioning to a software development project focused on asynchronous Playwright pipelines for automated data collection.',
  },
  {
    period: 'Summer 2021',
    title: 'Front-End Developer Intern',
    company: 'MGS Software, Istanbul',
    description: 'Developed UI components with Vue and Vuetify.',
  },
  {
    period: 'Summer 2020',
    title: 'Android Developer Intern',
    company: 'Entegre Yazılım, Türkiye',
    description: 'Built an E-Food android application with Java.',
  },
]

function SectionHeading({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span style={{ color: rose }}>{icon}</span>
      <h2 className="text-[15px] font-semibold" style={{ color: ink }}>
        {children}
      </h2>
    </div>
  )
}

function SkillPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-4 py-1.5 text-[13px]"
      style={{ backgroundColor: pillBg, color: pillText }}
    >
      {label}
    </span>
  )
}

function MoreSkillsPill({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="View the full skill list"
      aria-haspopup="dialog"
      className="group inline-flex items-center gap-1 rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all hover:shadow-sm"
      style={{
        borderColor: rose,
        color: rose,
        backgroundColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = pillBg
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      + more
      <ChevronRight
        size={13}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </button>
  )
}

function SkillsModal({ onClose }: { onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skills-modal-heading"
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8 shadow-xl sm:p-10"
        style={{ backgroundColor: panelBg }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px]" style={{ color: muted }}></p>
            <h2
              id="skills-modal-heading"
              className="mt-1 text-[17px] font-semibold"
              style={{ color: ink }}
            >
              Skills & Technologies
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 transition-colors hover:bg-black/5"
            style={{ color: muted }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <p
                className="text-[12px] font-semibold uppercase tracking-wide"
                style={{ color: rose }}
              >
                {group.category}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Contact() {
  const [isSkillsModalOpen, setSkillsModalOpen] = useState(false)

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-16"
    >
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-2xl"
        style={{ backgroundColor: panelBg }}
      >
        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr]">
          {/* Skills & Technologies */}
          <div className="p-8 sm:p-10">
            <SectionHeading icon={<Rocket5 />}>
              Skills & Technologies
            </SectionHeading>

            <div className="mt-6 flex flex-wrap gap-2">
              {skillHighlights.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
              <MoreSkillsPill onClick={() => setSkillsModalOpen(true)} />
            </div>
          </div>

          {/* Experience */}
          <div
            className="border-t p-8 sm:p-10 lg:border-l lg:border-t-0"
            style={{ borderColor: hairline }}
          >
            <SectionHeading icon={<Briefcase size={18} strokeWidth={2} />}>
              Experience
            </SectionHeading>

            <ul className="mt-6 space-y-6">
              {experience.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: rose }}
                    aria-hidden
                  />
                  <div className="grid gap-x-6 sm:grid-cols-[130px_1fr]">
                    <p className="text-[13px]" style={{ color: muted }}>
                      {item.period}
                    </p>
                    <div>
                      <p
                        className="text-[13px] font-semibold leading-5"
                        style={{ color: ink }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-0.5 text-[12px] font-medium leading-5"
                        style={{ color: rose }}
                      >
                        {item.company}
                      </p>
                      <p
                        className="mt-1 text-[13px] leading-5"
                        style={{ color: muted }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's connect */}
          <div
            className="relative border-t p-8 sm:p-10 lg:border-l lg:border-t-0"
            style={{ borderColor: hairline }}
          >
            <SectionHeading icon={<ChatBubble2 />}>
              Let&apos;s connect
            </SectionHeading>

            <p className="mt-4 text-[13px] leading-6" style={{ color: muted }}>
              I&apos;m always open to new opportunities, collaborations and
              interesting conversations.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: roseDeep, color: '#ffffff' }}
            >
              Get in touch
              <ArrowRight size={14} color="#ffffff" />
            </a>

            <div
              className="mt-8 flex items-center gap-4"
              style={{ color: ink }}
            >
              <a href="mailto:hind.boufeligha@gmail.com" aria-label="Email">
                <Envelope1 />
              </a>
              <a
                href="https://github.com/hindboufeligha"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/hindboufeligha/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>

            {/* handwritten note */}
            <p
              className="pointer-events-none absolute bottom-8 right-7 -rotate-6 text-[15px] leading-tight"
              style={{
                color: rose,
                fontFamily: "'Caveat', cursive",
              }}
            >
              Thanks for
              <br />
              being here <Heart className="inline" size={12} fill={rose} />
            </p>
          </div>
        </div>
      </div>

      {isSkillsModalOpen && (
        <SkillsModal onClose={() => setSkillsModalOpen(false)} />
      )}
    </section>
  )
}

export default Contact
