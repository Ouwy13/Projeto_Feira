"use client"

import { Zap, Mail, MessageCircle } from "lucide-react"

/**
 * Footer - Componente de rodapé do site
 *
 * Exibe informações sobre o projeto, desenvolvedor principal,
 * contatos e objetivos de desenvolvimento sustentável.
 * Usa layout responsivo com grid para organizar as informações.
 */
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo e Descrição do Projeto */}
        <div className="text-center mb-12">
          {/* Logo com ícone de raio */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              {/* Nome do projeto com efeito de reflexo oceânico */}
              <h3 className="text-xl font-bold title-ocean-subtle">Ocean-net</h3>
              <p className="text-gray-500 text-xs">Conexões Eólicas Sustentáveis</p>
            </div>
          </div>
          {/* Descrição resumida do projeto */}
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Projeto desenvolvido pela Turma 204 do IEMA Pleno Brejo, demonstrando como a tecnologia pode promover
            sustentabilidade e inclusão digital no litoral maranhense.
          </p>
        </div>

        {/* Grid de 3 colunas com informações principais */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1: Desenvolvedor Principal */}
          <div className="text-center space-y-4">
            {/* Título da seção com efeito de reflexo tecnológico */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white title-tech-subtle">Desenvolvedor Principal</h4>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
            </div>

            {/* Informações do desenvolvedor */}
            <div className="space-y-3">
              <h5 className="text-xl font-bold text-white">José Roberto</h5>
              <div className="space-y-1">
                <p className="text-blue-400 text-sm font-medium">Técnico em Informática para Internet</p>
                <p className="text-gray-500 text-xs">Análise e Desenvolvimento de Sistemas</p>
              </div>
            </div>

            {/* Links para redes sociais com efeitos de hover */}
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/jos_fx777/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                Instagram
                <div className="w-0 group-hover/link:w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 mt-1"></div>
              </a>
              <a
                href="https://www.tiktok.com/@jos.fxp7?_t=ZM-8wdRQrunOdE&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                TikTok
                <div className="w-0 group-hover/link:w-full h-px bg-white transition-all duration-300 mt-1"></div>
              </a>
            </div>
          </div>

          {/* Coluna 2: Informações de Contato */}
          <div className="text-center space-y-4">
            {/* Título da seção com efeito de reflexo aquático */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white title-aqua-subtle">Entre em Contato</h4>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </div>

            {/* Botões de contato com efeitos de hover */}
            <div className="space-y-3">
              {/* Link para email com parâmetros pré-definidos */}
              <a
                href="mailto:jr3303361587@hotmail.com?subject=Contato sobre o projeto Ocean-net&body=Olá José Roberto, gostaria de saber mais sobre o projeto Ocean-net..."
                className="group/contact flex items-center justify-center space-x-3 py-3 px-4 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/50"
              >
                <Mail className="h-5 w-5 transition-transform group-hover/contact:scale-110" />
                <span className="text-sm font-medium">Email</span>
              </a>

              {/* Link para WhatsApp com mensagem pré-definida */}
              <a
                href="https://wa.me/5598970278100?text=Olá José Roberto! Gostaria de saber mais sobre o projeto Ocean-net."
                target="_blank"
                rel="noopener noreferrer"
                className="group/contact flex items-center justify-center space-x-3 py-3 px-4 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/50"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover/contact:scale-110" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 3: Objetivos de Desenvolvimento Sustentável */}
          <div className="text-center space-y-4">
            {/* Título da seção com efeito de reflexo energético */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white title-energy-subtle">
                Objetivos de Desenvolvimento Sustentável
              </h4>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
            </div>

            {/* Ícones dos ODS com efeitos de hover */}
            <div className="flex justify-center items-center gap-6">
              {/* ODS 9: Indústria, Inovação e Infraestrutura */}
              <div className="text-center group/ods">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl group-hover/ods:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                  9
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  Inovação e<br />
                  Infraestrutura
                </p>
              </div>
              {/* ODS 12: Consumo e Produção Responsáveis */}
              <div className="text-center group/ods">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl group-hover/ods:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                  12
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  Consumo
                  <br />
                  Responsável
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé com informações de copyright */}
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
