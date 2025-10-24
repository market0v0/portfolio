import React, { useState, useEffect, useRef } from 'react'
import NavigationButtons from './NavBtn'
import { useMyContext } from '../context/context'

interface NavigationProps {
  onButtonClick: () => void
}
const CustomDropdown: React.FC<NavigationProps> = ({ onButtonClick }) => {
  const { data: darkMode, mode } = useMyContext()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = (event: MouseEvent): void => {
    if ((dropdownRef.current != null) && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      onButtonClick()
    }
  }

  const handleButtonClick = (): any => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener('click', closeDropdown)
    return () => {
      document.removeEventListener('click', closeDropdown)
    }
  }, [])

  return (
    <div className='relative' ref={dropdownRef} >
      <div className='cursor-pointer' onClick={() => {
        toggleDropdown()
        onButtonClick()
      }}>
        <svg className='h-6 w-6 text-light-text dark:text-dark-text' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>
      {isOpen && (
        <div className='absolute right-0 top-full mt-2 w-48 rounded-xl border border-light-border bg-light-card/95 p-3 shadow-xl backdrop-blur-2xl dark:border-glass-border dark:bg-dark-card/95'>
          <div className='flex flex-col gap-2'>
            <NavigationButtons onButtonClick={handleButtonClick} />

            {/* Dark/Light Mode Toggle for Mobile */}
            <div className='mt-2 border-t border-light-border pt-2 dark:border-glass-border'>
              <button
                onClick={() => mode(!darkMode)}
                className='flex w-full items-center justify-center gap-2 rounded-lg bg-light-card px-4 py-2 text-sm font-medium text-light-text transition-all hover:bg-primary/10 hover:text-primary dark:bg-dark-card dark:text-dark-text'
              >
                {darkMode ? (
                  <>
                    <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
