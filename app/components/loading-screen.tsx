"use client"

import { memo } from "react"

const LoadingScreen = memo(function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo - Raio */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/50">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Ocean-net</h1>
          <p className="text-blue-400 text-base mb-2">Conexões Eólicas Sustentáveis</p>
          <p className="text-gray-400 text-sm">IEMA Pleno Brejo</p>
        </div>

        {/* Barra de carregamento */}
        <div className="loading-container">
          <div className="loading-bar">
            <div className="loading-fill"></div>
          </div>
          <p className="text-gray-400 mt-4 text-sm">Carregando projeto...</p>
        </div>
      </div>

      <style jsx>{`
        .loading-container {
          width: 200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .loading-bar {
          width: 100%;
          height: 3px;
          background: #1f2937;
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-fill {
          height: 100%;
          background: linear-gradient(90deg, #0066ff, #00ccff);
          border-radius: 2px;
          animation: loadingProgress 2s ease-out forwards;
          width: 0%;
        }

        @keyframes loadingProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
})

export default LoadingScreen
