import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Logo & Branding",
      description: "Creating unique and memorable brand identities that resonate with your target audience and set you apart from competitors.",
      icon: "/images/Earnytics LLc Icon/Logo & branding.png",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Website Design",
      description: "Designing beautiful, user-friendly websites that engage visitors and drive conversions with modern aesthetics.",
      icon: "/images/Earnytics LLc Icon/website design.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media",
      description: "Building and managing your social media presence to connect with customers and grow your brand online.",
      icon: "/images/Earnytics LLc Icon/Social media.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Content & Copywriting",
      description: "Crafting compelling content and copy that tells your brand story and engages your audience effectively.",
      icon: "/images/Earnytics LLc Icon/Content & Copywriting.png",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Website Development",
      description: "Building robust, scalable web applications using cutting-edge technologies and best practices.",
      icon: "/images/Earnytics LLc Icon/Website Devlop.png",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Hosting & Maintenance",
      description: "Providing reliable hosting solutions and ongoing maintenance to keep your website running smoothly 24/7.",
      icon: "/images/Earnytics LLc Icon/Hosting & maintenance.png",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-medium mb-2 uppercase tracking-wide">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg p-3`}>
                <Image 
                  src={service.icon} 
                  alt={service.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              
              {/* Decorative element */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
