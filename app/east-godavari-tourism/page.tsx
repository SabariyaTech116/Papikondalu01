import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'East Godavari Tourism | Best Tourist Places',
  description: 'Discover the best tourist places in East Godavari. Explore Papikondalu, Badrachalam & Maredumilli tours.',
  keywords: [
    'East Godavari tourism', 'best tourist places in East Godavari', 'East Godavari tour packages', 'East Godavari attractions',
    'Godavari district tourism', 'Andhra Pradesh tourism', 'East Godavari sightseeing', 'tourist destinations East Godavari'
  ]
}

export default function EastGodavariTourismPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg"
          alt="East Godavari Tourism - Best Tourist Places"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete <span className="text-green-400">East Godavari Tourism</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover the <strong>best tourist places in East Godavari</strong> with our comprehensive tourism guide. 
            Explore temples, hills, rivers, and cultural heritage with premium <strong>East Godavari tour packages</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              Explore East Godavari
            </Link>
            <Link href="tel:+919848323488" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Call: +91 9848323488
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Best Tourist Places</span> in East Godavari
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Experience complete <strong>East Godavari tourism</strong> covering scenic hills, sacred temples, pristine waterfalls, 
              and cultural heritage sites. Our comprehensive <strong>East Godavari tour packages</strong> offer the perfect blend 
              of adventure, spirituality, and natural beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755980788/PAPI-KONDALU_wswdud.jpg"
                alt="Papikondalu - Crown Jewel of East Godavari Tourism"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Papikondalu Hills</h3>
                <p className="text-gray-700 mb-4">
                  Crown jewel of <strong>East Godavari tourism</strong> with scenic boat rides and breathtaking hill views.
                </p>
                <Link href="/papikondalu-tours" className="text-green-600 font-semibold hover:text-green-700">
                  Explore Papikondalu →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755980907/Bhadrachalam_Temple_yg8met.jpg"
                alt="Badrachalam Temple - Sacred Temple in East Godavari"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Badrachalam Temple</h3>
                <p className="text-gray-700 mb-4">
                  Sacred Lord Rama temple, one of the most revered <strong>tourist places in East Godavari</strong>.
                </p>
                <Link href="/badrachalam-temple-tours" className="text-orange-600 font-semibold hover:text-orange-700">
                  Visit Temple →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755978648/maredumilli_lqndyb.webp"
                alt="Maredumilli - Forest Tourism in East Godavari"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maredumilli Forests</h3>
                <p className="text-gray-700 mb-4">
                  Pristine forest area with waterfalls, perfect for eco-tourism and adventure activities.
                </p>
                <Link href="/maredumilli-tours" className="text-emerald-600 font-semibold hover:text-emerald-700">
                  Explore Forests →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg"
                alt="Rajahmundry - Cultural Hub of East Godavari"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajahmundry City</h3>
                <p className="text-gray-700 mb-4">
                  Cultural hub and gateway to <strong>East Godavari tourism</strong> with river cruises and heritage sites.
                </p>
                <Link href="/rajahmundry-tours" className="text-blue-600 font-semibold hover:text-blue-700">
                  Discover City →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755979312/dev_parnasala_pfvan7.jpg"
                alt="Parnasala - Mythological Site in East Godavari"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Parnasala</h3>
                <p className="text-gray-700 mb-4">
                  Mythological site where Lord Rama stayed during exile, rich in cultural heritage.
                </p>
                <Link href="/attractions/parnasala" className="text-purple-600 font-semibold hover:text-purple-700">
                  Visit Site →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,h_250,q_auto,f_auto/v1755979074/sirivaka-bamboo-huts-papikondalu_sgrm4p.jpg"
                alt="Sirivaka - Adventure Tourism in East Godavari"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sirivaka Camping</h3>
                <p className="text-gray-700 mb-4">
                  Unique overnight camping experience in nature, perfect for adventure tourism.
                </p>
                <Link href="/attractions/sirivaka-night-stay" className="text-indigo-600 font-semibold hover:text-indigo-700">
                  Book Camping →
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete <span className="text-green-600">East Godavari Tour Packages</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekend Getaway Package</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Papikondalu boat tours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Badrachalam temple darshan</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Rajahmundry city tour</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cultural experiences</span>
                  </div>
                </div>
                <Link href="/packages" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Book Weekend Package
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Adventure Tourism Package</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Maredumilli forest trekking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Waterfall exploration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Sirivaka camping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Adventure activities</span>
                  </div>
                </div>
                <Link href="/packages" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Adventure Package
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Explore Complete <span className="text-yellow-300">East Godavari Tourism</span>
            </h2>
            <p className="text-xl mb-6">
              Discover all the <strong>best tourist places in East Godavari</strong> with our comprehensive tour packages. 
              Experience temples, hills, rivers, forests, and cultural heritage in one amazing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                View All Packages
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Plan Custom Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}