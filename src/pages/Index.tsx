import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, TestTube, BarChart3, Plus, Filter, FileText } from "lucide-react";
import UserPersonas from "@/components/UserPersonas";
import UserTests from "@/components/UserTests";
import Analytics from "@/components/Analytics";
import ProjectCreator from "@/components/ProjectCreator";
import PersonaGenerator from "@/components/PersonaGenerator";
import DocumentationUploader from "@/components/DocumentationUploader";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    {
      title: "User Personas",
      value: "12",
      description: "Personas activas",
      icon: Users,
      trend: "+2 este mes"
    },
    {
      title: "Pruebas Activas",
      value: "5",
      description: "En progreso",
      icon: TestTube,
      trend: "+1 esta semana"
    },
    {
      title: "Tasa de Éxito",
      value: "84%",
      description: "Promedio general",
      icon: BarChart3,
      trend: "+5% vs mes anterior"
    }
  ];

  const recentTests = [
    {
      id: 1,
      name: "Prueba de Navegación E-commerce",
      personas: ["Compradores Millennials", "Padres Ocupados"],
      status: "En progreso",
      completion: 75
    },
    {
      id: 2,
      name: "Usabilidad Dashboard Móvil",
      personas: ["Profesionales Tech", "Emprendedores"],
      status: "Completada",
      completion: 100
    },
    {
      id: 3,
      name: "Onboarding Nueva App",
      personas: ["Usuarios Novatos", "Power Users"],
      status: "Planificada",
      completion: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            UX Testing Hub
          </h1>
          <p className="text-lg text-slate-600">
            Plataforma completa para gestionar personas, pruebas UX y análisis de usuario
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-7 lg:w-auto lg:grid-cols-7">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="project-creator" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Proyectos
            </TabsTrigger>
            <TabsTrigger value="personas" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Personas
            </TabsTrigger>
            <TabsTrigger value="persona-generator" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Generador
            </TabsTrigger>
            <TabsTrigger value="tests" className="flex items-center gap-2">
              <TestTube className="w-4 h-4" />
              Pruebas
            </TabsTrigger>
            <TabsTrigger value="docs-analyzer" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Documentos
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Análisis
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-600">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className="h-5 w-5 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-800 mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{stat.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {stat.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Tests */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Pruebas Recientes</CardTitle>
                  <CardDescription>
                    Últimas pruebas de usuario realizadas
                  </CardDescription>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva Prueba
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTests.map((test) => (
                    <div
                      key={test.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-1">
                          {test.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-slate-600">Personas:</span>
                          {test.personas.map((persona, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {persona}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant={
                              test.status === "Completada"
                                ? "default"
                                : test.status === "En progreso"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {test.status}
                          </Badge>
                          <div className="text-sm text-slate-600">
                            {test.completion}% completado
                          </div>
                        </div>
                      </div>
                      <div className="w-24 bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${test.completion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Project Creator Tab */}
          <TabsContent value="project-creator">
            <ProjectCreator />
          </TabsContent>

          {/* User Personas Tab */}
          <TabsContent value="personas">
            <UserPersonas />
          </TabsContent>

          {/* Persona Generator Tab */}
          <TabsContent value="persona-generator">
            <PersonaGenerator />
          </TabsContent>

          {/* Tests Tab */}
          <TabsContent value="tests">
            <UserTests />
          </TabsContent>

          {/* Documentation Analyzer Tab */}
          <TabsContent value="docs-analyzer">
            <DocumentationUploader />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
