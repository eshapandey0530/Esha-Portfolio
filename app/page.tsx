"use client"
import { useState, useCallback } from "react"
import Preloader from "@/components/ui/preloader"
import HeroSection from "@/components/HeroSection"
import Header from "@/components/Header"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import CareerTimeline from "@/components/CareerTimeline"
import ExperienceSection from "@/components/ExperienceSection"
import ProductSection from "@/components/ProductSection"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  const handleComplete = useCallback(() => {
    setShowPreloader(false)
    window.scrollTo({ top: 0, behavior: "instant" })
    window.history.replaceState(null, "", "/#home")
  }, [])

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CareerTimeline />
        <ExperienceSection />
        <ProductSection />
      </main>
    </>
  )
}
