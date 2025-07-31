import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building, Users, Clock, BarChart3, Shield, Zap, Calendar, CreditCard, DollarSign } from "lucide-react";

const Workplace = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Benefits",
      description: "Provide valuable charging amenities that attract and retain top talent"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Automated scheduling system to optimize charging availability and usage"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Access Control",
      description: "Secure access management with employee ID integration and usage tracking"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Usage Reporting",
      description: "Comprehensive analytics and reporting for facility management"
    }
  ];

  const workplaceTypes = [
    {
      title: "Corporate Campuses",
      description: "Large-scale charging infrastructure for multi-building corporate environments",
      features: ["Scalable infrastructure", "Central management", "Employee apps", "Cost allocation"]
    },
    {
      title: "Office Buildings",
      description: "Efficient charging solutions for mid-size office complexes and business parks",
      features: ["Space optimization", "Tenant billing", "Visitor access", "Integration ready"]
    },
    {
      title: "Business Parks",
      description: "Shared charging facilities for multiple businesses and tenants",
      features: ["Shared infrastructure", "Multi-tenant billing", "Load balancing", "Future expansion"]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employee Attraction",
      description: "92% of employees consider workplace charging when choosing employers"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Efficiency",
      description: "Reduce facility energy costs through smart load management and peak shaving"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Property Value",
      description: "Increase property value and attract quality tenants with modern amenities"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Workplace EV Charging Solutions - Corporate & Office Buildings | SIRI Electromotive"
        description="Employee-focused EV charging solutions for workplace environments. Smart scheduling, access control, usage analytics for corporate campuses, office buildings, and business parks."
        keywords="workplace charging, office EV charging, corporate charging, employee charging benefits, business park charging, workplace EV infrastructure"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Building className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                Workplace Charging
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Attract and retain top talent with premium workplace EV charging solutions. 
              Smart, secure, and scalable charging infrastructure for modern workplaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Get Workplace Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Workplace-Specific Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed specifically for employee satisfaction and facility management efficiency
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto gradient-electric p-3 rounded-xl text-white w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workplace Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Workplace Environments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for different types of workplace settings and requirements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workplaceTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee App Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Employee Mobile App</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your employees with a dedicated mobile app for seamless charging management.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Reserve charging spots in advance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Real-time availability and status updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span>Integrated payment and expense tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Usage analytics and carbon footprint tracking</span>
                </div>
              </div>
              <Button variant="electric" size="lg">
                Preview Employee App
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">App Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Spot Reservation</span>
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Real-time Status</span>
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Payment Integration</span>
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Business Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Workplace charging delivers measurable benefits for both employees and employers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="gradient-electric p-4 rounded-2xl text-white w-fit mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Transform Your Workplace</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking companies providing premium workplace charging amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Schedule Site Assessment
              <Building className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact Workplace Specialists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workplace;