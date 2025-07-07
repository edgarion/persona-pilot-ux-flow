
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Zap, Users, Target, Brain, User, Download } from "lucide-react";

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

const PersonaGenerator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedArchetypes, setSelectedArchetypes] = useState<string[]>([]);
  const [selectedDemographics, setSelectedDemographics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPersonas, setGeneratedPersonas] = useState<GeneratedPersona[]>([]);

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

  const canGenerate = selectedIndustry && selectedArchetypes.length > 0 && selectedDemographics.length > 0;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Generador de User Personas
        </h2>
        <p className="text-slate-600">
          Genera user personas automáticamente basadas en arquetipos psicológicos y demografía
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              Configuración
            </CardTitle>
            <CardDescription>
              Selecciona los parámetros para generar personas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="industry">Industria</Label>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona industria" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Arquetipos de Jung (selecciona 1-3)</Label>
              <div className="grid grid-cols-1 gap-2 mt-2 max-h-48 overflow-y-auto">
                {archetypes.map((archetype) => (
                  <div key={archetype} className="flex items-center space-x-2">
                    <Checkbox
                      id={archetype}
                      checked={selectedArchetypes.includes(archetype)}
                      onCheckedChange={(checked) => handleArchetypeChange(archetype, !!checked)}
                    />
                    <Label htmlFor={archetype} className="text-sm">
                      {archetype}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Demografía (selecciona 1-3)</Label>
              <div className="grid grid-cols-1 gap-2 mt-2 max-h-48 overflow-y-auto">
                {demographics.map((demo) => (
                  <div key={demo} className="flex items-center space-x-2">
                    <Checkbox
                      id={demo}
                      checked={selectedDemographics.includes(demo)}
                      onCheckedChange={(checked) => handleDemographicChange(demo, !!checked)}
                    />
                    <Label htmlFor={demo} className="text-sm">
                      {demo}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={generatePersonas}
              disabled={!canGenerate || isGenerating}
              className="w-full bg-purple-600 hover:bg-purple-700"
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Personas Generadas
              </CardTitle>
              <CardDescription>
                User personas basadas en tus parámetros seleccionados
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isGenerating && generatedPersonas.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                  <User className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p>Configura los parámetros y genera personas</p>
                </div>
              )}

              {isGenerating && (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-slate-600">Generando user personas...</p>
                  <p className="text-sm text-slate-500 mt-1">Analizando arquetipos y demografía</p>
                </div>
              )}

              {generatedPersonas.length > 0 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="px-3 py-1">
                      {generatedPersonas.length} personas generadas
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar Todas
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {generatedPersonas.map((persona, index) => (
                      <Card key={index} className="border-l-4 border-l-purple-500">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-lg">{persona.name}</CardTitle>
                              <CardDescription>{persona.occupation} • {persona.age} años</CardDescription>
                            </div>
                            <Badge variant="outline">{persona.category}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-slate-700">{persona.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-green-700 mb-2">Objetivos</h5>
                              <div className="space-y-1">
                                {persona.goals.slice(0, 2).map((goal, idx) => (
                                  <div key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                                    <Target className="w-3 h-3 text-green-600" />
                                    {goal}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-red-700 mb-2">Frustraciones</h5>
                              <div className="space-y-1">
                                {persona.frustrations.slice(0, 2).map((frustration, idx) => (
                                  <div key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    {frustration}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Comportamientos</h5>
                            <div className="flex flex-wrap gap-1">
                              {persona.behaviors.map((behavior, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {behavior}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">Canales Preferidos</h5>
                            <div className="flex flex-wrap gap-1">
                              {persona.preferredChannels.map((channel, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {channel}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-2 border-t">
                            <Badge>{persona.techLevel}</Badge>
                            <Button size="sm" variant="outline">
                              Usar en Proyecto
                            </Button>
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
    </div>
  );
};

export default PersonaGenerator;
