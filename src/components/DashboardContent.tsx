import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
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
  Zap,
  FileText,
  Download
} from "lucide-react";

interface DashboardContentProps {
  onTabChange: (tab: string) => void;
}

const DashboardContent = ({ onTabChange }: DashboardContentProps) => {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

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

  // Mock data para el formulario
  const availableProjects = [
    "Rediseño E-commerce",
    "App Móvil v3.0",
    "Dashboard Analytics",
    "Plataforma B2B",
    "Portal Cliente"
  ];

  const availableTests = [
    "Prueba de Navegación E-commerce",
    "Focus Group Dashboard Móvil",
    "Onboarding Nueva App",
    "Usabilidad Checkout",
    "A/B Testing Homepage",
    "Card Sorting Navegación",
    "Eye-tracking Análisis"
  ];

  const availableUsers = [
    "Compradores Millennials",
    "Padres Ocupados",
    "Profesionales Tech",
    "Emprendedores",
    "Usuarios Novatos",
    "Power Users"
  ];

  const handleGenerateReport = () => {
    if (selectedProject && selectedTests.length > 0 && selectedUsers.length > 0) {
      setIsReportDialogOpen(false);
      onTabChange("final-report");
    }
  };

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
            Bienvenido al Dashboard
          </h1>
          <p className="text-gray-400 text-xl animate-fade-in-up delay-200">
            Gestiona tus proyectos UX, personas y pruebas desde un solo lugar
          </p>
        </div>

        {/* Botón destacado para generar informe final */}
        <div className="text-center mb-8 animate-fade-in-up delay-100">
          <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                <FileText className="w-6 h-6 mr-3" />
                Generar Proyecto
                <Download className="w-5 h-5 ml-3" />
              </Button>
            </DialogTrigger>
          </Dialog>
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

        {/* Dialog para generar informe final */}
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                Generar Proyecto
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Selecciona el proyecto, pruebas y usuarios para generar un informe completo con análisis de rentabilidad y recomendaciones
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Selección de Proyecto */}
              <div>
                <Label className="text-gray-200 text-base font-medium mb-3 block">
                  Proyecto Principal
                </Label>
                <div className="grid gap-2">
                  {availableProjects.map((project) => (
                    <div key={project} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id={`project-${project}`}
                        name="project"
                        value={project}
                        checked={selectedProject === project}
                        onChange={(e) => setSelectedProject(e.target.value)}
                        className="w-4 h-4 text-purple-600 bg-white/5 border-white/20 focus:ring-purple-500"
                      />
                      <Label htmlFor={`project-${project}`} className="text-sm text-gray-300 flex-1 cursor-pointer">
                        {project}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selección de Pruebas */}
              <div>
                <Label className="text-gray-200 text-base font-medium mb-3 block">
                  Pruebas UX Realizadas (selecciona las que quieres incluir)
                </Label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {availableTests.map((test) => (
                    <div key={test} className="flex items-center space-x-2">
                      <Checkbox
                        id={`test-${test}`}
                        checked={selectedTests.includes(test)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTests(prev => [...prev, test]);
                          } else {
                            setSelectedTests(prev => prev.filter(t => t !== test));
                          }
                        }}
                        className="border-white/20 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor={`test-${test}`} className="text-sm text-gray-300 cursor-pointer">
                        {test}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Seleccionadas: {selectedTests.length} pruebas
                </p>
              </div>

              {/* Selección de User Personas */}
              <div>
                <Label className="text-gray-200 text-base font-medium mb-3 block">
                  User Personas Participantes
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {availableUsers.map((user) => (
                    <div key={user} className="flex items-center space-x-2">
                      <Checkbox
                        id={`user-${user}`}
                        checked={selectedUsers.includes(user)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedUsers(prev => [...prev, user]);
                          } else {
                            setSelectedUsers(prev => prev.filter(u => u !== user));
                          }
                        }}
                        className="border-white/20 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor={`user-${user}`} className="text-sm text-gray-300 cursor-pointer">
                        {user}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Seleccionadas: {selectedUsers.length} personas
                </p>
              </div>

              {/* Resumen de selección */}
              {selectedProject && selectedTests.length > 0 && selectedUsers.length > 0 && (
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <h4 className="font-medium text-purple-300 mb-2">Resumen del Informe</h4>
                  <div className="space-y-1 text-sm text-purple-200">
                    <p><strong>Proyecto:</strong> {selectedProject}</p>
                    <p><strong>Pruebas incluidas:</strong> {selectedTests.length} pruebas UX</p>
                    <p><strong>Personas analizadas:</strong> {selectedUsers.length} arquetipos de usuario</p>
                  </div>
                  <div className="mt-3 text-xs text-purple-300">
                    El informe incluirá: análisis de rentabilidad, ROI, métricas de mejora, testimonios de usuarios, 
                    recomendaciones de expertos y proyecciones financieras.
                  </div>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <Button 
                  onClick={() => setIsReportDialogOpen(false)}
                  variant="outline"
                  className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={handleGenerateReport}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl"
                  disabled={!selectedProject || selectedTests.length === 0 || selectedUsers.length === 0}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Generar Informe Completo
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default DashboardContent;