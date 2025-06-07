"use client"

import { useEffect, useRef, memo } from "react"
import { ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"

// Carregamento dinâmico do BackgroundElements para melhor performance
const BackgroundElements = dynamic(() => import("./background-elements"), {
  ssr: false,
  loading: () => null,
})

const Hero = memo(function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const scrollToProject = () => {
    const element = document.getElementById("projeto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 200 },
      { ref: descriptionRef, delay: 400 },
      { ref: buttonRef, delay: 600 },
    ]

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add("animate-fade-in")
        }, delay)
      }
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background com efeitos */}
      <div className="absolute inset-0">
        <div className="grid-background"></div>
        <BackgroundElements />
        <div className="data-flow">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="data-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-md rounded-full text-sm font-medium text-blue-300 border border-blue-900/50 mb-4">
            IEMA Pleno Brejo - Turma 204
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight opacity-0 transform translate-y-10 title-electric-subtle title-glow-subtle"
        >
          Ocean-net
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-4 font-light opacity-0 transform translate-y-10 title-ocean-subtle"
        >
          Conexões Eólicas Sustentáveis
        </p>

        <p
          ref={descriptionRef}
          className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 transform translate-y-10"
        >
          Uma estação de redes de internet auto sustentável para o litoral do Maranhão, unindo tecnologia,
          sustentabilidade e inclusão digital
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            ref={buttonRef}
            onClick={scrollToProject}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-10"
          >
            Explorar Projeto
          </button>
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Energia Limpa</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Conectividade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seta para baixo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>

      <style jsx>{`
        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,102,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,102,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .data-flow {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .data-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00aaff;
          border-radius: 50%;
          box-shadow: 0 0 12px 2px rgba(0, 102, 255, 0.8);
          animation: dataFlow linear infinite;
          will-change: transform;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes dataFlow {
          0% { 
            transform: translateY(-10px) scale(0.5);
            opacity: 1;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .data-particle {
            animation-duration: 12s !important;
          }
          .grid-background {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  )
})

export default Hero
