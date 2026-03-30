"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    title: "Headspace Has a Habit Problem, Not a Content Problem",
    tag: "Product Design · AI",
    description: "A breakdown of Headspace - analyzing its core habit loop, retention challenges, and how AI-driven personalization could transform the mental wellness experience.",
    href: "https://open.substack.com/pub/esha609848/p/headspace-has-a-habit-problem-not?r=46g8y6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    title: "Notion Has an Intelligence Problem",
    tag: "Feature Design · PM",
    description: "A breakdown of Notion - examining how its AI features fall short of user expectations and what a smarter, context-aware intelligence layer could look like.",
    href: "https://open.substack.com/pub/esha609848/p/notion-has-an-intelligence-problem?r=46g8y6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
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
            <motion.a
              key={c.title}
              href={c.href ?? undefined}
              target={c.href ? "_blank" : undefined}
              rel={c.href ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] ${c.href ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full px-3 py-1">{c.tag}</span>
                </div>
                <h3 className="text-white font-semibold text-lg leading-snug mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
              </div>
              <div className="flex-shrink-0">
                <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Substack CTA */}
        <div className="flex justify-end mt-6">
          <a
            href="https://substack.com/@esha609848/posts"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200 group"
          >
            Find out more here
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
