import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Wrench, TrendingUp, DollarSign } from "lucide-react";
import chargingNight from "@/assets/charging-night.jpg";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description: "We are at the forefront of smart charging technology, constantly pushing the boundaries with proprietary AI algorithms and industry-leading advancements. We are not keeping up; we are leading the way."
    },
    {
      icon: Wrench,
      title: "Simplifying the Transition",
      description: "We understand that entering the business of charging can be daunting. That is why we offer expert guidance and implement custom built solutions, making the journey towards electrification smooth and efficient."
    },
    {
      icon: TrendingUp,
      title: "Intelligent Deployment and Scaling",
      description: "We not only install chargers; we design and implement the entire strategic charging infrastructure that can adapt and grow as your needs evolve. We help you deploy rapidly and scale intelligently."
    },
    {
      icon: DollarSign,
      title: "Maximizing Value",
      description: "We are partners in maximizing the value of your energy assets. Our solutions extend the life of your batteries, optimize energy usage, and minimize downtime, ensuring you get the most out of every watt."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building a <span className="text-gradient">Sustainable Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At SIRI Electromotive, we believe the future is electric. We actively participate in 
            unlocking the full potential of clean energy, thereby building a sustainable future, 
            and empowering everyone to participate in the transition.
          </p>
        </div>

        {/* Hero Statement */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Revolutionary AI-Powered Charging Technology
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With our revolutionary AI-powered charging technology, we build chargers, and craft 
                smart solutions that seamlessly work with any battery, no matter its complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our hardware, firmware, and AI-powered software work together in perfect harmony, 
                delivering unmatched performance, optimized efficiency, and unparalleled reliability.
              </p>
            </div>
            <div className="relative">
              <img 
                src={chargingNight} 
                alt="AI-powered charging technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-electric rounded-xl animate-pulse-electric" />
            </div>
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">
            Tailored Solutions for Every Industry
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand that every company's journey towards electrification is unique. 
            Therefore, we tailor our solutions to meet the specific needs of each industry vertical. 
            And here is how we make the difference:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-electric rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;