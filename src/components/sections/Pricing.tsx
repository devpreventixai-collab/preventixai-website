import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Building2, Building, Factory } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "BASIC",
      targetCustomer: "SME",
      price: "£50",
      period: "per location/month",
      icon: Building2,
      popular: false,
      features: [
        "Core compliance",
        "Incident Logging & Monitoring", 
        "Basic Analytics",
        "Standard reporting",
        "Email support"
      ],
      gradient: "from-muted/50 to-background",
      iconBg: "bg-gradient-to-br from-muted to-secondary"
    },
    {
      name: "PRO",
      targetCustomer: "LARGE COMPANIES",
      price: "£100", 
      period: "per location/month",
      icon: Building,
      popular: true,
      features: [
        "Everything in Basic",
        "Predictive AI incident analysis",
        "Advanced analytics/Root Cause Analysis",
        "Onboarding Assistance",
        "Priority email support",
        "Custom integrations"
      ],
      gradient: "from-primary/20 to-primary/10",
      iconBg: "bg-gradient-to-br from-primary to-primary-glow"
    },
    {
      name: "ADVANCE",
      targetCustomer: "ENTERPRISES", 
      price: "£180",
      period: "per location/month",
      icon: Factory,
      popular: false,
      features: [
        "Everything in Pro",
        "Generative AI Safety Recommendations",
        "Custom Reporting & Executive Dashboard",
        "Priority Support",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      gradient: "from-warning-amber/20 to-warning-amber/10",
      iconBg: "bg-gradient-to-br from-warning-amber to-safety-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-primary">Safety Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scalable solutions designed for organizations of every size, from SMEs to large enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon and Plan Name */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full ${plan.iconBg} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground font-medium">{plan.targetCustomer}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Revenue Streams */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/5 border-0 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Additional Revenue Streams</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Partnership Revenue</h4>
                  <p className="text-muted-foreground">Shared revenue partnership with Health and Safety Audit Providers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Training Collaboration</h4>
                  <p className="text-muted-foreground">Collaborative revenue opportunities with Health and Safety Training Providers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Data Insights</h4>
                  <p className="text-muted-foreground">Secure, anonymized data sharing fully aligned with GDPR standards</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * Additional revenue pricing to be identified after market research
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;