'use client'

import { motion } from 'framer-motion'
import { Compass, Users, Award, Check } from 'lucide-react'
import { ENGAGEMENT_CONTENT } from '@/lib/constants'

export default function Engagement() {
  const engagementOptions = [
    {
      icon: Compass,
      title: "Strategic Deep Dive",
      bestFor: "One-time clarity",
      price: "Custom",
      timeline: "3-4 hours",
      included: [
        "Pre-session audit",
        "3-hour workshop", 
        "Custom roadmap",
        "90-day priorities"
      ],
      cta: "Learn More",
      featured: false
    },
    {
      icon: Users,
      title: "Fractional Advisory",
      bestFor: "Ongoing guidance", 
      price: "Custom Retainer",
      timeline: "3-12 months",
      included: [
        "Bi-weekly sessions",
        "Slack/email access",
        "Quarterly workshops",
        "Investor deck refinement",
        "Network introductions"
      ],
      cta: "Get Started",
      featured: true
    },
    {
      icon: Award,
      title: "Board Advisory",
      bestFor: "Strategic governance",
      price: "Equity + Cash", 
      timeline: "12+ months",
      included: [
        "Quarterly board meetings",
        "Strategic planning",
        "Fundraising support",
        "M&A advisory",
        "Executive hiring"
      ],
      cta: "Inquire",
      featured: false
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
          {ENGAGEMENT_CONTENT.headline}
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {engagementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative border-2 rounded-2xl p-6 sm:p-8 lg:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
                option.featured 
                  ? 'border-blue-600 bg-blue/5' 
                  : 'border-slate-200'
              }`}
            >
              {/* Featured Badge */}
              {option.featured && (
                <div className="absolute top-4 right-4 bg-amber text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
                <option.icon className="w-6 h-6 text-blue" />
              </div>

              {/* Title */}
              <h3 className="font-space text-2xl text-slate font-bold mb-2">
                {option.title}
              </h3>

              {/* Best For */}
              <div className="text-slate-500 text-sm italic mb-6">
                Best for: {option.bestFor}
              </div>

              {/* Price */}
              <div className="font-space text-3xl text-slate font-bold my-6">
                {option.price}
              </div>

              {/* Timeline */}
              <div className="text-slate-500 text-sm mb-6">
                {option.timeline}
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200 my-6" />

              {/* Included Items */}
              <div className="space-y-3 mb-8">
                {option.included.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  option.featured
                    ? 'bg-amber text-white hover:bg-amber-600 hover:-translate-y-0.5 shadow-md'
                    : 'border-2 border-blue text-blue hover:bg-blue hover:text-white'
                }`}
              >
                {option.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-slate-600 leading-relaxed">
            Not sure which engagement model fits your needs? Book a 15-minute intro call 
            and we'll design the perfect advisory structure for your platform's current stage and goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}