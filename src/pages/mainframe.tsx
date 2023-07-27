import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import IntroFrame from './Intro'
import Skill from './skill'
import NavBar from '@/components/navbar'
import Projects from './projects'
import Profile from './profile'
import Footer from './footer'

const Mainframe: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const images = document.querySelectorAll('img')
    let loadedCount = 0

    const handleImageLoad = (): void => {
      loadedCount++
      if (loadedCount === images.length) {
        setLoading(false)
      }
    }

    images.forEach(image => {
      if (image.complete) {
        handleImageLoad()
      } else {
        image.addEventListener('load', handleImageLoad)
      }
    })

    return () => {
      images.forEach(image => {
        image.removeEventListener('load', handleImageLoad)
      })
    }
  }, [])

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

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.9
  })

  return (
    <div className='min-h-screen bg-black text-white'>
      {loading && <div className='loader'>Loading...</div>}

      <div className='sticky top-0 z-20'>
        <NavBar />
      </div>

      <div>
        <div
          className={`font-poppins max-w-screen  snap-y snap-proximity bg-black${
            inView1 ? 'min-h-screen overflow-y-auto' : 'min-h-full'
          }${inView2 ? 'min-h-screen overflow-y-auto' : 'min-h-full'}`}
          style={{
            background: inView1 ? 'rgba(0, 0, 0, 0.60)' : "url('mainbackground.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <style>
            {`
            ::-webkit-scrollbar {
              width: .5rem;
            }
            ::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.60);
            }
          `}
          </style>

          <motion.div
            className='flex min-h-full  justify-center py-10'
            style={{
              background: "url('intro.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={skillsetVariants}
          >
            <IntroFrame />
          </motion.div>

          <div className='z-10 flex min-h-full justify-center'>
            <Skill />
          </div>

          <motion.div
            className={'flex min-h-full snap-start justify-center bg-[#0000007b]'}
            ref={ref1}
            initial='hidden'
            animate={inView1 ? 'visible' : 'hidden'}
            variants={skillsetVariants}
          >
            <Projects instru={inView1} />
          </motion.div>

          <div className='flex min-h-full  justify-center '>
            <Profile />
          </div>
        </div>
      </div>

      <motion.div
        className='flex min-h-full snap-start justify-center bg-[#000000] '
        ref={ref2}
        initial='hidden'
        animate={inView2 ? 'visible' : 'hidden'}
        variants={skillsetVariants}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default Mainframe
