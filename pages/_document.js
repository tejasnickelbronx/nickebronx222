import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
export default function Document() {
  
  useEffect( () => {
    // const lenis = new Lenis()   

    
  }, [])
  return (
    <Html lang="en">
      <Head>
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head >
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
