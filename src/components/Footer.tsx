import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  ArrowRight
} from "lucide-react";
const siriLogo = "/lovable-uploads/896c8ca9-b616-4f88-93bd-5680bfd79afb.png";

const Footer = () => {
  const quickLinks = [
    { name: "Our Approach", href: "/approach" },
    { name: "Our Offerings", href: "/offerings" },
    { name: "Verticals", href: "/verticals" },
    { name: "Innovation", href: "/innovation" },
    { name: "Company", href: "/company" },
  ];

  const services = [
    "AC & DC Fast Chargers",
    "Charging Management System",
    "Turnkey Services",
    "Consulting Services",
  ];

  const verticals = [
    "EV Manufacturers",
    "Fleet Operators", 
    "Property Owners",
    "Energy Storage Providers",
  ];

  return (
    <footer className="gradient-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={siriLogo} 
                alt="SIRI Electromotive" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building a sustainable future through revolutionary AI-powered charging technology. 
              Empowering everyone to participate in the electric transition.
            </p>
            <div className="flex space-x-4">
              <Button variant="glass" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-gray-300">Email us</p>
                  <p className="text-white font-medium">reachus@siriem.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-gray-300">Call us</p>
                  <p className="text-white font-medium">+91 9326788704</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-gray-300">Visit us</p>
                  <p className="text-white font-medium">Innovation District, Electric City</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="electric" className="w-full">
                Talk to our expert
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SIRI Electromotive. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;