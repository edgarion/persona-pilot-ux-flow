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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Plus, Search, Filter, Play, Pause, BarChart3, TestTube, Users, Clock, Target, HelpCircle, UserPlus } from "lucide-react";

interface UserTest {
  id: number;
  name: string;
  description: string;
  type: string;
  status: "Planificada" | "En progreso" | "Completada" | "Pausada";
  selectedPersonas: string[];
  tasks: string[];
  completion: number;
  participants: number;
  createdDate: string;
  focusGroupSize?: number;
  isRecruiting?: boolean;
  recruitmentStatus?: string;
}

const UserTests = () => {
  const [tests, setTests] = useState<UserTest[]>([
    {
      id: 1,
      name: "Prueba de Navegación E-commerce",
      description: "Evaluar la facilidad de navegación y proceso de compra en la plataforma",
      type: "Usabilidad",
      status: "En progreso",
      selectedPersonas: ["Compradores Millennials", "Padres Ocupados"],
      tasks: ["Encontrar producto específico", "Completar proceso de compra", "Usar filtros de búsqueda"],
      completion: 75,
      participants: 12,
      createdDate: "2024-01-15",
      isRecruiting: false
    },
    {
      id: 2,
      name: "Focus Group Dashboard Móvil",
      description: "Sesión de focus group para evaluar la experiencia móvil del dashboard",
      type: "Focus Group",
      status: "Completada",
      selectedPersonas: ["Profesionales Tech", "Emprendedores"],
      tasks: ["Discutir usabilidad móvil", "Evaluar funcionalidades", "Proponer mejoras"],
      completion: 100,
      participants: 8,
      focusGroupSize: 8,
      createdDate: "2024-01-10",
      isRecruiting: false
    },
    {
      id: 3,
      name: "Onboarding Nueva App",
      description: "Evaluar el proceso de registro e introducción para nuevos usuarios",
      type: "Onboarding",
      status: "Planificada",
      selectedPersonas: ["Usuarios Novatos", "Power Users"],
      tasks: ["Registro de cuenta", "Tutorial inicial", "Primera configuración"],
      completion: 0,
      participants: 0,
      createdDate: "2024-01-20",
      isRecruiting: true,
      recruitmentStatus: "Buscando 6 participantes más"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTest, setNewTest] = useState<Partial<UserTest>>({
    selectedPersonas: [],
    tasks: [],
    type: "Usabilidad"
  });

  const availablePersonas = [
    "Profesionales Tech", 
    "Padres Ocupados", 
    "Compradores Millennials", 
    "Emprendedores", 
    "Usuarios Novatos", 
    "Power Users"
  ];

  const testTypes = [
    "Usabilidad", 
    "A/B Testing", 
    "Card Sorting", 
    "Tree Testing", 
    "Mobile UX", 
    "Onboarding", 
    "Accessibility",
    "Focus Group"
  ];

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || test.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handlePersonaSelection = (persona: string, checked: boolean) => {
    const currentPersonas = newTest.selectedPersonas || [];
    if (checked) {
      setNewTest({
        ...newTest,
        selectedPersonas: [...currentPersonas, persona]
      });
    } else {
      setNewTest({
        ...newTest,
        selectedPersonas: currentPersonas.filter(p => p !== persona)
      });
    }
  };

  const handleCreateTest = () => {
    if (newTest.name && newTest.type && newTest.selectedPersonas?.length) {
      const test: UserTest = {
        id: tests.length + 1,
        name: newTest.name || "",
        description: newTest.description || "",
        type: newTest.type || "",
        status: "Planificada",
        selectedPersonas: newTest.selectedPersonas || [],
        tasks: newTest.tasks || [],
        completion: 0,
        participants: 0,
        createdDate: new Date().toISOString().split('T')[0],
        ...(newTest.type === "Focus Group" && { focusGroupSize: newTest.focusGroupSize || 6 })
      };
      setTests([...tests, test]);
      setNewTest({ selectedPersonas: [], tasks: [], type: "Usabilidad" });
      setIsCreateDialogOpen(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completada": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "En progreso": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Pausada": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">
              Pruebas de Usuario
            </h2>
            <p className="text-gray-400 mt-2 text-lg">Gestiona y ejecuta tus pruebas UX y focus groups</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 rounded-xl transition-all duration-300 transform hover:scale-105">
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Prueba
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                  <p>Crear nueva prueba UX o focus group</p>
                </TooltipContent>
              </Tooltip>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
              <DialogHeader>
                <DialogTitle className="text-white">Crear Nueva Prueba de Usuario</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Configura tu nueva prueba seleccionando personas y definiendo objetivos
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="testName" className="text-gray-200">Nombre de la Prueba</Label>
                  <Input
                    id="testName"
                    value={newTest.name || ""}
                    onChange={(e) => setNewTest({...newTest, name: e.target.value})}
                    placeholder="Ej: Prueba de Navegación E-commerce"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Label htmlFor="testType" className="text-gray-200">Tipo de Prueba</Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 border-gray-700 text-white max-w-sm">
                        <p>Focus Group: Sesión grupal de discusión con 6-12 participantes para obtener feedback cualitativo. Ideal para explorar percepciones, actitudes y motivaciones.</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Select
                    value={newTest.type}
                    onValueChange={(value) => setNewTest({...newTest, type: value})}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Selecciona tipo de prueba" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {testTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-gray-700">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {newTest.type === "Focus Group" && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Label htmlFor="focusGroupSize" className="text-gray-200">Tamaño del Focus Group</Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 border-gray-700 text-white max-w-sm">
                          <p>6-8 participantes: Ideal para discusiones profundas<br/>
                          10-12 participantes: Mejor para obtener diversidad de opiniones</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Select
                      value={newTest.focusGroupSize?.toString()}
                      onValueChange={(value) => setNewTest({...newTest, focusGroupSize: parseInt(value)})}
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Número de participantes" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {[6, 8, 10, 12].map((size) => (
                          <SelectItem key={size} value={size.toString()} className="text-white hover:bg-gray-700">
                            {size} participantes
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <Label htmlFor="description" className="text-gray-200">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newTest.description || ""}
                    onChange={(e) => setNewTest({...newTest, description: e.target.value})}
                    placeholder="Describe el objetivo de la prueba..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Label className="text-gray-200">Seleccionar User Personas (Obligatorio)</Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 border-gray-700 text-white max-w-sm">
                        <p>Selecciona las personas que mejor representen a tu audiencia objetivo. Para Focus Groups, recomendamos 2-3 personas diferentes para obtener perspectivas variadas.</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {availablePersonas.map((persona) => (
                      <div key={persona} className="flex items-center space-x-2">
                        <Checkbox
                          id={persona}
                          checked={newTest.selectedPersonas?.includes(persona)}
                          onCheckedChange={(checked) => handlePersonaSelection(persona, !!checked)}
                          className="border-white/20 data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600"
                        />
                        <Label htmlFor={persona} className="text-sm text-gray-300">
                          {persona}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {newTest.selectedPersonas?.length === 0 && (
                    <p className="text-sm text-red-400 mt-1">Selecciona al menos una persona</p>
                  )}
                  {newTest.type === "Focus Group" && newTest.selectedPersonas && newTest.selectedPersonas.length > 0 && (
                    <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-sm text-blue-300">
                        <Users className="w-4 h-4 inline mr-1" />
                        Focus Group configurado: {newTest.focusGroupSize || 6} participantes representando {newTest.selectedPersonas.length} persona(s)
                      </p>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={handleCreateTest} 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl"
                  disabled={!newTest.name || !newTest.type || !newTest.selectedPersonas?.length}
                >
                  Crear Prueba
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center animate-fade-in-up delay-200">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar pruebas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48 bg-white/5 border-white/20 text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all" className="text-white hover:bg-gray-700">Todos los estados</SelectItem>
              <SelectItem value="Planificada" className="text-white hover:bg-gray-700">Planificada</SelectItem>
              <SelectItem value="En progreso" className="text-white hover:bg-gray-700">En progreso</SelectItem>
              <SelectItem value="Completada" className="text-white hover:bg-gray-700">Completada</SelectItem>
              <SelectItem value="Pausada" className="text-white hover:bg-gray-700">Pausada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTests.map((test, index) => (
            <Card 
              key={test.id} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {test.type === "Focus Group" ? (
                        <Users className="w-5 h-5 text-yellow-400" />
                      ) : (
                        <TestTube className="w-5 h-5 text-blue-400" />
                      )}
                      <CardTitle className="text-lg text-white">{test.name}</CardTitle>
                    </div>
                    <CardDescription className="mb-2 text-gray-400">{test.description}</CardDescription>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-white/10 text-gray-300 border-white/20">{test.type}</Badge>
                      <Badge className={getStatusColor(test.status)}>{test.status}</Badge>
                      {test.focusGroupSize && (
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                          Focus Group: {test.focusGroupSize}p
                        </Badge>
                      )}
                      {test.isRecruiting && (
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 animate-pulse">
                          <UserPlus className="w-3 h-3 mr-1" />
                          Reclutando
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                {test.status === "En progreso" && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Progreso</span>
                      <span className="text-white">{test.completion}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${test.completion}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Selected Personas */}
                <div>
                  <span className="text-sm font-medium text-gray-400 block mb-2">
                    User Personas ({test.selectedPersonas.length})
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {test.selectedPersonas.map((persona, idx) => (
                      <Badge key={idx} className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {persona}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tasks */}
                {test.tasks.length > 0 && (
                  <div>
                    <span className="text-sm font-medium text-gray-400 block mb-2">
                      {test.type === "Focus Group" ? "Temas de Discusión" : "Tareas"} ({test.tasks.length})
                    </span>
                    <div className="space-y-1">
                      {test.tasks.slice(0, 2).map((task, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          {task}
                        </div>
                      ))}
                      {test.tasks.length > 2 && (
                        <div className="text-sm text-gray-500">
                          +{test.tasks.length - 2} más
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-white">{test.participants}</span> 
                    {test.focusGroupSize ? ` / ${test.focusGroupSize}` : ""} participantes
                  </div>
                  {test.isRecruiting && test.recruitmentStatus && (
                    <div className="text-xs text-orange-300">
                      {test.recruitmentStatus}
                    </div>
                  )}
                  {!test.isRecruiting && (
                    <div className="text-sm text-gray-500">
                      Creada: {new Date(test.createdDate).toLocaleDateString()}
                    </div>
                  )}
                </div>

                {/* Recruitment Status for Focus Groups */}
                {test.type === "Focus Group" && test.isRecruiting && (
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-orange-300">Estado de Reclutamiento</span>
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                        {test.participants}/{test.focusGroupSize}
                      </Badge>
                    </div>
                    <div className="w-full bg-orange-500/20 rounded-full h-2 mb-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${(test.participants / (test.focusGroupSize || 1)) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-orange-200">
                      Personas objetivo: {test.selectedPersonas.join(", ")}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {test.status === "Planificada" && !test.isRecruiting && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl">
                          <Play className="w-4 h-4 mr-2" />
                          Iniciar
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                        <p>Comenzar la ejecución de la prueba</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {test.status === "Planificada" && test.isRecruiting && (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Gestionar Participantes
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                          <p>Gestionar reclutamiento y selección de participantes</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                            <Play className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                          <p>Iniciar con participantes actuales</p>
                        </TooltipContent>
                      </Tooltip>
                    </>
                  )}
                  {test.status === "En progreso" && (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" variant="outline" className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                            <Pause className="w-4 h-4 mr-2" />
                            Pausar
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                          <p>Pausar temporalmente la prueba</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" variant="outline" className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                            <BarChart3 className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                          <p>Ver progreso en tiempo real</p>
                        </TooltipContent>
                      </Tooltip>
                    </>
                  )}
                  {test.status === "Completada" && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Ver Resultados
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                        <p>Analizar resultados y generar reportes</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <TestTube className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-400 mb-2">
              No se encontraron pruebas
            </h3>
            <p className="text-gray-500">
              Intenta ajustar tus filtros o crear una nueva prueba
            </p>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default UserTests;