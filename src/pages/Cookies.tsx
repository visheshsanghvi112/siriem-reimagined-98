import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cookie Policy - SIRI Electromotive"
        description="Learn about how SIRI Electromotive uses cookies to improve your experience with our EV charging solutions."
        url="https://siriem.com/cookies"
      />
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gradient mb-8">Cookie Policy</h1>
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
                <p className="mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                <p className="mb-4">SIRI Electromotive uses cookies for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="font-bold mb-2">Session Cookies</h3>
                    <p>Temporary cookies that are deleted when you close your browser.</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="font-bold mb-2">Persistent Cookies</h3>
                    <p>Remain on your device for a set period or until you delete them.</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="font-bold mb-2">Third-party Cookies</h3>
                    <p>Set by external services we use, such as analytics providers.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                <p className="mb-4">
                  You can control and manage cookies in your browser settings. Please note that disabling cookies may affect the functionality of our website and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have questions about our use of cookies, please contact:
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

export default Cookies;