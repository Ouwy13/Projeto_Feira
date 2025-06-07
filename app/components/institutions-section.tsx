"use client"

import { useEffect, useRef } from "react"
import { Cpu, Recycle, Zap, Settings } from "lucide-react"

export default function MaterialsSection() {
  const techRefs = useRef<(HTMLDivElement | null)[]>([])
  const specRefs = useRef<(HTMLDivElement | null)[]>([])

  const technologies = [
    {
      name: "Arduino e Eletrônicos",
      category: "Componentes Tecnológicos",
      description: "Microcontrolador Arduino, LEDs RGB, mini ventiladores e bateria de lítio para automação.",
      icon: <Cpu className="h-12 w-12 text-blue-500" />,
      items: ["Arduino Uno", "Fitas LED RGB", "Mini ventiladores", "Bateria de lítio", "Cabos de rede"],
    },
    {
      name: "Materiais Sustentáveis",
      category: "Componentes Recicláveis",
      description: "Materiais reutilizados e recicláveis para construção da estrutura da maquete.",
      icon: <Recycle className="h-12 w-12 text-green-500" />,
      items: ["EVA colorido", "Papelão estrutural", "Compensado", "Palitos de madeira", "Tampinhas plásticas"],
    },
    {
      name: "Sistema de Energia",
      category: "Simulação Energética",
      description: "Representação visual do sistema de energia eólica offshore e transmissão de dados.",
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      items: [
        "Turbinas em miniatura",
        "Sistema de iluminação",
        "Cabos simulados",
        "Base oceânica",
        "Indicadores visuais",
      ],
    },
    {
      name: "Ferramentas e Montagem",
      category: "Processo Construtivo",
      description: "Ferramentas e técnicas utilizadas na construção e montagem da maquete funcional.",
      icon: <Settings className="h-12 w-12 text-purple-500" />,
      items: ["Cola quente", "Furadeira", "Estilete", "Réguas e esquadros", "Tintas e acabamentos"],
    },
  ]

  const specifications = [
    { label: "Dimensões da Maquete", value: "60cm x 40cm x 30cm" },
    { label: "Voltagem do Sistema", value: "5V DC (Arduino)" },
    { label: "Autonomia da Bateria", value: "4-6 horas contínuas" },
    { label: "LEDs Utilizados", value: "20 unidades RGB" },
    { label: "Materiais Recicláveis", value: "85% do total" },
    { label: "Tempo de Construção", value: "3 meses" },
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

    techRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    specRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      techRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      specRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="materiais" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-900/50">
            <Settings className="h-4 w-4" />
            <span>Materiais e Tecnologias</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-tech-subtle title-glow-subtle">
            Componentes do Projeto
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Combinação estratégica de materiais recicláveis e tecnologias modernas para criar uma representação
            funcional e sustentável.
          </p>
        </div>

        {/* Grid de Tecnologias */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              ref={(el) => (techRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-900/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20 h-full">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                      {tech.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="inline-block bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-xs font-medium mb-2 border border-blue-900/50">
                        {tech.category}
                      </span>
                      <h3 className="text-2xl font-bold">{tech.name}</h3>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-3">Componentes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Especificações Técnicas */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800 mb-16">
          <div className="text-center mb-12 reveal-animation">
            <h3 className="text-3xl font-bold mb-4 title-pearl-subtle">Especificações Técnicas</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Detalhes técnicos e dimensões da maquete Ocean-net, demonstrando a precisão e funcionalidade do projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div
                key={index}
                ref={(el) => (specRefs.current[index] = el)}
                className="opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2">
                  <h4 className="text-lg font-semibold mb-2 text-gray-300">{spec.label}</h4>
                  <p className="text-2xl font-bold text-blue-400">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Processo de Construção */}
        <div className="bg-gray-900 rounded-3xl p-12 border border-gray-800 reveal-animation">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 title-lunar-subtle">Processo de Construção</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A construção da maquete seguiu metodologia científica rigorosa, priorizando sustentabilidade e
              funcionalidade.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold mb-2">Planejamento</h4>
              <p className="text-gray-400 text-sm">Definição de materiais e estrutura do projeto</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold mb-2">Construção</h4>
              <p className="text-gray-400 text-sm">Montagem da estrutura com materiais recicláveis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold mb-2">Eletrônica</h4>
              <p className="text-gray-400 text-sm">Integração dos componentes eletrônicos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h4 className="font-semibold mb-2">Testes</h4>
              <p className="text-gray-400 text-sm">Validação e ajustes finais do sistema</p>
            </div>
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
