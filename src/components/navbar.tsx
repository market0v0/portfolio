import React, { useState, useEffect } from 'react'

const NavBar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0)
      setPrevScrollPos(currentScrollPos)
    }

    handleScroll() // Call the function on initial render to handle the initial scroll position
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
          <div className='flex items-center gap-6 justify-self-end py-2 text-[0.73rem] font-[300] hover:text-[#D28738] lg:gap-10 lg:text-[0.93rem]'>
            <button className='cursor-pointer border-2 hover:border-[#D28738]'>
              <p className='cursor-pointer p-2 px-1 lg:px-10' onClick={scrollDownToBottom}>
                GET IN TOUCH
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
