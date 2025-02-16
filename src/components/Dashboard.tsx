
import { Sparkles, Zap, Heart, Robot, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <header className="py-8 px-6 text-center animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2">DeepEngage</h1>
        <p className="text-muted-foreground">AI-Powered Marketing Assistant</p>
      </header>

      <main className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-xl font-semibold">Content Generator</h2>
            </div>
            <p className="text-muted-foreground">Generate emotional, high-impact marketing copy across platforms.</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up delay-100">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-warning" />
              <h2 className="text-xl font-semibold">Sentiment Analysis</h2>
            </div>
            <p className="text-muted-foreground">Analyze real-time consumer emotions and feedback.</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up delay-200">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-8 h-8 text-destructive" />
              <h2 className="text-xl font-semibold">Lovable Score™</h2>
            </div>
            <p className="text-muted-foreground">Rate and improve content for emotional impact.</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up delay-300">
            <div className="flex items-center gap-4 mb-4">
              <Robot className="w-8 h-8 text-secondary" />
              <h2 className="text-xl font-semibold">Multi-Agent System</h2>
            </div>
            <p className="text-muted-foreground">Automated marketing optimization and insights.</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up delay-400">
            <div className="flex items-center gap-4 mb-4">
              <Mic className="w-8 h-8 text-success" />
              <h2 className="text-xl font-semibold">Speech-to-Text</h2>
            </div>
            <p className="text-muted-foreground">Convert spoken content into marketing materials.</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
