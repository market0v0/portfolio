import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import { projectsdata } from '@/pages/api/data'

const Portfolio: React.FC = () => {
  const sectionIds = ['pg1', 'pg2', 'pg3', 'pg4', 'pg5']

  return (
    <div className='py-20'>
      <div className='flex min-h-full flex-col items-center justify-center'>
        <div className='w-full max-w-6xl px-4'>
          <div className='mb-16'>
            <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>Side Projects</p>
            <h2 className='mb-3 text-[2rem] font-semibold text-light-text dark:text-dark-text lg:text-[2.5rem]'>
              Things I&apos;ve built
            </h2>
            <p className='text-[1.05rem] text-light-text-secondary dark:text-dark-text-secondary'>
              Personal builds spanning AI integration, full-stack web and real-time systems
            </p>
          </div>
        </div>

        <div className='w-full max-w-7xl px-4'>
          {/* Project Cards with Side-by-Side Layout */}
          <div className='space-y-24'>
            {sectionIds.map((sectionId, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={sectionId}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='relative grid items-center gap-8 lg:grid-cols-2'
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
