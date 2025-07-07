import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, Target, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";

interface ProjectSetup {
  name: string;
  description: string;
  industry: string;
  productType: string;
  targetAudience: string[];
  goals: string[];
  timeline: string;
  budget: string;
  experience: string;
}

const ProjectCreator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [project, setProject] = useState<ProjectSetup>({
    name: "",
    description: "",
    industry: "",
    productType: "",
    targetAudience: [],
    goals: [],
    timeline: "",
    budget: "",
    experience: ""
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);

  const industries = [
    "E-commerce", "SaaS/Software", "Fintech", "Salud", "Educación", 
    "Media/Entretenimiento", "Servicios", "Manufactura", "Otro"
  ];

  const productTypes = [
    "Aplicación Web", "Aplicación Móvil", "Sitio Web", "Dashboard", 
    "E-commerce", "Plataforma", "Sistema Interno", "Otro"
  ];

  const audienceOptions = [
    "Jóvenes (18-25)", "Millennials (26-35)", "Gen X (36-50)", "Baby Boomers (50+)",
    "Profesionales Tech", "Pequeños Negocios", "Empresas", "Estudiantes", "Padres de Familia"
  ];

  const goalOptions = [
    "Mejorar conversiones", "Reducir abandono", "Aumentar engagement", 
    "Simplificar onboarding", "Optimizar navegación", "Mejorar accesibilidad",
    "Validar nuevo diseño", "Entender comportamiento usuario"
  ];

  const steps = [
    { title: "Información Básica", icon: Target },
    { title: "Producto y Audiencia", icon: Users },
    { title: "Objetivos y Timeline", icon: Zap },
    { title: "Recomendaciones", icon: Lightbulb }
  ];

  const handleAudienceChange = (audience: string, checked: boolean) => {
    if (checked) {
      setProject(prev => ({
        ...prev,
        targetAudience: [...prev.targetAudience, audience]
      }));
    } else {
      setProject(prev => ({
        ...prev,
        targetAudience: prev.targetAudience.filter(a => a !== audience)
      }));
    }
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    if (checked) {
      setProject(prev => ({
        ...prev,
        goals: [...prev.goals, goal]
      }));
    } else {
      setProject(prev => ({
        ...prev,
        goals: prev.goals.filter(g => g !== goal)
      }));
    }
  };

  const generateRecommendations = () => {
    const recs: string[] = [];
    
    if (project.goals.includes("Mejorar conversiones")) {
      recs.push("Prueba A/B en el proceso de checkout");
      recs.push("Test de usabilidad en formularios clave");
    }
    
    if (project.goals.includes("Reducir abandono")) {
      recs.push("Análisis de heatmaps en páginas críticas");
      recs.push("Pruebas de navegación con eye-tracking");
    }
    
    if (project.productType === "Aplicación Móvil") {
      recs.push("Pruebas de usabilidad móvil");
      recs.push("Test de accesibilidad táctil");
    }
    
    if (project.targetAudience.includes("Baby Boomers (50+)")) {
      recs.push("Pruebas de accesibilidad y legibilidad");
      recs.push("Test de simplicidad de navegación");
    }
    
    recs.push("Creación de user personas específicas");
    recs.push("Card sorting para arquitectura de información");
    
    setRecommendations(recs);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      if (currentStep === 2) {
        generateRecommendations();
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return project.name && project.description && project.experience;
      case 1:
        return project.industry && project.productType && project.targetAudience.length > 0;
      case 2:
        return project.goals.length > 0 && project.timeline && project.budget;
      default:
        return true;
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Creador de Proyecto UX
        </h2>
        <p className="text-slate-600">
          Te ayudamos a estructurar tu proyecto y recomendarte las mejores pruebas UX
        </p>
      </div>

      {/* Progress Indicator */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index <= currentStep ? 'text-blue-600' : 'text-slate-400'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-blue-600 text-white' : 'bg-slate-200'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="ml-2 font-medium hidden sm:block">{step.title}</span>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 mx-4 text-slate-300" />
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <steps[currentStep].icon className="w-6 h-6 text-blue-600" />
            {steps[currentStep].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 0 && (
            <>
              <div>
                <Label htmlFor="projectName">Nombre del Proyecto</Label>
                <Input
                  id="projectName"
                  value={project.name}
                  onChange={(e) => setProject(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: Rediseño de App E-commerce"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Descripción del Proyecto</Label>
                <Textarea
                  id="description"
                  value={project.description}
                  onChange={(e) => setProject(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe brevemente tu proyecto y sus objetivos..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="experience">Tu Experiencia en UX</Label>
                <Select
                  value={project.experience}
                  onValueChange={(value) => setProject(prev => ({ ...prev, experience: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu nivel de experiencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="principiante">Principiante - Nueva en UX</SelectItem>
                    <SelectItem value="intermedio">Intermedio - Algo de experiencia</SelectItem>
                    <SelectItem value="avanzado">Avanzado - Mucha experiencia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="industry">Industria</Label>
                  <Select
                    value={project.industry}
                    onValueChange={(value) => setProject(prev => ({ ...prev, industry: value }))}
                  >
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
                  <Label htmlFor="productType">Tipo de Producto</Label>
                  <Select
                    value={project.productType}
                    onValueChange={(value) => setProject(prev => ({ ...prev, productType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Audiencia Objetivo (selecciona todas las que apliquen)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {audienceOptions.map((audience) => (
                    <div key={audience} className="flex items-center space-x-2">
                      <Checkbox
                        id={audience}
                        checked={project.targetAudience.includes(audience)}
                        onCheckedChange={(checked) => handleAudienceChange(audience, !!checked)}
                      />
                      <Label htmlFor={audience} className="text-sm">
                        {audience}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div>
                <Label>Objetivos del Proyecto (selecciona todos los que apliquen)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {goalOptions.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={project.goals.includes(goal)}
                        onCheckedChange={(checked) => handleGoalChange(goal, !!checked)}
                      />
                      <Label htmlFor={goal} className="text-sm">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timeline">Timeline del Proyecto</Label>
                  <Select
                    value={project.timeline}
                    onValueChange={(value) => setProject(prev => ({ ...prev, timeline: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2-semanas">1-2 semanas</SelectItem>
                      <SelectItem value="1-mes">1 mes</SelectItem>
                      <SelectItem value="2-3-meses">2-3 meses</SelectItem>
                      <SelectItem value="6-meses">6+ meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Presupuesto Estimado</Label>
                  <Select
                    value={project.budget}
                    onValueChange={(value) => setProject(prev => ({ ...prev, budget: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona presupuesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bajo">Bajo ($0-$1,000)</SelectItem>
                      <SelectItem value="medio">Medio ($1,000-$5,000)</SelectItem>
                      <SelectItem value="alto">Alto ($5,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  ¡Proyecto Configurado!
                </h3>
                <p className="text-green-700">
                  Basado en tu información, hemos generado recomendaciones personalizadas
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Pruebas Recomendadas para tu Proyecto:</h4>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Próximos Pasos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>Crear user personas específicas</li>
                      <li>Configurar las pruebas recomendadas</li>
                      <li>Definir métricas de éxito</li>
                      <li>Reclutar participantes</li>
                      <li>Ejecutar las pruebas</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recursos Útiles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="secondary">Guía de User Personas</Badge>
                      <Badge variant="secondary">Templates de Pruebas</Badge>
                      <Badge variant="secondary">Checklist UX</Badge>
                      <Badge variant="secondary">Métricas Clave</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Anterior
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Siguiente
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">
                Iniciar Proyecto
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCreator;
