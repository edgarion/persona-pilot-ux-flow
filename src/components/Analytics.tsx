
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, Users, TestTube, CheckCircle, Clock, AlertTriangle, Target, Zap } from "lucide-react";

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

  const timeToCompleteData = [
    { test: 'Login Flow', tiempo: 2.5, objetivo: 3.0, status: 'good' },
    { test: 'Checkout', tiempo: 8.2, objetivo: 6.0, status: 'warning' },
    { test: 'Búsqueda', tiempo: 1.8, objetivo: 2.0, status: 'good' },
    { test: 'Onboarding', tiempo: 12.5, objetivo: 10.0, status: 'critical' },
    { test: 'Navegación', tiempo: 3.2, objetivo: 4.0, status: 'good' }
  ];

  const heatmapData = [
    { feature: 'Navegación', desktop: 95, mobile: 78, tablet: 85 },
    { feature: 'Búsqueda', desktop: 88, mobile: 92, tablet: 89 },
    { feature: 'Checkout', desktop: 76, mobile: 65, tablet: 70 },
    { feature: 'Perfil', desktop: 91, mobile: 88, tablet: 90 },
    { feature: 'Soporte', desktop: 67, mobile: 72, tablet: 68 }
  ];

  const conversionFunnelData = [
    { step: 'Landing', visitors: 10000, conversion: 100 },
    { step: 'Registro', visitors: 6500, conversion: 65 },
    { step: 'Onboarding', visitors: 4875, conversion: 75 },
    { step: 'Primera Acción', visitors: 3412, conversion: 70 },
    { step: 'Conversión Final', visitors: 2059, conversion: 60 }
  ];

  const insights = [
    {
      title: "Mejor Rendimiento",
      description: "Dashboard Móvil con 92% de éxito",
      trend: "up",
      value: "+8%",
      icon: TrendingUp,
      color: "text-green-600",
      priority: "positive"
    },
    {
      title: "Área Crítica",
      description: "Onboarding necesita atención urgente",
      trend: "down", 
      value: "-15%",
      icon: AlertTriangle,
      color: "text-red-600",
      priority: "critical"
    },
    {
      title: "Persona Más Activa",
      description: "Profesionales Tech (35% de uso)",
      trend: "up",
      value: "+12%",
      icon: Users,
      color: "text-blue-600",
      priority: "info"
    },
    {
      title: "NPS Promedio",
      description: "Score de 58 en últimas pruebas",
      trend: "up",
      value: "+5 pts",
      icon: Target,
      color: "text-purple-600",
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
    },
    {
      test: "Search Feature",
      finding: "Resultados poco relevantes en primeras posiciones",
      severity: "Media",
      impact: "Usuarios hacen 3.2 búsquedas en promedio",
      recommendation: "Mejorar algoritmo de relevancia y añadir filtros inteligentes",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with enhanced controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Analytics Dashboard</h2>
          <p className="text-slate-600 mt-1">Análisis completo de tus pruebas UX y comportamiento de usuarios</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="last-3-months">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-week">Última semana</SelectItem>
              <SelectItem value="last-month">Último mes</SelectItem>
              <SelectItem value="last-3-months">Últimos 3 meses</SelectItem>
              <SelectItem value="last-6-months">Últimos 6 meses</SelectItem>
              <SelectItem value="last-year">Último año</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <TrendingUp className="w-4 h-4 mr-2" />
            Dashboard en Vivo
          </Button>
          <Button variant="outline">
            Exportar Reporte
          </Button>
        </div>
      </div>

      {/* Enhanced Key Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className={`hover:shadow-md transition-shadow ${
            insight.priority === 'critical' ? 'border-red-200 bg-red-50' :
            insight.priority === 'positive' ? 'border-green-200 bg-green-50' :
            'hover:border-blue-200'
          }`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {insight.title}
              </CardTitle>
              <insight.icon className={`h-5 w-5 ${insight.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{insight.value}</div>
              <p className="text-sm text-slate-600">{insight.description}</p>
              {insight.priority === 'critical' && (
                <Badge variant="destructive" className="mt-2 text-xs">
                  Acción Requerida
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Completion Trends with Participants */}
        <Card>
          <CardHeader>
            <CardTitle>Evolución de Pruebas y Participación</CardTitle>
            <CardDescription>Pruebas completadas vs. participantes por mes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={testCompletionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="tests" orientation="left" />
                <YAxis yAxisId="participants" orientation="right" />
                <Tooltip />
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
                <Line 
                  yAxisId="participants"
                  type="monotone" 
                  dataKey="participantes" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  name="Participantes"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Satisfaction & NPS */}
        <Card>
          <CardHeader>
            <CardTitle>Satisfacción y NPS por Prueba</CardTitle>
            <CardDescription>Puntuación de satisfacción y Net Promoter Score</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userSatisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="test" />
                <YAxis yAxisId="satisfaction" orientation="left" domain={[0, 5]} />
                <YAxis yAxisId="nps" orientation="right" domain={[0, 100]} />
                <Tooltip />
                <Bar yAxisId="satisfaction" dataKey="satisfaction" fill="#10B981" name="Satisfacción (1-5)" />
                <Bar yAxisId="nps" dataKey="nps" fill="#3B82F6" name="NPS" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time to Complete Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Tiempo de Completado vs. Objetivo</CardTitle>
            <CardDescription>Análisis de eficiencia en tareas clave (minutos)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeToCompleteData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.test}</span>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={
                          item.status === 'good' ? 'default' :
                          item.status === 'warning' ? 'secondary' : 'destructive'
                        }
                      >
                        {item.tiempo}min
                      </Badge>
                      <span className="text-sm text-slate-500">obj: {item.objetivo}min</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          item.status === 'good' ? 'bg-green-500' :
                          item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min((item.tiempo / item.objetivo) * 100, 100)}%` }}
                      />
                    </div>
                    <div 
                      className="absolute top-0 w-1 h-3 bg-slate-600"
                      style={{ left: '100%', transform: 'translateX(-1px)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Device Performance Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento por Dispositivo</CardTitle>
            <CardDescription>Puntuación de usabilidad por característica y dispositivo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={heatmapData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="feature" />
                <PolarRadiusAxis angle={0} domain={[0, 100]} />
                <Radar name="Desktop" dataKey="desktop" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
                <Radar name="Mobile" dataKey="mobile" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.1} />
                <Radar name="Tablet" dataKey="tablet" stroke="#10B981" fill="#10B981" fillOpacity={0.1} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Embudo de Conversión</CardTitle>
          <CardDescription>Análisis de abandono en cada paso del proceso</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionFunnelData.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      step.conversion >= 70 ? 'bg-green-500' :
                      step.conversion >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium">{step.step}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{step.visitors.toLocaleString()}</div>
                    <div className="text-sm text-slate-500">{step.conversion}% conversión</div>
                  </div>
                </div>
                <div className="ml-11">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${step.conversion}%` }}
                    />
                  </div>
                  {index < conversionFunnelData.length - 1 && (
                    <div className="text-xs text-red-600 mt-1">
                      -{((conversionFunnelData[index].visitors - conversionFunnelData[index + 1].visitors) / conversionFunnelData[index].visitors * 100).toFixed(1)}% abandono
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Recent Findings */}
      <Card>
        <CardHeader>
          <CardTitle>Hallazgos y Recomendaciones</CardTitle>
          <CardDescription>Insights detallados con estado de implementación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFindings.map((finding, index) => (
              <div key={index} className={`border-l-4 pl-4 py-3 rounded-r-lg ${
                finding.severity === "Crítica" ? 'border-red-500 bg-red-50' :
                finding.severity === "Alta" ? 'border-orange-500 bg-orange-50' :
                finding.severity === "Positivo" ? 'border-green-500 bg-green-50' :
                'border-blue-500 bg-blue-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{finding.test}</h4>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        finding.severity === "Crítica" ? "destructive" :
                        finding.severity === "Alta" ? "destructive" :
                        finding.severity === "Positivo" ? "default" : "secondary"
                      }
                    >
                      {finding.severity}
                    </Badge>
                    <Badge 
                      variant={
                        finding.status === "implemented" ? "default" :
                        finding.status === "in-progress" ? "secondary" : "outline"
                      }
                    >
                      {finding.status === "implemented" ? "Implementado" :
                       finding.status === "in-progress" ? "En Progreso" : "Pendiente"}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mb-2">{finding.finding}</p>
                <p className="text-xs text-slate-600 mb-2 font-medium">Impacto: {finding.impact}</p>
                <p className="text-xs text-blue-700 bg-blue-100 p-2 rounded">
                  <strong>Recomendación:</strong> {finding.recommendation}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
