"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Bot } from "lucide-react"
import ReleaseTimeline, { type TimelineEntry } from "@/components/ui/release-time-line"

const timelineEntries: TimelineEntry[] = [
  {
    icon: GraduationCap,
    title: "Graduate Teaching Assistant",
    subtitle: "NYU Stern · Sep 2025 – Present",
    logo: "/stern.png",
    description:
      "Supporting graduate-level coursework at NYU Stern School of Business. Mentoring students through complex information systems concepts and providing feedback on assignments.",
    items: [
      "Facilitate weekly discussion sections for graduate IS courses",
      "Mentor students on coursework, projects, and career guidance",
      "Collaborate with faculty to develop course materials",
    ],
  },
  {
    icon: Bot,
    title: "AI Product Manager",
    subtitle: "Sentari · Jun – Aug 2025",
    logo: "/sentari.jpeg",
    description:
      "Led product discovery and roadmap planning for AI-powered features. Collaborated with engineering and design to ship experiments and translate user research into product requirements.",
    items: [
      "Defined and prioritized AI feature roadmap using RICE framework",
      "Ran A/B tests and experiments to validate product hypotheses",
      "Wrote PRDs and BRDs for LLM-powered product features",
      "Collaborated cross-functionally with engineering, design, and data teams",
    ],
  },
  {
    icon: Briefcase,
    title: "Software Engineer",
    subtitle: "Infosys · Jul 2022 – Jul 2024",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    description:
      "Built and shipped production-grade features across the full stack. Delivered scalable, user-facing experiences used by thousands of users daily.",
    items: [
      "Developed full-stack features using React, Node.js, and TypeScript",
      "Optimised API performance reducing response times by 40%",
      "Integrated third-party services and internal microservices",
      "Participated in code reviews and maintained high test coverage",
      "Worked in Agile sprints with weekly releases to production",
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" className="relative bg-[#070b13] py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium mb-3">Work Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Where I&apos;ve Worked</h2>
        </div>

        {/* Timeline — all screen sizes */}
        <ReleaseTimeline entries={timelineEntries} />
      </motion.div>
    </section>
  )
}
