import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Truck, BarChart3, Clock, DollarSign, Zap, MapPin, Shield, Wrench } from "lucide-react";

const Fleets = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Fleet Management Integration",
      description: "Seamlessly integrate with existing fleet management systems for unified operations"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Route Optimization",
      description: "Smart charging scheduling based on route planning and vehicle requirements"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Analytics",
      description: "Detailed cost analysis and ROI tracking for fleet electrification"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Depot Charging",
      description: "Optimized depot charging solutions for overnight and scheduled charging"
    }
  ];

  const fleetTypes = [
    {
      title: "Logistics & Delivery",
      description: "Optimize last-mile delivery with strategic charging infrastructure",
      benefits: ["Reduced fuel costs", "Lower maintenance", "Route efficiency", "Brand sustainability"]
    },
    {
      title: "Public Transport",
      description: "Electrify buses and public vehicles with reliable charging solutions",
      benefits: ["Passenger comfort", "Zero emissions", "Operational efficiency", "Smart scheduling"]
    },
    {
      title: "Corporate Fleets",
      description: "Transform corporate vehicle fleets with intelligent charging systems",
      benefits: ["Employee benefits", "Cost savings", "Carbon footprint reduction", "Smart reporting"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "40% Cost Reduction",
      description: "Reduce operational costs through intelligent charging and energy optimization"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.8% Uptime",
      description: "Reliable charging infrastructure with predictive maintenance and monitoring"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Charging",
      description: "AI-powered charging optimization based on route planning and energy costs"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fleet Charging Solutions - EV Fleet Management | SIRI Electromotive"
        description="Comprehensive EV charging solutions for commercial fleets. Route optimization, depot charging, cost analytics, and fleet management integration for logistics, delivery, and corporate fleets."
        keywords="fleet charging, commercial EV charging, depot charging, fleet management, route optimization, delivery fleet charging, logistics EV solutions"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Truck className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                Fleet Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your commercial fleet with intelligent EV charging solutions. 
              Optimize routes, reduce costs, and accelerate your transition to electric mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Schedule Fleet Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download Fleet Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Fleet-Focused Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built solutions designed specifically for commercial fleet operations
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

      {/* Fleet Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Fleet Types We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions for every type of commercial fleet operation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fleetTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our fleet solutions deliver measurable improvements to your bottom line
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
          <h2 className="text-4xl font-bold mb-6">Ready to Electrify Your Fleet?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading companies already saving costs and reducing emissions with our fleet solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Get Fleet Assessment
              <Wrench className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact Fleet Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleets;