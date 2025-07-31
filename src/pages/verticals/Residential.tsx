import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, Smartphone, Clock, Zap, Wifi, DollarSign, Shield, Battery } from "lucide-react";

const Residential = () => {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Installation",
      description: "Professional installation services with proper permits and electrical upgrades"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Charging",
      description: "Intelligent charging that optimizes energy costs and integrates with renewable energy"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Control",
      description: "Complete control and monitoring through our user-friendly mobile application"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Energy Optimization",
      description: "Time-of-use charging and solar integration for maximum cost savings"
    }
  ];

  const residentialTypes = [
    {
      title: "Single Family Homes",
      description: "Complete home charging solutions with garage and driveway installations",
      features: ["Level 2 charging", "Smart integration", "Solar compatibility", "Future-ready"]
    },
    {
      title: "Apartment Communities",
      description: "Multi-unit charging infrastructure for apartment complexes and condominiums",
      features: ["Shared infrastructure", "Tenant billing", "Access management", "Scalable design"]
    },
    {
      title: "Housing Developments",
      description: "Pre-wired EV-ready infrastructure for new construction and renovations",
      features: ["Future-proofing", "Cost-effective planning", "Developer partnerships", "Regulatory compliance"]
    }
  ];

  const smartFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Schedule Charging",
      description: "Set charging schedules to take advantage of off-peak electricity rates"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "WiFi Connectivity",
      description: "Stay connected with real-time status updates and remote control capabilities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Features",
      description: "Advanced safety systems with ground fault protection and automatic shutoff"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "60% Cost Savings",
      description: "Save significantly compared to public charging with home electricity rates"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Convenience",
      description: "Wake up to a fully charged vehicle every morning without trips to charging stations"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Energy Independence",
      description: "Combine with solar panels for complete energy independence and sustainability"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Residential EV Charging Solutions - Home & Community Charging | SIRI Electromotive"
        description="Home EV charging solutions with smart features for residential properties. Professional installation, mobile app control, energy optimization for single homes, apartments, and communities."
        keywords="home EV charging, residential charging, smart home charging, apartment charging, community EV infrastructure, home charging installation"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Home className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                Residential Charging
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your home into an EV charging hub with smart, convenient, and cost-effective 
              charging solutions designed for modern residential living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Get Home Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Calculate Savings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Home Charging Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for convenient, efficient, and smart home EV charging
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

      {/* Residential Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Residential Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customized charging solutions for every type of residential property
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {residentialTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
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

      {/* Smart Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Smart Home Integration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly integrate EV charging with your smart home ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {smartFeatures.map((feature, index) => (
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

      {/* Installation Process */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple Installation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional installation from consultation to completion
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Site Assessment", description: "Our experts evaluate your home's electrical capacity and optimal charging location" },
              { step: "2", title: "Permit & Planning", description: "We handle all permits, electrical planning, and utility coordination" },
              { step: "3", title: "Professional Install", description: "Certified technicians install your charger with proper safety measures" },
              { step: "4", title: "App Setup & Training", description: "Complete setup and training on your mobile app and smart features" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="gradient-electric text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Home Charging Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the convenience and savings of home EV charging
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
          <h2 className="text-4xl font-bold mb-6">Start Charging at Home</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of homeowners already enjoying the convenience of home EV charging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Schedule Home Consultation
              <Home className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Get Installation Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Residential;