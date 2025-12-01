import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image/', '/images/', '/css/', '/js/'],
        disallow: ['/api/contact', '/admin/', '/private/', '/_next/server/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/static/', '/_next/image/', '/images/', '/css/', '/js/'],
        disallow: ['/api/contact', '/admin/', '/private/', '/_next/server/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/_next/static/', '/_next/image/', '/images/', '/css/', '/js/'],
        disallow: ['/api/contact', '/admin/', '/private/', '/_next/server/'],
      }
    ],
    sitemap: [
      'https://bhadradripapikondalu.com/sitemap.xml'
    ],
    host: 'https://bhadradripapikondalu.com',
  }
}