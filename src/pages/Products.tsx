import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Battery, Gauge, Settings } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "AC Chargers",
      description: "Smart AC charging solutions for residential and commercial applications with advanced power management.",
      icon: <Zap className="w-8 h-8" />,
      href: "/products/ac-chargers",
      features: ["3.3kW to 22kW power range", "Smart connectivity", "Dynamic load balancing", "Mobile app control"]
    },
    {
      title: "DC Chargers",
      description: "High-power DC fast charging stations designed for commercial and public charging infrastructure.",
      icon: <Battery className="w-8 h-8" />,
      href: "/products/dc-chargers",
      features: ["50kW to 350kW capacity", "CCS & CHAdeMO support", "Liquid cooling system", "Remote monitoring"]
    },
    {
      title: "Onboard Chargers",
      description: "Integrated charging solutions for electric vehicles with advanced power electronics.",
      icon: <Gauge className="w-8 h-8" />,
      href: "/products/onboard-chargers",
      features: ["Compact design", "High efficiency", "Wide voltage range", "Automotive grade"]
    },
    {
      title: "Charging Management System",
      description: "Comprehensive software platform for managing and optimizing EV charging operations.",
      icon: <Settings className="w-8 h-8" />,
      href: "/products/charging-management-system",
      features: ["Real-time monitoring", "Load optimization", "Payment integration", "Analytics dashboard"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="EV Charging Products - AC & DC Chargers | SIRI Electromotive"
        description="Explore our comprehensive range of EV charging products including AC chargers, DC fast chargers, onboard chargers, and charging management systems."
        keywords="AC chargers, DC chargers, onboard chargers, charging management system, EV charging products, electric vehicle chargers"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              EV Charging Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge charging solutions designed to power the future of electric mobility
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-secondary/10">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 gradient-electric rounded-xl text-white">
                      {product.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{product.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {product.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={product.href}>
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

export default Products;