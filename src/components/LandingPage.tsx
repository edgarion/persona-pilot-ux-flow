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
  Users, 
  TestTube, 
  FileText,
  Upload,
  Play,
  CheckCircle,
  Star,
  Brain,
  Wand2,
  Mail,
  Bell,
  Zap,
  Target,
  BarChart3
} from "lucide-react";
import LanguageSelector from "./LanguageSelector";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false);
  const [isWhitelistDialogOpen, setIsWhitelistDialogOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [promptText, setPromptText] = useState("");
  const [whitelistEmail, setWhitelistEmail] = useState("");
  const [whitelistSubmitted, setWhitelistSubmitted] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleCreatePrompt = () => {
    console.log("Prompt:", promptText);
    console.log("Files:", uploadedFiles);
    setIsPromptDialogOpen(false);
    onGetStarted();
  };

  const handleWhitelistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whitelistEmail.trim()) {
      // Aquí se enviaría el email a la whitelist
      console.log("Email añadido a whitelist:", whitelistEmail);
      setWhitelistSubmitted(true);
      setTimeout(() => {
        setIsWhitelistDialogOpen(false);
        setWhitelistSubmitted(false);
        setWhitelistEmail("");
      }, 2000);
    }
  };

  const features = [
    {
      icon: Brain,
      title: "Análisis con IA",
      description: "Análisis inteligente de comportamiento de usuarios con IA avanzada",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Pruebas en Tiempo Real",
      description: "Pruebas en tiempo real con feedback instantáneo y métricas en vivo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Segmentación Precisa",
      description: "Segmentación precisa de usuarios basada en personas detalladas",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Personas de Usuario",
      description: "Crea y gestiona personas de usuario detalladas con arquetipos psicológicos",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TestTube,
      title: "Pruebas Avanzadas",
      description: "Suite completa de herramientas: A/B testing, usabilidad, card sorting",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Panel de Análisis",
      description: "Dashboard completo con métricas avanzadas y reportes automáticos",
      color: "from-green-500 to-emerald-500"
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
      {/* Fondo simplificado */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <img 
                src="/b.png" 
                alt="UX Pathia Logo" 
                className="w-4 h-4 object-contain"
              />
              <span className="text-sm text-gray-300">Plataforma de Testing UX de Nueva Generación</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">
              Revoluciona tus Pruebas UX
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Plataforma completa impulsada por IA para gestionar personas, ejecutar pruebas UX avanzadas y obtener insights accionables que transformarán tu producto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Dialog open={isPromptDialogOpen} onOpenChange={setIsPromptDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Wand2 className="w-5 h-5 mr-2" />
                    Crear Proyecto con IA
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <Brain className="w-5 h-5 text-yellow-400" />
                      Crear Proyecto con IA
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Describe tu proyecto y sube documentación para que nuestra IA genere un plan de pruebas personalizado
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
                        placeholder="Ejemplo: Estoy rediseñando el proceso de compra de mi e-commerce. Los usuarios abandonan en un 70% y necesito identificar los puntos de fricción principales..."
                        className="mt-3 bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] text-base leading-relaxed focus:border-yellow-400 focus:ring-yellow-400/20"
                        rows={6}
                      />
                    </div>

                    <div>
                      <Label className="text-gray-200 text-base font-medium">Documentación (Opcional)</Label>
                      <div className="mt-2 border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
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
                            Arrastra archivos aquí o <span className="text-yellow-400 underline">selecciona archivos</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Wireframes, especificaciones, user stories, etc.
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
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium py-4 text-lg transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generar Plan de Pruebas con IA
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

              <Dialog open={isWhitelistDialogOpen} onOpenChange={setIsWhitelistDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    Únete a la Whitelist
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <Bell className="w-5 h-5 text-yellow-400" />
                      Únete a la Whitelist
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Sé el primero en acceder cuando lancemos la plataforma completa
                    </DialogDescription>
                  </DialogHeader>
                  
                  {!whitelistSubmitted ? (
                    <form onSubmit={handleWhitelistSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="whitelist-email" className="text-gray-200">Email</Label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="whitelist-email"
                            type="email"
                            value={whitelistEmail}
                            onChange={(e) => setWhitelistEmail(e.target.value)}
                            placeholder="tu@email.com"
                            className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium py-3 text-base transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        Añadir a Whitelist
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">¡Listo!</h3>
                      <p className="text-gray-400">Te notificaremos cuando esté disponible</p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats simplificadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

        {/* Features Section simplificada */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">
                Características Principales
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Todo lo que necesitas para llevar tus pruebas UX al siguiente nivel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
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

        {/* Testimonials simplificados */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">
                Lo que Dicen Nuestros Usuarios
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
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
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-black font-semibold">
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

        {/* CTA Final simplificado */}
        <section className="py-20 px-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">
              ¿Listo para Revolucionar tu UX?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Únete a miles de profesionales que ya están usando nuestra plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={onGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
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