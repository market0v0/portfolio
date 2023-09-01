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
  const skillsetVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  return (
    <div className='min-h-screen bg-black text-white'>
      <div>
        <div
          style={{
            background: inView1 ? 'rgba(0, 0, 0, 0.60)' : "url('mainbackground.svg')",
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
          <motion.div
            className={'flex min-h-full snap-start justify-center bg-[#0000007b]'}
            ref={ref1}
            initial='hidden'
            animate={inView1 ? 'visible' : 'hidden'}
            variants={skillsetVariants}
          >
            <div>
              {' '}
              <Skill />
            </div>
          </motion.div>
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
