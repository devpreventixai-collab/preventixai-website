import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Zap, TrendingUp, Users, AlertTriangle } from "lucide-react";

const Analysis = () => {
  const stats = [
    { label: "Workplace Accidents", value: "600K", icon: AlertTriangle, sublabel: "Reported in 23/24" },
    { label: "People Affected", value: "1.7M", icon: Users, sublabel: "Work-related ill-health" },
    { label: "Working Days Lost", value: "33.3M", icon: TrendingUp, sublabel: "Annual productivity loss" },
    { label: "AI Safety Adoption", value: "+40%", icon: Brain, sublabel: "Year-over-year growth" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced AI Analysis &
                <span className="text-primary"> Insights</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Harness the power of artificial intelligence to gain unprecedented insights into 
                workplace safety patterns, predict potential incidents, and generate actionable 
                recommendations that keep your workforce protected.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Machine Learning Predictions</h3>
                  <p className="text-muted-foreground">Advanced algorithms analyze patterns to forecast potential safety risks</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-warning-amber to-safety-orange rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Data Processing</h3>
                  <p className="text-muted-foreground">Instant analysis of safety metrics and incident reports</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-safety-green to-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Automated Reporting</h3>
                  <p className="text-muted-foreground">Generate comprehensive safety reports with AI-powered insights</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Explore Analysis Features
            </Button>
          </div>

          {/* Right content - Stats and visual */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center border-0 shadow-lg bg-gradient-to-br from-muted/50 to-background">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground/70">{stat.sublabel}</div>
                </Card>
              ))}
            </div>

            {/* Dashboard preview mockup */}
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/5 border-0 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Safety Dashboard</h4>
                  <div className="w-2 h-2 bg-safety-green rounded-full animate-pulse"></div>
                </div>
                
                {/* Mock chart bars */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 text-xs text-muted-foreground">Jan</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 text-xs text-muted-foreground">Feb</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 text-xs text-muted-foreground">Mar</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;