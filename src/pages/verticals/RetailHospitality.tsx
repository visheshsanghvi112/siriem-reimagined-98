import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, Clock, Users, TrendingUp, Coffee, Hotel, Utensils, DollarSign } from "lucide-react";

const RetailHospitality = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Attraction",
      description: "Draw new customers and increase foot traffic with premium charging amenities"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dwell Time Increase",
      description: "Extend customer visit duration while their vehicle charges, boosting sales"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Brand Enhancement",
      description: "Position your brand as forward-thinking and environmentally conscious"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Revenue Generation",
      description: "Generate additional revenue streams through charging fees and services"
    }
  ];

  const businessTypes = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Retail Centers",
      description: "Shopping malls, retail parks, and commercial centers",
      benefits: ["Extended shopping time", "Customer loyalty", "Premium positioning", "Competitive advantage"]
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotels & Resorts",
      description: "Hospitality venues offering charging amenities to guests",
      benefits: ["Guest satisfaction", "Premium service", "Booking advantage", "Sustainability image"]
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Restaurants & Cafes",
      description: "Dining establishments with convenient charging facilities",
      benefits: ["Longer dining times", "Customer attraction", "Repeat visits", "Modern image"]
    }
  ];

  const customerJourney = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Arrive & Plug In",
      description: "Customers arrive, easily locate charging spots, and start charging"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Shop & Dine",
      description: "Extended dwell time allows for shopping, dining, and entertainment"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Experience",
      description: "Premium charging amenities enhance overall customer experience"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Return Visits",
      description: "Convenient charging creates customer loyalty and repeat business"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "25% More Customers",
      description: "Attract new customer segments and increase overall foot traffic"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "45min Longer Visits",
      description: "Customers stay longer while charging, increasing sales opportunities"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "15% Revenue Boost",
      description: "Combined effect of more customers and longer visits drives revenue growth"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Retail & Hospitality EV Charging Solutions | SIRI Electromotive"
        description="Customer-centric EV charging solutions for retail stores, hotels, restaurants, and entertainment venues. Increase dwell time, attract customers, and enhance brand image."
        keywords="retail EV charging, hotel charging, restaurant charging, customer attraction, hospitality charging, shopping center EV charging"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-gradient">
                Retail & Hospitality
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform customer experience and drive business growth with strategic EV charging 
              solutions designed for retail, hospitality, and entertainment venues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Schedule Business Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download ROI Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Business Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic advantages that directly impact your bottom line and customer satisfaction
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

      {/* Business Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customized charging solutions for different business types and customer needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto gradient-electric p-3 rounded-xl text-white w-fit mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 gradient-electric rounded-full"></div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Customer Journey Enhancement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How EV charging transforms the customer experience at your location
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {customerJourney.map((step, index) => (
              <div key={index} className="text-center">
                <div className="gradient-electric p-4 rounded-2xl text-white w-fit mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Success Story: Premium Mall</h2>
              <p className="text-xl text-muted-foreground mb-8">
                A leading shopping mall increased customer satisfaction and revenue through strategic EV charging deployment.
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-electric p-2 rounded-lg text-white">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">30% Increase in Footfall</h4>
                      <p className="text-sm text-muted-foreground">More customers visiting the mall</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-electric p-2 rounded-lg text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">50% Longer Visit Duration</h4>
                      <p className="text-sm text-muted-foreground">Customers staying longer while charging</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-electric p-2 rounded-lg text-white">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">20% Revenue Growth</h4>
                      <p className="text-sm text-muted-foreground">Combined impact on sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <h3 className="text-2xl font-bold mb-6">Implementation Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Customer Satisfaction</span>
                    <span className="font-bold text-green-600">+40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Brand Perception</span>
                    <span className="font-bold text-green-600">+35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Repeat Visitors</span>
                    <span className="font-bold text-green-600">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Revenue per Visit</span>
                    <span className="font-bold text-green-600">+18%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Measurable Business Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven results that retail and hospitality businesses achieve with our solutions
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
          <h2 className="text-4xl font-bold mb-6">Enhance Your Customer Experience</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading retail and hospitality brands already benefiting from EV charging amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Schedule Business Consultation
              <ShoppingBag className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact Business Specialists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailHospitality;