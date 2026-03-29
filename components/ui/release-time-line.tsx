"use client"
import React, { useState } from "react"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export type TimelineEntry = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  items?: string[]
  logo?: string
  button?: { url: string; text: string }
}

interface TimelineProps {
  entries: TimelineEntry[]
}

export default function ReleaseTimeline({ entries }: TimelineProps) {
  // All expanded by default — track which ones are collapsed
  const [collapsed, setCollapsed] = useState<Set<number>>(new Set())

  const toggle = (index: number) => {
    setCollapsed((prev) => {
      const next = new Set(prev)
      next.has(index) ? next.delete(index) : next.add(index)
      return next
    })
  }

  return (
    <div className="space-y-4">
      {entries.map((entry, index) => {
        const isExpanded = !collapsed.has(index)
        return (
          <div key={index} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
            isExpanded ? "border-white/10 bg-white/[0.04] shadow-lg" : "border-white/5 bg-white/[0.02]"
          }`}>

            {/* Header — click to collapse/expand */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center gap-4 p-5 text-left group"
              aria-expanded={isExpanded}
            >
              {/* Logo or icon */}
              {entry.logo ? (
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0" style={{ background: "#57068c" }}>
                  <img src={entry.logo} alt="" className="w-full h-full object-cover scale-[1.3]" />
                </div>
              ) : (
                <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                  isExpanded ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400 group-hover:bg-white/10"
                }`}>
                  <entry.icon className="h-5 w-5" />
                </div>
              )}

              {/* Title + subtitle */}
              <div className="flex-1 min-w-0">
                <p className={`text-lg font-semibold transition-colors duration-200 ${isExpanded ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                  {entry.title}
                </p>
                <p className="text-base text-gray-500 mt-0.5">{entry.subtitle}</p>
              </div>

              {/* Chevron */}
              <div className={`flex-shrink-0 transition-colors duration-200 ${isExpanded ? "text-purple-400" : "text-gray-600 group-hover:text-gray-400"}`}>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </button>

            {/* Description — always visible */}
            <p className="px-5 pb-3 text-base text-gray-400 leading-relaxed">{entry.description}</p>

            {/* Body */}
            <div className={`grid transition-all duration-500 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-5 space-y-4">
                  {entry.items && entry.items.length > 0 && (
                    <ul className="space-y-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      {entry.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-base text-gray-400">
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.button && (
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="group border-white/10 text-gray-300 hover:text-white hover:border-white/30 bg-transparent" asChild>
                        <a href={entry.button.url} target="_blank" rel="noreferrer">
                          {entry.button.text}
                          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  )
}
