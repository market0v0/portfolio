import React from 'react'

import OutlineButton from '../outlineButton'
import BubbleText from '../bubble'
import NormalType from '../normalType'
import { scrollToSection } from '../utils'
import ZoomSection from '../zoomANimation'

const HeroFrame: React.FC = () => {
  return (
    <div className='flex min-h-screen justify-center' id='hero'>
      <div className=' w-[90%] md:w-[77%]'>
        <div className='flex min-h-full items-center justify-center text-center  '>
          <section>
             <ZoomSection>
              <div className='text-[1.8rem] font-bold lg:text-[6.5rem] tracking-tighter'>
                <span className='text-primary'>Hello,</span> I am Mark
              </div>

              <div className=' text-[1rem] lg:text-[2.8rem]'>
                <span className=''>an aspiring </span>
                <span className='font-bold  text-[#7E31F1]'>
                  <BubbleText text={'SOFTWARE DEVELOPER'} />
                </span>
              </div>
            </ZoomSection>

            <div className='  text-[.6rem] font-[400] leading-6 tracking-[0.025rem] md:leading-10  lg:leading-[1rem] '>
              <NormalType
                text={
                  'Passionate software developer seeking growth opportunities.'
                }
              />
            </div>

            <div className='pt-10'>
              <div className='flex items-center justify-center  gap-6  py-2 text-[0.73rem] font-[300] lg:gap-10 lg:text-[0.7rem]'>
                <div
                  className='cursor-pointer border-2 border-white  hover:border-0'
                  onClick={() => {
                    scrollToSection('footer')
                  }}
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
