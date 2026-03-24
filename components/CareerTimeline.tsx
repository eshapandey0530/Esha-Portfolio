"use client"
import { motion, useInView, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"

type MilestoneType = "work" | "education" | "future"
type StyleSet = { dot: string; badge: string; border: string; card: string }

interface Milestone {
  year: string
  title: string
  subtitle: string
  impact: string
  type: MilestoneType
}

const milestones: Milestone[] = [
  {
    year: "Jul 2018 – May 2022",
    title: "B.Tech — CSE",
    subtitle: "Jaypee University · Minor: Data Science",
    impact: "Built a strong foundation in software engineering, algorithms, and data science.",
    type: "education",
  },
  {
    year: "Jul 2022 – Jul 2024",
    title: "Software Engineer",
    subtitle: "Full-time · Product Engineering",
    impact: "Shipped production features used by thousands of users, bridging design and engineering at scale.",
    type: "work",
  },
  {
    year: "Sep 2024 – May 2026",
    title: "MS in Information Systems",
    subtitle: "New York University · Minor: CS",
    impact: "Deepening expertise in AI, data systems, and product strategy in NYC.",
    type: "education",
  },
  {
    year: "Jun – Aug 2025",
    title: "AI Product Manager",
    subtitle: "Summer 2025",
    impact: "Applied product and engineering skills in a real-world setting.",
    type: "work",
  },
  {
    year: "Sep 2025 – Present",
    title: "Graduate Teaching Assistant",
    subtitle: "NYU Stern School of Business",
    impact: "Mentoring students and supporting graduate-level coursework in information systems.",
    type: "work",
  },
  {
    year: "May 2026 →",
    title: "What's Next",
    subtitle: "Open to full-time opportunities",
    impact: "Looking to build AI-native products that make complex systems feel effortless.",
    type: "future",
  },
]

const typeStyles: Record<MilestoneType, StyleSet> = {
  work: {
    dot: "bg-purple-500 ring-purple-500/30",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    border: "border-purple-500/20 hover:border-purple-500/50",
    card: "hover:bg-white/[0.07]",
  },
  education: {
    dot: "bg-blue-500 ring-blue-500/30",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/50",
    card: "hover:bg-white/[0.07]",
  },
  future: {
    dot: "bg-emerald-400 ring-emerald-400/30 animate-pulse",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    card: "opacity-70 hover:opacity-100 hover:bg-white/[0.07]",
  },
}

function CardContent({ item, styles }: { item: Milestone; styles: StyleSet }) {
  return (
    <div className="space-y-1.5">
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${styles.badge} inline-block`}>
        {item.year}
      </span>
      <h4 className={`font-semibold leading-snug text-sm ${item.type === "work" ? "text-white" : "text-gray-200"}`}>
        {item.title}
      </h4>
      <p className="text-gray-500 text-xs leading-snug">{item.subtitle}</p>
      <p className="text-gray-400 text-xs leading-relaxed">{item.impact}</p>
    </div>
  )
}

function AboveCard({ item, index }: { item: Milestone; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const styles = typeStyles[item.type]
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-white/[0.04] border ${styles.border} rounded-xl p-4 transition-all duration-300 ${styles.card} self-end`}
    >
      <CardContent item={item} styles={styles} />
    </motion.div>
  )
}

function BelowCard({ item, index }: { item: Milestone; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const styles = typeStyles[item.type]
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-white/[0.04] border ${styles.border} rounded-xl p-4 transition-all duration-300 ${styles.card} self-start`}
    >
      <CardContent item={item} styles={styles} />
    </motion.div>
  )
}

function MobileCard({ item, index }: { item: Milestone; index: number }) {
  const styles = typeStyles[item.type]
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex items-start gap-4"
    >
      <div className={`mt-1 w-[22px] h-[22px] rounded-full flex-shrink-0 ${styles.dot} ring-4 z-10`} />
      <div className={`flex-1 bg-white/[0.04] border ${styles.border} rounded-xl p-4 transition-all duration-300 ${styles.card}`}>
        <CardContent item={item} styles={styles} />
      </div>
    </motion.div>
  )
}

export default function CareerTimeline() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" })
  const lineRef = useRef<HTMLDivElement>(null)

  // Plane progress: 0% → 100% over 5s, loops
  const planeProgress = useMotionValue("0%")
  useAnimationFrame((t) => {
    const duration = 5000 // ms per loop
    const pct = ((t % duration) / duration) * 100
    planeProgress.set(`${pct}%`)
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={sectionRef} className="relative bg-[#070b13] py-28 px-6 md:px-16 overflow-hidden hidden md:block">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center mb-20"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium mb-4">Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Timeline</h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          I build AI products that turn complex systems into intuitive user experiences.
        </p>
      </motion.div>

      {/* Desktop horizontal layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        {/* 3-row grid: above cards | dots+line | below cards */}
        <div className="grid grid-cols-6 gap-x-3">

          {/* Row 1 — cards above (odd indices) */}
          {milestones.map((item, i) =>
            i % 2 !== 0
              ? <AboveCard key={`top-${i}`} item={item} index={i} />
              : <div key={`top-empty-${i}`} />
          )}

          {/* Row 2 — full-width line + dots + paper plane, spans all 6 cols */}
          <div className="col-span-6 relative flex items-center py-6">
            {/* Base dim line */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 -translate-y-1/2" />

            {/* Glowing trail that grows with the plane */}
            <motion.div
              className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 origin-left rounded-full"
              style={{
                background: "linear-gradient(to right, #3b82f6, #a855f7, #10b981)",
                width: planeProgress,
                boxShadow: "0 0 8px 2px rgba(168,85,247,0.5)",
              }}
            />

            {/* Node dots */}
            {milestones.map((item, i) => (
              <div
                key={`dot-${i}`}
                className="absolute flex items-center justify-center"
                style={{ left: `${(i / (milestones.length - 1)) * 100}%`, transform: "translateX(-50%)" }}
              >
                <div className={`w-2.5 h-2.5 rounded-full z-10 ${typeStyles[item.type].dot} ring-2`} />
              </div>
            ))}

            {/* Paper plane riding the line */}
            <motion.div
              className="absolute z-20"
              style={{
                left: planeProgress,
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <motion.div
                animate={{ y: [0, -3, 0, 3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                  className="drop-shadow-[0_0_10px_rgba(168,85,247,1)] rotate-45">
                  <path d="M22 2L11 13" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(192,132,252,0.25)" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Row 3 — cards below (even indices) */}
          {milestones.map((item, i) =>
            i % 2 === 0
              ? <BelowCard key={`bot-${i}`} item={item} index={i} />
              : <div key={`bot-empty-${i}`} />
          )}
        </div>
      </div>

      {/* Mobile vertical layout */}
      <div className="md:hidden max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/10" />
          <div className="flex flex-col gap-8">
            {milestones.map((item, i) => (
              <MobileCard key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
