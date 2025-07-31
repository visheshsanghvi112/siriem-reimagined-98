import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Monitor, BarChart, Settings, Shield, Users } from "lucide-react";

const ChargingManagementServices = () => {
  const services = [
    { icon: <Cloud className="w-5 h-5" />, title: "Cloud Hosting", description: "Secure cloud infrastructure management" },
    { icon: <Monitor className="w-5 h-5" />, title: "Real-time Monitoring", description: "24/7 system monitoring and alerts" },
    { icon: <BarChart className="w-5 h-5" />, title: "Analytics & Reporting", description: "Detailed usage and performance reports" },
    { icon: <Settings className="w-5 h-5" />, title: "System Configuration", description: "Expert setup and optimization" },
    { icon: <Shield className="w-5 h-5" />, title: "Security Management", description: "Cybersecurity and data protection" },
    { icon: <Users className="w-5 h-5" />, title: "User Support", description: "End-user training and support" }
  ];

  const features = [
    {
      category: "Platform Management",
      items: ["System hosting & maintenance", "Software updates", "Database management", "Backup & recovery"]
    },
    {
      category: "Network Operations",
      items: ["24/7 monitoring", "Performance optimization", "Issue resolution", "Capacity planning"]
    },
    {
      category: "User Experience",
      items: ["Mobile app support", "Help desk services", "Training programs", "Documentation"]
    },
    {
      category: "Business Intelligence",
      items: ["Custom dashboards", "Usage analytics", "Revenue reports", "Predictive insights"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Charging Management Services - Cloud Platform Support | SIRI Electromotive"
        description="Professional charging management services including cloud hosting, monitoring, analytics, and user support for EV charging networks."
        keywords="charging management services, cloud hosting, charging network monitoring, EV charging analytics, platform support"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">MANAGEMENT SERVICES</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Charging Management Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cloud-based management platform with monitoring and controlling charging infrastructure, backed by professional support services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Offerings</h2>
            <p className="text-xl text-muted-foreground">
              Complete managed services for your charging management platform
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

      {/* Service Categories */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Categories</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support across all aspects of your charging network
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm">{item}</span>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Managed Services?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Focus on your core business while we handle the technical complexities of charging management.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Reduced Operational Costs</h3>
                  <p className="text-muted-foreground">Eliminate the need for in-house technical expertise and infrastructure.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">99.9% Uptime Guarantee</h3>
                  <p className="text-muted-foreground">Industry-leading reliability with redundant systems and monitoring.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Scalable Solutions</h3>
                  <p className="text-muted-foreground">Easily scale your charging network without infrastructure concerns.</p>
                </div>
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Service Level Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                  <span className="font-medium">System Uptime</span>
                  <span className="text-primary font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                  <span className="font-medium">Response Time</span>
                  <span className="text-primary font-bold">&lt; 15 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                  <span className="font-medium">Resolution Time</span>
                  <span className="text-primary font-bold">&lt; 4 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                  <span className="font-medium">Support Availability</span>
                  <span className="text-primary font-bold">24/7/365</span>
                </div>
                <Button variant="electric" className="w-full mt-6">
                  Get Service Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargingManagementServices;