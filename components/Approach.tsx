'use client'

import { motion } from 'framer-motion'
import { Target, Layers, Users } from 'lucide-react'
import { APPROACH_CONTENT } from '@/lib/constants'

export default function Approach() {
  const cards = [
    {
      number: "01",
      icon: Target,
      title: "Growth Architecture",
      tagline: "Vision to Value Roadmap",
      description: "Build clear path from current state to exponential outcome with systematic milestones and value inflection points."
    },
    {
      number: "02", 
      icon: Layers,
      title: "Market Architecture",
      tagline: "Positioning & GTM Strategy",
      description: "Architect market entry and expansion strategy that achieves product-market fit faster and scales efficiently."
    },
    {
      number: "03",
      icon: Users,
      title: "Operational Architecture", 
      tagline: "Team, Process & Execution",
      description: "Design operations that scale without breaking - from team structure to execution systems that maintain quality."
    }
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-24 bg-slate relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-blue text-sm font-semibold uppercase tracking-wide mb-4">
            THE 321 MODEL
          </div>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 sm:mb-6">
            {APPROACH_CONTENT.headline}
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            {APPROACH_CONTENT.subheadline}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-sm border-2 border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-blue hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Number */}
              <div className="absolute top-4 right-4 font-space text-8xl text-white/20 font-bold leading-none">
                {card.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 relative z-10">
                <card.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-space text-2xl text-white font-bold mb-2">
                {card.title}
              </h3>

              {/* Tagline */}
              <div className="text-amber text-sm font-semibold mb-4">
                {card.tagline}
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                {card.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-amber text-slate px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber/90 hover:-translate-y-1 transition-all duration-200 shadow-lg">
            Learn the 321 Model
          </button>
        </motion.div>
      </div>
    </section>
  )
}