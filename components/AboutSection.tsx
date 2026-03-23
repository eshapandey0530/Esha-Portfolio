"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative bg-[#070b13] py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-2 ring-white/10">
            <Image
              src="/esha.jpg"
              alt="Esha"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              style={{ objectPosition: "50% 70%" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Open to opportunities</span>
          </motion.div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Designing with purpose,<br />building with passion.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I&apos;m Esha — a product designer and developer who loves turning complex problems into clean, intuitive experiences. I sit at the intersection of design and engineering, which means I care just as much about how something works as how it looks.
          </p>
          <p className="text-gray-500 leading-relaxed">
            When I&apos;m not pushing pixels or writing code, you&apos;ll find me exploring new tools, reading about design systems, or obsessing over typography. I believe great products are built on empathy, curiosity, and a lot of iteration.
          </p>

          <div className="flex gap-8 pt-2">
            {[["2+", "Years Experience"], ["20+", "Projects Built"], ["10+", "Happy Clients"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white">{num}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
