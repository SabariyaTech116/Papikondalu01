'use client'

import { useEffect } from 'react'

export default function CriticalPerformance() {
  useEffect(() => {
    // Defer non-critical JavaScript
    const deferNonCritical = () => {
      // Remove unused CSS
      const unusedStyles = document.querySelectorAll('style[data-emotion]')
      unusedStyles.forEach(style => {
        if (!style.textContent?.includes('critical')) {
          style.remove()
        }
      })

      // Optimize images
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy')
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async')
        }
      })
    }

    // Run after initial render
    setTimeout(deferNonCritical, 100)

    // Preload critical resources
    const preloadCritical = () => {
      const criticalImages = [
        'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    preloadCritical()
  }, [])

  return null
}