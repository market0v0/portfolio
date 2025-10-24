import React from 'react'
import { MyContextProvider } from '@/components/context/context'
import Navigation from '@/components/nav/nav'

const Resume: React.FC = () => {
  const handleDownloadResume = (): void => {
    const link = document.createElement('a')
    link.href = '/CUEVA_MARKVINCENT_CV.pdf'
    link.setAttribute('download', 'CUEVA_MARKVINCENT_CV.pdf')
    link.click()
  }

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Softype Inc.',
      period: 'Jan 2025 - Present',
      achievements: [
        'Unified redundant components to streamline performance and reduce system complexity',
        'Developed seat selection logic on the T3 stack with optimized data fetching strategies',
        'Implemented offline capabilities using PWA, Service Workers, and SQLite for resilient data access',
        'Strengthened team collaboration through effective Scrum ceremonies and Jira workflow alignment',
        'Provided key insights to management by identifying relevant data needs and improving reporting clarity',
        'Fostered a healthy co-working culture and embraced emerging technologies like prompt engineering',
        'Built customer and pitching portals to support client demos and stakeholder engagement'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'Ease Solutions',
      period: 'Jun 2024 - Dec 2024',
      achievements: [
        'Contributed to a dictionary feature enhancement in a custom Jira plugin',
        'Optimized tree and node data fetching via Spring APIs for improved performance',
        'Built Selenium-based test automation for UI validation and regression coverage',
        'Strengthened understanding of Jira workflows and issue tracking through active sprint participation',
        'Collaborated effectively within a Scrum team, improving coordination and delivery across sprint cycles',
        'Participated in backlog grooming and sprint planning to align technical tasks with business priorities'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Alliance Software Inc.',
      period: 'Jan 2024 - May 2024',
      achievements: [
        'Designed and implemented a customer KYC flow for a money exchange app using React and TypeScript',
        'Built a responsive exchange rate display screen with real-time updates via API integration',
        'Rebuilt an Azure-based automation pipeline for dashboard data ingestion and transformation',
        'Developed workflows and scheduled jobs to sync and visualize data for operational dashboards'
      ]
    }
  ]

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
      name: 'Zuitt AWS Bootcamp',
      subtitle: 'Cloud Architecture & Serverless Development',
      points: [
        'Developed a strong grasp of AWS services including S3, EC2, Lambda, DynamoDB, and API Gateway',
        'Delivered a capstone project integrating Lambda, DynamoDB, and API Gateway to build a scalable serverless backend'
      ]
    },
    {
      name: 'Zuitt Java Bootcamp',
      subtitle: 'Advanced Backend Engineering',
      points: [
        'Built backend systems using Tomcat, Spring Boot, Maven, and Java EE',
        'Strengthened backend security through JWT-based authentication and access control'
      ]
    },
    {
      name: 'Accenture Technology Academy',
      subtitle: 'Backend Development & DevOps Foundations',
      points: [
        'Explored Java Spring ecosystem including JUnit, Mockito, Maven, and core Java principles',
        'Gained hands-on experience with Docker for containerized development and deployment workflows'
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
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className='group relative overflow-hidden rounded-2xl border border-glass-border bg-glass-gradient p-8 backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-glass-lg'
                  >
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                    <div className='relative z-10 mb-4 flex flex-col justify-between gap-4 border-b border-glass-border pb-4 md:flex-row md:items-start'>
                      <div>
                        <h3 className='mb-2 text-[1.5rem] font-bold text-dark-text'>{exp.title}</h3>
                        <p className='text-[1.2rem] font-semibold text-primary'>{exp.company}</p>
                      </div>
                      <div className='inline-flex items-center gap-2 rounded-lg border border-glass-border bg-glass-bg px-4 py-2 text-sm text-dark-text-secondary backdrop-blur-xl'>
                        <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        {exp.period}
                      </div>
                    </div>

                    <ul className='relative z-10 space-y-2 text-[0.95rem] leading-relaxed text-dark-text-secondary'>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className='flex gap-3'>
                          <span className='text-primary'>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
