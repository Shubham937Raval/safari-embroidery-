
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { DB } from "../lib/db";
import React from "react";

export default function Home() {
  const mainProduct = DB.products[0];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      
      {/* Dynamic Product Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Innovation Highlight</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase leading-[1.1] tracking-tighter">
                {mainProduct.name} <br/><span className="text-primary italic">2026 Collection</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                {mainProduct.description}
              </p>
              
              <div className="overflow-hidden border border-slate-100 rounded-3xl shadow-2xl bg-slate-50">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy-dark text-slate-400 font-black uppercase text-[9px] tracking-[0.3em]">
                    <tr>
                      <th className="px-8 py-5">Denier/Ply</th>
                      <th className="px-8 py-5">Length</th>
                      <th className="px-8 py-5">Net Weight</th>
                      <th className="px-8 py-5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mainProduct.details.map((detail, i) => (
                      <tr key={i} className="hover:bg-white transition-colors">
                        <td className="px-8 py-6 font-bold text-slate-900">{detail.denier}/{detail.ply}</td>
                        <td className="px-8 py-6 text-slate-500 font-light">{detail.length}</td>
                        <td className="px-8 py-6 text-slate-500 font-light">{detail.net}</td>
                        <td className="px-8 py-6 text-primary font-black uppercase text-[10px] tracking-widest">In Stock</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-6 bg-accent/5 rounded-[40px] -z-10 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="overflow-hidden rounded-[30px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                <img 
                  src={mainProduct.img} 
                  alt={mainProduct.name} 
                  className="w-full h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-xs border border-white/20">
                 <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Premium Gloss</p>
                 <p className="text-sm text-slate-900 font-medium">Engineered for the 2026 high-speed embroidery machine standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy-deep py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {DB.stats.map((stat, i) => (
              <div key={i} className="text-center space-y-6">
                <span className="material-symbols-outlined text-6xl text-primary">{stat.icon}</span>
                <div className="text-6xl font-black text-6xl text-primary tracking-tighter">{stat.val}</div>
                <div className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">{stat.label}</div>
                <p className="text-slate-400 font-light leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths Section (Replaced Leadership) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="w-full md:w-2/5">
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-primary translate-x-6 translate-y-6 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544441893-675973e30605?q=80&w=2070" 
                    alt="Industrial Excellence" 
                    className="w-full aspect-[3/4] object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 space-y-10">
              <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Our Commitment</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-navy-dark">
                The Standards of <br />
                <span className="text-primary italic text-4xl md:text-5xl">Global Excellence</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {DB.values.slice(0, 4).map((value) => (
                  <div key={value.id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">{value.icon}</span>
                      <h4 className="font-black uppercase text-xs tracking-widest text-navy-dark">{value.title}</h4>
                    </div>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <a href="#infrastructure" className="bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] px-12 py-5 shadow-xl shadow-primary/20 hover:bg-red-700 transition-all text-center">
                  Our Technical Process
                </a>
                <a href="#shade-card" className="border border-slate-200 text-navy-dark text-[11px] font-black uppercase tracking-[0.2em] px-12 py-5 hover:bg-slate-50 transition-all text-center">
                  Request Catalogue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
             <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Excellence Recognized</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-navy-dark">Awards & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DB.awards.map((award, i) => (
              <div key={i} className="bg-white p-12 border border-slate-100 shadow-sm rounded-3xl flex flex-col gap-8 group hover:border-primary transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-2xl">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-12 transition-transform">emoji_events</span>
                </div>
                <div>
                  <h4 className="font-black text-navy-dark uppercase tracking-tight text-xl mb-2 leading-tight">{award.name}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">{award.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
