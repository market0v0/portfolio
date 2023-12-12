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
      className='flex z-0 sm:min-h-[30rem] min-h-[30rem] flex-col items-center justify-start  rounded-xl border-2 border-slate-900 bg-bgcolor p-4  backdrop-blur-sm '
      id='skills'
    /*   style={{
        background: "url('" + img + "')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} */
    >
      <span className='py-2'>{label}</span>
      <div className=' '
        style={{
          background: "url('.svg')",
          backgroundSize: 'cover'
        }}>

      <div className='justify-self-center bg-slate-400 z-10'>
        <img src={img} alt='project' width='550' height='100% z-0' />
      </div>
      </div>
      <span className='py-2 font-thin text-[.7rem]'> {date}</span>
      <span className=' font-thin text-[1rem]'>
        {body}

      </span>

    </div>
    </AnimatedSection>
  )
}

export default Training
