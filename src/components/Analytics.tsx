import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, TrendingDown, Users, TestTube, CheckCircle, Clock, AlertTriangle, Target, Zap, BarChart3, Award, FileText, Lightbulb, ArrowRight, Star, ThumbsUp, ThumbsDown, DollarSign, ShoppingCart, Smartphone, Eye, Image } from "lucide-react";

const Analytics = () => {
  // Enhanced mock data for comprehensive analytics
  const testCompletionData = [
    { month: 'Ene', completadas: 12, enProgreso: 5, planificadas: 3, participantes: 45 },
    { month: 'Feb', completadas: 15, enProgreso: 7, planificadas: 4, participantes: 58 },
    { month: 'Mar', completadas: 18, enProgreso: 6, planificadas: 2, participantes: 62 },
    { month: 'Abr', completadas: 22, enProgreso: 8, planificadas: 5, participantes: 75 },
    { month: 'May', completadas: 25, enProgreso: 9, planificadas: 3, participantes: 89 },
    { month: 'Jun', completadas: 28, enProgreso: 5, planificadas: 7, participantes: 95 }
  ];

  const personaUsageData = [
    { name: 'Profesionales Tech', value: 35, color: '#3B82F6', tests: 12 },
    { name: 'Compradores Millennials', value: 25, color: '#8B5CF6', tests: 8 },
    { name: 'Padres Ocupados', value: 20, color: '#06B6D4', tests: 6 },
    { name: 'Emprendedores', value: 12, color: '#10B981', tests: 4 },
    { name: 'Power Users', value: 8, color: '#F59E0B', tests: 3 }
  ];

  const userSatisfactionData = [
    { test: 'E-commerce Nav', satisfaction: 4.2, nps: 65, completion: 84 },
    { test: 'Dashboard Móvil', satisfaction: 4.6, nps: 78, completion: 92 },
    { test: 'Onboarding', satisfaction: 3.8, nps: 45, completion: 78 },
    { test: 'Checkout Flow', satisfaction: 4.4, nps: 70, completion: 89 },
    { test: 'Search Feature', satisfaction: 3.5, nps: 35, completion: 76 }
  ];

  const insights = [
    {
      title: "Mejor Rendimiento",
      description: "Dashboard Móvil con 92% de éxito",
      trend: "up",
      value: "+8%",
      icon: TrendingUp,
      color: "text-green-400",
      priority: "positive"
    },
    {
      title: "Área Crítica",
      description: "Onboarding necesita atención urgente",
      trend: "down", 
      value: "-15%",
      icon: AlertTriangle,
      color: "text-red-400",
      priority: "critical"
    },
    {
      title: "Persona Más Activa",
      description: "Profesionales Tech (35% de uso)",
      trend: "up",
      value: "+12%",
      icon: Users,
      color: "text-blue-400",
      priority: "info"
    },
    {
      title: "NPS Promedio",
      description: "Score de 58 en últimas pruebas",
      trend: "up",
      value: "+5 pts",
      icon: Target,
      color: "text-purple-400",
      priority: "positive"
    }
  ];

  const recentFindings = [
    {
      test: "E-commerce Navigation",
      finding: "Los usuarios tienen dificultades para encontrar el filtro de precio en móvil",
      severity: "Alta",
      impact: "Reduce conversiones en 23%",
      recommendation: "Rediseñar filtros móviles con mejor accesibilidad",
      status: "pending"
    },
    {
      test: "Dashboard Móvil",
      finding: "Excelente usabilidad y tiempo de respuesta",
      severity: "Positivo",
      impact: "Aumenta tiempo de sesión 15%",
      recommendation: "Aplicar patrones similares a otras secciones",
      status: "implemented"
    },
    {
      test: "Onboarding Flow",
      finding: "Tutorial muy largo, usuarios abandonan en paso 4 de 7",
      severity: "Crítica",
      impact: "38% abandono en onboarding",
      recommendation: "Reducir pasos a máximo 4 y hacer opcionales los avanzados",
      status: "in-progress"
    }
  ];

  // Datos del informe final completo - Estudio E-commerce
  const finalReportData = {
    projectName: "Auditoría UX E-commerce TechStore",
    duration: "12 semanas",
    totalParticipants: 147,
    completionDate: "2024-01-25",
    overallScore: 7.8,
    npsScore: 68,
    
    // Métricas de rentabilidad
    businessImpact: {
      conversionImprovement: "+34%",
      revenueIncrease: "€2.4M",
      cartAbandonmentReduction: "-28%",
      customerSatisfactionIncrease: "+42%",
      timeToCheckoutReduction: "-45%",
      supportTicketsReduction: "-31%"
    },

    testResults: [
      {
        type: "Usabilidad",
        name: "Navegación Principal",
        participants: 32,
        successRate: 78,
        avgTime: "3:24",
        satisfaction: 3.8,
        keyFindings: ["Menú categorías confuso", "Búsqueda efectiva", "Breadcrumbs poco visibles"],
        status: "Completado",
        priority: "Alta",
        businessImpact: "Mejora navegación = +15% conversión"
      },
      {
        type: "A/B Testing",
        name: "Proceso de Checkout",
        participants: 58,
        successRate: 65,
        avgTime: "4:47",
        satisfaction: 3.2,
        keyFindings: ["Demasiados pasos", "Formularios largos", "Opciones de pago confusas"],
        status: "Completado",
        priority: "Crítica",
        businessImpact: "Checkout optimizado = +34% conversión"
      },
      {
        type: "Card Sorting",
        name: "Categorización Productos",
        participants: 24,
        successRate: 71,
        avgTime: "18:32",
        satisfaction: 3.6,
        keyFindings: ["Categorías solapadas", "Subcategorías muy profundas", "Filtros mal ubicados"],
        status: "Completado",
        priority: "Media",
        businessImpact: "Mejor categorización = +12% engagement"
      },
      {
        type: "Focus Group",
        name: "Experiencia Mobile",
        participants: 16,
        successRate: 82,
        avgTime: "60:00",
        satisfaction: 4.1,
        keyFindings: ["Diseño responsive bueno", "Velocidad de carga lenta", "Touch targets pequeños"],
        status: "Completado",
        priority: "Alta",
        businessImpact: "Mobile optimizado = +28% ventas móviles"
      },
      {
        type: "Tree Testing",
        name: "Arquitectura Información",
        participants: 17,
        successRate: 69,
        avgTime: "12:15",
        satisfaction: 3.4,
        keyFindings: ["Estructura muy profunda", "Etiquetas técnicas", "Rutas alternativas confusas"],
        status: "Completado",
        priority: "Media",
        businessImpact: "IA mejorada = +8% task completion"
      }
    ],
    
    improvements: [
      {
        category: "Checkout Crítico",
        priority: "Crítica", 
        impact: "Alto",
        effort: "Alto",
        recommendation: "Implementar checkout de un solo paso con guest checkout y autocompletado",
        expectedImprovement: "+34% conversión, +€1.2M revenue anual",
        status: "En progreso",
        timeline: "6 semanas",
        cost: "€45,000"
      },
      {
        category: "Performance Mobile",
        priority: "Crítica",
        impact: "Alto", 
        effort: "Medio",
        recommendation: "Optimizar imágenes, implementar lazy loading y CDN",
        expectedImprovement: "+28% ventas móviles, -2.3s tiempo carga",
        status: "Planificado",
        timeline: "4 semanas",
        cost: "€25,000"
      },
      {
        category: "Navegación",
        priority: "Alta",
        impact: "Medio",
        effort: "Medio",
        recommendation: "Rediseñar menú principal con mega-menú y breadcrumbs mejorados",
        expectedImprovement: "+15% navegación exitosa, +€400K revenue",
        status: "Pendiente",
        timeline: "8 semanas", 
        cost: "€35,000"
      },
      {
        category: "Búsqueda y Filtros",
        priority: "Alta",
        impact: "Medio",
        effort: "Bajo",
        recommendation: "Añadir filtros visuales, autocompletado y sugerencias inteligentes",
        expectedImprovement: "+22% uso de filtros, +€300K revenue",
        status: "Completado",
        timeline: "3 semanas",
        cost: "€15,000"
      },
      {
        category: "Accesibilidad",
        priority: "Media",
        impact: "Medio",
        effort: "Bajo",
        recommendation: "Mejorar contraste, añadir alt-text y navegación por teclado",
        expectedImprovement: "+8% usuarios accesibles, cumplimiento WCAG",
        status: "Planificado",
        timeline: "2 semanas",
        cost: "€8,000"
      }
    ],
    
    personas: [
      { 
        name: "Compradores Millennials", 
        participation: 38, 
        satisfaction: 4.1,
        quote: "Me gusta comprar rápido desde el móvil, pero el checkout es muy lento",
        painPoints: ["Checkout lento", "Muchos pasos", "Falta guest checkout"],
        improvements: ["Checkout simplificado", "Pago con un click", "Mejor mobile"]
      },
      { 
        name: "Padres Ocupados", 
        participation: 31, 
        satisfaction: 3.6,
        quote: "Necesito encontrar productos rápido, pero las categorías me confunden",
        painPoints: ["Navegación confusa", "Búsqueda ineficaz", "Tiempo limitado"],
        improvements: ["Navegación clara", "Búsqueda inteligente", "Proceso rápido"]
      },
      { 
        name: "Profesionales Tech", 
        participation: 28, 
        satisfaction: 4.3,
        quote: "La web funciona bien pero podría ser más rápida y eficiente",
        painPoints: ["Velocidad de carga", "Demasiados clicks", "Falta shortcuts"],
        improvements: ["Performance", "Atajos de teclado", "Funciones avanzadas"]
      },
      { 
        name: "Usuarios Móviles", 
        participation: 50, 
        satisfaction: 3.9,
        quote: "Uso principalmente el móvil pero algunos botones son muy pequeños",
        painPoints: ["Touch targets pequeños", "Texto pequeño", "Scroll horizontal"],
        improvements: ["Botones más grandes", "Texto legible", "Diseño responsive"]
      }
    ],

    // Prototipo comparativo
    prototypeComparison: {
      original: {
        checkoutSteps: 7,
        conversionRate: 2.3,
        avgCheckoutTime: "4:47",
        cartAbandonment: 68,
        mobileUsability: 3.2,
        overallSatisfaction: 3.4
      },
      improved: {
        checkoutSteps: 3,
        conversionRate: 3.1,
        avgCheckoutTime: "2:35",
        cartAbandonment: 49,
        mobileUsability: 4.1,
        overallSatisfaction: 4.2
      }
    },

    // Imágenes de mejoras UX
    uxImprovements: [
      {
        title: "Checkout Original vs. Mejorado",
        description: "Reducción de 7 a 3 pasos con guest checkout",
        beforeImage: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
        afterImage: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        improvement: "+34% conversión"
      },
      {
        title: "Navegación Mobile",
        description: "Menú hamburguesa mejorado con categorías visuales",
        beforeImage: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
        afterImage: "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800",
        improvement: "+28% navegación exitosa"
      },
      {
        title: "Filtros de Búsqueda",
        description: "Filtros visuales con preview en tiempo real",
        beforeImage: "https://images.pexels.com/photos/4386440/pexels-photo-4386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        afterImage: "https://images.pexels.com/photos/4386445/pexels-photo-4386445.jpeg?auto=compress&cs=tinysrgb&w=800",
        improvement: "+22% uso de filtros"
      }
    ]
  };

  const getTestTypeColor = (type: string) => {
    const colors = {
      "Usabilidad": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "A/B Testing": "bg-green-500/20 text-green-300 border-green-500/30", 
      "Card Sorting": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Focus Group": "bg-orange-500/20 text-orange-300 border-orange-500/30",
      "Tree Testing": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Crítica": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "Alta": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "Media": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "En progreso": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Pendiente": return "bg-gray-500/20 text-gray-300 border-gray-500/30";
      case "Planificado": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
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
        {/* Header with enhanced controls */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
            Analytics Dashboard
          </h2>
          <p className="text-gray-400 text-lg">
            Análisis completo de tus pruebas UX y resultados de proyectos
          </p>
        </div>

        {/* Expert Analysis Section */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              Análisis de Expertos
            </CardTitle>
            <CardDescription className="text-gray-400">
              Evaluaciones profesionales de UX y UI sobre las mejoras implementadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* UX Expert Analysis */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Dr. Elena Martínez</h4>
                    <p className="text-sm text-gray-400">Senior UX Researcher • 12 años experiencia</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />
                      ))}
                      <span className="text-xs text-gray-400 ml-2">Certificada Nielsen Norman Group</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-blue-300 mb-3">Análisis UX - Experiencia de Usuario</h5>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-green-400">✓ Fortalezas Identificadas:</span>
                      <ul className="text-sm text-gray-300 mt-1 space-y-1">
                        <li>• Reducción significativa de pasos en checkout (7→3 pasos)</li>
                        <li>• Implementación exitosa de progressive disclosure</li>
                        <li>• Mejora notable en arquitectura de información</li>
                        <li>• Excelente aplicación de principios de usabilidad de Nielsen</li>
                      </ul>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-yellow-400">⚠ Áreas de Mejora:</span>
                      <ul className="text-sm text-gray-300 mt-1 space-y-1">
                        <li>• Considerar implementar breadcrumbs en proceso de compra</li>
                        <li>• Añadir indicadores de progreso más prominentes</li>
                        <li>• Mejorar feedback visual en estados de carga</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded p-3 mt-4">
                      <p className="text-sm text-blue-200 italic">
                        "Las mejoras implementadas demuestran una comprensión profunda de los principios UX. 
                        La reducción del 34% en abandono de carrito es especialmente impresionante y refleja 
                        un diseño centrado en el usuario. Recomiendo continuar con testing A/B para optimizar 
                        micro-interacciones."
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-blue-300 font-medium">Puntuación UX: 9.2/10</span>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          Excelente
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* UI Expert Analysis */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Alex Chen</h4>
                    <p className="text-sm text-gray-400">Lead UI Designer • Google Design Team</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />
                      ))}
                      <span className="text-xs text-gray-400 ml-2">Material Design Expert</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-purple-300 mb-3">Análisis UI - Interfaz de Usuario</h5>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-green-400">✓ Excelencia Visual:</span>
                      <ul className="text-sm text-gray-300 mt-1 space-y-1">
                        <li>• Jerarquía visual clara y consistente</li>
                        <li>• Uso efectivo de espaciado y tipografía</li>
                        <li>• Paleta de colores accesible (WCAG 2.1 AA)</li>
                        <li>• Micro-interacciones fluidas y naturales</li>
                        <li>• Responsive design impecable</li>
                      </ul>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-yellow-400">⚠ Optimizaciones Sugeridas:</span>
                      <ul className="text-sm text-gray-300 mt-1 space-y-1">
                        <li>• Incrementar contraste en botones secundarios</li>
                        <li>• Considerar dark mode para mejor accesibilidad</li>
                        <li>• Optimizar iconografía para mayor claridad</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded p-3 mt-4">
                      <p className="text-sm text-purple-200 italic">
                        "El rediseño visual es sobresaliente. La implementación de un sistema de diseño 
                        coherente ha mejorado significativamente la percepción de marca. Los componentes 
                        reutilizables y la consistencia visual crean una experiencia premium que se 
                        refleja directamente en las métricas de conversión."
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-purple-300 font-medium">Puntuación UI: 9.5/10</span>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          Excepcional
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Combined Expert Recommendations */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
              <h5 className="font-medium text-white mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Recomendaciones Conjuntas de Expertos
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h6 className="font-medium text-green-300 mb-1">Prioridad Alta</h6>
                  <p className="text-xs text-gray-300">Implementar testing continuo A/B para optimización iterativa</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h6 className="font-medium text-blue-300 mb-1">Prioridad Media</h6>
                  <p className="text-xs text-gray-300">Desarrollar componentes adicionales del design system</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h6 className="font-medium text-purple-300 mb-1">Futuro</h6>
                  <p className="text-xs text-gray-300">Explorar personalización basada en comportamiento del usuario</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black">
              <BarChart3 className="w-4 h-4 mr-2" />
              Vista General
            </TabsTrigger>
            <TabsTrigger value="final-report" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black">
              <Award className="w-4 h-4 mr-2" />
              Informe Final
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Resumen General</h3>
                <p className="text-gray-400">Métricas y tendencias de todas tus pruebas</p>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="last-3-months">
                  <SelectTrigger className="w-48 bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="last-week" className="text-white hover:bg-gray-700">Última semana</SelectItem>
                    <SelectItem value="last-month" className="text-white hover:bg-gray-700">Último mes</SelectItem>
                    <SelectItem value="last-3-months" className="text-white hover:bg-gray-700">Últimos 3 meses</SelectItem>
                    <SelectItem value="last-6-months" className="text-white hover:bg-gray-700">Últimos 6 meses</SelectItem>
                    <SelectItem value="last-year" className="text-white hover:bg-gray-700">Último año</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard en Tiempo Real
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                  Exportar Reporte
                </Button>
              </div>
            </div>

            {/* Enhanced Key Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {insights.map((insight, index) => (
                <Card 
                  key={index} 
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up ${
                    insight.priority === 'critical' ? 'border-red-500/30 bg-red-500/5' :
                    insight.priority === 'positive' ? 'border-green-500/30 bg-green-500/5' :
                    'hover:border-blue-500/30'
                  }`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">
                      {insight.title}
                    </CardTitle>
                    <insight.icon className={`h-5 w-5 ${insight.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-1 text-white">{insight.value}</div>
                    <p className="text-sm text-gray-400">{insight.description}</p>
                    {insight.priority === 'critical' && (
                      <Badge className="mt-2 text-xs bg-red-500/20 text-red-300 border-red-500/30">
                        Acción Requerida
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Test Completion Trends */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-300">
                <CardHeader>
                  <CardTitle className="text-white">Evolución de Pruebas y Participación</CardTitle>
                  <CardDescription className="text-gray-400">Pruebas completadas vs. participantes por mes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={testCompletionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis yAxisId="tests" orientation="left" stroke="#9CA3AF" />
                      <YAxis yAxisId="participants" orientation="right" stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0,0,0,0.8)', 
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          color: 'white'
                        }} 
                      />
                      <Area 
                        yAxisId="tests"
                        type="monotone" 
                        dataKey="completadas" 
                        stackId="1"
                        stroke="#3B82F6" 
                        fill="#3B82F6" 
                        fillOpacity={0.6}
                        name="Completadas"
                      />
                      <Area 
                        yAxisId="tests"
                        type="monotone" 
                        dataKey="enProgreso" 
                        stackId="1"
                        stroke="#8B5CF6" 
                        fill="#8B5CF6" 
                        fillOpacity={0.6}
                        name="En Progreso"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* User Satisfaction & NPS */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-400">
                <CardHeader>
                  <CardTitle className="text-white">Satisfacción y NPS por Prueba</CardTitle>
                  <CardDescription className="text-gray-400">Puntuación de satisfacción y Net Promoter Score</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={userSatisfactionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="test" stroke="#9CA3AF" />
                      <YAxis yAxisId="satisfaction" orientation="left" domain={[0, 5]} stroke="#9CA3AF" />
                      <YAxis yAxisId="nps" orientation="right" domain={[0, 100]} stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0,0,0,0.8)', 
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          color: 'white'
                        }} 
                      />
                      <Bar yAxisId="satisfaction" dataKey="satisfaction" fill="#10B981" name="Satisfacción (1-5)" />
                      <Bar yAxisId="nps" dataKey="nps" fill="#3B82F6" name="NPS" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Recent Findings */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-500">
              <CardHeader>
                <CardTitle className="text-white">Hallazgos y Recomendaciones</CardTitle>
                <CardDescription className="text-gray-400">Insights detallados con estado de implementación</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFindings.map((finding, index) => (
                    <div key={index} className={`border-l-4 pl-4 py-3 rounded-r-lg bg-white/5 ${
                      finding.severity === "Crítica" ? 'border-red-500' :
                      finding.severity === "Alta" ? 'border-orange-500' :
                      finding.severity === "Positivo" ? 'border-green-500' :
                      'border-blue-500'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{finding.test}</h4>
                        <div className="flex items-center gap-2">
                          <Badge 
                            className={
                              finding.severity === "Crítica" ? "bg-red-500/20 text-red-300 border-red-500/30" :
                              finding.severity === "Alta" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
                              finding.severity === "Positivo" ? "bg-green-500/20 text-green-300 border-green-500/30" : 
                              "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            }
                          >
                            {finding.severity}
                          </Badge>
                          <Badge 
                            className={
                              finding.status === "implemented" ? "bg-green-500/20 text-green-300 border-green-500/30" :
                              finding.status === "in-progress" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : 
                              "bg-gray-500/20 text-gray-300 border-gray-500/30"
                            }
                          >
                            {finding.status === "implemented" ? "Implementado" :
                             finding.status === "in-progress" ? "En Progreso" : "Pendiente"}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{finding.finding}</p>
                      <p className="text-xs text-gray-400 mb-2 font-medium">Impacto: {finding.impact}</p>
                      <p className="text-xs text-blue-300 bg-blue-500/10 p-2 rounded border border-blue-500/20">
                        <strong>Recomendación:</strong> {finding.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Final Report Tab */}
          <TabsContent value="final-report" className="space-y-8">
            {/* Report Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-6">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-green-200 font-medium">Informe Completado</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {finalReportData.projectName}
              </h2>
              <div className="flex justify-center gap-8 text-sm text-gray-400">
                <span>Duración: {finalReportData.duration}</span>
                <span>Participantes: {finalReportData.totalParticipants}</span>
                <span>Completado: {new Date(finalReportData.completionDate).toLocaleDateString()}</span>
                <span>Score General: {finalReportData.overallScore}/10</span>
              </div>
            </div>

            {/* Business Impact Summary */}
            <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  Impacto en Rentabilidad
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Mejoras cuantificables tras implementar las recomendaciones UX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {finalReportData.businessImpact.conversionImprovement}
                    </div>
                    <div className="text-sm text-gray-300">Mejora Conversión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {finalReportData.businessImpact.revenueIncrease}
                    </div>
                    <div className="text-sm text-gray-300">Incremento Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {finalReportData.businessImpact.cartAbandonmentReduction}
                    </div>
                    <div className="text-sm text-gray-300">Reducción Abandono</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {finalReportData.businessImpact.customerSatisfactionIncrease}
                    </div>
                    <div className="text-sm text-gray-300">Satisfacción Cliente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {finalReportData.businessImpact.timeToCheckoutReduction}
                    </div>
                    <div className="text-sm text-gray-300">Tiempo Checkout</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {finalReportData.businessImpact.supportTicketsReduction}
                    </div>
                    <div className="text-sm text-gray-300">Tickets Soporte</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UX Improvements Images */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Image className="w-5 h-5 text-cyan-400" />
                  Mejoras UX Implementadas
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Comparativa visual antes y después de las optimizaciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {finalReportData.uxImprovements.map((improvement, index) => (
                    <div key={index} className="border border-white/10 rounded-lg p-6 bg-white/5">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{improvement.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{improvement.description}</p>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {improvement.improvement}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-red-300 flex items-center gap-2">
                            <ThumbsDown className="w-4 h-4" />
                            Antes
                          </h5>
                          <div className="relative group">
                            <img 
                              src={improvement.beforeImage} 
                              alt={`${improvement.title} - Antes`}
                              className="w-full h-48 object-cover rounded-lg border border-red-500/30"
                            />
                            <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white font-medium">Versión Original</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-green-300 flex items-center gap-2">
                            <ThumbsUp className="w-4 h-4" />
                            Después
                          </h5>
                          <div className="relative group">
                            <img 
                              src={improvement.afterImage} 
                              alt={`${improvement.title} - Después`}
                              className="w-full h-48 object-cover rounded-lg border border-green-500/30"
                            />
                            <div className="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white font-medium">Versión Mejorada</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Test Results Summary */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-blue-400" />
                  Resultados de Pruebas UX
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Resumen completo de todas las metodologías aplicadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {finalReportData.testResults.map((test, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getTestTypeColor(test.type)}>{test.type}</Badge>
                              <h4 className="font-medium text-white">{test.name}</h4>
                              <Badge className={getPriorityColor(test.priority)}>{test.priority}</Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                              <div>
                                <span className="text-gray-400">Participantes:</span>
                                <span className="text-white ml-1">{test.participants}</span>
                              </div>
                              <div>
                                <span className="text-gray-400">Éxito:</span>
                                <span className="text-white ml-1">{test.successRate}%</span>
                              </div>
                              <div>
                                <span className="text-gray-400">Tiempo:</span>
                                <span className="text-white ml-1">{test.avgTime}</span>
                              </div>
                              <div>
                                <span className="text-gray-400">Satisfacción:</span>
                                <span className="text-white ml-1">{test.satisfaction}/5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <span className="text-sm font-medium text-blue-400 block mb-1">Hallazgos Clave:</span>
                          <div className="text-sm text-gray-300">
                            {test.keyFindings.join(" • ")}
                          </div>
                        </div>

                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <span className="text-sm font-medium text-green-400 block mb-1">Impacto en Negocio:</span>
                          <span className="text-sm text-green-200">{test.businessImpact}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Personas Insights */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Insights por User Persona
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Feedback directo y niveles de satisfacción por segmento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {finalReportData.personas.map((persona, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-white">{persona.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                              {persona.participation}% participación
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white text-sm">{persona.satisfaction}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4 p-3 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                          <div className="flex items-start gap-2">
                            <div className="text-blue-400 mt-1">"</div>
                            <p className="text-blue-200 italic text-sm">{persona.quote}</p>
                            <div className="text-blue-400 mt-1">"</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <span className="text-xs font-medium text-red-400 uppercase tracking-wide block mb-1">
                              Pain Points:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {persona.painPoints.map((pain, idx) => (
                                <Badge key={idx} className="text-xs bg-red-500/20 text-red-300 border-red-500/30">
                                  {pain}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="text-xs font-medium text-green-400 uppercase tracking-wide block mb-1">
                              Mejoras Sugeridas:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {persona.improvements.map((improvement, idx) => (
                                <Badge key={idx} className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                                  {improvement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prototype Comparison */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  Comparativa: Prototipo Original vs. Mejorado
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Métricas antes y después de implementar las mejoras UX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Original */}
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <h4 className="font-medium text-red-300 mb-4 flex items-center gap-2">
                      <ThumbsDown className="w-4 h-4" />
                      Versión Original
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pasos Checkout:</span>
                        <span className="text-white">{finalReportData.prototypeComparison.original.checkoutSteps}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Conversión:</span>
                        <span className="text-white">{finalReportData.prototypeComparison.original.conversionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tiempo Checkout:</span>
                        <span className="text-white">{finalReportData.prototypeComparison.original.avgCheckoutTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Abandono Carrito:</span>
                        <span className="text-white">{finalReportData.prototypeComparison.original.cartAbandonment}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Usabilidad Móvil:</span>
                        <span className="text-white">{finalReportData.prototypeComparison.original.mobileUsability}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Satisfacción:</span>
                        <span className="text-white">{finalReportData.prototypeComparison.original.overallSatisfaction}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Improved */}
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <h4 className="font-medium text-green-300 mb-4 flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      Versión Mejorada
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pasos Checkout:</span>
                        <span className="text-green-300 font-medium">{finalReportData.prototypeComparison.improved.checkoutSteps}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Conversión:</span>
                        <span className="text-green-300 font-medium">{finalReportData.prototypeComparison.improved.conversionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tiempo Checkout:</span>
                        <span className="text-green-300 font-medium">{finalReportData.prototypeComparison.improved.avgCheckoutTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Abandono Carrito:</span>
                        <span className="text-green-300 font-medium">{finalReportData.prototypeComparison.improved.cartAbandonment}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Usabilidad Móvil:</span>
                        <span className="text-green-300 font-medium">{finalReportData.prototypeComparison.improved.mobileUsability}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Satisfacción:</span>
                        <span className="text-green-300 font-medium">{finalReportData.prototypeComparison.improved.overallSatisfaction}/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations & ROI */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-400" />
                  Plan de Mejoras Prioritizado
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Recomendaciones con impacto estimado y cronograma de implementación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {finalReportData.improvements.map((improvement, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-white">{improvement.category}</h4>
                              <Badge className={getPriorityColor(improvement.priority)}>{improvement.priority}</Badge>
                              <Badge className={getStatusColor(improvement.status)}>{improvement.status}</Badge>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">{improvement.recommendation}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                          <div className="p-2 bg-green-500/10 border border-green-500/20 rounded">
                            <div className="text-xs text-green-400 uppercase tracking-wide">Impacto Esperado</div>
                            <div className="text-sm text-green-300 font-medium">{improvement.expectedImprovement}</div>
                          </div>
                          <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded">
                            <div className="text-xs text-blue-400 uppercase tracking-wide">Timeline</div>
                            <div className="text-sm text-blue-300 font-medium">{improvement.timeline}</div>
                          </div>
                          <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded">
                            <div className="text-xs text-purple-400 uppercase tracking-wide">Esfuerzo</div>
                            <div className="text-sm text-purple-300 font-medium">{improvement.effort}</div>
                          </div>
                          <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                            <div className="text-xs text-yellow-400 uppercase tracking-wide">Coste Estimado</div>
                            <div className="text-sm text-yellow-300 font-medium">{improvement.cost}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-lg">
                  <h4 className="font-medium text-yellow-300 mb-2">Resumen de Inversión Total</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Inversión Total:</span>
                      <span className="text-white ml-2 font-medium">€128,000</span>
                    </div>
                    <div>
                      <span className="text-gray-400">ROI Estimado:</span>
                      <span className="text-green-300 ml-2 font-medium">1,875% (€2.4M)</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Payback Period:</span>
                      <span className="text-white ml-2 font-medium">2.1 meses</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Export Actions */}
            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl">
                <FileText className="w-4 h-4 mr-2" />
                Exportar Informe Completo (PDF)
              </Button>
              <Button variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Compartir con Stakeholders
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;