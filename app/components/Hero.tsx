'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Calendar, Award, MapPin, Play } from 'lucide-react'
import { useState, useEffect, memo } from 'react'

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const stats = [
    { icon: Calendar, label: '20+ Years', sublabel: 'Experience' },
    { icon: Users, label: '7+ Lakh', sublabel: 'Happy Customers' },
    { icon: Star, label: '4.9/5', sublabel: 'Rating' },
    { icon: Award, label: 'Premium', sublabel: 'Service' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dnz1dmnmb/image/upload/c_fill,w_1920,h_1080,q_auto,f_webp/v1755401093/papihills1_hmfpkr.jpg"
          alt="Papikondalu Hills - Scenic Godavari River Boat Tours"
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary-400/40 rounded-full"
        />
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto container-padding">
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20"
              >
                <MapPin size={16} className="mr-2 text-secondary-400" />
                <span className="text-sm font-medium">Godavari River, Andhra Pradesh</span>
              </motion.div>

              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Best <span className="text-yellow-400">Papikondalu Tours</span> | #1 Papikondalu Tourism Operator
                <span className="block">
                  <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                    Premium Papikondalu Hills Experience
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Book top-rated <span className="font-bold text-secondary-400">Papikondalu</span> tours and <span className="font-bold text-blue-400">East Godavari</span> river cruises with the No.1 operator. Explore <span className="font-bold text-yellow-400">Bhadradri</span> temples, <span className="font-bold text-green-400">Maredumalli</span> waterfalls, heritage sites, and adventure packages—trusted by 7 lakh customers for 20+ years. Reserve your ultimate tour today!
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    <Icon className="mx-auto mb-2 text-secondary-400" size={24} />
                    <div className="text-lg font-bold text-white">{stat.label}</div>
                    <div className="text-sm text-white/70">{stat.sublabel}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/packages" className="btn-primary group text-lg px-8 py-4">
                Explore Packages
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="btn-outline group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-neutral-900 text-lg px-8 py-4"
              >
                <Play className="mr-2 transition-transform group-hover:scale-110" size={20} />
                Watch Video
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80"
            >
              <div className="text-sm">✓ Certified by Tourism Board</div>
              <div className="text-sm">✓ 24/7 Customer Support</div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="space-y-8 opacity-0">
            {/* Static content for SSR */}
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
                <MapPin size={16} className="mr-2 text-secondary-400" />
                <span className="text-sm font-medium">Godavari River, Andhra Pradesh</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Best Papikondalu Tours | #1 Papikondalu Tourism
                <span className="block">
                  <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                    Premium Papikondalu Hills Experience
                  </span>
                </span>
              </h1>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>


    </section>
  )
}

export default memo(Hero)