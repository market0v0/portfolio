import Project from '@/components/project'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { projectsdata } from './api/data'
import AnimatedSection from '@/components/PageAnimation'

const Projects: React.FC = () => {
  const controls = useAnimation()

  return (
    <div className='h-full w-[90%] py-10 pb-[40rem]  md:w-[77%]'>
      <div className={'py-6'}>
        <AnimatedSection>
          <span className='text-[1.2rem] font-[400]'>
            SOME OF MY PERSONAL <span className='text-[#D28738]'>PROJECTS</span>
          </span>
          <br />
          <span className='cursor-pointer text-[.9rem] font-[400] text-[#ffffffb0] underline'>
            View all Progects
          </span>
        </AnimatedSection>
      </div>

      <div className={'grid h-full  items-center justify-center '}>
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
  )
}

export default Projects
