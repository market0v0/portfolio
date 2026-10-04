import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document: any = () => {
  return (
    <Html lang='en' className='dark'>
      <Head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.ico' sizes='48x48' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#7E31F1' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
