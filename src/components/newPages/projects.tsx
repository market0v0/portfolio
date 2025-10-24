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
