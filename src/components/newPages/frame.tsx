import React, { useEffect } from 'react'
import HeroFrame from './hero'
import ScrollUI from '../scrollUI'
import { Astronaut, Planets, Starfield } from '../space'
import Navigation from '../nav/nav'
import Skill from './skill'
import Contact from './contact'
import Profile from './profile'
import ProjectPage from './projectPage'
import Experience from './experience'

// ... (imports and other code)

const Frame: React.FC = () => {
  // One listener drives the cursor spotlight on every .spotlight card
  useEffect(() => {
    const onMove = (e: PointerEvent): void => {
      if (!(e.target instanceof Element)) return
      const el = e.target.closest<HTMLElement>('.spotlight')
      if (el == null) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => { window.removeEventListener('pointermove', onMove) }
  }, [])

  return (
    <div className='min-h-screen bg-light-bg transition-colors duration-300 dark:bg-dark-bg'>
      <ScrollUI />
      {/* Animated background gradient */}
      <div className='fixed inset-0 bg-liquid-gradient opacity-30 dark:opacity-50' />
      <div className='fixed left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10' />
      <Starfield />
      <Planets />
      <Astronaut />

      <div className='relative z-10'>
        <div className='sticky top-0 z-50'>
          <Navigation />
        </div>
        <div className=''>
            <HeroFrame />
            <Profile />
            <Experience />
            <Skill />
            <ProjectPage/>
            <Contact />
          </div>
      </div>
      {/* <ParticleRing active={false}>
        <div className='absolute  inset-y-0 inset-x-0 flex min-h-screen flex-col overflow-scroll'>
          <HeroFrame />
          <Profile />
          <Skill />
          <Projects />
          <Footer />
        </div>
      </ParticleRing> */}

    </div>
  )
}

export default Frame
