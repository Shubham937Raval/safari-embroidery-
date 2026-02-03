
"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const SustainabilityPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 font-display min-h-screen">
      <Header />
      
      <section className="bg-[#0e2417] py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000" alt="Eco Mission" className="w-full h-full object-cover"/>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-green-400 font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Sustainable Future 2026</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-10 leading-none">
            Clean <br/><span className="text-green-500 italic">Threads</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            By 2026, we aim for 100% circularity in our dyeing processes and 60% renewable energy reliance across all production units.
          </p>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'eco', title: 'Oeko-Tex 100', desc: '100% certified free from harmful chemicals, safe for human skin and infants.' },
              { icon: 'water_drop', title: '95% Water Recovery', desc: 'Closed-loop effluent treatment plants ensuring zero liquid discharge into nature.' },
              { icon: 'solar_power', title: 'Smart Grid Power', desc: 'Distributed solar panels across our factory rooftops powering the smart-looms.' },
              { icon: 'recycling', title: 'Circular Fibers', desc: 'A dedicated 2026 collection made entirely from post-industrial thread waste.' }
            ].map((card, i) => (
              <div key={i} className="p-16 border border-slate-100 rounded-[50px] bg-slate-50 group hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] hover:border-green-100 transition-all duration-700">
                <span className="material-symbols-outlined text-5xl text-green-600 mb-10 block group-hover:scale-110 group-hover:-rotate-12 transition-transform">{card.icon}</span>
                <h3 className="text-2xl font-black text-navy-deep uppercase tracking-tighter mb-6">{card.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-40 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center space-y-20">
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-navy-deep uppercase tracking-tighter leading-tight">Certified <br/><span className="text-primary italic">Industrial Safety</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto font-light">Independent verification of our commitment to ethical and green manufacturing.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="h-32 w-56 bg-white rounded-3xl shadow-sm flex items-center justify-center font-black text-[10px] uppercase tracking-[0.3em] p-8 text-center leading-relaxed">Oeko-Tex Standard 100 Verified</div>
            <div className="h-32 w-56 bg-white rounded-3xl shadow-sm flex items-center justify-center font-black text-[10px] uppercase tracking-[0.3em] p-8 text-center leading-relaxed">ISO 14001:2026 Certified</div>
            <div className="h-32 w-56 bg-white rounded-3xl shadow-sm flex items-center justify-center font-black text-[10px] uppercase tracking-[0.3em] p-8 text-center leading-relaxed">Global Recycled Standard (GRS)</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityPage;
