'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Users, Calendar, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Laxman Rao',
    location: 'Hyderabad',
    rating: 5,
    text: 'Amazing experience! The boat ride through Papikondalu was breathtaking. The team was professional and the arrangements were perfect. Highly recommend for families!',
    date: 'December 2023',
    avatar: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756177667/laxaman_rao_cshydd.jpg'
  },
  {
    id: 2,
    name: 'Daniel',
    location: 'Bangalore',
    rating: 5,
    text: 'Best tourism service in the region. 20+ years of experience really shows in their attention to detail and customer care. Worth every penny!',
    date: 'November 2023',
    avatar: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756177679/daniel_psd7do.jpg'
  },
  {
    id: 3,
    name: 'Janu',
    location: 'Vijayawada',
    rating: 5,
    text: 'Visited with family and everyone loved it. The temple tour combined with scenic beauty made it a perfect spiritual journey. Unforgettable memories!',
    date: 'October 2023',
    avatar: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756177697/janu_t64fm3.jpg'
  }
]

const stats = [
  {
    icon: Calendar,
    number: '20+',
    label: 'Years Experience',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    number: '7+ Lakh',
    label: 'Happy Customers',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Award,
    number: '4.9/5',
    label: 'Rating',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: TrendingUp,
    number: 'Premium',
    label: 'Service',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  }
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} className="mr-2" />
            Customer Reviews
          </div>
          <h2 className="heading-lg mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Join thousands of satisfied customers who have experienced the best boat tours Papikondalu adventures
            with our award-winning Godavari river cruise services and premium tour packages
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-elevated p-8 relative hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full">
                  <Quote className="text-white" size={20} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-secondary-500 fill-current mr-1" />
                ))}
                <span className="ml-2 text-sm font-semibold text-neutral-600">5.0</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center pt-6 border-t border-neutral-100">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-xs text-neutral-500">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-xl text-gray-600">Excellence that speaks through numbers</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials