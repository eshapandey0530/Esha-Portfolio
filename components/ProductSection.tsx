"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, BarChart2, Globe, Layers, Cpu, ShoppingBag } from "lucide-react"
import { ImageAccordion, type AccordionItem } from "@/components/ui/interactive-image-accordion"
import ReleaseTimeline, { type TimelineEntry } from "@/components/ui/release-time-line"

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Sah·AI - AI Health Companion",
    subtitle: "React · Multi-Agent · Full-Stack",
    description: "AI-powered health companion for seniors with chronic conditions. Multi-agent system for medication tracking, meal analysis, symptom monitoring & caregiver alerts. Aims to achieve 85% adherence & reduces hospitalizations. Voice-first, multilingual.",
    imageUrl: "https://www.sermo.com/wp-content/uploads/2025/05/seo-header-universal-healthcare-1440x811.png",
    tags: ["GPT-4", "PostgreSQL", "TypeScript", "Node.js", "FastAPI"],
    github: "https://github.com/eshapandey0530/SahAI",
    liveUrl: "https://sahai-5vxl.onrender.com/",
  },
  {
    id: 2,
    title: "TCM Nutrition Insight",
    subtitle: "GPT-4o Vision · FastAPI · TCM",
    description: "AI-powered web app that analyzes tongue or meal photos using GPT-4o vision, cross-references findings with blood work data, and returns Traditional Chinese Medicine nutritional insights with per-ingredient portion tracking.",
    imageUrl: "https://magazine.einsteinmed.edu/wp-content/uploads/sites/4/2024/10/SF24-Food-Header-Full-FPO-2.jpg",
    tags: ["Python", "FastAPI", "OpenAI", "GPT-4o", "HealthTech"],
    github: "https://github.com/eshapandey0530/TCM-Nutrition-Insight",
    liveUrl: "https://tcm-nutrition-insight.onrender.com/",
  },
  {
    id: 3,
    title: "AI Memo Draft Generator",
    subtitle: "AI · Investment Memos · PDF Generation",
    description: "Agentic tool that generates structured investment memos from company data using Gmail, Drive, and Affinity signals — powered by Gemini 2.5 Flash.",
    imageUrl: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "Streamlit", "Gemini", "LLM"],
    github: "https://github.com/eshapandey0530/AI-Agentic-Investment-Memo-Generator",
  },
  {
    id: 4,
    title: "UberEats Data Analysis",
    subtitle: "Data Science · EDA · Python",
    description: "Exploratory data analysis on UberEats dataset to uncover trends in restaurant ratings, delivery times, and customer preferences.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlDm8X-q1-q358-Oe0h5YRP3pUgopTaXbTA&s",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/eshapandey0530/Exploratory-Data-Analysis-of-Uber-Eats-Data",
  },
  {
    id: 5,
    title: "Instacart Next-Basket Recommender",
    subtitle: "ML · Data Science · Recommendation",
    description: "Predicting customer reorder behavior using Decision Tree and KNN models on Instacart grocery data to uncover purchasing patterns and improve product recommendations.",
    imageUrl: "https://assets.farmjournal.com/dims4/default/f7376cf/2147483647/strip/false/crop/1200x857+0+0/resize/1200x857!/quality/90/?url=https%3A%2F%2Ffj-corp-pub.s3.us-east-2.amazonaws.com%2Fs3fs-public%2F2024-02%2Finstacart.jpg",
    tags: ["Python", "Scikit-learn", "Decision Tree", "KNN", "Pandas"],
    github: "https://github.com/eshapandey0530/INSTACART-NEXT-BASKET-RECOMMENDER-SYSTEM",
  },
  {
    id: 6,
    title: "Semantic Book Recommender",
    subtitle: "NLP · Vector Search · LLM",
    description: "A Gradio-powered book recommendation system that uses OpenAI embeddings and ChromaDB to find semantically similar books, with filtering by category and emotional tone.",
    imageUrl: "https://miro.medium.com/1*0RNUhPqH-U7neTxZ0XsEmg.jpeg",
    tags: ["Python", "LangChain", "OpenAI", "ChromaDB", "Gradio"],
    github: "https://github.com/eshapandey0530/book-recommender",
  },
]

const timelineEntries: TimelineEntry[] = [
  {
    icon: Bot,
    title: "Sah·AI - AI Health Companion",
    subtitle: "React · Multi-Agent · Full-Stack",
    description: "AI-powered health companion for seniors with chronic conditions. Multi-agent system for medication tracking, meal analysis, symptom monitoring & caregiver alerts.",
    items: [
      "Built multi-agent system for medication tracking and symptom monitoring",
      "Implemented voice-first, multilingual interface for senior accessibility",
      "Designed caregiver alert system with real-time notifications",
    ],
  },
  {
    icon: Cpu,
    title: "TCM Nutrition Insight",
    subtitle: "GPT-4o Vision · FastAPI · TCM",
    description: "AI web app analyzing tongue or meal photos using GPT-4o vision, cross-referencing with blood work data for TCM nutritional insights.",
    items: [
      "Integrated GPT-4o vision API for photo-based health analysis",
      "Built blood work data cross-referencing pipeline",
      "Delivered per-ingredient portion tracking with TCM recommendations",
    ],
  },
  {
    icon: Layers,
    title: "AI Memo Draft Generator",
    subtitle: "AI · Investment Memos · PDF Generation",
    description: "Agentic tool generating structured investment memos from Gmail, Drive, and Affinity signals — powered by Gemini 2.5 Flash.",
    items: [
      "Integrated Gmail, Drive, and Affinity as data sources",
      "Used Gemini 2.5 Flash for structured memo generation",
      "Built Streamlit UI with PDF export capability",
    ],
  },
  {
    icon: BarChart2,
    title: "UberEats Data Analysis",
    subtitle: "Data Science · EDA · Python",
    description: "Exploratory data analysis on UberEats dataset uncovering trends in restaurant ratings, delivery times, and customer preferences.",
    items: [
      "Cleaned and processed large-scale UberEats dataset",
      "Identified key drivers of restaurant ratings and delivery performance",
      "Visualised findings with Matplotlib and Seaborn",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Instacart Next-Basket Recommender",
    subtitle: "ML · Data Science · Recommendation",
    description: "Predicting customer reorder behavior using Decision Tree and KNN models on Instacart grocery data.",
    items: [
      "Trained Decision Tree and KNN models on Instacart order history",
      "Engineered features from purchase frequency and recency signals",
      "Evaluated model performance with precision/recall metrics",
    ],
  },
  {
    icon: Globe,
    title: "Semantic Book Recommender",
    subtitle: "NLP · Vector Search · LLM",
    description: "Gradio-powered book recommendation system using OpenAI embeddings and ChromaDB with filtering by category and emotional tone.",
    items: [
      "Built semantic search with OpenAI embeddings and ChromaDB",
      "Added category and emotional tone filters for personalisation",
      "Deployed interactive Gradio UI for real-time recommendations",
    ],
  },
]

export default function ProductSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="product" className="relative bg-[#070b13] py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Product</h2>
        </div>

        {/* Desktop — image accordion */}
        <div className="hidden md:block">
          <ImageAccordion items={accordionItems} defaultActive={0} />
        </div>

        {/* Mobile — scrolling timeline */}
        <div className="md:hidden">
          <ReleaseTimeline entries={timelineEntries} />
        </div>
      </motion.div>
    </section>
  )
}
