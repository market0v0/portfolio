import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'
import { type ProjectData } from '@/pages/api/data'
import WaveCard from '../waveCard'
import BubbleText from '../bubble'

const Project: React.FC<ProjectData> = (projectSpec) => {
  return (
    <div
      className='grid
    grid-cols-1 items-center  justify-start sm:gap-2 gap-6  text-[0.8rem] font-[300]   xl:grid-cols-2 '
    >
      <WaveCard text={''}>
        <div className='justify-self-center rounded-md' style={{}}>
          <img src={projectSpec.img} alt='project' width='550' height='100%' className='rounded-md'/>
        </div>
      </WaveCard>
      <div className='flex flex-col items-start gap-6 rounded-xl border-2 border-slate-900 bg-bgcolor p-4 text-white backdrop-blur-sm'>
        <div className=' rounded-md bg-secondary px-2 text-[2rem] font-[450] text-primary'>
          <BubbleText text={projectSpec.title} />
        </div>
        <div
          className=' leading-[1.4rem] tracking-[0.02rem]
         sm:py-8 sm:leading-[2rem]'
        >
          {projectSpec.desc}
        </div>
        <div className='flex   '>
          <span>
            <img src='/github.svg' alt='icon' width='20' height='100%' />
          </span>
          <span className=' text-primary '>
            <a href={projectSpec.repository} target='_blank' rel='noreferrer'>
              VIEW REPOSITORY
            </a>
          </span>
        </div>
        <div>{projectSpec.tech}</div>
      </div>
    </div>
  )
}
export default Project
