"use client"

import { useEffect, useRef } from "react"
import { Code, Cpu, Zap, Settings, Play, Download } from "lucide-react"

export default function ArduinoSection() {
  const codeRefs = useRef<(HTMLDivElement | null)[]>([])
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  // Update the features array to reflect the actual components used
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Código para LEDs",
      description: "Controle de animações de LEDs RGB e normais para simular fluxo de dados",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-500" />,
      title: "Geração de Energia",
      description: "Mini ventiladores que geram energia para uma central de alimentação",
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
      title: "ESP32-CAM",
      description: "Captura de imagem em tempo real transmitida para um projetor",
    },
    {
      icon: <Cpu className="h-8 w-8 text-cyan-500" />,
      title: "Arduino Uno/Mega",
      description: "Microcontroladores principais do projeto Ocean-net",
    },
  ]

  // Update the codeBlocks array to reflect the actual code used
  const codeBlocks = [
    {
      title: "Configuração Inicial",
      description: "Setup dos pinos e inicialização dos componentes",
      code: `// Ocean-net Arduino Code
#include <FastLED.h>

#define LED_PIN 6
#define NUM_LEDS 36  // 6 RGBs + 30 normais
#define FAN_ENERGY_PIN A0  // Pino para leitura da energia gerada pelos ventiladores

CRGB leds[NUM_LEDS];
bool systemActive = false;

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);
  
  // Configuração para leitura da energia gerada pelos ventiladores
  pinMode(FAN_ENERGY_PIN, INPUT);
  
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
      title: "Captura de Imagem ESP32-CAM",
      description: "Código para captura e transmissão de imagem",
      code: `// Código para ESP32-CAM
#include "esp_camera.h"
#include "Arduino.h"
#include "WiFi.h"
#include "esp_http_server.h"
#include "camera_pins.h"

// Configuração da câmera
void setupCamera() {
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  
  // Inicializa a câmera
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
}`,
    },
    {
      title: "Sistema de Energia",
      description: "Monitoramento da energia gerada pelos mini ventiladores",
      code: `// Monitoramento da energia gerada pelos mini ventiladores
void monitorEnergyGeneration() {
  static unsigned long lastUpdate = 0;
  static int energyLevel = 0;
  
  if(millis() - lastUpdate > 1000) {
    // Lê o valor da energia gerada pelos ventiladores
    int rawValue = analogRead(FAN_ENERGY_PIN);
    energyLevel = map(rawValue, 0, 1023, 0, 100);
    
    Serial.print("Energia gerada: ");
    Serial.print(energyLevel);
    Serial.println("%");
    
    // Ajusta a intensidade dos LEDs com base na energia disponível
    if(energyLevel < 20) {
      // Modo de economia de energia
      FastLED.setBrightness(50);
    } else {
      FastLED.setBrightness(255);
    }
    
    lastUpdate = millis();
  }
}`,
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

          {/* Update the Funcionalidades section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Simulação de Dados</h4>
              <p className="text-gray-400 text-sm">
                6 LEDs RGB e 30 LEDs normais simulam o fluxo de dados pelos cabos submarinos com efeitos visuais
                dinâmicos.
              </p>
            </div>

            <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Geração de Energia</h4>
              <p className="text-gray-400 text-sm">
                Mini ventiladores representam as turbinas eólicas que geram energia para uma central de alimentação.
              </p>
            </div>

            <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Transmissão de Imagem</h4>
              <p className="text-gray-400 text-sm">
                Câmeras ESP32-CAM capturam imagens das pessoas que passam pelo projeto, transmitindo em tempo real para
                um projetor.
              </p>
            </div>
          </div>
        </div>

        {/* Add technical specifications section */}
        <div className="mt-8 bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
          <h4 className="text-xl font-semibold mb-3 text-center">Especificações da Instalação</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <p className="text-blue-400 font-medium">Microcontroladores</p>
              <p className="text-gray-300">Arduino Uno e Mega</p>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <p className="text-blue-400 font-medium">Câmeras</p>
              <p className="text-gray-300">ESP32-CAM</p>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <p className="text-blue-400 font-medium">Mine Ventiladores</p>
              <p className="text-gray-300">Motorzinho e Cooler</p>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <p className="text-blue-400 font-medium">Suporte de Câmera</p>
              <p className="text-gray-300">CAM-MB, FTD232, TTL FT232RL</p>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <p className="text-blue-400 font-medium">Materiais</p>
              <p className="text-gray-300">Protoboards, Jumpers, Resistores</p>
            </div>
            <div className="p-3 bg-gray-900/50 rounded-lg">
              <p className="text-blue-400 font-medium">Ferramentas</p>
              <p className="text-gray-300">Alicate, Máquina de Solda</p>
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
