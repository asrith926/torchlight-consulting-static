'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { STATS_CONTENT } from '@/lib/constants'

// Custom CountUp Component
interface CountUpProps {
  value: string
  className?: string
  onComplete?: () => void
}

function CountUp({ value, className = '', onComplete }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 1200,
    bounce: 0,
  })

  useEffect(() => {
    if (isInView) {
      // Extract numeric value from string (e.g., "30+" → 30, "2X" → 2)
      const numericValue = parseFloat(value.replace(/[^\d.]/g, '')) || 0
      motionValue.set(numericValue)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const current = Math.round(latest)
        // Format the number back with original suffix
        if (value.includes('+')) {
          (ref.current as any).textContent = current + '+'
        } else if (value.includes('X')) {
          (ref.current as any).textContent = current + 'X'
        } else {
          (ref.current as any).textContent = current.toString()
        }
        
        // Trigger completion when animation reaches target
        const target = parseFloat(value.replace(/[^\d.]/g, '')) || 0
        if (current >= target && onComplete) {
          onComplete()
        }
      }
    })

    return unsubscribe
  }, [springValue, value, onComplete])

  return (
    <span ref={ref} className={className}>
      0
    </span>
  )
}

// Individual Stat Item Component
interface StatItemProps {
  stat: { value: string; label: string }
  detail: string
  theme: 'dark' | 'light'
  index: number
}

function StatItem({ stat, detail, theme, index }: StatItemProps) {
  const [showPulse, setShowPulse] = useState(false)

  const handleComplete = () => {
    setShowPulse(true)
    setTimeout(() => setShowPulse(false), 600)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        animate={showPulse ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`font-space text-stat font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-slate'
        }`}
      >
        <CountUp value={stat.value} onComplete={handleComplete} />
      </motion.div>
      <div className={`text-lg font-semibold mb-1 ${
        theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
      }`}>
        {stat.label}
      </div>
      <div className="text-slate-500 text-sm">
        {detail}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const operatorStats = [
    { stat: STATS_CONTENT.operator[0], detail: 'Platys, Apere, Hooper' },
    { stat: STATS_CONTENT.operator[1], detail: 'Intel, Cirrus, Zilog' },
    { stat: STATS_CONTENT.operator[2], detail: 'Concept to market' }
  ]

  const advisoryStats = [
    { stat: STATS_CONTENT.advisory[0], detail: 'Inflexor & VitraAI' },
    { stat: STATS_CONTENT.advisory[1], detail: 'YoY for advisees' },
    { stat: STATS_CONTENT.advisory[2], detail: 'Long-term partners' }
  ]

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section - Operator Track Record */}
      <div className="bg-slate py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-space text-2xl sm:text-3xl text-white font-bold mb-8 sm:mb-12"
        >
          Operator Track Record
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {operatorStats.map((item, index) => (
            <StatItem
              key={index}
              stat={item.stat}
              detail={item.detail}
              theme="dark"
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Advisory Impact */}
      <div className="bg-cream py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-space text-2xl sm:text-3xl text-slate font-bold mb-8 sm:mb-12"
        >
          Advisory Impact
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {advisoryStats.map((item, index) => (
            <StatItem
              key={index}
              stat={item.stat}
              detail={item.detail}
              theme="light"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}