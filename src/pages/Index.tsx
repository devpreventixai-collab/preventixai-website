import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import Analysis from "@/components/sections/Analysis";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import WhyUs from "@/components/sections/WhyNow";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Product from "@/components/sections/Product";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Analysis />
        <Vision />
        <Mission />
        <WhyUs />
        <Product />
        {/* <Pricing /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
