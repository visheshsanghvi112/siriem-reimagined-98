import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Privacy Policy - SIRI Electromotive"
        description="Learn about how SIRI Electromotive protects and handles your personal information and data privacy."
        url="https://siriem.com/privacy"
      />
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gradient mb-8">Privacy Policy</h1>
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="mb-4">
                  At SIRI Electromotive, we collect information that you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Contact us for support or inquiries</li>
                  <li>Request a consultation or demonstration</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Use our charging management systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide and improve our EV charging solutions</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you technical updates and product information</li>
                  <li>Analyze usage patterns to enhance our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;