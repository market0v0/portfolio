// MyComponent.tsx
import React from 'react'
import { useMyContext } from './context/context'

const Mode: React.FC = () => {
  const { data, mode } = useMyContext()

  return (
    <div>
      <div
        className={'transition duration-150 ease-out hover:ease-in hover:drop-shadow-lg'}
        onClick={() => {
          mode(!data)
        }}
      >
        <img
          src={!data ? '/dark.svg' : '/light.svg'}
          alt='project'
          width='30'
          height='30'
          className='hover:brightness-200' // Optional: Add rounded corners for better appearance
        />
      </div>
    </div>
  )
}

export default Mode
