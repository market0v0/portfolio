import React, { useState, useEffect } from 'react'
import OutlineButton from '../outlineButton'

const NavBar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0)
      setPrevScrollPos(currentScrollPos)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const scrollDownToBottom = (): void => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' })
  }
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        visible ? 'opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ overflowY: 'auto', maxHeight: '100vh' }} // Set overflow-y and max-height inline
    >
      <div className='color-white flex h-[5rem] w-full items-center justify-center'>
        <div className='grid w-[90%] grid-cols-2 md:w-[77%]'>
          <div onClick={() => (window.location.href = '/')} className='cursor-pointer'>
            <img src='/logomark.svg' alt='project' width='100' height='100%' />
          </div>
          <div className='flex items-center gap-6 justify-self-end py-2 text-[0.73rem] font-[300] lg:gap-10 lg:text-[0.93rem]' onClick={scrollDownToBottom}>
            <div className='cursor-pointer hover:border-0 border-2 border-white' >
            <OutlineButton buttontext={'GET IN TOUCH'}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
