import React from 'react'

import NormalType from '../normalType'
import { scrollToSection } from '../utils'
import ZoomSection from '../zoomANimation'

const HeroFrame: React.FC = () => {
  return (
    <div className='relative flex min-h-screen justify-center overflow-hidden' id='hero'>
      <div className='relative z-10 w-full max-w-6xl px-4'>
        <div className='flex min-h-screen items-center justify-center'>
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
                      <span className='hidden sm:inline'>Open to Full-Time & Contract Opportunities</span>
                      <span className='sm:hidden'>Open to Opportunities</span>
                    </span>
                  </div>
                </div>

                <h1 className='text-[2.5rem] font-bold leading-[1.1] tracking-tight text-light-text dark:text-dark-text lg:text-[4.5rem]'>
                  <span className='block'>Full-Stack Engineer</span>
                  <span className='block bg-gradient-to-r from-primary via-primary-light to-purple-400 bg-clip-text text-transparent'>
                    Building AI-Powered Solutions
                  </span>
                </h1>

                <p className='mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary lg:text-[1.3rem] hidden md:block'>
                  <NormalType
                    text={
                      'Transforming ideas into production-ready applications with React, TypeScript, Spring Boot, and AI integration. 2+ years delivering scalable solutions for enterprise clients.'
                    }
                  />
                </p>

                {/* Achievement Metrics */}
                <div className='flex flex-wrap items-center justify-center gap-6 pt-4'>
                  <div className='text-center'>
                    <div className='text-[2rem] font-bold text-primary lg:text-[2.5rem]'>2+</div>
                    <div className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>Years Experience</div>
                  </div>
                  <div className='h-12 w-px bg-light-border dark:bg-glass-border' />
                  <div className='text-center'>
                    <div className='text-[2rem] font-bold text-primary lg:text-[2.5rem]'>3</div>
                    <div className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>Companies</div>
                  </div>
                  <div className='h-12 w-px bg-light-border dark:bg-glass-border' />
                  <div className='text-center'>
                    <div className='text-[2rem] font-bold text-primary lg:text-[2.5rem]'>15+</div>
                    <div className='text-sm text-light-text-secondary dark:text-dark-text-secondary'>Projects Delivered</div>
                  </div>
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

            {/* Tech indicators */}
            <div className='flex flex-wrap items-center justify-center gap-2 px-4 pt-8 sm:gap-3 sm:pt-12'>
              {[
                { name: 'React', highlight: false },
                { name: 'TypeScript', highlight: false },
                { name: 'Next.js', highlight: false },
                { name: 'Spring Boot', highlight: false },
                { name: 'AWS', highlight: false },
                { name: 'Claude AI', highlight: true },
                { name: 'AI Agents', highlight: true }
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`rounded-lg border px-3 py-1.5 text-xs backdrop-blur-xl transition-all sm:px-4 sm:py-2 sm:text-sm ${tech.highlight ? 'border-primary/40 bg-gradient-to-r from-primary/20 to-purple-500/20 font-semibold text-primary shadow-glow' : 'border-light-border bg-white/50 text-light-text-secondary shadow-lg hover:border-primary/30 dark:border-glass-border dark:bg-glass-bg dark:text-dark-text-secondary dark:shadow-none'}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default HeroFrame
