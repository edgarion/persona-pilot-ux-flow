
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Target, Users, BarChart3, Zap, CheckCircle, Lightbulb } from "lucide-react";

interface ProjectAnalysis {
  projectType: string;
  suggestedTests: string[];
  recommendedPersonas: string[];
  timeline: string;
  complexity: 'Simple' | 'Medio' | 'Avanzado';
}

const HomePage = () => {
  const [prompt, setPrompt] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ProjectAnalysis | null>(null);

  const examplePrompts = [
    "Quiero mejorar la conversión de mi e-commerce de ropa para millennials",
    "Necesito analizar la usabilidad de mi app de fitness para personas mayores",
    "Rediseño de dashboard financiero para pequeñas empresas",
    "Optimizar el onboarding de mi plataforma SaaS para desarrolladores"
  ];

  const analyzeProject = async () => {
    if (!prompt.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simular análisis inteligente
    setTimeout(() => {
      const mockAnalysis: ProjectAnalysis = {
        projectType: "E-commerce Optimization",
        suggestedTests: [
          "A/B Test del proceso de checkout",
          "Pruebas de usabilidad en navegación",
          "Análisis de heatmaps en páginas de producto",
          "Test de primera impresión del homepage",
          "Card sorting para categorización"
        ],
        recommendedPersonas: [
          "Compradores Millennials Digitales",
          "Padres Ocupados que Compran Online",
          "Profesionales Tech-Savvy"
        ],
        timeline: "4-6 semanas",
        complexity: "Medio"
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2500);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'bg-green-100 text-green-800';
      case 'Medio': return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">UX Analyzer</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Casos de Uso
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Precios
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100">
              Comenzar Gratis
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm">Análisis UX Inteligente</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Describe tu proyecto,
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              recibe un plan UX
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Nuestra IA analiza tu proyecto y genera automáticamente pruebas de usuario, 
            personas y estrategias de análisis UX personalizadas.
          </p>
        </div>

        {/* Main Input Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-white text-lg font-medium mb-4 block">
                    Describe tu proyecto o idea UX
                  </label>
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ej: Tengo un e-commerce de ropa para millennials y quiero mejorar las conversiones en el proceso de compra. Los usuarios abandonan mucho en el checkout..."
                    className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg resize-none focus:bg-white/10 transition-all"
                    rows={4}
                  />
                </div>

                <Button
                  onClick={analyzeProject}
                  disabled={!prompt.trim() || isAnalyzing}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg font-medium"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      Analizando tu proyecto...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-3" />
                      Generar Plan UX Automático
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Example Prompts */}
          {!analysis && (
            <div className="mt-8">
              <p className="text-gray-400 text-center mb-4">O prueba con uno de estos ejemplos:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="text-left p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all text-gray-300 hover:text-white text-sm"
                  >
                    "{example}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Analysis Results */}
          {analysis && (
            <div className="mt-12 space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full mb-4">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span className="text-green-200 text-sm">Plan UX Generado</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Tu plan UX personalizado está listo
                </h2>
                <p className="text-gray-300">
                  Basado en tu descripción, hemos creado un plan completo de análisis UX
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Overview */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-purple-400" />
                      <h3 className="text-xl font-semibold text-white">Resumen del Proyecto</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Tipo:</span>
                        <span className="text-white font-medium">{analysis.projectType}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Complejidad:</span>
                        <Badge className={getComplexityColor(analysis.complexity)}>
                          {analysis.complexity}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Timeline estimado:</span>
                        <span className="text-white font-medium">{analysis.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended Personas */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white">User Personas</h3>
                    </div>
                    <div className="space-y-2">
                      {analysis.recommendedPersonas.map((persona, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-200 text-sm">{persona}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Suggested Tests */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-semibold text-white">Pruebas UX Recomendadas</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {analysis.suggestedTests.map((test, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-200 text-sm">{test}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Implementar Plan Completo
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                  Refinar Análisis
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        {!analysis && (
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Por qué elegir UX Analyzer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">IA Especializada</h3>
                <p className="text-gray-400">
                  Nuestra IA está entrenada específicamente en metodologías UX y mejores prácticas
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Planes Personalizados</h3>
                <p className="text-gray-400">
                  Cada análisis es único y adaptado a tu industria y audiencia específica
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Resultados Rápidos</h3>
                <p className="text-gray-400">
                  Obtén un plan completo de UX en segundos, no en semanas
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
