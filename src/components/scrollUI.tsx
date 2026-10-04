import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient bar showing page scroll progress, plus a back-to-top button
const ScrollUI: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = (): void => { setShowTop(window.scrollY > 900) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className='fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-purple-400 to-primary-light shadow-glow'
      />
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            aria-label='Back to top'
            className='fixed bottom-[6.25rem] right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-light-border bg-white/70 text-primary shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow dark:border-glass-border dark:bg-dark-card/70'
          >
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollUI
