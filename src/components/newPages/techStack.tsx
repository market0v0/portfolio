import React from 'react'
import AnimatedSection from '../PageAnimation'
import { Technologies } from '@/pages/api/data'

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
    name: 'Frontend',
    icon: '🎨',
    techs: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'T3 Stack', level: 'Advanced' }
    ]
  },
  {
    name: 'Backend',
    icon: '⚙️',
    techs: [
      { name: 'Spring Boot', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Python Flask', level: 'Intermediate' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    techs: [
      { name: 'AWS (Lambda, S3, EC2, DynamoDB)', level: 'Advanced' },
      { name: 'Azure', level: 'Intermediate' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'CI/CD', level: 'Intermediate' }
    ]
  },
  {
    name: 'AI & Emerging Tech',
    icon: '🤖',
    techs: [
      { name: 'Claude AI', level: 'Advanced' },
      { name: 'AI Agents', level: 'Intermediate' },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'OpenAI GPT', level: 'Intermediate' }
    ]
  },
  {
    name: 'Testing & Quality',
    icon: '✓',
    techs: [
      { name: 'Selenium', level: 'Advanced' },
      { name: 'JUnit', level: 'Advanced' },
      { name: 'Mockito', level: 'Intermediate' }
    ]
  },
  {
    name: 'Tools & Methodologies',
    icon: '🛠️',
    techs: [
      { name: 'Git', level: 'Expert' },
      { name: 'Jira', level: 'Advanced' },
      { name: 'Scrum/Agile', level: 'Advanced' },
      { name: 'Maven', level: 'Intermediate' }
    ]
  }
]

const TechStack: React.FC = () => {
  return (
    <div className='space-y-8'>
      {techCategories.map((category, index) => (
        <AnimatedSection key={index}>
          <div className='group relative overflow-hidden rounded-2xl border border-light-border  p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-glass-lg dark:border-glass-border dark:bg-glass-gradient dark:shadow-none lg:p-8'>
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

              <div className='grid gap-3 sm:grid-cols-2'>
                {category.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className='group/tech flex items-center justify-between rounded-lg border border-light-border bg-white/50 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 dark:border-dark-border dark:bg-dark-card/50'
                  >
                    <span className='text-[0.95rem] text-light-text-secondary group-hover/tech:text-light-text dark:text-dark-text-secondary dark:group-hover/tech:text-dark-text'>
                      {tech.name}
                    </span>
                    {tech.level && (
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
