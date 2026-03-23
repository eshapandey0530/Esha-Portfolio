"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type MilestoneType = "work" | "education" | "future"

interface Milestone {
  year: string
  title: string
  subtitle: string
  impact: string
  type: MilestoneType
}

const milestones: Milestone[] = [
  {
    year: "May 2026 →",
    title: "Graduating & What's Next",
    subtitle: "Open to full-time opportunities",
    impact: "Looking to build AI-native products that make complex systems feel effortless for real users.",
    type: "future",
  },
  {
    year: "Sep 2025 – Present",
    title: "Graduate Teaching Assistant",
    subtitle: "NYU Stern School of Business",
    impact: "Supporting graduate-level coursework, mentoring students, and deepening expertise in information systems.",
    type: "work",
  },
  {
    year: "Jun 2025 – Aug 2025",
    title: "AI Product Manager",
    subtitle: "Summer 2025",
    impact: "Applied product and engineering skills in a real-world setting during the summer break.",
    type: "work",
  },
  {
    year: "Sep 2024 – May 2026",
    title: "MS in Information Systems",
    subtitle: "New York University · Minor: Computer Science",
    impact: "Relocated to NYC to deepen expertise in AI, data systems, and product strategy.",
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
    year: "Jul 2018 – May 2022",
    title: "B.Tech — Computer Science Engineering",
    subtitle: "Jaypee University of Information Technology · Minor: Data Science",
    impact: "Built a strong foundation in software engineering, algorithms, and data science.",
    type: "education",
  },
]

const typeStyles: Record<MilestoneType, { dot: string; badge: string; border: string; glow: string }> = {
  work: {
    dot: "bg-purple-500 ring-purple-500/30",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    border: "border-purple-500/20 hover:border-purple-500/40",
    glow: "shadow-purple-500/10",
  },
  education: {
    dot: "bg-blue-500 ring-blue-500/30",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    glow: "shadow-blue-500/10",
  },
  future: {
    dot: "bg-emerald-400 ring-emerald-400/30 animate-pulse",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "shadow-emerald-500/10",
  },
}

function MilestoneCard({ item, index }: { item: Milestone; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const isLeft = index % 2 === 0
  const styles = typeStyles[item.type]

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full">

      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-center gap-6">

        {/* Left side */}
        <div className={`flex justify-end ${isLeft ? "" : "invisible"}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`w-full max-w-sm bg-white/[0.04] border ${styles.border} rounded-2xl p-5 shadow-xl ${styles.glow} transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-0.5 ${item.type === "future" ? "opacity-60" : ""}`}
            >
              <CardContent item={item} styles={styles} />
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`w-3.5 h-3.5 rounded-full ${styles.dot} ring-4 z-10`}
          />
        </div>

        {/* Right side */}
        <div className={`flex justify-start ${!isLeft ? "" : "invisible"}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`w-full max-w-sm bg-white/[0.04] border ${styles.border} rounded-2xl p-5 shadow-xl ${styles.glow} transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-0.5 ${item.type === "future" ? "opacity-60" : ""}`}
            >
              <CardContent item={item} styles={styles} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile single column */}
      <div className="flex md:hidden w-full items-start gap-4 pl-2">
        <div className="flex flex-col items-center pt-1.5">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className={`w-3 h-3 rounded-full ${styles.dot} ring-4 z-10 flex-shrink-0`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`flex-1 bg-white/[0.04] border ${styles.border} rounded-2xl p-5 shadow-xl transition-all duration-300 ${item.type === "future" ? "opacity-60" : ""}`}
        >
          <CardContent item={item} styles={styles} />
        </motion.div>
      </div>
    </div>
  )
}

function CardContent({ item, styles }: { item: Milestone; styles: ReturnType<typeof typeStyles[MilestoneType]> }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${styles.badge}`}>
          {item.year}
        </span>
        {item.type === "work" && (
          <span className="text-xs text-purple-400/70 font-medium uppercase tracking-wider">Work</span>
        )}
        {item.type === "future" && (
          <span className="text-xs text-emerald-400/70 font-medium uppercase tracking-wider">Next</span>
        )}
      </div>
      <h4 className={`font-semibold leading-snug ${item.type === "work" ? "text-white text-lg" : "text-gray-200 text-base"}`}>
        {item.title}
      </h4>
      <p className="text-gray-500 text-xs">{item.subtitle}</p>
      <p className={`text-sm leading-relaxed ${item.type === "work" ? "text-gray-300" : "text-gray-500"}`}>
        {item.impact}
      </p>
    </div>
  )
}

export default function CareerTimeline() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" })

  return (
    <section id="experience" className="relative bg-[#070b13] py-28 px-6 md:px-16 overflow-hidden">
      {/* subtle grid */}
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

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line — desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
        {/* Vertical line — mobile */}
        <div className="md:hidden absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-10">
          {milestones.map((item, i) => (
            <MilestoneCard key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
