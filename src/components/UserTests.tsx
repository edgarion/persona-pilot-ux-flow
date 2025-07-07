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
import { Plus, Search, Filter, Play, Pause, BarChart3, TestTube, Users, Clock, Target, HelpCircle, UserPlus, UserCheck, MessageCircle, Quote, Lightbulb, TrendingUp, Mic, Send, User, Calendar, ChevronDown, ChevronUp } from "lucide-react";

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
  insights?: string[];
  quotes?: Array<{
    participant: string;
    quote: string;
    context: string;
  }>;
  reflections?: string[];
  keyFindings?: string[];
  interviews?: Array<{
    id: number;
    participantName: string;
    persona: string;
    date: string;
    duration: string;
    status: "Programada" | "En curso" | "Completada";
    questions: Array<{
      id: number;
      question: string;
      answer?: string;
      followUp?: string;
      timestamp?: string;
    }>;
    insights?: string[];
    nextSteps?: string[];
  }>;
  canAddParticipants?: boolean;
  maxParticipants?: number;
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
    },
    {
      id: 4,
      name: "Focus Group Rediseño Homepage",
      description: "Sesión de focus group para evaluar propuestas de rediseño de la página principal",
      type: "Focus Group",
      status: "Completada",
      selectedPersonas: ["Compradores Millennials", "Profesionales Tech", "Padres Ocupados"],
      tasks: ["Evaluar propuestas de diseño", "Discutir navegación principal", "Feedback sobre contenido"],
      completion: 100,
      participants: 8,
      focusGroupSize: 8,
      createdDate: "2024-01-05",
      isRecruiting: false,
      insights: [
        "Los usuarios prefieren navegación simplificada",
        "El contenido visual es más atractivo que el texto",
        "La búsqueda debe ser más prominente",
        "Los testimonios generan más confianza"
      ],
      quotes: [
        {
          participant: "María, 32, Marketing Manager",
          quote: "Me encanta que todo esté tan organizado, pero siento que hay demasiadas opciones en el menú principal",
          context: "Evaluando la navegación principal"
        },
        {
          participant: "Carlos, 28, Desarrollador",
          quote: "La búsqueda debería estar más visible. Siempre es lo primero que busco cuando entro a un sitio",
          context: "Discutiendo funcionalidades principales"
        },
        {
          participant: "Ana, 35, Madre de familia",
          quote: "Los testimonios me dan mucha confianza. Si veo que otras personas han tenido buenas experiencias, me animo a probar",
          context: "Hablando sobre elementos de confianza"
        },
        {
          participant: "Luis, 29, Freelancer",
          quote: "El diseño se ve moderno, pero necesito encontrar la información rápido. No tengo tiempo para explorar",
          context: "Feedback sobre usabilidad"
        }
      ],
      reflections: [
        "Los participantes valoran la simplicidad por encima de la funcionalidad completa",
        "Existe una clara diferencia generacional en las expectativas de navegación",
        "La confianza es un factor crítico que influye en las decisiones de los usuarios",
        "Los usuarios móviles tienen patrones de comportamiento diferentes a los de escritorio"
      ],
      keyFindings: [
        "Reducir opciones del menú principal de 8 a 5 elementos",
        "Hacer la búsqueda 40% más prominente en la interfaz",
        "Añadir sección de testimonios en homepage",
        "Implementar navegación adaptativa según dispositivo"
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTest, setNewTest] = useState<Partial<UserTest>>({
    selectedPersonas: [],
    tasks: [],
    interviews: [],
    type: "Usabilidad"
  });
  const [selectedTestForInterview, setSelectedTestForInterview] = useState<UserTest | null>(null);
  const [isInterviewDialogOpen, setIsInterviewDialogOpen] = useState(false);
  const [isAddParticipantDialogOpen, setIsAddParticipantDialogOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedInterview, setSelectedInterview] = useState<any>(null);

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
    "Focus Group",
    "Entrevistas"
  ];

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || test.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Mock data para entrevistas
  const mockInterviews = [
    {
      id: 1,
      participantName: "María González",
      persona: "Compradores Millennials",
      date: "2024-01-18",
      duration: "45 min",
      status: "Completada" as const,
      questions: [
        {
          id: 1,
          question: "¿Cuál es tu proceso habitual cuando buscas un producto online?",
          answer: "Normalmente empiezo en Google, luego comparo precios en diferentes sitios. Me gusta leer reseñas antes de decidir.",
          followUp: "¿Qué tipo de reseñas consideras más útiles?",
          timestamp: "00:02:15"
        },
        {
          id: 2,
          question: "¿Qué te frustra más al hacer compras online?",
          answer: "Los gastos de envío ocultos y cuando no hay suficiente información del producto. También odio los procesos de checkout largos.",
          followUp: "¿Podrías describir tu experiencia ideal de checkout?",
          timestamp: "00:08:30"
        },
        {
          id: 3,
          question: "¿Cómo decides si confiar en una tienda online nueva?",
          answer: "Busco certificados de seguridad, leo opiniones de otros compradores y verifico si tienen buena atención al cliente.",
          timestamp: "00:15:45"
        }
      ],
      insights: [
        "Valora mucho la transparencia en precios",
        "Las reseñas son factor decisivo",
        "Prefiere procesos de compra rápidos"
      ],
      nextSteps: [
        "Explorar más sobre sus criterios de confianza",
        "Profundizar en su experiencia móvil"
      ]
    },
    {
      id: 2,
      participantName: "Carlos Ruiz",
      persona: "Padres Ocupados",
      date: "2024-01-19",
      duration: "30 min",
      status: "En curso" as const,
      questions: [
        {
          id: 1,
          question: "¿Cuándo sueles hacer compras online?",
          answer: "Principalmente por las noches cuando los niños duermen, o en el trabajo durante el descanso.",
          timestamp: "00:01:30"
        },
        {
          id: 2,
          question: "¿Qué dispositivo prefieres para comprar online?",
          answer: "El móvil porque es más rápido, pero a veces uso el ordenador para compras grandes.",
          timestamp: "00:05:20"
        }
      ],
      insights: [
        "Tiempo limitado para compras",
        "Prefiere móvil por conveniencia"
      ],
      nextSteps: [
        "Preguntar sobre criterios para compras grandes vs pequeñas"
      ]
    }
  ];

  // Preguntas sugeridas basadas en el artículo de Medium
  const suggestedQuestions = [
    "¿Cuál es tu proceso habitual cuando [realizas esta tarea]?",
    "¿Qué te frustra más de [este proceso/producto]?",
    "¿Cómo decides si [confiar/usar/comprar] [producto/servicio]?",
    "¿Qué información necesitas antes de [tomar esta decisión]?",
    "¿Cuándo sueles [realizar esta actividad]?",
    "¿Qué dispositivo prefieres para [esta tarea] y por qué?",
    "¿Cómo te sientes cuando [ocurre esta situación]?",
    "¿Qué alternativas has probado antes?",
    "¿Qué te haría cambiar de [producto/servicio/método]?",
    "¿Cómo describirías tu experiencia ideal?",
    "¿Qué consejo le darías a alguien que [está en tu situación]?",
    "¿Hay algo que no te haya preguntado que consideres importante?"
  ];

  const handleAddInterview = (testId: number) => {
    const test = tests.find(t => t.id === testId);
    if (test) {
      setSelectedTestForInterview(test);
      setIsInterviewDialogOpen(true);
    }
  };

  const handleAddQuestion = (interviewId: number) => {
    if (newQuestion.trim()) {
      // Aquí se añadiría la pregunta a la entrevista
      console.log(`Añadiendo pregunta "${newQuestion}" a entrevista ${interviewId}`);
      setNewQuestion("");
    }
  };

  const handleAddParticipant = (testId: number) => {
    const test = tests.find(t => t.id === testId);
    if (test) {
      setSelectedTestForInterview(test);
      setIsAddParticipantDialogOpen(true);
    }
  };

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
        interviews: [],
        canAddParticipants: true,
        maxParticipants: newTest.type === "Entrevistas" ? 12 : undefined,
        createdDate: new Date().toISOString().split('T')[0],
        ...(newTest.type === "Focus Group" && { focusGroupSize: newTest.focusGroupSize || 6 })
      };
      setTests([...tests, test]);
      setNewTest({ selectedPersonas: [], tasks: [], type: "Usabilidad" });
      setIsCreateDialogOpen(false);
    }
  };

  // Añadir datos de entrevistas a las pruebas existentes
  const testsWithInterviews = tests.map(test => {
    if (test.id === 1) { // Prueba de Navegación E-commerce
      return {
        ...test,
        interviews: mockInterviews,
        canAddParticipants: true,
        maxParticipants: 15
      };
    }
    return test;
  });

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

                {newTest.type === "Entrevistas" && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Label htmlFor="maxParticipants" className="text-gray-200">Número de Entrevistas</Label>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 border-gray-700 text-white max-w-sm">
                          <p>Para entrevistas en profundidad recomendamos 5-8 participantes por persona. Para entrevistas exploratorias, 8-12 participantes.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input
                      type="number"
                      min="3"
                      max="15"
                      value={newTest.maxParticipants || 8}
                      onChange={(e) => setNewTest({...newTest, maxParticipants: parseInt(e.target.value)})}
                      className="bg-white/5 border-white/20 text-white"
                    />
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
                  {newTest.type === "Entrevistas" && newTest.selectedPersonas && newTest.selectedPersonas.length > 0 && (
                    <div className="mt-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <p className="text-sm text-purple-300">
                        <Mic className="w-4 h-4 inline mr-1" />
                        Entrevistas configuradas: {newTest.maxParticipants || 8} entrevistas individuales con {newTest.selectedPersonas.length} persona(s)
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
          {testsWithInterviews.filter(test => {
            const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 test.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = filterStatus === "all" || test.status === filterStatus;
            return matchesSearch && matchesStatus;
          }).map((test, index) => (
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
                      ) : test.type === "Entrevistas" ? (
                        <Mic className="w-5 h-5 text-purple-400" />
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
                      {test.type === "Entrevistas" && test.maxParticipants && (
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          Entrevistas: {test.maxParticipants}p
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

                {/* Entrevistas realizadas */}
                {test.interviews && test.interviews.length > 0 && (
                  <div>
                    <span className="text-sm font-medium text-gray-400 block mb-2">
                      Entrevistas Realizadas ({test.interviews.length})
                    </span>
                    <div className="space-y-2">
                      {test.interviews.slice(0, 2).map((interview, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-purple-400" />
                            <div>
                              <div className="text-sm text-purple-200">{interview.participantName}</div>
                              <div className="text-xs text-purple-400">{interview.persona}</div>
                            </div>
                          </div>
                          <Badge className={interview.status === "Completada" ? "bg-green-500/20 text-green-300 border-green-500/30" : "bg-blue-500/20 text-blue-300 border-blue-500/30"}>
                            {interview.status}
                          </Badge>
                        </div>
                      ))}
                      {test.interviews.length > 2 && (
                        <div className="text-xs text-gray-500">+{test.interviews.length - 2} entrevistas más</div>
                      )}
                    </div>
                  </div>
                )}

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

                {/* Botón para añadir más participantes */}
                {test.canAddParticipants && test.status !== "Completada" && (
                  <div className="pt-2 border-t border-white/10">
                    <Button 
                      size="sm" 
                      onClick={() => handleAddParticipant(test.id)}
                      className="w-full bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 rounded-xl border"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Añadir Más Participantes ({test.participants}/{test.maxParticipants || test.focusGroupSize || "∞"})
                    </Button>
                  </div>
                )}

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
                        <div className="flex gap-2 w-full">
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Resultados
                          </Button>
                          {test.type === "Focus Group" && test.insights && (
                            <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Insights
                            </Button>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                        <p>Ver análisis completo y insights del focus group</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {test.type === "Entrevistas" && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="sm" 
                          onClick={() => handleAddInterview(test.id)}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl"
                        >
                          <Mic className="w-4 h-4 mr-2" />
                          Gestionar Entrevistas
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                        <p>Ver y gestionar entrevistas individuales</p>
                      </TooltipContent>
                    </Tooltip>
                  )}

                  {/* Focus Group Insights Section */}
                  {test.type === "Focus Group" && test.status === "Completada" && test.insights && (
                    <div className="mt-4 space-y-4 pt-4 border-t border-white/10">
                      {/* Key Insights */}
                      <div>
                        <h5 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Insights Principales
                        </h5>
                        <div className="space-y-1">
                          {test.insights.slice(0, 2).map((insight, idx) => (
                            <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                              <TrendingUp className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                              {insight}
                            </div>
                          ))}
                          {test.insights.length > 2 && (
                            <div className="text-xs text-blue-400 cursor-pointer hover:text-blue-300">
                              Ver {test.insights.length - 2} insights más...
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Featured Quote */}
                      {test.quotes && test.quotes.length > 0 && (
                        <div>
                          <h5 className="font-medium text-purple-400 mb-2 flex items-center gap-2">
                            <Quote className="w-4 h-4" />
                            Quote Destacado
                          </h5>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                            <blockquote className="text-sm text-purple-200 italic mb-2">
                              "{test.quotes[0].quote}"
                            </blockquote>
                            <div className="text-xs text-purple-300">
                              — {test.quotes[0].participant}
                            </div>
                            <div className="text-xs text-purple-400 mt-1">
                              {test.quotes[0].context}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Key Findings */}
                      {test.keyFindings && test.keyFindings.length > 0 && (
                        <div>
                          <h5 className="font-medium text-green-400 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Hallazgos Clave
                          </h5>
                          <div className="space-y-1">
                            {test.keyFindings.slice(0, 2).map((finding, idx) => (
                              <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                {finding}
                              </div>
                            ))}
                            {test.keyFindings.length > 2 && (
                              <div className="text-xs text-green-400 cursor-pointer hover:text-green-300">
                                Ver {test.keyFindings.length - 2} hallazgos más...
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Reflection */}
                      {test.reflections && test.reflections.length > 0 && (
                        <div>
                          <h5 className="font-medium text-amber-400 mb-2 flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Reflexión del Moderador
                          </h5>
                          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                            <p className="text-sm text-amber-200">
                              {test.reflections[0]}
                            </p>
                            {test.reflections.length > 1 && (
                              <div className="text-xs text-amber-400 mt-2 cursor-pointer hover:text-amber-300">
                                Ver más reflexiones...
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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

        {/* Dialog para gestionar entrevistas */}
        <Dialog open={isInterviewDialogOpen} onOpenChange={setIsInterviewDialogOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                <Mic className="w-5 h-5 text-purple-400" />
                Gestión de Entrevistas - {selectedTestForInterview?.name}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Gestiona las entrevistas individuales, añade preguntas y revisa respuestas
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Lista de entrevistas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockInterviews.map((interview) => (
                  <Card key={interview.id} className="bg-white/5 border border-white/10">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-white flex items-center gap-2">
                            <User className="w-5 h-5 text-purple-400" />
                            {interview.participantName}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            {interview.persona} • {interview.duration}
                          </CardDescription>
                        </div>
                        <Badge className={interview.status === "Completada" ? "bg-green-500/20 text-green-300 border-green-500/30" : "bg-blue-500/20 text-blue-300 border-blue-500/30"}>
                          {interview.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Preguntas y respuestas */}
                      <div>
                        <h5 className="font-medium text-gray-300 mb-2">Preguntas ({interview.questions.length})</h5>
                        <div className="space-y-3 max-h-48 overflow-y-auto">
                          {interview.questions.map((q) => (
                            <div key={q.id} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                              <div className="text-sm font-medium text-blue-300 mb-1">
                                P: {q.question}
                              </div>
                              {q.answer && (
                                <div className="text-sm text-gray-300 mb-2">
                                  R: {q.answer}
                                </div>
                              )}
                              {q.followUp && (
                                <div className="text-xs text-purple-300 italic">
                                  Follow-up: {q.followUp}
                                </div>
                              )}
                              {q.timestamp && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {q.timestamp}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Añadir nueva pregunta */}
                      {interview.status === "En curso" && (
                        <div>
                          <Label className="text-gray-200 text-sm">Nueva Pregunta</Label>
                          <div className="flex gap-2 mt-1">
                            <Input
                              value={newQuestion}
                              onChange={(e) => setNewQuestion(e.target.value)}
                              placeholder="Escribe tu pregunta..."
                              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleAddQuestion(interview.id);
                                }
                              }}
                            />
                            <Button 
                              size="sm" 
                              onClick={() => handleAddQuestion(interview.id)}
                              className="bg-purple-600 hover:bg-purple-500 rounded-xl"
                            >
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Insights */}
                      {interview.insights && interview.insights.length > 0 && (
                        <div>
                          <h5 className="font-medium text-green-400 mb-2">Insights</h5>
                          <div className="space-y-1">
                            {interview.insights.map((insight, idx) => (
                              <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                <Lightbulb className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                                {insight}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Próximos pasos */}
                      {interview.nextSteps && interview.nextSteps.length > 0 && (
                        <div>
                          <h5 className="font-medium text-blue-400 mb-2">Próximos Pasos</h5>
                          <div className="space-y-1">
                            {interview.nextSteps.map((step, idx) => (
                              <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                <Target className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Acciones */}
                      <div className="flex gap-2 pt-2 border-t border-white/10">
                        {interview.status === "En curso" && (
                          <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-500 rounded-xl">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Continuar
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl">
                          <Calendar className="w-4 h-4 mr-1" />
                          Reprogramar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Preguntas sugeridas */}
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-yellow-400" />
                    Preguntas Sugeridas
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Basadas en mejores prácticas para entrevistas de usuario
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {suggestedQuestions.map((question, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setNewQuestion(question)}
                        className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                      >
                        <p className="text-sm text-gray-300">{question}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>

        {/* Dialog para añadir participantes */}
        <Dialog open={isAddParticipantDialogOpen} onOpenChange={setIsAddParticipantDialogOpen}>
          <DialogContent className="max-w-2xl bg-gray-900 border-gray-700 text-white">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-blue-400" />
                Añadir Participantes - {selectedTestForInterview?.name}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Añade más participantes a esta prueba o entrevista
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Información actual */}
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-300 mb-2">Estado Actual</h4>
                <div className="text-sm text-blue-200">
                  <p>Participantes actuales: {selectedTestForInterview?.participants || 0}</p>
                  <p>Máximo permitido: {selectedTestForInterview?.maxParticipants || selectedTestForInterview?.focusGroupSize || "Sin límite"}</p>
                  <p>Personas objetivo: {selectedTestForInterview?.selectedPersonas.join(", ")}</p>
                </div>
              </div>

              {/* Formulario para añadir participante */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="participantName" className="text-gray-200">Nombre del Participante</Label>
                  <Input
                    id="participantName"
                    placeholder="Ej: Ana Martínez"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="participantPersona" className="text-gray-200">Persona que Representa</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Selecciona persona" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {selectedTestForInterview?.selectedPersonas.map((persona) => (
                        <SelectItem key={persona} value={persona} className="text-white hover:bg-gray-700">
                          {persona}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="participantEmail" className="text-gray-200">Email de Contacto</Label>
                  <Input
                    id="participantEmail"
                    type="email"
                    placeholder="ana@email.com"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="participantNotes" className="text-gray-200">Notas Adicionales</Label>
                  <Textarea
                    id="participantNotes"
                    placeholder="Información relevante sobre el participante..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsAddParticipantDialogOpen(false)}
                  variant="outline"
                  className="flex-1 bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Añadir Participante
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default UserTests;