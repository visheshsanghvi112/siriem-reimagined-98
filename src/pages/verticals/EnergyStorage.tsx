import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Battery, Zap, BarChart3, Sun, DollarSign, Shield, Activity, Grid } from "lucide-react";

const EnergyStorage = () => {
  const features = [
    {
      icon: <Grid className="w-6 h-6" />,
      title: "Grid Integration",
      description: "Seamless integration with electrical grid for bidirectional energy flow and grid services"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Energy Arbitrage",
      description: "Buy low, sell high with intelligent energy trading and time-of-use optimization"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Peak Shaving Solutions",
      description: "Reduce demand charges and grid stress through intelligent peak load management"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Revenue Generation",
      description: "Multiple revenue streams through grid services, arbitrage, and charging optimization"
    }
  ];

  const storageApplications = [
    {
      title: "Grid-Scale Storage",
      description: "Large-scale energy storage systems for utility and grid-level applications",
      features: ["Grid stabilization", "Frequency regulation", "Load balancing", "Renewable integration"]
    },
    {
      title: "Commercial Storage",
      description: "Behind-the-meter storage solutions for commercial and industrial facilities",
      features: ["Demand charge reduction", "Backup power", "Solar integration", "Load management"]
    },
    {
      title: "Microgrid Systems",
      description: "Localized energy systems with storage and charging infrastructure",
      features: ["Energy independence", "Resilience", "Renewable optimization", "Cost savings"]
    }
  ];

  const gridServices = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Frequency Regulation",
      description: "Provide fast-response frequency regulation services to maintain grid stability"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Voltage Support",
      description: "Reactive power support and voltage regulation for improved grid power quality"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Grid Resilience",
      description: "Enhance grid resilience and provide backup power during outages"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "50% Cost Reduction",
      description: "Reduce energy costs through peak shaving, arbitrage, and demand charge reduction"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "100% Renewable Integration",
      description: "Maximize renewable energy utilization with intelligent storage and charging"
    },
    {
      icon: <Grid className="w-8 h-8" />,
      title: "Grid Service Revenue",
      description: "Generate additional revenue through ancillary grid services and market participation"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Energy Storage Integration - Grid-Scale Solutions | SIRI Electromotive"
        description="Grid-scale energy storage solutions integrated with EV charging infrastructure. Peak shaving, energy arbitrage, renewable integration, and grid services for energy storage providers."
        keywords="energy storage integration, grid-scale storage, peak shaving, energy arbitrage, renewable integration, grid services, battery storage"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Battery className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                Energy Storage Integration
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Maximize the value of energy storage systems with intelligent EV charging integration. 
              Grid services, peak shaving, renewable integration, and multiple revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Schedule Storage Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Storage Integration Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced capabilities for energy storage systems and charging infrastructure integration
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

      {/* Storage Applications */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Storage Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive energy storage solutions for different scales and applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {storageApplications.map((app, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {app.features.map((feature, idx) => (
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

      {/* Grid Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Grid Services & Revenue Streams</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generate additional revenue while supporting grid stability and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {gridServices.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto gradient-electric p-3 rounded-xl text-white w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renewable Integration */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Renewable Energy Integration</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Optimize renewable energy utilization with intelligent storage and charging coordination.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Sun className="w-5 h-5 text-primary" />
                  <span>Solar and wind energy optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Battery className="w-5 h-5 text-primary" />
                  <span>Energy storage arbitrage and time-shifting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Smart charging based on renewable availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Grid className="w-5 h-5 text-primary" />
                  <span>Grid-interactive renewable systems</span>
                </div>
              </div>
              <Button variant="electric" size="lg">
                Explore Renewable Solutions
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Energy Flow Management</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Solar Generation</span>
                    <span className="font-bold text-green-600">↗ 150 kW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Storage Charging</span>
                    <span className="font-bold text-blue-600">↓ 85 kW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">EV Charging</span>
                    <span className="font-bold text-primary">⚡ 45 kW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Grid Export</span>
                    <span className="font-bold text-green-600">↗ 20 kW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Efficiency</span>
                    <span className="font-bold text-green-600">96.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Energy Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Smart Energy Management Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered platform for optimal energy storage and charging coordination
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Demand Forecasting", description: "AI-powered prediction of energy demand and charging patterns", icon: <BarChart3 className="w-6 h-6" /> },
              { title: "Price Optimization", description: "Real-time energy market pricing and arbitrage opportunities", icon: <DollarSign className="w-6 h-6" /> },
              { title: "Load Balancing", description: "Intelligent load distribution across storage and charging systems", icon: <Activity className="w-6 h-6" /> },
              { title: "Grid Integration", description: "Seamless grid services and ancillary market participation", icon: <Grid className="w-6 h-6" /> }
            ].map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto gradient-electric p-3 rounded-xl text-white w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Storage Integration Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable benefits that energy storage providers achieve through our integration solutions
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
          <h2 className="text-4xl font-bold mb-6">Maximize Your Storage Value</h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with us to unlock the full potential of your energy storage investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Schedule Storage Consultation
              <Battery className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact Storage Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnergyStorage;