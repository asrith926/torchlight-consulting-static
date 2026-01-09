import { FOOTER_CONTENT, COMPANY_INFO } from '@/lib/constants'

export default function Footer() {
  const companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: '321 Model', href: '#model' },
    { label: 'Contact', href: '#contact' }
  ]

  const serviceLinks = [
    { label: 'Growth Architecture', href: '#growth-architecture' },
    { label: 'Market Architecture', href: '#market-architecture' },
    { label: 'Operational Architecture', href: '#operational-architecture' }
  ]

  return (
    <footer className="bg-slate text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-space text-2xl font-bold mb-4">
              Torchlight
            </h3>
            <p className="text-slate-400 text-sm">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              COMPANY
            </h4>
            <div className="space-y-2">
              {companyLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              SERVICES
            </h4>
            <div className="space-y-2">
              {serviceLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    aria-label={`Learn about ${link.label} service`}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              CONNECT
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  aria-label="Send email to Torchlight Consulting"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  aria-label="Connect on LinkedIn (opens in new window)"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 sm:pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              {FOOTER_CONTENT.legal}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}