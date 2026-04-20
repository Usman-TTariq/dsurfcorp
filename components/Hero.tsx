"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import PopupModal from "./PopupModal";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => {
      video.play().catch(() => {});
    };
    play();
    video.addEventListener("canplay", play);
    video.addEventListener("loadeddata", play);
    return () => {
      video.removeEventListener("canplay", play);
      video.removeEventListener("loadeddata", play);
    };
  }, []);

  return (
    <div className="relative text-white overflow-hidden">
      {/* Background: gradient always (fallback when video missing on live); video on top when available */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source
              src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "/images/GettyImages-1311462781.mov"}
              type="video/mp4"
            />
          </video>
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/70 to-navy-800/80" />
      </div>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-40 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 text-sm font-medium mb-4 uppercase tracking-wide animate-slideInLeft">
              Transform Your Vision Into Reality
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
              Empowering Innovation Through Digital Excellence and Strategic Growth
            </h1>
            <p className="text-gray-300 mb-4 text-lg animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
              We deliver cutting-edge solutions that drive business transformation, helping you scale faster and compete smarter in the modern digital economy.
            </p>
            <p className="text-gray-400 mb-8 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
              From brand development and web innovation to marketing automation and growth strategies - we&apos;re your partner in success.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideInLeft" style={{ animationDelay: '0.8s' }}>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Journey
              </button>
              <a href="/contact">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Let&apos;s Talk →
                </button>
              </a>
            </div>
          </div>
          
          <div className="relative -mt-8 lg:-mt-12 animate-slideInRight">
            <div className="relative max-w-2xl mx-auto">
              {/* Real Image - Larger and positioned higher */}
              <Image
                src="/images/crowd-funding-3d-illustration.png"
                alt="Crowd Funding Illustration"
                width={672}
                height={504}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
