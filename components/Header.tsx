"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Product", href: "#product" },
  { label: "Blogs", href: "#blogs" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Ask Me Anything", href: "#ask" },
]

const sectionIds = ["home", "about", "skills", "experience", "product", "blogs", "case-studies", "ask"]

export default function Header() {
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight nav item based on which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const match = navItems.find((n) => n.href === `#${id}`)
            if (match) setActive(match.label)
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`relative px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${
              active === item.label ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {active === item.label && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 bg-white/15 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}
      </nav>

      <a
        href="#connect"
        className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
      >
        Connect with Me
      </a>
    </motion.header>
  )
}
