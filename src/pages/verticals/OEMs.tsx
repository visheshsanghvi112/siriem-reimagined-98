import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Car, Cog, Handshake, Shield, Zap, Wrench, Users, Globe } from "lucide-react";

const OEMs = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Vehicle Integration",
      description: "Deep integration with vehicle systems for optimal charging performance and user experience"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored charging hardware and software solutions designed for your specific vehicle requirements"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "White-label Options",
      description: "Branded charging solutions that seamlessly integrate with your brand identity and ecosystem"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Technical Support",
      description: "Comprehensive technical support and engineering assistance throughout development and deployment"
    }
  ];

  const oemSolutions = [
    {
      title: "Onboard Charger Development",
      description: "Custom onboard charging solutions optimized for your vehicle platform",
      features: ["Power density optimization", "Thermal management", "EMC compliance", "Cost optimization"]
    },
    {
      title: "Charging Infrastructure",
      description: "Branded charging network solutions for OEM customer networks",
      features: ["Brand integration", "Customer app", "Network management", "Service support"]
    },
    {
      title: "Vehicle-to-Grid Integration",
      description: "Advanced V2G capabilities for next-generation electric vehicles",
      features: ["Bidirectional charging", "Grid services", "Energy management", "Smart integration"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Strategic Partnership",
      description: "Long-term technology partnership with shared development roadmaps and innovation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality standards that meet automotive industry requirements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Team",
      description: "Dedicated engineering and support teams focused on your specific OEM requirements"
    }
  ];

  const developmentPhases = [
    { phase: "1", title: "Requirements Analysis", description: "Deep dive into vehicle specifications and charging requirements" },
    { phase: "2", title: "Solution Design", description: "Custom hardware and software design optimized for your platform" },
    { phase: "3", title: "Prototyping & Testing", description: "Comprehensive testing including EMC, safety, and performance validation" },
    { phase: "4", title: "Production & Support", description: "Manufacturing scale-up and ongoing technical support" }
  ];

  const benefits = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Faster Time to Market",
      description: "Accelerate vehicle development with proven charging technology and expertise"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Optimized Performance",
      description: "Maximize charging efficiency and performance through integrated design approach"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduced Risk",
      description: "Minimize development risk with automotive-grade solutions and proven track record"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="OEM EV Charging Solutions - Vehicle Integration & Custom Development | SIRI Electromotive"
        description="Integrated EV charging solutions for Original Equipment Manufacturers. Custom onboard chargers, vehicle integration, white-label solutions, and technical partnerships for OEMs."
        keywords="OEM charging solutions, onboard charger development, vehicle integration, automotive charging, custom EV chargers, OEM partnerships"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Car className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                OEM Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Partner with us to integrate cutting-edge charging technology into your electric vehicles. 
              Custom solutions, deep integration, and comprehensive support for automotive manufacturers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Schedule Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download Technical Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">OEM-Focused Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions designed for automotive manufacturers and vehicle integration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto gradient-electric p-3 rounded-xl text-white w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Solutions */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive OEM Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end charging solutions from component development to infrastructure deployment
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {oemSolutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Partnership Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why leading automotive manufacturers choose us as their charging technology partner
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto gradient-electric p-3 rounded-xl text-white w-fit mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to deliver custom charging solutions for your vehicle platform
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {developmentPhases.map((process, index) => (
              <div key={index} className="text-center">
                <div className="gradient-electric text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.phase}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Technical Excellence</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our solutions meet the highest automotive industry standards for safety, performance, and reliability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>ISO 26262 functional safety compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Advanced power electronics and thermal management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cog className="w-5 h-5 text-primary" />
                  <span>Comprehensive EMC and automotive testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Global certification and regulatory compliance</span>
                </div>
              </div>
              <Button variant="electric" size="lg">
                View Technical Capabilities
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Power Range</span>
                    <span className="font-bold">3.3kW - 22kW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Efficiency</span>
                    <span className="font-bold text-green-600">&gt;95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Operating Temp</span>
                    <span className="font-bold">-40°C to +85°C</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Safety Standards</span>
                    <span className="font-bold">ISO 26262</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Certifications</span>
                    <span className="font-bold">CE, FCC, Global</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">OEM Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tangible benefits that automotive manufacturers achieve through our partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="gradient-electric p-4 rounded-2xl text-white w-fit mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Partner with the Experts</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading automotive manufacturers who trust us for their charging technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Discuss Partnership
              <Car className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact OEM Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OEMs;