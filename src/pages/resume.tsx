import React from 'react'
import { MyContextProvider } from '@/components/context/context'
import Navigation from '@/components/nav/nav'
import { experienceData } from '@/pages/api/data'

const Resume: React.FC = () => {
  const handleDownloadResume = (): void => {
    const link = document.createElement('a')
    link.href = '/CUEVA_MARKVINCENT_CV.pdf'
    link.setAttribute('download', 'CUEVA_MARKVINCENT_CV.pdf')
    link.click()
  }

  const projects = [
    {
      name: 'BRAMK (Business Resource Access through Modern Knowledge)',
      description: 'Bramk is a customer support bot powered by OpenAI GPT, providing not only analytics but also data analysis on business interactions with customers. Frontend developed with TypeScript and Next.js, while the backend is powered by Express. Contributed on mainly on the Data analytics feature and GPT integration research.',
      tech: 'React, MongoDB, Node js, Express, Langchain'
    },
    {
      name: 'AskMarked',
      description: 'Developed a web application enabling anonymous question and answer interactions. Users can generate links and QR codes, while others can anonymously send questions through these links. Additionally, the application allows users to download questions and answers.',
      tech: 'React, Python, Flask'
    }
  ]

  const trainings = [
    {
      name: 'Anthropic',
      subtitle: 'Claude AI Fundamentals · Claude API & AI Integration',
      points: [
        'LLM concepts, prompt design and responsible AI',
        'Claude API tool use and production integration'
      ]
    },
    {
      name: 'Accenture Technology Academy',
      subtitle: 'Backend Development & DevOps Foundations',
      points: ['Java Spring, JUnit/Mockito, Docker and CI/CD']
    },
    {
      name: 'Zuitt Java & AWS Bootcamps',
      subtitle: 'Backend Engineering · Cloud & Serverless',
      points: [
        'Spring Boot with JWT authentication and RBAC',
        'Lambda, DynamoDB, API Gateway and S3; serverless capstone project'
      ]
    }
  ]

  return (
    <MyContextProvider>
      <div className='min-h-screen bg-dark-bg transition-colors duration-300'>
        {/* Animated background gradient */}
        <div className='fixed inset-0 bg-liquid-gradient opacity-50' />
        <div className='fixed left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]' />

        <div className='relative z-10'>
          <Navigation />

          <div className='mx-auto max-w-5xl px-4 py-20'>
            {/* Header */}
            <div className='mb-16 text-center'>
              <h1 className='mb-4 text-[3rem] font-bold text-dark-text lg:text-[4rem]'>
                Mark Vincent A. Cueva
              </h1>
              <p className='mb-2 text-[1.2rem] font-semibold text-primary'>
                Senior Software Engineer · AI Engineering · Full-Stack TypeScript · ERP Integrations
              </p>
              <p className='mb-8 text-[1.1rem] text-dark-text-secondary'>
                cuevamarkvincent@gmail.com | +63 968 650 6973
              </p>
              <button
                onClick={handleDownloadResume}
                className='group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-purple-500 px-8 py-4 text-[1rem] font-bold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg'
              >
                <svg className='h-5 w-5 transition-transform group-hover:translate-y-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                Download Resume
              </button>
            </div>

            {/* Experience Section */}
            <div className='mb-16'>
              <h2 className='mb-8 text-[2.5rem] font-bold text-dark-text'>Experience</h2>
              <div className='space-y-6'>
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className='group relative overflow-hidden rounded-2xl border border-glass-border bg-glass-gradient p-8 backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg'
                  >
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                    <div className='relative z-10 mb-4 flex flex-col justify-between gap-4 border-b border-glass-border pb-4 md:flex-row md:items-start'>
                      <div>
                        <h3 className='mb-2 text-[1.5rem] font-bold text-dark-text'>{exp.position}</h3>
                        <p className='text-[1.2rem] font-semibold text-primary'>{exp.company}</p>
                        {exp.highlight != null && <p className='mt-1 text-sm text-dark-text-secondary'>{exp.highlight}</p>}
                      </div>
                      <div className='inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-glass-border bg-glass-bg px-4 py-2 text-sm text-dark-text-secondary backdrop-blur-xl'>
                        <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        {exp.date}
                      </div>
                    </div>

                    {[{ name: '', tagline: '', achievements: exp.achievements }, ...(exp.projects ?? [])]
                      .filter((group) => group.achievements.length > 0)
                      .map((group) => (
                        <div key={group.name} className='relative z-10 mb-4 last:mb-0'>
                          {group.name !== '' && (
                            <p className='mb-2 text-[1rem] font-semibold text-dark-text'>
                              {group.name} <span className='font-normal text-dark-text-secondary'>· {group.tagline}</span>
                            </p>
                          )}
                          <ul className='space-y-2 text-[0.95rem] leading-relaxed text-dark-text-secondary'>
                            {group.achievements.map((achievement, idx) => (
                              <li key={idx} className='flex gap-3'>
                                <span className='text-primary'>•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className='mb-16'>
              <h2 className='mb-8 text-[2.5rem] font-bold text-dark-text'>Projects</h2>
              <div className='space-y-6'>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className='group relative overflow-hidden rounded-2xl border border-glass-border bg-glass-gradient p-8 backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg'
                  >
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                    <div className='relative z-10'>
                      <h3 className='mb-3 text-[1.5rem] font-bold text-primary'>{project.name}</h3>
                      <p className='mb-4 text-[0.95rem] leading-relaxed text-dark-text-secondary'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.split(', ').map((tech, idx) => (
                          <span
                            key={idx}
                            className='rounded-lg border border-glass-border bg-glass-bg px-3 py-1.5 text-xs font-medium text-dark-text-secondary backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainings Section */}
            <div className='mb-16'>
              <h2 className='mb-8 text-[2.5rem] font-bold text-dark-text'>Trainings & Certifications</h2>
              <div className='space-y-6'>
                {trainings.map((training, index) => (
                  <div
                    key={index}
                    className='group relative overflow-hidden rounded-2xl border border-glass-border bg-glass-gradient p-8 backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg'
                  >
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                    <div className='relative z-10'>
                      <h3 className='mb-2 text-[1.4rem] font-bold text-dark-text'>{training.name}</h3>
                      <p className='mb-4 text-[1.1rem] font-semibold text-primary'>{training.subtitle}</p>
                      <ul className='space-y-2 text-[0.95rem] leading-relaxed text-dark-text-secondary'>
                        {training.points.map((point, idx) => (
                          <li key={idx} className='flex gap-3'>
                            <span className='text-primary'>•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className='mb-16'>
              <h2 className='mb-8 text-[2.5rem] font-bold text-dark-text'>Education</h2>
              <div className='overflow-hidden rounded-2xl border border-glass-border bg-glass-gradient p-8 backdrop-blur-2xl'>
                <h3 className='mb-2 text-[1.4rem] font-bold text-dark-text'>
                  Bachelor of Science in Information Technology
                </h3>
                <p className='text-[1.1rem] text-primary'>
                  Cebu Institute of Technology - University
                </p>
                <p className='mt-2 text-dark-text-secondary'>2020 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContextProvider>
  )
}

export default Resume
