import React from 'react'
/* import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedSection from '../PageAnimation' */

import Training from './trainingCard'
import { trainingsData } from '@/pages/api/data'
import TechStack from './techStack'

const Skill: React.FC = () => {
  return (
    <div
      className='flex justify-center py-20'
      id='skills'
    >
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-16'>
          <h2 className='mb-3 text-[2rem] font-semibold text-light-text dark:text-dark-text lg:text-[2.5rem]'>
            Skills & Expertise
          </h2>
          <p className='text-light-text-secondary dark:text-dark-text-secondary'>Comprehensive tech stack and professional capabilities</p>
        </div>

        <div className='mb-16'>
          <h3 className='mb-8 text-[1.5rem] font-semibold text-light-text dark:text-dark-text'>
            Tech Stack
          </h3>
          <TechStack />
        </div>

        <div>
          <h3 className='mb-8 text-[1.5rem] font-semibold text-light-text dark:text-dark-text'>
            Training & Certifications
          </h3>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {trainingsData.map((training, index) => (
              <Training
                key={index}
                img={training.img}
                label={training.label}
                images={training.images}
                date={training.date}
                body={training.body}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
