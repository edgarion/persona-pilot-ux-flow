import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Users, 
  TestTube, 
  BarChart3, 
  Plus, 
  Play, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

interface DashboardContentProps {
  onTabChange: (tab: string) => void;
}

const DashboardContent = ({ onTabChange }: DashboardContentProps) => {
  const stats = [
    {
      title: "Personas de Usuario",
      value: "12",
      description: "Personas activas",
      icon: Users,
      trend: "+2 este mes",
      color: "from-yellow-500 to-orange-500",
      action: () => onTabChange("personas")
    },
    {
      title: "Pruebas Activas",
      value: "5",
      description: "En progreso",
      icon: TestTube,
      trend: "+1 esta semana",
      color: "from-orange-500 to-red-500",
      action: () => onTabChange("tests")
    },
    {
      title: "Tasa de Éxito",
      value: "84%",
      description: "Promedio general",
      icon: BarChart3,
      trend: "+5% vs mes anterior",
      color: "from-green-500 to-emerald-500",
      action: () => onTabChange("analytics")
    }
  ];

  const recentTests = [
    {
      id: 1,
      name: "Prueba de Navegación E-commerce",
      personas: ["Compradores Millennials", "Padres Ocupados"],
      status: "En progreso",
      completion: 75,
      type: "Usabilidad"
    },
    {
      id: 2,
      name: "Usabilidad Dashboard Móvil",
      personas: ["Profesionales Tech", "Emprendedores"],
      status: "Completada",
      completion: 100,
      type: "Mobile UX"
    },
    {
      id: 3,
      name: "Onboarding Nueva App",
      personas: ["Usuarios Novatos", "Power Users"],
      status: "Planificada",
      completion: 0,
      type: "Onboarding"
    }
  ];

  const tutorials = [
    {
      title: "Crear tu Primera Prueba UX",
      description: "Aprende a configurar y ejecutar pruebas de usabilidad efectivas",
      duration: "8 min",
      difficulty: "Principiante",
      action: () => onTabChange("tests")
    },
    {
      title: "Generación de User Personas",
      description: "Cómo crear personas detalladas usando arquetipos psicológicos",
      duration: "12 min",
      difficulty: "Intermedio",
      action: () => onTabChange("persona-generator")
    },
    {
      title: "Análisis de Focus Groups",
      description: "Interpreta resultados y genera insights accionables",
      duration: "15 min",
      difficulty: "Avanzado",
      action: () => onTabChange("analytics")
    }
  ];

  const quickActions = [
    {
      title: "Crear Proyecto con IA",
      description: "Describe tu proyecto y obtén un plan completo",
      icon: Zap,
      action: () => onTabChange("project-creator"),
      tooltip: "Usa IA para generar automáticamente un plan de testing personalizado"
    },
    {
      title: "Nuevo Focus Group",
      description: "Configura una sesión de focus group",
      icon: Users,
      action: () => onTabChange("tests"),
      tooltip: "Crea y gestiona sesiones de focus group con participantes reales"
    },
    {
      title: "Analizar Documentos",
      description: "Sube documentación para análisis automático",
      icon: Target,
      action: () => onTabChange("docs-analyzer"),
      tooltip: "Analiza wireframes, especificaciones y obtén recomendaciones automáticas"
    }
  ];

  return (
    <TooltipProvider>
      <div className="space-y-8 pt-20">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
            Bienvenido al Dashboard
          </h1>
          <p className="text-gray-400 text-xl animate-fade-in-up delay-200">
            Gestiona tus proyectos UX, personas y pruebas desde un solo lugar
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 group cursor-pointer"
              onClick={stat.action}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  {stat.title}
                </CardTitle>
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400 mb-2">{stat.description}</p>
                <Badge className="text-xs bg-white/10 text-gray-300 border-white/20">
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              Acciones Rápidas
            </CardTitle>
            <CardDescription className="text-gray-400">
              Comienza rápidamente con estas acciones recomendadas para optimizar tu flujo de trabajo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card 
                      className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
                      onClick={action.action}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <action.icon className="w-4 h-4 text-black" />
                          </div>
                          <h3 className="font-semibold text-white group-hover:text-yellow-300 transition-colors">
                            {action.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">{action.description}</p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm bg-gray-900 border-gray-700 text-white p-3 rounded-xl">
                    <p>{action.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tests and Tutorials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-up delay-600">
          {/* Recent Tests */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Pruebas Recientes</CardTitle>
                <CardDescription className="text-gray-400">
                  Últimas pruebas de usuario realizadas
                </CardDescription>
              </div>
              <Button 
                size="sm" 
                onClick={() => onTabChange("tests")}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="w-4 h-4 mr-2" />
                Nueva Prueba
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test) => (
                  <div
                    key={test.id}
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10"
                    onClick={() => onTabChange("tests")}
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {test.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="text-xs bg-white/10 text-gray-300 border-white/20">
                          {test.type}
                        </Badge>
                        <Badge
                          className={`text-xs ${
                            test.status === "Completada"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              : test.status === "En progreso"
                              ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                              : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                          }`}
                        >
                          {test.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400">
                        {test.completion}% completado
                      </div>
                    </div>
                    <div className="w-20 bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${test.completion}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tutorials */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Tutoriales Recomendados</CardTitle>
              <CardDescription className="text-gray-400">
                Aprende a usar la plataforma de manera efectiva
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tutorials.map((tutorial, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10"
                    onClick={tutorial.action}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white group-hover:text-yellow-300 transition-colors">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge className="text-xs bg-white/10 text-gray-300 border-white/20">
                          {tutorial.difficulty}
                        </Badge>
                        <span className="text-xs text-gray-400">{tutorial.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{tutorial.description}</p>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-3 h-3 mr-2" />
                      Comenzar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default DashboardContent;