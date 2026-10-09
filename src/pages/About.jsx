import React from "react";
import Header from "../componts/Header";
import Footer from "../componts/Footer";

const About = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans">
      <Header />

      {/* --- Main Content Section --- */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-16 md:py-24 flex flex-col justify-center">
        
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <span className="text-[#00ffff] font-mono text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Established 2026 // Brand Shoes
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
            About <span className="text-[#00ffff]">Us</span>
          </h1>
          <p className="text-gray-400 font-mono text-sm sm:text-base">
            The ultimate destination for premium footwear culture.
          </p>
        </div>

        {/* Card Container with Glow & Modern Grid */}
        <div className="relative max-w-4xl mx-auto w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-6 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Subtle background glow effect */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00ffff] rounded-full mix-blend-overlay filter blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#ff0055] rounded-full mix-blend-overlay filter blur-[120px] opacity-20"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Image Box */}
            <div className="relative group overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-3">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" 
                alt="Brand Shoes Collection" 
                className="w-full h-72 sm:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 rounded-lg">
                <span className="text-[#00ffff] font-mono text-xs font-bold uppercase tracking-wider">Brand Shoes Vault</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
                  Brand <span className="text-[#00ffff]">Shoes</span>
                </h2>
                <div className="w-12 h-1 bg-[#00ffff] mx-auto md:mx-0 mt-2 mb-4"></div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                We provide stylish and comfortable shoes at affordable prices.
              </p>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <p className="text-[#00ffff] font-mono text-xs uppercase tracking-widest font-bold">
                  // Collection Lineup
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Shoes for men, women and kids.
                </p>
              </div>

              {/* Action Link / Badge */}
              <div className="pt-2">
                <span className="inline-block text-xs font-mono text-gray-500 uppercase tracking-widest">
                  📍 Naraingarh, Haryana // India
                </span>
              </div>

            </div>

          </div>
        </div>

      </main>

      <Footer />

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default About;