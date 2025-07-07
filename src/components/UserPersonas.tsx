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
  avatar?: string;
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
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              User Personas
            </h2>
            <p className="text-gray-400 mt-2 text-lg">Gestiona tus arquetipos de usuarios</p>
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
        <div className="flex gap-4 items-center animate-fade-in-up delay-200">
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
      </div>
    </div>
  );
};

export default UserPersonas;