"use client"

import { Zap, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo e Descrição */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Ocean-net</h3>
              <p className="text-gray-500 text-xs">Conexões Eólicas Sustentáveis</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Projeto desenvolvido pela Turma 204 do IEMA Pleno Brejo, demonstrando como a tecnologia pode promover
            sustentabilidade e inclusão digital no litoral maranhense.
          </p>
        </div>

        {/* Três Colunas Lado a Lado */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Desenvolvedor Principal */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white title-tech-subtle">Desenvolvedor Principal</h4>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
            </div>

            <div className="space-y-3">
              <h5 className="text-xl font-bold text-white">José Roberto</h5>
              <div className="space-y-1">
                <p className="text-blue-400 text-sm font-medium">Técnico em Informática para Internet</p>
                <p className="text-gray-500 text-xs">Análise e Desenvolvimento de Sistemas</p>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://www.instagram.com/jos_fx777/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Instagram
                <div className="w-0 group-hover/link:w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 mt-1"></div>
              </a>
              <a
                href="https://www.tiktok.com/@jos.fxp7?_t=ZM-8wdRQrunOdE&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                TikTok
                <div className="w-0 group-hover/link:w-full h-px bg-white transition-all duration-300 mt-1"></div>
              </a>
            </div>
          </div>

          {/* Entre em Contato */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white title-ocean-subtle">Entre em Contato</h4>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:jr3303361587@hotmail.com?subject=Contato sobre o projeto Ocean-net&body=Olá José Roberto, gostaria de saber mais sobre o projeto Ocean-net..."
                className="group/contact flex items-center justify-center space-x-3 py-2 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Mail className="h-4 w-4 transition-transform group-hover/contact:scale-110" />
                <span className="text-sm font-medium">Email</span>
              </a>

              <a
                href="https://wa.me/5598970278100?text=Olá José Roberto! Gostaria de saber mais sobre o projeto Ocean-net."
                target="_blank"
                rel="noopener noreferrer"
                className="group/contact flex items-center justify-center space-x-3 py-2 text-gray-400 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover/contact:scale-110" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* ODS */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white title-pearl-subtle">
                Objetivos de Desenvolvimento Sustentável
              </h4>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
            </div>

            <div className="flex justify-center items-center gap-8">
              <div className="text-center group/ods">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl group-hover/ods:scale-110 transition-all duration-300 shadow-lg">
                  9
                </div>
                <p className="text-xs text-gray-400 font-medium">Inovação e Infraestrutura</p>
              </div>
              <div className="text-center group/ods">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl group-hover/ods:scale-110 transition-all duration-300 shadow-lg">
                  12
                </div>
                <p className="text-xs text-gray-400 font-medium">Consumo Responsável</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-2 md:space-y-0">
            <p className="text-gray-500 text-xs font-medium">
              © 2025 Ocean-net. Projeto educacional - IEMA Pleno Brejo.
            </p>
            <p className="text-gray-500 text-xs font-medium">Feira de Ciências 2025 - Belezas Oceânicas</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
