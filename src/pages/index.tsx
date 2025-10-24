import { MyContextProvider } from '@/components/context/context'
import Frame from '@/components/newPages/frame'
import Chatbot from '@/components/newPages/chatbot'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='font-poppine text-secondary h-screen w-full'>
      {/*       <Mainframe/> */}
      <MyContextProvider>
      <Frame/>
      <Chatbot/>
      </MyContextProvider>

      {/*  */}
    </div>
  )
}

export default Home
