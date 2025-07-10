import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import UnifiedPersonas from "@/components/UnifiedPersonas";
import UserTests from "@/components/UserTests";
import Analytics from "@/components/Analytics";
import ProjectCreator from "@/components/ProjectCreator";
import DocumentationUploader from "@/components/DocumentationUploader";
import DashboardContent from "@/components/DashboardContent";
import FinalReport from "@/components/FinalReport";
import FixedNavigation from "@/components/FixedNavigation";
import Breadcrumbs from "@/components/Breadcrumbs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    window.location.reload();
  };

  const getBreadcrumbPath = () => {
    const paths = {
      dashboard: [{ label: "Dashboard", href: "#" }],
      "project-creator": [
        { label: "Dashboard", href: "#", onClick: () => setActiveTab("dashboard") },
        { label: "Crear Proyecto", href: "#" }
      ],
      personas: [
        { label: "Dashboard", href: "#", onClick: () => setActiveTab("dashboard") },
        { label: "Personas", href: "#" }
      ],
      tests: [
        { label: "Dashboard", href: "#", onClick: () => setActiveTab("dashboard") },
        { label: "Pruebas de Usuario", href: "#" }
      ],
      "docs-analyzer": [
        { label: "Dashboard", href: "#", onClick: () => setActiveTab("dashboard") },
        { label: "Análisis de Documentos", href: "#" }
      ],
      "informe-analytics": [
        { label: "Dashboard", href: "#", onClick: () => setActiveTab("dashboard") },
        { label: "Informe & Analytics", href: "#" }
      ]
    };
    return paths[activeTab as keyof typeof paths] || paths.dashboard;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Fixed Navigation */}
        <FixedNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onLogout={handleLogout}
        />
        
        {/* Main Content with proper spacing for fixed nav */}
        <div className="pt-20">
          {/* Breadcrumbs */}
          {activeTab !== "dashboard" && (
            <div className="container mx-auto px-6 py-4">
              <Breadcrumbs items={getBreadcrumbPath()} />
            </div>
          )}
          
          <div className="container mx-auto px-6 pb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-8">
                <DashboardContent onTabChange={setActiveTab} />
              </TabsContent>

              {/* Other Tabs */}
              <TabsContent value="project-creator">
                <ProjectCreator />
              </TabsContent>

              <TabsContent value="personas">
                <UnifiedPersonas />
              </TabsContent>

              <TabsContent value="tests">
                <UserTests />
              </TabsContent>

              <TabsContent value="docs-analyzer">
                <DocumentationUploader />
              </TabsContent>

              <TabsContent value="informe-analytics">
                <div className="space-y-8">
                  <Analytics />
                  <FinalReport />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;