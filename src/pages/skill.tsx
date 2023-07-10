import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LanguageCard from '@/components/languageCard'
import { Technologies } from './api/data'

const Skill: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scrollDown = (): void => {
    window.scrollBy({ top: window.innerHeight + 120, behavior: 'smooth' })
  }
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        y: {
          type: 'spring',
          stiffness: 100,
          damping: 10
        }
      }
    }
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

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.09
  })
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.8
  })
  return (
    <div className='w-[90%] py-10 md:w-[77%]'>
      <div className='grid min-h-screen py-10  text-white'>
        <div className='flex items-end pb-4  text-[1.875rem] font-[700]'>
          <span>
            Technologies I am <span className='text-[#D28738]'>WELL-VERSED IN</span>{' '}
          </span>
        </div>
        <motion.div
          className='grid grid-cols-1  items-center justify-center gap-2 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {Array.from({ length: 9 }).map((techs, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className='rotate-45'
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
            >
              <LanguageCard tech={Technologies[index]} num={index + 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className='grid grid-cols-1 items-center justify-center gap-10 py-0 lg:grid-cols-2  lg:items-start lg:py-[6rem]'
        ref={ref1}
        initial='hidden'
        animate={inView1 ? 'visible' : 'hidden'}
        variants={skillsetVariants}
      >
        <div className='border-b-2 border-[#ffffff5a] pb-5 lg:border-b-0 lg:pb-0'>
          <div className='text-[.9rem] font-[400] text-[#D28738] md:text-[1.2rem]'>MY SKILLSET</div>
          <div className='break-words py-[1rem] text-[2rem] font-[600] leading-[2.5rem] md:w-[90%] lg:py-[3rem] lg:text-[4.375rem] lg:leading-[5rem]'>
            Full stack web developer, IT technician & Mobile developer
          </div>
          <div
            className='smooth-bounce animate-bounce cursor-pointer text-[.9rem] font-[400] text-[#D28738] underline hover:text-[#fff] md:text-[1.2rem]'
            onClick={scrollDown}
          >
            VIEW WORKS
          </div>
        </div>

        <div className='pb-10 text-[.9rem] font-[400] leading-[2rem] md:w-[95%] lg:text-[1rem]  lg:leading-[2.5rem]'>
          I am a BSIT student with a foundation in programming using several languages such as
          Python, Java, TypeScript, JavaScript, and C. This also includes popular libraries such as
          React and frameworks for frontend development like Bootstrap and Tailwind. Moreover, I am
          well-versed in RESTful API development and some backend frameworks such as Express and
          Spring. For full-stack applications, I am familiar with Django. In desktop app
          development, I am proficient in using Java Swing in NetBeans, and for mobile application
          development, I have experience in developing apps using Android Studio. I am also familiar
          with Git for version control. On the technician side, I have experience in networking and
          system administrative tasks such as creating a domain and maintaining domain policies. I
          also have experience in troubleshooting common errors in PC hardware or software.
        </div>
      </motion.div>
    </div>
  )
}

export default Skill
