import React from 'react'

import IntroFrame from './Intro'
import Skill from '../newPages/skill'
import NavBar from '@/components/oldPages/navbar'
import Projects from '../newPages/projects'
import Footer from './footer'
import AnimatedSection from '@/components/PageAnimation'
import ColorSection from '@/components/PageColor'

const Mainframe: React.FC = () => {
  return (
    <div className='h-screen overflow-scroll bg-[#0507169a]  text-white'>
      <div
        style={{
          background: "url('mainbackground.svg')",
          backgroundSize: 'cover'
        }}
      >
        {' '}
        <div className='sticky top-0 z-20'>
          <NavBar />
        </div>
        <AnimatedSection>
            <IntroFrame />
          </AnimatedSection>
          <div>
            <Skill />
          </div>
          <ColorSection>
            <Projects />
          </ColorSection>
          <ColorSection>
            <Footer />
          </ColorSection>
        <div className='absulote top-0 z-0'>

        </div>
      </div>
    </div>
  )
}

export default Mainframe
