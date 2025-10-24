import React, { useState, useEffect } from 'react'
import { useMyContext } from '../context/context'
import Hamburger from './mobilenav'
import NavigationButtons from './NavBtn'

const Navigation: React.FC = () => {
  const { data: darkMode, mode } = useMyContext()
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
    <div className='fixed left-0 right-0 top-0 z-50 flex justify-center'>
      <div className='flex min-h-[6em] w-full items-center justify-center px-4'>
        <nav
          className={`flex items-center justify-between rounded-2xl border border-gray-200 dark:border-glass-border  dark:bg-glass-gradient px-6 py-4 backdrop-blur-2xl shadow-glass-lg transition-all duration-300 ${
            widthContracted ? 'w-[16rem] sm:w-[35rem]' : 'w-[90%] sm:w-[60%]'
          }`}
        >
          {/* Logo */}
          <div
            onClick={() => (window.location.href = '/')}
            className='cursor-pointer text-[1rem] font-bold text-gray-900 transition-all hover:text-primary dark:text-dark-text sm:text-[1.2rem]'
          >
            Mark<span className='text-primary'>ED</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-8 sm:flex'>
            <NavigationButtons onButtonClick={() => { setWidthContracted(true) }} />
          </div>

          {/* Mobile Menu */}
          <div className='flex items-center gap-3 sm:hidden'>
            <div onClick={() => { setWidthContracted(false) }}>
              <Hamburger onButtonClick={() => { setWidthContracted(true) }} />
            </div>
          </div>

          {/* Actions */}
          <div className='hidden items-center gap-4 sm:flex'>
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => { mode(!darkMode) }}
              className='flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 dark:border-glass-border bg-gray-100 dark:bg-glass-bg text-gray-900 dark:text-dark-text backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-primary/10'
              aria-label='Toggle theme'
            >
              {darkMode ? (
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
              ) : (
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
