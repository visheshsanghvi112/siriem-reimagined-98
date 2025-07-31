import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Truck, Building, Home, Zap, ShoppingBag, Car, Battery } from "lucide-react";

const VerticalsPage = () => {
  const verticals = [
    {
      title: "Fleets",
      description: "Comprehensive charging solutions for commercial fleet operators with route optimization.",
      icon: <Truck className="w-8 h-8" />,
      href: "/verticals/fleets",
      benefits: ["Fleet management integration", "Route optimization", "Cost analytics", "Depot charging"]
    },
    {
      title: "Workplace",
      description: "Employee-focused charging solutions for corporate campuses and office buildings.",
      icon: <Building className="w-8 h-8" />,
      href: "/verticals/workplace",
      benefits: ["Employee benefits", "Smart scheduling", "Access control", "Usage reporting"]
    },
    {
      title: "Residential",
      description: "Home charging solutions with smart features for residential communities.",
      icon: <Home className="w-8 h-8" />,
      href: "/verticals/residential",
      benefits: ["Home installation", "Smart charging", "Mobile app control", "Energy optimization"]
    },
    {
      title: "CPOs",
      description: "Advanced solutions for Charge Point Operators managing public charging networks.",
      icon: <Zap className="w-8 h-8" />,
      href: "/verticals/cpos",
      benefits: ["Network management", "Payment processing", "Remote monitoring", "Revenue optimization"]
    },
    {
      title: "Retail & Hospitality",
      description: "Customer-centric charging solutions for retail stores, hotels, and restaurants.",
      icon: <ShoppingBag className="w-8 h-8" />,
      href: "/verticals/retail-hospitality",
      benefits: ["Customer attraction", "Dwell time increase", "Brand enhancement", "Revenue generation"]
    },
    {
      title: "OEMs",
      description: "Integrated charging solutions for Original Equipment Manufacturers.",
      icon: <Car className="w-8 h-8" />,
      href: "/verticals/oems",
      benefits: ["Vehicle integration", "Custom solutions", "White-label options", "Technical support"]
    },
    {
      title: "Energy Storage",
      description: "Grid-scale energy storage solutions integrated with charging infrastructure.",
      icon: <Battery className="w-8 h-8" />,
      href: "/verticals/energy-storage",
      benefits: ["Grid stabilization", "Peak shaving", "Renewable integration", "Cost optimization"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="EV Charging Verticals - Fleets, Workplace, Residential | SIRI Electromotive"
        description="Specialized EV charging solutions for different market verticals including fleets, workplace, residential, CPOs, retail, OEMs, and energy storage."
        keywords="fleet charging, workplace charging, residential charging, CPO solutions, retail charging, OEM charging, energy storage"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Market Verticals
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored charging solutions for every market segment and use case
            </p>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
                <CardHeader>
                  <div className="p-3 gradient-electric rounded-xl text-white w-fit">
                    {vertical.icon}
                  </div>
                  <CardTitle className="text-xl">{vertical.title}</CardTitle>
                  <CardDescription>
                    {vertical.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {vertical.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={vertical.href}>
                    <Button variant="electric" className="w-full group">
                      Explore Solutions
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

export default VerticalsPage;