import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className='flex min-h-full justify-center'>
      <div className='min-h-screen w-[90%] py-20 md:w-[77%]'>
        <div className='grid min-h-[100%] w-[100%] grid-cols-1 place-items-center gap-7  text-[.8rem] font-[300] text-white  lg:grid-cols-2 lg:text-[1rem]'>
          <div className='justify-self-center'>
            <img src='/profile.svg' alt='project' width='550' height='100%' />
          </div>
          <div className='grid items-start text-white'>
            <div className='text-[1rem] font-[450] lg:text-[2rem]'>WHO IS MARK?</div>
            <div className='w-[98%] py-2 leading-[1.4rem] tracking-[0.02rem]  lg:w-[90%] lg:py-10 lg:leading-[2rem]'>
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
            <div className='grid pb-10'>
              <div className='pb-2 text-[#D28738]'>SOCIALS: </div>
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
    </div>
  )
}

export default Profile
