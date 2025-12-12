'use client'

import { motion } from 'framer-motion'
import { PROCESS_CONTENT } from '@/lib/constants'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "15-Min Introduction",
      duration: "15 mins",
      description: "Quick call to understand your platform, challenges, goals. No pitch, no pressure."
    },
    {
      number: "02",
      title: "Strategy Deep Dive",
      duration: "60 mins", 
      description: "Analyze platform architecture, market positioning, operational model. Walk away with actionable insights."
    },
    {
      number: "03",
      title: "Custom Engagement",
      duration: "Ongoing",
      description: "Build engagement model together—fractional advisory, project consulting, or board guidance."
    }
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center font-space text-3xl sm:text-4xl lg:text-5xl text-slate font-bold mb-12 sm:mb-16 lg:mb-20"
        >
          {PROCESS_CONTENT.headline}
        </motion.h2>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-8">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-blue/30 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Number Badge */}
              <div className="w-32 h-32 bg-blue rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                <span className="font-space text-5xl text-white font-bold">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space text-2xl text-slate font-bold mb-3">
                {step.title}
              </h3>

              {/* Duration Badge */}
              <div className="inline-block px-3 py-1 bg-amber text-white text-xs rounded-full mb-4">
                {step.duration}
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:-translate-y-1 transition-all duration-200 shadow-lg">
            Book 15-Min Introduction
          </button>
        </motion.div>
      </div>
    </section>
  )
}