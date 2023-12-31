import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Footer from '../components/oldPages/footer'
import ParticleRing from '@/components/background'
import { message } from 'antd'
import { MyContextProvider } from '@/components/context/context'

const Resume: React.FC = () => {
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

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.9
  })

  const handleCopyToClipboard = (textToCopy: string): void => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        void message.success('Copied Succesfully')
      })
      .catch((error) => {
        console.error('Unable to copy text:', error)
      })
  }

  const handleDownloadResume = (): void => {
    const link = document.createElement('a')
    link.href = '/CUEVA_MARKVINCENT_CV.pdf'
    link.setAttribute('download', 'CUEVA_MARKVINCENT.pdf')
    link.click()
  }

  return (
    <MyContextProvider>
      <ParticleRing active={false}>
        <div className='absolute inset-0 m-0 flex min-h-screen flex-col overflow-scroll'>
          <div className='min-h-full  text-secondary'>
            <div
              className={
                'font-poppins max-w-screen flex min-h-screen snap-y snap-proximity place-content-center  '
              }
            >
              <div className='  w-[90%] break-words pt-[2rem] md:w-[70%]'>
                <div className='sticky top-2 z-20 pb-10 flex items-start justify-start '>
                  <span
                    className={
                      ' flex items-center bg-primary cursor-pointer  justify-center rounded-md px-2 transition-all'
                    }
                    onClick={() => (window.location.href = '/')}
                  >
                   Back Home
                  </span>
                </div>
                <div className='grid w-[90%] grid-cols-1 items-center  md:grid-cols-[70%_30%] md:items-start '>
                  <div className='pb-2 text-[3rem] font-[500] leading-[3rem] md:pb-0'>
                    Mark Vincent A. Cueva
                  </div>
                  <div className='flex   gap-6   py-2 text-[1rem] font-[300] hover:text-primary '>
                    <button
                      className='w-[100%] cursor-pointer border-2 bg-[#ffffff1c] hover:border-primary'
                      onClick={handleDownloadResume}
                    >
                      <p className='cursor-pointer p-2 px-1 lg:px-10'>
                        DOWNLOAD RESUME
                      </p>
                    </button>
                  </div>
                </div>
                <div className='grid w-[100%] grid-cols-1 gap-10 py-10 pb-10 pt-10  tracking-[.1rem] md:grid-cols-[60%_40%]'>
                  <div>
                    <div className='text-[1.875rem] font-[500] tracking-[.2rem]'>
                      PROFILE
                    </div>
                    <div className='text-[1rem] leading-[2rem]'>
                      I am a passionate individual with a dedication to
                      exploring the vast opportunities in the tech industry,
                      particularly in web development. I am eager to gain real
                      job experience and grow through continuous
                      self-improvement. As I am approaching the end of my
                      university days, in the final year of my Bachelor of
                      Science in Information Technology program, I have built a
                      solid foundation in coding. I have experience working with
                      various frameworks in frontend, backend, and full-stack
                      development. Furthermore, I have also acquired skills in
                      UI/UX design and received technical administrative
                      training.
                    </div>
                  </div>
                  <div className='break-words md:px-10'>
                    <div className='text-[1.875rem] font-[500] tracking-[.2rem]'>
                      CONTACTS
                    </div>
                    <div className='cursor-pointer pt-2'>
                      <div className='flex py-2 text-[.8rem] leading-[2rem]'>
                        <span>
                          <img
                            src='/phone.svg'
                            alt='icon'
                            width='30'
                            height='100%'
                          />
                        </span>
                        <span className='px-2 text-primary '>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            onClick={() => {
                              handleCopyToClipboard('09686506973')
                            }}
                          >
                            +63 968 650 6973
                          </a>
                        </span>
                      </div>
                      <div className='flex py-2 text-[.8rem] leading-[2rem]'>
                        <span>
                          <img
                            src='/mail.svg'
                            alt='icon'
                            width='30'
                            height='100%'
                          />
                        </span>
                        <span className='px-2 text-primary '>
                          <a
                            className='break-all'
                            target='_blank'
                            rel='noreferrer'
                            onClick={() => {
                              handleCopyToClipboard(
                                'cuevamarkvincent@gmail.com'
                              )
                            }}
                          >
                            cuevamarkvincent@gmail.com
                          </a>
                        </span>
                      </div>
                      <div className='flex py-2 text-[.8rem] leading-[2rem]'>
                        <span>
                          <img
                            src='/location.svg'
                            alt='icon'
                            width='30'
                            height='100%'
                          />
                        </span>
                        <span className='px-2 text-primary '>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            onClick={() => {
                              handleCopyToClipboard(
                                'Brgy Mambaling., Cebu City'
                              )
                            }}
                          >
                            Brgy Mambaling, Cebu City
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=' text-[1.875rem] font-[500] tracking-[.2rem]'>
                      EDUCATION
                    </div>
                    <div className=' tracking-[.1rem]'>
                      <div className='pb-4'>
                        <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                          COLLEGE
                        </div>
                        <p className='leading-10 text-white'>
                          Cebu Institute of Technology - University 2020 -
                          present Estimated Graduation year: 2024
                        </p>
                      </div>
                      <div className='pb-4'>
                        <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                          SENIOR HIGHSCHOOL
                        </div>
                        <p className='leading-10 text-white'>
                          City of Bogo Science and Arts Academy 2018-2020
                        </p>
                      </div>
                      <div className='pb-4'>
                        <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                          JUNIOR HIGHSCHOOL
                        </div>
                        <p className='leading-10 text-white'>
                          St. Louise de Marillac College of Bogo 2014 - 2018
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-[1.875rem] font-[500] tracking-[.2rem]'>
                    SKILLS
                  </div>
                  <div className=' grid w-[100%] grid-cols-1 text-[1rem] leading-[2rem] tracking-[.1rem] md:w-[50%] md:grid-cols-2'>
                    <div>
                      <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                        SOFT SKILLS
                      </div>
                      <ul className=' list-disc px-6'>
                        <li>Proficient in Canva</li>
                        <li>Adoptive</li>
                        <li>Figma prototyping</li>
                        <li>Perseverance</li>
                        <li>Prototype wireframes</li>
                        <li>Microsoft products</li>
                      </ul>
                    </div>
                    <div>
                      <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                        Industry Skills
                      </div>
                      <ul className='list-disc px-6'>
                        <li>Next.js/tailwind</li>
                        <li>ReactTS/JS</li>
                        <li>Django</li>
                        <li>SpringBoot</li>
                        <li>Java Servlet</li>
                        <li>Express</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='pt-10'>
                  <div className='text-[1.875rem] font-[500] tracking-[.2rem]'>
                    EXPERTISE
                  </div>
                  <div className='grid w-[100%] grid-cols-2 gap-6 text-center text-[1rem] leading-[2rem] tracking-[.1rem] md:w-[100%] md:grid-cols-3 lg:grid-cols-4'>
                    <div className=''>
                      <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                        BACKEND DEVELOPMENT
                      </div>
                      <div className='text-center'>
                        <div className='text-[1rem] font-[200]'>AVERAGE</div>
                        <div className='text-[.8rem] font-[200]'>
                          SPRING - EXPRESS - DERBY- SQLITE
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                        FRONTEND DEVELOPMENT
                      </div>
                      <div className='text-[1rem] font-[200]'>INTERMEDIATE</div>
                      <div className='text-[.8rem] font-[200]'>
                        NEXT - TAILWIND - REACT - BOOTSTRAP
                      </div>
                    </div>
                    <div>
                      <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                        FULLSTACK DEVELOPMENT
                      </div>
                      <div className='text-[1rem] font-[200]'>AVERAGE</div>
                      <div className='text-[.8rem] font-[200]'>
                        ANDRIOD STUDIO - NETBEANS - DJANGO - FLASK
                      </div>
                    </div>
                    <div>
                      <div className='pb-2 text-[1.2rem] font-[500] text-primary'>
                        TROUBLESHOOTING
                      </div>
                      <div className='text-[1rem] font-[200]'>AVERAGE</div>
                      <div className='text-[.8rem] font-[200]'>
                        VIRUTAL MACHINE - HARDWARE - BIOS DNS SERVER - DOMAIN
                      </div>
                    </div>
                  </div>
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
        </div>
      </ParticleRing>
    </MyContextProvider>
  )
}

export default Resume
