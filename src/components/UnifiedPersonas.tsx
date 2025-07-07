import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Edit, User, Wand2, Zap, Download, Brain, Target, TestTube, MessageSquare } from "lucide-react";

interface UserPersona {
  id: number;
  name: string;
  age: string;
  occupation: string;
  category: string;
  demographics: string;
  goals: string[];
  frustrations: string[];
  techLevel: string;
  description: string;
  behaviors?: string[];
  motivations?: string[];
  preferredChannels?: string[];
  avatar?: string;
}

interface GeneratedPersona {
  name: string;
  age: string;
  occupation: string;
  category: string;
  demographics: string;
  goals: string[];
  frustrations: string[];
  techLevel: string;
  description: string;
  behaviors: string[];
  motivations: string[];
  preferredChannels: string[];
}

const UnifiedPersonas = () => {
  const [personas, setPersonas] = useState<UserPersona[]>([
    {
      id: 1,
      name: "Ana García",
      age: "28-35",
      occupation: "Marketing Manager",
      category: "Profesionales Tech",
      demographics: "Millennial urbana, ingresos medios-altos",
      goals: ["Eficiencia en el trabajo", "Mantenerse actualizada", "Work-life balance"],
      frustrations: ["Interfaces complejas", "Procesos lentos", "Falta de integración"],
      techLevel: "Avanzado",
      description: "Profesional tech-savvy que busca herramientas eficientes para su trabajo diario.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      age: "35-45",
      occupation: "Padre de familia",
      category: "Padres Ocupados",
      demographics: "Gen X, familia con hijos, ingresos medios",
      goals: ["Ahorrar tiempo", "Facilidad de uso", "Precio accesible"],
      frustrations: ["Tiempo limitado", "Tecnología compleja", "Interrupciones constantes"],
      techLevel: "Intermedio",
      description: "Padre ocupado que necesita soluciones rápidas y fáciles de usar.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Sofia López",
      age: "22-28",
      occupation: "Estudiante/Freelancer",
      category: "Compradores Millennials",
      demographics: "Millennial, presupuesto limitado, consciente del valor",
      goals: ["Mejores precios", "Experiencias auténticas", "Personalización"],
      frustrations: ["Precios altos", "Falta de transparencia", "Experiencias genéricas"],
      techLevel: "Nativo digital",
      description: "Joven profesional que valora la autenticidad y busca el mejor valor por su dinero.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]);

  // Generator state
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedArchetypes, setSelectedArchetypes] = useState<string[]>([]);
  const [selectedDemographics, setSelectedDemographics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPersonas, setGeneratedPersonas] = useState<GeneratedPersona[]>([]);

  // Existing personas state
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newPersona, setNewPersona] = useState<Partial<UserPersona>>({
    goals: [],
    frustrations: []
  });

  const categories = ["Profesionales Tech", "Padres Ocupados", "Compradores Millennials", "Emprendedores", "Usuarios Novatos", "Power Users"];

  const industries = [
    "E-commerce", "SaaS/Software", "Fintech", "Salud", "Educación", 
    "Media/Entretenimiento", "Servicios", "Manufactura"
  ];

  const archetypes = [
    "El Innovador", "El Cuidador", "El Explorador", "El Héroe",
    "El Sabio", "El Rebelde", "El Mago", "El Amante",
    "El Bufón", "El Hombre Común", "El Gobernante", "El Inocente"
  ];

  const demographics = [
    "Gen Z (18-25)", "Millennials (26-35)", "Gen X (36-50)", "Baby Boomers (50+)",
    "Profesionales", "Estudiantes", "Padres", "Jubilados",
    "Emprendedores", "Empleados", "Freelancers"
  ];

  const filteredPersonas = personas.filter(persona => {
    const matchesSearch = persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         persona.occupation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || persona.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreatePersona = () => {
    if (newPersona.name && newPersona.occupation && newPersona.category) {
      const persona: UserPersona = {
        id: personas.length + 1,
        name: newPersona.name || "",
        age: newPersona.age || "",
        occupation: newPersona.occupation || "",
        category: newPersona.category || "",
        demographics: newPersona.demographics || "",
        goals: newPersona.goals || [],
        frustrations: newPersona.frustrations || [],
        techLevel: newPersona.techLevel || "",
        description: newPersona.description || ""
      };
      setPersonas([...personas, persona]);
      setNewPersona({ goals: [], frustrations: [] });
      setIsCreateDialogOpen(false);
    }
  };

  const handleArchetypeChange = (archetype: string, checked: boolean) => {
    if (checked) {
      setSelectedArchetypes(prev => [...prev, archetype]);
    } else {
      setSelectedArchetypes(prev => prev.filter(a => a !== archetype));
    }
  };

  const handleDemographicChange = (demographic: string, checked: boolean) => {
    if (checked) {
      setSelectedDemographics(prev => [...prev, demographic]);
    } else {
      setSelectedDemographics(prev => prev.filter(d => d !== demographic));
    }
  };

  const generatePersonas = async () => {
    setIsGenerating(true);
    
    // Simular generación de personas
    setTimeout(() => {
      const mockPersonas: GeneratedPersona[] = [
        {
          name: "María Innovadora",
          age: "28-35",
          occupation: "Product Manager",
          category: "El Innovador",
          demographics: "Millennial profesional, ingresos altos",
          goals: ["Adoptar nuevas tecnologías", "Optimizar procesos", "Liderar cambios"],
          frustrations: ["Tecnología obsoleta", "Procesos lentos", "Resistencia al cambio"],
          techLevel: "Avanzado",
          description: "Profesional tech-savvy que busca constantemente innovar y mejorar procesos en su trabajo.",
          behaviors: ["Early adopter", "Investigación exhaustiva", "Comparte conocimiento"],
          motivations: ["Reconocimiento profesional", "Impacto positivo", "Crecimiento personal"],
          preferredChannels: ["LinkedIn", "Newsletters tech", "Podcasts", "Webinars"]
        },
        {
          name: "Carlos Cuidador",
          age: "35-45",
          occupation: "Gerente de IT",
          category: "El Cuidador",
          demographics: "Gen X, padre de familia, ingresos medios-altos",
          goals: ["Proteger datos", "Garantizar estabilidad", "Apoyar al equipo"],
          frustrations: ["Riesgos de seguridad", "Presión por cambios", "Falta de recursos"],
          techLevel: "Intermedio-Avanzado",
          description: "Profesional responsable que prioriza la seguridad y el bienestar de su equipo y organización.",
          behaviors: ["Análisis de riesgos", "Consulta con expertos", "Decisiones consensuadas"],
          motivations: ["Seguridad del equipo", "Estabilidad organizacional", "Cumplimiento"],
          preferredChannels: ["Email", "Reuniones presenciales", "Informes técnicos"]
        },
        {
          name: "Ana Exploradora",
          age: "22-28",
          occupation: "UX Designer",
          category: "El Explorador",
          demographics: "Gen Z/Millennial, creativa, ingresos medios",
          goals: ["Descubrir nuevas tendencias", "Experimentar diseños", "Viajar y aprender"],
          frustrations: ["Limitaciones creativas", "Presupuestos ajustados", "Rutina"],
          techLevel: "Avanzado",
          description: "Diseñadora joven que busca constantemente nuevas inspiraciones y experiencias.",
          behaviors: ["Exploración continua", "Experimentación", "Networking creativo"],
          motivations: ["Expresión creativa", "Nuevas experiencias", "Crecimiento profesional"],
          preferredChannels: ["Instagram", "Behance", "Dribbble", "Meetups"]
        }
      ];
      
      setGeneratedPersonas(mockPersonas);
      setIsGenerating(false);
    }, 2500);
  };

  const addGeneratedPersona = (generatedPersona: GeneratedPersona) => {
    const newPersona: UserPersona = {
      id: personas.length + 1,
      name: generatedPersona.name,
      age: generatedPersona.age,
      occupation: generatedPersona.occupation,
      category: generatedPersona.category,
      demographics: generatedPersona.demographics,
      goals: generatedPersona.goals,
      frustrations: generatedPersona.frustrations,
      techLevel: generatedPersona.techLevel,
      description: generatedPersona.description,
      behaviors: generatedPersona.behaviors,
      motivations: generatedPersona.motivations,
      preferredChannels: generatedPersona.preferredChannels
    };
    setPersonas([...personas, newPersona]);
  };

  const canGenerate = selectedIndustry && selectedArchetypes.length > 0 && selectedDemographics.length > 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
            User Personas
          </h2>
          <p className="text-gray-400 text-lg">
            Gestiona tus personas existentes o genera nuevas automáticamente
          </p>
        </div>

        <Tabs defaultValue="existing" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
            <TabsTrigger value="existing" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black">
              <User className="w-4 h-4 mr-2" />
              Personas Existentes
            </TabsTrigger>
            <TabsTrigger value="generator" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-black">
              <Wand2 className="w-4 h-4 mr-2" />
              Generador IA
            </TabsTrigger>
          </TabsList>

          {/* Existing Personas Tab */}
          <TabsContent value="existing" className="space-y-6">
            {/* Header with Create Button */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Personas Existentes</h3>
                <p className="text-gray-400">Gestiona tus arquetipos de usuarios</p>
              </div>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Persona
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white">Crear Nueva User Persona</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Define las características de tu nuevo arquetipo de usuario
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-200">Nombre</Label>
                        <Input
                          id="name"
                          value={newPersona.name || ""}
                          onChange={(e) => setNewPersona({...newPersona, name: e.target.value})}
                          placeholder="Ej: Ana García"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="age" className="text-gray-200">Rango de Edad</Label>
                        <Input
                          id="age"
                          value={newPersona.age || ""}
                          onChange={(e) => setNewPersona({...newPersona, age: e.target.value})}
                          placeholder="Ej: 28-35"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="occupation" className="text-gray-200">Ocupación</Label>
                        <Input
                          id="occupation"
                          value={newPersona.occupation || ""}
                          onChange={(e) => setNewPersona({...newPersona, occupation: e.target.value})}
                          placeholder="Ej: Marketing Manager"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category" className="text-gray-200">Categoría</Label>
                        <Select
                          value={newPersona.category}
                          onValueChange={(value) => setNewPersona({...newPersona, category: value})}
                        >
                          <SelectTrigger className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Selecciona categoría" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {categories.map((category) => (
                              <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleCreatePersona} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl">
                      Crear Persona
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar personas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48 bg-white/5 border-white/20 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filtrar por categoría" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="all" className="text-white hover:bg-gray-700">Todas las categorías</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Personas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPersonas.map((persona, index) => (
                <Card 
                  key={persona.id} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group animate-fade-in-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500/30">
                          {persona.avatar ? (
                            <img 
                              src={persona.avatar} 
                              alt={persona.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white">{persona.name}</CardTitle>
                          <CardDescription className="text-gray-400">{persona.occupation}</CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">{persona.category}</Badge>
                      <span className="text-sm text-gray-400">{persona.age} años</span>
                    </div>
                    
                    <p className="text-sm text-gray-300">{persona.description}</p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                          Demografía
                        </span>
                        <p className="text-sm text-gray-300">{persona.demographics}</p>
                      </div>
                      
                      <div>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                          Nivel Tech
                        </span>
                        <Badge className="ml-2 bg-white/10 text-gray-300 border-white/20">{persona.techLevel}</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-green-400 uppercase tracking-wide">
                          Objetivos
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {persona.goals.slice(0, 2).map((goal, idx) => (
                            <Badge key={idx} className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                              {goal}
                            </Badge>
                          ))}
                          {persona.goals.length > 2 && (
                            <Badge className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                              +{persona.goals.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-medium text-red-400 uppercase tracking-wide">
                          Frustraciones
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {persona.frustrations.slice(0, 2).map((frustration, idx) => (
                            <Badge key={idx} className="text-xs bg-red-500/20 text-red-300 border-red-500/30">
                              {frustration}
                            </Badge>
                          ))}
                          {persona.frustrations.length > 2 && (
                            <Badge className="text-xs bg-red-500/20 text-red-300 border-red-500/30">
                              +{persona.frustrations.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 border-t border-white/10">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 bg-green-500/10 border-green-500/20 text-green-300 hover:bg-green-500/20 hover:text-green-200 rounded-xl"
                      >
                        <TestTube className="w-4 h-4 mr-1" />
                        Añadir a Prueba
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 rounded-xl"
                      >
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Entrevista
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPersonas.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <User className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-400 mb-2">
                  No se encontraron personas
                </h3>
                <p className="text-gray-500">
                  Intenta ajustar tus filtros o crear una nueva persona
                </p>
              </div>
            )}
          </TabsContent>

          {/* Generator Tab */}
          <TabsContent value="generator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Configuration Panel */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    Configuración IA
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Selecciona los parámetros para generar personas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="industry" className="text-gray-200">Industria</Label>
                    <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Selecciona industria" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry} className="text-white hover:bg-gray-700">
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-gray-200">Arquetipos de Jung (1-3)</Label>
                    <div className="grid grid-cols-1 gap-2 mt-2 max-h-48 overflow-y-auto">
                      {archetypes.map((archetype) => (
                        <div key={archetype} className="flex items-center space-x-2">
                          <Checkbox
                            id={archetype}
                            checked={selectedArchetypes.includes(archetype)}
                            onCheckedChange={(checked) => handleArchetypeChange(archetype, !!checked)}
                            className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                          <Label htmlFor={archetype} className="text-sm text-gray-300">
                            {archetype}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-200">Demografía (1-3)</Label>
                    <div className="grid grid-cols-1 gap-2 mt-2 max-h-48 overflow-y-auto">
                      {demographics.map((demo) => (
                        <div key={demo} className="flex items-center space-x-2">
                          <Checkbox
                            id={demo}
                            checked={selectedDemographics.includes(demo)}
                            onCheckedChange={(checked) => handleDemographicChange(demo, !!checked)}
                            className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                          <Label htmlFor={demo} className="text-sm text-gray-300">
                            {demo}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={generatePersonas}
                    disabled={!canGenerate || isGenerating}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Generando...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Generar Personas
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Generated Personas */}
              <div className="lg:col-span-2">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-400" />
                      Personas Generadas
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      User personas basadas en tus parámetros seleccionados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!isGenerating && generatedPersonas.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        <User className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <p>Configura los parámetros y genera personas</p>
                      </div>
                    )}

                    {isGenerating && (
                      <div className="text-center py-12">
                        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Generando user personas...</p>
                        <p className="text-sm text-gray-500 mt-1">Analizando arquetipos y demografía</p>
                      </div>
                    )}

                    {generatedPersonas.length > 0 && (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <Badge className="px-3 py-1 bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {generatedPersonas.length} personas generadas
                          </Badge>
                          <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl">
                            <Download className="w-4 h-4 mr-2" />
                            Exportar Todas
                          </Button>
                        </div>

                        <div className="space-y-4">
                          {generatedPersonas.map((persona, index) => (
                            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-purple-500 hover:bg-white/10 transition-all duration-300">
                              <CardHeader>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <CardTitle className="text-lg text-white">{persona.name}</CardTitle>
                                    <CardDescription className="text-gray-400">{persona.occupation} • {persona.age} años</CardDescription>
                                  </div>
                                  <div className="flex gap-2">
                                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{persona.category}</Badge>
                                    <Button 
                                      size="sm" 
                                      onClick={() => addGeneratedPersona(persona)}
                                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl"
                                    >
                                      <Plus className="w-4 h-4 mr-1" />
                                      Añadir
                                    </Button>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <p className="text-sm text-gray-300">{persona.description}</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="font-medium text-green-400 mb-2">Objetivos</h5>
                                    <div className="space-y-1">
                                      {persona.goals.slice(0, 2).map((goal, idx) => (
                                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                          <Target className="w-3 h-3 text-green-400" />
                                          {goal}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-medium text-red-400 mb-2">Frustraciones</h5>
                                    <div className="space-y-1">
                                      {persona.frustrations.slice(0, 2).map((frustration, idx) => (
                                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                                          {frustration}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-blue-400 mb-2">Comportamientos</h5>
                                  <div className="flex flex-wrap gap-1">
                                    {persona.behaviors.map((behavior, idx) => (
                                      <Badge key={idx} className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                                        {behavior}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                                  <Badge className="bg-white/10 text-gray-300 border-white/20">{persona.techLevel}</Badge>
                                  <div className="flex gap-1">
                                    <Button 
                                      size="sm" 
                                      onClick={() => addGeneratedPersona(persona)}
                                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl"
                                    >
                                      <Plus className="w-4 h-4 mr-1" />
                                      Añadir
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UnifiedPersonas;