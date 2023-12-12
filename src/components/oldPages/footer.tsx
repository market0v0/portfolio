import React from 'react'
import OutlineButton from '../outlineButton'
import AnimatedSection from '../PageAnimation'
import Contacts from '../nav/contaxt'

const Footer: React.FC = () => {
  return (
    <AnimatedSection>
    <div className='flex px-4 sm:pt-[50rem] py-[5rem] sm:py-[10rem] min-w-full justify-center  ' >
      <div className=' min-w-[90%] flex iteams-center justify-center md:w-[77%] '>
        <AnimatedSection>
        <div className='flex  flex-col p-10 backdrop-blur-sm border-2 border-slate-900 rounded-xl bg-bgcolor   items-center justify-center text-center  text-white' id='footer'>
          <div className='text-[1.7rem] font-[600] text-primary'> GET IN TOUCH</div>
          <div className='py-6 text-[1.2rem] font-[400]'>Let’s talk about it!</div>
          <span className='tracking-4 pb-10 text-[0.8rem] font-[300] leading-[2rem] md:w-[80%]'>
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

            <div className=' border-2 border-secondary hover:underline'><OutlineButton buttontext={'Write me an Email'}/> </div>

          </a>
          <Contacts/>
        </div>
        </AnimatedSection>

      </div>
    </div>
    </AnimatedSection>
  )
}

export default Footer
