"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Aguarda o DOM estar completamente carregado
    const timer = setTimeout(() => {
      // Força re-render após carregamento
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Aguarda um pouco para garantir que o DOM está pronto
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80 // altura do header fixo
        const elementPosition = element.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      } else {
        console.warn(`Elemento com ID "${sectionId}" não encontrado`)
      }
    }, 100)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Ocean-net</h1>
              <p className="text-xs text-gray-400">IEMA Pleno Brejo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("projeto")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Projeto
            </button>
            <button
              onClick={() => scrollToSection("colaboradores")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Colaboradores
            </button>
            <button
              onClick={() => scrollToSection("estudantes")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection("materiais")}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Materiais
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("projeto")}
                className="text-left text-gray-300 hover:text-white transition-colors font-medium"
              >
                Projeto
              </button>
              <button
                onClick={() => scrollToSection("colaboradores")}
                className="text-left text-gray-300 hover:text-white transition-colors font-medium"
              >
                Colaboradores
              </button>
              <button
                onClick={() => scrollToSection("estudantes")}
                className="text-left text-gray-300 hover:text-white transition-colors font-medium"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection("programacao")}
                className="text-left text-gray-300 hover:text-white transition-colors font-medium"
              >
                Programação
              </button>
              <button
                onClick={() => scrollToSection("materiais")}
                className="text-left text-gray-300 hover:text-white transition-colors font-medium"
              >
                Materiais
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
