import { Card } from "@/components/ui/card";
import { Zap, BarChart3, Users, BookOpen, Brain, DollarSign, FileText, Clock, Shield } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Due to no hardware dependence",
      gradient: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Benchmarking Safety Score",
      description: "Improves Accountability",
      gradient: "from-green-500/20 to-green-600/10",
      iconBg: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Identify Gaps",
      description: "In Safety Training",
      gradient: "from-orange-500/20 to-orange-600/10",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: Brain,
      title: "Generative & Predictive AI",
      description: "Advanced intelligence for safety",
      gradient: "from-purple-500/20 to-purple-600/10",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Reduce Cost",
      description: "Optimize safety investments",
      gradient: "from-emerald-500/20 to-emerald-600/10",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      icon: FileText,
      title: "Reduces Lengthy Paperwork",
      description: "Streamlined documentation",
      gradient: "from-red-500/20 to-red-600/10",
      iconBg: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Reduces Disruptions",
      description: "In Operations Saving Time",
      gradient: "from-amber-500/20 to-amber-600/10",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      icon: Shield,
      title: "Increases Compliance",
      description: "Meet regulatory standards",
      gradient: "from-indigo-500/20 to-indigo-600/10",
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="why-us-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WHY <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">US?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PREVENTIXAI delivers comprehensive workplace safety solutions with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-full ${feature.iconBg} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 leading-tight text-gray-800">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Experience PREVENTIXAI Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;