
"use client";

import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on hash change
  useEffect(() => {
    const handleHashChange = () => setIsMobileMenuOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header className="relative z-50 bg-white border-b border-slate-100 shadow-sm shrink-0 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center gap-2">
            <img 
              alt="Safari Embroidery Yarn Logo" 
              className="h-10 w-auto" 
              src="public/images/logo/logo.svg"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 h-full">
          <a className="nav-link" href="#home">Home</a>
          <div 
            className="relative h-full flex items-center cursor-pointer group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link">Company <span className="material-symbols-outlined text-[16px]">expand_more</span></span>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a className="dropdown-item" href="#about">About Us</a>
                <a className="dropdown-item" href="#infrastructure">Infrastructure</a>
                <a className="dropdown-item" href="#sustainability">Sustainability</a>
              </div>
            )}
          </div>
          <a className="nav-link" href="#products">Products</a>
          <a className="nav-link" href="#shade-card">Shade Card</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#contact" className="hidden sm:block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 hover:bg-red-700 transition-all text-center">
            Get a Quote
          </a>
          
          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 text-primary transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-4xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-navy-dark transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 md:px-8 h-20 border-b border-white/5">
            <img 
              alt="Safari Yarn" 
              className="h-8 brightness-0 invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU4KMTh58Vq8LBIhnEjGmjz6sDshUQE-jxPAQR7kHgmkW1pDZgYAmZ9Gx5b685inW3TXuGB18BFotKaXguaF_jLNjriMHoJLyqINT0A1IXXnm4qr3keMTJSU3oSYhvVJ_V87crAd-wUeZeTfLlJX8j1-KTnHfMs_ZXDcvhW4rJW_I4JX3igI-utfzq6DOQ0zrQoYYZdbJZqe3Vk0pW3-ye7PQzMKR6CxgVhherCUOHtZl8HdqOYLqg17omJ2uJ-YeP_KYMqT4NDos"
            />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-10 space-y-8">
            <a href="#home" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors">Home</a>
            
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Company</span>
              <div className="flex flex-col space-y-4 pl-4 border-l border-white/10">
                <a href="#about" className="text-2xl font-bold text-slate-300 hover:text-white uppercase tracking-tight">About Us</a>
                <a href="#infrastructure" className="text-2xl font-bold text-slate-300 hover:text-white uppercase tracking-tight">Infrastructure</a>
                <a href="#sustainability" className="text-2xl font-bold text-slate-300 hover:text-white uppercase tracking-tight">Sustainability</a>
              </div>
            </div>

            <a href="#products" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors">Products</a>
            <a href="#shade-card" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors">Shade Card</a>
            <a href="#contact" className="text-4xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="p-10 border-t border-white/5 space-y-6">
            <a href="#contact" className="block w-full bg-primary text-white py-5 font-black uppercase tracking-[0.3em] text-xs text-center">
              Get a Quote
            </a>
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">© 2026 Safari Embroidery Yarn</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
