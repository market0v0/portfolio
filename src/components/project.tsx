import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'
import { type ProjectData } from '@/pages/api/data'

const Project: React.FC<ProjectData> = projectSpec => {
  return (
    <div className='grid min-h-[80vh] w-[100%] grid-cols-1 place-items-center gap-6  text-[0.8rem] font-[300] text-white  lg:grid-cols-2 lg:text-[1rem] '>
      <div className='justify-self-center'>
        <img src={projectSpec.img} alt='project' width='550' height='100%' />
      </div>
      <div className='grid items-start text-white'>
        <div className=' text-[2rem] font-[450] lg:text-[3.125rem]'> {projectSpec.title}</div>
        <div className='w-[98%] py-2 leading-[1.4rem] tracking-[0.02rem]  lg:w-[90%] lg:py-8 lg:leading-[2rem]'>
          {projectSpec.desc}
        </div>
        <div className='flex pb-10  '>
          <span>
            <img src='/github.svg' alt='icon' width='20' height='100%' />
          </span>
          <span className='px-2 text-[#D28738] '>
            <a href={projectSpec.repository} target='_blank' rel='noreferrer'>
              VIEW REPOSITORY
            </a>
          </span>
        </div>
        {/* tech */}
        <div>{projectSpec.tech}</div>
      </div>
    </div>
  )
}
export default Project
