import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, ArrowRight, Brain, Users, Target, Clock, BarChart3, Lightbulb, CheckCircle2, Zap, Wand2, Upload, FileText, Plus, Folder, UserPlus, Trash2 } from "lucide-react";

interface AnalysisResult {
  methodologies: string[];
  personas: string[];
  timeline: string;
  participants: string;
  metrics: string[];
  insights: string[];
  steps: string[];
}

interface DocumentItem {
  id: number;
  name: string;
  type: string;
  status: "Analizado" | "Procesando" | "Error";
  insights: string[];
  tags: string[];
  uploadDate: string;
  size: string;
}

interface ProjectPersona {
  id: number;
  name: string;
  age: string;
  occupation: string;
  category: string;
  description: string;
  goals: string[];
  frustrations: string[];
  techLevel: string;
  avatar?: string;
}

const ProjectCreator = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isDocDialogOpen, setIsDocDialogOpen] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isPersonaDialogOpen, setIsPersonaDialogOpen] = useState(false);
  const [projectPersonas, setProjectPersonas] = useState<ProjectPersona[]>([]);
  const [newPersona, setNewPersona] = useState<Partial<ProjectPersona>>({
    goals: [],
    frustrations: []
  });

  // Mock data de documentos ya analizados
  const availableDocs: DocumentItem[] = [
    {
      id: 1,
      name: "Wireframes E-commerce v2.0",
      type: "Wireframes",
      status: "Analizado",
      insights: ["Checkout complejo", "Navegación móvil mejorable", "Filtros poco visibles"],
      tags: ["E-commerce", "Mobile", "Checkout"],
      uploadDate: "2024-01-15",
      size: "2.3 MB"
    },
    {
      id: 2,
      name: "User Stories Dashboard",
      type: "Especificaciones",
      status: "Analizado",
      insights: ["Funcionalidades claras", "Casos de uso bien definidos", "Falta accesibilidad"],
      tags: ["Dashboard", "User Stories", "Funcionalidades"],
      uploadDate: "2024-01-12",
      size: "856 KB"
    },
    {
      id: 3,
      name: "Prototipo Figma App Móvil",
      type: "Prototipo",
      status: "Analizado",
      insights: ["Diseño moderno", "Interacciones fluidas", "Onboarding extenso"],
      tags: ["Mobile", "Figma", "Prototipo", "Onboarding"],
      uploadDate: "2024-01-10",
      size: "4.1 MB"
    },
    {
      id: 4,
      name: "Análisis Competencia",
      type: "Investigación",
      status: "Analizado",
      insights: ["Benchmarks identificados", "Oportunidades de mejora", "Tendencias del mercado"],
      tags: ["Competencia", "Benchmarking", "Mercado"],
      uploadDate: "2024-01-08",
      size: "1.2 MB"
    }
  ];

  const categories = ["Profesionales Tech", "Padres Ocupados", "Compradores Millennials", "Emprendedores", "Usuarios Novatos", "Power Users"];
  const techLevels = ["Principiante", "Intermedio", "Avanzado", "Experto"];

  const examplePrompts = [
    "I'm redesigning an e-commerce checkout flow for millennials who abandon their carts frequently",
    "We need to test our new mobile banking app with elderly users who struggle with technology",
    "Our SaaS dashboard has low engagement - users don't understand the main features",
    "We're launching a fitness app for busy professionals and need to validate the onboarding flow"
  ];

  const handleAnalyze = async () => {
    if (!projectDescription.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        methodologies: [
          "Moderated Usability Testing",
          "Unmoderated Remote Testing", 
          "A/B Testing",
          "Card Sorting",
          "User Interviews"
        ],
        personas: [
          "Tech-Savvy Millennials (25-35)",
          "Busy Professionals (30-45)",
          "Digital Natives (18-28)"
        ],
        timeline: "4-6 weeks",
        participants: "15-20 users per methodology",
        metrics: [
          "Task Completion Rate",
          "Time on Task",
          "Error Rate",
          "User Satisfaction Score",
          "Net Promoter Score"
        ],
        insights: [
          "Focus on mobile-first design patterns",
          "Implement progressive disclosure for complex features",
          "Add contextual help and onboarding tooltips",
          "Consider accessibility standards for broader reach"
        ],
        steps: [
          "Define research objectives and success criteria",
          "Recruit participants matching target personas",
          "Create test scenarios and tasks",
          "Conduct moderated sessions",
          "Analyze quantitative and qualitative data",
          "Generate actionable recommendations"
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setProjectDescription("");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDocSelection = (docId: number, checked: boolean) => {
    if (checked) {
      setSelectedDocs(prev => [...prev, docId]);
    } else {
      setSelectedDocs(prev => prev.filter(id => id !== docId));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Analizado": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Procesando": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Error": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const handleCreatePersona = () => {
    if (newPersona.name && newPersona.occupation && newPersona.category && projectPersonas.length < 10) {
      const persona: ProjectPersona = {
        id: projectPersonas.length + 1,
        name: newPersona.name || "",
        age: newPersona.age || "",
        occupation: newPersona.occupation || "",
        category: newPersona.category || "",
        description: newPersona.description || "",
        goals: newPersona.goals || [],
        frustrations: newPersona.frustrations || [],
        techLevel: newPersona.techLevel || ""
      };
      setProjectPersonas([...projectPersonas, persona]);
      setNewPersona({ goals: [], frustrations: [] });
      setIsPersonaDialogOpen(false);
    }
  };

  const removePersona = (id: number) => {
    setProjectPersonas(prev => prev.filter(p => p.id !== id));
  };

  const addGoal = (goal: string) => {
    if (goal.trim() && newPersona.goals && newPersona.goals.length < 5) {
      setNewPersona({
        ...newPersona,
        goals: [...(newPersona.goals || []), goal.trim()]
      });
    }
  };

  const addFrustration = (frustration: string) => {
    if (frustration.trim() && newPersona.frustrations && newPersona.frustrations.length < 5) {
      setNewPersona({
        ...newPersona,
        frustrations: [...(newPersona.frustrations || []), frustration.trim()]
      });
    }
  };

  const removeGoal = (index: number) => {
    setNewPersona({
      ...newPersona,
      goals: newPersona.goals?.filter((_, i) => i !== index) || []
    });
  };

  const removeFrustration = (index: number) => {
    setNewPersona({
      ...newPersona,
      frustrations: newPersona.frustrations?.filter((_, i) => i !== index) || []
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">AI-Powered UX Research</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Intelligent UX Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Describe your UX project in natural language and get comprehensive research plans, 
            methodologies, and insights powered by AI
          </p>
        </div>

        {!analysisResult ? (
          /* Input Interface */
          <div className="space-y-8">
            {/* Main Input Card */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-6 h-6 text-blue-400" />
                  Describe Your UX Challenge
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tell us about your project, users, and goals. The more context you provide, the better our AI analysis will be.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="description" className="text-gray-200 text-base font-medium">
                    Project Description
                  </Label>
                  <Textarea
                    id="description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Example: I'm redesigning our mobile app's checkout process. Users are abandoning their carts at a 70% rate, particularly on mobile devices. Our target audience is tech-savvy millennials who value speed and simplicity..."
                    className="mt-3 bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px] text-base leading-relaxed focus:border-blue-400 focus:ring-blue-400/20"
                    rows={6}
                  />
                </div>

                {/* Documentación Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-gray-200 text-base font-medium">
                      Documentación del Proyecto
                    </Label>
                    <Dialog open={isDocDialogOpen} onOpenChange={setIsDocDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                          <Folder className="w-4 h-4 mr-2" />
                          Gestionar Documentos
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
                        <DialogHeader>
                          <DialogTitle className="text-white">Añadir Documentación al Proyecto</DialogTitle>
                          <DialogDescription className="text-gray-400">
                            Selecciona documentos ya analizados o sube nuevos archivos
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Documentos ya analizados */}
                          <div>
                            <h4 className="font-medium text-white mb-3">Documentos Analizados Disponibles</h4>
                            <div className="grid gap-3 max-h-60 overflow-y-auto">
                              {availableDocs.map((doc) => (
                                <div key={doc.id} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                                  <Checkbox
                                    id={`doc-${doc.id}`}
                                    checked={selectedDocs.includes(doc.id)}
                                    onCheckedChange={(checked) => handleDocSelection(doc.id, !!checked)}
                                    className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-1"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <FileText className="w-4 h-4 text-gray-400" />
                                      <span className="font-medium text-white">{doc.name}</span>
                                      <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-2">{doc.type} • {doc.size} • {new Date(doc.uploadDate).toLocaleDateString()}</p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                      {doc.tags.map((tag, idx) => (
                                        <Badge key={idx} className="text-xs bg-white/10 text-gray-300 border-white/20">
                                          {tag}
                                        </Badge>
                                      ))}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      <strong>Insights:</strong> {doc.insights.join(", ")}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Subir nuevos documentos */}
                          <div>
                            <h4 className="font-medium text-white mb-3">Subir Nuevos Documentos</h4>
                            <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                              <input
                                type="file"
                                multiple
                                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.figma"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="new-file-upload"
                              />
                              <label htmlFor="new-file-upload" className="cursor-pointer">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-400">
                                  Arrastra archivos aquí o <span className="text-blue-400 underline">selecciona archivos</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  PDF, DOC, PNG, JPG, Figma (Max 10MB cada uno)
                                </p>
                              </label>
                            </div>

                            {uploadedFiles.length > 0 && (
                              <div className="mt-4">
                                <Label className="text-gray-200">Archivos para Subir ({uploadedFiles.length})</Label>
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

                          <div className="flex gap-2">
                            <Button 
                              onClick={() => setIsDocDialogOpen(false)}
                              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl"
                            >
                              Confirmar Selección ({selectedDocs.length + uploadedFiles.length})
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Resumen de documentos seleccionados */}
                  {(selectedDocs.length > 0 || uploadedFiles.length > 0) && (
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <h4 className="font-medium text-blue-300 mb-2">Documentación Incluida</h4>
                      <div className="space-y-2">
                        {selectedDocs.map(docId => {
                          const doc = availableDocs.find(d => d.id === docId);
                          return doc ? (
                            <div key={docId} className="flex items-center gap-2 text-sm">
                              <FileText className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-200">{doc.name}</span>
                              <Badge className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                                {doc.type}
                              </Badge>
                            </div>
                          ) : null;
                        })}
                        {uploadedFiles.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Upload className="w-4 h-4 text-green-400" />
                            <span className="text-green-200">{file.name}</span>
                            <Badge className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                              Nuevo
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* User Personas Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-gray-200 text-base font-medium">
                        User Personas del Proyecto
                      </Label>
                      <p className="text-sm text-gray-400 mt-1">
                        Crea hasta 10 personas específicas para este proyecto
                      </p>
                    </div>
                    <Dialog open={isPersonaDialogOpen} onOpenChange={setIsPersonaDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                          disabled={projectPersonas.length >= 10}
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          Crear Persona ({projectPersonas.length}/10)
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
                        <DialogHeader>
                          <DialogTitle className="text-white">Crear User Persona para el Proyecto</DialogTitle>
                          <DialogDescription className="text-gray-400">
                            Define una persona específica que represente a tu audiencia objetivo
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Información básica */}
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="persona-name" className="text-gray-200">Nombre</Label>
                              <Input
                                id="persona-name"
                                value={newPersona.name || ""}
                                onChange={(e) => setNewPersona({...newPersona, name: e.target.value})}
                                placeholder="Ej: María González"
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="persona-age" className="text-gray-200">Rango de Edad</Label>
                              <Input
                                id="persona-age"
                                value={newPersona.age || ""}
                                onChange={(e) => setNewPersona({...newPersona, age: e.target.value})}
                                placeholder="Ej: 28-35"
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="persona-occupation" className="text-gray-200">Ocupación</Label>
                              <Input
                                id="persona-occupation"
                                value={newPersona.occupation || ""}
                                onChange={(e) => setNewPersona({...newPersona, occupation: e.target.value})}
                                placeholder="Ej: Marketing Manager"
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="persona-category" className="text-gray-200">Categoría</Label>
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

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="persona-tech" className="text-gray-200">Nivel Tecnológico</Label>
                              <Select
                                value={newPersona.techLevel}
                                onValueChange={(value) => setNewPersona({...newPersona, techLevel: value})}
                              >
                                <SelectTrigger className="bg-white/5 border-white/20 text-white">
                                  <SelectValue placeholder="Nivel tech" />
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-700">
                                  {techLevels.map((level) => (
                                    <SelectItem key={level} value={level} className="text-white hover:bg-gray-700">
                                      {level}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="persona-description" className="text-gray-200">Descripción Breve</Label>
                              <Input
                                id="persona-description"
                                value={newPersona.description || ""}
                                onChange={(e) => setNewPersona({...newPersona, description: e.target.value})}
                                placeholder="Descripción en una línea"
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              />
                            </div>
                          </div>

                          {/* Objetivos */}
                          <div>
                            <Label className="text-gray-200">Objetivos Principales (máx. 5)</Label>
                            <div className="flex gap-2 mt-2">
                              <Input
                                placeholder="Añadir objetivo..."
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    addGoal(e.currentTarget.value);
                                    e.currentTarget.value = '';
                                  }
                                }}
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              />
                              <Button
                                type="button"
                                onClick={(e) => {
                                  const input = e.currentTarget.parentElement?.querySelector('input');
                                  if (input) {
                                    addGoal(input.value);
                                    input.value = '';
                                  }
                                }}
                                className="bg-green-600 hover:bg-green-500 rounded-xl"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {newPersona.goals?.map((goal, idx) => (
                                <Badge key={idx} className="bg-green-500/20 text-green-300 border-green-500/30 pr-1">
                                  {goal}
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => removeGoal(idx)}
                                    className="ml-1 h-4 w-4 p-0 hover:bg-red-500/20"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Frustraciones */}
                          <div>
                            <Label className="text-gray-200">Frustraciones Principales (máx. 5)</Label>
                            <div className="flex gap-2 mt-2">
                              <Input
                                placeholder="Añadir frustración..."
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    addFrustration(e.currentTarget.value);
                                    e.currentTarget.value = '';
                                  }
                                }}
                                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              />
                              <Button
                                type="button"
                                onClick={(e) => {
                                  const input = e.currentTarget.parentElement?.querySelector('input');
                                  if (input) {
                                    addFrustration(input.value);
                                    input.value = '';
                                  }
                                }}
                                className="bg-red-600 hover:bg-red-500 rounded-xl"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {newPersona.frustrations?.map((frustration, idx) => (
                                <Badge key={idx} className="bg-red-500/20 text-red-300 border-red-500/30 pr-1">
                                  {frustration}
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => removeFrustration(idx)}
                                    className="ml-1 h-4 w-4 p-0 hover:bg-red-500/20"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              onClick={() => setIsPersonaDialogOpen(false)}
                              variant="outline"
                              className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                            >
                              Cancelar
                            </Button>
                            <Button 
                              onClick={handleCreatePersona}
                              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl"
                              disabled={!newPersona.name || !newPersona.occupation || !newPersona.category}
                            >
                              Crear Persona
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Lista de personas creadas */}
                  {projectPersonas.length > 0 && (
                    <div className="space-y-3">
                      {projectPersonas.map((persona) => (
                        <div key={persona.id} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-yellow-500/30">
                                  {persona.avatar ? (
                                    <img 
                                      src={persona.avatar} 
                                      alt={persona.name}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                                      <Users className="w-4 h-4 text-white" />
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-medium text-white">{persona.name}</h4>
                                  <p className="text-sm text-gray-400">{persona.occupation} • {persona.age} años</p>
                                </div>
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                                  {persona.category}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-300 mb-2">{persona.description}</p>
                              <div className="flex gap-4">
                                <div>
                                  <span className="text-xs text-green-400 font-medium">Objetivos:</span>
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
                                  <span className="text-xs text-red-400 font-medium">Frustraciones:</span>
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
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removePersona(persona.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {projectPersonas.length === 0 && (
                    <div className="p-6 border-2 border-dashed border-white/20 rounded-lg text-center">
                      <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Crea personas específicas para este proyecto
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Las personas ayudarán a la IA a generar recomendaciones más precisas
                      </p>
                    </div>
                  )}
                </div>
                
                <Button
                  onClick={handleAnalyze}
                  disabled={!projectDescription.trim() || isAnalyzing}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium py-4 text-lg transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                >
                  {isAnalyzing ? (
                    <>
                      <Wand2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing Your Project...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generar Plan de Investigación UX
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Example Prompts */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  Example Prompts
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Not sure how to start? Try one of these examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examplePrompts.map((prompt, index) => (
                    <div
                      key={index}
                      onClick={() => setProjectDescription(prompt)}
                      className="p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-200 group animate-fade-in-up"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                        "{prompt}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Results Interface */
          <div className="space-y-8">
            {/* Success Header */}
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-green-200 font-medium">Analysis Complete</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Tu Plan Completo de Investigación UX
              </h2>
              <Button
                onClick={resetAnalysis}
                variant="outline"
                className="bg-white/5 border-white/20 text-gray-200 hover:bg-white/10 hover:text-white rounded-xl"
              >
                Analyze Another Project
              </Button>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Methodologies */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-100">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Recommended Methodologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResult.methodologies.map((method, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <Zap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-200">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* User Personas */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-200">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Target Personas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResult.personas.map((persona, index) => (
                      <div key={index} className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                        <span className="text-gray-200">{persona}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline & Participants */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    Timeline & Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <div className="text-amber-200 text-sm font-medium mb-1">Timeline</div>
                    <div className="text-white">{analysisResult.timeline}</div>
                  </div>
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <div className="text-amber-200 text-sm font-medium mb-1">Participants</div>
                    <div className="text-white">{analysisResult.participants}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-400">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-400" />
                    Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.metrics.map((metric, index) => (
                      <Badge key={index} className="bg-green-500/20 text-green-200 border-green-500/30 px-3 py-1">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-sm animate-fade-in-up delay-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  AI-Generated Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysisResult.insights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                      <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{insight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Research Steps */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Step-by-Step Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysisResult.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-200">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCreator;