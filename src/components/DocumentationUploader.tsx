import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Seleccionar, SeleccionarContent, SeleccionarItem, SeleccionarTrigger, SeleccionarValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Subir, ArchivoText, Zap, Target, Users, BarChart3, CheckCircle, AlertCircle, Search, Filter, Plus, FolderPlus, Tag, Calendar, Descargar } from "lucide-react";

interface DocumentoAnalysis {
  documentType: string;
  keyInsights: string[];
  recommendedTests: string[];
  suggestedPersonas: string[];
  priorityLevel: 'high' | 'medium' | 'low';
  estimatedEffort: string;
}

interface DocumentoItem {
  id: number;
  name: string;
  type: string;
  status: "Analizado" | "Procesando" | "Error";
  insights: string[];
  tags: string[];
  uploadDate: string;
  size: string;
  assignedProjects: string[];
}

const DocumentoationSubirer = () => {
  const [uploadedArchivos, setSubiredArchivos] = useState<Archivo[]>([]);
  const [documentContext, setDocumentoContext] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<DocumentoAnalysis | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [selectedDocForAssign, setSeleccionaredDocForAssign] = useState<DocumentoItem | null>(null);
  const [selectedProjects, setSeleccionaredProjects] = useState<string[]>([]);

  // Mock data de documentos analizados
  const [documents, setDocumentos] = useState<DocumentoItem[]>([
    {
      id: 1,
      name: "Wireframes E-commerce v2.0",
      type: "Wireframes",
      status: "Analizado",
      insights: ["Checkout complejo", "Navegación móvil mejorable", "Filtros poco visibles"],
      tags: ["E-commerce", "Mobile", "Checkout"],
      uploadDate: "2024-01-15",
      size: "2.3 MB",
      assignedProjects: ["Rediseño E-commerce"]
    },
    {
      id: 2,
      name: "User Stories Dashboard",
      type: "Especificaciones",
      status: "Analizado",
      insights: ["Funcionalidades claras", "Casos de uso bien definidos", "Falta accesibilidad"],
      tags: ["Dashboard", "User Stories", "Funcionalidades"],
      uploadDate: "2024-01-12",
      size: "856 KB",
      assignedProjects: []
    },
    {
      id: 3,
      name: "Prototipo Figma App Móvil",
      type: "Prototipo",
      status: "Analizado",
      insights: ["Diseño moderno", "Interacciones fluidas", "Onboarding extenso"],
      tags: ["Mobile", "Figma", "Prototipo", "Onboarding"],
      uploadDate: "2024-01-10",
      size: "4.1 MB",
      assignedProjects: ["App Móvil v3.0"]
    },
    {
      id: 4,
      name: "Análisis Competencia",
      type: "Investigación",
      status: "Analizado",
      insights: ["Benchmarks identificados", "Oportunidades de mejora", "Tendencias del mercado"],
      tags: ["Competencia", "Benchmarking", "Mercado"],
      uploadDate: "2024-01-08",
      size: "1.2 MB",
      assignedProjects: ["Rediseño E-commerce", "App Móvil v3.0"]
    },
    {
      id: 5,
      name: "Especificaciones API",
      type: "Documentoación Técnica",
      status: "Procesando",
      insights: [],
      tags: ["API", "Backend", "Integración"],
      uploadDate: "2024-01-18",
      size: "1.8 MB",
      assignedProjects: []
    }
  ]);

  // Mock projects
  const availableProjects = [
    "Rediseño E-commerce",
    "App Móvil v3.0", 
    "Dashboard Analytics",
    "Plataforma B2B",
    "Portal Cliente"
  ];

  const handleArchivoSubir = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSubiredArchivos(prev => [...prev, ...files]);
  };

  const removeArchivo = (index: number) => {
    setSubiredArchivos(prev => prev.filter((_, i) => i !== index));
  };

  const analyzeDocumentos = async () => {
    setIsAnalyzing(true);
    
    // Simular análisis de documentos
    setTimeout(() => {
      const mockAnalysis: DocumentoAnalysis = {
        documentType: "Especificaciones de Producto y Wireframes",
        keyInsights: [
          "Sistema de e-commerce con checkout complejo",
          "Múltiples opciones de pago y envío",
          "Usuarios objetivo: millennials y profesionales",
          "Funcionalidad de wishlist y comparación",
          "Integración con redes sociales"
        ],
        recommendedTests: [
          "Prueba A/B del proceso de checkout",
          "Test de usabilidad de navegación",
          "Card sorting para categorización de productos",
          "Test de primera impresión del homepage",
          "Evaluación heurística completa",
          "Pruebas de accesibilidad",
          "Test de búsqueda y filtros"
        ],
        suggestedPersonas: [
          "Compradores Millennials Tech-Savvy",
          "Profesionales Ocupados 30-40",
          "Padres de Familia Ahorradores",
          "Usuarios Móviles Frecuentes"
        ],
        priorityLevel: 'high',
        estimatedEffort: "6-8 semanas"
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const filteredDocumentos = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === "all" || doc.type === filterType;
    const matchesStatus = filterStatus === "all" || doc.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleAssignToProject = () => {
    if (selectedDocForAssign && selectedProjects.length > 0) {
      setDocumentos(prev => prev.map(doc => 
        doc.id === selectedDocForAssign.id 
          ? { ...doc, assignedProjects: [...new Set([...doc.assignedProjects, ...selectedProjects])] }
          : doc
      ));
      setIsAssignDialogOpen(false);
      setSeleccionaredDocForAssign(null);
      setSeleccionaredProjects([]);
    }
  };

  const handleProjectSeleccionarion = (project: string, checked: boolean) => {
    if (checked) {
      setSeleccionaredProjects(prev => [...prev, project]);
    } else {
      setSeleccionaredProjects(prev => prev.filter(p => p !== project));
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
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

  const documentTypes = ["Wireframes", "Especificaciones", "Prototipo", "Investigación", "Documentoación Técnica"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2">
            Gestión de Documentación
          </h2>
          <p className="text-gray-400 text-lg">
            Gestiona tu documentación analizada y asígnala a proyectos
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center mb-6 animate-fade-in-up delay-200">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
            />
          </div>
          <Seleccionar value={filterType} onValueChange={setFilterType}>
            <SeleccionarTrigger className="w-48 bg-white/5 border-white/20 text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SeleccionarValue placeholder="Tipo" />
            </SeleccionarTrigger>
            <SeleccionarContent className="bg-gray-800 border-gray-700">
              <SeleccionarItem value="all" className="text-white hover:bg-gray-700">Todos los tipos</SeleccionarItem>
              {documentTypes.map((type) => (
                <SeleccionarItem key={type} value={type} className="text-white hover:bg-gray-700">
                  {type}
                </SeleccionarItem>
              ))}
            </SeleccionarContent>
          </Seleccionar>
          <Seleccionar value={filterStatus} onValueChange={setFilterStatus}>
            <SeleccionarTrigger className="w-48 bg-white/5 border-white/20 text-white">
              <SeleccionarValue placeholder="Estado" />
            </SeleccionarTrigger>
            <SeleccionarContent className="bg-gray-800 border-gray-700">
              <SeleccionarItem value="all" className="text-white hover:bg-gray-700">Todos los estados</SeleccionarItem>
              <SeleccionarItem value="Analizado" className="text-white hover:bg-gray-700">Analizado</SeleccionarItem>
              <SeleccionarItem value="Procesando" className="text-white hover:bg-gray-700">Procesando</SeleccionarItem>
              <SeleccionarItem value="Error" className="text-white hover:bg-gray-700">Error</SeleccionarItem>
            </SeleccionarContent>
          </Seleccionar>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Documentos Analizados */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ArchivoText className="w-5 h-5 text-blue-400" />
                  Documentos Analizados ({filteredDocumentos.length})
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Documentación procesada y lista para asignar a proyectos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredDocumentos.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <ArchivoText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p>No se encontraron documentos</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredDocumentos.map((doc) => (
                      <Card key={doc.id} className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <ArchivoText className="w-4 h-4 text-gray-400" />
                                <h4 className="font-medium text-white">{doc.name}</h4>
                                <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                                <span>{doc.type}</span>
                                <span>{doc.size}</span>
                                <span><Calendar className="w-3 h-3 inline mr-1" />{new Date(doc.uploadDate).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                              >
                                <Descargar className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => {
                                  setSeleccionaredDocForAssign(doc);
                                  setSeleccionaredProjects(doc.assignedProjects);
                                  setIsAssignDialogOpen(true);
                                }}
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl"
                              >
                                <FolderPlus className="w-4 h-4 mr-1" />
                                Asignar
                              </Button>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {doc.tags.map((tag, idx) => (
                              <Badge key={idx} className="text-xs bg-white/10 text-gray-300 border-white/20">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Insights */}
                          {doc.insights.length > 0 && (
                            <div className="mb-3">
                              <span className="text-sm font-medium text-blue-400 block mb-1">Insights Principales:</span>
                              <div className="text-sm text-gray-300">
                                {doc.insights.join(" • ")}
                              </div>
                            </div>
                          )}

                          {/* Proyectos asignados */}
                          <div className="flex items-center justify-between pt-2 border-t border-white/10">
                            <div>
                              {doc.assignedProjects.length > 0 ? (
                                <div className="flex flex-wrap gap-1">
                                  <span className="text-xs text-gray-400 mr-2">Proyectos:</span>
                                  {doc.assignedProjects.map((project, idx) => (
                                    <Badge key={idx} className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                                      {project}
                                    </Badge>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-xs text-gray-500">Sin asignar a proyectos</span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Subir Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-400">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Subir className="w-5 h-5 text-blue-400" />
                Subir Nueva Documentación
              </CardTitle>
              <CardDescription className="text-gray-400">
                Analiza nueva documentación automáticamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="file-upload" className="text-gray-200">Archivos Soportados</Label>
                <div className="mt-2 border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.figma"
                    onChange={handleArchivoSubir}
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Subir className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">
                      Arrastra archivos aquí o <span className="text-blue-400 underline">selecciona archivos</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, PNG, JPG, Figma (Max 10MB cada uno)
                    </p>
                  </label>
                </div>
              </div>

              {uploadedArchivos.length > 0 && (
                <div>
                  <Label className="text-gray-200">Archivos Subidos ({uploadedArchivos.length})</Label>
                  <div className="space-y-2 mt-2">
                    {uploadedArchivos.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                        <div className="flex items-center gap-2">
                          <ArchivoText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">{file.name}</span>
                          <Badge className="text-xs bg-white/10 text-gray-300 border-white/20">
                            {(file.size / 1024 / 1024).toFixed(1)}MB
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeArchivo(index)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          Eliminar
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="context" className="text-gray-200">Contexto Adicional (Opcional)</Label>
                <Textarea
                  id="context"
                  value={documentContext}
                  onChange={(e) => setDocumentoContext(e.target.value)}
                  placeholder="Proporciona contexto sobre tu producto, objetivos del proyecto, usuarios objetivo, etc..."
                  rows={3}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <Button
                onClick={analyzeDocumentos}
                disabled={uploadedArchivos.length === 0 || isAnalyzing}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Analizando Documentos...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Analizar y Generar Recomendaciones
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Results - Solo mostrar cuando hay análisis */}
          {analysis && (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-500 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  Último Análisis Realizado
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Recomendaciones personalizadas basadas en tu documentación
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Analizando tu documentación...</p>
                    <p className="text-sm text-gray-500 mt-1">Esto puede tomar unos minutos</p>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className={`px-3 py-1 ${getPriorityColor(analysis.priorityLevel)}`}>
                      Prioridad {analysis.priorityLevel.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-gray-400">
                      Estimado: {analysis.estimatedEffort}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-400" />
                      Insights Clave
                    </h4>
                    <div className="space-y-2">
                      {analysis.keyInsights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-400" />
                      Pruebas Recomendadas
                    </h4>
                    <div className="grid gap-2">
                      {analysis.recommendedTests.map((test, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-green-500/10 rounded border border-green-500/20">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      User Personas Sugeridas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.suggestedPersonas.map((persona, index) => (
                        <Badge key={index} className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {persona}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Implementar Recomendaciones
                    </Button>
                  </div>
                </div>
            </CardContent>
          </Card>
          )}
        </div>

        {/* Dialog para asignar documentos a proyectos */}
        <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-white">Asignar Documentoo a Proyectos</DialogTitle>
              <DialogDescription className="text-gray-400">
                Selecciona los proyectos donde quieres usar este documento
              </DialogDescription>
            </DialogHeader>
            
            {selectedDocForAssign && (
              <div className="space-y-6">
                {/* Información del documento */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <ArchivoText className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-white">{selectedDocForAssign.name}</span>
                    <Badge className={getStatusColor(selectedDocForAssign.status)}>
                      {selectedDocForAssign.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400">{selectedDocForAssign.type} • {selectedDocForAssign.size}</p>
                </div>

                {/* Selección de proyectos */}
                <div>
                  <Label className="text-gray-200 mb-3 block">Proyectos Disponibles</Label>
                  <div className="grid gap-2 max-h-60 overflow-y-auto">
                    {availableProjects.map((project) => (
                      <div key={project} className="flex items-center space-x-2">
                        <Checkbox
                          id={`project-${project}`}
                          checked={selectedProjects.includes(project)}
                          onCheckedChange={(checked) => handleProjectSeleccionarion(project, !!checked)}
                          className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <Label htmlFor={`project-${project}`} className="text-sm text-gray-300 flex-1">
                          {project}
                        </Label>
                        {selectedDocForAssign.assignedProjects.includes(project) && (
                          <Badge className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                            Asignado
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => setIsAssignDialogOpen(false)}
                    variant="outline"
                    className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleAssignToProject}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl"
                    disabled={selectedProjects.length === 0}
                  >
                    Asignar a {selectedProjects.length} proyecto(s)
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DocumentoationSubirer;