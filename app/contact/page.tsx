import type { Metadata } from 'next'
import Script from 'next/script'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Papikondalu Tours | Bhadradri, East Godavari & Maredumalli Tourism',
  description: 'Get in touch with the leading Papikondalu tour operator for Bhadradri temple visits, East Godavari river cruises, and Maredumalli adventures. 24/7 expert assistance, best pricing, and customized travel support.',
  keywords: 'contact Papikondalu Tourism, Rajahmundry tour operator, Bhadrachalam booking, Maredumalli tours contact, Rampachodavaram adventures, East Godavari tourism contact',
  alternates: {
    canonical: 'https://bhadradripapikondalu.com/contact'
  }
}

export default function Contact() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bhadradri Papikondalu Tours",
    "description": "Leading Papikondalu tour operator offering Bhadradri temple visits, East Godavari river cruises, and Maredumalli adventures with 24/7 expert assistance and personalized service.",
    "url": "https://www.bhadradripapikondalu.com/contact/",
    "telephone": "+91-9848323488",
    "email": "info@bhadradripapikondalu.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhadrachalam",
      "addressLocality": "Bhadradri Kothagudem",
      "addressRegion": "Telangana",
      "postalCode": "507111",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9848323488",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Telugu"],
      "hoursAvailable": "Mo-Su 06:00-22:00",
      "contactOption": "HearingImpairedSupported"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61579935625167",
      "https://twitter.com/BhadradriPapikon",
      "https://www.instagram.com/aswinigodavari_travel/",
      "https://www.youtube.com/@AswiniGodavari_travels"
    ]
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactClient />
    </>
  )
}