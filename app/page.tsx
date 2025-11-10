import Hero from './components/Hero'
import FeaturedAttractions from './components/FeaturedAttractions'
import PackageShowcase from './components/PackageShowcase'
import SEOContent from './components/SEOContent'
import SEOBoostContent from './components/SEOBoostContent'
import PapikondaluSEO from './components/PapikondaluSEO'
import { LazyTestimonials, LazyNewsletter } from './components/LazyComponents'
import CriticalCSS from './components/CriticalCSS'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Papikondalu Tours | Best Boat Tours',
  description: 'Experience the best Papikondalu tours with India\'s #1 operator. Premium boat tours & authentic packages.',
  keywords: [
    'Papikondalu', 'Papikondalu tours', 'Papikondalu boat tours', 'Papikondalu hills', 'Papikondalu tourism',
    'best Papikondalu tours', 'Papikondalu packages', 'Papikondalu cruise', 'Papikondalu hills tourism',
    'Papikondalu river cruise', 'Papikondalu boat ride', 'Papikondalu Godavari', 'Papikondalu Andhra Pradesh',
    'Papikondalu Rajahmundry', 'Papikondalu booking', 'Papikondalu travel', 'Papikondalu adventure'
  ],
  openGraph: {
    title: 'Papikondalu Tours | Bhadradri Temple | East Godavari & Maredumalli Tourism Packages',
    description: 'Book top-rated Papikondalu tours and East Godavari river cruises with the No.1 operator. Explore Bhadradri temples, Maredumalli waterfalls, heritage sites, and adventure packages—trusted by 7 lakh customers for 20+ years.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Tours - Best East Godavari Tourism & Badrachalam Temple Tours'
    }]
  }
}

export default function Home() {
  const homePageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://bhadradripapikondalu.com/#webpage',
    'url': 'https://bhadradripapikondalu.com',
    'name': 'Best Papikondalu Tours | #1 Papikondalu Tourism Operator',
    'isPartOf': {
      '@id': 'https://bhadradripapikondalu.com/#website'
    },
    'about': {
      '@id': 'https://bhadradripapikondalu.com/#organization'
    },
    'description': 'Experience the best Papikondalu tours with India\'s #1 Papikondalu tourism operator. Premium Papikondalu boat tours, Papikondalu hills cruise, and authentic Papikondalu packages.',
    'breadcrumb': {
      '@id': 'https://bhadradripapikondalu.com/#breadcrumb'
    },
    'inLanguage': 'en-US',
    'potentialAction': [
      {
        '@type': 'ReadAction',
        'target': ['https://bhadradripapikondalu.com']
      }
    ]
  }

  return (
    <>
      <CriticalCSS />
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData) }}
      />
      <Hero />
      <PapikondaluSEO />
      <FeaturedAttractions />
      <SEOBoostContent />
      <SEOContent />
      <PackageShowcase />
      <LazyTestimonials />
      <LazyNewsletter />
    </>
  )
}