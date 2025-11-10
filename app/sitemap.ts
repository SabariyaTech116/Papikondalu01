import { MetadataRoute } from 'next'
import { attractionSlugs, packageSlugs } from './utils/slugs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhadradripapikondalu.com'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/aboutus`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/attractions`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/packages`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/gallery`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
  ]

  // All attraction pages
  const attractionPages = Object.values(attractionSlugs).map(slug => ({
    url: `${baseUrl}/attractions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // All package pages
  const packagePages = Object.values(packageSlugs).map(slug => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Blog pages (placeholder for future blog posts)
  const blogPages: any[] = []

  // SEO landing pages - Papikondalu focused
  const seoLandingPages = [
    { url: `${baseUrl}/papikondalu-tours`, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/badrachalam-temple-tours`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/east-godavari-tourism`, priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  const allPages = [
    ...mainPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...seoLandingPages.map(page => ({
      url: page.url,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...attractionPages,
    ...packagePages,
    ...blogPages,
  ]

  return allPages
}