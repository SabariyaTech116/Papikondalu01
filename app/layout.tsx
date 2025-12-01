import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import { LazyMultiAgentWidget } from './components/LazyComponents'
import WebVitals from './components/WebVitals'
import ImagePreloader from './components/ImagePreloader'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import MobileOptimizer from './components/MobileOptimizer'
import CriticalPerformance from './components/CriticalPerformance'
import ViewportOptimizer from './components/ViewportOptimizer'
import SEOEnhancer from './components/SEOEnhancer'
import ContentOptimizer from './components/ContentOptimizer'
import SEOMetadata from './components/SEOMetadata'
import TitleOptimizer from './components/TitleOptimizer'
import SEOAudit from './components/SEOAudit'
import WordCountOptimizer from './components/WordCountOptimizer'
import HeadingOptimizer from './components/HeadingOptimizer'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bhadradripapikondalu.com'),
  title: {
    default: 'Papikondalu Tours | Best Tourism Operator',
    template: '%s | Papikondalu Tourism'
  },
  icons: {
    icon: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
    shortcut: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
    apple: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
  },
  description: 'Book top-rated Papikondalu tours with India\'s #1 operator. Explore Bhadradri temples & adventure packages.',
  keywords: [
    'Papikondalu', 'Papikondalu tours', 'Papikondalu boat tours', 'Papikondalu hills', 'Papikondalu tourism',
    'best Papikondalu tours', 'Papikondalu packages', 'Papikondalu cruise', 'Papikondalu hills tourism', 'Papikondalu operator',
    'Papikondalu river cruise', 'Papikondalu boat ride', 'Papikondalu Godavari', 'Papikondalu Andhra Pradesh', 'Papikondalu booking',
    'Papikondalu Rajahmundry', 'Papikondalu travel', 'Papikondalu adventure', 'Papikondalu experience', 'Papikondalu destination',
    'Papikondalu scenic', 'Papikondalu nature', 'Papikondalu family tours', 'Papikondalu honeymoon', 'Papikondalu weekend',
    'Papikondalu day tour', 'Papikondalu overnight', 'Papikondalu premium', 'Papikondalu luxury', 'Papikondalu budget'
  ],
  authors: [{ name: 'Papikondalu Tourism', url: 'https://bhadradripapikondalu.com' }],
  creator: 'Papikondalu Tourism',
  publisher: 'Papikondalu Tourism',
  applicationName: 'Papikondalu Tourism',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhadradripapikondalu.com',
    siteName: 'Papikondalu Tourism - Best River Cruise Experience',
    title: 'Papikondalu Tours | Bhadradri Temple Tours',
    description: 'Book top-rated Papikondalu tours with India\'s #1 operator. Explore Bhadradri temples & adventure packages.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg',
      width: 1200,
      height: 630,
      alt: 'Papikondalu Hills Boat Tours - Best River Cruise Experience in Andhra Pradesh',
      type: 'image/jpeg'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@papikondalutourism',
    creator: '@papikondalutourism',
    title: 'Papikondalu Tours | Bhadradri Temple Tours',
    description: 'Book top-rated Papikondalu tours with India\'s #1 operator. Explore Bhadradri temples & adventure packages.',
    images: ['https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_1200,h_630,q_auto,f_auto/v1755401093/papihills1_hmfpkr.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VTniYMmiV4j622S8nRf2la5x52w-Oj0SqPvSzaiR0zA',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://bhadradripapikondalu.com/feed.xml'
    }
  },
  category: 'tourism',
  classification: 'Tourism & Travel',
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Rajahmundry, Andhra Pradesh',
    'geo.position': '17.0005;81.8040',
    'ICBM': '17.0005, 81.8040',
    'DC.title': 'Papikondalu Tourism - Best Boat Tours in Andhra Pradesh',
    'DC.creator': 'Papikondalu Tourism',
    'DC.subject': 'River Tourism, Boat Tours, Temple Tours, Adventure Packages',
    'DC.description': 'Premium boat tours and river cruise experiences in Papikondalu Hills',
    'DC.publisher': 'Papikondalu Tourism',
    'DC.contributor': 'Papikondalu Tourism Team',
    'DC.date': '2024-01-01T00:00:00.000Z',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://bhadradripapikondalu.com',
    'DC.language': 'en',
    'DC.coverage': 'Andhra Pradesh, India',
    'DC.rights': '© 2024 Papikondalu Tourism. All rights reserved.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': 'https://bhadradripapikondalu.com/#organization',
        'name': 'Papikondalu Tourism',
        'alternateName': 'Best Papikondalu Tours Operator',
        'description': 'India\'s #1 Papikondalu tourism company with 20+ years of experience in Papikondalu tours serving 7+ lakh customers',
        'url': 'https://bhadradripapikondalu.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png',
          'width': 512,
          'height': 512
        },
        'image': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
        'telephone': '+91-9848323488',
        'email': 'info@papikondalutourism.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rajahmundry',
          'addressLocality': 'Rajahmundry',
          'addressRegion': 'Andhra Pradesh',
          'postalCode': '533101',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.0005,
          'longitude': 81.8040
        },
        'foundingDate': '2004',
        'areaServed': {
          '@type': 'State',
          'name': 'Andhra Pradesh'
        },
        'serviceType': ['Papikondalu Tours', 'Papikondalu Boat Tours', 'Papikondalu Tourism', 'Papikondalu Packages'],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '2500',
          'bestRating': '5',
          'worstRating': '1'
        },
        'priceRange': '₹₹',
        'currenciesAccepted': 'INR',
        'paymentAccepted': 'Cash, Card, UPI',
        'openingHours': 'Mo-Su 06:00-20:00',
        'sameAs': [
          'https://www.facebook.com/papikondalutourism',
          'https://www.instagram.com/papikondalutourism',
          'https://www.youtube.com/papikondalutourism',
          'https://twitter.com/papikondalutourism'
        ]
      },
      {
        '@type': 'TouristAttraction',
        '@id': 'https://bhadradripapikondalu.com/#attraction',
        'name': 'Papikondalu Hills Tourism',
        'description': 'Best Papikondalu tours destination offering premium Papikondalu boat tours and authentic Papikondalu experiences along the scenic Godavari River',
        'url': 'https://bhadradripapikondalu.com/attractions/papikondalu-hills',
        'image': {
          '@type': 'ImageObject',
          'url': 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755401093/papihills1_hmfpkr.jpg',
          'width': 1200,
          'height': 800
        },
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Papikondalu',
          'addressRegion': 'Andhra Pradesh',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.0005,
          'longitude': 81.8040
        },
        'touristType': ['Family', 'Adventure', 'Nature Lovers', 'Pilgrims'],
        'availableLanguage': ['English', 'Telugu', 'Hindi']
      },
      {
        '@type': 'WebSite',
        '@id': 'https://bhadradripapikondalu.com/#website',
        'url': 'https://bhadradripapikondalu.com',
        'name': 'Best Papikondalu Tours | Papikondalu Tourism',
        'description': 'India\'s #1 Papikondalu tourism website offering the best Papikondalu tours, Papikondalu boat tours, and premium Papikondalu packages',
        'publisher': {
          '@id': 'https://bhadradripapikondalu.com/#organization'
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://bhadradripapikondalu.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        'inLanguage': 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bhadradripapikondalu.com/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://bhadradripapikondalu.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Packages',
            'item': 'https://bhadradripapikondalu.com/packages'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Attractions',
            'item': 'https://bhadradripapikondalu.com/attractions'
          }
        ]
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://djmcbqzqt.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://djmcbqzqt.cloudinary.com" />



        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SEOMetadata />
        <TitleOptimizer />
        <SEOAudit />
        <HeadingOptimizer />
        <SEOEnhancer />
        <ViewportOptimizer />
        <CriticalPerformance />
        <MobileOptimizer />
        <WebVitals />
        <ImagePreloader />
        <PerformanceOptimizer />
        <Header />
        <FloatingActionButton />
        <main className="relative" role="main">{children}</main>
        <ContentOptimizer />
        <WordCountOptimizer />
        <Footer />
        <LazyMultiAgentWidget />
        <SpeedInsights />
      </body>
    </html>
  )
}