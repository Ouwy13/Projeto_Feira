"use client"

import { useEffect, useRef, memo } from "react"
import { ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"

// Carregamento dinâmico do BackgroundElements para melhor performance
// Isso evita que o componente de fundo seja renderizado no servidor
const BackgroundElements = dynamic(() => import("./background-elements"), {
  ssr: false, // Desativa Server-Side Rendering para este componente
  loading: () => null, // Não mostra nada durante o carregamento
})

// Componente Hero memoizado para evitar re-renderizações desnecessárias
const Hero = memo(function Hero() {
  // Refs para acessar elementos DOM diretamente para animações
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Função para rolar suavemente até a seção de projeto
  const scrollToProject = () => {
    const element = document.getElementById("projeto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Efeito para animar a entrada dos elementos com delays escalonados
  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 }, // Título principal aparece primeiro
      { ref: subtitleRef, delay: 200 }, // Subtítulo aparece 200ms depois
      { ref: descriptionRef, delay: 400 }, // Descrição aparece 400ms depois
      { ref: buttonRef, delay: 600 }, // Botão aparece 600ms depois
    ]

    // Adiciona a classe de animação para cada elemento após seu delay
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add("animate-fade-in")
        }, delay)
      }
    })
  }, []) // Executa apenas na montagem do componente

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background com efeitos visuais */}
      <div className="absolute inset-0">
        {/* Grade de fundo com animação */}
        <div className="grid-background"></div>
        {/* Elementos de fundo animados */}
        <BackgroundElements />
        {/* Partículas simulando fluxo de dados */}
        <div className="data-flow">
          {/* Gera 10 partículas com posições e animações aleatórias */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="data-particle"
              style={{
                left: `${Math.random() * 100}%`, // Posição horizontal aleatória
                animationDelay: `${Math.random() * 5}s`, // Delay aleatório
                animationDuration: `${5 + Math.random() * 10}s`, // Duração aleatória
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Conteúdo principal do Hero */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge de identificação da turma */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-md rounded-full text-sm font-medium text-blue-300 border border-blue-900/50 mb-4">
            IEMA Pleno Brejo - Turma 204
          </span>
        </div>

        {/* Título principal com animação de entrada e efeito de reflexo */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight opacity-0 transform translate-y-10 title-ocean-net-special"
        >
          Ocean-net
        </h1>

        {/* Subtítulo com animação de entrada e efeito de reflexo */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-4 font-light opacity-0 transform translate-y-10 title-ocean-subtle"
        >
          Conexões Eólicas Sustentáveis
        </p>

        {/* Descrição do projeto com animação de entrada */}
        <p
          ref={descriptionRef}
          className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 transform translate-y-10"
        >
          Uma estação de redes de internet auto sustentável para o litoral do Maranhão, unindo tecnologia,
          sustentabilidade e inclusão digital
        </p>

        {/* Botão de ação e indicadores */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Botão principal com gradiente e animação de hover */}
          <button
            ref={buttonRef}
            onClick={scrollToProject}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-10"
          >
            Explorar Projeto
          </button>
          {/* Indicadores de características do projeto */}
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

      {/* Seta animada indicando scroll para baixo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>

      {/* Estilos específicos para animações e efeitos visuais */}
      <style jsx>{`
        /* Grade de fundo com linhas sutis */
        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,102,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,102,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite; /* Animação de movimento da grade */
        }

        /* Container para partículas de dados */
        .data-flow {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        /* Partículas individuais simulando fluxo de dados */
        .data-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00aaff;
          border-radius: 50%;
          box-shadow: 0 0 12px 2px rgba(0, 102, 255, 0.8);
          animation: dataFlow linear infinite;
          will-change: transform; /* Otimização para animações */
        }

        /* Animação de movimento da grade de fundo */
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Animação de fluxo das partículas de dados */
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

        /* Animação de entrada para elementos */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Ajustes para dispositivos móveis */
        @media (max-width: 768px) {
          .data-particle {
            animation-duration: 12s !important; /* Animação mais lenta em mobile */
          }
          .grid-background {
            animation-duration: 30s; /* Movimento mais lento em mobile */
          }
          
          /* Manter velocidade consistente das animações de reflexo dos títulos */
          .title-ocean-subtle {
            animation-duration: 8s !important; /* Velocidade consistente */
          }
          
          .title-glow-subtle {
            animation-duration: 8s !important; /* Velocidade consistente */
          }
        }
      `}</style>
    </section>
  )
})

export default Hero
