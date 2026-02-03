
"use client";

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DB } from '../../lib/db';

const ShadeCardPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white font-display text-slate-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 md:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Color Reference 2026</span>
          <h1 className="text-5xl md:text-7xl font-black text-navy-dark uppercase tracking-tighter leading-none mb-8">
            Request a <br/><span className="text-primary italic">Shade Card</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Experience our vibrant spectrum in person. Request physical samples or download our digital e-catalogues for immediate reference.
          </p>
        </div>
      </section>

      {/* Shade Cards Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {DB.shadeCards.map((card) => (
              <div key={card.id} className="group flex flex-col items-center">
                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border border-slate-100 group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="w-full bg-accent mt-4 py-3 px-4 rounded-xl text-center shadow-md transform group-hover:-translate-y-1 transition-transform">
                  <span className="text-white text-[11px] font-black uppercase tracking-widest">{card.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Order Your Samples</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-black text-navy-dark uppercase tracking-tight">Request Sent</h3>
                <p className="text-slate-500 text-sm">A Safari representative will verify your business details and arrange delivery.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none text-slate-900 text-sm focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Business Email</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none text-slate-900 text-sm focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none text-slate-900 text-sm focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none text-slate-900 text-sm focus:ring-2 focus:ring-primary transition-all" />
                </div>
                
                <div className="md:col-span-2 space-y-4 pt-4">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Request Type</p>
                   <div className="flex flex-wrap gap-8">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="req_type" className="w-5 h-5 accent-primary" defaultChecked />
                        <span className="text-xs font-bold text-navy-dark uppercase tracking-wider group-hover:text-primary transition-colors">Order Physical Shade Card</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="req_type" className="w-5 h-5 accent-primary" />
                        <span className="text-xs font-bold text-navy-dark uppercase tracking-wider group-hover:text-primary transition-colors">Download E-Catalogue PDF</span>
                      </label>
                   </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Special Requirements</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none text-slate-900 text-sm focus:ring-2 focus:ring-primary transition-all resize-none"></textarea>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-xl hover:bg-red-700 transition-all hover:scale-[1.01] active:scale-95">
                    Submit Order Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShadeCardPage;
