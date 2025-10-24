import React from 'react'
import AnimatedSection from '../PageAnimation'

const Profile: React.FC = () => {
  return (
    <AnimatedSection>
    <div className='flex z-10 flex-col items-center min-h-screen justify-center py-20' id="profile">
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-16'>
          <h2 className='mb-3 text-[2rem] font-semibold text-light-text lg:text-[2.5rem] dark:text-dark-text'>
            About me
          </h2>
          <p className='text-light-text-secondary dark:text-dark-text-secondary'>Get to know more about my background and expertise</p>
        </div>

        <div className='group relative overflow-hidden rounded-2xl border border-light-border p-8 shadow-lg backdrop-blur-2xl transition-all dark:border-glass-border dark:bg-glass-gradient dark:shadow-none lg:p-12'>
          {/* Glass shine effect */}
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5' />

          <div className='relative z-10 grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-12'>
            <div className='flex justify-center xl:justify-start'>
              <div className='overflow-hidden rounded-2xl border border-light-border bg-white/50 p-2 dark:border-glass-border dark:bg-dark-card/50'>
                <img
                  src='/profile1.svg'
                  alt='Mark Vincent Cueva'
                  className='h-full w-full max-w-md rounded-xl object-cover'
                />
              </div>
            </div>

            <div className='space-y-6'>
              <div className='space-y-4 text-[1rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary lg:text-[1.1rem]'>
                <p>
                  I&apos;m a <span className='font-semibold text-light-text dark:text-dark-text'>Software Engineer</span> with professional experience at Softype Inc.,
                  Ease Solutions, and Alliance Software Inc. I graduated with a Bachelor of Science in
                  Information Technology from Cebu Institute of Technology University.
                </p>

                <p>
                  I specialize in <span className='font-semibold text-light-text dark:text-dark-text'>full-stack development</span> with expertise in React, TypeScript, Next.js,
                  Spring Boot, and cloud technologies. I&apos;ve delivered impactful solutions including
                  offline PWA capabilities, seat selection systems, customer KYC flows, and Azure-based
                  automation pipelines.
                </p>

                <p>
                  I embrace <span className='font-semibold text-light-text dark:text-dark-text'>emerging technologies</span> like AI agents and prompt engineering,
                  fostering innovation in team collaboration. I thrive in Agile environments and am passionate
                  about building scalable, intelligent, user-centric applications.
                </p>
              </div>

              <div className='space-y-4 border-t border-light-border pt-6 dark:border-glass-border'>
                <p className='text-sm font-semibold uppercase tracking-wide text-light-text-secondary dark:text-dark-text-secondary'>Connect with me</p>
                <div className='flex gap-3'>
                  <a
                    href='https://github.com/market0v0'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 rounded-xl border border-light-border bg-white/50 px-4 py-3 text-sm font-medium text-light-text backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text'
                  >
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path fillRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' clipRule='evenodd' />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href='https://www.linkedin.com/in/mark-cueva-90a33424a/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 rounded-xl border border-light-border bg-white/50 px-4 py-3 text-sm font-medium text-light-text backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:border-glass-border dark:bg-glass-bg dark:text-dark-text'
                  >
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  )
}

export default Profile
