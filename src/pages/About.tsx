import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "10+", icon: <Award className="w-6 h-6" /> },
    { label: "Charging Stations Deployed", value: "5000+", icon: <Target className="w-6 h-6" /> },
    { label: "Countries Served", value: "15+", icon: <Globe className="w-6 h-6" /> },
    { label: "Team Members", value: "200+", icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuously pushing the boundaries of EV charging technology with AI-powered solutions."
    },
    {
      title: "Sustainability", 
      description: "Committed to creating a cleaner, more sustainable future through electric mobility."
    },
    {
      title: "Excellence",
      description: "Delivering superior quality products and services that exceed customer expectations."
    },
    {
      title: "Collaboration",
      description: "Working together with partners to build a comprehensive charging ecosystem."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About SIRI Electromotive - Leading EV Charging Solutions Company"
        description="Learn about SIRI Electromotive, a pioneering company in AI-powered EV charging solutions with 10+ years of experience and 5000+ charging stations deployed globally."
        keywords="about SIRI Electromotive, EV charging company, electric vehicle solutions, charging infrastructure, company history"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
              About SIRI Electromotive
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of electric mobility with innovative AI-powered charging solutions that transform the way the world charges
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-muted-foreground text-lg">Building the future of electric mobility, one charging station at a time</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-background to-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="p-3 gradient-electric rounded-xl text-white w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-base sm:text-lg text-muted-foreground">
                <p>
                  Founded with a vision to revolutionize electric vehicle charging, SIRI Electromotive has been at the forefront of EV infrastructure development for over a decade. Our journey began with a simple belief: that advanced technology could make electric vehicle charging more accessible, efficient, and intelligent.
                </p>
                <p>
                  Today, we're proud to be a leading provider of AI-powered charging solutions, serving customers across 15+ countries with innovative products that set new standards in the industry. Our commitment to excellence and sustainability drives everything we do.
                </p>
                <p>
                  From our headquarters in India, we continue to expand our global presence, working with partners worldwide to build the charging infrastructure of tomorrow.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="gradient-electric rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-base sm:text-lg mb-6 leading-relaxed">
                    To accelerate the global transition to sustainable transportation by providing intelligent, reliable, and accessible EV charging solutions that empower everyone to participate in the electric revolution.
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    A world where electric vehicle charging is as convenient and ubiquitous as traditional fueling, enabling a cleaner, more sustainable future for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust SIRI Electromotive for their EV charging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-base sm:text-lg px-8 py-4">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="text-base sm:text-lg px-8 py-4">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;