import { Card } from "@/components/ui/card";
import { Heart, Cpu, Database, Users } from "lucide-react";

const Vision = () => {
  const visionPillars = [
    {
      icon: Heart,
      title: "Safety as a basic human right",
      gradient: "from-safety-green/20 to-safety-green/10",
      iconBg: "bg-gradient-to-br from-safety-green to-primary"
    },
    {
      icon: Cpu,
      title: "Technology as an ally for care",
      gradient: "from-primary/20 to-primary/10", 
      iconBg: "bg-gradient-to-br from-primary to-primary-glow"
    },
    {
      icon: Database,
      title: "Data with real human impact",
      gradient: "from-accent/20 to-accent/10",
      iconBg: "bg-gradient-to-br from-accent to-primary"
    },
    {
      icon: Users,
      title: "Every statistic is a person, a story, a family",
      gradient: "from-warning-amber/20 to-warning-amber/10",
      iconBg: "bg-gradient-to-br from-warning-amber to-safety-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            OUR <span className="text-primary">VISION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four core principles that drive everything we do at Preventix AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visionPillars.map((pillar, index) => (
            <Card key={index} className="relative p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative z-10 flex items-center space-x-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${pillar.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold leading-tight">{pillar.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;