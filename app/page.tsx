"use client"
import { useState, useCallback } from "react"
import Preloader from "@/components/ui/preloader"
import HeroSection from "@/components/HeroSection"
import Header from "@/components/Header"
import AboutSection from "@/components/AboutSection"
import CareerTimeline from "@/components/CareerTimeline"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  const handleComplete = useCallback(() => {
    setShowPreloader(false)
  }, [])

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <CareerTimeline />
      </main>
    </>
  )
}
