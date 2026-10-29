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
    img: '/projects/shipkit.svg',
    tech: 'CLAUDE CODE - AI AGENTS - MCP - PLAYWRIGHT - GITHUB ACTIONS',
    desc: 'Open-source Claude Code plugin that bundles AI agents and skills for shipping code safely. Includes a code-reviewer, an end-to-end test writer and a conformance auditor, plus skills for /ship, PR descriptions, Playwright E2E tests, building MCP servers and money-safe code. Ships with a GitHub Actions workflow for automated AI pull-request reviews. Install with /plugin marketplace add market0v0/shipkit.',
    repository: 'https://github.com/market0v0/shipkit',
    title: 'SHIPKIT'
  },
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
export interface ExperienceProject {
  name: string
  tagline: string
  achievements: string[]
}

export interface ExperienceData {
  company: string
  position: string
  date: string
  location?: string
  highlight?: string
  metrics?: Array<{ value: string, label: string }>
  achievements: string[]
  projects?: ExperienceProject[]
  technologies: string[]
}

export const experienceData: ExperienceData[] = [
  {
    company: 'Softype Inc.',
    position: 'Software Engineer → Senior Software Engineer',
    date: 'Jan 2025 - Present',
    location: 'Cebu, Philippines',
    highlight: 'Promoted to Senior in Apr 2026 (15 months)',
    metrics: [
      { value: '2', label: 'Production releases' },
      { value: '65+', label: 'tRPC routers' },
      { value: '35%', label: 'Faster booking' },
      { value: '45+', label: 'Vitest suites' }
    ],
    achievements: [],
    projects: [
      {
        name: 'Aquarius 2.0',
        tagline: 'Multi-tenant maritime SaaS for freight, passage, gating and vessel operations. Live for a major Philippine shipping line.',
        achievements: [
          'Core engineer from the 2.0 build through production on a Next.js 15 / tRPC / Prisma / PostgreSQL platform; shipped Go-Live (Jul 2026) and Roll-Out 2 (Sep 2026)',
          'Built the NetSuite two-way ERP sync with SuiteScript RESTlets for Sales Orders, Item Fulfillment, Customer Deposits and Refunds, mapping B/L → Sales Order and gating → fulfillment → auto-invoice with centavo-accurate totals',
          'Owned billing-critical freight logic: revalidation, vessel swap, partial loading, B/L lifecycle with lock-based number generation, surcharge waivers, VAT and 7% withholding tax, and cash/cheque A/R routing',
          'Built Maya/GCash payment webhooks with audit logging, plus customer-portal ID verification using OCR for PWD, Senior and driver\'s license IDs',
          'Built finance reporting (summary, reconciliation with VATable/exempt split, Excel/CSV export, manifests, official receipts), voyage groups, connecting voyages and fleet seat layouts',
          'AI-native development: wrote Claude Code subagents, project skills and slash commands; ran AI code review on PRs in CI and agent-driven conformance audits',
          'Built a Playwright E2E regression suite (Page Object Models, per-role auth, NetSuite payload verification, idempotent seeding) on nightly GitHub Actions',
          'Client-facing delivery: led the NetSuite Item Fulfillment demo, joined module demos and the 3-day Roll-Out 2 client demo, UAT, go-live support and admin retraining'
        ]
      },
      {
        name: 'SofTrack',
        tagline: 'Internal Jira time-tracking and resource analytics platform.',
        achievements: [
          'Built event-driven Jira worklog sync with sync history, team webhooks, monthly approval workflow, category-trend analytics and an executive teams view',
          'Added Redis caching for 60%+ fewer Jira API calls, fixed cross-timezone worklog bugs, and hardened CI with Neon branch databases and self-healing Prisma migrations',
          'Automated internal reporting with GPT and LangChain RAG; presented a company Tech Talk on Claude Cowork + Rovo AI for Jira'
        ]
      }
    ],
    technologies: ['Next.js 15', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'NetSuite SuiteScript', 'Redis', 'Inngest', 'Vercel', 'Playwright', 'Vitest', 'Claude Code', 'LangChain']
  },
  {
    company: 'Ease Solutions',
    position: 'Junior Software Engineer',
    date: 'Jun 2024 - Dec 2024',
    location: 'Cebu, Philippines',
    achievements: [
      'Built a custom Jira plugin from scratch (Atlassian SDK) with dictionary-driven workflow automation that extends the Jira REST API',
      'Set up client Jira environments: workflows, permission schemes and boards',
      'Optimized Spring API fetching for tree/node views',
      'Built a Selenium regression suite for CI/CD'
    ],
    technologies: ['Java', 'Spring Boot', 'Atlassian SDK', 'Jira REST API', 'Selenium']
  },
  {
    company: 'Alliance Software Inc.',
    position: 'Software Engineer Intern',
    date: 'Jan 2024 - May 2024',
    location: 'Cebu, Philippines',
    achievements: [
      'Built a KYC onboarding flow (React, TypeScript) with third-party identity-verification APIs, and a live exchange-rate display',
      'Architected an Azure event-driven ETL pipeline and Power BI dashboards (SQL on Azure DevOps data) for sprint velocity, backlog aging and utilization'
    ],
    technologies: ['React', 'TypeScript', 'Azure', 'Power BI', 'SQL']
  }
]

export const trainingsData = [
  {
    img: '/skills/claude.svg',
    label: 'Anthropic',
    images: [],
    date: 'Claude AI Fundamentals · Claude API & AI Integration',
    body: 'LLM concepts, prompt design and responsible AI, plus production Claude API integration with tool use.'
  },
  {
    img: 'aws.svg',
    label: 'Zuitt AWS Bootcamp',
    images: [],
    date: 'Cloud Architecture & Serverless Development',
    body: 'Lambda, DynamoDB, API Gateway and S3. Delivered a serverless capstone integrating Lambda, DynamoDB and API Gateway.'
  },
  {
    img: 'javaee.svg',
    label: 'Zuitt Java Bootcamp',
    images: [],
    date: 'Advanced Backend Engineering',
    body: 'Built backend systems with Spring Boot, Maven and Java EE, secured with JWT authentication and RBAC.'
  },
  {
    img: 'ata.svg',
    label: 'Accenture Technology Academy',
    images: [],
    date: 'Backend Development & DevOps Foundations',
    body: 'Java Spring, JUnit/Mockito, Docker and CI/CD for containerized development and deployment workflows.'
  }
]
