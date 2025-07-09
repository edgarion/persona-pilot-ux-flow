import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { FileText, Descargar, Share2, TrendingUp, TrendingDown, Users, CheckCircle, AlertTriangle, Target, Star, Quote, Eye, Lightbulb, Award, Zap, Image as ImageIcon, DollarSign, Calculator, Percent, Euro } from "lucide-react";

interface ExpertAnalysis {
  id: number;
  expert: string;
  role: string;
  company: string;
  avatar: string;
  specialization: string;
  analysis: string;
  recommendations: string[];
  rating: number;
  keyFindings: string[];
  improvementAreas: string[];
}

const FinalReport = () => {
  const [selectedProject, setSelectedProject] = useState("ecommerce-redesign");
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);

  // Mock data del proyecto de e-commerce
  const projectData = {
    title: "Rediseño E-commerce - Optimización de Conversión",
    period: "Enero - Marzo 2024",
    participants: 156,
    testsCompleted: 12,
    conversionImprovement: "+34%",
    satisfactionScore: 4.2,
    npsScore: 68
  };

  // Datos de mejoras con imágenes y pruebas UX específicas
  const uxImprovements = [
    {
      area: "Proceso de Checkout",
      before: "Checkout de 5 pasos con múltiples formularios",
      after: "Checkout simplificado de 3 pasos con autocompletado",
      improvement: "+45% conversión",
      image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=400",
      uxTests: [
        "Pruebas de Usabilidad Moderadas (n=24)",
        "A/B Testing con 2,500 usuarios",
        "Card Sorting para reorganización de campos",
        "Eye-tracking para optimización visual",
        "Pruebas de Accesibilidad WCAG 2.1"
      ],
      metrics: {
        taskCompletion: "+23%",
        timeOnTask: "-40%",
        errorRate: "-67%",
        userSatisfaction: "+52%"
      }
    },
    {
      area: "Navegación Principal",
      before: "Menú complejo con 8 categorías principales",
      after: "Navegación simplificada con 5 categorías y mega-menú",
      improvement: "+28% engagement",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      uxTests: [
        "Tree Testing para arquitectura de información",
        "First Click Testing (n=180)",
        "Pruebas de Navegación con Think-Aloud",
        "Heatmap Analysis con Hotjar",
        "Mobile Usability Testing"
      ],
      metrics: {
        findabilityScore: "+35%",
        bounceRate: "-22%",
        pageViews: "+18%",
        mobileUsability: "+41%"
      }
    },
    {
      area: "Búsqueda y Filtros",
      before: "Filtros ocultos en sidebar con poca visibilidad",
      after: "Filtros prominentes con búsqueda inteligente",
      improvement: "+52% uso de filtros",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      uxTests: [
        "Search Analytics y Query Analysis",
        "Filtros A/B Testing (4 variantes)",
        "User Journey Mapping",
        "Prototype Testing con Figma",
        "Comparative Usability Testing"
      ],
      metrics: {
        searchSuccess: "+41%",
        filterUsage: "+52%",
        productDiscovery: "+29%",
        zeroResults: "-38%"
      }
    }
  ];

  // Quotes de usuarios
  const userQuotes = [
    {
      quote: "El nuevo checkout es muchísimo más rápido. Antes me perdía entre tantos pasos, ahora es súper directo.",
      user: "María González",
      age: 32,
      persona: "Compradores Millennials",
      context: "Después de completar una compra en el prototipo rediseñado",
      satisfaction: 5
    },
    {
      quote: "Me encanta que ahora puedo encontrar lo que busco sin tener que navegar por mil categorías.",
      user: "Carlos Ruiz",
      age: 45,
      persona: "Padres Ocupados",
      context: "Durante la prueba de navegación",
      satisfaction: 4
    },
    {
      quote: "Los filtros ahora sí funcionan como esperaba. Antes no los usaba porque no los veía.",
      user: "Ana Martín",
      age: 28,
      persona: "Profesionales Tech",
      context: "Prueba de búsqueda y filtrado de productos",
      satisfaction: 5
    },
    {
      quote: "La experiencia móvil mejoró un montón. Antes era frustrante comprar desde el teléfono.",
      user: "Luis Fernández",
      age: 35,
      persona: "Usuarios Móviles",
      context: "Prueba de usabilidad móvil",
      satisfaction: 4
    }
  ];

  // Análisis de expertos UX y UI
  const expertAnalyses: ExpertAnalysis[] = [
    {
      id: 1,
      expert: "Dr. Elena Rodríguez",
      role: "Senior UX Researcher",
      company: "Design Systems Lab",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      specialization: "Psicología Cognitiva y UX",
      analysis: "El rediseño demuestra una comprensión profunda de los principios de usabilidad. La reducción de la carga cognitiva en el checkout es ejemplar, aplicando correctamente la Ley de Hick para minimizar las decisiones del usuario. La implementación de progressive disclosure en la navegación muestra madurez en el diseño de experiencias.",
      recommendations: [
        "Implementar micro-interacciones para mejorar el feedback visual",
        "Considerar personalización basada en comportamiento previo",
        "Añadir indicadores de progreso más prominentes en checkout",
        "Optimizar la jerarquía visual en páginas de producto"
      ],
      rating: 4.8,
      keyFindings: [
        "Excelente aplicación de principios de psicología cognitiva",
        "Reducción significativa de fricción en puntos críticos",
        "Mejora notable en accesibilidad y inclusión"
      ],
      improvementAreas: [
        "Personalización de la experiencia",
        "Micro-interacciones y feedback",
        "Optimización para usuarios avanzados"
      ]
    },
    {
      id: 2,
      expert: "Marco Santini",
      role: "Lead UI Designer",
      company: "Digital Craft Studio",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      specialization: "Sistemas de Diseño y UI",
      analysis: "Desde la perspectiva visual, el rediseño logra un equilibrio excepcional entre funcionalidad y estética. El sistema de colores mejora significativamente la jerarquía visual, y la tipografía optimizada aumenta la legibilidad en un 23%. La consistencia del design system es notable, creando una experiencia cohesiva que refuerza la confianza del usuario.",
      recommendations: [
        "Expandir la paleta de colores para mejor categorización",
        "Implementar modo oscuro para mejorar accesibilidad",
        "Optimizar iconografía para mayor reconocimiento",
        "Refinar espaciado en componentes móviles"
      ],
      rating: 4.6,
      keyFindings: [
        "Sistema de diseño coherente y escalable",
        "Mejora significativa en jerarquía visual",
        "Excelente adaptación responsive"
      ],
      improvementAreas: [
        "Variaciones temáticas (modo oscuro)",
        "Iconografía más expresiva",
        "Optimización de densidad de información"
      ]
    }
  ];

  // Datos de rentabilidad expandidos basados en jeffbaldwin.ca
  const profitabilityData = [
    { metric: "Tasa de Conversión", before: 2.3, after: 3.1, improvement: 34.8, impact: "€425,000" },
    { metric: "Valor Promedio Pedido", before: 85, after: 97, improvement: 14.1, impact: "€156,000" },
    { metric: "Tiempo en Checkout", before: 4.2, after: 2.1, improvement: 50.0, impact: "€89,000" },
    { metric: "Abandono de Carrito", before: 68.5, after: 45.2, improvement: 34.0, impact: "€312,000" },
    { metric: "Retención de Clientes", before: 23.1, after: 31.8, improvement: 37.7, impact: "€278,000" },
    { metric: "Tiempo de Carga", before: 3.8, after: 1.9, improvement: 50.0, impact: "€67,000" }
  ];

  const monthlyRevenue = [
    { month: 'Ene', before: 125000, after: 168000, improvement: 34.4 },
    { month: 'Feb', before: 132000, after: 178000, improvement: 34.8 },
    { month: 'Mar', before: 128000, after: 185000, improvement: 44.5 },
    { month: 'Abr', before: 135000, after: 195000, improvement: 44.4 },
    { month: 'May', before: 142000, after: 208000, improvement: 46.5 },
    { month: 'Jun', before: 138000, after: 201000, improvement: 45.7 }
  ];

  // ROI y análisis financiero detallado
  const roiAnalysis = {
    investmentCost: 89000,
    annualReturn: 1327000,
    roi: 1491,
    paybackPeriod: "2.4 meses",
    netPresentValue: 2156000,
    breakEvenPoint: "68 días",
    costPerImprovement: 7417
  };

  // Análisis de costos vs beneficios
  const costBenefitData = [
    { category: "Inversión UX Research", cost: 25000, benefit: 425000, ratio: 17.0 },
    { category: "Rediseño UI/UX", cost: 35000, benefit: 312000, ratio: 8.9 },
    { category: "Testing & Validación", cost: 18000, benefit: 278000, ratio: 15.4 },
    { category: "Implementación", cost: 11000, benefit: 312000, ratio: 28.4 }
  ];

  // Proyección de ingresos a 3 años
  const revenueProjection = [
    { year: "Año 1", conservative: 1327000, optimistic: 1589000, actual: 1456000 },
    { year: "Año 2", conservative: 1725000, optimistic: 2134000, actual: null },
    { year: "Año 3", conservative: 2241000, optimistic: 2868000, actual: null }
  ];

  const handleExport = (format: string) => {
    console.log(`Exportando informe en formato: ${format}`);
    setIsExportDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Informe Final
            </h2>
            <p className="text-gray-400 mt-2 text-lg">Análisis completo de resultados y recomendaciones</p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-64 bg-white/5 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="ecommerce-redesign" className="text-white hover:bg-gray-700">
                  Rediseño E-commerce
                </SelectItem>
                <SelectItem value="mobile-app" className="text-white hover:bg-gray-700">
                  App Móvil v3.0
                </SelectItem>
                <SelectItem value="dashboard" className="text-white hover:bg-gray-700">
                  Dashboard Analytics
                </SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isExportDialogOpen} onOpenChange={setIsExportDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                  <Descargar className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle className="text-white">Exportar Informe Final</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Selecciona el formato de exportación
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                  <Button onClick={() => handleExport('pdf')} className="justify-start bg-white/5 hover:bg-white/10 text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF Ejecutivo
                  </Button>
                  <Button onClick={() => handleExport('detailed-pdf')} className="justify-start bg-white/5 hover:bg-white/10 text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF Detallado
                  </Button>
                  <Button onClick={() => handleExport('presentation')} className="justify-start bg-white/5 hover:bg-white/10 text-white">
                    <Share2 className="w-4 h-4 mr-2" />
                    Presentación PowerPoint
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Project Overview */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-200">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              {projectData.title}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {projectData.period} • {projectData.participants} participantes • {projectData.testsCompleted} pruebas completadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-2xl font-bold text-green-400">{projectData.conversionImprovement}</div>
                <div className="text-sm text-gray-400">Mejora en Conversión</div>
              </div>
              <div className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">{projectData.satisfactionScore}</div>
                <div className="text-sm text-gray-400">Satisfacción Promedio</div>
              </div>
              <div className="text-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">{projectData.npsScore}</div>
                <div className="text-sm text-gray-400">NPS Score</div>
              </div>
              <div className="text-center p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">€1.33M</div>
                <div className="text-sm text-gray-400">Retorno Anual</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="improvements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/5 border border-white/10">
            <TabsTrigger value="improvements">Mejoras UX</TabsTrigger>
            <TabsTrigger value="quotes">Quotes Usuarios</TabsTrigger>
            <TabsTrigger value="experts">Análisis Expertos</TabsTrigger>
            <TabsTrigger value="profitability">Rentabilidad</TabsTrigger>
            <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
          </TabsList>

          {/* Mejoras UX con Pruebas Específicas */}
          <TabsContent value="improvements" className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-green-400" />
                  Mejoras de UX Implementadas
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Comparativa visual, métricas y metodologías UX utilizadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {uxImprovements.map((improvement, index) => (
                    <div key={index} className="border border-white/10 rounded-lg p-6 bg-white/5">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Información de la mejora */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-xl font-semibold text-white">{improvement.area}</h3>
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              {improvement.improvement}
                            </Badge>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                              <div className="text-red-300 text-sm font-medium mb-1">Antes:</div>
                              <div className="text-gray-300">{improvement.before}</div>
                            </div>
                            
                            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                              <div className="text-green-300 text-sm font-medium mb-1">Después:</div>
                              <div className="text-gray-300">{improvement.after}</div>
                            </div>
                          </div>

                          {/* Pruebas UX Realizadas */}
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              Pruebas UX Realizadas:
                            </h4>
                            <div className="space-y-1">
                              {improvement.uxTests.map((test, idx) => (
                                <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                                  {test}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Métricas de mejora */}
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Métricas de Impacto:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {Object.entries(improvement.metrics).map(([metric, value]) => (
                                <div key={metric} className="flex justify-between items-center p-2 bg-white/5 rounded">
                                  <span className="text-sm text-gray-300 capitalize">
                                    {metric.replace(/([A-Z])/g, ' $1').trim()}
                                  </span>
                                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                                    {value}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Imagen de la mejora */}
                        <div className="flex items-center justify-center">
                          <div className="relative w-full max-w-md">
                            <img 
                              src={improvement.image} 
                              alt={`Mejora en ${improvement.area}`}
                              className="w-full h-64 object-cover rounded-lg border border-white/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="text-white font-medium">{improvement.area}</div>
                              <div className="text-green-300 text-sm">{improvement.improvement}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quotes de Usuarios */}
          <TabsContent value="quotes" className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Quote className="w-5 h-5 text-blue-400" />
                  Testimonios de Usuarios
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Feedback directo de usuarios durante las pruebas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userQuotes.map((quote, index) => (
                    <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-4">
                        <Quote className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <blockquote className="text-gray-200 italic mb-4 text-lg leading-relaxed">
                            "{quote.quote}"
                          </blockquote>
                          
                          <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-medium text-white">{quote.user}</div>
                                <div className="text-sm text-gray-400">{quote.age} años</div>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(quote.satisfaction)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            
                            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-2">
                              {quote.persona}
                            </Badge>
                            
                            <div className="text-xs text-gray-500 mt-2">
                              <strong>Contexto:</strong> {quote.context}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Análisis de Expertos */}
          <TabsContent value="experts" className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  Análisis de Expertos
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Evaluación profesional por expertos en UX y UI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {expertAnalyses.map((expert) => (
                    <div key={expert.id} className="border border-white/10 rounded-lg p-6 bg-white/5">
                      {/* Header del experto */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30">
                          <img 
                            src={expert.avatar} 
                            alt={expert.expert}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold text-white">{expert.expert}</h3>
                            <div className="flex items-center gap-1">
                              {[...Array(Math.floor(expert.rating))].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                              <span className="text-sm text-gray-400 ml-1">({expert.rating})</span>
                            </div>
                          </div>
                          <div className="text-gray-400">{expert.role} en {expert.company}</div>
                          <Badge className="mt-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {expert.specialization}
                          </Badge>
                        </div>
                      </div>

                      {/* Análisis */}
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-400" />
                          Análisis Profesional
                        </h4>
                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-gray-200 leading-relaxed">{expert.analysis}</p>
                        </div>
                      </div>

                      {/* Hallazgos clave y áreas de mejora */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-medium text-green-400 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Hallazgos Clave
                          </h5>
                          <div className="space-y-2">
                            {expert.keyFindings.map((finding, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300">{finding}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-yellow-400 mb-3 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" />
                            Áreas de Mejora
                          </h5>
                          <div className="space-y-2">
                            {expert.improvementAreas.map((area, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300">{area}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Recomendaciones */}
                      <div>
                        <h5 className="font-medium text-purple-400 mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Recomendaciones Específicas
                        </h5>
                        <div className="grid gap-2">
                          {expert.recommendations.map((rec, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-purple-500/10 rounded border border-purple-500/20">
                              <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Análisis de Rentabilidad Expandido */}
          <TabsContent value="profitability" className="space-y-6">
            {/* ROI Overview */}
            <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Resumen de Rentabilidad
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Análisis completo del retorno de inversión y impacto financiero
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{roiAnalysis.roi}%</div>
                    <div className="text-sm text-gray-300">ROI</div>
                  </div>
                  <div className="text-center p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">€{(roiAnalysis.annualReturn / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-300">Retorno Anual</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{roiAnalysis.paybackPeriod}</div>
                    <div className="text-sm text-gray-300">Payback Period</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">€{(roiAnalysis.netPresentValue / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-300">NPV (3 años)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Métricas de Mejora Detalladas */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Métricas de Mejora e Impacto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profitabilityData.map((item, index) => (
                      <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">{item.metric}</span>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                              +{item.improvement}%
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                              {item.impact}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Antes: {item.before}{item.metric.includes('Tiempo') ? 's' : item.metric.includes('Valor') ? '€' : '%'}</span>
                          <span>Después: {item.after}{item.metric.includes('Tiempo') ? 's' : item.metric.includes('Valor') ? '€' : '%'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Análisis Costo-Beneficio */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-400" />
                    Análisis Costo-Beneficio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {costBenefitData.map((item, index) => (
                      <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white text-sm">{item.category}</span>
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                            {item.ratio}:1
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-300">Costo: €{(item.cost / 1000).toFixed(0)}K</span>
                          <span className="text-green-300">Beneficio: €{(item.benefit / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                            style={{ width: `${Math.min((item.ratio / 30) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impacto en Ingresos Mensuales */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Euro className="w-5 h-5 text-yellow-400" />
                  Evolución de Ingresos Mensuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Bar dataKey="before" fill="#EF4444" name="Antes" />
                    <Bar dataKey="after" fill="#10B981" name="Después" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Proyección de Ingresos a 3 Años */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  Proyección de Ingresos (3 años)
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Estimaciones conservadoras vs optimistas basadas en tendencias actuales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueProjection}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Line type="monotone" dataKey="conservative" stroke="#8B5CF6" name="Conservador" strokeWidth={2} />
                    <Line type="monotone" dataKey="optimistic" stroke="#10B981" name="Optimista" strokeWidth={2} />
                    <Line type="monotone" dataKey="actual" stroke="#F59E0B" name="Real" strokeWidth={3} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recomendaciones Finales */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  Recomendaciones para Próximas Iteraciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-400 mb-4">Implementar a Corto Plazo (1-2 meses)</h4>
                    <div className="space-y-3">
                      {[
                        "Añadir micro-interacciones en botones principales",
                        "Implementar búsqueda con autocompletado",
                        "Optimizar carga de imágenes en móvil",
                        "Añadir indicadores de stock en tiempo real"
                      ].map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-green-500/10 rounded border border-green-500/20">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-blue-400 mb-4">Planificar a Medio Plazo (3-6 meses)</h4>
                    <div className="space-y-3">
                      {[
                        "Sistema de recomendaciones personalizadas",
                        "Implementación de modo oscuro",
                        "Integración con redes sociales",
                        "Dashboard de usuario personalizado"
                      ].map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-blue-500/10 rounded border border-blue-500/20">
                          <Target className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FinalReport;