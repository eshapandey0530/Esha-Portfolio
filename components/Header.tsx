"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Product", href: "#product" },
  { label: "Blogs", href: "#blogs" },
  { label: "Case Studies", href: "#case-studies" },
]

const sectionIds = ["home", "about", "skills", "experience", "product", "blogs", "case-studies", "connect"]

export default function Header() {
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const getActiveSection = () => {
      const viewportMid = window.scrollY + window.innerHeight / 2
      let closest = sectionIds[0]
      let closestDist = Infinity
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const mid = el.offsetTop + el.offsetHeight / 2
        const dist = Math.abs(viewportMid - mid)
        if (dist < closestDist) { closestDist = dist; closest = id }
      }
      const match = navItems.find((n) => n.href === `#${closest}`)
      if (match) setActive(match.label)
    }
    window.addEventListener("scroll", getActiveSection, { passive: true })
    getActiveSection()
    return () => window.removeEventListener("scroll", getActiveSection)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleNavClick = (label: string) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.label)}
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

        {/* Mobile: active label */}
        <span className="md:hidden text-white text-sm font-medium">{active}</span>

        <div className="flex items-center gap-3">
          <a
            href="#connect"
            className="hidden md:block px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
          >
            Connect with Me
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-white"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile side panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 md:hidden"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-72 z-[70] bg-[#0d1117] border-l border-white/10 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-white font-semibold text-base">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.label)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors duration-200 ${
                      active === item.label
                        ? "bg-white/10 text-white font-medium"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {active === item.label && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    )}
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-6 py-6 border-t border-white/10">
                <a
                  href="#connect"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  Connect with Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
