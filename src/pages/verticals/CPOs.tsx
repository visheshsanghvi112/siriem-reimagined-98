import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, MapPin, CreditCard, BarChart3, Shield, Smartphone, Globe, TrendingUp } from "lucide-react";

const CPOs = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network Management",
      description: "Centralized management platform for multi-site charging network operations"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Processing",
      description: "Integrated payment systems with multiple payment methods and billing options"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Remote Monitoring",
      description: "24/7 remote monitoring with predictive maintenance and real-time diagnostics"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Optimization",
      description: "Dynamic pricing, demand forecasting, and revenue analytics for maximum profitability"
    }
  ];

  const cpoSolutions = [
    {
      title: "Public Fast Charging",
      description: "High-power DC fast charging solutions for highways, cities, and commercial areas",
      features: ["DC fast charging", "Payment integration", "Remote diagnostics", "Load management"]
    },
    {
      title: "Destination Charging",
      description: "Level 2 charging solutions for retail, hospitality, and entertainment venues",
      features: ["Customer amenities", "Dwell time optimization", "Brand integration", "Usage analytics"]
    },
    {
      title: "Highway Charging",
      description: "Ultra-fast charging corridors for long-distance travel and freight transport",
      features: ["Ultra-fast charging", "Route planning", "Fleet services", "Grid integration"]
    }
  ];

  const platformFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Platform",
      description: "White-label mobile app solution for customer engagement and service delivery"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location Intelligence",
      description: "AI-powered site selection and optimization for maximum utilization and ROI"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance to industry standards and regulations"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "3x Revenue Growth",
      description: "Maximize revenue with dynamic pricing and intelligent demand management"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.5% Uptime",
      description: "Industry-leading reliability with predictive maintenance and remote support"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive business intelligence and operational insights for data-driven decisions"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="CPO Solutions - Charge Point Operator Platform | SIRI Electromotive"
        description="Advanced solutions for Charge Point Operators managing public charging networks. Network management, payment processing, remote monitoring, and revenue optimization for CPOs."
        keywords="CPO solutions, charge point operator, public charging network, EV charging management, charging station software, CPO platform"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                CPO Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive platform for Charge Point Operators to manage, monitor, and optimize 
              public EV charging networks with advanced analytics and revenue management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Schedule CPO Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download CPO Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">CPO Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete suite of tools designed specifically for charge point operators
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

      {/* CPO Solutions */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Charging Network Types</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions for different types of charging network operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cpoSolutions.map((solution, index) => (
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

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advanced Platform Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade features for professional charging network operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
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

      {/* Revenue Management */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Revenue Management</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Maximize profitability with intelligent pricing and demand management tools.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Dynamic pricing based on demand patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Real-time revenue analytics and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span>Multiple payment methods and billing options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Multi-site revenue optimization</span>
                </div>
              </div>
              <Button variant="electric" size="lg">
                Explore Revenue Tools
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Revenue Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Today's Revenue</span>
                    <span className="font-bold text-primary">₹45,632</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Sessions</span>
                    <span className="font-bold">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Peak Utilization</span>
                    <span className="font-bold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Network Uptime</span>
                    <span className="font-bold text-green-600">99.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">CPO Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven results that drive charging network success and profitability
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
          <h2 className="text-4xl font-bold mb-6">Scale Your Charging Network</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join successful CPOs who trust our platform to manage and grow their charging networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Request CPO Demo
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact CPO Specialists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CPOs;