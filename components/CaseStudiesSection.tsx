"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    title: "Sah·AI: Designing for Seniors with Chronic Conditions",
    tag: "Product Design · AI",
    outcome: "85% medication adherence target, voice-first UX for low-tech users",
    description: "A deep dive into the research, design decisions, and technical trade-offs behind building an AI health companion for elderly users with limited tech literacy.",
  },
  {
    title: "Emotion Calendar: From Insight to Feature",
    tag: "Feature Design · PM",
    outcome: "Increased user engagement and session depth at Sentari",
    description: "How I identified a gap in emotional trend visibility, proposed the Emotion Calendar feature, and led its development from PRD to production.",
  },
  {
    title: "Reducing API Latency by 30% at Infosys",
    tag: "Engineering · Performance",
    outcome: "30% latency reduction, 70% performance improvement post-migration",
    description: "A technical case study on optimizing RESTful APIs for a document ingestion pipeline — covering profiling, bottleneck identification, and flag-backed migration.",
  },
]

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="case-studies" className="relative bg-[#070b13] py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium mb-3">Deep Dives</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h2>
        </div>
        <div className="flex flex-col gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full px-3 py-1">{c.tag}</span>
                </div>
                <h3 className="text-white font-semibold text-lg leading-snug mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
              </div>
              <div className="md:w-64 flex-shrink-0 flex flex-col gap-2">
                <p className="text-xs text-gray-600 uppercase tracking-widest">Outcome</p>
                <p className="text-gray-300 text-sm leading-relaxed">{c.outcome}</p>
                <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
