import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Users, 
  TestTube, 
  BarChart3, 
  Plus, 
  FileText, 
  Sparkles,
  Home,
  LogOut,
  Wand2
} from "lucide-react";
import LanguageSelector from "./LanguageSelector";

interface FixedNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const FixedNavigation = ({ activeTab, onTabChange, onLogout }: FixedNavigationProps) => {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      tooltip: "Panel principal con resumen de actividades"
    },
    {
      id: "project-creator",
      label: "Proyectos",
      icon: Plus,
      tooltip: "Crear nuevos proyectos con IA"
    },
    {
      id: "personas",
      label: "Personas",
      icon: Users,
      tooltip: "Gestionar y generar user personas"
    },
    {
      id: "tests",
      label: "Pruebas",
      icon: TestTube,
      tooltip: "Crear y gestionar pruebas UX y focus groups"
    },
    {
      id: "docs-analyzer",
      label: "Documentos",
      icon: FileText,
      tooltip: "Analizar documentación con IA"
    },
    {
      id: "informe-analytics",
      label: "Informe & Analytics",
      icon: BarChart3,
      tooltip: "Ver métricas, informes y resultados detallados"
    }
  ];

  return (
    <TooltipProvider>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/Group 4.svg" 
                alt="UX Pathia Logo" 
                className="h-10 object-contain"
              />
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={activeTab === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => onTabChange(item.id)}
                      className={`flex items-center gap-2 transition-all duration-300 rounded-xl ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="hidden lg:inline">{item.label}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                    <p>{item.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <LanguageSelector />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onLogout}
                    className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline ml-2">Salir</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900 border-gray-700 text-white">
                  <p>Cerrar sesión y volver a la landing</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4">
            <div className="flex items-center gap-1 overflow-x-auto pb-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center gap-2 whitespace-nowrap transition-all duration-300 rounded-xl ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default FixedNavigation;