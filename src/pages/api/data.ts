export interface Technology {
  img: string
  techs: string
}

export const Technologies: Technology[] = [
  { img: '/skills/react.svg', techs: 'React' },
  { img: '/skills/ts.svg', techs: 'TypeScript' },
  { img: '/skills/next.svg', techs: 'Next.js' },
  { img: '/skills/java.svg', techs: 'Java' },
  { img: '/skills/spring.svg', techs: 'Spring Boot' },
  { img: '/skills/py.svg', techs: 'Python' },
  { img: '/skills/express.svg', techs: 'Express' },
  { img: '/skills/git.svg', techs: 'Git' },
  { img: '/skills/claude.svg', techs: 'Claude AI' },
  { img: '/skills/ai-agents.svg', techs: 'AI Agents' }
]

export interface ProjectData {
  img: string
  tech: string
  desc: string
  repository: string
  title: string
}

export const projectsdata: ProjectData[] = [
  {
    img: '/projects/bramk.svg',
    tech: 'REACT - NEXT.JS - MONGODB - NODE.JS - EXPRESS - LANGCHAIN',
    desc: 'AI-powered customer support platform serving 100+ daily inquiries with 95% accuracy. Integrated OpenAI GPT for intelligent responses and built comprehensive analytics dashboard tracking customer interactions, sentiment analysis, and support metrics. Led GPT integration research and implemented real-time data visualization features.',
    repository: 'https://github.com/ainderew/cap-client',
    title: 'BRAMK'
  },
  {
    img: '/projects/askmark.svg',
    tech: 'REACT - PYTHON - FLASK',
    desc: 'Anonymous Q&A platform enabling safe, judgment-free communication. Features dynamic QR code generation for instant link sharing, exportable Q&A archives, and real-time question management. Built with Flask backend for secure data handling and React frontend delivering responsive user experience across all devices.',
    repository: 'https://github.com/market0v0/askMark',
    title: 'ASK MARKED'
  },
  {
    img: '/projects/pinewood.svg',
    tech: 'NODE - EXPRESS - NEXTJS - MONGO',
    desc: 'Full-stack e-commerce showcase featuring 20+ bike models with advanced filtering, search, and comparison tools. Implemented MongoDB Atlas for scalable product catalog management, Express REST APIs for fast data retrieval, and Next.js SSR for optimal SEO and performance.',
    repository: 'https://github.com/market0v0/pinewood',
    title: 'PINEWOOD BIKE'
  },
  {
    img: '/projects/markchat.svg',
    tech: 'NEXT - MYSQL - SPRING - JAVA EE',
    desc: 'Real-time messaging platform supporting instant communication with WebSocket integration. Built scalable Spring Boot backend with MySQL for message persistence, JWT authentication for security, and responsive Next.js frontend with TypeScript for type-safe development.',
    repository: 'https://github.com/market0v0/assesmentChat',
    title: 'MARK CHAT'
  },

  {
    img: '/projects/oneblood.svg',
    tech: 'DJANGO - BOOTSTARP - MYSQL - HTML5 ',
    desc: 'Blood donation management system connecting hospitals and blood banks for efficient supply chain coordination. Features donor registration, inventory tracking, request management, and appointment scheduling. Built with Django framework for robust backend operations and Bootstrap for responsive UI.',
    repository: 'https://github.com/market0v0/BloodBankSystem',
    title: 'ONE BLOOD'
  }
]
export interface ExperienceData {
  company: string
  position: string
  date: string
  location?: string
  achievements: string[]
  technologies: string[]
}

export const experienceData: ExperienceData[] = [
  {
    company: 'Softype Inc.',
    position: 'Software Engineer',
    date: 'Jan 2025 - Present',
    location: 'Cebu, Philippines',
    achievements: [
      'Reduced component redundancy by 35% through strategic unification, streamlining performance and system complexity',
      'Architected and deployed seat selection system using T3 stack with optimized data fetching, handling 1000+ concurrent users',
      'Implemented offline-first PWA with Service Workers and SQLite, enabling 100% feature availability without connectivity',
      'Built customer and pitching portals that directly supported 3 major client demos, contributing to successful stakeholder engagement',
      'Pioneered AI-assisted development workflow using Claude AI and prompt engineering, improving team productivity by 25%',
      'Delivered actionable insights to management through data analysis, improving reporting clarity and decision-making speed'
    ],
    technologies: ['TypeScript', 'Next.js', 'T3 Stack', 'PWA', 'Service Workers', 'SQLite', 'Claude AI', 'AI Agents', 'Scrum', 'Jira']
  },
  {
    company: 'Ease Solutions',
    position: 'Junior Software Engineer',
    date: 'Jun 2024 - Dec 2024',
    location: 'Cebu, Philippines',
    achievements: [
      'Enhanced custom Jira plugin dictionary feature used by 50+ enterprise clients, improving workflow efficiency',
      'Optimized Spring API data fetching for tree and node operations, reducing load times by 40%',
      'Developed comprehensive Selenium test suite covering 85% of UI components, reducing regression bugs by 60%',
      'Contributed to 12 successful sprint deliveries as core Scrum team member, maintaining 95% on-time completion rate',
      'Streamlined backlog grooming process by identifying and documenting technical dependencies, reducing planning time by 30%'
    ],
    technologies: ['Spring Boot', 'Java', 'Selenium', 'Jira', 'Scrum']
  },
  {
    company: 'Alliance Software Inc.',
    position: 'Software Engineer Intern',
    date: 'Jan 2024 - May 2024',
    location: 'Cebu, Philippines',
    achievements: [
      'Designed and launched customer KYC flow for money exchange app, processing 500+ user verifications monthly',
      'Built real-time exchange rate display with live API integration, updating rates every 30 seconds for 10+ currencies',
      'Rebuilt Azure automation pipeline handling 10GB+ daily data ingestion, improving reliability from 85% to 99%',
      'Developed and deployed scheduled workflows syncing operational data across 5 dashboards, reducing manual effort by 80%'
    ],
    technologies: ['React', 'TypeScript', 'Azure', 'REST APIs']
  }
]

export const trainingsData = [
  {
    img: 'aws.svg',
    label: 'Zuitt AWS Bootcamp',
    images: [],
    date: 'Cloud Architecture & Serverless Development',
    body: 'Developed a strong grasp of AWS services including S3, EC2, Lambda, DynamoDB, and API Gateway. Delivered a capstone project integrating Lambda, DynamoDB, and API Gateway to build a scalable serverless backend.'
  },
  {
    img: 'javaee.svg',
    label: 'Zuitt Java Bootcamp',
    images: [],
    date: 'Advanced Backend Engineering',
    body: 'Built backend systems using Tomcat, Spring Boot, Maven, and Java EE. Strengthened backend security through JWT-based authentication and access control.'
  },
  {
    img: 'ata.svg',
    label: 'Accenture Technology Academy',
    images: [],
    date: 'Backend Development & DevOps Foundations',
    body: 'Explored Java Spring ecosystem including JUnit, Mockito, Maven, and core Java principles. Gained hands-on experience with Docker for containerized development and deployment workflows.'
  }
]
