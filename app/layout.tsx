import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Torchlight Consulting | Architecture for Exponential Growth',
  description: 'Serial entrepreneur with 3 exits helps platform founders architect deterministic paths to exponential value.',
  keywords: 'consulting, strategy, platform growth, serial entrepreneur, exponential value, business architecture',
  authors: [{ name: 'Torchlight Consulting' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Torchlight Consulting | Architecture for Exponential Growth',
    description: 'Serial entrepreneur with 3 exits helps platform founders architect deterministic paths to exponential value.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torchlight Consulting | Architecture for Exponential Growth',
    description: 'Serial entrepreneur with 3 exits helps platform founders architect deterministic paths to exponential value.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans text-slate bg-cream antialiased">
        {children}
      </body>
    </html>
  )
}