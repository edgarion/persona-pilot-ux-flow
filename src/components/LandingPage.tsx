import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  TestTube, 
  FileText,
  Upload,
  Play,
  CheckCircle,
  Star,
  Brain,
  Wand2
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [promptText, setPromptText] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleCreatePrompt = () => {
    // Aquí se procesaría el prompt y los archivos
    console.log("Prompt:", promptText);
    console.log("Files:", uploadedFiles);
    setIsPromptDialogOpen(false);
    onGetStarted();
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Análisis inteligente de comportamiento de usuarios con IA avanzada que identifica patrones y oportunidades de mejora automáticamente.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-time Testing",
      description: "Pruebas en tiempo real con feedback instantáneo y métricas en vivo para tomar decisiones rápidas y efectivas.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Segmentación precisa de usuarios basada en personas detalladas y comportamientos específicos.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "User Personas",
      description: "Crea y gestiona personas de usuario detalladas con arquetipos psicológicos y datos demográficos.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TestTube,
      title: "Advanced Testing",
      description: "Suite completa de herramientas de testing: A/B testing, usabilidad, card sorting y más.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Dashboard completo con métricas avanzadas, reportes automáticos y insights accionables.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const tutorials = [
    {
      title: "Primeros Pasos",
      description: "Aprende a configurar tu primer proyecto y crear user personas",
      duration: "5 min",
      level: "Principiante",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Creación de Pruebas UX",
      description: "Guía completa para diseñar y ejecutar pruebas de usabilidad efectivas",
      duration: "12 min",
      level: "Intermedio",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Análisis Avanzado",
      description: "Interpreta datos y genera insights accionables con IA",
      duration: "8 min",
      level: "Avanzado",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "UX Designer en TechCorp",
      content: "Esta plataforma revolucionó nuestro proceso de testing. Reducimos el tiempo de análisis en un 70%.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Product Manager en StartupXYZ",
      content: "La IA nos ayuda a identificar problemas que nunca habríamos detectado manualmente.",
      rating: 5
    },
    {
      name: "Ana Martín",
      role: "Researcher en DesignStudio",
      content: "Las user personas generadas automáticamente son increíblemente precisas y útiles.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Next-Gen UX Testing Platform</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up">
              Revoluciona tu UX Testing
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-200">
              Plataforma completa impulsada por IA para gestionar personas, ejecutar pruebas UX avanzadas y obtener insights accionables que transformarán tu producto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-400">
              <Dialog open={isPromptDialogOpen} onOpenChange={setIsPromptDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <Wand2 className="w-5 h-5 mr-2" />
                    Crear Proyecto con IA
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <Brain className="w-5 h-5 text-blue-400" />
                      Crear Proyecto con IA
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Describe tu proyecto y sube documentación para que nuestra IA genere un plan de testing personalizado
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="prompt" className="text-gray-200 text-base font-medium">
                        Describe tu proyecto UX
                      </Label>
                      <Textarea
                        id="prompt"
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder="Ejemplo: Estoy rediseñando el proceso de checkout de mi e-commerce. Los usuarios abandonan en un 70% y necesito identificar los puntos de fricción principales. Mi audiencia son millennials tech-savvy que valoran la rapidez..."
                        className="mt-3 bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] text-base leading-relaxed focus:border-blue-400 focus:ring-blue-400/20"
                        rows={6}
                      />
                    </div>

                    <div>
                      <Label className="text-gray-200 text-base font-medium">Documentación (Opcional)</Label>
                      <div className="mt-2 border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.figma"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400">
                            Arrastra archivos aquí o <span className="text-blue-400 underline">selecciona archivos</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Wireframes, especificaciones, user stories, etc. (Max 10MB cada uno)
                          </p>
                        </label>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-4">
                          <Label className="text-gray-200">Archivos Subidos ({uploadedFiles.length})</Label>
                          <div className="space-y-2 mt-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-300">{file.name}</span>
                                  <Badge className="text-xs bg-white/10 text-gray-300 border-white/20">
                                    {(file.size / 1024 / 1024).toFixed(1)}MB
                                  </Badge>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                >
                                  Eliminar
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={handleCreatePrompt}
                      disabled={!promptText.trim()}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-4 text-lg transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generar Plan de Testing con IA
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-600">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-400">Pruebas Ejecutadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400">Precisión en Insights</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-gray-400">Reducción en Tiempo</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Características Avanzadas
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Todo lo que necesitas para llevar tu UX testing al siguiente nivel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section id="tutorials" className="py-20 px-6 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Aprende con Nuestros Tutoriales
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Domina la plataforma con guías paso a paso y casos de uso reales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {tutorial.level}
                      </Badge>
                      <span className="text-sm text-gray-400">{tutorial.duration}</span>
                    </div>
                    <CardTitle className="text-lg text-white">{tutorial.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {tutorial.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Lo que Dicen Nuestros Usuarios
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Testimonios reales de profesionales que han transformado su proceso de UX testing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              ¿Listo para Revolucionar tu UX?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Únete a miles de profesionales que ya están usando nuestra plataforma para crear experiencias excepcionales
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={onGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Comenzar Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;