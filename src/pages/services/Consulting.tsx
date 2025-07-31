import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, MapPin, FileText, TrendingUp, Users, Lightbulb } from "lucide-react";

const Consulting = () => {
  const services = [
    { icon: <MapPin className="w-5 h-5" />, title: "Site Assessment", description: "Comprehensive site evaluation and planning" },
    { icon: <Brain className="w-5 h-5" />, title: "Infrastructure Planning", description: "Strategic charging infrastructure design" },
    { icon: <FileText className="w-5 h-5" />, title: "Regulatory Compliance", description: "Navigation of local regulations and standards" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Business Model Development", description: "Revenue optimization strategies" },
    { icon: <Users className="w-5 h-5" />, title: "Stakeholder Management", description: "Coordination with utilities and authorities" },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Technology Selection", description: "Optimal equipment and platform choices" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your requirements, site conditions, and business objectives to develop a comprehensive understanding of your project."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Our experts create a tailored strategy that aligns with your goals, budget, and timeline while ensuring regulatory compliance."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "We develop detailed implementation plans including technology selection, installation timelines, and resource allocation."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Our relationship continues with ongoing optimization, performance monitoring, and strategic guidance as your network grows."
    }
  ];

  const expertise = [
    "EV Market Analysis & Forecasting",
    "Grid Integration & Load Management",
    "Renewable Energy Integration",
    "Fleet Electrification Planning",
    "Public-Private Partnership Development",
    "Financial Modeling & ROI Analysis",
    "Regulatory Compliance & Permitting",
    "Technology Roadmap Planning"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="EV Charging Consulting Services - Expert Guidance | SIRI Electromotive"
        description="Professional consulting services for EV charging projects including site assessment, infrastructure planning, regulatory compliance, and business model development."
        keywords="EV charging consulting, infrastructure planning, site assessment, regulatory compliance, charging strategy"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">EXPERT CONSULTING</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Consulting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance for planning, designing, and implementing successful EV charging solutions with strategic insights and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Consulting Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive expertise to ensure your charging project's success
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

      {/* Process */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for successful project delivery
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-electric rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Leverage our deep industry knowledge and proven track record to accelerate your EV charging initiatives.
              </p>
              <div className="grid gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 gradient-electric rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Our Consulting?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground">Successfully delivered 500+ charging projects across multiple markets and applications.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Industry Leadership</h4>
                  <p className="text-sm text-muted-foreground">Our team includes recognized experts who shape industry standards and best practices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Technology Agnostic</h4>
                  <p className="text-sm text-muted-foreground">Unbiased recommendations based on your specific needs, not vendor relationships.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">End-to-End Support</h4>
                  <p className="text-sm text-muted-foreground">From initial concept through ongoing operations, we support every phase of your project.</p>
                </div>
                <Button variant="electric" className="w-full">
                  Schedule Consultation
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

export default Consulting;