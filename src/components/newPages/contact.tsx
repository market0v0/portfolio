import React from 'react'
import AnimatedSection from '../PageAnimation'

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: (
        <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
        </svg>
      ),
      label: 'Email',
      value: 'cuevamarkvincent@gmail.com',
      href: 'mailto:cuevamarkvincent@gmail.com',
      primary: false
    },
    {
      icon: (
        <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
        </svg>
      ),
      label: 'Phone',
      value: '+63 968 650 6973',
      href: 'tel:+639686506973',
      primary: false
    },
    {
      icon: (
        <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'mark-cueva-90a33424a',
      href: 'https://www.linkedin.com/in/mark-cueva-90a33424a/',
      primary: false
    },
    {
      icon: (
        <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
          <path fillRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' clipRule='evenodd' />
        </svg>
      ),
      label: 'GitHub',
      value: 'market0v0',
      href: 'https://github.com/market0v0',
      primary: false
    }
  ]

  return (
    <div className='flex min-h-screen items-center justify-center py-20' id='footer'>
      <div className='w-full max-w-6xl px-4'>
        <AnimatedSection>
          <div className='group relative overflow-hidden rounded-3xl border border-light-border  shadow-lg backdrop-blur-2xl dark:border-glass-border dark:bg-glass-gradient dark:shadow-glass-lg'>
            {/* Animated gradient background */}
            <div className='pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100' />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100' />

            <div className='relative z-10 p-6 sm:p-12 lg:p-16'>
              {/* Header */}
              <div className='mb-8 sm:mb-12 text-center'>
                <div className='mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-purple-500/10 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl'>
                  <div className='h-2 w-2 rounded-full bg-primary' />
                  <span className='text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary'>Let&apos;s Connect</span>
                </div>
                <h2 className='mb-3 sm:mb-4 text-[1.75rem] sm:text-[2.5rem] font-bold text-light-text dark:text-dark-text lg:text-[3.5rem]'>
                  Ready to Work Together?
                </h2>
                <p className='mx-auto max-w-2xl text-[0.95rem] sm:text-[1.1rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary lg:text-[1.2rem] px-2'>
                  I&apos;m currently available for full-time positions and contract work. Let&apos;s discuss how I can help bring your project to life.
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className='mb-8 sm:mb-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                    className={`group/card relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-glass-lg ${method.primary ? 'border-primary/40 bg-gradient-to-br from-primary/20 to-purple-500/20 shadow-glow' : 'border-light-border bg-white/50 shadow-lg hover:border-primary/40 dark:border-glass-border dark:bg-glass-bg dark:shadow-none'}`}
                  >
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100' />

                    <div className='relative z-10 p-4 sm:p-6'>
                      <div className={`mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl transition-all ${method.primary ? 'bg-primary/20 text-primary' : 'bg-white/50 text-light-text-secondary group-hover/card:bg-primary/20 group-hover/card:text-primary dark:bg-dark-card/50 dark:text-dark-text-secondary'}`}>
                        {method.icon}
                      </div>
                      <div className='mb-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary'>
                        {method.label}
                      </div>
                      <div className={`text-[0.85rem] sm:text-[0.95rem] font-medium transition-colors break-words ${
                        method.primary ? 'text-primary' : 'text-light-text group-hover/card:text-primary dark:text-dark-text'
                      }`}>
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Primary CTA */}
              <div className='flex flex-col items-stretch sm:items-center justify-center gap-3 sm:gap-4 sm:flex-row'>
                <a
                  href='mailto:cuevamarkvincent@gmail.com?subject=Let&apos;s Work Together&body=Hi Mark, I&apos;d like to discuss...'
                  className='group/btn relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-purple-500 px-6 sm:px-8 py-3 sm:py-4 text-[0.9rem] sm:text-[1rem] font-bold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg'
                >
                  <span className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100' />
                  <svg className='relative z-10 h-4 w-4 sm:h-5 sm:w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <span className='relative z-10'>Send Me an Email</span>
                  <svg className='relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </a>

                <a
                  href='/resume'
                  className='group/btn inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border border-light-border bg-white/50 px-6 sm:px-8 py-3 sm:py-4 text-[0.9rem] sm:text-[1rem] font-bold text-light-text shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text dark:shadow-none'
                >
                  <svg className='h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-y-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  <span>View Resume</span>
                </a>

                <a
                  href='/CUEVA_MARKVINCENT_CV.pdf'
                  download='CUEVA_MARKVINCENT_CV.pdf'
                  className='group/btn inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border border-light-border bg-white/50 px-6 sm:px-8 py-3 sm:py-4 text-[0.9rem] sm:text-[1rem] font-bold text-light-text shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text dark:shadow-none'
                >
                  <svg className='h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-y-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Footer */}
              <div className='mt-8 sm:mt-12 border-t border-light-border pt-6 sm:pt-8 text-center dark:border-glass-border px-2'>
                <p className='text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary'>
                  Built with Next.js, React, TypeScript, and Tailwind CSS
                </p>
                <p className='mt-2 text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary'>
                  &copy; {new Date().getFullYear()} Mark Vincent A. Cueva. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Contact
