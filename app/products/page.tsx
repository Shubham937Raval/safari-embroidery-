
"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DB } from '../../lib/db';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 font-display min-h-screen">
      <Header />
      
      <section className="bg-navy-dark py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=2071" className="w-full h-full object-cover" alt="Silk Textures"/>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">2026 Thread Engineering</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              The Luxury <br/><span className="text-primary italic">Filament</span>
            </h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed">
              Engineered for brilliance. From our flagship Viscose Rayon to industrial-strength Polyester, discover the threads that power global fashion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-8">
          {DB.products.map((product, i) => (
            <div key={i} className="mb-60 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:col-span-5 relative group">
                  <div className="absolute -inset-8 bg-slate-50 rounded-[50px] -z-10 group-hover:scale-105 transition-all duration-1000"></div>
                  <div className="overflow-hidden rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 space-y-12 ${i % 2 !== 0 ? 'lg:pr-10' : 'lg:pl-10'}`}>
                  <div className="inline-flex items-center gap-4">
                    <span className="h-px w-10 bg-gold-accent"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-accent">Series 2026-0{product.id}</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-navy-dark uppercase tracking-tighter leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-slate-500 text-xl leading-relaxed font-light italic">
                    {product.description}
                  </p>
                  
                  <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 shadow-sm">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Technical Data Sheet</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="border-b border-slate-200">
                          <tr className="text-[9px] font-black uppercase text-slate-400 tracking-widest">
                            <th className="pb-6 pr-6">Denier/Ply</th>
                            <th className="pb-6 pr-6">Net Weight</th>
                            <th className="pb-6 pr-6">Length</th>
                            <th className="pb-6">Packing</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {product.details.slice(0, 2).map((d, idx) => (
                            <tr key={idx} className="group/row hover:bg-white transition-all duration-300">
                              <td className="py-6 font-bold text-navy-dark text-lg">{d.denier}/{d.ply}</td>
                              <td className="py-6 text-slate-500 font-light">{d.net}</td>
                              <td className="py-6 text-slate-500 font-light">{d.length}</td>
                              <td className="py-6 text-primary font-black uppercase text-xs tracking-widest">{d.packing}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 pt-4">
                    <a href={`#product/${product.slug}`} className="bg-navy-dark text-white text-[11px] font-black uppercase tracking-[0.3em] px-12 py-5 shadow-2xl hover:bg-primary transition-all text-center">
                      Full Specifications
                    </a>
                    <button className="border border-slate-200 text-navy-dark text-[11px] font-black uppercase tracking-[0.3em] px-12 py-5 hover:bg-slate-50 transition-all">
                      Custom Color Match
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
