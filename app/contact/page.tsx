
"use client";

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry forwarding
    console.log("Forwarding message to 2026 Support Center:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white text-slate-900 font-display min-h-screen">
      <Header />
      
      <section className="relative min-h-screen flex items-center bg-navy-deep overflow-hidden">
        {/* Animated background elements for extra "stunning" effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 z-0 opacity-10 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Customer Support"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-28 pb-20 md:pt-40 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="animate-in fade-in slide-in-from-left-12 duration-1000 space-y-10 md:space-y-16">
              <div className="space-y-4 md:space-y-6">
                <span className="text-gold-accent font-black uppercase tracking-[0.6em] text-[10px] block">Global Connectivity</span>
                <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight md:leading-none">
                  Get in <br/><span className="text-primary italic">Touch.</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                  Our 2026 Global Support Center is available across all time zones to assist with your thread requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-3">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                     <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                   </div>
                   <h4 className="text-white font-black uppercase text-[9px] tracking-[0.3em]">Smart Hub</h4>
                   <p className="text-slate-400 text-sm font-light leading-relaxed">Plot No. 120, Industrial Area <br/>Phase II, Global City, IND 202601</p>
                </div>
                <div className="space-y-3">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                     <span className="material-symbols-outlined text-primary text-xl">mail</span>
                   </div>
                   <h4 className="text-white font-black uppercase text-[9px] tracking-[0.3em]">Direct Email</h4>
                   <p className="text-slate-400 text-sm font-light leading-relaxed">care@safariyarn.com<br/>sales@safariyarn.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] md:rounded-[50px] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-right-12 duration-1000">
              {isSubmitted ? (
                <div className="text-center py-16 md:py-20 space-y-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-green-500 text-4xl md:text-5xl">check_circle</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-black text-navy-dark uppercase tracking-tighter">Inquiry Received</h2>
                    <p className="text-slate-500 font-light max-w-xs mx-auto text-sm md:text-base">Thank you for reaching out. A technical expert will respond via email within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-navy-dark uppercase tracking-tighter">Technical Inquiry</h3>
                    <p className="text-slate-400 text-[10px] md:text-sm font-light uppercase tracking-widest">2026 Priority Support Form</p>
                  </div>
                  <div className="space-y-6 md:space-y-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Client Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 md:py-5 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm font-medium"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Business Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 md:py-5 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm font-medium"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Thread Requirements</label>
                      <textarea 
                        required
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 md:py-5 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none text-sm font-medium"
                        placeholder="Please detail your denier and volume needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-navy-dark text-white py-5 md:py-6 rounded-2xl md:rounded-[30px] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-primary transition-all shadow-xl hover:scale-[1.02] active:scale-95 duration-300">
                    Forward to Sales Team 
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
