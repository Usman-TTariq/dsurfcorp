"use client";

import { useState } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupModal({ isOpen, onClose }: PopupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          service: service || undefined,
          message,
          source: "popup",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 1500);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop - behind modal */}
      <div
        className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal - above backdrop; stopPropagation so clicks/focus stay inside modal */}
      <div
        className="relative z-50 bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors z-10 shadow-md"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Compact Header */}
        <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-1">Let&apos;s Get Started!</h2>
          <p className="text-white/90 text-sm">We&apos;ll respond within 24 hours</p>
        </div>

        {/* Compact Form */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm text-gray-900"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm text-gray-900"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm text-gray-900"
              />
            </div>

            {/* Service */}
            <div>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm text-gray-600"
              >
                <option value="">What service do you need?</option>
                <option value="Website Design">Website Design</option>
                <option value="Development">Development</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="SEO Services">SEO Services</option>
                <option value="Branding">Branding</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message - Compact */}
            <div>
              <textarea
                rows={3}
                placeholder="Brief message about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all resize-none text-sm text-gray-900"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                {errorMessage}
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                Message sent! We&apos;ll get back to you soon.
              </p>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-70 disabled:pointer-events-none"
            >
              {status === "sending" ? "Sending..." : "Send Message ✉️"}
            </button>

            {/* Quick Info */}
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2">
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </span>
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Quick Response
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
