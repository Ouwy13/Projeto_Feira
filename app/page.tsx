"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import LoadingScreen from "./components/loading-screen"
import ProgressBar from "./components/progress-bar"
import Header from "./components/header"
import Hero from "./components/hero"

// Carregamento dinâmico dos componentes para melhor performance
const ProjectSection = dynamic(() => import("./components/project-section"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const CollaboratorsSection = dynamic(() => import("./components/collaborators-section"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const StudentsSection = dynamic(() => import("./components/students-section"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const ArduinoSection = dynamic(() => import("./components/arduino-section"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const MaterialsSection = dynamic(() => import("./components/institutions-section"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const MaquetteGallery = dynamic(() => import("./components/maquette-gallery"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const DevelopmentProcess = dynamic(() => import("./components/development-process"), {
  ssr: false,
  loading: () => <div className="h-96 bg-black animate-pulse" />,
})

const Footer = dynamic(() => import("./components/footer"), {
  ssr: false,
  loading: () => <div className="h-64 bg-black animate-pulse" />,
})

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      const criticalImages = [
        "/images/José.jpeg",
        "/images/Erika.png",
        "/images/Jasmine.jpeg",
        "/images/Wêslen.jpeg",
        "/images/turma.jpeg",
      ]

      criticalImages.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      preloadImages()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ProgressBar />
      <Header />
      <Hero />

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <ProjectSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <MaquetteGallery />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <CollaboratorsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <StudentsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <ArduinoSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <DevelopmentProcess />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <MaterialsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  )
}
