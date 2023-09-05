import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import IntroFrame from './Intro'
import Skill from './skill'
import NavBar from '@/components/navbar'
import Projects from './projects'
import Profile from './profile'
import Footer from './footer'
import AnimatedSection from '@/components/PageAnimation'
import ColorSection from '@/components/PageColor'

const Mainframe: React.FC = () => {
  return (
    <div className='min-h-screen bg-[#050716] text-white'>
      <div>
        <div
          style={{
            background: "url('mainbackground.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {' '}
          <div className='sticky top-0 z-20'>
            <NavBar />
          </div>
          <style>
            {`
            ::-webkit-scrollbar {
              width: .1rem;
            }
            ::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.60);
            }
          `}
          </style>
          <AnimatedSection>
            <IntroFrame />
          </AnimatedSection>
          <AnimatedSection>
            <Profile />
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
        </div>
      </div>
    </div>
  )
}

export default Mainframe
