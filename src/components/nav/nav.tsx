import React, { useState, useEffect } from 'react'
import Mode from '../mode'
import Hamburger from './mobilenav'
import NavigationButtons from './NavBtn'

const Navigation: React.FC = () => {
  const [widthContracted, setWidthContracted] = useState(true)
  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      const deltaY = e.deltaY
      const isScrollingDown = deltaY > 0
      const threshold = 50
      if (Math.abs(deltaY) > threshold) {
        setWidthContracted(isScrollingDown)
      }
    }

    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className={'fixed left-0 right-0 top-0 z-50 flex'}>
      <div className='color-white flex min-h-[6em] w-full items-center justify-center'>
        <div
          className={`flex   grid-cols-2 gap-4 bg-bgcolor items-center  rounded-xl justify-between  backdrop-blur-sm border-2 border-slate-900 duration-300  px-6 transition-all  ${
            widthContracted ? ' sm:w-[30rem] w-[10rem]  ' : 'w-[90%] sm:w-[60%]  '
          }`}
        >
          <div
            onClick={() => (window.location.href = '/')}
            className={'flex cursor-pointer  transition-all items-center py-2 text-[1rem] sm:text-[1.5rem] font-bold  duration-300 ease-in-out '}
          >
            Mark<span className='text-primary'>ED?</span>
          </div>
          <div className='sm:block hidden'
          >
           <NavigationButtons onButtonClick={() => { setWidthContracted(true) }} />
          </div>
          <div className='flex sm:hidden'>
            <div onClick={() => { setWidthContracted(false) }}>
            <Hamburger onButtonClick={() => { setWidthContracted(true) }} />
            </div>

          </div>
          <div className={'duration-300 sm:flex hidden items-center transition-all ease-in-out'}>

            <Mode />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
