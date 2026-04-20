"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandWordmark from "./BrandWordmark";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string | null) => {
    if (isHomePage) {
      if (sectionId) scrollToSection(sectionId);
      else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  const navLinkClass =
    "px-5 py-2 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium";

  const mobileNavLinkClass =
    "block w-full text-left px-5 py-3 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium text-base";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between w-full">
          {isHomePage ? (
            <div
              className="flex items-center cursor-pointer flex-shrink-0 py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              aria-label="dsurfcorp — scroll to top"
            >
              <BrandWordmark className="text-xl sm:text-2xl md:text-3xl" />
            </div>
          ) : (
            <Link
              href="/"
              className="flex items-center flex-shrink-0 py-1 hover:opacity-90 transition-opacity"
              aria-label="dsurfcorp — home"
            >
              <BrandWordmark className="text-xl sm:text-2xl md:text-3xl" />
            </Link>
          )}

          {/* Desktop: nav links centered in the middle */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-3 text-sm">
            {isHomePage ? (
              <>
                <button
                  onClick={() => handleNavClick(null)}
                  className={navLinkClass}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className={navLinkClass}
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("portfolio")}
                  className={navLinkClass}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => handleNavClick("pricing")}
                  className={navLinkClass}
                >
                  Pricing
                </button>
              </>
            ) : (
              <>
                <Link href="/" className={navLinkClass}>
                  Home
                </Link>
                <Link href="/#services" className={navLinkClass}>
                  Services
                </Link>
                <Link href="/#portfolio" className={navLinkClass}>
                  Portfolio
                </Link>
                <Link href="/#pricing" className={navLinkClass}>
                  Pricing
                </Link>
              </>
            )}
          </div>

          {/* Desktop: CTAs on the right */}
          <div className="hidden md:flex items-center space-x-3 text-sm flex-shrink-0 justify-end">
            <a href="tel:+18472087685">
              <button className="bg-transparent border-2 border-white/50 hover:border-white text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>📞</span>
                <span>Call Now</span>
              </button>
            </a>
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile: compact icon + small CTA + hamburger */}
          <div className="flex md:hidden items-center gap-1.5 flex-shrink-0 min-w-0">
            <a
              href="tel:+18472087685"
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/40 hover:border-white/80 hover:bg-white/5 text-white transition-all"
              aria-label="Call Now"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link href="/contact" className="flex-shrink-0">
              <button className="h-9 px-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-all active:scale-95 shadow-sm">
                Contact
              </button>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/10 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 pt-2 bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-1">
            {isHomePage ? (
              <>
                <button onClick={() => handleNavClick(null)} className={mobileNavLinkClass}>
                  Home
                </button>
                <button onClick={() => handleNavClick("services")} className={mobileNavLinkClass}>
                  Services
                </button>
                <button onClick={() => handleNavClick("portfolio")} className={mobileNavLinkClass}>
                  Portfolio
                </button>
                <button onClick={() => handleNavClick("pricing")} className={mobileNavLinkClass}>
                  Pricing
                </button>
              </>
            ) : (
              <>
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                  Home
                </Link>
                <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                  Services
                </Link>
                <Link href="/#portfolio" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                  Portfolio
                </Link>
                <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
                  Pricing
                </Link>
              </>
            )}
            <a href="tel:+18472087685" onClick={() => setMobileMenuOpen(false)} className="mt-2">
              <button className="w-full bg-transparent border-2 border-white/50 hover:border-white text-white px-5 py-3 rounded-full font-medium text-base">
                📞 Call Now
              </button>
            </a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-medium text-base mt-1">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
