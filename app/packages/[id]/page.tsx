import Script from 'next/script'
import { packagesData } from '../packagesData'
import PackageDetailClient from './PackageDetailClient'
import { notFound } from 'next/navigation'
import { getPackageSlug, getPackageIdFromSlug } from '../../utils/slugs'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    id: getPackageSlug(pkg.id),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const packageId = getPackageIdFromSlug(id)
  const packageData = packagesData.find(p => p.id === packageId)

  if (!packageData) {
    return {
      title: 'Package Not Found | Papikondalu Tourism',
      description: 'The requested package could not be found.'
    }
  }

  return {
    title: packageData.title || `${packageData.name} | Papikondalu Tourism`,
    description: packageData.metaDescription || packageData.shortDescription,
    keywords: `${packageData.name}, Papikondalu tours, ${packageData.departure}, ${packageData.features?.join(', ')}, East Godavari`,
    openGraph: {
      title: packageData.title || packageData.name,
      description: packageData.shortDescription,
      images: [packageData.image],
      type: 'website'
    }
  }
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const packageId = getPackageIdFromSlug(id)

  if (!packageId) {
    notFound()
  }

  const packageData = packagesData.find(p => p.id === packageId)

  if (!packageData) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': packageData.title || packageData.name,
    'description': packageData.description,
    'image': packageData.image,
    'url': `https://bhadradripapikondalu.com/packages/${id}`,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': packageData.rating,
      'reviewCount': packageData.reviews
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'price': '2500', // Estimated starting price
      'availability': 'https://schema.org/InStock',
      'url': `https://bhadradripapikondalu.com/packages/${id}`
    }
  }

  return (
    <>
      <Script
        id={`package-schema-${packageData.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackageDetailClient packageData={packageData} />
    </>
  )
}