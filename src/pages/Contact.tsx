import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+91 9326788704",
      description: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "reachus@siriem.com",
      description: "24/7 support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      info: "Mumbai, Maharashtra, India",
      description: "Visit our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon-Fri: 9AM-6PM",
      description: "Saturday: 9AM-2PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact SIRI Electromotive - Get in Touch for EV Charging Solutions"
        description="Contact SIRI Electromotive for expert consultation on EV charging solutions. Call +91 9326788704 or email reachus@siriem.com for personalized support."
        keywords="contact SIRI Electromotive, EV charging consultation, charging solutions support, get in touch"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your EV charging infrastructure? Get in touch with our experts today and discover how we can accelerate your journey to sustainable transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Multiple ways to reach our expert team</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-background to-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="p-3 gradient-electric rounded-xl text-white w-fit mx-auto group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-semibold text-base sm:text-lg mb-1 break-all">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <Card className="border-0 bg-gradient-to-br from-background to-secondary/10 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" className="mt-2" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-2" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                      <Input id="company" placeholder="Enter your company name" className="mt-2" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
                      <Input id="subject" placeholder="What can we help you with?" className="mt-2" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your project requirements..." 
                        className="mt-2 min-h-32 resize-none" 
                        required
                      />
                    </div>
                    
                    <Button variant="electric" size="lg" className="w-full text-base font-semibold py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose SIRI Electromotive?</h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  We're committed to providing world-class EV charging solutions that drive the future of sustainable transportation.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-background to-secondary/10 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">Expert Consultation</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Our team of experts provides personalized consultation to design the perfect charging solution for your specific needs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-background to-secondary/10 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">Proven Track Record</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      With 5000+ successful installations across 15+ countries, we have the experience to deliver exceptional results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-background to-secondary/10 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">24/7 Support</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Our dedicated support team is available around the clock to ensure your charging infrastructure operates flawlessly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-background to-secondary/10 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">Future-Ready Technology</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Our AI-powered solutions are designed to evolve with changing technology and growing demand.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;