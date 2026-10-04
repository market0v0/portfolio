import Project from '@/components/newPages/project'
import React from 'react'
import { projectsdata } from '../../pages/api/data'
import AnimatedSection from '@/components/PageAnimation'

const Projects: React.FC = () => {
  const [featuredProject, ...otherProjects] = projectsdata

  return (
    <div className='flex justify-center py-20' id='projects'>
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-16'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>Side Projects</p>
          <h2 className='mb-3 text-[2rem] font-semibold text-light-text dark:text-dark-text lg:text-[2.5rem]'>
            Things I&apos;ve built
          </h2>
          <p className='text-[1.05rem] text-light-text-secondary dark:text-dark-text-secondary'>
            Personal builds spanning AI integration, full-stack web and real-time systems
          </p>
        </div>

        {/* Featured Hero Project */}
        {featuredProject !== undefined && (
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
      </div>
    </div>
  )
}

export default Projects
