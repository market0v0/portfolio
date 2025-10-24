import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { MyContextProvider } from '@/components/context/context'

const App: any = ({ Component, pageProps }: AppProps) => {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  )
}

export default App
