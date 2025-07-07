import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, TestTube, BarChart3, Plus, Filter, FileText, ArrowRight, Sparkles, Zap, Target } from "lucide-react";
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
      trend: "+2 este mes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pruebas Activas",
      value: "5",
      description: "En progreso",
      icon: TestTube,
      trend: "+1 esta semana",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tasa de Éxito",
      value: "84%",
      description: "Promedio general",
      icon: BarChart3,
      trend: "+5% vs mes anterior",
      color: "from-emerald-500 to-teal-500"
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

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Analysis",
      description: "Análisis inteligente de comportamiento de usuarios con IA avanzada"
    },
    {
      icon: Zap,
      title: "Real-time Testing",
      description: "Pruebas en tiempo real con feedback instantáneo y métricas en vivo"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Segmentación precisa de usuarios basada en personas detalladas"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Next-Gen UX Testing Platform</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up">
              UX Testing Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Plataforma completa para gestionar personas, pruebas UX y análisis de usuario con inteligencia artificial
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl">
                <TabsTrigger 
                  value="dashboard" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger 
                  value="project-creator" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  Proyectos
                </TabsTrigger>
                <TabsTrigger 
                  value="personas" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <Users className="w-4 h-4" />
                  Personas
                </TabsTrigger>
                <TabsTrigger 
                  value="persona-generator" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <Users className="w-4 h-4" />
                  Generador
                </TabsTrigger>
                <TabsTrigger 
                  value="tests" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <TestTube className="w-4 h-4" />
                  Pruebas
                </TabsTrigger>
                <TabsTrigger 
                  value="docs-analyzer" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  Documentos
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="flex items-center gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-400 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <BarChart3 className="w-4 h-4" />
                  Análisis
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group"
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
                      <Badge variant="secondary" className="text-xs bg-white/10 text-gray-300 border-white/20">
                        {stat.trend}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 rounded-xl transition-all duration-300 transform hover:scale-105"
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
                        className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {test.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm text-gray-400">Personas:</span>
                            {test.personas.map((persona, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-white/5 text-gray-300 border-white/20">
                                {persona}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge
                              className={`${
                                test.status === "Completada"
                                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                  : test.status === "En progreso"
                                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                  : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                              }`}
                            >
                              {test.status}
                            </Badge>
                            <div className="text-sm text-gray-400">
                              {test.completion}% completado
                            </div>
                          </div>
                        </div>
                        <div className="w-32 bg-white/10 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${test.completion}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other Tabs */}
            <TabsContent value="project-creator">
              <ProjectCreator />
            </TabsContent>

            <TabsContent value="personas">
              <UserPersonas />
            </TabsContent>

            <TabsContent value="persona-generator">
              <PersonaGenerator />
            </TabsContent>

            <TabsContent value="tests">
              <UserTests />
            </TabsContent>

            <TabsContent value="docs-analyzer">
              <DocumentationUploader />
            </TabsContent>

            <TabsContent value="analytics">
              <Analytics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;