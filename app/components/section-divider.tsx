"use client"

import { useEffect, useRef } from "react"

interface SectionDividerProps {
  title: string
}

export default function SectionDivider({ title }: SectionDividerProps) {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (progressBarRef.current) {
              progressBarRef.current.classList.add("animate-progress")
            }
          } else {
            if (progressBarRef.current) {
              progressBarRef.current.classList.remove("animate-progress")
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center">
          {/* Título da seção */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-300 text-center">
            {title}
          </h2>

          {/* Barra de progresso animada */}
          <div className="w-full max-w-2xl h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
            <div
              ref={progressBarRef}
              className="h-full w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 rounded-full transition-all duration-1000 ease-out"
            ></div>
          </div>

          {/* Linha decorativa */}
          <div className="flex items-center space-x-4 opacity-60">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-progress {
          width: 100% !important;
        }
      `}</style>
    </div>
  )
}
