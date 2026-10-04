import React from 'react'
import AnimatedSection from '../PageAnimation'

interface TechCategory {
  name: string
  icon: string
  techs: Array<{
    name: string
    icon?: string
    level?: string
  }>
}

const techCategories: TechCategory[] = [
  {
    name: 'AI / LLM',
    icon: '🤖',
    techs: [
      { name: 'Claude Code (subagents, skills, commands)', level: 'Expert' },
      { name: 'Claude API & tool use', level: 'Advanced' },
      { name: 'AI PR review in CI', level: 'Advanced' },
      { name: 'Model Context Protocol (MCP)', level: 'Advanced' },
      { name: 'LangChain RAG', level: 'Advanced' },
      { name: 'OCR document pipelines', level: 'Intermediate' }
    ]
  },
  {
    name: 'Languages & Frameworks',
    icon: '⚛️',
    techs: [
      { name: 'TypeScript / JavaScript', level: 'Expert' },
      { name: 'Next.js 15 & React', level: 'Expert' },
      { name: 'tRPC', level: 'Expert' },
      { name: 'Node.js & Express', level: 'Advanced' },
      { name: 'Java & Spring Boot', level: 'Advanced' },
      { name: 'Python & SQL', level: 'Intermediate' }
    ]
  },
  {
    name: 'Data & Infra',
    icon: '☁️',
    techs: [
      { name: 'PostgreSQL & Prisma', level: 'Expert' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Vercel (preview envs, Blob)', level: 'Advanced' },
      { name: 'GitHub Actions & Inngest', level: 'Advanced' },
      { name: 'MongoDB & Neon', level: 'Advanced' },
      { name: 'AWS Lambda & Azure', level: 'Intermediate' }
    ]
  },
  {
    name: 'Integrations & Testing',
    icon: '🔗',
    techs: [
      { name: 'NetSuite SuiteScript 2.x RESTlets', level: 'Expert' },
      { name: 'Maya / GCash payments', level: 'Advanced' },
      { name: 'Jira REST & webhooks', level: 'Advanced' },
      { name: 'Playwright', level: 'Advanced' },
      { name: 'Vitest & Jest', level: 'Advanced' },
      { name: 'Selenium', level: 'Intermediate' }
    ]
  }
]

const TechStack: React.FC = () => {
  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      {techCategories.map((category, index) => (
        <AnimatedSection key={index}>
          <div className='spotlight group relative overflow-hidden rounded-2xl border border-light-border  p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-none lg:p-8'>
            {/* Glass shine effect */}
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5' />

            <div className='relative z-10'>
              <div className='mb-6 flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl backdrop-blur-sm'>
                  {category.icon}
                </div>
                <h3 className='text-[1.3rem] font-semibold text-light-text dark:text-dark-text'>
                  {category.name}
                </h3>
              </div>

              <div className='grid gap-3'>
                {category.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className='group/tech flex items-center justify-between rounded-lg border border-light-border bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 dark:border-dark-border dark:bg-dark-card/50'
                  >
                    <span className='text-[0.95rem] text-light-text-secondary group-hover/tech:text-light-text dark:text-dark-text-secondary dark:group-hover/tech:text-dark-text'>
                      {tech.name}
                    </span>
                    {(tech.level != null) && tech.level.length > 0 && (
                      <span className='rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary'>
                        {tech.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

export default TechStack
