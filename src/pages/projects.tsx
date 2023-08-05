import Project from '@/components/project'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { projectsdata } from './api/data'
interface ProjectsProps {
  instru: boolean
}

const Projects: React.FC<ProjectsProps> = ({ instru }) => {
  const controls = useAnimation()

  return (
    <div className='h-full w-[90%] py-10 pb-[40rem]  md:w-[77%]'>
      <div className={`py-6${instru ? 'absolute top-0' : ''}`}>
        <span className='text-[1.2rem] font-[400]'>
          SOME OF MY PERSONAL <span className='text-[#D28738]'>PROJECTS</span>
        </span>
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
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
