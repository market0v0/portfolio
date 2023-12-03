import React from 'react'
/* import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer' */

import TechGrid from '@/components/oldPages/cardholder'
import TypingTitle from '../TypeAnimation'
import AnimatedSection from '../PageAnimation'
import Training from './trainingCard'
import { trainingsData } from '@/pages/api/data'

const Skill: React.FC = () => {
  /*   const skillsetVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.1
  }) */
  const titles = ['Web Developer', 'Full Stack']

  return (
    <div className='flex  justify-center pt-10 sm:pt-2' id='skills'>
      <div className='w-[90%] py-0 sm:py-10  lg:w-[60%]'>
        <div className='grid  text-white'>
          <div className='flex items-end justify-center px-4 py-10 pb-4 text-[.8rem]  font-[700] md:px-0 md:text-[1.5rem]'>
            <span>
              Technologies I am{' '}
              <span className='text-primary'>WELL-VERSED IN</span>{' '}
            </span>
          </div>
          <TechGrid />

          <div className='py-10 pt-10 md:px-20'>
            <AnimatedSection>
              <div className='justify-content-center flex rounded-xl border-2  border-slate-900 bg-bgcolor p-2 backdrop-blur-sm sm:px-10 '>
                <div className='break-words  '>
                  <span className=' font-bold text-[1rem] sm:text-[1.2rem]'>
                    {'Proficient in '}
                    <span className='text-primary '>
                      <TypingTitle titles={titles} />
                    </span>
                  </span>
                  <div className=' md::leading-[2rem]  py-2 text-[.6rem] leading-[1.5rem] tracking-[0.02rem]   sm:px-4 lg:py-4  xl:py-2 '>
                    I am a BSIT student skilled in Python, Java, TypeScript,
                    JavaScript, and C, along with libraries like React.
                    Proficient in RESTful API development using Express, Spring,
                    and Django for full-stack apps. Experienced in Java Swing
                    for desktop apps and Android Studio for mobile apps.
                    Well-versed in Git for version control. Also, adept at
                    networking, system administration, and PC troubleshooting.
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

          <div className='grid sm:grid-cols-3 gap-2 z-0'>
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
  )
}

export default Skill
