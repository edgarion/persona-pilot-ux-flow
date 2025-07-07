import { useState } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleGetStarted = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 text-base transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                >
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {isLogin 
                    ? "¿No tienes cuenta? Regístrate aquí" 
                    : "¿Ya tienes cuenta? Inicia sesión"
                  }
                </button>
              </div>

              {isLogin && (
                <div className="mt-4 text-center">
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Demo Access */}
          <div className="mt-6 text-center">
            <Button
              onClick={() => setIsAuthenticated(true)}
              variant="outline"
              className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl"
            >
              Acceso Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;