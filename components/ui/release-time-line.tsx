"use client"
import React, { useEffect, useRef, useState } from "react"
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
  // null = all collapsed, number = that index is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])

  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el
  }

  // On scroll, auto-expand the closest entry only if nothing is manually locked
  // We track whether the user has manually interacted
  const userInteracted = useRef(false)

  useEffect(() => {
    let frame = 0
    let lastActive = 0
    const update = () => {
      frame = requestAnimationFrame(update)
      if (userInteracted.current) return
      const centerY = window.innerHeight / 3
      let bestIndex = 0
      let bestDist = Infinity
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - centerY)
        if (dist < bestDist) { bestDist = dist; bestIndex = i }
      })
      if (bestIndex !== lastActive) {
        lastActive = bestIndex
        setExpandedIndex(bestIndex)
      }
    }
    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [])

  const toggle = (index: number) => {
    userInteracted.current = true
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-4">
      {entries.map((entry, index) => {
        const isExpanded = index === expandedIndex
        return (
          <div key={index} className="relative">
            {/* Sentinel for scroll detection */}
            <div ref={(el) => setSentinelRef(el, index)} aria-hidden className="absolute -top-24 left-0 h-12 w-12 opacity-0" />

            <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isExpanded ? "border-white/10 bg-white/[0.04] shadow-lg" : "border-white/5 bg-white/[0.02]"
            }`}>
              {/* Header row — always visible, click to toggle */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-4 p-4 text-left group"
                aria-expanded={isExpanded}
              >
                {/* Logo or icon */}
                {entry.logo ? (
                  <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
                    <img src={entry.logo} alt="" className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className={`p-2 rounded-lg flex-shrink-0 transition-colors duration-300 ${
                    isExpanded ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400 group-hover:bg-white/10"
                  }`}>
                    <entry.icon className="h-4 w-4" />
                  </div>
                )}

                {/* Title + subtitle */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold transition-colors duration-200 ${isExpanded ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                      {entry.title}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{entry.subtitle}</p>
                </div>

                {/* Expand/collapse chevron */}
                <div className={`flex-shrink-0 transition-colors duration-200 ${isExpanded ? "text-purple-400" : "text-gray-600 group-hover:text-gray-400"}`}>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </button>

              {/* Expandable body */}
              <div className={`grid transition-all duration-500 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 space-y-4">
                    <p className="text-sm text-gray-400 leading-relaxed">{entry.description}</p>
                    {entry.items && entry.items.length > 0 && (
                      <ul className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        {entry.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
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
          </div>
        )
      })}
    </div>
  )
}
