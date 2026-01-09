# Torchlight Consulting

A modern, responsive website for Torchlight Consulting built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed and SEO
- **Interactive**: Engaging user interface with Framer Motion animations
- **Form Handling**: Contact form with validation and API integration
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
torchlight-consulting/
├── app/                    # Next.js 14 app directory
│   ├── api/contact/       # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Hero.tsx
│   ├── Credibility.tsx
│   ├── Approach.tsx
│   ├── Stats.tsx
│   ├── Process.tsx
│   ├── Engagement.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/                   # Utility functions and constants
│   ├── constants.ts
│   └── utils.ts
└── public/               # Static assets
    └── images/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Company Information
Update company details in `lib/constants.ts`:
- Company name, tagline, and description
- Contact information
- Statistics and process steps
- Service offerings

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes

### Content
- Hero section content in `components/Hero.tsx`
- Services and approach in `components/Approach.tsx`
- Company stats in `components/Stats.tsx`
- Process steps in `components/Process.tsx`

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Zero-configuration deployment
- **Netlify**: Static export or server-side rendering
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## Contact Form

The contact form is fully functional with:
- Client-side validation using Zod
- Form state management with React Hook Form
- API endpoint at `/api/contact`
- Error handling and success feedback

To integrate with email services, update the API route in `app/api/contact/route.ts`.

## License

This project is proprietary and confidential.