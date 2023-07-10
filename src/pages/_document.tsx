import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document: any = () => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/logomark.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
