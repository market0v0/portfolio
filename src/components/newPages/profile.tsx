import React from 'react'
import AnimatedSection from '../PageAnimation'

const strengths = [
  {
    title: 'ERP integrations that balance to the centavo',
    body: 'Two-way NetSuite sync with SuiteScript RESTlets: Sales Orders, Item Fulfillment, Customer Deposits and Refunds, wired into freight billing, VAT and withholding tax.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  {
    title: 'AI-native engineering',
    body: 'Claude Code subagents, project skills and AI code review in CI that speed up the whole team.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Production delivery',
    body: 'Client demos, UAT, go-live support and retraining for a SaaS running real shipping operations.',
    icon: 'M5 13l4 4L19 7'
  },
  {
    title: 'Quality by default',
    body: 'Playwright E2E on nightly CI with per-role auth, plus Vitest suites around billing-critical logic.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Data you can act on',
    body: 'Finance reconciliation, exports and SofTrack analytics with Redis caching and event-driven Jira sync.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  }
]

const Profile: React.FC = () => {
  return (
    <AnimatedSection>
    <div className='flex z-10 flex-col items-center min-h-screen justify-center py-20' id="profile">
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-16'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary'>About</p>
          <h2 className='mb-3 text-[2rem] font-semibold text-light-text lg:text-[2.5rem] dark:text-dark-text'>
            About me
          </h2>
          <p className='text-[1.05rem] text-light-text-secondary dark:text-dark-text-secondary'>Engineer, integrator, and AI tooling builder</p>
        </div>

        <div className='spotlight group relative overflow-hidden rounded-2xl border border-light-border p-8 shadow-lg backdrop-blur-2xl transition-all dark:border-glass-border dark:bg-glass-gradient dark:shadow-none lg:p-12'>
          {/* Glass shine effect */}
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5' />

          <div className='relative z-10 grid grid-cols-1 items-center gap-10 xl:grid-cols-2 xl:gap-12'>
            <div className='flex justify-center xl:justify-start'>
              <div className='group/photo relative w-full max-w-md'>
                {/* Outer glow */}
                <div className='absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary via-purple-500 to-primary-light opacity-40 blur-xl transition-opacity duration-700 group-hover/photo:opacity-70' />

                {/* Gradient ring + backdrop */}
                <div className='relative rounded-[1.6rem] bg-gradient-to-br from-primary/80 via-purple-400/40 to-primary-light/80 p-[2px]'>
                  <div className='relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#140b28]'>
                    <img
                      src='/profile-photo.jpg'
                      alt='Mark Vincent Cueva'
                      loading='lazy'
                      className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-[1.04]'
                    />
                  </div>
                </div>

                {/* Floating chips */}
                <div className='absolute -left-3 top-8 flex items-center gap-2 rounded-xl border border-light-border bg-white/80 px-3 py-2 text-xs font-semibold text-light-text shadow-glass backdrop-blur-xl transition-transform duration-500 group-hover/photo:-translate-y-1 dark:border-glass-border dark:bg-dark-card/80 dark:text-dark-text sm:-left-6 sm:text-sm'>
                  <span className='relative flex h-2 w-2'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                    <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
                  </span>
                  Senior SWE @ Softype
                </div>
                <div className='absolute -right-3 bottom-10 rounded-xl border border-light-border bg-white/80 px-3 py-2 text-xs font-semibold text-light-text shadow-glass backdrop-blur-xl transition-transform duration-500 group-hover/photo:translate-y-1 dark:border-glass-border dark:bg-dark-card/80 dark:text-dark-text sm:-right-6 sm:text-sm'>
                  <span className='text-primary'>✦</span> AI-native engineering
                </div>
                <div className='absolute bottom-4 left-4 hidden rounded-lg bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:block'>
                  📍 Cebu, Philippines
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='space-y-4 text-[1rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary lg:text-[1.1rem]'>
                <p>
                  I&apos;m a <span className='font-semibold text-light-text dark:text-dark-text'>Senior Software Engineer</span> at Softype Inc. with 2.5+ years
                  shipping production systems, promoted to senior 15 months in. Before that I built Jira plugins at
                  Ease Solutions and KYC and data pipelines at Alliance Software. I hold a BS in Information Technology
                  from Cebu Institute of Technology University.
                </p>

                <p>
                  I&apos;m a core engineer on <span className='font-semibold text-light-text dark:text-dark-text'>Aquarius 2.0</span>, a multi-tenant maritime SaaS
                  that went live for a major Philippine shipping line in 2026. I own its NetSuite ERP integration and
                  billing-critical freight workflows, and I work directly with the client through demos, UAT and go-live.
                </p>

                <p>
                  I build <span className='font-semibold text-light-text dark:text-dark-text'>AI-native engineering workflows</span>: Claude Code subagents, project
                  skills and AI code review in CI, alongside LLM features like LangChain RAG reporting and OCR
                  document pipelines.
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

        {/* What I bring */}
        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {strengths.map((item, index) => (
            <div
              key={item.title}
              className={`spotlight group relative overflow-hidden rounded-2xl border border-light-border p-6 shadow-lg backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-none ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className='relative z-10'>
                <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-500 text-white shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110'>
                  <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className='mb-2 text-[1.15rem] font-semibold text-light-text dark:text-dark-text'>{item.title}</h3>
                <p className='text-[0.95rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </AnimatedSection>
  )
}

export default Profile
