"use client"
import React, { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export type TimelineEntry = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  items?: string[]
  image?: string
  button?: { url: string; text: string }
}

interface TimelineProps {
  entries: TimelineEntry[]
}

export default function ReleaseTimeline({ entries }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])

  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el
  }

  useEffect(() => {
    let frame = 0
    let lastActive = 0
    const update = () => {
      frame = requestAnimationFrame(update)
      const centerY = window.innerHeight / 3
      let bestIndex = 0
      let bestDist = Infinity
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - centerY)
        if (dist < bestDist) { bestDist = dist; bestIndex = i }
      })
      if (bestIndex !== lastActive) { lastActive = bestIndex; setActiveIndex(bestIndex) }
    }
    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="space-y-16 md:space-y-24">
      {entries.map((entry, index) => {
        const isActive = index === activeIndex
        return (
          <div key={index} className="relative flex flex-col gap-4 md:flex-row md:gap-12">
            {/* Sentinel */}
            <div ref={(el) => setSentinelRef(el, index)} aria-hidden className="absolute -top-24 left-0 h-12 w-12 opacity-0" />

            {/* Meta */}
            <div className="top-8 flex h-min w-56 shrink-0 items-start gap-3 md:sticky">
              <div className={`p-2 rounded-lg mt-0.5 transition-colors duration-300 ${isActive ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400"}`}>
                <entry.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{entry.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{entry.subtitle}</p>
              </div>
            </div>

            {/* Card */}
            <article className={`flex-1 flex flex-col rounded-2xl border p-4 transition-all duration-300 ${
              isActive ? "border-white/10 bg-white/[0.04] shadow-lg" : "border-white/5 bg-white/[0.02]"
            }`}>
              {entry.image && (
                <img src={entry.image} alt={entry.title} className="mb-4 w-full h-56 rounded-xl object-cover" loading="lazy" />
              )}
              <div className="space-y-3">
                <h3 className={`text-base font-semibold transition-colors duration-200 ${isActive ? "text-white" : "text-gray-400"}`}>
                  {entry.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? "text-gray-400 line-clamp-none" : "text-gray-600 line-clamp-2"}`}>
                  {entry.description}
                </p>

                <div aria-hidden={!isActive} className={`grid transition-all duration-500 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="space-y-4 pt-2">
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
            </article>
          </div>
        )
      })}
    </div>
  )
}
