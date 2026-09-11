import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AssamCinematicSection } from "@/components/assam-cinematic-section"
import { XowadBrandSection } from "@/components/xowad-brand-section"
import { TapuRevealSection } from "@/components/tapu-reveal-section"
import { OriginSection } from "@/components/origin-section"
import { BlendSection } from "@/components/blend-section"
import { SensorySection } from "@/components/sensory-section"
import { MomentsSection } from "@/components/moments-section"
import { EmotionalSection } from "@/components/emotional-section"
import { WhyTapuSection } from "@/components/why-tapu-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { FinalXowadSection } from "@/components/final-xowad-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      <HeroSection />
      <AssamCinematicSection />
      <XowadBrandSection />
      <TapuRevealSection />
      <OriginSection />
      <BlendSection />
      <SensorySection />
      <MomentsSection />
      <EmotionalSection />
      <WhyTapuSection />
      <FinalCtaSection />
      <FinalXowadSection />
      <Footer />
    </main>
  )
}
