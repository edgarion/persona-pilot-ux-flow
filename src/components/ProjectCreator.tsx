
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowRight, Brain, Users, Target, Clock, BarChart3, Lightbulb, CheckCircle2, Zap, Wand2 } from "lucide-react";

interface AnalysisResult {
  methodologies: string[];
  personas: string[];
  timeline: string;
  participants: string;
  metrics: string[];
  insights: string[];
  steps: string[];
}

const ProjectCreator = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const examplePrompts = [
    "I'm redesigning an e-commerce checkout flow for millennials who abandon their carts frequently",
    "We need to test our new mobile banking app with elderly users who struggle with technology",
    "Our SaaS dashboard has low engagement - users don't understand the main features",
    "We're launching a fitness app for busy professionals and need to validate the onboarding flow"
  ];

  const handleAnalyze = async () => {
    if (!projectDescription.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        methodologies: [
          "Moderated Usability Testing",
          "Unmoderated Remote Testing", 
          "A/B Testing",
          "Card Sorting",
          "User Interviews"
        ],
        personas: [
          "Tech-Savvy Millennials (25-35)",
          "Busy Professionals (30-45)",
          "Digital Natives (18-28)"
        ],
        timeline: "4-6 weeks",
        participants: "15-20 users per methodology",
        metrics: [
          "Task Completion Rate",
          "Time on Task",
          "Error Rate",
          "User Satisfaction Score",
          "Net Promoter Score"
        ],
        insights: [
          "Focus on mobile-first design patterns",
          "Implement progressive disclosure for complex features",
          "Add contextual help and onboarding tooltips",
          "Consider accessibility standards for broader reach"
        ],
        steps: [
          "Define research objectives and success criteria",
          "Recruit participants matching target personas",
          "Create test scenarios and tasks",
          "Conduct moderated sessions",
          "Analyze quantitative and qualitative data",
          "Generate actionable recommendations"
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
    setProjectDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">AI-Powered UX Research</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            Intelligent UX Analysis
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Describe your UX project in natural language and get comprehensive research plans, 
            methodologies, and insights powered by AI
          </p>
        </div>

        {!analysisResult ? (
          /* Input Interface */
          <div className="space-y-8">
            {/* Main Input Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-6 h-6 text-blue-400" />
                  Describe Your UX Challenge
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Tell us about your project, users, and goals. The more context you provide, the better our AI analysis will be.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="description" className="text-slate-200 text-base font-medium">
                    Project Description
                  </Label>
                  <Textarea
                    id="description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Example: I'm redesigning our mobile app's checkout process. Users are abandoning their carts at a 70% rate, particularly on mobile devices. Our target audience is tech-savvy millennials who value speed and simplicity..."
                    className="mt-3 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 min-h-[120px] text-base leading-relaxed"
                    rows={6}
                  />
                </div>
                
                <Button
                  onClick={handleAnalyze}
                  disabled={!projectDescription.trim() || isAnalyzing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-4 text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isAnalyzing ? (
                    <>
                      <Wand2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing Your Project...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate UX Research Plan
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Example Prompts */}
            <Card className="bg-slate-800/30 border-slate-700/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  Example Prompts
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Not sure how to start? Try one of these examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examplePrompts.map((prompt, index) => (
                    <div
                      key={index}
                      onClick={() => setProjectDescription(prompt)}
                      className="p-4 bg-slate-700/30 border border-slate-600/30 rounded-lg cursor-pointer hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-200 group"
                    >
                      <p className="text-slate-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                        "{prompt}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Results Interface */
          <div className="space-y-8">
            {/* Success Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-green-200 font-medium">Analysis Complete</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Your Comprehensive UX Research Plan
              </h2>
              <Button
                onClick={resetAnalysis}
                variant="outline"
                className="bg-slate-700/50 border-slate-600/50 text-slate-200 hover:bg-slate-600/50"
              >
                Analyze Another Project
              </Button>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Methodologies */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Recommended Methodologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResult.methodologies.map((method, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                        <Zap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-200">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* User Personas */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Target Personas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResult.personas.map((persona, index) => (
                      <div key={index} className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg">
                        <span className="text-slate-200">{persona}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline & Participants */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    Timeline & Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <div className="text-amber-200 text-sm font-medium mb-1">Timeline</div>
                    <div className="text-white">{analysisResult.timeline}</div>
                  </div>
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <div className="text-amber-200 text-sm font-medium mb-1">Participants</div>
                    <div className="text-white">{analysisResult.participants}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-400" />
                    Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.metrics.map((metric, index) => (
                      <Badge key={index} className="bg-green-500/20 text-green-200 border-green-500/30">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  AI-Generated Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysisResult.insights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200">{insight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Research Steps */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Step-by-Step Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysisResult.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCreator;
