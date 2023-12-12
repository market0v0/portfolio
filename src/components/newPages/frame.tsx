import HeroFrame from './hero'
import Navigation from '../nav/nav'
import Skill from './skill'
import Footer from '../oldPages/footer'
import Profile from './profile'
import { useMyContext } from '../context/context'
import ProjectPage from './projectPage'

// ... (imports and other code)

const Frame: React.FC = () => {
  const { data } = useMyContext()
  return (
    <div className={data ? 'bg-gradient-to-br from-[#000] to-[#110023]  ' : 'bg-gradient-to-br from-[#121923] to-[#331C57] '}>
      <div className='sticky top-2 z-20'>
        <Navigation />
      </div>
      <div className=' '>
          <HeroFrame />
          <Profile />
          <Skill />
          <ProjectPage/>

          <Footer />
        </div>
      {/* <ParticleRing active={false}>
        <div className='absolute  inset-y-0 inset-x-0 flex min-h-screen flex-col overflow-scroll'>
          <HeroFrame />
          <Profile />
          <Skill />
          <Projects />
          <Footer />
        </div>
      </ParticleRing> */}

    </div>
  )
}

export default Frame
