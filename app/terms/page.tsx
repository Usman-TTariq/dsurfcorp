import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Last Updated: February 17, 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Earnytics LLC&apos;s services, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you must not use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Earnytics LLC provides comprehensive business solutions including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Website Design and Development</li>
              <li>E-Commerce Solutions</li>
              <li>SEO and Digital Marketing</li>
              <li>Brand Identity and Logo Design</li>
              <li>Social Media Management</li>
              <li>Content Creation and Copywriting</li>
              <li>Website Hosting and Maintenance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment for services is required as per the agreed pricing plan. We accept various payment methods including credit cards, 
              PayPal, and bank transfers.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All prices are in USD unless otherwise specified</li>
              <li>Monthly subscriptions are billed on a recurring basis</li>
              <li>Annual subscriptions receive a 20% discount</li>
              <li>Refunds are available within 14 days of initial purchase</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, designs, code, and materials created by Earnytics LLC remain our intellectual property until 
              full payment is received. Upon full payment:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You receive full ownership of custom designs and code</li>
              <li>You may modify and distribute the work as needed</li>
              <li>We retain the right to showcase the work in our portfolio</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Providing accurate and complete information</li>
              <li>Supplying necessary content and materials in a timely manner</li>
              <li>Providing feedback within agreed timeframes</li>
              <li>Ensuring all provided content is legally owned or licensed</li>
              <li>Maintaining backup copies of their data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Project Timeline</h2>
            <p className="text-gray-700 leading-relaxed">
              Project timelines are estimates and may vary based on project complexity, client feedback response time, 
              and scope changes. We strive to meet all deadlines but cannot be held liable for delays caused by 
              circumstances beyond our control.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Earnytics LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services. Our total liability shall not exceed the amount paid for the 
              specific service in question.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate services with written notice. Upon termination, all outstanding payments 
              become due immediately. Clients will receive all completed work up to the termination date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
              posting to our website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms & Conditions, please contact us:
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
