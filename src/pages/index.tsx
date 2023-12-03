import { MyContextProvider } from '@/components/context/context'
import Frame from '@/components/newPages/frame'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='font-sans-typewriter text-secondary h-screen w-full'>
      {/*       <Mainframe/> */}
      <MyContextProvider>
      <Frame/>
      </MyContextProvider>

      {/*  */}
    </div>
  )
}

export default Home
