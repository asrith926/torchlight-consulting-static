'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { CREDIBILITY_CONTENT } from '@/lib/constants'

export default function Credibility() {
  const genericItems = [
    {
      title: "Generic Theory",
      description: "Consultant advice without operator experience"
    },
    {
      title: "Limited Network", 
      description: "No active VC relationships or deal flow"
    },
    {
      title: "One-Size-Fits-All",
      description: "Same playbook for every stage"
    }
  ]

  const torchlightItems = [
    {
      title: "Operator Credibility",
      description: "3 exits, 30+ years building platforms"
    },
    {
      title: "VC-Adjacent Position",
      description: "Active partner at Inflexor & VitraAI"
    },
    {
      title: "Platform-Native",
      description: "Exclusively AI, infrastructure, systems"
    }
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center font-space text-3xl sm:text-4xl lg:text-5xl text-slate font-bold mb-12 sm:mb-16 lg:mb-20"
        >
          {CREDIBILITY_CONTENT.headline}
        </motion.h2>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Left: Generic Consultants */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-slate-500 text-2xl font-semibold mb-6">
              Generic Consultants
            </h3>
            <div className="space-y-4">
              {genericItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mt-1">
                    <X className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-600 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Torchlight (FEATURED) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-2 border-blue rounded-2xl p-8 bg-blue/5"
          >
            <h3 className="text-slate text-2xl font-semibold mb-6">
              Torchlight Consulting
            </h3>
            <div className="space-y-4">
              {torchlightItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Exit Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CREDIBILITY_CONTENT.exits.map((exit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate text-white rounded-xl px-6 py-4 text-center"
            >
              <div className="text-amber text-sm font-semibold">
                {exit.period}
              </div>
              <div className="font-space text-xl font-bold">
                {exit.company}
              </div>
              <div className="text-slate-300 text-sm">
                → {exit.buyer}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Roles */}
        <div className="flex flex-wrap justify-center gap-3">
          {CREDIBILITY_CONTENT.current.map((role, index) => (
            <div
              key={index}
              className="bg-blue/10 text-blue rounded-full px-4 py-2 text-sm font-medium"
            >
              {role.role}, {role.company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}