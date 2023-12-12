import Project from '@/components/newPages/project'
import React from 'react'
import { projectsdata } from '../../pages/api/data'
import AnimatedSection from '@/components/PageAnimation'
import ZoomSection from '../zoomANimation'

const Projects: React.FC = () => {
  return (
    <div className='flex  pt-[10rem] justify-center items-center' >

      <div className=' w-[90%] py-10  md:w-[77%]'>
        <ZoomSection>
      <div className='flex py-4 sm:py-20 flex-col  items-start sm:pb-[10rem] leading-[24vw] sm:leading-[8rem] text-start  font-[700] tracking-[.1rem]  lg:block  '>
            <span className='text-[20vw] tracking-[-1vw] font-outline-2 sm:text-[9rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            Projects by  <br /></span>
              <span className='text-primary break-keep text-[30vw] sm:text-[10rem]'>MARK</span>

          </div>
          </ZoomSection>
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
