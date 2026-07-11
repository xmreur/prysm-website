import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Features } from '@/components/site/features'
import { HowItWorks } from '@/components/site/how-it-works'
import { Technology } from '@/components/site/technology'
import { DownloadSection } from '@/components/site/download'
import { Support } from '@/components/site/support'
import { Footer } from '@/components/site/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Technology />
        <DownloadSection />
        <Support />
      </main>
      <Footer />
    </div>
  )
}
