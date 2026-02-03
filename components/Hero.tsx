
"use client";

import React, { useState, useEffect } from 'react';
import { DB } from '../lib/db';

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DB.slider.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = DB.slider[activeIndex];

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background with Transition */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-dark/40 z-10"></div>
        <img 
          alt={slide.title} 
          className="w-full h-full object-cover opacity-50 transition-all duration-1000 scale-105" 
          src={slide.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent z-20"></div>
      </div>

      <div className="relative z-30 w-full max-w-4xl px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="text-accent font-black tracking-[0.5em] uppercase text-xs mb-6 block">Safari Industrial Grade</span>
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter">
          {slide.title.split(' ').map((word, i) => (
            <span key={i} className={i === 2 ? "text-primary italic" : ""}>{word} </span>
          ))}
        </h1>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          {slide.description || "24 Years of global excellence in high-tenacity embroidery thread manufacturing."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="w-full sm:w-auto bg-primary text-white px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-2xl text-center">
            Inquire Now
          </a>
          <a href="#products" className="w-full sm:w-auto border border-white/30 text-white px-12 py-4 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-navy-dark transition-all text-center">
            Technical Specs
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 flex gap-3 z-40">
        {DB.slider.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setActiveIndex(i)}
            className={`h-1 transition-all duration-500 ${activeIndex === i ? 'w-12 bg-primary' : 'w-4 bg-white/20'}`}
          ></button>
        ))}
      </div>
    </section>
  );
};
