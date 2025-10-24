import React from 'react'
import AnimatedSection from '../PageAnimation'
import { experienceData } from '@/pages/api/data'

const Experience: React.FC = () => {
  return (
    <div className='flex min-h-screen justify-center py-20' id='experience'>
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-16'>
          <h2 className='mb-3 text-[2rem] font-semibold text-light-text dark:text-dark-text lg:text-[2.5rem]'>
            Work Experience
          </h2>
          <p className='text-light-text-secondary dark:text-dark-text-secondary'>My professional journey as a software engineer</p>
        </div>

        <div className='mb-12 space-y-6'>
          {experienceData.map((experience, index) => (
            <AnimatedSection key={index}>
              <div className='group relative overflow-hidden rounded-2xl border border-light-border  p-6 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-none lg:p-8'>
                {/* Glass shine effect */}
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5' />

                <div className='relative z-10 mb-6 flex flex-col gap-4 border-b border-light-border pb-6 md:flex-row md:items-start md:justify-between dark:border-glass-border'>
                  <div className='flex flex-col gap-4 sm:flex-row sm:items-start'>
                    {/* Company Logo */}
                    <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-light-border bg-white/50 p-3 backdrop-blur-xl dark:border-glass-border dark:bg-dark-card/50'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <span className='text-[1.5rem] font-bold text-primary'>
                          {experience.company.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div>
                      <h3 className='mb-1 text-[1.3rem] font-semibold text-light-text dark:text-dark-text lg:text-[1.5rem]'>
                        {experience.position}
                      </h3>
                      <p className='mb-2 text-[1.1rem] font-medium text-primary lg:text-[1.2rem]'>
                        {experience.company}
                      </p>
                      {(experience.location != null) && experience.location.length > 0 && (
                        <p className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>
                          {experience.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className='flex items-center gap-2 rounded-lg border border-light-border bg-white/50 px-3 py-2 text-[0.85rem] text-light-text-secondary backdrop-blur-xl sm:shrink-0 dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary'>
                    <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                    </svg>
                    {experience.date}
                  </div>
                </div>

                <div className='relative z-10 mb-6'>
                  <ul className='space-y-3 text-[0.95rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className='flex gap-3'>
                        <span className='text-primary'>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='relative z-10'>
                  <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-light-text-secondary dark:text-dark-text-secondary'>Technologies</p>
                  <div className='flex flex-wrap gap-2'>
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='rounded-lg border border-light-border bg-white/50 px-3 py-1.5 text-[0.85rem] text-light-text backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10 dark:border-glass-border dark:bg-dark-card/50 dark:text-dark-text'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Experience
