import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Clock, Shield, Phone, Hammer, CheckCircle } from "lucide-react";

const ChargerServices = () => {
  const services = [
    { icon: <Wrench className="w-5 h-5" />, title: "Installation", description: "Professional setup and commissioning" },
    { icon: <Clock className="w-5 h-5" />, title: "24/7 Support", description: "Round-the-clock technical assistance" },
    { icon: <Shield className="w-5 h-5" />, title: "Preventive Maintenance", description: "Scheduled maintenance programs" },
    { icon: <Phone className="w-5 h-5" />, title: "Remote Diagnostics", description: "Proactive issue detection" },
    { icon: <Hammer className="w-5 h-5" />, title: "Emergency Repairs", description: "Rapid response for critical issues" },
    { icon: <CheckCircle className="w-5 h-5" />, title: "Performance Optimization", description: "Efficiency improvements" }
  ];

  const servicePackages = [
    {
      name: "Basic Care",
      price: "From $99/month",
      features: ["Monthly health checks", "Remote monitoring", "Basic support", "Firmware updates"],
      popular: false
    },
    {
      name: "Complete Care",
      price: "From $199/month", 
      features: ["Weekly health checks", "24/7 monitoring", "Priority support", "Emergency repairs", "Performance reports"],
      popular: true
    },
    {
      name: "Premium Care",
      price: "From $299/month",
      features: ["Daily health checks", "Real-time monitoring", "Dedicated support", "Instant repairs", "SLA guarantee", "Optimization service"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Charger Services - Maintenance & Support | SIRI Electromotive"
        description="Professional EV charger services including installation, 24/7 support, preventive maintenance, and emergency repairs to maximize uptime."
        keywords="charger services, EV charger maintenance, charging station support, charger installation, emergency repairs"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">CHARGER SERVICES</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Charger Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete maintenance and support services for all types of EV charging equipment to ensure maximum uptime and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support throughout your charger's lifecycle
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/10">
                <CardHeader>
                  <div className="p-3 gradient-electric rounded-xl text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose the right level of support for your charging infrastructure
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`border-0 bg-gradient-to-br from-background to-secondary/20 ${pkg.popular ? 'ring-2 ring-primary' : ''} relative`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-electric text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "electric" : "outline"} className="w-full">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Level Agreements</h2>
            <p className="text-xl text-muted-foreground">
              Guaranteed response times for your peace of mind
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">&lt; 1 hour</div>
                <CardTitle>Critical Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immediate response for safety-related problems or complete system failures.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">&lt; 4 hours</div>
                <CardTitle>High Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fast response for issues affecting charging availability or performance.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardHeader>
                <div className="text-3xl font-bold text-primary">&lt; 24 hours</div>
                <CardTitle>Standard Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular response for general maintenance and non-critical issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargerServices;