import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import TechGrid from '@/components/cardholder'

const Skill: React.FC = () => {
  const scrollDown = (): void => {
    window.scrollBy({ top: window.innerHeight + 120, behavior: 'smooth' })
  }

  const skillsetVariants = {
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
  })
  return (
    <div className='flex min-h-full justify-center'>
      <div className='w-[90%] py-10 md:w-[77%]'>
        <div className='grid min-h-screen py-10  text-white'>
          <div className='flex items-end py-10 pb-4  text-[1.875rem] font-[700]'>
            <span>
              Technologies I am <span className='text-[#D28738]'>WELL-VERSED IN</span>{' '}
            </span>
          </div>
          <TechGrid />
        </div>

        <motion.div
          className='grid h-screen grid-cols-1 items-center justify-center  py-[10rem]   lg:grid-cols-2  lg:items-start lg:py-[12rem]'
          ref={ref1}
          initial='hidden'
          animate={inView1 ? 'visible' : 'hidden'}
          variants={skillsetVariants}
        >
          <div className='border-b-2 border-[#ffffff5a]  pb-[0] lg:border-b-0 lg:pb-[6rem]'>
            <div className='text-[.9rem] font-[400] text-[#D28738] md:text-[1.2rem]'>
              MY SKILLSET
            </div>
            <div className='w-[90%] break-words py-[1rem] text-[2rem] font-[600] leading-[2rem] md:w-[90%] lg:py-[3rem] lg:text-[4.375rem] lg:leading-[5rem]'>
              Full stack web developer, IT technician & Mobile developer
            </div>
            <div
              className='smooth-bounce animate-bounce cursor-pointer text-[.9rem] font-[400] text-[#D28738] underline hover:text-[#fff] md:text-[1.2rem]'
              onClick={scrollDown}
            >
              VIEW WORKS
            </div>
          </div>

          <div className='pb-[10rem] text-[.8rem] font-[400] leading-[2rem] md:w-[95%] lg:text-[1rem]  lg:leading-[2.5rem]'>
            I am a BSIT student with a foundation in programming using several languages such as
            Python, Java, TypeScript, JavaScript, and C. This also includes popular libraries such
            as React and frameworks for frontend development like Bootstrap and Tailwind. Moreover,
            I am well-versed in RESTful API development and some backend frameworks such as Express
            and Spring. For full-stack applications, I am familiar with Django. In desktop app
            development, I am proficient in using Java Swing in NetBeans, and for mobile application
            development, I have experience in developing apps using Android Studio. I am also
            familiar with Git for version control. On the technician side, I have experience in
            networking and system administrative tasks such as creating a domain and maintaining
            domain policies. I also have experience in troubleshooting common errors in PC hardware
            or software.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
