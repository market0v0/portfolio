import React, { useEffect, useState } from 'react'
import ProjectCard from './projectCard'

const Portfolio: React.FC = () => {
  const sectionIds = ['pg1', 'pg2', 'pg3'] // Add more sections if needed
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

  const switchPosition =
    (currentSection != null) && sectionIds.indexOf(currentSection) % 2 === 0 ? 'right-[10rem]' : 'left-[10rem]'

  return (
    <div className='flex text-black min-h-screen justify-center pt-56 relative' id='projects'>
      <div className={`sticky top-1/2 z-10 ${switchPosition} top-1/2 transform -translate-y-1/2`}>
        Switch from right to left based on the current section
      </div>

      <div className='flex flex-col gap-20 w-[90%] md:w-[77%]'>
        {sectionIds.map((sectionId) => (
          <div className='grid grid-cols-2 gap-6' key={sectionId} id={sectionId}>
            <ProjectCard img={''} label={'mark'} date={''} body={''} images={[]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
