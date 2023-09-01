import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ColorSectionProps {
  children: React.ReactNode
}

const ColorSection: React.FC<ColorSectionProps> = ({ children }) => {
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

  const [, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.9
  })

  return (
    <div className='z-10 min-h-screen  text-white'>
      <div>
        <div
          className={`font-poppins max-w-screen  snap-y snap-proximity bg-black${
            inView1 ? 'min-h-screen overflow-y-auto' : 'min-h-full'
          }${inView2 ? 'min-h-screen overflow-y-auto' : 'min-h-full'}`}
          style={{
            background: inView1 ? 'rgba(0, 0, 0, 0.60)' : 'rgba(0, 0, 0, 0.03)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <motion.div
            className={'flex min-h-full snap-start justify-center bg-[#0000007b]'}
            ref={ref1}
            initial='hidden'
            animate={inView1 ? 'visible' : 'hidden'}
            variants={skillsetVariants}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ColorSection
