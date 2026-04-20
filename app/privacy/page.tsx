import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Last Updated: February 17, 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Earnytics LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing address</li>
              <li><strong>Business Information:</strong> Company name, website URL, business details</li>
              <li><strong>Project Details:</strong> Project requirements, preferences, feedback</li>
              <li><strong>Payment Information:</strong> Credit card details, billing information (securely processed)</li>
              <li><strong>Communications:</strong> Messages, emails, and other correspondence</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We also automatically collect certain information when you visit our website, including IP address, 
              browser type, device information, and usage data through cookies and similar technologies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send transaction notifications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices, updates, and marketing communications</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., payment processing, hosting)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers with firewall protection</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Secure payment processing through trusted providers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Personalize content and advertisements</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings, but disabling cookies may limit certain features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              policy, unless a longer retention period is required by law. When we no longer need your information, 
              we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
              the new policy on our website with an updated &quot;Last Updated&quot; date. Your continued use of our services 
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> info@earnytics.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (347) 588-7791</p>
              <p className="text-gray-700"><strong>Address:</strong> 3415 MCLAUGHLIN #107, LOS ANGELES, CA 90066</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
