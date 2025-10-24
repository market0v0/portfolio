import React, { useState, useEffect } from 'react'
import { scrollToSection } from '../utils'

interface NavigationButtonsProps {
  onButtonClick: () => void
}

const sectionIds = ['hero', 'profile', 'experience', 'skills', 'projects']

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onButtonClick }) => {
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
      threshold: 0.1 // Adjust the threshold as needed
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
    <div className='flex flex-col items-stretch gap-1 sm:flex-row sm:items-center'>
      {sectionIds.map((sectionId) => (
        <button
          key={sectionId}
          className={`${currentSection === sectionId ? 'bg-primary/10 text-primary' : 'text-light-text-secondary hover:text-light-text dark:text-gray-400 dark:hover:text-dark-text'} rounded-lg px-4 py-2 text-[0.9rem] font-medium transition-all`}
          onClick={() => {
            scrollToSection(sectionId)
            onButtonClick()
          }}
        >
          {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default NavigationButtons
