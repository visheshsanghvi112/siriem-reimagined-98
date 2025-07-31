import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Settings, 
  Wrench, 
  MessageSquare,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import chargingInfra from "@/assets/charging-infrastructure.jpg";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "AC & DC Fast Chargers",
      description: "We provide a range of chargers both AC and DC Fast Chargers suitable for all kinds of electric vehicles.",
      features: ["Universal compatibility", "Smart charging algorithms", "Energy optimization"],
      badge: "Hardware"
    },
    {
      icon: Settings,
      title: "Charging Management System (CMS)",
      description: "Our Charging Management System provides seamless integration with ours as well as chargers from other manufacturers.",
      features: ["Multi-brand integration", "Real-time monitoring", "Remote diagnostics"],
      badge: "Software"
    },
    {
      icon: Wrench,
      title: "Turnkey Services",
      description: "We provide turnkey services to examine feasibility, install, commission and maintain the charging solutions that we create for you.",
      features: ["Feasibility analysis", "Professional installation", "Ongoing maintenance"],
      badge: "Services"
    },
    {
      icon: MessageSquare,
      title: "Consulting Services",
      description: "Our consulting services encompass OEM consulting on Onboard Chargers, Battery System design, and Strategic Charging Advisory.",
      features: ["OEM consulting", "Battery system design", "Strategic advisory"],
      badge: "Consulting"
    }
  ];

  return (
    <section className="py-20 gradient-energy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your transition to electric mobility
          </p>
        </div>

        {/* Approach Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={chargingInfra} 
                alt="Charging infrastructure approach"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold text-primary">Our Approach</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Tailor-Made Charging Solutions
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We craft tailor-made charging solutions for all sizes and complexities of EV charging 
                and battery storage systems. We become your trusted partner, providing ongoing 
                maintenance and support to ensure your charging infrastructure thrives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Custom solution design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Scalable infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Ongoing partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 gradient-electric rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;