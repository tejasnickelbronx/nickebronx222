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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-FVTWGLT');`,
          }}
        />
         <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ld3c0259be");`,
          }}
        /> 
      </Head >
      <body>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-xxxx"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
