/* eslint-disable react/prop-types */
import { type ProjectData } from '@/pages/api/data'
import AnimatedSection from '../PageAnimation'

const ProjectCard: React.FC<ProjectData> = (projectSpec) => {
  const techArray = projectSpec.tech.split(' - ').map((t) => t.trim())

  return (
    <AnimatedSection>
      <article className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-light-border  shadow-lg backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-glass'>
        {/* Subtle outer glow on hover */}
        <div className='pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/15 via-purple-500/15 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100' />

        {/* Gradient overlay */}
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

        <div className='relative z-10 flex flex-col gap-6 p-8'>
          {/* Title */}
          <h3 className='text-[2rem] font-bold leading-tight text-primary transition-all duration-300 group-hover:text-primary-light'>
            {projectSpec.title}
          </h3>

          {/* Description */}
          <p className='flex-grow text-[1.05rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
            {projectSpec.desc}
          </p>

          {/* Tech Stack Section */}
          <div className='space-y-3'>
            <p className='text-xs font-bold uppercase tracking-widest text-light-text-secondary dark:text-dark-text-secondary'>
              Tech Stack
            </p>
            <div className='flex flex-wrap gap-2'>
              {techArray.map((technology, index) => (
                <span
                  key={index}
                  className='rounded-md border border-light-border bg-white/50 px-3 py-1.5 text-xs font-medium text-light-text-secondary shadow-inner backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary'
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <a
            href={projectSpec.repository}
            target='_blank'
            rel='noreferrer'
            className='group/link inline-flex w-fit items-center gap-2 text-sm font-bold text-primary transition-all duration-300 hover:gap-3'
          >
            <svg className='h-5 w-5 transition-transform duration-300 group-hover/link:rotate-12' fill='currentColor' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
            <span className='relative'>
              View Repository
              <span className='absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-purple-500 transition-transform duration-300 group-hover/link:scale-x-100' />
            </span>
            <svg className='h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </div>
      </article>
    </AnimatedSection>
  )
}

export default ProjectCard
