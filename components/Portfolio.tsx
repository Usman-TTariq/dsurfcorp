import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    {
      category: "E-Commerce Platform",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      iconImage: "/images/Ecommerce.png",
      bgImage: "/images/Ecommerce.jpg",
      description: "Modern online shopping experience with seamless checkout"
    },
    {
      category: "Business Dashboard",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      iconImage: "/images/Dashboard.png",
      bgImage: "/images/istockphoto-1488294044-612x612.jpg",
      description: "Real-time analytics and data visualization platform"
    },
    {
      category: "Mobile Application",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      iconImage: "/images/Mobile application.png",
      bgImage: "/images/360_F_900653724_MPXCtoE2xAi5ME5BRQrriIIKTv0X9dkV.jpg",
      description: "Cross-platform mobile app with intuitive user interface"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2 uppercase tracking-wide">
            What We&apos;ve Built
          </p>
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of successful projects across different industries and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Gradient or Image Background with Icon */}
              <div
                className={`aspect-[4/3] relative overflow-hidden ${!("bgImage" in item && item.bgImage) ? `bg-gradient-to-br ${item.gradient}` : ""}`}
                style={"bgImage" in item && item.bgImage ? { backgroundImage: `url(${item.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                {/* Small circular icon - left corner */}
                <div className="absolute top-4 left-4 z-10 w-14 h-14 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Image
                    src={item.iconImage}
                    alt={item.category}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {/* Category label - left side below icon */}
                <div className="absolute top-20 left-4 z-10">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1.5 inline-block">
                    <p className="text-white font-semibold text-sm">{item.category}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <a
                    href="#pricing"
                    className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-orange-500 hover:text-white"
                  >
                    View Details →
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>
              
              {/* Info */}
              <div className="p-6 bg-gradient-to-br from-white/5 to-transparent">
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Ready to bring your vision to life?</p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
