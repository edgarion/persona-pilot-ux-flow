
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
import { Plus, Search, Filter, Play, Pause, BarChart3, TestTube } from "lucide-react";

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
      createdDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Usabilidad Dashboard Móvil",
      description: "Probar la experiencia de usuario del dashboard en dispositivos móviles",
      type: "Mobile UX",
      status: "Completada",
      selectedPersonas: ["Profesionales Tech", "Emprendedores"],
      tasks: ["Navegar por el dashboard", "Crear nuevo proyecto", "Acceder a métricas"],
      completion: 100,
      participants: 8,
      createdDate: "2024-01-10"
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
      createdDate: "2024-01-20"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTest, setNewTest] = useState<Partial<UserTest>>({
    selectedPersonas: [],
    tasks: []
  });

  const availablePersonas = ["Profesionales Tech", "Padres Ocupados", "Compradores Millennials", "Emprendedores", "Usuarios Novatos", "Power Users"];
  const testTypes = ["Usabilidad", "A/B Testing", "Card Sorting", "Tree Testing", "Mobile UX", "Onboarding", "Accessibility"];

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
        createdDate: new Date().toISOString().split('T')[0]
      };
      setTests([...tests, test]);
      setNewTest({ selectedPersonas: [], tasks: [] });
      setIsCreateDialogOpen(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completada": return "default";
      case "En progreso": return "secondary";
      case "Pausada": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Pruebas de Usuario</h2>
          <p className="text-slate-600 mt-1">Gestiona y ejecuta tus pruebas UX</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Prueba
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Crear Nueva Prueba de Usuario</DialogTitle>
              <DialogDescription>
                Configura tu nueva prueba seleccionando personas y definiendo tareas
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="testName">Nombre de la Prueba</Label>
                <Input
                  id="testName"
                  value={newTest.name || ""}
                  onChange={(e) => setNewTest({...newTest, name: e.target.value})}
                  placeholder="Ej: Prueba de Navegación E-commerce"
                />
              </div>
              
              <div>
                <Label htmlFor="testType">Tipo de Prueba</Label>
                <Select
                  value={newTest.type}
                  onValueChange={(value) => setNewTest({...newTest, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tipo de prueba" />
                  </SelectTrigger>
                  <SelectContent>
                    {testTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={newTest.description || ""}
                  onChange={(e) => setNewTest({...newTest, description: e.target.value})}
                  placeholder="Describe el objetivo de la prueba..."
                />
              </div>

              <div>
                <Label>Seleccionar User Personas</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {availablePersonas.map((persona) => (
                    <div key={persona} className="flex items-center space-x-2">
                      <Checkbox
                        id={persona}
                        checked={newTest.selectedPersonas?.includes(persona)}
                        onCheckedChange={(checked) => handlePersonaSelection(persona, !!checked)}
                      />
                      <Label htmlFor={persona} className="text-sm">
                        {persona}
                      </Label>
                    </div>
                  ))}
                </div>
                {newTest.selectedPersonas?.length === 0 && (
                  <p className="text-sm text-red-500 mt-1">Selecciona al menos una persona</p>
                )}
              </div>

              <Button 
                onClick={handleCreateTest} 
                className="w-full"
                disabled={!newTest.name || !newTest.type || !newTest.selectedPersonas?.length}
              >
                Crear Prueba
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            placeholder="Buscar pruebas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="Planificada">Planificada</SelectItem>
            <SelectItem value="En progreso">En progreso</SelectItem>
            <SelectItem value="Completada">Completada</SelectItem>
            <SelectItem value="Pausada">Pausada</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTests.map((test) => (
          <Card key={test.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <TestTube className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">{test.name}</CardTitle>
                  </div>
                  <CardDescription className="mb-2">{test.description}</CardDescription>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{test.type}</Badge>
                    <Badge variant={getStatusColor(test.status)}>{test.status}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              {test.status === "En progreso" && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progreso</span>
                    <span>{test.completion}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${test.completion}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Selected Personas */}
              <div>
                <span className="text-sm font-medium text-slate-600 block mb-2">
                  User Personas ({test.selectedPersonas.length})
                </span>
                <div className="flex flex-wrap gap-1">
                  {test.selectedPersonas.map((persona, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {persona}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tasks */}
              {test.tasks.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-slate-600 block mb-2">
                    Tareas ({test.tasks.length})
                  </span>
                  <div className="space-y-1">
                    {test.tasks.slice(0, 2).map((task, idx) => (
                      <div key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                        {task}
                      </div>
                    ))}
                    {test.tasks.length > 2 && (
                      <div className="text-sm text-slate-500">
                        +{test.tasks.length - 2} tareas más
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="flex justify-between items-center pt-2 border-t">
                <div className="text-sm text-slate-600">
                  <span className="font-medium">{test.participants}</span> participantes
                </div>
                <div className="text-sm text-slate-500">
                  Creada: {new Date(test.createdDate).toLocaleDateString()}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                {test.status === "Planificada" && (
                  <Button size="sm" className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Iniciar
                  </Button>
                )}
                {test.status === "En progreso" && (
                  <>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Pause className="w-4 h-4 mr-2" />
                      Pausar
                    </Button>
                    <Button size="sm" variant="outline">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </>
                )}
                {test.status === "Completada" && (
                  <Button size="sm" className="flex-1">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Ver Resultados
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTests.length === 0 && (
        <div className="text-center py-12">
          <TestTube className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-600 mb-2">
            No se encontraron pruebas
          </h3>
          <p className="text-slate-500">
            Intenta ajustar tus filtros o crear una nueva prueba
          </p>
        </div>
      )}
    </div>
  );
};

export default UserTests;
