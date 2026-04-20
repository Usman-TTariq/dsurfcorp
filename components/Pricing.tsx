"use client";

import { useState } from "react";
import PopupModal from "./PopupModal";
import Image from "next/image";

const BASE_FEATURES = [
  "FREE Round of revision",
  "Lowest Price in the Industry",
  "FREE consultation",
  "100% Money Back Guarantee"
];

function getFeatures(deliveryDays: number) {
  return [
    BASE_FEATURES[0],
    `Delivery within ${deliveryDays} business days`,
    ...BASE_FEATURES.slice(1)
  ];
}

export default function Pricing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const plans = [
    {
      name: "Basic",
      oneTimePrice: 299,
      description: "2 Logo Concept by 1 Logo Designer",
      icon: "/images/Earnytics LLc Icon/Brown.png",
      gradient: "from-blue-500 to-cyan-500",
      deliveryDays: 2,
      highlighted: false,
      popular: false
    },
    {
      name: "Start Up",
      oneTimePrice: 299,
      description: "4 Logo Concept by 2 Logo Designer",
      icon: "/images/Earnytics LLc Icon/Brown.png",
      gradient: "from-blue-600 to-cyan-600",
      deliveryDays: 2,
      highlighted: false,
      popular: false
    },
    {
      name: "Professional",
      oneTimePrice: 999,
      description: "10 Logo Concept by 6 Logo Designer",
      icon: "/images/Earnytics LLc Icon/Platinum.png",
      gradient: "from-orange-500 to-pink-500",
      deliveryDays: 3,
      highlighted: true,
      popular: true
    },
    {
      name: "Basic 1",
      oneTimePrice: 1399,
      description: "Unlimited Logo Concept by 6 Logo Designer",
      icon: "/images/Earnytics LLc Icon/Brown.png",
      gradient: "from-blue-500 to-cyan-500",
      deliveryDays: 2,
      highlighted: false,
      popular: false
    },
    {
      name: "Start Up 1",
      oneTimePrice: 1999,
      description: "Unlimited Logo Concept by 8 Logo Designer",
      icon: "/images/Earnytics LLc Icon/Platinum.png",
      gradient: "from-orange-600 to-pink-600",
      deliveryDays: 2,
      highlighted: false,
      popular: false
    },
    {
      name: "Professional 1",
      oneTimePrice: 4000,
      description: "Unlimited Logo Concept by 10 Logo Designer",
      icon: "/images/Earnytics LLc Icon/Diamond.png",
      gradient: "from-purple-500 to-pink-500",
      deliveryDays: 3,
      highlighted: false,
      popular: false
    }
  ].map((p) => ({ ...p, features: getFeatures(p.deliveryDays) }));

  const getDisplayPrice = (plan: (typeof plans)[0]) => ({
    value: plan.oneTimePrice,
    suffix: " one-time",
    label: "One-time payment"
  });

  const formatPrice = (n: number) => {
    if (n >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-3 uppercase tracking-wider">
            Logo &amp; Branding
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            One-time pricing with FREE revision, fast delivery, and money-back guarantee
          </p>
          <a href="#pricing-cards">
            <button className="px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:from-orange-600 hover:to-red-600 transition-all hover:shadow-lg">
              Pricing Plans
            </button>
          </a>
        </div>

        {/* Pricing Cards - 6 plans */}
        <div id="pricing-cards" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto scroll-mt-8">
          {plans.map((plan, index) => {
            const { value, suffix, label } = getDisplayPrice(plan);
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group cursor-pointer border border-orange-200 shadow-lg hover:shadow-xl ${
                  plan.highlighted
                    ? "ring-2 ring-orange-500 lg:scale-[1.02]"
                    : "hover:scale-[1.02]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-bl-xl font-semibold text-xs">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.gradient} p-6 text-white text-center transition-all duration-300 group-hover:brightness-110`}>
                  <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Image
                      src={plan.icon}
                      alt={plan.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>

                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-gray-600 text-lg">$</span>
                      <span className="text-4xl font-bold text-orange-500">{formatPrice(value)}</span>
                      <span className="text-gray-500 text-sm ml-1">{suffix}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{label}</p>
                  </div>
                  <p className="text-gray-700 text-sm font-medium mb-4 text-center">{plan.description}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 flex-shrink-0 mt-0.5">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Earnytics LLC?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "/images/Earnytics LLc Icon/Fast & Speed.png", title: "Lightning Fast", desc: "Optimized for speed" },
                { icon: "/images/Earnytics LLc Icon/Secure.png", title: "100% Secure", desc: "Enterprise security" },
                { icon: "/images/Earnytics LLc Icon/SEO.png", title: "SEO Optimized", desc: "Built for rankings" },
                { icon: "/images/Earnytics LLc Icon/Mobile first.png", title: "Mobile First", desc: "Perfect on any device" },
                { icon: "/images/Earnytics LLc Icon/Custom Design.png", title: "Custom Design", desc: "Tailored to your brand" },
                { icon: "/images/Earnytics LLc Icon/7 Support.png", title: "24/7 Support", desc: "Always here to help" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-3 relative">
                    <Image 
                      src={item.icon} 
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of successful businesses using Earnytics LLC
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Start Free Trial
              </button>
            </a>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Contact Sales
            </button>
          </div>
          <p className="text-white/80 text-sm mt-4">
            ✓ No credit card required • ✓ 14-day money-back guarantee
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
