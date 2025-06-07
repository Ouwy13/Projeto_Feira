"use client"

import { useEffect, useRef } from "react"
import { Cable, Wind, Recycle, Globe, Zap } from "lucide-react"
import BackgroundElements from "./background-elements"

export default function ProjectSection() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])
  const objectiveRefs = useRef<(HTMLDivElement | null)[]>([])

  const features = [
    {
      icon: <Cable className="h-8 w-8 text-blue-500" />,
      title: "Cabos Submarinos",
      description:
        "Estruturas de fibra óptica que transportam dados entre continentes, essenciais para a internet global.",
    },
    {
      icon: <Wind className="h-8 w-8 text-green-500" />,
      title: "Energia Eólica Offshore",
      description: "Energia limpa e renovável gerada pela força dos ventos no mar, ideal para o litoral maranhense.",
    },
    {
      icon: <Recycle className="h-8 w-8 text-purple-500" />,
      title: "Materiais Sustentáveis",
      description: "Construção com materiais recicláveis: EVA, papelão, compensado e componentes eletrônicos.",
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-500" />,
      title: "Inclusão Digital",
      description: "Promovendo conectividade em comunidades remotas com responsabilidade socioambiental.",
    },
  ]

  const objectives = [
    "Mostrar a viabilidade de soluções sustentáveis para conectividade",
    "Promover consciência ambiental e reaproveitamento de materiais",
    "Valorizar as potencialidades naturais dos litoral Maranhense",
    "Demonstrar o papel da tecnologia como agente transformador",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    objectiveRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      objectiveRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="projeto" className="py-20 px-4 bg-black relative">
      <BackgroundElements />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-900/50">
            <Zap className="h-4 w-4" />
            <span>Projeto Ocean-net</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-ocean-subtle title-glow-subtle">
            Conexões Eólicas Sustentáveis
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Uma maquete representando uma estação de redes de internet auto sustentável, idealizada para o litoral do
            Maranhão, unindo tecnologia e sustentabilidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 rounded-3xl p-8 text-center border border-gray-800 hover:border-blue-900/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20 h-full">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Justificativa */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800 mb-20 reveal-animation">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center title-crystal-subtle">Justificativa do Projeto</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-300" />
                  </div>
                  <h4 className="text-xl font-semibold">ODS 9 e 12</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Alinhado aos Objetivos de Desenvolvimento Sustentável, promovendo inovação tecnológica sustentável e
                  uso consciente de recursos.
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center">
                    <Wind className="h-6 w-6 text-green-300" />
                  </div>
                  <h4 className="text-xl font-semibold">Potencial Maranhense</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  O litoral do Maranhão apresenta grande potencial para energias renováveis e enfrenta desafios de
                  conectividade digital.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        <div className="bg-gray-900 rounded-3xl p-12 border border-gray-800 reveal-animation">
          <h3 className="text-3xl font-bold mb-8 text-center title-pearl-subtle">Objetivos do Projeto</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                ref={(el) => (objectiveRefs.current[index] = el)}
                className="opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
