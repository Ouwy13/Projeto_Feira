"use client"

import { useEffect, useRef } from "react"
import { Code, Cpu, Zap, Settings, Play, Download } from "lucide-react"

export default function ArduinoSection() {
  const codeRefs = useRef<(HTMLDivElement | null)[]>([])
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  const codeBlocks = [
    {
      title: "Configuração Inicial",
      description: "Setup dos pinos e inicialização dos componentes",
      code: `// Ocean-net Arduino Code
#include <FastLED.h>

#define LED_PIN 6
#define NUM_LEDS 20
#define FAN_PIN 9
#define BUTTON_PIN 2

CRGB leds[NUM_LEDS];
bool systemActive = false;

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);
  pinMode(FAN_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  
  Serial.println("Ocean-net System Initialized");
}`,
    },
    {
      title: "Animação dos LEDs",
      description: "Simulação do fluxo de dados pelos cabos submarinos",
      code: `void dataFlowAnimation() {
  static int position = 0;
  
  // Limpa todos os LEDs
  fill_solid(leds, NUM_LEDS, CRGB::Black);
  
  // Cria efeito de pulso de dados
  for(int i = 0; i < 3; i++) {
    int pos = (position + i * 7) % NUM_LEDS;
    leds[pos] = CRGB::Blue;
    if(pos > 0) leds[pos-1] = CRGB::DarkBlue;
    if(pos < NUM_LEDS-1) leds[pos+1] = CRGB::DarkBlue;
  }
  
  FastLED.show();
  position = (position + 1) % NUM_LEDS;
}`,
    },
    {
      title: "Controle das Turbinas",
      description: "Simulação do sistema de energia eólica",
      code: `void windTurbineControl() {
  static unsigned long lastUpdate = 0;
  static int fanSpeed = 0;
  
  if(millis() - lastUpdate > 100) {
    if(systemActive) {
      // Aumenta velocidade gradualmente
      fanSpeed = min(255, fanSpeed + 5);
    } else {
      // Diminui velocidade gradualmente
      fanSpeed = max(0, fanSpeed - 10);
    }
    
    analogWrite(FAN_PIN, fanSpeed);
    lastUpdate = millis();
  }
}`,
    },
    {
      title: "Loop Principal",
      description: "Controle geral do sistema Ocean-net",
      code: `void loop() {
  // Verifica botão de ativação
  if(digitalRead(BUTTON_PIN) == LOW) {
    systemActive = !systemActive;
    delay(300); // Debounce
    
    Serial.print("System ");
    Serial.println(systemActive ? "ON" : "OFF");
  }
  
  if(systemActive) {
    dataFlowAnimation();
    windTurbineControl();
    oceanWaveEffect();
  } else {
    // Modo standby
    fill_solid(leds, NUM_LEDS, CRGB::DarkBlue);
    FastLED.show();
  }
  
  delay(50);
}`,
    },
  ]

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "FastLED Library",
      description: "Controle avançado de LEDs RGB para simular fluxo de dados",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-500" />,
      title: "PWM Control",
      description: "Controle de velocidade dos mini ventiladores via PWM",
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Sensor Integration",
      description: "Botões e sensores para interação com o sistema",
    },
    {
      icon: <Cpu className="h-8 w-8 text-cyan-500" />,
      title: "Arduino Uno",
      description: "Microcontrolador principal do projeto Ocean-net",
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

    codeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      codeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="programacao" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal-animation">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-900/50">
            <Code className="h-4 w-4" />
            <span>Programação Arduino</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight title-glacial-subtle title-glow-subtle">
            Código do Projeto
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Implementação em Arduino para controlar LEDs, ventiladores e simular o funcionamento da estação Ocean-net.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900 rounded-3xl p-8 text-center border border-gray-800 hover:border-blue-900/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-900/20 h-full">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Code Blocks */}
        <div className="space-y-8">
          {codeBlocks.map((block, index) => (
            <div
              key={index}
              ref={(el) => (codeRefs.current[index] = el)}
              className="opacity-0 transform translate-y-10"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-900/50 transition-all duration-300">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                      <p className="text-gray-400">{block.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-green-900/50 text-green-400 rounded-lg hover:bg-green-900/70 transition-colors">
                        <Play className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-blue-900/50 text-blue-400 rounded-lg hover:bg-blue-900/70 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <pre className="p-6 text-sm text-gray-300 overflow-x-auto bg-black/50">
                    <code className="language-cpp">{block.code}</code>
                  </pre>
                  <div className="absolute top-4 right-4 flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Funcionalidades */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800 reveal-animation">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 title-energy-subtle">Funcionalidades Implementadas</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              O código Arduino controla todos os aspectos visuais e funcionais da maquete Ocean-net.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Simulação de Dados</h4>
              <p className="text-gray-400 text-sm">
                LEDs RGB simulam o fluxo de dados pelos cabos submarinos com efeitos visuais dinâmicos.
              </p>
            </div>

            <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Controle de Energia</h4>
              <p className="text-gray-400 text-sm">
                Mini ventiladores representam as turbinas eólicas com controle de velocidade variável.
              </p>
            </div>

            <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Interação</h4>
              <p className="text-gray-400 text-sm">
                Botões permitem ligar/desligar o sistema e alternar entre diferentes modos de operação.
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
