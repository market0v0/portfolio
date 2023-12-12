import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import { projectsdata } from '@/pages/api/data'
import AnimatedSection from '../PageAnimation'
import ZoomSection from '../zoomANimation'

const Portfolio: React.FC = () => {
  const sectionIds = ['pg1', 'pg2', 'pg3', 'pg4'] // Add more sections if needed
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
      threshold: 0.6
    })

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element != null) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  const currentSectionIndex =
    currentSection != null ? sectionIds.indexOf(currentSection) : 0
  const isEvenSection = currentSectionIndex % 2 !== 0

  const switchPosition = isEvenSection ? 'translate-x-[100%]' : 'translate-x-[0]'
  const reverseGrid = isEvenSection ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-2'

  return (
    <div>
      <div className='flex min-h-full flex-col items-center justify-center'>
        <div className='  w-[80%]'>
          <ZoomSection>
          <div className='flex items-center '>
            <div className='flex  items-center pb-[10rem] text-start text-[9rem] font-[700] leading-[9rem] tracking-[.1rem]  lg:block  '>
              <span className='  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                Projects by <br />
              </span>
              <span className='text-[10rem] text-primary'>MARK</span>{' '}
            </div>
          </div>
          </ZoomSection>
        </div>

        <div className='w-[80%] '>
          {currentSection != null && (
            <motion.div
              className={`sticky top-[30%] z-10 flex w-1/2 transform items-center justify-center -space-x-14 px-2 transition-all duration-75 ease-in-out ${switchPosition}`}
              animate={{ x: isEvenSection ? '100%' : '0%' }}
            >
              <AnimatedSection>
                <div className='z-10 rounded-md' style={{}}>
                  {/* Use the current section index to get the corresponding project data */}
                  <img
                    src={projectsdata[currentSectionIndex]?.img}
                    alt='project'
                    width='550'
                    height='100%'
                    className='rounded-md'
                  />
                </div>
              </AnimatedSection>
            </motion.div>
          )}
          <div className='sticky top-0 flex justify-center '>
            <motion.div className={`flex w-full flex-col ${reverseGrid}`}>
              {sectionIds.map((sectionId, index) => (
                <motion.div
                  key={sectionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`z-0 grid pt-[20rem] ${reverseGrid}`}
                  id={sectionId}
                >
                  {/* Pass the project data using the index */}
                  {sectionIds.indexOf(sectionId) % 2 === 0 ? <div></div> : null}
                  <ProjectCard {...projectsdata[index]} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
