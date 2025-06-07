"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function DevelopmentProcess() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      title: "Planejamento",
      description:
        "Definição do escopo do projeto, pesquisa sobre cabos submarinos e energia eólica offshore, esboço inicial da maquete.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Fevereiro 2024",
    },
    {
      title: "Prototipagem",
      description:
        "Criação de protótipos em escala reduzida, testes de materiais e componentes eletrônicos, simulações no Roblox Studio.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Março 2024",
    },
    {
      title: "Construção",
      description:
        "Montagem da estrutura base com materiais recicláveis, instalação dos componentes eletrônicos e programação do Arduino.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Abril 2024",
    },
    {
      title: "Testes",
      description:
        "Verificação do funcionamento dos LEDs, mini ventiladores e sistema de energia, ajustes finais na programação.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Maio 2024",
    },
    {
      title: "Finalização",
      description:
        "Acabamentos estéticos, documentação do projeto, preparação da apresentação para a feira de ciências.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Junho 2024",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-step")
          }
        })
      },
      { threshold: 0.2 },
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step)
      })
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-black hidden md:block">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-electric-subtle title-glow-subtle">
            Processo de Desenvolvimento
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Acompanhe a jornada de criação da maquete Ocean-net, desde o planejamento inicial até a finalização.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-green-400 rounded-full"></div>

          {/* Timeline steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={cn(
                  "relative flex opacity-0 translate-y-10",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                )}
              >
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div
                    className={cn(
                      "bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl",
                      index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none",
                    )}
                  >
                    <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm font-medium mb-4">
                      {step.date}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></div>

                {/* Image */}
                <div className="w-1/2 px-8">
                  <div className="rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-gray-800">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`Etapa de ${step.title}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-step {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
