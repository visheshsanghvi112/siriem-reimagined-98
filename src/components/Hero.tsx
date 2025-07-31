import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Battery, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-charging.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Electric charging station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Charge Any EV,{" "}
            <span className="text-gradient">Anywhere</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            No matter what type of EV, our chargers are designed to work seamlessly, 
            offering you the freedom to charge anywhere, anytime.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 text-white">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-medium">AI-Powered Technology</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Battery className="w-5 h-5 text-primary" />
              <span className="font-medium">Universal Compatibility</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Cpu className="w-5 h-5 text-primary" />
              <span className="font-medium">Smart Integration</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="group">
              Talk to our expert
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="space-y-6">
          <div className="w-16 h-16 gradient-electric rounded-xl flex items-center justify-center animate-float">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <Battery className="w-6 h-6 text-white" />
          </div>
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
            <Cpu className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;