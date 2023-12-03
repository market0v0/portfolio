import React from 'react'
import AnimatedSection from '../PageAnimation'

interface TrainingProps {
  img: string
  label: string
  date: string
  body: string
  images: string[]
}

const Training: React.FC<TrainingProps> = ({ label, img, images, date, body }) => {
  return (
    <AnimatedSection>
    <div
      className='flex z-0 sm:min-h-[2rem] min-h-[30rem] flex-col items-center justify-start  rounded-xl border-2 border-slate-900 bg-bgcolor p-4 sm:opacity-70 backdrop-blur-sm hover:opacity-100'
      id='skills'
    >
      <span className='py-2'>{label}</span>
      <div className='sm:h-[20rem]  rounded-sm '>

      <div className='justify-self-center bg-slate-400 z-10'>
        <img src={img} alt='project' width='550' height='100% z-0' />
      </div>
      </div>
      <span className='py-2 text-[.7rem]'> {date}</span>
      <span className='text-[.9rem]'>
        {body}

      </span>

    </div>
    </AnimatedSection>
  )
}

export default Training
