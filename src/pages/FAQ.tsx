import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of EV chargers does SIRI Electromotive offer?",
      answer: "We offer a comprehensive range of charging solutions including AC chargers (3.3kW to 22kW), DC fast chargers (50kW to 350kW), onboard chargers for vehicles, and intelligent charging management systems."
    },
    {
      question: "How long does it take to install an EV charging station?",
      answer: "Installation time varies depending on the type of charger and site requirements. Typically, residential AC chargers can be installed in 2-4 hours, while commercial DC fast chargers may take 1-3 days including electrical work and commissioning."
    },
    {
      question: "Do you provide maintenance services for charging stations?",
      answer: "Yes, we offer comprehensive maintenance services including 24/7 technical support, preventive maintenance, emergency repairs, and performance optimization to ensure maximum uptime and efficiency."
    },
    {
      question: "What is the warranty period for your charging equipment?",
      answer: "Our charging equipment comes with industry-leading warranties. AC chargers have a 3-year warranty, DC chargers have a 2-year warranty, and we offer extended warranty options up to 5 years."
    },
    {
      question: "Can your charging stations integrate with existing energy management systems?",
      answer: "Absolutely. Our smart charging solutions are designed to integrate seamlessly with existing energy management systems, building automation systems, and renewable energy sources like solar panels."
    },
    {
      question: "What payment methods are supported by your charging stations?",
      answer: "Our charging stations support multiple payment methods including RFID cards, mobile apps, credit/debit cards, and digital wallets. We also provide white-label payment solutions for businesses."
    },
    {
      question: "Do you offer solutions for fleet charging?",
      answer: "Yes, we specialize in fleet charging solutions with features like depot charging optimization, route planning integration, load management, and comprehensive fleet analytics to maximize operational efficiency."
    },
    {
      question: "What charging standards do your stations support?",
      answer: "Our stations support all major charging standards including CCS (Combined Charging System), CHAdeMO, Type 2 AC, and GB/T for different vehicle types and regions."
    },
    {
      question: "How can I monitor and manage my charging stations remotely?",
      answer: "Our cloud-based management platform provides real-time monitoring, remote diagnostics, usage analytics, and control capabilities accessible through web portals and mobile applications."
    },
    {
      question: "Do you provide training for operating charging stations?",
      answer: "Yes, we provide comprehensive training programs for operators, maintenance staff, and end-users. This includes on-site training, online courses, and ongoing technical support."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="FAQ - Frequently Asked Questions | SIRI Electromotive"
        description="Find answers to common questions about SIRI Electromotive's EV charging solutions, installation, maintenance, and support services."
        keywords="EV charging FAQ, charging station questions, installation guide, maintenance support, charging standards"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our EV charging solutions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Our expert team is here to help you with any additional questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
              <CardHeader>
                <div className="p-3 gradient-electric rounded-xl text-white w-fit mx-auto">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our technical experts
                </p>
                <p className="font-semibold text-lg">+91 9326788704</p>
                <Button variant="outline" className="mt-4">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
              <CardHeader>
                <div className="p-3 gradient-electric rounded-xl text-white w-fit mx-auto">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get detailed answers via email
                </p>
                <p className="font-semibold text-lg">reachus@siriem.com</p>
                <Button variant="outline" className="mt-4">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
              <CardHeader>
                <div className="p-3 gradient-electric rounded-xl text-white w-fit mx-auto">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our support team
                </p>
                <p className="font-semibold text-lg">Available 24/7</p>
                <Button variant="electric" className="mt-4">
                  Start Chat
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

export default FAQ;