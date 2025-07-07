import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, TestTube, BarChart3, Plus, FileText } from "lucide-react";
import UserPersonas from "@/components/UserPersonas";
import UserTests from "@/components/UserTests";
import Analytics from "@/components/Analytics";
import ProjectCreator from "@/components/ProjectCreator";
import PersonaGenerator from "@/components/PersonaGenerator";
import DocumentationUploader from "@/components/DocumentationUploader";
import AuthenticatedNav from "@/components/AuthenticatedNav";
import DashboardContent from "@/components/DashboardContent";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    // Aquí se implementaría la lógica de logout
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <AuthenticatedNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onLogout={handleLogout}
        />
        
        <div className="container mx-auto px-4 py-8">
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
              <UserPersonas />
            </TabsContent>

            <TabsContent value="persona-generator">
              <PersonaGenerator />
            </TabsContent>

            <TabsContent value="tests">
              <UserTests />
            </TabsContent>

            <TabsContent value="docs-analyzer">
              <DocumentationUploader />
            </TabsContent>

            <TabsContent value="analytics">
              <Analytics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;