import Hero from '@/components/Hero'
import AIFeatures from '@/components/AIFeatures'
import Superpowers from '@/components/Superpowers'
import Information from '@/components/Information'
import Meetings from '@/components/Meetings'
import Integrations from '@/components/Integrations'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Blog from '@/components/Blog'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <AIFeatures />
      <Superpowers />
      <Information />
      <Meetings />
      <Integrations />
      <Testimonials />
      {/* <Blog /> */}
      <CTA />
    </main>
  )
}

