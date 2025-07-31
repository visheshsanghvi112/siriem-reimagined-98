import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Verticals from "@/components/Verticals";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Verticals />
      <Footer />
    </div>
  );
};

export default Index;
