import Project from '@/components/newPages/project'
import React from 'react'
import { projectsdata } from '../../pages/api/data'
import AnimatedSection from '@/components/PageAnimation'

const Projects: React.FC = () => {
  return (
    <div className='flex pt-[10rem] justify-center items-center' id="projects">

      <div className='h-full w-[98%] py-10  md:w-[77%]'>
        <AnimatedSection>
      <div className='flex items-center justify-center text-[.9rem] md:text-[1.5rem]'>Projects</div>

        </AnimatedSection>
        <div className={'grid snap-y items-center justify-center  '}>

          {projectsdata.map((project, index) => (
            <div
              key={index}
              className='py-[9rem]'
            >
              <AnimatedSection>
                <Project {...project} />
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
