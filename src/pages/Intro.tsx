import React from 'react'

const IntroFrame: React.FC = () => {
  const showScrollText = true

  const scrollDown = (): void => {
    window.scrollBy({ top: window.innerHeight + 120, behavior: 'smooth' })
  }
  const scrollDownToBottom = (): void => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' })
  }
  return (
    <div className='min-h-screen w-[90%] md:w-[77%]'>
      <div className='flex min-h-[90%] items-center justify-center text-center text-white lg:text-start'>
        <div className='px-0 sm:px-4'>
          <div className='leading-[3rem] lg:leading-[5rem]'>
            <div className='bg-gradient-to-b from-yellow-100 via-amber-400 to-orange-500 bg-clip-text pl-1 text-[1.5em] font-[700] tracking-tight text-transparent lg:text-[3.125rem]'>
              HEY, I am
            </div>
            <div className='text-[4.5rem] font-bold lg:text-[7.5rem]'>
              <span className='glitch-animation'>Mark</span>
            </div>
          </div>

          <div className='text-[1rem] font-semibold leading-[3rem] text-[#D28738] lg:text-[3.75rem] lg:leading-[6rem]'>
            an aspiring Web Developer / Technician
          </div>
          <div className='w-[95%] text-[0.7rem] font-[400] leading-6 tracking-[0.025rem] lg:text-[1.25rem]  lg:leading-[2.5rem] '>
            I am currently residing in the Philippines, I am a passionate individual dedicated to
            exploring these possibilities. My main objective is to gain valuable job experience and
            continuously improve myself. I eagerly accept project offers and job opportunities. Lets
            kickstart your online presence and make your mark in the digital world!
          </div>
          <div className='pt-10'>
            <button className='border-2'>
              <p className='p-2 px-8' onClick={scrollDownToBottom}>
                GET IN TOUCH
              </p>
            </button>
          </div>
        </div>
      </div>
      {showScrollText && (
        <div
          className='smooth-bounce animate-bounce cursor-pointer text-center text-[0.9rem] text-[#ffffff64] transition-transform duration-500 ease-in-out'
          onClick={scrollDown}
        >
          v Scroll Down v
        </div>
      )}
    </div>
  )
}

export default IntroFrame
