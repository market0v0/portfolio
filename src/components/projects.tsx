import Project from '@/components/project'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { projectsdata } from '../pages/api/data'
import AnimatedSection from '@/components/PageAnimation'

const Projects: React.FC = () => {
  const controls = useAnimation()
  /*   return (
<div className="snap-y snap-mandatory h-screen overflow-scroll">
      <div className="flex items-center snap-center justify-center h-screen w-screen scroll-snap-align-start">
        <div className="w-screen h-screen bg-blue-500 p-4">
          <h1 className="text-3xl text-white">Section 1</h1>
        </div>
      </div>
      <div className="flex items-center snap-center justify-center h-screen w-screen scroll-snap-align-start">
        <div className="w-screen h-screen bg-green-500 p-4">
          <h1 className="text-3xl text-white">Section 2</h1>
        </div>
      </div>
      <div className="flex items-center snap-center justify-center h-screen w-screen scroll-snap-align-start">
        <div className="w-screen h-screen snap-center bg-yellow-500 p-4">
          <h1 className="text-3xl text-white">Section 3</h1>
        </div>
      </div>
      <div className="flex items-center snap-center justify-center h-screen w-screen scroll-snap-align-start">
        <div className="w-screen h-screen bg-red-500 p-4">
          <h1 className="text-3xl text-white">Section 4</h1>
        </div>
      </div>
    </div>
  ) */
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
