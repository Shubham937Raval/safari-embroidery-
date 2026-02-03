
"use client";

import React from 'react';

const SocialIcon = ({ d, title }: { d: string; title: string }) => (
  <a 
    href={`#${title.toLowerCase()}`} 
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
    title={title}
  >
    <svg className="w-5 h-5 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  </a>
);

export const Footer: React.FC = () => {
  const socialIcons = [
    { 
      title: 'Facebook', 
      d: "M12 2.04c-5.5 0-10 4.5-10 10 0 4.97 3.64 9.08 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99c4.8-.8 8.44-4.91 8.44-9.88 0-5.5-4.5-10-10-10z" 
    },
    { 
      title: 'X', 
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" 
    },
    { 
      title: 'Instagram', 
      d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.357.062-2.285.277-3.097 1.089-.812.812-1.027 1.74-1.089 3.097-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.357.277 2.285 1.089 3.097.812.812 1.74 1.027 3.097 1.089 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.357-.062 2.285-.277 3.097-1.089.812-.812 1.027-1.74 1.089-3.097.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.357-.277-2.285-1.089-3.097-.812-.812-1.74-1.027-3.097-1.089-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" 
    },
    { 
      title: 'YouTube', 
      d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
    }
  ];

  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU4KMTh58Vq8LBIhnEjGmjz6sDshUQE-jxPAQR7kHgmkW1pDZgYAmZ9Gx5b685inW3TXuGB18BFotKaXguaF_jLNjriMHoJLyqINT0A1IXXnm4qr3keMTJSU3oSYhvVJ_V87crAd-wUeZeTfLlJX8j1-KTnHfMs_ZXDcvhW4rJW_I4JX3igI-utfzq6DOQ0zrQoYYZdbJZqe3Vk0pW3-ye7PQzMKR6CxgVhherCUOHtZl8HdqOYLqg17omJ2uJ-YeP_KYMqT4NDos" 
                className="h-10 brightness-0 invert" 
                alt="Safari Yarn Logo" 
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Pioneering the future of industrial embroidery filaments since 2000. Committed to precision, performance, and planet-friendly manufacturing.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <SocialIcon key={social.title} title={social.title} d={social.d} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#infrastructure" className="text-sm text-slate-400 hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#products" className="text-sm text-slate-400 hover:text-white transition-colors">Product Catalogue</a></li>
              <li><a href="#sustainability" className="text-sm text-slate-400 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-sm text-slate-400 hover:text-white transition-colors">Technical Specs</a></li>
              <li><a href="#infrastructure" className="text-sm text-slate-400 hover:text-white transition-colors">Global Network</a></li>
              <li><a href="#shade-card" className="text-sm text-slate-400 hover:text-white transition-colors">Color Cards</a></li>
              <li><a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span className="text-sm text-slate-400 font-light">
                  Plot No. 120, Industrial Area <br/>Phase II, Global City, IND 202601
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span className="text-sm text-slate-400 font-light">+91 1800 120 4505 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span className="text-sm text-slate-400 font-light">care@safariyarn.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            © 2026 SAFARI EMBROIDERY YARN PVT. LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
