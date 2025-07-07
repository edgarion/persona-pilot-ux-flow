
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Filter, Edit, User } from "lucide-react";

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
}

const UserPersonas = () => {
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
      description: "Profesional tech-savvy que busca herramientas eficientes para su trabajo diario."
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
      description: "Padre ocupado que necesita soluciones rápidas y fáciles de usar."
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
      description: "Joven profesional que valora la autenticidad y busca el mejor valor por su dinero."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newPersona, setNewPersona] = useState<Partial<UserPersona>>({
    goals: [],
    frustrations: []
  });

  const categories = ["Profesionales Tech", "Padres Ocupados", "Compradores Millennials", "Emprendedores", "Usuarios Novatos", "Power Users"];

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">User Personas</h2>
          <p className="text-slate-600 mt-1">Gestiona tus arquetipos de usuarios</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Persona
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Crear Nueva User Persona</DialogTitle>
              <DialogDescription>
                Define las características de tu nuevo arquetipo de usuario
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={newPersona.name || ""}
                    onChange={(e) => setNewPersona({...newPersona, name: e.target.value})}
                    placeholder="Ej: Ana García"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Rango de Edad</Label>
                  <Input
                    id="age"
                    value={newPersona.age || ""}
                    onChange={(e) => setNewPersona({...newPersona, age: e.target.value})}
                    placeholder="Ej: 28-35"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="occupation">Ocupación</Label>
                  <Input
                    id="occupation"
                    value={newPersona.occupation || ""}
                    onChange={(e) => setNewPersona({...newPersona, occupation: e.target.value})}
                    placeholder="Ej: Marketing Manager"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Select
                    value={newPersona.category}
                    onValueChange={(value) => setNewPersona({...newPersona, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="demographics">Demografía</Label>
                <Input
                  id="demographics"
                  value={newPersona.demographics || ""}
                  onChange={(e) => setNewPersona({...newPersona, demographics: e.target.value})}
                  placeholder="Ej: Millennial urbana, ingresos medios-altos"
                />
              </div>
              <div>
                <Label htmlFor="techLevel">Nivel Tecnológico</Label>
                <Select
                  value={newPersona.techLevel}
                  onValueChange={(value) => setNewPersona({...newPersona, techLevel: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Básico">Básico</SelectItem>
                    <SelectItem value="Intermedio">Intermedio</SelectItem>
                    <SelectItem value="Avanzado">Avanzado</SelectItem>
                    <SelectItem value="Nativo digital">Nativo digital</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={newPersona.description || ""}
                  onChange={(e) => setNewPersona({...newPersona, description: e.target.value})}
                  placeholder="Breve descripción de la persona..."
                />
              </div>
              <Button onClick={handleCreatePersona} className="w-full">
                Crear Persona
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
            placeholder="Buscar personas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filtrar por categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Personas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersonas.map((persona) => (
          <Card key={persona.id} className="hover:shadow-lg transition-shadow group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{persona.name}</CardTitle>
                    <CardDescription>{persona.occupation}</CardDescription>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{persona.category}</Badge>
                <span className="text-sm text-slate-600">{persona.age} años</span>
              </div>
              
              <p className="text-sm text-slate-600">{persona.description}</p>
              
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Demografía
                  </span>
                  <p className="text-sm text-slate-700">{persona.demographics}</p>
                </div>
                
                <div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Nivel Tech
                  </span>
                  <Badge variant="outline" className="ml-2">{persona.techLevel}</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-green-600 uppercase tracking-wide">
                    Objetivos
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {persona.goals.slice(0, 2).map((goal, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {goal}
                      </Badge>
                    ))}
                    {persona.goals.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{persona.goals.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-medium text-red-600 uppercase tracking-wide">
                    Frustraciones
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {persona.frustrations.slice(0, 2).map((frustration, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {frustration}
                      </Badge>
                    ))}
                    {persona.frustrations.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{persona.frustrations.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPersonas.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-600 mb-2">
            No se encontraron personas
          </h3>
          <p className="text-slate-500">
            Intenta ajustar tus filtros o crear una nueva persona
          </p>
        </div>
      )}
    </div>
  );
};

export default UserPersonas;
