import React from 'react'

const Footer: React.FC = () => {
  const showScrollText = true

  const scrollUp = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex min-h-[100vh] min-w-full justify-center  bg-[#000000]'>
      <div className='min-h-[100vh] min-w-[90%] md:w-[77%]'>
        <div className='flex min-h-[90%] flex-col items-center justify-center text-center  text-white'>
          <div className='text-[1.7rem] font-[600] text-[#D28738]'> GET IN TOUCH</div>
          <div className='py-6 text-[1.2rem] font-[400]'>Let’s talk about it!</div>
          <span className='tracking-4 pb-10 text-[0.9rem] font-[300] leading-[2rem] md:w-[80%]'>
            Feel free to send an email regarding any freelance or job opportunities. If you are
            <br />
            interested, reach out via email so we can further discuss.
          </span>

          <a
            className='flex   text-[0.9rem]'
            href='https://mail.google.com/mail/u/0/?to=cuevamarkvincent@gmail.com&amp;fs=1&amp;tf=cm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='px-2'>
              <img src='/email.svg' alt='icon' width='25' height='100%' />
            </div>
            <div className='pb-2 hover:underline'>write me an Email </div>
          </a>
        </div>
        {showScrollText && (
          <div
            className='smooth-bounce animate-bounce cursor-pointer text-center text-[0.9rem] text-[#ffffff64] transition-transform duration-500 ease-in-out'
            onClick={scrollUp}
          >
            ^ BACK TO TOP ^
          </div>
        )}
      </div>
    </div>
  )
}

export default Footer
