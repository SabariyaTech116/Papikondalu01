'use client'

import { useEffect } from 'react'

export default function MobileOptimizer() {
  useEffect(() => {
    // Optimize for mobile performance
    const optimizeMobile = () => {
      // Add mobile-specific optimizations
      if (typeof window !== 'undefined') {
        // Prevent zoom on input focus
        const viewport = document.querySelector('meta[name=viewport]')
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
        }

        // Optimize touch events
        document.addEventListener('touchstart', () => {}, { passive: true })
        document.addEventListener('touchmove', () => {}, { passive: true })
        
        // Add mobile-friendly classes
        document.body.classList.add('mobile-optimized')
      }
    }

    optimizeMobile()
  }, [])

  return null
}