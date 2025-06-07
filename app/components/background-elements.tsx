"use client"

import { memo } from "react"

const BackgroundElements = memo(function BackgroundElements() {
  return (
    <div className="background-elements">
      {/* Elementos temáticos caindo - Reduzido para melhor performance */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="bg-element"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        >
          {i % 4 === 0 ? (
            // Turbina eólica
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12L12 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12L18 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12L6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : i % 4 === 1 ? (
            // Símbolo de energia (raio)
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : i % 4 === 2 ? (
            // Símbolo de conectividade
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 13.5C9.88071 13.5 11 12.3807 11 11C11 9.61929 9.88071 8.5 8.5 8.5C7.11929 8.5 6 9.61929 6 11C6 12.3807 7.11929 13.5 8.5 13.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11L13 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Símbolo de oceano/ondas
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 10C5.5 10 5.5 14 8 14C10.5 14 10.5 10 13 10C15.5 10 15.5 14 18 14C20.5 14 20.5 10 22 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ))}

      <style jsx>{`
        .background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .bg-element {
          position: absolute;
          top: -30px;
          color: rgba(59, 130, 246, 0.8);
          animation: fall linear infinite;
          will-change: transform;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .bg-element {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </div>
  )
})

export default BackgroundElements
