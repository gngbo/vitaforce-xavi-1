"use client"

import { useState } from "react"
import { Play, Star, Users, FileText, Microscope, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function VitaForceResearch() {
  const [showVideo, setShowVideo] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const researchData = [
    {
      metric: "94%",
      description: "Mejora en síntomas prostáticos",
      study: "Estudio clínico 2023",
    },
    {
      metric: "87%",
      description: "Reducción de interrupciones nocturnas",
      study: "Universidad de Madrid",
    },
    {
      metric: "91%",
      description: "Mejora en función sexual",
      study: "Instituto Andrológico",
    },
    {
      metric: "96%",
      description: "Satisfacción del paciente",
      study: "Seguimiento 6 meses",
    },
  ]

  const clinicalResults = [
    {
      week: "Semana 1-2",
      improvements: [
        "Reducción inicial de la inflamación prostática",
        "Ligera mejora en el flujo urinario",
        "Disminución de la urgencia nocturna",
      ],
      percentage: "45%",
    },
    {
      week: "Semana 3-4",
      improvements: [
        "Mejora significativa en el vaciado vesical",
        "Reducción notable de interrupciones nocturnas",
        "Aumento de la libido y energía",
      ],
      percentage: "78%",
    },
    {
      week: "Semana 5-8",
      improvements: [
        "Normalización del flujo urinario",
        "Sueño reparador sin interrupciones",
        "Función sexual completamente restaurada",
      ],
      percentage: "94%",
    },
  ]

  const patientCases = [
    {
      id: "Caso 001",
      age: 52,
      condition: "Hiperplasia Prostática Benigna",
      before: "7-8 interrupciones nocturnas, flujo débil",
      after: "0-1 interrupciones, flujo normal",
      duration: "6 semanas",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "Caso 002",
      age: 48,
      condition: "Prostatitis Crónica",
      before: "Dolor pélvico constante, disfunción eréctil",
      after: "Sin dolor, función sexual restaurada",
      duration: "8 semanas",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "Caso 003",
      age: 55,
      condition: "Síndrome Prostático",
      before: "PSA elevado, síntomas severos",
      after: "PSA normalizado, síntomas resueltos",
      duration: "12 semanas",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-red-700">VitaForce</div>
              <Badge variant="outline" className="text-blue-600">
                Investigación Clínica
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Estudio Publicado 2024</span>
              <Button className="bg-red-700 hover:bg-red-800">Acceso al Estudio</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Doctor Introduction */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Investigación Breakthrough</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Descubrimiento Revolucionario en
                <span className="text-red-700"> Salud Prostática</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                El Dr. Miguel Hernández, urólogo con 25 años de experiencia, presenta los resultados de su investigación
                de 3 años sobre VitaForce y su impacto en la salud masculina.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">1,247 pacientes estudiados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Publicado en revista médica</span>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => setShowVideo(true)}
                className="bg-red-700 hover:bg-red-800 text-lg px-8 py-4"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Presentación del Dr. Hernández
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Dr. Miguel Hernández"
                width={400}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-bold text-gray-900">Dr. Miguel Hernández</h3>
                <p className="text-sm text-gray-600">Urólogo - Hospital Universitario</p>
                <p className="text-sm text-gray-600">25 años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Presentación del Dr. Hernández</h3>
              <Button variant="outline" onClick={() => setShowVideo(false)}>
                Cerrar
              </Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Video de presentación del estudio clínico</p>
                <p className="text-sm text-gray-500">Duración: 12:34 minutos</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Research Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados de la Investigación</h2>
            <p className="text-xl text-gray-600">
              Estudio doble ciego con 1,247 pacientes durante 24 meses (2022-2024)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {researchData.map((data, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-red-700 mb-2">{data.metric}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{data.description}</h3>
                  <p className="text-sm text-gray-600">{data.study}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Clinical Timeline */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Evolución Clínica de los Pacientes</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {clinicalResults.map((result, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg">{result.week}</h4>
                      <div className="text-2xl font-bold text-green-600">{result.percentage}</div>
                    </div>
                    <ul className="space-y-2">
                      {result.improvements.map((improvement, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < clinicalResults.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Análisis Científico de VitaForce</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro laboratorio analizó exhaustivamente la composición de VitaForce, confirmando la presencia de
                compuestos bioactivos clave para la salud prostática.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Análisis Molecular</h3>
                    <p className="text-gray-600">
                      Identificación de fitosteroles y compuestos antiinflamatorios de alta biodisponibilidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Biodisponibilidad</h3>
                    <p className="text-gray-600">
                      Absorción superior al 85% comparado con otros suplementos del mercado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Seguridad Clínica</h3>
                    <p className="text-gray-600">
                      Cero efectos secundarios reportados en el 99.2% de los pacientes estudiados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/vitaforce-product.jpg"
                alt="VitaForce - Análisis Científico"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Certificado FDA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos Clínicos Documentados</h2>
            <p className="text-xl text-gray-600">
              Seguimiento detallado de pacientes con diferentes condiciones prostáticas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {patientCases.map((case_, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{case_.id}</CardTitle>
                    <Badge variant="outline">{case_.age} años</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{case_.condition}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src={case_.image || "/placeholder.svg"}
                      alt={`Caso clínico ${case_.id}`}
                      width={400}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-1">Antes del tratamiento:</h4>
                      <p className="text-sm text-gray-700">{case_.before}</p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-1">Después del tratamiento:</h4>
                      <p className="text-sm text-gray-700">{case_.after}</p>
                    </div>

                    <div className="text-center">
                      <Badge className="bg-blue-100 text-blue-800">Duración: {case_.duration}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor's Recommendation */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Dr. Miguel Hernández"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Recomendación del Dr. Hernández</h3>
                  <blockquote className="text-lg text-gray-700 italic mb-6">
                    "Después de 25 años tratando problemas prostáticos, puedo afirmar que VitaForce representa un avance
                    significativo en el tratamiento natural. Los resultados de nuestro estudio son extraordinarios y
                    superan cualquier expectativa que pudiera tener."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-bold">Dr. Miguel Hernández</p>
                      <p className="text-sm text-gray-600">Jefe de Urología - Hospital Universitario de Madrid</p>
                      <p className="text-sm text-gray-600">Miembro de la Asociación Europea de Urología</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access to Research */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Accede al Estudio Completo y Obtén VitaForce</h2>
            <p className="text-xl mb-8 opacity-90">
              Descarga el estudio científico completo y aprovecha la oferta especial para profesionales de la salud y
              pacientes informados.
            </p>

            <div className="bg-white rounded-lg p-8 text-gray-900 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-6">Acceso Exclusivo</h3>

              <div className="mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>VitaForce (1 Frasco)</span>
                  <div>
                    <span className="line-through text-gray-500">899BS</span>
                    <span className="ml-2 font-bold text-green-600">449BS</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email profesional"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="lg" className="w-full bg-red-700 hover:bg-red-800 text-lg py-4">
                Obtener VitaForce
                </Button>
              </form>

              <p className="text-xs text-gray-600 mt-4 text-center">
                * Oferta válida solo para profesionales de la salud y pacientes del estudio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VitaForce Research</h3>
              <p className="text-gray-400">Investigación científica rigurosa para el avance de la salud masculina.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Investigación</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Metodología</li>
                <li>Resultados</li>
                <li>Publicaciones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Para Profesionales</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Acceso al estudio</li>
                <li>Formación médica</li>
                <li>Colaboraciones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dr. Miguel Hernández</li>
                <li>investigacion@vitaforce.com</li>
                <li>+34 91 XXX XXXX</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VitaForce Research Institute. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
