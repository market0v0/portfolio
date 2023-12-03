import React from 'react'
import { motion } from 'framer-motion'
import LanguageCard from '@/components/languageCard'// Import the LanguageCard component
import { useInView } from 'react-intersection-observer'
import { Technologies } from '@/pages/api/data'
import WaveCard from '../waveCard'
const TechGrid: React.FC = () => {
  // Define your variants here, or you can pass them as props too
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.09
  })

  return (
    <motion.div
      className='grid items-center justify-center gap-2 sm:pt-6 grid-cols-4 lg:gap-7'
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {Array.from({ length: 8 }).map((techs, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className='flex items-center   justify-center'
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <WaveCard text={''} >
          <LanguageCard tech={Technologies[index]} num={index + 1} />

          </WaveCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TechGrid
