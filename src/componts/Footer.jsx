import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full h-md bg-gray-900 overflow-hidden font-sans">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/80 to-black/95"></div>
      </div>

      {/* Main Content Container - Let it size naturally based on content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col">
        
        {/* --- Top CTA Section --- */}
        <div className="flex flex-col items-center text-center mt-4 lg:mt-10 mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 font-serif tracking-wide px-2">
            Find Your Perfect Pair
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed px-2">
            Every great journey begins with the right step. Tell us what you're looking for, and we'll help you step into comfort.
          </p>
          <button  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg mb-6 cursor-pointer">
            Shop Collection
          </button>
          
          {/* Reviews */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <div className="flex text-white/80">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span className="text-white/80 text-xs sm:text-sm tracking-wider">2,500+ Happy Customers</span>
          </div>
        </div>

        {/* --- Middle Links Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-8 lg:mb-12 border-t border-white/10 pt-10 lg:pt-16">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 mb-2 lg:mb-0 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF4633]">
                <path d="M20.916 11.218L14.417 5.719C13.882 5.267 13.197 5 12.49 5H5C3.895 5 3 5.895 3 7V16C3 17.105 3.895 18 5 18H19.5C20.328 18 21 17.328 21 16.5V12.181C21 11.823 20.97 11.468 20.916 11.218Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white text-2xl font-bold tracking-tight">Brand Shoes</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Stylish and comfortable shoes for everyone.
            </p>
          </div>

          {/* Shop Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-serif text-lg mb-4 sm:mb-6">Shop</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Men's Sneakers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-[#FF4633] transition-colors">Sale & Offers</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-serif text-lg mb-4 sm:mb-6">About</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-serif text-lg mb-4 sm:mb-6">Support</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-serif text-lg mb-4 sm:mb-6">Contact</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-sm text-gray-400 items-center sm:items-start">
              <li className="flex items-start gap-2">
                <span className="text-[#FF4633] mt-0.5">📍</span> 
                <span className="leading-tight">Naraingarh, Haryana<br/>India</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF4633]">📞</span> 
                <a href="tel:+919817632517" className="hover:text-white transition-colors">+91 9817632517</a>
              </li>
              <li className="flex items-center gap-2 w-full justify-center sm:justify-start">
                <span className="text-[#FF4633]">✉️</span> 
                <a href="mailto:hello@brandshoes.com" className="hover:text-white transition-colors wrap-break-word">hello@brandshoes.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 sm:px-6 py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Brand Shoes. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}