// TypeScript Types
export interface Credential {
  value: string
  label: string
}

export interface Exit {
  company: string
  buyer: string
  period: string
  details?: string
}

export interface Current {
  role: string
  company: string
  type: string
}

export interface ComparisonItem {
  title: string
  description: string
}

export interface Architecture {
  number: string
  title: string
  description: string
  details: string
}

export interface Stat {
  value: string
  label: string
}

export interface ProcessStep {
  step: string
  title: string
  duration: string
  description: string
}

export interface EngagementModel {
  title: string
  description: string
  pricing: string
  duration: string
  featured?: boolean
}

export interface ContactField {
  name: string
  label: string
  type: string
  placeholder: string
  required: boolean
}

export interface ContactBenefit {
  title: string
  description: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

// 1. HERO CONTENT
export const HERO_CONTENT = {
  eyebrow: "FOR PLATFORM FOUNDERS",
  headline: "Architecture for Exponential Growth",
  subheadline: "Serial entrepreneur with 3 exits helps platform founders architect deterministic paths from vision to exponential value.",
  credentials: [
    { value: "3", label: "Exits" },
    { value: "30+", label: "Years" },
    { value: "VC", label: "Partner" },
    { value: "AI", label: "Focus" }
  ] as Credential[],
  cta: {
    primary: "Book Strategic Consultation",
    secondary: "View 321 Model"
  }
}

// 2. CREDIBILITY CONTENT
export const CREDIBILITY_CONTENT = {
  headline: "An Operator-Advisor Who's Achieved the Exits You're Targeting",
  comparison: {
    generic: [
      {
        title: "Academic Consultants",
        description: "Theory without real-world experience building and exiting companies"
      },
      {
        title: "Single-Exit Advisors",
        description: "One-hit wonders who can't replicate systematic growth patterns"
      },
      {
        title: "Corporate Executives",
        description: "Big company experience that doesn't translate to platform startups"
      }
    ] as ComparisonItem[],
    torchlight: [
      {
        title: "Serial Entrepreneur",
        description: "Built, scaled, and successfully exited 3 platform companies over 23 years"
      },
      {
        title: "Repeatable Systems",
        description: "Developed and validated the 321 Growth Model across multiple industries"
      },
      {
        title: "Active Operator",
        description: "Currently building and advising platform companies at venture scale"
      }
    ] as ComparisonItem[]
  },
  exits: [
    {
      company: "Platys",
      buyer: "Adaptec",
      period: "2001-07",
      details: "Platform for storage virtualization - acquired by Adaptec for strategic integration"
    },
    {
      company: "Apere",
      buyer: "Citrix",
      period: "2007-12", 
      details: "Cloud platform technology - acquired by Citrix for product expansion"
    },
    {
      company: "Hooper Labs",
      buyer: "Kellton",
      period: "2012-24",
      details: "AI platform services - acquired by Kellton for digital transformation capabilities"
    }
  ] as Exit[],
  current: [
    {
      role: "Venture Partner",
      company: "Inflexor",
      type: "Investment & Strategy"
    },
    {
      role: "Growth Partner", 
      company: "VitraAI",
      type: "Platform Development"
    },
    {
      role: "Strategic Advisor",
      company: "Kellton",
      type: "Portfolio Advisory"
    }
  ] as Current[]
}

// 3. APPROACH CONTENT
export const APPROACH_CONTENT = {
  headline: "3 Architectures for Deterministic Growth",
  subheadline: "Every platform founder needs three interlocking frameworks to architect exponential value.",
  architectures: [
    {
      number: "01",
      title: "Growth Architecture",
      description: "Vision to Value Roadmap",
      details: "Transform your platform vision into a systematic, measurable path to exponential growth with clear milestones and value inflection points."
    },
    {
      number: "02", 
      title: "Market Architecture",
      description: "Positioning & GTM Strategy",
      details: "Engineer your market position and go-to-market strategy to achieve product-market fit faster and scale customer acquisition efficiently."
    },
    {
      number: "03",
      title: "Operational Architecture", 
      description: "Team, Process & Execution",
      details: "Build organizational systems and operational excellence that scales with your growth while maintaining quality and culture."
    }
  ] as Architecture[]
}

// 4. STATS CONTENT
export const STATS_CONTENT = {
  operator: [
    { value: "3", label: "Exits" },
    { value: "30+", label: "Years" },
    { value: "100+", label: "Products" }
  ] as Stat[],
  advisory: [
    { value: "20+", label: "Portfolio Cos" },
    { value: "2X", label: "Avg Growth" },
    { value: "15+", label: "Founders" }
  ] as Stat[]
}

// 5. PROCESS CONTENT
export const PROCESS_CONTENT = {
  headline: "From First Call to Exponential Growth",
  steps: [
    {
      step: "01",
      title: "15-Min Introduction",
      duration: "15 mins",
      description: "Quick intro call to understand your platform, growth stage, and current challenges. No pitch, just assessment."
    },
    {
      step: "02", 
      title: "Strategy Deep Dive",
      duration: "60 mins",
      description: "Comprehensive analysis of your growth architecture, market positioning, and operational systems with actionable recommendations."
    },
    {
      step: "03",
      title: "Custom Engagement", 
      duration: "Ongoing",
      description: "Tailored advisory engagement designed around your specific needs - from strategic deep dives to fractional leadership."
    }
  ] as ProcessStep[]
}

// 6. ENGAGEMENT CONTENT
export const ENGAGEMENT_CONTENT = {
  headline: "Work With Us Your Way",
  models: [
    {
      title: "Strategic Deep Dive",
      description: "Comprehensive analysis and strategic recommendations for your platform's next growth phase.",
      pricing: "Custom",
      duration: "3-4 hours",
      featured: false
    },
    {
      title: "Fractional Advisory",
      description: "Ongoing strategic guidance and operational support as your dedicated fractional advisor.",
      pricing: "Custom Retainer", 
      duration: "3-12 months",
      featured: true
    },
    {
      title: "Board Advisory",
      description: "Join your board as strategic advisor with equity participation for long-term growth partnership.",
      pricing: "Equity + Cash",
      duration: "12+ months", 
      featured: false
    }
  ] as EngagementModel[]
}

// 7. CONTACT CONTENT
export const CONTACT_CONTENT = {
  headline: "Let's Architect Your Growth",
  subheadline: "Book a 15-minute intro call. No pitch, no obligation.",
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Your full name",
      required: true
    },
    {
      name: "email",
      label: "Email Address", 
      type: "email",
      placeholder: "founder@yourcompany.com",
      required: true
    },
    {
      name: "company",
      label: "Company Name",
      type: "text", 
      placeholder: "Your platform company",
      required: true
    },
    {
      name: "stage",
      label: "Growth Stage",
      type: "select",
      placeholder: "Select your current stage",
      required: true
    },
    {
      name: "challenge",
      label: "Primary Challenge",
      type: "textarea",
      placeholder: "What's your biggest growth challenge right now?",
      required: true
    }
  ] as ContactField[],
  benefits: [
    {
      title: "Calendar Invite",
      description: "Immediate calendar link for easy scheduling"
    },
    {
      title: "15-Min Call",
      description: "Quick, focused conversation about your growth"
    },
    {
      title: "No Pitch",
      description: "Pure assessment and strategic insight"
    },
    {
      title: "Actionable Insight",
      description: "Walk away with at least one implementation idea"
    }
  ] as ContactBenefit[]
}

// 8. FOOTER CONTENT
export const FOOTER_CONTENT = {
  links: {
    company: [
      { label: "About", href: "#about" },
      { label: "321 Model", href: "#model" },
      { label: "Case Studies", href: "#cases" },
      { label: "Resources", href: "#resources" }
    ] as FooterLink[],
    services: [
      { label: "Strategic Deep Dive", href: "#deep-dive" },
      { label: "Fractional Advisory", href: "#advisory" },
      { label: "Board Advisory", href: "#board" }
    ] as FooterLink[]
  },
  social: [
    {
      platform: "LinkedIn", 
      href: "https://linkedin.com/in/torchlightconsulting",
      icon: "linkedin"
    },
    {
      platform: "Email",
      href: "mailto:hello@torchlightconsulting.com", 
      icon: "mail"
    }
  ] as SocialLink[],
  legal: "© 2024 Torchlight Consulting"
}

// COMPANY INFO (for metadata, contact info, etc.)
export const COMPANY_INFO = {
  name: 'Torchlight Consulting',
  tagline: 'Architecture for Exponential Growth',
  description: 'Serial entrepreneur with 3 exits helps platform founders architect deterministic paths to exponential value.',
  email: 'hello@torchlightconsulting.com',
  phone: '(555) 123-4567',
  address: 'San Francisco, CA',
  linkedin: 'https://linkedin.com/in/torchlightconsulting',
  calendly: 'https://calendly.com/torchlightconsulting/intro'
}

// NAVIGATION ITEMS
export const NAVIGATION_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Approach' }, 
  { href: '#process', label: 'Process' },
  { href: '#engagement', label: 'Engagement' },
  { href: '#contact', label: 'Contact' },
]