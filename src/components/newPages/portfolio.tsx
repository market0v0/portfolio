import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import { projectsdata } from '@/pages/api/data'
import AnimatedSection from '../PageAnimation'
import ZoomSection from '../zoomANimation'

const Portfolio: React.FC = () => {
  const sectionIds = ['pg1', 'pg2', 'pg3', 'pg4', 'pg5'] // Add more sections if needed
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
    <div className='py-20'>
      <div className='flex min-h-full flex-col items-center justify-center'>
        <div className='mb-20 w-full max-w-6xl px-4'>
          <ZoomSection>
            <div className='text-center'>
              <div className='mb-6 inline-block'>
                <h2 className='mb-3 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-[3rem] font-bold text-transparent lg:text-[4rem]'>
                  Projects by MARK
                </h2>
                <div className='mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary' />
              </div>
              <p className='mx-auto max-w-2xl text-[1.05rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>
                A curated showcase of my work featuring full-stack development, AI integration, and modern web technologies
              </p>
            </div>
          </ZoomSection>
        </div>

        <div className='w-full max-w-7xl px-4'>
          {/* Project Cards with Side-by-Side Layout */}
          <div className='space-y-40'>
            {sectionIds.map((sectionId, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={sectionId}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='relative grid min-h-[70vh] items-center gap-8 lg:grid-cols-2'
                  id={sectionId}
                >
                  {/* Image on left for even, right for odd */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className='h-full overflow-hidden rounded-2xl border border-light-border  p-6 shadow-lg backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glow dark:border-glass-border dark:bg-glass-gradient dark:shadow-glass-lg'>
                      <div className='flex h-full items-center justify-center overflow-hidden rounded-xl border border-light-border/30 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent shadow-inner dark:border-glass-border/30'>
                        <img
                          src={projectsdata[index]?.img}
                          alt={projectsdata[index]?.title}
                          className='w-full object-cover transition-all duration-700 hover:scale-105 hover:brightness-110'
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card on right for even, left for odd */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <ProjectCard {...projectsdata[index]} />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
