import React from 'react'
import AnimatedSection from '../PageAnimation'

const Profile: React.FC = () => {
  return (
    <AnimatedSection>
    <div className='flex flex-col z-10 items-center min-h-screen justify-center' id="profile">
      <div className=' w-[90%]  sm:w-[60%]'>
        <div className='grid min-w-10  bg-bgcolor lg:px-8 px-4 py-4 lg:py-8 rounded-xl grid-cols-1 place-items-center gap-2  text-[.8rem] border-2 border-slate-900 font-[300] text-white  xl:grid-cols-2 lg:text-[1rem]'>

          <div className='justify-self-center '>

            <img src='/profile1.svg' alt='project' width='550' height='100% z-0' className='sm:rounded-none rounded-sm'/>

          </div>
          <div className='grid items-start '>
            <div className='text-[1.5rem] text-primary font-[700] lg:text-[2.5rem]'>WHO IS <span className='text-secondary'>MARK?</span></div>
            <div className='w-[98%] py-2 text-[1rem] sm:leading-[1.2rem] leading-[1.5rem] tracking-[0.02rem] lg:py-4 lg:w-[90%] xl:py-2  xl:leading-[1.5rem]'>
              <p>
                {' '}
                Mark Vincent A. Cueva is a graduating BSIT student from Cebu Institute of Technology
                University, eager to learn and gain experience in the IT industry.
              </p>
              <br />
              <p>
                He is dedicated to exploring opportunities in web development and highly motivated
                to acquire real job experience. Mark is adaptable, persevering, and committed to
                continuous self-improvement.
              </p>
            </div>
            <div className='grid '>
              <div className='pb-2 text-primary'>SOCIALS: </div>
              <div className='flex gap-2'>
                <a href='https://github.com/market0v0' target='_blank' rel='noreferrer'>
                  <img src='/github.svg' alt='icon' width='25' height='100%' />
                </a>
                <a
                  href='https://www.linkedin.com/in/mark-cueva-90a33424a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='/link.svg' alt='icon' width='25' height='100%' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-[90%]  sm:w-[60%]'></div>
    </div>
    </AnimatedSection>
  )
}

export default Profile
