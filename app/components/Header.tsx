'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', ariaLabel: 'Papikondalu Tourism Home Page' },
    { href: '/aboutus', label: 'About', ariaLabel: 'About Papikondalu Tourism Company Story' },
    { href: '/blog', label: 'Blog', ariaLabel: 'Travel Guides and Tourism Blog' },
    { href: '/attractions', label: 'Attractions', ariaLabel: 'Tourist Attractions and Places in Papikondalu' },
    { href: '/packages', label: 'Packages', ariaLabel: 'Best Boat Tour Packages and Pricing' },
    { href: '/gallery', label: 'Gallery', ariaLabel: 'Photo Gallery of Boat Tours and Attractions' },
    { href: '/contact', label: 'Contact', ariaLabel: 'Contact Papikondalu Tourism for Bookings' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span>+91 9848323488</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>aswinigodavari@gmail.com</span>
              </div>
            </div>
            <div className="text-xs">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                20+ Years of Excellence | 7+ Lakh Happy Customers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium'
          : 'bg-white shadow-soft'
        }`}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dnz1dmnmb/image/upload/v1755418849/AG_LOGO_2_xfznol.png"
                  alt="Papikondalu Tourism"
                  width={60}
                  height={60}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold gradient-text">
                  Papikondalu Tourism
                </span>
                <div className="text-xs text-neutral-500 font-medium">
                  Experience Excellence
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="relative px-4 py-2 text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/contact" className="btn-primary text-sm px-4 py-2">
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <nav className="py-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="block py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="pt-4 border-t border-neutral-200"
                  >
                    <Link
                      href="/contact"
                      className="btn-primary w-full justify-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}

export default Header