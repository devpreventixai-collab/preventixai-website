import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/10">
      <div className="container">
        <Card className="max-w-4xl mx-auto p-12 border-0 shadow-2xl bg-gradient-to-br from-background/95 to-background">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your
              <span className="text-primary"> Workplace Safety?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join hundreds of companies already using Preventix AI to protect their workforce 
              and prevent accidents before they happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Schedule a Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-safety-green mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-safety-green mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-safety-green mr-2" />
                Setup in under 5 minutes
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;