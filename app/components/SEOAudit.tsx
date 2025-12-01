'use client'

import { useEffect } from 'react'

export default function SEOAudit() {
  useEffect(() => {
    const runSEOAudit = () => {
      // Fix missing alt attributes
      const images = document.querySelectorAll('img:not([alt])')
      images.forEach((img, index) => {
        const src = img.getAttribute('src') || ''
        if (src.includes('papikondalu') || src.includes('bhadrachalam')) {
          img.setAttribute('alt', `Papikondalu Tourism - Beautiful destination ${index + 1}`)
        } else {
          img.setAttribute('alt', `Papikondalu Tourism image ${index + 1}`)
        }
      })

      // Add missing heading structure
      const sections = document.querySelectorAll('section:not(:has(h1, h2, h3, h4, h5, h6))')
      sections.forEach((section, index) => {
        const heading = document.createElement('h2')
        heading.className = 'sr-only'
        heading.textContent = `Section ${index + 1}`
        section.insertBefore(heading, section.firstChild)
      })

      // Add missing meta descriptions for dynamic content
      if (!document.querySelector('meta[name="description"]')) {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = 'Papikondalu Tourism - Best boat tours and river cruises in Andhra Pradesh'
        document.head.appendChild(meta)
      }

      // Add missing viewport meta if not present
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta')
        viewport.name = 'viewport'
        viewport.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewport)
      }

      // Add language attribute to html element
      const html = document.documentElement
      if (!html.getAttribute('lang')) {
        html.setAttribute('lang', 'en')
      }

      // Add skip navigation link for accessibility
      if (!document.querySelector('.skip-nav')) {
        const skipNav = document.createElement('a')
        skipNav.href = '#main-content'
        skipNav.className = 'skip-nav sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
        skipNav.textContent = 'Skip to main content'
        document.body.insertBefore(skipNav, document.body.firstChild)
      }

      // Add main content id if not present
      const main = document.querySelector('main')
      if (main && !main.getAttribute('id')) {
        main.setAttribute('id', 'main-content')
      }

      // Optimize images for better loading
      const lazyImages = document.querySelectorAll('img[loading="lazy"]')
      lazyImages.forEach(img => {
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async')
        }
      })

      // Add proper ARIA labels where missing
      const buttons = document.querySelectorAll('button:not([aria-label]):not(:has(span, div))')
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Action button ${index + 1}`)
        }
      })

      // Add proper roles where needed
      const navs = document.querySelectorAll('nav:not([role])')
      navs.forEach(nav => {
        nav.setAttribute('role', 'navigation')
      })

      // Ensure all links have proper attributes
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="https://bhadradripapikondalu.com"])')
      externalLinks.forEach(link => {
        if (!link.getAttribute('rel')) {
          link.setAttribute('rel', 'noopener noreferrer')
        }
        if (!link.getAttribute('target')) {
          link.setAttribute('target', '_blank')
        }
      })
    }

    // Run audit after DOM is fully loaded
    setTimeout(runSEOAudit, 1000)

    // Re-run on route changes
    const observer = new MutationObserver(() => {
      setTimeout(runSEOAudit, 500)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])

  return null
}