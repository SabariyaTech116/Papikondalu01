'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, MapPin, Star, ArrowRight, Calendar, Heart } from 'lucide-react'
import { getPackageSlug } from '../utils/slugs'

const packages = [
  {
    id: 1,
    name: 'Bhadrachalam to Papikondalu',
    capacity: '50 People',
    departure: 'Bhadrachalam',
    rating: 4.8,
    reviews: 245,
    image: 'https://res.cloudinary.com/djmcbqzqt/image/upload/c_scale,w_400,q_auto,f_auto/v1755980906/BhadrachalamTemple-1068x421_heh1o2.png',
    highlights: ['Temple Visit', 'Scenic Boat Ride', 'Local Cuisine', 'Professional Guide'],
    badge: 'Most Popular',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    description: 'Experience the spiritual journey from sacred temple to scenic hills'
  },
  {
    id: 2,
    name: 'Rajahmundry to Papikondalu',
    capacity: '100 People',
    departure: 'Rajahmundry',
    rating: 4.9,
    reviews: 189,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1756003757/rajamundry_v2aufm.jpg',
    highlights: ['Day Tour', 'Photography', 'Refreshments', 'Return Journey'],
    badge: 'Best Value',
    badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    description: 'Perfect day trip to experience the beauty of Papikondalu hills'
  },
  {
    id: 3,
    name: 'Sirivaka Night Stay',
    capacity: '30 People',
    departure: 'Bhadrachalam',
    rating: 4.7,
    reviews: 156,
    image: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/c_scale,w_400,q_auto,f_auto/v1756003855/sirivaka_fdzsuf.avif',
    highlights: ['Night Stay', 'Campfire', 'Nature Walk', 'Stargazing'],
    badge: 'Premium',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    description: 'Adventure package with overnight camping in nature'
  }
]

const PackageShowcase = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar size={16} className="mr-2" />
            Tour Packages
          </div>
          <h2 className="heading-lg mb-6">
            Popular <span className="gradient-text">Tour Packages</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Choose from our best boat tours Papikondalu packages. Experience premium Godavari river cruise adventures
            designed to give you the most unforgettable best boat tours Papikondalu experience with expert guides
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-elevated overflow-hidden group hover-glow relative"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`${pkg.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Heart Icon */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors group/heart" aria-label={`Add ${pkg.name} to favorites`} suppressHydrationWarning>
                <Heart className="w-4 h-4 text-neutral-600 group-hover/heart:text-red-500 transition-colors" />
              </button>

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-secondary-500 fill-current mr-1" />
                  <span className="text-sm font-semibold text-neutral-800">{pkg.rating}</span>
                  <span className="text-xs text-neutral-600 ml-1">({pkg.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="heading-sm mb-4 group-hover:text-primary-600 transition-colors">
                  {pkg.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-neutral-600">
                    <Users size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm font-medium">{pkg.capacity}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin size={16} className="mr-2 text-primary-500" />
                    <span className="text-sm font-medium">{pkg.departure}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 px-3 py-2 rounded-lg text-xs font-medium border border-primary-100 text-center"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3">
                    <p className="text-primary-600 font-semibold text-sm">Contact for Best Pricing</p>
                    <p className="text-xs text-gray-600 mt-1">Customizable packages available</p>
                  </div>
                </div>

                <Link
                  href={`/packages/${getPackageSlug(pkg.id)}`}
                  className="w-full btn-primary text-center group/btn"
                >
                  View Details
                  <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/packages" className="btn-outline group text-lg px-8 py-4">
            View All 9 Packages
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Link>
          <p className="text-muted mt-4">Customizable packages available • Group discounts • 24/7 support</p>
        </motion.div>
      </div>
    </section>
  )
}

export default PackageShowcase