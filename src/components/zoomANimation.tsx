import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: React.ReactNode
}

const ZoomSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  const zoomVariants = {
    hidden: { opacity: 1, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={zoomVariants}
    >
      {children}
    </motion.div>
  )
}

export default ZoomSection
