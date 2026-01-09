'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Briefcase, Users, Cpu } from 'lucide-react'
import Image from 'next/image'
import { HERO_CONTENT } from '@/lib/constants'

export default function Hero() {
  const credentials = [
    { icon: TrendingUp, value: '3', label: 'Exits', detail: 'Successful platform exits' },
    { icon: Briefcase, value: '30+', label: 'Years', detail: 'Building platforms' },
    { icon: Users, value: 'VC', label: 'Partner', detail: 'Active venture partner' },
    { icon: Cpu, value: 'AI', label: 'Focus', detail: 'Next-gen platforms' }
  ]

  return (
    <section className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-24 w-full">
          {/* Left Column - Content (60% = 3/5) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="mb-6"
            >
              <span className="text-blue text-sm font-semibold uppercase tracking-wide">
                {HERO_CONTENT.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate font-bold leading-none mb-6"
            >
              {HERO_CONTENT.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-12 max-w-2xl"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* Credentials Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.05) }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center">
                    <credential.icon className="w-5 h-5 text-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate font-space">
                      {credential.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      {credential.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {credential.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <button className="bg-amber text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-600 hover:-translate-y-0.5 transition-all duration-200 shadow-lg min-h-[48px]">
                {HERO_CONTENT.cta.primary}
              </button>
              <button className="border-2 border-blue text-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue hover:text-white transition-all duration-200 min-h-[48px]">
                {HERO_CONTENT.cta.secondary}
              </button>
            </motion.div>
          </div>

          {/* Right Column - Portrait (40% = 2/5) */}
          <div className="lg:col-span-2 flex items-center justify-center order-first lg:order-last mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-blue/20 rounded-full blur-3xl transform scale-110"></div>
              
              {/* Portrait Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="https://placehold.co/1200x1200/0F172A/F59E0B?text=ST&font=space-grotesk"
                  alt="Srikanth - Torchlight Consulting Founder"
                  width={1200}
                  height={1200}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue/20 rounded-full"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-blue rounded-full opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}