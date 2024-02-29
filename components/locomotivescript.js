
import Script from 'next/script'
 
export default function addlocomotivescript() {
  return (
    <>
      
      <Script src="./locomativeinit.js" strategy="beforeInteractive" />
      
    </>

  )
}