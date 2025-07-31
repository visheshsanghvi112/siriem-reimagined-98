import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
const siriLogo = "/lovable-uploads/896c8ca9-b616-4f88-93bd-5680bfd79afb.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Our Approach", href: "/approach" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  const productsDropdown = [
    { name: "AC Chargers", href: "/products/ac-chargers" },
    { name: "DC Chargers", href: "/products/dc-chargers" },
    { name: "Onboard Chargers", href: "/products/onboard-chargers" },
    { name: "Charging Management System", href: "/products/charging-management-system" },
  ];

  const servicesDropdown = [
    { name: "Charger Services", href: "/services/charger-services" },
    { name: "Charging Management Services", href: "/services/charging-management-services" },
    { name: "Consulting", href: "/services/consulting" },
  ];

  const verticalsDropdown = [
    { name: "Fleets", href: "/verticals/fleets" },
    { name: "Workplace", href: "/verticals/workplace" },
    { name: "Residential", href: "/verticals/residential" },
    { name: "CPOs", href: "/verticals/cpos" },
    { name: "Retail & Hospitality", href: "/verticals/retail-hospitality" },
    { name: "OEMs", href: "/verticals/oems" },
    { name: "Energy Storage", href: "/verticals/energy-storage" },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2 flex-shrink-0" onClick={closeAllDropdowns}>
            <img 
              src={siriLogo} 
              alt="SIRI Electromotive" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-green-600 font-semibold text-sm xl:text-base tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                onClick={closeAllDropdowns}
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-semibold text-sm xl:text-base tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                onClick={() => handleDropdownToggle('products')}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-gray-100 rounded-xl shadow-xl z-[60] py-3">
                  <Link 
                    to="/products" 
                    className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 border-b border-gray-100" 
                    onClick={closeAllDropdowns}
                  >
                    All Products
                  </Link>
                  {productsDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-semibold text-sm xl:text-base tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                onClick={() => handleDropdownToggle('services')}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-gray-100 rounded-xl shadow-xl z-[60] py-3">
                  <Link 
                    to="/services" 
                    className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 border-b border-gray-100" 
                    onClick={closeAllDropdowns}
                  >
                    All Services
                  </Link>
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Verticals Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-semibold text-sm xl:text-base tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap"
                onClick={() => handleDropdownToggle('verticals')}
              >
                <span>Verticals</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'verticals' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'verticals' && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-gray-100 rounded-xl shadow-xl z-[60] py-3">
                  <Link 
                    to="/verticals" 
                    className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 border-b border-gray-100" 
                    onClick={closeAllDropdowns}
                  >
                    All Verticals
                  </Link>
                  {verticalsDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-full font-semibold text-xs lg:text-sm xl:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
                onClick={closeAllDropdowns}
              >
                Talk to our expert
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 h-10 w-10 sm:h-12 sm:w-12"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-[60] max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-3 sm:px-4 pt-4 pb-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-3 text-gray-700 hover:text-green-600 font-semibold text-base rounded-lg hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Products Section */}
              <div className="py-2">
                <div className="px-3 py-3 font-bold text-gray-900 border-b border-gray-100 text-base">Products</div>
                <Link 
                  to="/products" 
                  className="block px-6 py-3 text-sm font-semibold text-green-600 hover:bg-gray-50 rounded-lg mx-3 mt-2" 
                  onClick={() => setIsOpen(false)}
                >
                  All Products
                </Link>
                {productsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-lg mx-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Services Section */}
              <div className="py-2">
                <div className="px-3 py-3 font-bold text-gray-900 border-b border-gray-100 text-base">Services</div>
                <Link 
                  to="/services" 
                  className="block px-6 py-3 text-sm font-semibold text-green-600 hover:bg-gray-50 rounded-lg mx-3 mt-2" 
                  onClick={() => setIsOpen(false)}
                >
                  All Services
                </Link>
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-lg mx-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Verticals Section */}
              <div className="py-2">
                <div className="px-3 py-3 font-bold text-gray-900 border-b border-gray-100 text-base">Verticals</div>
                <Link 
                  to="/verticals" 
                  className="block px-6 py-3 text-sm font-semibold text-green-600 hover:bg-gray-50 rounded-lg mx-3 mt-2" 
                  onClick={() => setIsOpen(false)}
                >
                  All Verticals
                </Link>
                {verticalsDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-lg mx-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="px-3 pt-6 pb-2">
                <Link to="/contact">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Talk to our expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop to close dropdowns when clicking outside */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeAllDropdowns}
        />
      )}
    </nav>
  );
};

export default Navbar;