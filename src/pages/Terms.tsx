import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Terms of Service - SIRI Electromotive"
        description="Read our terms of service for using SIRI Electromotive's EV charging solutions and services."
        url="https://siriem.com/terms"
      />
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gradient mb-8">Terms of Service</h1>
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using SIRI Electromotive's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily use SIRI Electromotive's services for personal, non-commercial transitory viewing only. This includes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Using our EV charging stations and equipment</li>
                  <li>Accessing our charging management systems</li>
                  <li>Utilizing our consulting and support services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <p className="mb-4">
                  SIRI Electromotive strives to ensure our charging infrastructure and services are available 24/7, but we cannot guarantee uninterrupted service due to maintenance, technical issues, or circumstances beyond our control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Liability Disclaimer</h2>
                <p className="mb-4">
                  SIRI Electromotive shall not be liable for any damages arising from the use or inability to use our services, including but not limited to charging interruptions, equipment malfunctions, or data loss.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-4">
                  For questions regarding these Terms of Service, please contact:
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <p><strong>Email:</strong> reachus@siriem.com</p>
                  <p><strong>Phone:</strong> +91 9326788704</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;