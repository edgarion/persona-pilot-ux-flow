
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Users, TestTube, CheckCircle, Clock } from "lucide-react";

const Analytics = () => {
  // Mock data for charts
  const testCompletionData = [
    { month: 'Ene', completadas: 12, enProgreso: 5, planificadas: 3 },
    { month: 'Feb', completadas: 15, enProgreso: 7, planificadas: 4 },
    { month: 'Mar', completadas: 18, enProgreso: 6, planificadas: 2 },
    { month: 'Abr', completadas: 22, enProgreso: 8, planificadas: 5 },
    { month: 'May', completadas: 25, enProgreso: 9, planificadas: 3 },
    { month: 'Jun', completadas: 28, enProgreso: 5, planificadas: 7 }
  ];

  const personaUsageData = [
    { name: 'Profesionales Tech', value: 35, color: '#3B82F6' },
    { name: 'Compradores Millennials', value: 25, color: '#8B5CF6' },
    { name: 'Padres Ocupados', value: 20, color: '#06B6D4' },
    { name: 'Emprendedores', value: 12, color: '#10B981' },
    { name: 'Power Users', value: 8, color: '#F59E0B' }
  ];

  const successRateData = [
    { test: 'E-commerce Nav', tasa: 84, participantes: 12 },
    { test: 'Dashboard Móvil', tasa: 92, participantes: 8 },
    { test: 'Onboarding', tasa: 78, participantes: 15 },
    { test: 'Checkout Flow', tasa: 89, participantes: 10 },
    { test: 'Search Feature', tasa: 76, participantes: 14 }
  ];

  const insights = [
    {
      title: "Mejor Rendimiento",
      description: "Dashboard Móvil con 92% de éxito",
      trend: "up",
      value: "+8%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Área de Mejora",
      description: "Search Feature necesita optimización",
      trend: "down", 
      value: "-6%",
      icon: TrendingDown,
      color: "text-red-600"
    },
    {
      title: "Persona Más Activa",
      description: "Profesionales Tech (35% de uso)",
      trend: "up",
      value: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Tiempo Promedio",
      description: "Pruebas completadas en 14 días",
      trend: "down",
      value: "-2 días",
      icon: Clock,
      color: "text-purple-600"
    }
  ];

  const recentFindings = [
    {
      test: "E-commerce Navigation",
      finding: "Los usuarios tienen dificultades para encontrar el filtro de precio",
      severity: "Alta",
      impact: "Reduce conversiones en 23%"
    },
    {
      test: "Dashboard Móvil",
      finding: "Excelente usabilidad en dispositivos móviles",
      severity: "Positivo",
      impact: "Aumenta tiempo de sesión 15%"
    },
    {
      test: "Onboarding Flow",
      finding: "Tutorial muy largo, usuarios abandonan en paso 4",
      severity: "Media",
      impact: "38% abandono en onboarding"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Analytics & Insights</h2>
          <p className="text-slate-600 mt-1">Análisis de tus pruebas de usuario y personas</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="last-3-months">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-month">Último mes</SelectItem>
              <SelectItem value="last-3-months">Últimos 3 meses</SelectItem>
              <SelectItem value="last-6-months">Últimos 6 meses</SelectItem>
              <SelectItem value="last-year">Último año</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            Exportar Reporte
          </Button>
        </div>
      </div>

      {/* Key Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {insight.title}
              </CardTitle>
              <insight.icon className={`h-5 w-5 ${insight.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{insight.value}</div>
              <p className="text-sm text-slate-600">{insight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Completion Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Tendencia de Pruebas</CardTitle>
            <CardDescription>Evolución de pruebas por estado en los últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={testCompletionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completadas" stackId="a" fill="#3B82F6" name="Completadas" />
                <Bar dataKey="enProgreso" stackId="a" fill="#8B5CF6" name="En Progreso" />
                <Bar dataKey="planificadas" stackId="a" fill="#06B6D4" name="Planificadas" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Persona Usage Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Uso de User Personas</CardTitle>
            <CardDescription>Distribución de personas en las pruebas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={personaUsageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {personaUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Success Rates */}
      <Card>
        <CardHeader>
          <CardTitle>Tasas de Éxito por Prueba</CardTitle>
          <CardDescription>Porcentaje de éxito y número de participantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {successRateData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.test}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.participantes} participantes</Badge>
                      <span className="text-lg font-bold">{item.tasa}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        item.tasa >= 85 ? 'bg-green-500' : 
                        item.tasa >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.tasa}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Findings */}
      <Card>
        <CardHeader>
          <CardTitle>Hallazgos Recientes</CardTitle>
          <CardDescription>Insights más importantes de las últimas pruebas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFindings.map((finding, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{finding.test}</h4>
                  <Badge 
                    variant={
                      finding.severity === "Alta" ? "destructive" :
                      finding.severity === "Positivo" ? "default" : "secondary"
                    }
                  >
                    {finding.severity}
                  </Badge>
                </div>
                <p className="text-sm text-slate-700 mb-1">{finding.finding}</p>
                <p className="text-xs text-slate-500">{finding.impact}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
