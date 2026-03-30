"use client"
import { Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Product", href: "#product" },
  { label: "Blogs", href: "#blogs" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Resume", href: "/resume.pdf", external: true },
]

const socials = [
  { icon: Github, href: "https://github.com/eshapandey0530", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/eshapandey/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=ep3369@stern.nyu.edu", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="bg-[#070b13] border-t border-white/5 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <a href="#home" className="text-white font-bold text-xl tracking-widest">
            ESHA<span className="text-purple-400">.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={'external' in link ? "_blank" : undefined}
                rel={'external' in link ? "noreferrer" : undefined}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Esha Pandey. All rights reserved.</p>
          <p>Built with Next.js · Tailwind · Framer Motion</p>
        </div>

      </div>
    </footer>
  )
}
