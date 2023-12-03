import CursorAnimation from '@/components/CursorEffect'
import TypingTitle from '@/components/TypeAnimation'

import React from 'react'
import OutlineButton from '../outlineButton'

const IntroFrame: React.FC = () => {
  const titles = ['Web Developer', 'Technician', 'Full Stack Developer']

  return (
    <div
      className='flex min-h-full justify-center'
      style={{
        background: "url('intro.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='min-h-screen w-[90%] md:w-[77%]'>
        <div className='flex min-h-[90%] items-center justify-center text-center text-white lg:text-start'>
          <div className='px-0 pt-8 sm:px-4'>
            <div className='leading-[3rem] lg:leading-[4.5rem]'>
              <div className='bg-gradient-to-b from-[#ffffff] via-[#cc2500] to-[#cca700] bg-clip-text pl-1 text-[1.5em] font-[700] tracking-tight text-transparent lg:text-[2.5rem]'>
                HEY, I am
              </div>
              <div className='text-[4.5rem] font-bold lg:text-[7rem]'>
                <span className='glitch-animation'>Mark</span>
              </div>
            </div>

            <div className='text-[1.5rem] font-semibold leading-[3rem] text-[#D28738] lg:text-[3.75rem] lg:leading-[6rem]'>
              <span>an aspiring </span>
              <span className='font-bold text-[#ffffff]'>
                <TypingTitle titles={titles} />
              </span>
              <span className='font-thin'>
                <CursorAnimation />
              </span>
            </div>
            <div className='w-[95%] text-[.8rem] font-[400] leading-10 tracking-[0.025rem] lg:text-[1rem]  lg:leading-[2.2rem] '>
              I am currently residing in the Philippines, I am a passionate
              individual dedicated to exploring these possibilities. My main
              objective is to gain valuable job experience and continuously
              improve myself. I eagerly accept project offers and job
              opportunities.
            </div>
            <div className='pt-20'>
              <div className='flex items-center justify-center lg:justify-start gap-6 justify-self-end py-2 text-[0.73rem] font-[300] lg:gap-10 lg:text-[0.93rem]'>
                <div
                  className='cursor-pointer border-2 border-white  hover:border-0'
                  onClick={() => (window.location.href = '/resume')}
                >
                  <OutlineButton buttontext={'VIEW RESUME'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroFrame
