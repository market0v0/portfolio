import React, { useState, useEffect } from 'react'
import HeroFrame from './hero'
import ParticleRing from '../background'
import Navigation from '../nav/nav'
import Skill from './skill'
import Projects from './projects'
import Profile from './profile'
import Footer from '../oldPages/footer'

// ... (imports and other code)
const sectionIds = ['hero', 'profile', 'skills', 'projects']

const Frame: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2 // Adjust the threshold as needed
    })

    // Iterate over section IDs and observe their elements
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element != null) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className='min-h-screen '>
      <div className='sticky top-2 z-20'>
        <Navigation />
      </div>
      <ParticleRing active={false}>
        <div className='absolute  inset-y-0 inset-x-0 flex min-h-screen flex-col overflow-scroll'>
          <HeroFrame />
          <Profile />
          <Skill />
          <Projects />
          <Footer />
        </div>
      </ParticleRing>
      {currentSection === 'footer' && (
        <div className='flex items-center justify-center sticky py-2 bg-black bottom-0 z-20'>
          mark
        </div>
      )}
    </div>
  )
}

export default Frame
