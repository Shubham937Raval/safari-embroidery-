
"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const InfrastructurePage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 font-display min-h-screen">
      <Header />
      
      <section className="relative h-[600px] flex items-center bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070" 
            alt="Industrial Infrastructure" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full animate-in fade-in slide-in-from-left-12 duration-1000">
          <span className="text-gold-accent font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Technological Powerhouse</span>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Industrial <br/><span className="text-primary italic">Core</span>
          </h1>
          <p className="text-slate-400 text-xl font-light max-w-xl">
             Exploring the limits of filament engineering through our 2026 smart factory network.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-16 bg-primary"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Capabilities 2026</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-navy-deep uppercase tracking-tighter leading-tight">
                Precision <br/><span className="text-gold-accent italic">at Scale</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-light">
                Our facilities span 200,000+ sq. ft. of dedicated smart-manufacturing space. Utilizing IoT-enabled sensors and automated tension control systems, we've eliminated variance to achieve 99.9% batch consistency.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-4">
                <div className="space-y-2">
                   <p className="text-5xl font-black text-navy-deep tracking-tighter">15 T</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Daily Production Capacity</p>
                </div>
                <div className="space-y-2">
                   <p className="text-5xl font-black text-navy-deep tracking-tighter">0.01%</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Breakage Rate Threshold</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 border border-slate-100 -z-10 rounded-[50px] hidden lg:block"></div>
              <div className="rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                  className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  alt="Smart Factory"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 rounded-[40px] overflow-hidden bg-slate-50">
             {[
               { 
                 title: 'AI Dyeing Unit', 
                 img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974',
                 desc: 'Computerized spectral matching ensuring zero color drift between seasons.'
               },
               { 
                 title: 'Robotic Winding', 
                 img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070',
                 desc: 'Automated high-speed units with synchronized tension modulation.'
               },
               { 
                 title: 'Advanced QC Lab', 
                 img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
                 desc: 'Micro-filament testing for tenacity, elongation, and sheen.'
               }
             ].map((unit, i) => (
               <div key={i} className="group p-16 border-r border-slate-100 last:border-0 hover:bg-white transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-12 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={unit.img} alt={unit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"/>
                  </div>
                  <h3 className="text-2xl font-black text-navy-deep uppercase tracking-tighter mb-4">{unit.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{unit.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfrastructurePage;
