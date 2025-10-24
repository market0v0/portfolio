import Project from '@/components/newPages/project'
import React from 'react'
import { projectsdata } from '../../pages/api/data'
import AnimatedSection from '@/components/PageAnimation'

const Projects: React.FC = () => {
  const [featuredProject, ...otherProjects] = projectsdata

  return (
    <div className='flex justify-center py-20' id='projects'>
      <div className='w-full max-w-6xl px-4'>
        {/* Section Header with Gradient Accent */}
        <div className='mb-16 text-center'>
          <div className='mb-4 inline-block'>
            <h2 className='mb-3 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-[2rem] font-bold text-transparent lg:text-[2.5rem]'>
              Featured Projects
            </h2>
            <div className='mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary' />
          </div>
          <p className='mx-auto max-w-2xl text-[1.05rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
            A curated selection of my recent work showcasing full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        {/* Featured Hero Project */}
        {featuredProject && (
          <AnimatedSection>
            <div className='mb-12'>
              <Project {...featuredProject} featured={true} />
            </div>
          </AnimatedSection>
        )}

        {/* Grid of Other Projects */}
        <div className='mb-12 grid gap-8 md:grid-cols-2'>
          {otherProjects.map((project, index) => (
            <AnimatedSection key={index}>
              <Project {...project} featured={false} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA after projects */}
        <AnimatedSection>
          <div className='flex flex-col items-center justify-center rounded-2xl border border-light-border  p-8 text-center shadow-lg backdrop-blur-2xl dark:border-glass-border dark:bg-glass-gradient dark:shadow-none'>
            <h3 className='mb-4 text-[1.5rem] font-bold text-light-text dark:text-dark-text lg:text-[2rem]'>
              Like What You See?
            </h3>
            <p className='mb-6 max-w-2xl text-light-text-secondary dark:text-dark-text-secondary'>
              These projects showcase my ability to deliver full-stack solutions. Let&apos;s build something amazing together.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='#footer'
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-purple-500 px-8 py-4 text-[1rem] font-bold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg'
              >
                Let&apos;s Collaborate
                <svg className='h-4 w-4 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </a>
              <a
                href='https://github.com/market0v0'
                target='_blank'
                rel='noreferrer'
                className='group inline-flex items-center gap-2 rounded-xl border border-light-border bg-white/50 px-8 py-4 text-[1rem] font-bold text-light-text shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text dark:shadow-none'
              >
                <svg className='h-5 w-5 transition-transform group-hover:rotate-12' fill='currentColor' viewBox='0 0 24 24'>
                  <path fillRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' clipRule='evenodd' />
                </svg>
                View More on GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Projects
