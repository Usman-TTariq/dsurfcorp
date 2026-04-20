import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                    <p className="text-white/90">
                      734 S Charlotte St<br />
                      Lombard, IL 60148
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:info@earnytics.com" className="text-white/90 hover:text-white transition">
                      info@earnytics.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+18472087685" className="text-white/90 hover:text-white transition">
                      +1 (847) 208-7685
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-white/90">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-6">Stay connected on social media</p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  🐦
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  in
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Quick Response Guarantee</h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond within 24 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - 734 S Charlotte St, Lombard, IL 60148 */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                title="Earnytics LLC - 734 S Charlotte St, Lombard, IL 60148"
                src="https://maps.google.com/maps?q=734+S+Charlotte+St,+Lombard,+IL+60148&z=15&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 text-center border-t border-gray-100">
              <p className="text-gray-600 font-medium">734 S Charlotte St, Lombard, IL 60148</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
