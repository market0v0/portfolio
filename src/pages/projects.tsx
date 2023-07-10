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
    <div className='h-screen w-[90%] py-10 pb-10  md:w-[77%]'>
      <div className={`py-6${instru ? 'absolute top-0' : ''}`}>
        <span className='text-[1.2rem] font-[400]'>
          SOME OF MY PERSNAL <span className='text-[#D28738]'>PROJECTS</span>
        </span>
      </div>
      <div
        className={`grid h-screen snap-y snap-mandatory items-center justify-center  ${
          instru ? 'overflow-y-auto' : 'overflow-hidden '
        }`}
      >
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
