/*
* Next.js 15 + React Server Components type checking has compatibility issues with
* @studio-freight/react-lenis types. Options:
* 1. Use 'any' type cast (current solution)
* 2. Wait for react-lenis type updates
* 3. Switch to different smooth scroll library
*/

"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"

interface LenisProviderProps {
 children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
 const lenisRef = useRef(null)

 useEffect(() => {
   function update(time: number) {
     if (lenisRef.current) {
       const lenis = (lenisRef.current as any).lenis
       if (lenis?.raf) {
         lenis.raf(time * 1000)
       }
     }
   }

   gsap.ticker.add(update)
   return () => gsap.ticker.remove(update)
 }, [])

 const LenisComponent = ReactLenis as any

 return (
   <div className="contents">
     <LenisComponent ref={lenisRef} root autoRaf={false}>
       {children}
     </LenisComponent>
   </div>
 )
}