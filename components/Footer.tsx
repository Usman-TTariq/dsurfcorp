"use client";

import BrandWordmark from "./BrandWordmark";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <BrandWordmark className="text-2xl sm:text-3xl md:text-4xl" />
          </div>
          <p className="text-sm text-orange-500 uppercase tracking-wider">Digital Solutions</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">📍</span>
            <span>734 S Charlotte St, Lombard, IL 60148</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">📧</span>
            <span>info@dsurfcorp.net</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">📱</span>
            <span>+1 (847) 208-7685</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>Copyright © 2026 dsurfcorp. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-orange-500 hover:text-orange-400 transition">
                Privacy Policy
              </a>
              <a href="/terms" className="text-orange-500 hover:text-orange-400 transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
