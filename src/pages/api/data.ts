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
  { img: '/skills/spring.svg', techs: 'Spring' },
  { img: '/skills/mongo.svg', techs: 'MongoDB' }
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
    tech: 'NODE - EXPRESS - EXPRESS - NEXT - MONGO',
    desc: 'Pinewood Bikes Website is a personal project I developed to showcase various bike models categorized into three types: gravel, road, and mountain. The website is deployed using the Railway platform and utilizes EXPRESS as the backend framework. On the frontend, NEXT.js is employed to provide a seamless user experience. The database is hosted on MongoDB Atlas for efficient data management and storage.',
    repository: 'https://github.com/market0v0/pinewood',
    title: 'PINEWOOD BIKE'
  },
  {
    img: '/projects/markchat.svg',
    tech: 'NEXT - REACT - MYSQL - SPRING - JAVA EE',
    desc: 'MarkChat is a user-friendly chat system that enables instant messaging between registered users. Built with TypeScript and Next.js for the frontend, and backed by Java and Spring Boot for the backend.',
    repository: 'https://github.com/market0v0/assesmentChat',
    title: 'MARCK CHAT'
  }
]
