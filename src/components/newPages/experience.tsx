import React from 'react'
import AnimatedSection from '../PageAnimation'
import { experienceData } from '@/pages/api/data'

const Bullets: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className='space-y-3 text-[0.95rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
    {items.map((item, idx) => (
      <li key={idx} className='flex gap-3'>
        <span className='mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Experience: React.FC = () => {
  return (
    <div className='flex min-h-screen justify-center py-20' id='experience'>
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-16'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>Career</p>
          <h2 className='mb-3 text-[2rem] font-semibold text-light-text dark:text-dark-text lg:text-[2.5rem]'>
            Work Experience
          </h2>
          <p className='text-[1.05rem] text-light-text-secondary dark:text-dark-text-secondary'>
            From intern to senior engineer in under three years
          </p>
        </div>

        <ol className='relative mb-12 space-y-10 md:pl-12'>
          {/* Timeline rail */}
          <div className='absolute bottom-0 left-[1.15rem] top-2 hidden w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block' />

          {experienceData.map((experience, index) => (
            <li key={index} className='relative'>
              {/* Timeline node */}
              <div className='absolute -left-12 top-8 hidden h-[2.3rem] w-[2.3rem] items-center justify-center md:flex'>
                {index === 0 && <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40' />}
                <span className='relative flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-primary/50 bg-light-bg text-sm font-bold text-primary shadow-glow dark:bg-dark-bg'>
                  {experience.company.charAt(0)}
                </span>
              </div>

              <AnimatedSection>
                <article className='spotlight group relative overflow-hidden rounded-2xl border border-light-border p-6 shadow-lg backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-none lg:p-8'>
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5' />

                  {/* Header */}
                  <div className='relative z-10 mb-6 flex flex-col gap-4 border-b border-light-border pb-6 dark:border-glass-border md:flex-row md:items-start md:justify-between'>
                    <div>
                      <h3 className='mb-1 text-[1.3rem] font-semibold text-light-text dark:text-dark-text lg:text-[1.5rem]'>
                        {experience.position}
                      </h3>
                      <p className='mb-2 text-[1.1rem] font-medium text-primary lg:text-[1.2rem]'>{experience.company}</p>
                      {experience.location != null && (
                        <p className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>{experience.location}</p>
                      )}
                    </div>
                    <div className='flex flex-col items-start gap-2 md:items-end'>
                      <span className='flex items-center gap-2 rounded-lg border border-light-border bg-white/50 px-3 py-2 text-[0.85rem] text-light-text-secondary backdrop-blur-xl dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary'>
                        <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        {experience.date}
                      </span>
                      {experience.highlight != null && (
                        <span className='rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 px-3 py-1 text-xs font-semibold text-primary'>
                          ↑ {experience.highlight}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  {experience.metrics != null && (
                    <div className='relative z-10 mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4'>
                      {experience.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className='spotlight rounded-xl border border-light-border bg-white/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:border-glass-border dark:bg-dark-card/50'
                        >
                          <div className='bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-[1.6rem] font-bold text-transparent'>
                            {metric.value}
                          </div>
                          <div className='text-xs text-light-text-secondary dark:text-dark-text-secondary'>{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {experience.achievements.length > 0 && (
                    <div className='relative z-10 mb-6'>
                      <Bullets items={experience.achievements} />
                    </div>
                  )}

                  {/* Product sub-cards */}
                  {experience.projects != null && (
                    <div className='relative z-10 mb-6 space-y-4'>
                      {experience.projects.map((project) => (
                        <div
                          key={project.name}
                          className='spotlight rounded-xl border border-light-border bg-white/40 p-5 transition-colors duration-300 hover:border-primary/30 dark:border-glass-border dark:bg-dark-card/40 lg:p-6'
                        >
                          <div className='mb-4'>
                            <h4 className='flex items-center gap-2 text-[1.15rem] font-semibold text-light-text dark:text-dark-text'>
                              <span className='h-4 w-1 rounded-full bg-gradient-to-b from-primary to-purple-400' />
                              {project.name}
                            </h4>
                            <p className='mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary'>{project.tagline}</p>
                          </div>
                          <Bullets items={project.achievements} />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className='relative z-10 flex flex-wrap gap-2'>
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-lg border border-light-border bg-white/50 px-3 py-1.5 text-[0.8rem] text-light-text backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-dark-card/50 dark:text-dark-text'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Experience
