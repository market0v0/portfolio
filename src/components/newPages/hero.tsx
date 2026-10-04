import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import NormalType from '../normalType'
import CountUp from '../countUp'
import TechMarquee from './techMarquee'
import { scrollToSection } from '../utils'
import ZoomSection from '../zoomANimation'

const focusAreas = ['ERP integrations', 'AI-native workflows', 'billing-critical systems', 'full-stack TypeScript']

const metrics = [
  { value: '2.5+', label: 'Years Shipping' },
  { value: '3', label: 'Companies' },
  { value: '2026', label: 'SaaS Go-Live' },
  { value: 'Senior', label: 'In 15 Months' }
]

const HeroFrame: React.FC = () => {
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setFocusIndex((i) => (i + 1) % focusAreas.length)
    }, 2600)
    return () => { clearInterval(id) }
  }, [])

  return (
    <div className='relative flex min-h-screen justify-center overflow-hidden' id='hero'>
      {/* Backdrop */}
      <div className='hero-grid pointer-events-none absolute inset-0' />
      <div className='animate-orb pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[100px]' />
      <div className='animate-orb pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[110px] [animation-delay:-7s]' />
      <div className='relative z-10 w-full max-w-6xl px-4'>
        <div className='flex min-h-screen items-center justify-center pb-16 pt-32 lg:pt-36'>
          <section className='w-full max-w-4xl space-y-8 text-center'>
            <ZoomSection>
              <div className='space-y-6'>
                {/* Badge */}
                <div className='flex justify-center px-4'>
                  <div className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-2.5 backdrop-blur-xl shadow-glow sm:px-5'>
                    <div className='relative flex h-3 w-3 flex-shrink-0'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75'></span>
                      <span className='relative inline-flex h-3 w-3 rounded-full bg-primary'></span>
                    </div>
                    <span className='text-xs font-semibold text-primary sm:text-sm'>
                      <span className='hidden sm:inline'>Senior Software Engineer · Open to Opportunities</span>
                      <span className='sm:hidden'>Open to Opportunities</span>
                    </span>
                  </div>
                </div>

                <h1 className='text-[2.5rem] font-bold leading-[1.1] tracking-tight text-light-text dark:text-dark-text lg:text-[4.5rem]'>
                  <span className='block'>Senior Software Engineer</span>
                  <span className='block bg-gradient-to-r from-primary via-primary-light to-purple-400 bg-clip-text text-transparent'>
                    Shipping Production SaaS
                  </span>
                </h1>

                <div className='flex flex-col items-center justify-center gap-2 text-[1.1rem] font-medium text-light-text dark:text-dark-text sm:flex-row sm:gap-3 lg:text-[1.35rem]'>
                  <span>I build</span>
                  {/* Fixed-size pill so the layout never jumps between phrases */}
                  <span className='relative grid h-[2.4em] w-[15.5em] place-items-center overflow-hidden rounded-xl border border-primary/30 bg-primary/10 text-primary'>
                    <AnimatePresence mode='wait' initial={false}>
                      <motion.span
                        key={focusAreas[focusIndex]}
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -14, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className='whitespace-nowrap font-semibold'
                      >
                        {focusAreas[focusIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </div>

                <p className='mx-auto hidden max-w-2xl text-[1.05rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary md:block lg:text-[1.2rem]'>
                  <NormalType
                    text={
                      'Core engineer on a multi-tenant maritime SaaS now live for a major Philippine shipping line, owning its NetSuite ERP sync and freight billing logic.'
                    }
                  />
                </p>

                {/* Achievement Metrics */}
                <div className='mx-auto grid max-w-3xl grid-cols-2 gap-3 pt-4 sm:grid-cols-4'>
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className='spotlight rounded-2xl border border-light-border bg-white/50 px-4 py-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow dark:border-glass-border dark:bg-glass-bg dark:shadow-none'
                    >
                      <div className='text-[1.6rem] font-bold text-primary lg:text-[2rem]'><CountUp value={metric.value} /></div>
                      <div className='text-xs text-light-text-secondary dark:text-dark-text-secondary sm:text-sm'>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ZoomSection>

            <div className='flex flex-wrap items-center justify-center gap-4 px-4 pt-4'>
              <button
                className='group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-light px-6 py-3 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg sm:px-8 sm:py-4 sm:text-[0.95rem]'
                onClick={() => {
                  scrollToSection('footer')
                }}
              >
                <span className='relative z-10 flex items-center gap-2'>
                  Get in touch
                  <svg className='h-4 w-4 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </span>
              </button>

              <button
                className='group flex items-center gap-2 rounded-xl border border-light-border bg-white/50 px-6 py-3 text-sm font-medium text-light-text shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 dark:border-glass-border dark:bg-glass-bg dark:text-dark-text dark:shadow-none sm:px-8 sm:py-4 sm:text-[0.95rem]'
                onClick={() => (window.location.href = '/resume')}
              >
                View resume
                <svg className='h-4 w-4 transition-transform group-hover:translate-y-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
              </button>
            </div>

            {/* Tech marquee */}
            <div className='mx-auto max-w-3xl pt-8 sm:pt-12'>
              <TechMarquee />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default HeroFrame
