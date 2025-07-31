import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Truck, 
  Building, 
  Battery,
  ArrowRight,
  Zap
} from "lucide-react";

const Verticals = () => {
  const verticals = [
    {
      icon: Car,
      title: "EV Manufacturers",
      description: "Pushing the boundaries of performance with cutting-edge charging solutions",
      features: ["Onboard charger consulting", "Battery system optimization", "Performance testing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Fleet Operators",
      description: "Seeking operational excellence through intelligent charging infrastructure",
      features: ["Fleet management systems", "Route optimization", "Predictive maintenance"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Building,
      title: "Property Owners",
      description: "Sustainability-focused properties aiming for energy independence",
      features: ["Building integration", "Energy management", "Tenant solutions"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Battery,
      title: "Energy Storage Providers",
      description: "Maximizing the value of batteries with advanced charging technologies",
      features: ["Grid integration", "Energy arbitrage", "Peak shaving solutions"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Industry <span className="text-gradient">Verticals</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Whether you are an EV manufacturer pushing the boundaries of performance, a forward-thinking 
            fleet operator seeking operational excellence, a sustainability-focused property aiming for 
            energy independence, or an energy storage provider maximizing the value of your batteries, 
            we have the expertise and technology to help you achieve your goals.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {verticals.map((vertical, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${vertical.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <vertical.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {vertical.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {vertical.description}
                </p>
                <div className="space-y-2 mb-6">
                  {vertical.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Zap className="w-3 h-3 text-primary" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="glass" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  size="sm"
                >
                  Explore Solutions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join us on the journey towards a sustainable electric future. 
              Let's turbo-charge your business together.
            </p>
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;