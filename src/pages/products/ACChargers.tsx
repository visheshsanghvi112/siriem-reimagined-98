import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Wifi, Smartphone, Shield, Gauge, Settings } from "lucide-react";

const ACChargers = () => {
  const features = [
    { icon: <Zap className="w-5 h-5" />, title: "Power Range", description: "3.3kW to 22kW output" },
    { icon: <Wifi className="w-5 h-5" />, title: "Smart Connectivity", description: "WiFi, Ethernet, 4G options" },
    { icon: <Smartphone className="w-5 h-5" />, title: "Mobile Control", description: "Full app integration" },
    { icon: <Shield className="w-5 h-5" />, title: "Safety Features", description: "RCD, RCBO protection" },
    { icon: <Gauge className="w-5 h-5" />, title: "Load Balancing", description: "Dynamic power management" },
    { icon: <Settings className="w-5 h-5" />, title: "Customizable", description: "Flexible configuration" }
  ];

  const models = [
    {
      name: "SIRI AC-7",
      power: "7kW",
      type: "Wall-mounted",
      features: ["RFID access", "LED indicators", "Compact design"],
      price: "From $899"
    },
    {
      name: "SIRI AC-11",
      power: "11kW",
      type: "Floor-standing",
      features: ["Dual connector", "Payment terminal", "Weatherproof"],
      price: "From $1,299"
    },
    {
      name: "SIRI AC-22",
      power: "22kW",
      type: "Commercial",
      features: ["Load balancing", "Remote monitoring", "Modular design"],
      price: "From $1,899"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AC Chargers - Smart EV Charging Solutions | SIRI Electromotive"
        description="High-quality AC chargers from 3.3kW to 22kW with smart connectivity, mobile control, and advanced safety features for residential and commercial use."
        keywords="AC chargers, EV AC charging, 7kW charger, 11kW charger, 22kW charger, smart charging"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">AC CHARGING SOLUTIONS</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              AC Chargers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart AC charging solutions designed for residential and commercial applications with advanced power management and connectivity features.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge technology for reliable and efficient charging
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
            <h2 className="text-4xl font-bold mb-4">Product Models</h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect AC charger for your needs
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

export default ACChargers;