import React from 'react'

import OutlineButton from '../outlineButton'
import BubbleText from '../bubble'
import NormalType from '../normalType'
import { scrollToSection } from '../utils'

const HeroFrame: React.FC = () => {
  return (
    <div className='flex min-h-full justify-center' id="hero">

      <div className=' w-[90%] md:w-[77%]' >
        <div className='flex min-h-full items-center justify-center text-center  '>
          <section>
            <div className='font-sans-typewriter text-[1.8rem] lg:text-[5rem] font-bold'>
              <span className='text-primary'>Hello,</span> I am Mark
            </div>

            <div className='font-sans-typewriter text-[1rem] lg:text-[2.8rem]'>
              <span className=''>an aspiring </span>
              <span className='font-bold  text-[#7E31F1]'>
                <BubbleText text={'SOFTWARE DEVELOPER'} />
              </span>
            </div>
            <div className='  text-[.6rem] font-[400] leading-6 md:leading-10 tracking-[0.025rem]  lg:leading-[1rem] '>
             <NormalType text={' Passionate individual in the Philippines eager for job opportunities to gain valuable experience and enhance skills.'} />

            </div>
            <div className='pt-10'>
              <div className='flex items-center justify-center  gap-6 justify-self-end py-2 text-[0.73rem] font-[300] lg:gap-10 lg:text-[0.7rem]'>
                <div
                  className='cursor-pointer border-2 border-white  hover:border-0'
                  onClick={() => { scrollToSection('footer') }}
                >
                  <OutlineButton buttontext={'GET IN TOUCH'} />
                </div>

                <div
                  className='cursor-pointer border-2  border-white  hover:border-0'
                  onClick={() => (window.location.href = '/resume')}
                >

                  <OutlineButton buttontext={'VIEW RESUME'} />
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}

export default HeroFrame
