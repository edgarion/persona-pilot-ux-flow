
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
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Análisis Inteligente de Documentación
        </h2>
        <p className="text-slate-600">
          Sube tu documentación de producto y obtén recomendaciones automáticas de pruebas UX
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-600" />
              Subir Documentación
            </CardTitle>
            <CardDescription>
              Sube wireframes, especificaciones, user stories, o cualquier documentación de tu producto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="file-upload">Archivos Soportados</Label>
              <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.figma"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600">
                    Arrastra archivos aquí o <span className="text-blue-600 underline">selecciona archivos</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    PDF, DOC, PNG, JPG, Figma (Max 10MB cada uno)
                  </p>
                </label>
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div>
                <Label>Archivos Subidos ({uploadedFiles.length})</Label>
                <div className="space-y-2 mt-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-700">{file.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {(file.size / 1024 / 1024).toFixed(1)}MB
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Eliminar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="context">Contexto Adicional (Opcional)</Label>
              <Textarea
                id="context"
                value={documentContext}
                onChange={(e) => setDocumentContext(e.target.value)}
                placeholder="Proporciona contexto sobre tu producto, objetivos del proyecto, usuarios objetivo, etc..."
                rows={3}
              />
            </div>

            <Button
              onClick={analyzeDocuments}
              disabled={uploadedFiles.length === 0 || isAnalyzing}
              className="w-full bg-blue-600 hover:bg-blue-700"
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              Resultados del Análisis
            </CardTitle>
            <CardDescription>
              Recomendaciones personalizadas basadas en tu documentación
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!analysis && !isAnalyzing && (
              <div className="text-center py-8 text-slate-500">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p>Sube documentos para ver las recomendaciones</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-8">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-600">Analizando tu documentación...</p>
                <p className="text-sm text-slate-500 mt-1">Esto puede tomar unos minutos</p>
              </div>
            )}

            {analysis && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge className={`px-3 py-1 ${getPriorityColor(analysis.priorityLevel)}`}>
                    Prioridad {analysis.priorityLevel.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-slate-600">
                    Estimado: {analysis.estimatedEffort}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                    Insights Clave
                  </h4>
                  <div className="space-y-2">
                    {analysis.keyInsights.map((insight, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    Pruebas Recomendadas
                  </h4>
                  <div className="grid gap-2">
                    {analysis.recommendedTests.map((test, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{test}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    User Personas Sugeridas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.suggestedPersonas.map((persona, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {persona}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
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
  );
};

export default DocumentationUploader;
