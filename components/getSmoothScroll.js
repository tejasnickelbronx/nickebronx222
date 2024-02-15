"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({options, children}) { 
    const lenis = useLenis()
    
  return (
    <ReactLenis root options>
      {children}
    </ReactLenis>
  )
}