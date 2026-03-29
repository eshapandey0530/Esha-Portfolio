"use client"
import React, { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

export interface AccordionItem {
  id: number
  title: string
  subtitle: string
  description: string
  imageUrl: string
  tags?: string[]
  github?: string
  liveUrl?: string
}

interface AccordionItemProps {
  item: AccordionItem
  isActive: boolean
  onMouseEnter: () => void
}

const AccordionPanel = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0 ${
        isActive ? 'flex-[4]' : 'flex-[0.4]'
      }`}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'bg-black/50' : 'bg-black/70'}`} />

      {/* Top-right icons — only when expanded */}
      <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {item.github && (
          <a
            href={item.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
        )}
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        )}
      </div>

      {/* Vertical title when collapsed */}
      <span
        className={`absolute text-white font-semibold whitespace-nowrap transition-all duration-500 ${
          isActive ? 'opacity-0' : 'opacity-100 bottom-40 left-1/2 -translate-x-1/2 rotate-90 text-base'
        }`}
      >
        {item.title}
      </span>

      {/* Expanded content */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-purple-300 text-sm font-medium uppercase tracking-widest mb-1">{item.subtitle}</p>
        <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-300 text-base leading-relaxed line-clamp-3">{item.description}</p>
        {item.tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tags.map((tag) => (
              <span key={tag} className="text-sm bg-white/10 border border-white/20 text-gray-200 rounded-full px-3 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface ImageAccordionProps {
  items: AccordionItem[]
  defaultActive?: number
}

export function ImageAccordion({ items, defaultActive = 0 }: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive)

  return (
    <div className="flex flex-row items-stretch gap-3 w-full h-[500px]">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  )
}
