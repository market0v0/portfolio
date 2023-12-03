import React from 'react'
const PageButtons: React.FC = () => {
  return (
    <div
      className={
        'grid cursor-pointer gap-8 text-[1rem]  text-secondary sm:flex sm:gap-2  sm:text-[.6rem] '
      }
    >
      <span
        className={
          ' flex items-center justify-center rounded-md px-2 transition-all'
        }
        onClick={() => (window.location.href = '/')}
      >
        Home
      </span>
      <span
        className={
          'flex items-center justify-center rounded-md bg-primary px-2 transition-all'
        }
      >
        Resume
      </span>
    </div>
  )
}

export default PageButtons
