import Hero from '@/components/Hero'
import Credibility from '@/components/Credibility'
import Approach from '@/components/Approach'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Engagement from '@/components/Engagement'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Credibility />
      <Approach />
      <Stats />
      <Process />
      <Engagement />
      <Contact />
      <Footer />
    </main>
  )
}