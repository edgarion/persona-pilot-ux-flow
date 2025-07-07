import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, TrendingDown, Users, TestTube, CheckCircle, Clock, AlertTriangle, Target, Zap, BarChart3, Award, FileText, Lightbulb, ArrowRight, Star, ThumbsUp, ThumbsDown } from "lucide-react";

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

  // Datos del proyecto final completo
  const finalProjectData = {
    projectName: "Rediseño E-commerce Mobile",
    duration: "8 semanas",
    totalParticipants: 127,
    completionDate: "2024-01-20",
    overallScore: 8.4,
    npsScore: 72,
    
    testResults: [
      {
        type: "Usabilidad",
        name: "Navegación Principal",
        participants: 24,
        successRate: 87,
        avgTime: "2:34",
        satisfaction: 4.2,
        keyFindings: ["Menú hamburguesa confuso", "Búsqueda muy efectiva", "Categorías bien organizadas"],
        status: "Completado",
        priority: "Alta"
      },
      {
        type: "A/B Testing",
        name: "Proceso de Checkout",
        participants: 45,
        successRate: 92,
        avgTime: "3:12",
        satisfaction: 4.6,
        keyFindings: ["Versión B 23% mejor", "Menos pasos = más conversión", "Formulario simplificado exitoso"],
        status: "Completado",
        priority: "Crítica"
      },
      {
        type: "Card Sorting",
        name: "Categorización Productos",
        participants: 18,
        successRate: 78,
        avgTime: "15:45",
        satisfaction: 3.8,
        keyFindings: ["Categorías confusas", "Subcategorías muy profundas", "Filtros mal ubicados"],
        status: "Completado",
        priority: "Media"
      },
      {
        type: "Focus Group",
        name: "Experiencia Mobile",
        participants: 12,
        successRate: 85,
        avgTime: "45:00",
        satisfaction: 4.4,
        keyFindings: ["Diseño atractivo", "Velocidad de carga lenta", "Gestos intuitivos"],
        status: "Completado",
        priority: "Alta"
      },
      {
        type: "Tree Testing",
        name: "Arquitectura Información",
        participants: 28,
        successRate: 73,
        avgTime: "8:22",
        satisfaction: 3.9,
        keyFindings: ["Estructura profunda", "Etiquetas ambiguas", "Rutas alternativas confusas"],
        status: "Completado",
        priority: "Media"
      }
    ],
    
    improvements: [
      {
        category: "Navegación",
        priority: "Crítica",
        impact: "Alto",
        effort: "Medio",
        recommendation: "Rediseñar menú principal con iconografía clara y reducir niveles de navegación",
        expectedImprovement: "+15% en task completion",
        status: "Pendiente"
      },
      {
        category: "Checkout",
        priority: "Crítica", 
        impact: "Alto",
        effort: "Alto",
        recommendation: "Implementar checkout de un solo paso con autocompletado inteligente",
        expectedImprovement: "+23% conversión",
        status: "En progreso"
      },
      {
        category: "Búsqueda",
        priority: "Alta",
        impact: "Medio",
        effort: "Bajo",
        recommendation: "Añadir filtros visuales y sugerencias automáticas en tiempo real",
        expectedImprovement: "+12% engagement",
        status: "Completado"
      },
      {
        category: "Performance",
        priority: "Alta",
        impact: "Alto",
        effort: "Alto",
        recommendation: "Optimizar imágenes y implementar lazy loading para mejorar velocidad",
        expectedImprovement: "+2s tiempo de carga",
        status: "Pendiente"
      },
      {
        category: "Accesibilidad",
        priority: "Media",
        impact: "Medio",
        effort: "Medio",
        recommendation: "Mejorar contraste de colores y añadir etiquetas ARIA",
        expectedImprovement: "+5% usuarios accesibles",
        status: "Planificado"
      }
    ],
    
    personas: [
      { name: "Compradores Millennials", participation: 35, satisfaction: 4.3 },
      { name: "Padres Ocupados", participation: 28, satisfaction: 4.1 },
      { name: "Profesionales Tech", participation: 22, satisfaction: 4.6 },
      { name: "Usuarios Móviles", participation: 15, satisfaction: 4.0 }
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

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black">
              <BarChart3 className="w-4 h-4 mr-2" />
              Vista General
            </TabsTrigger>
            <TabsTrigger value="project-final" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black">
              <Award className="w-4 h-4 mr-2" />
              Proyecto Final
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

          {/* Project Final Tab */}
          <TabsContent value="project-final" className="space-y-8">
            {/* Project Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-4">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-green-200 font-medium">Proyecto Completado</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{finalProjectData.projectName}</h3>
              <div className="flex items-center justify-center gap-6 text-gray-400">
                <span>Duración: {finalProjectData.duration}</span>
                <span>•</span>
                <span>{finalProjectData.totalParticipants} participantes</span>
                <span>•</span>
                <span>Completado: {new Date(finalProjectData.completionDate).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Project Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-green-300 flex items-center justify-center gap-2">
                    <Star className="w-5 h-5" />
                    Puntuación General
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{finalProjectData.overallScore}/10</div>
                  <p className="text-green-200">Excelente resultado</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-500/30 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-blue-300 flex items-center justify-center gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    NPS Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{finalProjectData.npsScore}</div>
                  <p className="text-blue-200">Muy positivo</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-purple-300 flex items-center justify-center gap-2">
                    <TestTube className="w-5 h-5" />
                    Pruebas Realizadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{finalProjectData.testResults.length}</div>
                  <p className="text-purple-200">Metodologías diversas</p>
                </CardContent>
              </Card>
            </div>

            {/* Test Results */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-blue-400" />
                  Resultados por Tipo de Prueba
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Análisis detallado de cada metodología aplicada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {finalProjectData.testResults.map((test, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getTestTypeColor(test.type)}>{test.type}</Badge>
                              <h4 className="font-medium text-white">{test.name}</h4>
                              <Badge className={getPriorityColor(test.priority)}>{test.priority}</Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                              <div>
                                <span className="text-xs text-gray-400">Participantes</span>
                                <p className="text-white font-medium">{test.participants}</p>
                              </div>
                              <div>
                                <span className="text-xs text-gray-400">Éxito</span>
                                <p className="text-white font-medium">{test.successRate}%</p>
                              </div>
                              <div>
                                <span className="text-xs text-gray-400">Tiempo Promedio</span>
                                <p className="text-white font-medium">{test.avgTime}</p>
                              </div>
                              <div>
                                <span className="text-xs text-gray-400">Satisfacción</span>
                                <p className="text-white font-medium">{test.satisfaction}/5</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-yellow-400 block mb-2">Hallazgos Clave:</span>
                          <div className="space-y-1">
                            {test.keyFindings.map((finding, idx) => (
                              <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                <Lightbulb className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                {finding}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Improvements & Recommendations */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Mejoras Propuestas y Estado de Implementación
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Recomendaciones priorizadas basadas en los resultados de las pruebas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {finalProjectData.improvements.map((improvement, index) => (
                    <Card key={index} className={`bg-white/5 border border-white/10 hover:bg-white/10 transition-colors border-l-4 ${
                      improvement.priority === "Crítica" ? 'border-l-red-500' :
                      improvement.priority === "Alta" ? 'border-l-orange-500' :
                      'border-l-yellow-500'
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-white">{improvement.category}</h4>
                              <Badge className={getPriorityColor(improvement.priority)}>{improvement.priority}</Badge>
                              <Badge className={getStatusColor(improvement.status)}>{improvement.status}</Badge>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-3">
                              <div>
                                <span className="text-xs text-gray-400">Impacto</span>
                                <p className="text-white font-medium">{improvement.impact}</p>
                              </div>
                              <div>
                                <span className="text-xs text-gray-400">Esfuerzo</span>
                                <p className="text-white font-medium">{improvement.effort}</p>
                              </div>
                              <div>
                                <span className="text-xs text-gray-400">Mejora Esperada</span>
                                <p className="text-green-300 font-medium">{improvement.expectedImprovement}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                          <span className="text-sm font-medium text-blue-300 block mb-1">Recomendación:</span>
                          <p className="text-sm text-gray-300">{improvement.recommendation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personas Performance */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Rendimiento por User Persona
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Participación y satisfacción de cada segmento de usuarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={finalProjectData.personas}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="participation"
                          label={({ name, participation }) => `${name}: ${participation}%`}
                        >
                          {finalProjectData.personas.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'][index % 4]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(0,0,0,0.8)', 
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '8px',
                            color: 'white'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3">
                    {finalProjectData.personas.map((persona, index) => (
                      <div key={index} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white">{persona.name}</h4>
                          <Badge className="bg-white/10 text-gray-300 border-white/20">
                            {persona.participation}% participación
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Satisfacción:</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(persona.satisfaction) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                              />
                            ))}
                            <span className="text-white font-medium ml-1">{persona.satisfaction}/5</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final Summary */}
            <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-400" />
                  Resumen Ejecutivo del Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-300 mb-1">87%</div>
                      <p className="text-sm text-gray-300">Tasa de éxito promedio</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-300 mb-1">23%</div>
                      <p className="text-sm text-gray-300">Mejora en conversión esperada</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-300 mb-1">5</div>
                      <p className="text-sm text-gray-300">Mejoras críticas identificadas</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-300 mb-2">Conclusiones Principales:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        El rediseño del checkout mostró una mejora significativa del 23% en conversión
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        La navegación móvil necesita simplificación urgente para mejorar la experiencia
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        Los usuarios valoran la velocidad por encima de funcionalidades adicionales
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        La implementación de las mejoras propuestas puede aumentar la satisfacción general en un 15%
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl">
                      <FileText className="w-4 h-4 mr-2" />
                      Descargar Reporte Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Analytics Dashboard
            </h2>
            <p className="text-gray-400 mt-2 text-lg">Análisis completo de tus pruebas UX y comportamiento de usuarios</p>
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
      </div>
    </div>
  );
};

export default Analytics;