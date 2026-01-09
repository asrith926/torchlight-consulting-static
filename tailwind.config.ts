import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        slate: {
          DEFAULT: '#0F172A',
          600: '#475569',
          500: '#64748B',
          200: '#E2E8F0',
        },
        amber: {
          DEFAULT: '#F59E0B',
          600: '#D97706',
        },
        blue: {
          DEFAULT: '#3B82F6',
          600: '#2563EB',
        },
        cream: '#FAFAF9',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'space': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'stat': ['72px', { lineHeight: '1', fontWeight: '700' }],
      },
      maxWidth: {
        '7xl': '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config