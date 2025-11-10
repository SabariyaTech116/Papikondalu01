'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Clock, Users } from 'lucide-react'

export default function PapikondaluSEO() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Papikondalu Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Best <span className="text-blue-600">Papikondalu Tours</span> in Andhra Pradesh
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate <strong>Papikondalu tourism</strong> with India&apos;s #1 <strong>Papikondalu tour operator</strong>. 
            Our premium <strong>Papikondalu boat tours</strong> offer breathtaking views of the <strong>Papikondalu hills</strong> 
            along the scenic Godavari River. Book authentic <strong>Papikondalu packages</strong> for an unforgettable 
            <strong>Papikondalu experience</strong>.
          </p>
        </div>

        {/* Papikondalu Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Papikondalu Hills Tours</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Explore the magnificent <strong>Papikondalu hills</strong> with our expert guides. 
              Our <strong>Papikondalu tours</strong> include scenic boat rides through the 
              breathtaking <strong>Papikondalu landscape</strong>.
            </p>
            <Link href="/papikondalu-tours" className="text-blue-600 font-semibold hover:text-blue-700">
              Book Papikondalu Tours →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="text-green-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Papikondalu Day Tours</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Perfect <strong>Papikondalu day tours</strong> from Rajahmundry. Experience the best 
              <strong>Papikondalu boat tours</strong> with comfortable facilities and delicious meals 
              during your <strong>Papikondalu adventure</strong>.
            </p>
            <Link href="/packages" className="text-green-600 font-semibold hover:text-green-700">
              View Papikondalu Packages →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="text-purple-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Papikondalu Group Tours</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Organize memorable <strong>Papikondalu group tours</strong> for families and friends. 
              Our <strong>Papikondalu tourism</strong> packages cater to all group sizes with 
              customized <strong>Papikondalu experiences</strong>.
            </p>
            <Link href="/contact" className="text-purple-600 font-semibold hover:text-purple-700">
              Plan Papikondalu Trip →
            </Link>
          </div>
        </div>

        {/* Papikondalu Highlights */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Our <span className="text-yellow-300">Papikondalu Tours</span>?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="text-yellow-300 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Best Papikondalu Tourism Operator</h4>
                    <p className="text-blue-100">20+ years of experience in Papikondalu tours with 7+ lakh satisfied customers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="text-yellow-300 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Premium Papikondalu Boat Tours</h4>
                    <p className="text-blue-100">Comfortable boats with safety equipment for the best Papikondalu experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="text-yellow-300 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Authentic Papikondalu Packages</h4>
                    <p className="text-blue-100">Customized Papikondalu tour packages for all budgets and preferences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_600,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg"
                alt="Best Papikondalu Tours - Premium Papikondalu Tourism Experience"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Papikondalu Booking CTA */}
        <div className="text-center bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-blue-600">Papikondalu Adventure</span> Today!
          </h3>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Don&apos;t miss the opportunity to experience the best <strong>Papikondalu tours</strong> in Andhra Pradesh. 
            Our <strong>Papikondalu tourism</strong> experts are ready to create your perfect <strong>Papikondalu package</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/packages" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Papikondalu Packages
            </Link>
            <Link 
              href="tel:+919848323488" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Call for Papikondalu Booking
            </Link>
          </div>
        </div>

        {/* Papikondalu Keywords Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Complete <span className="text-blue-600">Papikondalu Tourism</span> Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Popular Papikondalu Tours</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Papikondalu day tours</strong> from Rajahmundry</li>
                <li>• <strong>Papikondalu overnight tours</strong> with camping</li>
                <li>• <strong>Papikondalu family tours</strong> with kids activities</li>
                <li>• <strong>Papikondalu honeymoon packages</strong> for couples</li>
                <li>• <strong>Papikondalu group tours</strong> for corporate events</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Papikondalu Tour Features</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium <strong>Papikondalu boat tours</strong> with safety</li>
                <li>• Expert <strong>Papikondalu tourism</strong> guides</li>
                <li>• Authentic <strong>Papikondalu experiences</strong></li>
                <li>• Best <strong>Papikondalu packages</strong> rates</li>
                <li>• 24/7 <strong>Papikondalu booking</strong> support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}