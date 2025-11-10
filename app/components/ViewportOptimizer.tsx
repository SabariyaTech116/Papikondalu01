'use client'

import { useEffect } from 'react'

export default function ViewportOptimizer() {
  useEffect(() => {
    // Fix viewport for mobile
    const setViewport = () => {
      let viewport = document.querySelector('meta[name=viewport]')
      
      if (!viewport) {
        viewport = document.createElement('meta')
        viewport.setAttribute('name', 'viewport')
        document.head.appendChild(viewport)
      }
      
      // Mobile-friendly viewport
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover')
      
      // Add theme-color for mobile browsers
      let themeColor = document.querySelector('meta[name=theme-color]')
      if (!themeColor) {
        themeColor = document.createElement('meta')
        themeColor.setAttribute('name', 'theme-color')
        themeColor.setAttribute('content', '#0f172a')
        document.head.appendChild(themeColor)
      }
      
      // Add apple-mobile-web-app meta tags
      const appleMetas = [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Papikondalu Tourism' }
      ]
      
      appleMetas.forEach(meta => {
        let element = document.querySelector(`meta[name="${meta.name}"]`)
        if (!element) {
          element = document.createElement('meta')
          element.setAttribute('name', meta.name)
          element.setAttribute('content', meta.content)
          document.head.appendChild(element)
        }
      })
    }

    setViewport()
  }, [])

  return null
}