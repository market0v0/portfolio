import Project from '@/components/project'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { projectsdata } from './api/data'
import AnimatedSection from '@/components/PageAnimation'

const Projects: React.FC = () => {
  const controls = useAnimation()

  return (
    <div className='flex min-h-full justify-center '>
      <div className='h-full w-[90%] py-10 pb-[40rem]  md:w-[77%]'>
        <div className='sticky top-0 z-10 bg-[#000] py-6'>
          <span className='text-[1.2rem] font-[400]'>
            SOME OF MY PERSONAL <span className='text-[#D28738]'>PROJECTS</span>
          </span>
          <br />
          <span className='cursor-pointer text-[.9rem] font-[400] text-[#ffffffb0] underline'>
            View all Projects
          </span>
        </div>

        <div className={'grid h-full snap-y items-center justify-center  '}>
          {projectsdata.map((project, index) => (
            <motion.div
              key={index}
              className='snap-start'
              initial='hidden'
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <AnimatedSection>
                <Project {...project} />
              </AnimatedSection>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
