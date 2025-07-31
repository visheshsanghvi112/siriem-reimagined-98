import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Battery, Zap, Monitor, Thermometer, Shield, Clock } from "lucide-react";

const DCChargers = () => {
  const features = [
    { icon: <Battery className="w-5 h-5" />, title: "High Power", description: "50kW to 350kW capacity" },
    { icon: <Zap className="w-5 h-5" />, title: "Fast Charging", description: "Ultra-rapid charging speeds" },
    { icon: <Monitor className="w-5 h-5" />, title: "Remote Monitoring", description: "Real-time diagnostics" },
    { icon: <Thermometer className="w-5 h-5" />, title: "Liquid Cooling", description: "Advanced thermal management" },
    { icon: <Shield className="w-5 h-5" />, title: "Safety Systems", description: "Comprehensive protection" },
    { icon: <Clock className="w-5 h-5" />, title: "24/7 Operation", description: "Continuous availability" }
  ];

  const models = [
    {
      name: "SIRI DC-60",
      power: "60kW",
      type: "Commercial",
      features: ["CCS & CHAdeMO", "IP54 rating", "OCPP 1.6J"],
      price: "From $25,000"
    },
    {
      name: "SIRI DC-120",
      power: "120kW",
      type: "Highway",
      features: ["Dual charging", "Payment terminal", "Load balancing"],
      price: "From $45,000"
    },
    {
      name: "SIRI DC-350",
      power: "350kW",
      type: "Ultra-fast",
      features: ["Liquid cooling", "Power sharing", "Future-ready"],
      price: "From $85,000"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="DC Fast Chargers - Ultra-Rapid EV Charging | SIRI Electromotive"
        description="High-power DC fast chargers from 50kW to 350kW with liquid cooling, remote monitoring, and comprehensive safety systems for commercial use."
        keywords="DC fast chargers, 60kW charger, 120kW charger, 350kW charger, ultra-fast charging, CCS CHAdeMO"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">DC FAST CHARGING</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              DC Fast Chargers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ultra-rapid DC charging stations designed for commercial and public charging infrastructure with industry-leading performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art features for maximum performance and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/10">
                <CardHeader>
                  <div className="p-3 gradient-electric rounded-xl text-white w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Product Range</h2>
            <p className="text-xl text-muted-foreground">
              High-power DC charging solutions for every application
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{model.power}</div>
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <p className="text-muted-foreground">{model.type}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-primary mb-6">{model.price}</div>
                  <Button variant="electric" className="w-full">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DCChargers;