import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Cloud, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Charger Services",
      description: "Complete maintenance and support services for all types of EV charging equipment.",
      icon: <Wrench className="w-8 h-8" />,
      href: "/services/charger-services",
      features: ["24/7 technical support", "Preventive maintenance", "Emergency repairs", "Performance optimization"]
    },
    {
      title: "Charging Management Services",
      description: "Cloud-based management platform for monitoring and controlling charging infrastructure.",
      icon: <Cloud className="w-8 h-8" />,
      href: "/services/charging-management-services", 
      features: ["Real-time monitoring", "Remote diagnostics", "Energy optimization", "Payment processing"]
    },
    {
      title: "Consulting Services",
      description: "Expert guidance for planning, designing, and implementing EV charging solutions.",
      icon: <Brain className="w-8 h-8" />,
      href: "/services/consulting",
      features: ["Site assessment", "Infrastructure planning", "Regulatory compliance", "Business model development"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="EV Charging Services - Maintenance & Consulting | SIRI Electromotive"
        description="Professional EV charging services including charger maintenance, management systems, and expert consulting for charging infrastructure projects."
        keywords="EV charging services, charger maintenance, charging management, EV consulting, charging infrastructure services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              EV Charging Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive services to ensure optimal performance of your charging infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
                <CardHeader>
                  <div className="p-3 gradient-electric rounded-xl text-white w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.href}>
                    <Button variant="electric" className="w-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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

export default Services;