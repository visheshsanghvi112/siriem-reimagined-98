import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, BarChart, CreditCard, Users, Settings, Shield } from "lucide-react";

const ChargingManagementSystem = () => {
  const features = [
    { icon: <Cloud className="w-5 h-5" />, title: "Cloud Platform", description: "Scalable cloud infrastructure" },
    { icon: <BarChart className="w-5 h-5" />, title: "Analytics Dashboard", description: "Real-time insights & reporting" },
    { icon: <CreditCard className="w-5 h-5" />, title: "Payment Integration", description: "Multiple payment methods" },
    { icon: <Users className="w-5 h-5" />, title: "User Management", description: "Role-based access control" },
    { icon: <Settings className="w-5 h-5" />, title: "Load Optimization", description: "Intelligent power distribution" },
    { icon: <Shield className="w-5 h-5" />, title: "Security", description: "Enterprise-grade protection" }
  ];

  const modules = [
    {
      title: "Station Management",
      description: "Monitor and control all charging stations from a single dashboard",
      features: ["Real-time status", "Remote diagnostics", "Firmware updates", "Configuration management"]
    },
    {
      title: "Energy Management",
      description: "Optimize energy consumption and reduce operational costs",
      features: ["Load balancing", "Peak shaving", "Solar integration", "Grid optimization"]
    },
    {
      title: "User Experience",
      description: "Seamless charging experience for your customers",
      features: ["Mobile app", "RFID access", "Reservation system", "Notification alerts"]
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights to grow your charging business",
      features: ["Usage analytics", "Revenue tracking", "Predictive maintenance", "Performance KPIs"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Charging Management System - Smart EV Infrastructure | SIRI Electromotive"
        description="Comprehensive charging management platform with real-time monitoring, load optimization, payment integration, and advanced analytics for EV charging networks."
        keywords="charging management system, EV charging software, charging network management, OCPP platform, charging analytics"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">SMART MANAGEMENT</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Charging Management System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software platform for managing and optimizing EV charging operations with advanced analytics and intelligent control.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground">
              Complete solution for charging network management
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

      {/* Modules */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">System Modules</h2>
            <p className="text-xl text-muted-foreground">
              Modular architecture for maximum flexibility
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
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

      {/* Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Seamless Integration</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our platform integrates with existing systems and supports industry standards for maximum compatibility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-electric rounded-full"></div>
                  <span><strong>OCPP 1.6J & 2.0.1</strong> - Industry standard protocol support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-electric rounded-full"></div>
                  <span><strong>REST API</strong> - Easy integration with third-party systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-electric rounded-full"></div>
                  <span><strong>Webhooks</strong> - Real-time event notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-electric rounded-full"></div>
                  <span><strong>White Label</strong> - Fully customizable branding</span>
                </div>
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Deploy our charging management system and start optimizing your charging network immediately.
                </p>
                <div className="space-y-4">
                  <Button variant="electric" className="w-full">
                    Request Demo
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargingManagementSystem;