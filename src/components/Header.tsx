import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, User, Eye, EyeOff, Mail, Lock, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  onLogin: () => void;
}

const Header = ({ onLogin }: HeaderProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    setIsLoginOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Hub de Testing UX</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
            <a href="#tutorials" className="text-gray-300 hover:text-white transition-colors">Tutoriales</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Preus</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Login Button */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium rounded-xl hidden md:flex">
                  <User className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle className="text-white text-center">Iniciar Sesión</DialogTitle>
                  <DialogDescription className="text-gray-400 text-center">
                    Accede a tu plataforma de pruebas UX
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-200">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="pl-10 pr-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium py-3 text-base transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                  >
                    Iniciar Sesión
                  </Button>

                  <div className="text-center space-y-2">
                    <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      ¿Olvidaste tu contraseña?
                    </button>
                    <div className="text-gray-400 text-sm">
                      ¿No tienes cuenta?{" "}
                      <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors">
                        Regístrate aquí
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <Button
                    onClick={() => {
                      onLogin();
                      setIsLoginOpen(false);
                    }}
                    variant="outline"
                    className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
                  >
                    Acceso Demo
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-4 mt-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a>
              <a href="#tutorials" className="text-gray-300 hover:text-white transition-colors">Tutoriales</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Precios</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium rounded-xl mt-2">
                <User className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;