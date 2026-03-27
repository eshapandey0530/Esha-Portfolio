"use client"
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Tech icons as SVGs
const IconPython = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.2 2 7 3.1 7 4.5V7h5v1H5.5C4.1 8 2 9.4 2 12s2.1 4 3.5 4H7v-2.5C7 12.1 9.2 11 12 11s5 1.1 5 2.5V19.5C17 20.9 14.8 22 12 22s-5-1.1-5-2.5V17H5.5C4.1 17 2 15.6 2 13" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9.5" cy="5.5" r="1" fill="#FFD43B"/>
    <circle cx="14.5" cy="18.5" r="1" fill="#3776AB"/>
  </svg>
)

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
  </svg>
)

const IconOpenAI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2h4a4 4 0 0 1 0 8H8V2z" fill="#F24E1E"/>
    <path d="M8 10h4a4 4 0 0 1 0 8H8v-8z" fill="#FF7262"/>
    <path d="M8 18a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" fill="#1ABCFE"/>
    <path d="M2 6a4 4 0 0 1 4-4h2v8H6a4 4 0 0 1-4-4z" fill="#0ACF83"/>
    <path d="M2 14a4 4 0 0 1 4-4h2v8H6a4 4 0 0 1-4-4z" fill="#A259FF"/>
  </svg>
)

const IconAWS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" fill="#FF9900"/>
  </svg>
)

const IconDocker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" fill="#2496ED"/>
  </svg>
)

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const IconTypeScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#3178C6"/>
    <path d="M13.5 12.5H16v1h-1v4h-1.5v-4H12v-1h1.5zM17 12.5h1.5l1 2.5 1-2.5H22v5.5h-1.5v-3l-.75 1.875h-.5L18.5 15v3H17v-5.5z" fill="white"/>
    <path d="M3 3h18v18H3V3z" fill="none"/>
    <path d="M6 8h12v1H6V8zm0 3h8v1H6v-1z" fill="#3178C6" opacity="0"/>
  </svg>
)

const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C13.24 10.383 14.205 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C15.26 7.017 14.295 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C8.74 15.783 9.705 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C10.76 12.417 9.795 11.4 7.5 11.4z" fill="#38BDF8"/>
  </svg>
)

const IconJira = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.975 2.006L2.148 11.832a.504.504 0 0 0 0 .713l4.443 4.443 5.384-5.384 5.384 5.384 4.443-4.443a.504.504 0 0 0 0-.713L11.975 2.006z" fill="#2684FF"/>
    <path d="M11.975 6.919L6.591 12.3l5.384 5.384L17.36 12.3 11.975 6.919z" fill="url(#jira-grad)"/>
    <path d="M11.975 12.3l-5.384 5.384 5.384 5.384 5.384-5.384L11.975 12.3z" fill="#2684FF"/>
    <defs>
      <linearGradient id="jira-grad" x1="11.975" y1="6.919" x2="11.975" y2="17.684" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0052CC"/>
        <stop offset="1" stopColor="#2684FF"/>
      </linearGradient>
    </defs>
  </svg>
)

const IconTableau = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 2v4M11.5 18v4M2 11.5h4M18 11.5h4" stroke="#E97627" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11.5 8v7M8 11.5h7" stroke="#5B9BD5" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="11.5" cy="11.5" r="2" fill="#E97627"/>
  </svg>
)

const skillGroups = [
  {
    label: "Product & Delivery",
    skills: ["Product Strategy", "Roadmapping", "PRDs & BRDs", "User Research", "Agile/Scrum", "OKRs & KPIs", "A/B Testing", "Prioritization (RICE/ICE)"],
    dot: "bg-white/40",
  },
  {
    label: "AI, ML & Data",
    skills: ["LLMs", "RAG", "Prompt Engineering", "Generative AI", "NLP", "Machine Learning", "Product Analytics", "Data Visualization", "LangChain", "LangGraph"],
    dot: "bg-white/40",
  },
  {
    label: "Programming",
    skills: ["Python", "Java", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"],
    dot: "bg-white/40",
  },
  {
    label: "Frameworks & Cloud",
    skills: ["React", "FastAPI", "Flask", "Node.js", "AngularJS", "AWS", "GCP", "SAP UI5 Fiori"],
    dot: "bg-white/40",
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Postman", "Jira", "Figma", "Power BI", "Tableau", "VS Code", "Cursor"],
    dot: "bg-white/40",
  },
  {
    label: "Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "NLTK"],
    dot: "bg-white/40",
  },
]

const floatingIcons = [
  { id: 1, icon: IconPython, className: "top-[8%] left-[6%]" },
  { id: 2, icon: IconReact, className: "top-[12%] right-[8%]" },
  { id: 3, icon: IconOpenAI, className: "top-[75%] left-[8%]" },
  { id: 4, icon: IconFigma, className: "bottom-[8%] right-[7%]" },
  { id: 5, icon: IconGitHub, className: "top-[4%] left-[28%]" },
  { id: 6, icon: IconAWS, className: "top-[4%] right-[28%]" },
  { id: 7, icon: IconDocker, className: "bottom-[6%] left-[22%]" },
  { id: 8, icon: IconTypeScript, className: "top-[42%] left-[3%]" },
  { id: 9, icon: IconTailwind, className: "top-[42%] right-[3%]" },
  { id: 10, icon: IconJira, className: "bottom-[6%] right-[22%]" },
  { id: 11, icon: IconTableau, className: "top-[22%] left-[14%]" },
  { id: 12, icon: IconTypeScript, className: "top-[22%] right-[14%]" },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <FloatingIconsHero
      id="skills"
      title="Skills & Expertise"
      subtitle="What I bring to the table"
      icons={floatingIcons}
    >
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
              <h3 className="text-white/90 font-semibold text-sm">{group.label}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-gray-400 bg-white/[0.04] border border-white/[0.08] rounded-full px-2.5 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </FloatingIconsHero>
  )
}
