"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function MaquetteGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [showLightbox, setShowLightbox] = useState(false)
  const [activeSection, setActiveSection] = useState("all")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const sections = [
    {
      id: "all",
      title: "Todas as Imagens",
      description: "Visualização completa do projeto",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: "overview",
      title: "Visão Geral",
      description: "Vistas panorâmicas da maquete",
      color: "from-green-600 to-blue-600",
    },
    {
      id: "details",
      title: "Detalhes",
      description: "Componentes específicos",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: "electronics",
      title: "Eletrônica",
      description: "Circuitos e Arduino",
      color: "from-yellow-600 to-orange-600",
    },
    {
      id: "process",
      title: "Processo",
      description: "Etapas de construção",
      color: "from-red-600 to-purple-600",
    },
  ]

  const allImages = [
    {
      src: "/images/Visão_Geral.jpeg",
      alt: "Vista completa da maquete Ocean-net com iluminação LED azul",
      title: "Vista Geral da Maquete",
      description:
        "Maquete completa mostrando turbinas eólicas, estruturas submarinas e sistema de iluminação LED azul simulando o oceano",
      section: "overview",
    },
    {
      src: "/images/Visão_Geral_3.jpeg",
      alt: "Vista alternativa da maquete Ocean-net",
      title: "Vista Geral Alternativa",
      description:
        "Perspectiva diferente da maquete mostrando detalhes da estrutura e componentes eletrônicos integrados",
      section: "overview",
    },
    {
      src: "/images/Detalhes_1.jpeg",
      alt: "Detalhes dos componentes da maquete Ocean-net",
      title: "Detalhes dos Componentes",
      description: "Visualização detalhada dos componentes eletrônicos, LEDs e estruturas em miniatura da maquete",
      section: "details",
    },
    {
      src: "/images/Detalhes_2.jpeg",
      alt: "Detalhes adicionais da estrutura da maquete",
      title: "Detalhes da Estrutura",
      description: "Componentes específicos da maquete mostrando a integração entre materiais recicláveis e tecnologia",
      section: "details",
    },
    {
      src: "/images/Eletrônica_1.jpeg",
      alt: "José Roberto trabalhando com componentes eletrônicos e Arduino",
      title: "Desenvolvimento Eletrônico",
      description:
        "José Roberto concentrado no processo de programação e montagem dos circuitos Arduino com LEDs funcionando",
      section: "electronics",
    },
    {
      src: "/images/Eletrônica_2.jpeg",
      alt: "Bancada de trabalho com laptop, Arduino e componentes eletrônicos",
      title: "Setup de Programação",
      description:
        "Ambiente completo de desenvolvimento com laptop, Arduino com LEDs acesos, componentes organizados e setup ativo",
      section: "electronics",
    },
    {
      src: "/images/Eletrônica_3.jpeg",
      alt: "Componentes eletrônicos adicionais do projeto",
      title: "Componentes Eletrônicos",
      description:
        "Detalhes dos componentes eletrônicos utilizados no projeto, incluindo sensores e módulos de controle",
      section: "electronics",
    },
    {
      src: "/images/Construção.jpeg",
      alt: "Processo de construção da maquete",
      title: "Processo de Construção",
      description: "Etapa de construção da maquete mostrando a montagem da estrutura com materiais recicláveis",
      section: "process",
    },
    {
      src: "/images/Processo_1.jpeg",
      alt: "Estudantes trabalhando na construção da maquete",
      title: "Trabalho em Equipe",
      description: "Estudantes colaborando na montagem da maquete com materiais como papelão, EVA e ferramentas",
      section: "process",
    },
    {
      src: "/images/Processo_2.jpeg",
      alt: "José Roberto examinando estrutura em miniatura da maquete",
      title: "Detalhamento de Componentes",
      description: "Análise detalhada e construção cuidadosa dos componentes em miniatura da maquete",
      section: "process",
    },
    {
      src: "/images/Processo_3.jpeg",
      alt: "Etapa adicional do processo de construção",
      title: "Finalização da Estrutura",
      description: "Etapas finais de montagem e ajustes da estrutura da maquete Ocean-net",
      section: "process",
    },
    {
      src: "/images/Testes.jpeg",
      alt: "Testes dos componentes eletrônicos da maquete",
      title: "Testes e Validação",
      description: "Processo de testes dos componentes eletrônicos e validação do funcionamento da maquete",
      section: "process",
    },
  ]

  const filteredImages = activeSection === "all" ? allImages : allImages.filter((img) => img.section === activeSection)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  const openLightbox = () => {
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && filteredImages.length > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlay, filteredImages.length, activeIndex])

  // Reset active index when section changes
  useEffect(() => {
    setActiveIndex(0)
  }, [activeSection])

  if (filteredImages.length === 0) return null

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-aqua-subtle title-glow-subtle">
            Galeria da Maquete
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore nossa maquete Ocean-net através de imagens reais do processo de desenvolvimento e resultado final.
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="relative mb-6">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
            {/* Main Image */}
            <div className="relative w-full h-full">
              <Image
                src={filteredImages[activeIndex]?.src || "/placeholder.svg"}
                alt={filteredImages[activeIndex]?.alt || ""}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold text-white mb-3">{filteredImages[activeIndex]?.title}</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">{filteredImages[activeIndex]?.description}</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <span className="text-blue-400 text-sm px-3 py-1 bg-blue-900/50 rounded-full border border-blue-800/50">
                      {sections.find((s) => s.id === filteredImages[activeIndex]?.section)?.title}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {activeIndex + 1} de {filteredImages.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Zoom Button */}
              <button
                onClick={openLightbox}
                className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors border border-white/20"
              >
                <ZoomIn className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Navigation Arrows */}
            {filteredImages.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 rounded-full"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 rounded-full"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </Button>
              </>
            )}
          </div>

          {/* Auto-play Control */}
          {filteredImages.length > 1 && (
            <div className="absolute top-6 left-6">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAutoPlay}
                className="bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
              >
                {isAutoPlay ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isAutoPlay ? "Pausar" : "Reproduzir"}
              </Button>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {filteredImages.length > 1 && (
          <div className="mb-6">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: `${((activeIndex + 1) / filteredImages.length) * 100}%`,
                }}
              ></div>
            </div>
            {isAutoPlay && (
              <div className="flex justify-center mt-2">
                <span className="text-xs text-gray-400">
                  Auto-play ativo - {activeIndex + 1}/{filteredImages.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Section Selector */}
        <div className="mb-12 hidden md:block">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "group relative px-6 py-4 rounded-2xl border transition-all duration-300 transform hover:scale-105",
                  activeSection === section.id
                    ? "border-blue-500 bg-blue-900/30 shadow-lg shadow-blue-900/20"
                    : "border-gray-800 bg-gray-900/50 hover:border-gray-600",
                )}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-1">{section.title}</h3>
                  <p className="text-sm text-gray-400">{section.description}</p>
                  <div className="text-xs text-blue-400 mt-1">
                    {section.id === "all"
                      ? `${allImages.length} imagens`
                      : `${allImages.filter((img) => img.section === section.id).length} imagens`}
                  </div>
                </div>
                {activeSection === section.id && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${section.color} opacity-10`}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {showLightbox && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl max-h-[90vh]">
              <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden">
                <Image
                  src={filteredImages[activeIndex]?.src || "/placeholder.svg"}
                  alt={filteredImages[activeIndex]?.alt || ""}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-white mb-2">{filteredImages[activeIndex]?.title}</h3>
                <p className="text-gray-300">{filteredImages[activeIndex]?.description}</p>
              </div>

              <Button
                variant="outline"
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-0 hover:bg-black/70"
                onClick={closeLightbox}
              >
                Fechar
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .reveal-animation {
          opacity: 0;
          transform: translateY(20px);
          animation: reveal 0.8s ease-out forwards;
        }

        @keyframes reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
