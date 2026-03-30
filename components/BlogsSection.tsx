"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const blogs = [
  {
    title: "SahAI - Building a Health Companion That Actually Listens",
    date: "Mar 2025",
    tag: "AI / Product",
    description: "A breakdown of Sah·AI — how I designed a multi-agent architecture for seniors with chronic conditions, coordinating medication tracking, meal analysis, and caregiver alerts.",
    href: "https://open.substack.com/pub/esha609848/p/building-a-health-companion-that?r=46g8y6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    title: "I Built an AI That Writes VC Investment Memos",
    date: "Feb 2025",
    tag: "AI / Product",
    description: "A breakdown of my AI-Agentic Memo Generator — how I used Gemini, RAG, and Gmail/Drive signals to automate structured investment memo drafting, cutting drafting time by 80%.",
    href: "https://open.substack.com/pub/esha609848/p/i-built-an-ai-that-writes-vc-investment?r=46g8y6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    title: "Building a Next-Basket Recommender with Instacart Data",
    date: "Jan 2025",
    tag: "ML / Data Science",
    description: "A breakdown of my Instacart Next-Basket Recommender — using TIFU-KNN and Decision Tree models to predict reorder behavior and personalize grocery suggestions.",
    href: "https://open.substack.com/pub/esha609848/p/building-a-next-basket-recommender?r=46g8y6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
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
            <motion.a
              key={blog.title}
              href={blog.href ?? undefined}
              target={blog.href ? "_blank" : undefined}
              rel={blog.href ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex flex-col gap-4 bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] ${blog.href ? "cursor-pointer" : "cursor-default"}`}
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
