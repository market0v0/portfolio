import React, { useState, useEffect } from 'react'
import { scrollToSection } from '../utils'
import { useMyContext } from '../context/context'

interface NavigationButtonsProps {
  onButtonClick: () => void
}

const sectionIds = ['hero', 'profile', 'skills', 'projects']

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onButtonClick }) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const { data, mode } = useMyContext()

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
    <div className={'cursor-pointer text-secondary text-[1rem] gap-8  sm:gap-2 sm:text-[.6rem] grid  sm:flex '}>
      {sectionIds.map((sectionId) => (
        <span
          key={sectionId}
          className={`${currentSection === sectionId ? 'bg-primary' : ''} flex items-center justify-center transition-all px-2 rounded-md`}
          onClick={() => {
            scrollToSection(sectionId)
            onButtonClick() // Call the callback when a button is clicked
          }}
        >
          {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
        </span>
      ))}
      <div onClick={() => {
        mode(!data)
        onButtonClick()
      }} className={`${data ? ' bg-secondary text-primary' : 'bg-primary'} flex sm:hidden items-center justify-center transition-all px-2 rounded-md`}>Mode</div>

    </div>
  )
}

export default NavigationButtons
