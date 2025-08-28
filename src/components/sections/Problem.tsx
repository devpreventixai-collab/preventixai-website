import { Card } from "@/components/ui/card";
import { TrendingDown, Building2, Users, Landmark } from "lucide-react";

const Problem = () => {
  const impacts = [
    {
      icon: Building2,
      title: "Business",
      amount: "£4.1",
      unit: "BILLION LOST",
      details: [
        "Massive underreporting (up to 50%) of workplace accidents",
        "High cost of insurance claims",
        "Regulatory fines & brand damage"
      ],
      gradient: "from-destructive/20 to-destructive/10",
      iconBg: "bg-gradient-to-br from-destructive to-destructive/80"
    },
    {
      icon: Users,
      title: "Employee",
      amount: "£12.6",
      unit: "BILLION LOST",
      details: [
        "600,000 injuries reported in 23/24",
        "Physical, mental & financial hardships",
        "1.7 million people suffer work-related ill-health issues"
      ],
      gradient: "from-warning-amber/20 to-warning-amber/10",
      iconBg: "bg-gradient-to-br from-warning-amber to-safety-orange"
    },
    {
      icon: Landmark,
      title: "Government",
      amount: "£4.9",
      unit: "BILLION LOST",
      details: [
        "33.3 million working days lost",
        "Double fiscal hit: lost productivity & gained benefit claimant",
        "£140,000 average cost to government per fatal injury"
      ],
      gradient: "from-secondary/30 to-secondary/20",
      iconBg: "bg-gradient-to-br from-secondary to-muted"
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-br from-destructive/5 via-background to-warning-amber/5">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingDown className="w-4 h-4" />
            The Hidden Crisis
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            THE <span className="text-primary">£21 BILLION</span> PROBLEM
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Beyond the Statistics: How One Workplace Accident Can Destroy a Family, 
            Close a Business, and Cost the Nation Millions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {impacts.map((impact, index) => (
            <Card key={index} className="relative p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} rounded-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${impact.iconBg} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <impact.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{impact.title}</h3>
                
                {/* Amount */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-1">{impact.amount}</div>
                  <div className="text-sm text-muted-foreground font-medium">{impact.unit}</div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {impact.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Source: HSE.gov.uk
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;