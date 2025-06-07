"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Code, Lightbulb, Recycle, Award, Target, Clock, Trophy, Expand, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentsSection() {
  const studentRefs = useRef<(HTMLDivElement | null)[]>([])
  const statRefs = useRef<(HTMLDivElement | null)[]>([])
  const materialRefs = useRef<(HTMLDivElement | null)[]>([])
  const classPhotoRef = useRef<HTMLDivElement | null>(null)
  const [showFullImage, setShowFullImage] = useState(false)

  const students = [
    {
      name: "José Roberto",
      role: "Líder do Projeto",
      specialty: "Desenvolvedor Principal",
      image: "/images/José.jpeg",
      contributions: [
        "<span class='flex items-center text-sm text-gray-400'><div class='w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0'></div><span class='text-cyan-400'>🧑‍💻</span> Programação de componentes</span>",
        "<span class='flex items-center text-sm text-gray-400'><div class='w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0'></div><span class='text-cyan-400'>⚡</span> Integração de sistemas</span>",
        "<span class='flex items-center text-sm text-gray-400'><div class='w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0'></div><span class='text-cyan-400'>🎨</span> Design da estrutura</span>",
        "<span class='flex items-center text-sm text-gray-400'><div class='w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0'></div><span class='text-cyan-400'>🔧</span> Montagem da maquete</span>",
      ],
    },
    {
      name: "Erika Maria",
      role: "Pesquisadora",
      specialty: "Apresentação",
      image: "/images/Erika.png",
      contributions: ["Preparação de apresentações", "Documentação do projeto", "Contribuição na pesquisa"],
    },
    {
      name: "João Pedro",
      role: "Decoração",
      specialty: "Sala Temática",
      image: "/images/João.png",
      contributions: ["Pesquisa do Tema", "Decoração da Sala", "Lembrancinhas"],
    },
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "24", label: "Estudantes da Turma 204" },
    { icon: <Clock className="h-8 w-8" />, number: "2", label: "Meses de Desenvolvimento" },
    { icon: <Target className="h-8 w-8" />, number: "2", label: "ODS Contemplados pelo projeto" },
    { icon: <Trophy className="h-8 w-8" />, number: "2", label: "Projetos Inovadores" },
  ]

  const materials = [
    {
      category: "Recicláveis",
      items: ["EVA", "Papelão", "Compensado", "Palitos", "Tampinhas", "Tubos de papel alumínio"],
    },
    {
      category: "Tecnológicos",
      items: ["Fitas LED RGB", "Mini ventiladores", "Bateria de lítio", "Arduino", "Cabos de rede"],
    },
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

    studentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    materialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    if (classPhotoRef.current) {
      observer.observe(classPhotoRef.current)
    }

    return () => {
      studentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      statRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      materialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      if (classPhotoRef.current) {
        observer.unobserve(classPhotoRef.current)
      }
    }
  }, [])

  return (
    <section id="estudantes" className="py-20 px-4 bg-black w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-900/50">
            <Users className="h-4 w-4" />
            <span>Turma 204</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-metal-subtle title-glow-subtle">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estudantes do curso Técnico em Informática para Internet do IEMA Pleno Brejo, unidos pela paixão por
            tecnologia e sustentabilidade.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="flex justify-center mb-4 text-blue-500">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Perfis dos Estudantes Principais */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {students.map((student, index) => (
            <div
              key={index}
              ref={(el) => (studentRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-full mx-auto mt-8 w-40 h-40 border-4 border-gray-800">
                    <Image
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-900/70 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-800/50">
                    {student.role}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{student.specialty}</p>
                  <div className="space-y-2">
                    {student.contributions.map((contribution, idx) => (
                      <div key={idx} className="text-left">
                        {student.name === "José Roberto" ? (
                          <div dangerouslySetInnerHTML={{ __html: contribution }} />
                        ) : (
                          <div className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
                            {contribution}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Foto da Turma */}
        <div ref={classPhotoRef} className="mb-16 opacity-0 transform translate-y-10">
          <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Turma 204 - IEMA Pleno Brejo</h3>
              <Button
                onClick={() => setShowFullImage(true)}
                variant="outline"
                size="sm"
                className="bg-blue-900/30 border-blue-800 text-blue-400 hover:bg-blue-900/50 hover:border-blue-700"
              >
                <Expand className="h-4 w-4 mr-2" />
                Ver Imagem Completa
              </Button>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image src="/images/turma.jpeg" alt="Turma 204 do IEMA Pleno Brejo" fill className="object-cover" />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Estudantes do curso Técnico em Informática para Internet unidos no desenvolvimento do projeto Ocean-net
            </p>
          </div>
        </div>

        {/* Modal da Imagem Completa */}
        {showFullImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative w-full max-w-7xl max-h-[90vh]">
              <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/turma.jpeg"
                    alt="Turma 204 do IEMA Pleno Brejo - Imagem Completa"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Turma 204 - IEMA Pleno Brejo</h3>
                <p className="text-gray-300">
                  Estudantes do curso Técnico em Informática para Internet unidos no desenvolvimento do projeto
                  Ocean-net
                </p>
              </div>

              <Button
                variant="outline"
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-gray-600 hover:bg-black/70"
                onClick={() => setShowFullImage(false)}
              >
                <X className="h-4 w-4 mr-2" />
                Fechar
              </Button>
            </div>
          </div>
        )}

        {/* Metodologia e Materiais */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800 mb-16">
          <div className="text-center mb-12 reveal-animation">
            <h3 className="text-3xl font-bold mb-4 title-diamond-subtle">Metodologia e Materiais</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A construção da maquete utilizou uma combinação estratégica de materiais recicláveis e componentes
              tecnológicos para representar fielmente o conceito do projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {materials.map((material, index) => (
              <div
                key={index}
                ref={(el) => (materialRefs.current[index] = el)}
                className="opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      {index === 0 ? <Recycle className="h-6 w-6" /> : <Code className="h-6 w-6" />}
                    </div>
                    <h4 className="text-2xl font-semibold">{material.category}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {material.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/50 rounded-lg p-3 text-center text-sm text-gray-300 border border-gray-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resultados e Conclusões */}
        <div className="bg-gray-900 rounded-3xl p-12 border border-gray-800 reveal-animation">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 title-holo-subtle">Resultados e Conclusões</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Viabilidade Comprovada</h4>
              <p className="text-gray-400">
                Demonstração da viabilidade de soluções sustentáveis e de baixo custo para desafios reais.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Consciência Ambiental</h4>
              <p className="text-gray-400">
                Uso de materiais recicláveis demonstra que é possível inovar sem agredir o meio ambiente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Impacto Educativo</h4>
              <p className="text-gray-400">
                Despertar da reflexão sobre responsabilidade socioambiental e inovação social.
              </p>
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
