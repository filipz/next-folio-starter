'use client'

import { useEffect } from 'react'

export function ViewportCalc() {
  useEffect(() => {
    const updateViewportSize = () => {
      document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`)
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }

    updateViewportSize()
    window.addEventListener('resize', updateViewportSize)
    window.addEventListener('orientationchange', updateViewportSize)

    return () => {
      window.removeEventListener('resize', updateViewportSize)
      window.removeEventListener('orientationchange', updateViewportSize)
    }
  }, [])

  return null
}