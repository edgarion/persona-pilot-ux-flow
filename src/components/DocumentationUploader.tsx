import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Zap, Target, Users, BarChart3, CheckCircle, AlertCircle } from "lucide-react";

interface DocumentAnalysis {
  documentType: string;
  keyInsights: string[];
  recommendedTests: string[];
  suggestedPersonas: string[];
  priorityLevel: 'high' | 'medium' | 'low';
  estimatedEffort: string;
}

const DocumentationUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [documentContext, setDocumentContext] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const analyzeDocuments = async () => {
    setIsAnalyzing(true);
    
    // Simular análisis de documentos
    setTimeout(() => {
      const mockAnalysis: DocumentAnalysis = {
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

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
            Análisis Inteligente de Documentación
          </h2>
          <p className="text-gray-400 text-lg">
            Sube tu documentación de producto y obtén recomendaciones automáticas de pruebas UX
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-400" />
                Subir Documentación
              </CardTitle>
              <CardDescription className="text-gray-400">
                Sube wireframes, especificaciones, user stories, o cualquier documentación de tu producto
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
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">
                      Arrastra archivos aquí o <span className="text-blue-400 underline">selecciona archivos</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, PNG, JPG, Figma (Max 10MB cada uno)
                    </p>
                  </label>
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div>
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

              <div>
                <Label htmlFor="context" className="text-gray-200">Contexto Adicional (Opcional)</Label>
                <Textarea
                  id="context"
                  value={documentContext}
                  onChange={(e) => setDocumentContext(e.target.value)}
                  placeholder="Proporciona contexto sobre tu producto, objetivos del proyecto, usuarios objetivo, etc..."
                  rows={3}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>

              <Button
                onClick={analyzeDocuments}
                disabled={uploadedFiles.length === 0 || isAnalyzing}
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

          {/* Analysis Results */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Resultados del Análisis
              </CardTitle>
              <CardDescription className="text-gray-400">
                Recomendaciones personalizadas basadas en tu documentación
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!analysis && !isAnalyzing && (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p>Sube documentos para ver las recomendaciones</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-400">Analizando tu documentación...</p>
                  <p className="text-sm text-gray-500 mt-1">Esto puede tomar unos minutos</p>
                </div>
              )}

              {analysis && (
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
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentationUploader;