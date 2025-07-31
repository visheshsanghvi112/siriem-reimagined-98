import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Users, Target } from "lucide-react";
import chargingInfra from "@/assets/charging-infrastructure.jpg";

const Approach = () => {
  const principles = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "We craft tailor-made charging solutions for all sizes and complexities of EV charging and battery storage systems."
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description: "We become your trusted partner, providing ongoing maintenance and support to ensure your charging infrastructure thrives."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Our solutions leverage the latest AI-powered technology to deliver optimal performance and reliability."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Our Approach to EV Charging Solutions - SIRI Electromotive"
        description="Discover SIRI Electromotive's approach to creating tailored EV charging solutions with cutting-edge AI technology and comprehensive support."
        keywords="EV charging approach, tailored charging solutions, AI-powered charging, charging infrastructure strategy"
        url="https://siriem.com/approach"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Approach</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in crafting solutions that adapt to your unique needs, 
              not forcing you to adapt to ours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Comprehensive Charging Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We craft tailor-made charging solutions for all sizes and complexities of EV charging 
                and battery storage systems. We become your trusted partner, providing ongoing 
                maintenance and support to ensure your charging infrastructure thrives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg">Custom solution design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg">Scalable infrastructure planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg">Ongoing partnership and support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={chargingInfra} 
                alt="Our approach to charging solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-electric rounded-xl animate-pulse-electric" />
            </div>
          </div>

          {/* Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-energy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your Electrification Journey?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our approach can transform your business
          </p>
          <Button variant="electric" size="lg">
            Talk to our expert
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Approach;