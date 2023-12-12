import React from 'react'
/* import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer' */

import TechGrid from '@/components/oldPages/cardholder'
import TypingTitle from '../TypeAnimation'
import AnimatedSection from '../PageAnimation'
import Training from './trainingCard'
import { trainingsData } from '@/pages/api/data'
import ZoomSection from '../zoomANimation'

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
    <div
      className='flex justify-center overflow-hidden pt-10 sm:pb-10 sm:pt-2'
      id='skills'
    >
      <div className=' w-[90%] py-0 sm:py-10  lg:w-[70%]'>
        <ZoomSection>
        <div className='flex flex-col  py-4  text-start font-[700] leading-[20vw] tracking-[-0.3rem] sm:pb-[6rem] lg:leading-[7rem]  '>
          <span className='text-[25vw] font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-[9rem]'>
            What MARK <br />
          </span>
          <span className='break-keep text-[20vw] text-primary sm:text-[10rem]'>
            {' '}
            can DO?
          </span>
        </div>
        </ZoomSection>
        <div className='sm:px-10'>
          <AnimatedSection>
            <div className='justify-content-center flex rounded-xl border-2 border-slate-900  bg-bgcolor p-2  sm:px-10 '>
              <div className='break-words  '>
                <span className=' text-[1.2rem] font-bold sm:text-[1.6rem]'>
                  {'Proficient in '}
                  <span className='text-primary '>
                    <TypingTitle titles={titles} />
                  </span>
                </span>

                  <div className=' py-2 text-[1rem] sm:leading-[2rem] text-justify leading-[1.8rem] tracking-[0.02rem] lg:py-4  xl:py-2  xl:leading-[2.5rem]'>
              <p>
              Mark is a BSIT student skilled in Python, Java, TypeScript,
                  JavaScript, and C, along with libraries like React. Proficient
                  in RESTful API development using Express, Spring, and Django
                  for full-stack apps. Experienced in Java Swing for desktop
                  apps and Android Studio for mobile apps. Well-versed in Git
                  for version control. Also, adept at networking, system
                  administration, and PC troubleshooting.
              </p>
            </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className='grid'>
          <div className='flex items-end justify-center px-4 py-10 pb-4 text-[.8rem]  font-[700] md:px-0 md:text-[1.5rem]'>
            <span className='sticky top-20 z-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
              Technologies MARK{' '}
              <span className='text-primary'>WELL-VERSED IN</span>{' '}
            </span>
          </div>
          <div className='py-10'>
            <TechGrid />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center px-4 py-10 pb-4 text-[.8rem]  font-[700] md:px-0 '>
          <span className='sticky top-20  z-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:static md:text-[1.5rem]'>
            Training and
            <span className='text-primary'> Courses</span>{' '}
          </span>
          <div className='z-0 grid gap-4 py-10  sm:grid-cols-3 sm:px-10'>
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
