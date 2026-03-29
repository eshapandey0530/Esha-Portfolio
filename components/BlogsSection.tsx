"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const blogs = [
  {
    title: "Building Multi-Agent Systems for Healthcare",
    date: "Mar 2025",
    tag: "AI / Product",
    description: "How I designed a multi-agent architecture for Sah·AI — coordinating medication tracking, meal analysis, and caregiver alerts in a single coherent system.",
  },
  {
    title: "From Engineer to Product Manager: What I Learned",
    date: "Feb 2025",
    tag: "Career",
    description: "Switching from writing code to owning a product roadmap taught me more about empathy, prioritization, and communication than any engineering role ever did.",
  },
  {
    title: "Prompt Engineering for Emotion-Aware AI",
    date: "Jan 2025",
    tag: "AI / LLMs",
    description: "Designing prompts that are supportive, non-triggering, and contextually aware across a wide range of emotional states — lessons from building Sentari.",
  },
]

export default function BlogsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="blogs" className="relative bg-[#070b13] py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium mb-3">Writing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Blogs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col gap-4 bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full px-3 py-1">{blog.tag}</span>
                <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base leading-snug mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{blog.description}</p>
              </div>
              <p className="text-gray-600 text-xs mt-auto">{blog.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
