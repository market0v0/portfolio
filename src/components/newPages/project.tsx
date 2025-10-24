import React from 'react'
import { type ProjectData } from '@/pages/api/data'

interface ProjectProps extends ProjectData {
  featured?: boolean
}

const Project: React.FC<ProjectProps> = ({ img, title, desc, tech, repository, featured = false }) => {
  const techArray = tech.split(' - ').map((t) => t.trim())

  if (featured) {
    return (
      <article className='group relative overflow-hidden rounded-3xl border border-light-border  shadow-lg backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-glass'>
        {/* Multi-layer glow effects */}
        <div className='pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100' />
        <div className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100' />

        {/* Animated gradient overlay */}
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100' />

        <div className='relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-2'>
          {/* Image Section */}
          <div className='relative overflow-hidden border-b border-light-border/50 lg:border-b-0 lg:border-r dark:border-glass-border/50'>
            <div className='aspect-[4/3] w-full lg:aspect-auto lg:h-full'>
              <div className='relative h-full w-full p-6 lg:p-8'>
                <div className='relative h-full w-full overflow-hidden rounded-2xl border border-light-border/30 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent shadow-inner dark:border-glass-border/30'>
                  <img
                    src={img}
                    alt={title}
                    className='h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110'
                  />
                  {/* Image overlay gradients */}
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100' />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='flex flex-col justify-between p-8 lg:p-10'>
            {/* Featured Badge */}
            <div className='mb-6'>
              <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-inner backdrop-blur-xl'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75'></span>
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-primary'></span>
                </span>
                Featured Project
              </span>
            </div>

            <div className='flex-grow'>
              <h3 className='mb-5 text-[2rem] font-bold leading-tight text-light-text transition-colors duration-300 group-hover:text-primary dark:text-dark-text lg:text-[2.5rem]'>
                {title}
              </h3>

              <p className='mb-8 text-[1.05rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
                {desc}
              </p>

              {/* Tech Stack Section */}
              <div className='mb-8'>
                <div className='mb-4 flex items-center gap-2'>
                  <div className='h-px flex-grow bg-gradient-to-r from-light-border to-transparent dark:from-glass-border' />
                  <p className='text-xs font-bold uppercase tracking-widest text-light-text-secondary dark:text-dark-text-secondary'>
                    Tech Stack
                  </p>
                  <div className='h-px flex-grow bg-gradient-to-l from-light-border to-transparent dark:from-glass-border' />
                </div>
                <div className='flex flex-wrap gap-2'>
                  {techArray.map((technology, index) => (
                    <span
                      key={index}
                      className='group/tag relative overflow-hidden rounded-lg border border-light-border bg-white/50 px-3 py-2 text-sm font-medium text-light-text shadow-inner backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-glow dark:border-glass-border dark:bg-glass-bg dark:text-dark-text'
                    >
                      <span className='relative z-10'>{technology}</span>
                      <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover/tag:opacity-100' />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <a
              href={repository}
              target='_blank'
              rel='noreferrer'
              className='group/link relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-purple-500/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary shadow-inner backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:from-primary hover:to-purple-500 hover:text-white hover:shadow-glow'
            >
              <span className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover/link:opacity-100' />
              <svg className='relative z-10 h-5 w-5 transition-transform duration-300 group-hover/link:rotate-12' fill='currentColor' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='relative z-10'>View Repository</span>
              <svg className='relative z-10 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
          </div>
        </div>
      </article>
    )
  }

  // Grid project card - Compact, uniform design
  return (
    <article className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-light-border  shadow-lg backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-glass'>
      {/* Subtle outer glow on hover */}
      <div className='pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/15 via-purple-500/15 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100' />

      {/* Gradient overlay */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

      <div className='relative z-10 flex h-full flex-col'>
        {/* Image Section */}
        <div className='relative overflow-hidden border-b border-light-border/50 dark:border-glass-border/50'>
          <div className='aspect-[16/10] w-full'>
            <div className='relative h-full w-full p-5'>
              <div className='relative h-full w-full overflow-hidden rounded-xl border border-light-border/30 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent shadow-inner dark:border-glass-border/30'>
                <img
                  src={img}
                  alt={title}
                  className='h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105'
                />
                {/* Image overlay */}
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-grow flex-col p-6'>
          <h3 className='mb-3 text-[1.4rem] font-bold leading-tight text-light-text transition-colors duration-300 group-hover:text-primary dark:text-dark-text'>
            {title}
          </h3>

          <p className='mb-6 line-clamp-3 flex-grow text-[0.95rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
            {desc}
          </p>

          {/* Tech Stack Section */}
          <div className='mb-6'>
            <p className='mb-3 text-xs font-bold uppercase tracking-widest text-light-text-secondary dark:text-dark-text-secondary'>
              Tech Stack
            </p>
            <div className='flex flex-wrap gap-2'>
              {techArray.slice(0, 4).map((technology, index) => (
                <span
                  key={index}
                  className='group/tag rounded-md border border-light-border bg-white/50 px-2.5 py-1.5 text-xs font-medium text-light-text-secondary shadow-inner backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary'
                >
                  {technology}
                </span>
              ))}
              {techArray.length > 4 && (
                <span className='rounded-md border border-light-border bg-white/50 px-2.5 py-1.5 text-xs font-medium text-light-text-secondary shadow-inner backdrop-blur-xl dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary'>
                  +{techArray.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Action Link */}
          <a
            href={repository}
            target='_blank'
            rel='noreferrer'
            className='group/link inline-flex w-fit items-center gap-2 text-sm font-bold text-primary transition-all duration-300 hover:gap-3'
          >
            <svg className='h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12' fill='currentColor' viewBox='0 0 24 24'>
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
      </div>
    </article>
  )
}

export default Project
