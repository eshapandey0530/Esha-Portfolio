"use client"
import { useState, useCallback } from "react"
import Preloader from "@/components/ui/preloader"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import CareerTimeline from "@/components/CareerTimeline"
import ExperienceSection from "@/components/ExperienceSection"
import ProductSection from "@/components/ProductSection"
import BlogsSection from "@/components/BlogsSection"
import CaseStudiesSection from "@/components/CaseStudiesSection"
import ConnectSection from "@/components/ConnectSection"

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
        <BlogsSection />
        <CaseStudiesSection />
        <ConnectSection />
      </main>
    </>
  )
}
