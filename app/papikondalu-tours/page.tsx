import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Clock, Users, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Papikondalu Tours | Best Papikondalu Tourism | #1 Papikondalu Operator',
  description: 'Experience the best Papikondalu tours with India\'s #1 Papikondalu tourism operator. Premium Papikondalu boat tours, Papikondalu hills cruise, and authentic Papikondalu packages. Book your Papikondalu adventure today!',
  keywords: [
    'Papikondalu', 'Papikondalu tours', 'Papikondalu boat tours', 'Papikondalu tourism', 'best Papikondalu tours',
    'Papikondalu hills', 'Papikondalu packages', 'Papikondalu cruise', 'Papikondalu operator', 'Papikondalu booking',
    'Papikondalu Rajahmundry', 'Papikondalu Godavari', 'Papikondalu Andhra Pradesh', 'Papikondalu experience'
  ]
}

export default function PapikondaluToursPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755980788/PAPI-KONDALU_wswdud.jpg"
          alt="Best Papikondalu Tours - Scenic Godavari River Cruise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Best <span className="text-yellow-400">Papikondalu Tours</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience premium <strong>Papikondalu boat tours</strong> with scenic <strong>Godavari river cruise</strong>. 
            Book the best <strong>Papikondalu tour packages</strong> from Rajahmundry & Badrachalam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Book Papikondalu Tours
            </Link>
            <Link href="tel:+919848323488" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Call: +91 9848323488
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-blue-600">Papikondalu Tours</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Discover the crown jewel of <strong>East Godavari tourism</strong> with our premium <strong>Papikondalu tours</strong>. 
              Experience breathtaking <strong>Godavari river cruise</strong>, scenic hill views, temple visits, and cultural heritage 
              with India&apos;s most trusted tour operator serving 7+ lakh customers.
            </p>
          </div>

          {/* Tour Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rajahmundry to Papikondalu</h3>
              <div className="flex items-center mb-3">
                <Clock className="text-blue-600 mr-2" size={20} />
                <span className="text-gray-700">Day Tour (8-10 hours)</span>
              </div>
              <div className="flex items-center mb-3">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="text-gray-700">Up to 100 people</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700">4.9/5 Rating (312 reviews)</span>
              </div>
              <p className="text-gray-700 mb-4">
                Perfect <strong>Papikondalu day tour</strong> from Rajahmundry with scenic boat ride, 
                hill sightseeing, lunch, and return journey.
              </p>
              <Link href="/packages/rajahmundry-to-papikondalu" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Badrachalam to Papikondalu</h3>
              <div className="flex items-center mb-3">
                <Clock className="text-green-600 mr-2" size={20} />
                <span className="text-gray-700">Overnight Tour (2 days)</span>
              </div>
              <div className="flex items-center mb-3">
                <Users className="text-green-600 mr-2" size={20} />
                <span className="text-gray-700">Up to 50 people</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700">4.8/5 Rating (245 reviews)</span>
              </div>
              <p className="text-gray-700 mb-4">
                Spiritual <strong>Papikondalu tour</strong> starting from sacred Badrachalam temple 
                with overnight stay and cultural experiences.
              </p>
              <Link href="/packages/bhadrachalam-to-papikondalu" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Book Now
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Papikondalu Special Package</h3>
              <div className="flex items-center mb-3">
                <Clock className="text-purple-600 mr-2" size={20} />
                <span className="text-gray-700">Multi-day Tour (3-4 days)</span>
              </div>
              <div className="flex items-center mb-3">
                <Users className="text-purple-600 mr-2" size={20} />
                <span className="text-gray-700">Up to 75 people</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span className="text-gray-700">4.9/5 Rating (189 reviews)</span>
              </div>
              <p className="text-gray-700 mb-4">
                Complete <strong>East Godavari tourism</strong> package covering Papikondalu, 
                temples, waterfalls, and cultural sites.
              </p>
              <Link href="/packages" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              India&apos;s #1 <span className="text-yellow-300">Papikondalu Tour Operator</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-yellow-300">20+</div>
                <div className="text-lg">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">7+ Lakh</div>
                <div className="text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">4.9/5</div>
                <div className="text-lg">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-lg">Customer Support</div>
              </div>
            </div>
            <p className="text-xl mb-6">
              Book the best <strong>Papikondalu tours</strong> with India&apos;s most trusted tour operator. 
              Experience premium <strong>Godavari river cruise</strong> with safety, comfort, and unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Book Papikondalu Tours
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}