"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { GraduationCap, Users } from "lucide-react"

export default function CollaboratorsSection() {
  const professorRefs = useRef<(HTMLDivElement | null)[]>([])
  const platformRefs = useRef<(HTMLDivElement | null)[]>([])

  const professors = [
    {
      name: "Jasmine Fernandes",
      role: "Orientadora Principal",
      specialty: "Professora de Matemática",
      image: "/images/Jasmine.jpeg",
      description:
        "Especialista em Ensino de Matemática e tutora da sala. Responsável pela organização e orientação do projeto.",
    },
    {
      name: "Aurio Oliveira",
      role: "Co-orientador",
      specialty: "Professor de Informática",
      image: "/images/Aurio.png",
      description: "Bacharel em Ciência da Computação. Contribuiu com instalações técnicas.",
    },
    {
      name: "Kátia Assunção",
      role: "Colaboradora",
      specialty: "Professora de Robótica e Física",
      image: "/images/Kátia.png",
      description: "Colaboradora do projeto e patrocinadora dos componentes Arduino utilizados na maquete.",
    },
    {
      name: "Wêslen",
      role: "Colaborador",
      specialty: "Engenheiro de Computação",
      image: "/images/Wêslen.jpeg",
      description: "Técnico em TI, patrocinador de peças de Arduino e suporte técnico especializado para o projeto.",
    },
  ]

  const platforms = [
    { name: "Curso 1MIO", description: "Plataforma de apoio educacional" },
    { name: "Programação em Arduino", description: "Recursos para desenvolvimento eletrônico" },
    { name: "Roblox Studio", description: "Plataforma de esboço do projeto" },
    { name: "Visual Studio Code", description: "Editor de código para desenvolvimento" },
    { name: "Vercel", description: "Plataforma de deploy e hospedagem" },
    { name: "Canva", description: "Ferramenta de design e apresentações" },
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

    professorRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    platformRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      professorRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      platformRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="colaboradores" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-900/50">
            <Users className="h-4 w-4" />
            <span>Equipe de Orientação</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-tech-subtle title-glow-subtle">
            Nossos Colaboradores
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professores e plataformas que apoiam e orientam o desenvolvimento do projeto Ocean-net.
          </p>
        </div>

        {/* Professores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {professors.map((professor, index) => (
            <div
              key={index}
              ref={(el) => (professorRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-full mx-auto mt-8 w-40 h-40 border-4 border-gray-800">
                    <Image
                      src={professor.image || "/placeholder.svg"}
                      alt={professor.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-900/70 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-800/50">
                    {professor.role}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{professor.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{professor.specialty}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{professor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Plataformas de Apoio */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800">
          <div className="text-center mb-12 reveal-animation">
            <h3 className="text-3xl font-bold mb-4 title-lunar-subtle">Plataformas de Apoio</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recursos e ferramentas que contribuíram para o desenvolvimento e execução do projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                ref={(el) => (platformRefs.current[index] = el)}
                className="opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-900/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{platform.name}</h4>
                  <p className="text-gray-400 text-sm">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IEMA Info */}
        <div className="mt-16 text-center bg-gray-900 rounded-3xl p-12 border border-gray-800 reveal-animation">
          <h3 className="text-2xl font-bold mb-4">IEMA Pleno Brejo</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            O projeto foi desenvolvido pela Turma 204 do curso Técnico em Informática para Internet, demonstrando a
            excelência educacional e o compromisso com a inovação tecnológica sustentável da instituição.
          </p>
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
