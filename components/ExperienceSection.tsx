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
    logo: "https://www.stagecoachimprov.com/wordpress/wp-content/uploads/2018/02/nyu_300x300.png",
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
    subtitle: "Sentari · Jun 2025 – Aug 2025",
    logo: "/sentari.jpeg",
    description:
      "Led product strategy and launch for an AI voice journaling app that analyzes emotional signals and generates reflective prompts to support mental well-being.",
    items: [
      "Led launch of an AI voice journaling product (web app) that analyzes emotional signals from voice entries and generates reflective prompts to support mental well-being",
      "Conducted user research & competitive analysis across platforms to identify feature gaps & inform product strategy",
      "Proposed & led development of an Emotion Calendar to visualize trends & improve user experience & engagement",
      "Authored PRDs and defined product requirements, feature specifications, and acceptance criteria for AI journaling capabilities including emotion tracking and adaptive prompts",
      "Defined emotion-aware prompt logic to ensure supportive, non-triggering AI responses across emotional states",
      "Collaborated cross-functionally with engineering and design on SDLC sprint planning and feature prioritization",
      "Scaled early product validation to ~500 users through community-driven recruitment, gathering usability feedback and insights for data-driven product improvements",
      "Tracked product performance metrics (trial-to-subscription conversion & user retention) to guide feature iteration",
    ],
  },
  {
    icon: Briefcase,
    title: "Software Engineer",
    subtitle: "Infosys · Jul 2022 – Jul 2024",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    description:
      "Built and owned enterprise-grade systems at Infosys, delivering scalable full-stack solutions used by 1,000+ users across finance and document management workflows.",
    items: [
      "Owned system architecture for SAP-based enterprise application used by 1,000+ users",
      "Scoped end-to-end document ingestion pipeline (UI5 → REST APIs → validation → backend microservices), handling file uploads, schema validation, and failure recovery ensuring full SDLC scalability, modularity, and maintainability",
      "Facilitated code migration utilizing flag-backed changes towards 0 downtime & 70% performance improvements",
      "Integrated across the CI/CD lifecycle, supporting rapid iteration, testing, and deployment of production AI services",
      "Optimized RESTful APIs for document ingestion and validation, reducing processing latency by 30%",
      "Developed role-based access control (RBAC) and workflow validation logic for a finance approval system, improving authorization correctness, auditability, and data integrity",
      "Utilized version control promoting collaborative development, release management, and production debugging",
      "Led frontend–backend integration and production debugging, resolving API mismatches, reducing bugs by 40%",
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
