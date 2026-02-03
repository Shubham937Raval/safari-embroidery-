
"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DB } from '../../lib/db';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white font-display text-gray-900 min-h-screen selection:bg-primary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-deep py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e30605?q=80&w=2070" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Textile Factory"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 to-navy-deep"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
           <span className="text-gold-accent font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Legacy Journey</span>
           <h1 className="text-6xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter mb-8">
             Crafting <br/><span className="text-primary italic">Excellence</span>
           </h1>
           <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
             26 years of thread engineering, spanning generations of quality and global trust. Now leading the 2026 smart-textile revolution.
           </p>
        </div>
      </section>

      {/* Legacy Story */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-primary font-black uppercase tracking-widest text-xs">Our Heritage</span>
              </div>
              <h2 className="text-5xl font-black text-navy-deep uppercase tracking-tighter leading-tight">
                Industrial Vision, <br/><span className="text-gold-accent italic">Global Performance.</span>
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed text-lg font-light">
                <p>
                  Founded at the turn of the millennium, Safari Embroidery Yarn has evolved from a boutique operation into a global manufacturing powerhouse. Our journey is defined by a relentless pursuit of the perfect filament.
                </p>
                <p>
                  By 2026, we have integrated advanced AI protocols and sustainable closed-loop dyeing into our core production, ensuring that every spool of thread is not just high-performance, but ethically superior.
                </p>
                <p>
                  Our commitment to precision ensures that high-speed industrial embroidery machines can operate at peak capacity with zero downtime, setting new benchmarks for the industry.
                </p>
              </div>
            </div>

            <div className="relative group">
               <div className="absolute -inset-6 bg-slate-50 rounded-[40px] -z-10 group-hover:scale-105 transition-transform duration-1000"></div>
               <div className="rounded-[30px] overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1551029177-8822097f48b0?q=80&w=2070" 
                   className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                   alt="Industrial Process"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid (Replaced Leadership Grid) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">What We Stand For</span>
            <h2 className="text-4xl font-black text-navy-deep uppercase tracking-tighter">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {DB.values.map((value) => (
              <div key={value.id} className="bg-white rounded-[40px] p-12 shadow-xl border border-slate-100 flex flex-col gap-6 group hover:border-primary transition-all duration-500">
                <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-2xl">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-12 transition-transform">{value.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-navy-deep uppercase tracking-tighter mb-4">{value.title}</h3>
                  <p className="text-slate-500 text-base font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
           <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">The Safari Philosophy</span>
           <blockquote className="text-3xl md:text-5xl font-black text-navy-deep uppercase tracking-tighter leading-tight italic">
             "Precision is not an act, <span className="text-primary italic">it is a standard</span> that defines every filament we produce."
           </blockquote>
           <div className="h-px w-24 bg-primary mx-auto"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
