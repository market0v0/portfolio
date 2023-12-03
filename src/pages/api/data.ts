export interface Technology {
  img: string
  techs: string
}

export const Technologies: Technology[] = [
  { img: '/skills/react.svg', techs: 'React' },
  { img: '/skills/ts.svg', techs: 'TypeScript' },
  { img: '/skills/java.svg', techs: 'Java' },
  { img: '/skills/py.svg', techs: 'Python' },
  { img: '/skills/git.svg', techs: 'Git' },
  { img: '/skills/next.svg', techs: 'Next' },
  { img: '/skills/express.svg', techs: 'Express' },
  { img: '/skills/spring.svg', techs: 'Spring' }
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
    img: '/projects/pinewood.svg',
    tech: 'NODE - EXPRESS - NEXTJS - MONGO',
    desc: 'Developed a personal project showcasing gravel, road, and mountain bike models for the Pinewood brand, using Express for the backend, NEXT.js for the frontend, and MongoDB Atlas for efficient data management.',
    repository: 'https://github.com/market0v0/pinewood',
    title: 'PINEWOOD BIKE'
  },
  {
    img: '/projects/bramk.svg',
    tech: 'NODE - NEXTJS - GPT - MONGO - EXPRESS ',
    desc: 'Contributed to the development of a customer support bot powered by OpenAI GPT, using TypeScript and Next.js for the frontend and Express for the backend. Played a significant role in data analytics features and GPT integration research.',
    repository: 'https://github.com/ainderew/cap-client',
    title: 'BRAMK'
  },
  {
    img: '/projects/markchat.svg',
    tech: 'NEXTJS - MYSQL - SPRING - JAVA EE',
    desc: 'Created a user-friendly chat system for instant messaging among registered users, with TypeScript and Next.js for the frontend and Java and Spring Boot for the backend.',
    repository: 'https://github.com/market0v0/assesmentChat',
    title: 'MARK CHAT'
  },
  {
    img: '/projects/oneblood.svg',
    tech: 'DJANGO - BOOTSTARP - MYSQL - HTML5 ',
    desc: 'Worked on a project focusing on blood donations and transfusions, specifically on the donation interaction side. Utilized the Django framework, HTML5, and Bootstrap for seamless coordination within the blood supply chain, linking hospitals and blood banks.',
    repository: 'https://github.com/market0v0/BloodBankSystem',
    title: 'ONE BLOOD'
  }

]
export const trainingsData = [
  {
    img: 'aws.svg',
    label: 'Zuitt AWS Services',
    images: [],
    date: '(Aug 2023 - Ongoing)',
    body: 'Acquired in-depth knowledge of AWS serverless architecture, encompassing pivotal services such as S3, EC2, DynamoDB, Lambda, and API Gateway.'

  },
  {
    img: 'javaee.svg',
    label: 'Zuitt Backend Java EE',
    images: [],
    date: '(Jan 2023 - May 2023)',
    body: 'Acquired in-depth knowledge of Java EE, Tomcat, Spring Boot, Maven, and security features, such as JWT tokens, for advanced backend development.'

  },
  {
    img: 'ata.svg',
    label: 'Accenture Technology Academy',
    images: [],
    date: '(Aug 2023 - Ongoing)',
    body: 'Successfully completed Accentures Backend Development (BED) program, gaining proficiency in Git, Java Spring, testing, Maven, Java core, and Docker.'

  }
]
