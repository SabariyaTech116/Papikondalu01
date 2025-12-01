import { MetadataRoute } from 'next'
import { attractionSlugs, packageSlugs } from './utils/slugs'
import { attractionsData } from './attractions/attractionsData'
import { packagesData } from './packages/packagesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhadradripapikondalu.com'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/aboutus`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/attractions`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/packages`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/gallery`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // All attraction pages with images
  const attractionPages = attractionsData.map(attraction => {
    const slug = attractionSlugs[attraction.id as keyof typeof attractionSlugs]
    return {
      url: `${baseUrl}/attractions/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      images: [attraction.image, ...(attraction.gallery || [])].slice(0, 5), // Limit to 5 images per page
    }
  })

  // All package pages with images
  const packagePages = packagesData.map(pkg => {
    const slug = packageSlugs[pkg.id as keyof typeof packageSlugs]
    return {
      url: `${baseUrl}/packages/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      images: [pkg.image, ...(pkg.gallery || [])].slice(0, 5),
    }
  })

  // Blog pages
  const blogPages = [
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/blog/papikondalu-bhadradri-magical-beauty`, priority: 0.7, changeFrequency: 'weekly' as const },
  ]

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