import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Zap, Gauge, Cpu, Shield, Wrench } from "lucide-react";

const OnboardChargers = () => {
  const features = [
    { icon: <Car className="w-5 h-5" />, title: "Compact Design", description: "Space-efficient integration" },
    { icon: <Zap className="w-5 h-5" />, title: "High Efficiency", description: ">95% power conversion" },
    { icon: <Gauge className="w-5 h-5" />, title: "Wide Voltage Range", description: "85-265V AC input" },
    { icon: <Cpu className="w-5 h-5" />, title: "Smart Control", description: "Advanced power management" },
    { icon: <Shield className="w-5 h-5" />, title: "Automotive Grade", description: "AEC-Q100 qualified" },
    { icon: <Wrench className="w-5 h-5" />, title: "Easy Integration", description: "Plug-and-play solution" }
  ];

  const specifications = [
    { label: "Power Range", value: "3.3kW - 22kW" },
    { label: "Efficiency", value: ">95%" },
    { label: "Input Voltage", value: "85-265V AC" },
    { label: "Output Voltage", value: "200-450V DC" },
    { label: "Operating Temp", value: "-40°C to +85°C" },
    { label: "Cooling", value: "Air/Liquid" },
    { label: "Communication", value: "CAN, LIN" },
    { label: "Protection", value: "IP67" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Onboard Chargers - Integrated EV Charging Solutions | SIRI Electromotive"
        description="High-efficiency onboard chargers for electric vehicles with compact design, wide voltage range, and automotive-grade reliability."
        keywords="onboard chargers, EV onboard charging, automotive chargers, integrated charging, OBC"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">ONBOARD CHARGING</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Onboard Chargers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrated charging solutions for electric vehicles with advanced power electronics and automotive-grade reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Advanced technology designed for automotive applications
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

      {/* Specifications */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Technical Specifications</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Engineered to meet the demanding requirements of automotive applications.
              </p>
              <div className="grid gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-border">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-primary font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Our Onboard Chargers?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 gradient-electric rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Proven Reliability</h4>
                      <p className="text-sm text-muted-foreground">Automotive-grade components tested to AEC-Q100 standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 gradient-electric rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Maximum Efficiency</h4>
                      <p className="text-sm text-muted-foreground">Industry-leading &gt;95% efficiency reduces energy loss</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 gradient-electric rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Flexible Integration</h4>
                      <p className="text-sm text-muted-foreground">Modular design adapts to various vehicle architectures</p>
                    </div>
                  </div>
                </div>
                <Button variant="electric" className="w-full mt-6">
                  Request Technical Documentation
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

export default OnboardChargers;