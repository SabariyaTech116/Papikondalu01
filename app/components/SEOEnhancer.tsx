'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SEOEnhancer() {
  const pathname = usePathname()

  useEffect(() => {
    const enhanceSEO = () => {
      const baseUrl = 'https://bhadradripapikondalu.com'
      const currentUrl = `${baseUrl}${pathname}`

      // Add self-referencing hreflang
      let hreflangSelf = document.querySelector('link[hreflang="x-default"]')
      if (!hreflangSelf) {
        hreflangSelf = document.createElement('link')
        hreflangSelf.setAttribute('rel', 'alternate')
        hreflangSelf.setAttribute('hreflang', 'x-default')
        hreflangSelf.setAttribute('href', currentUrl)
        document.head.appendChild(hreflangSelf)
      }

      // Add English hreflang
      let hreflangEn = document.querySelector('link[hreflang="en"]')
      if (!hreflangEn) {
        hreflangEn = document.createElement('link')
        hreflangEn.setAttribute('rel', 'alternate')
        hreflangEn.setAttribute('hreflang', 'en')
        hreflangEn.setAttribute('href', currentUrl)
        document.head.appendChild(hreflangEn)
      }

      // Ensure canonical URL is correct
      let canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', currentUrl)
      } else {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        canonical.setAttribute('href', currentUrl)
        document.head.appendChild(canonical)
      }

      // Add Twitter/X social media link
      const twitterStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Papikondalu Tourism',
        'sameAs': [
          'https://twitter.com/papikondalutourism',
          'https://www.facebook.com/papikondalutourism',
          'https://www.instagram.com/papikondalutourism'
        ]
      }

      let twitterScript = document.querySelector('#twitter-structured-data') as HTMLScriptElement
      if (!twitterScript) {
        twitterScript = document.createElement('script')
        twitterScript.id = 'twitter-structured-data'
        twitterScript.type = 'application/ld+json'
        twitterScript.textContent = JSON.stringify(twitterStructuredData)
        document.head.appendChild(twitterScript)
      }

      // Add page-specific structured data
      const pageStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': currentUrl,
        'name': document.title,
        'description': document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        'inLanguage': 'en-US',
        'isPartOf': {
          '@type': 'WebSite',
          'url': baseUrl,
          'name': 'Papikondalu Tourism'
        }
      }

      let pageScript = document.querySelector('#page-structured-data') as HTMLScriptElement
      if (!pageScript) {
        pageScript = document.createElement('script')
        pageScript.id = 'page-structured-data'
        pageScript.type = 'application/ld+json'
        pageScript.textContent = JSON.stringify(pageStructuredData)
        document.head.appendChild(pageScript)
      }
    }

    enhanceSEO()
  }, [pathname])

  return null
}