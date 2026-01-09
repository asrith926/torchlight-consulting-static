'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CalendarCheck, Video, Compass, TrendingUp, Loader2, CheckCircle2 } from 'lucide-react'
import { CONTACT_CONTENT } from '@/lib/constants'
import { useState } from 'react'

// Zod Schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email format'),
  company: z.string()
    .min(2, 'Company name must be at least 2 characters'),
  stage: z.string()
    .min(1, 'Please select your current stage'),
  challenge: z.string()
    .min(1, 'Please select your primary challenge')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const stageOptions = [
    { value: '', label: 'Select your current stage' },
    { value: 'pre-seed', label: 'Pre-seed' },
    { value: 'seed', label: 'Seed' },
    { value: 'series-a', label: 'Series A' },
    { value: 'series-b+', label: 'Series B+' },
    { value: 'bootstrapped', label: 'Bootstrapped' }
  ]

  const challengeOptions = [
    { value: '', label: 'Select your primary challenge' },
    { value: 'strategic-clarity', label: 'Strategic clarity' },
    { value: 'product-market-fit', label: 'Product-market fit' },
    { value: 'go-to-market', label: 'Go-to-market' },
    { value: 'fundraising', label: 'Fundraising' },
    { value: 'scaling-ops', label: 'Scaling ops' }
  ]

  const benefits = [
    {
      icon: CalendarCheck,
      text: 'Calendar invite within 24 hours'
    },
    {
      icon: Video,
      text: '15-min video call'
    },
    {
      icon: Compass,
      text: 'No pitch—genuine assessment'
    },
    {
      icon: TrendingUp,
      text: 'Walk away with actionable insight'
    }
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        
        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Form (60%) */}
          <div className="lg:col-span-3">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="font-space text-3xl sm:text-4xl text-slate font-bold mb-4">
                {CONTACT_CONTENT.headline}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {CONTACT_CONTENT.subheadline}
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Full Name */}
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-14 px-4 border-2 border-slate-200 rounded-lg focus:border-blue focus:outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="founder@yourcompany.com"
                  className="w-full h-14 px-4 border-2 border-slate-200 rounded-lg focus:border-blue focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <input
                  {...register('company')}
                  type="text"
                  placeholder="Company Name"
                  className="w-full h-14 px-4 border-2 border-slate-200 rounded-lg focus:border-blue focus:outline-none transition-colors"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              {/* Stage */}
              <div>
                <select
                  {...register('stage')}
                  className="w-full h-14 px-4 border-2 border-slate-200 rounded-lg focus:border-blue focus:outline-none transition-colors appearance-none bg-white"
                >
                  {stageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.stage && (
                  <p className="text-red-500 text-sm mt-1">{errors.stage.message}</p>
                )}
              </div>

              {/* Challenge */}
              <div>
                <select
                  {...register('challenge')}
                  className="w-full h-14 px-4 border-2 border-slate-200 rounded-lg focus:border-blue focus:outline-none transition-colors appearance-none bg-white"
                >
                  {challengeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.challenge && (
                  <p className="text-red-500 text-sm mt-1">{errors.challenge.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full h-14 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSuccess
                    ? 'bg-green-500 text-white'
                    : isSubmitting
                    ? 'bg-amber/70 text-white cursor-not-allowed'
                    : 'bg-amber text-white hover:bg-amber-600 hover:-translate-y-0.5 shadow-md'
                }`}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Booking Confirmed
                  </>
                ) : isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Book 15-Min Introduction'
                )}
              </button>
            </motion.form>
          </div>

          {/* Right Column - Benefits (40%) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-space text-2xl text-slate font-bold mb-8">
                What to Expect
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-blue" />
                    </div>
                    <p className="text-slate-600 leading-relaxed pt-2">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}