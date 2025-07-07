import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

interface AuthenticatedNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onLogout?: () => void;
}

const AuthenticatedNav = ({ activeTab, onTabChange, onLogout }: AuthenticatedNavProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
          <div className="flex space-x-4">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              onClick={() => handleTabClick("overview")}
              className="text-gray-300 hover:text-white"
            >
              Overview
            </Button>
            <Button
              variant={activeTab === "projects" ? "default" : "ghost"}
              onClick={() => handleTabClick("projects")}
              className="text-gray-300 hover:text-white"
            >
              Projects
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "ghost"}
              onClick={() => handleTabClick("analytics")}
              className="text-gray-300 hover:text-white"
            >
              Analytics
            </Button>
          </div>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default AuthenticatedNav;