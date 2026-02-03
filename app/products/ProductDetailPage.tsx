
"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DB } from '../../lib/db';

interface ProductDetailPageProps {
  slug: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const product = DB.products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-navy-dark font-black uppercase tracking-widest">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-white font-display text-slate-900 min-h-screen">
      <Header />
      
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
               <div className="inline-flex items-center gap-4 mb-8">
                 <a href="#products" className="text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:underline flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Collection
                 </a>
               </div>
               <h1 className="text-5xl md:text-7xl font-black text-navy-dark uppercase tracking-tighter leading-none mb-10">
                 {product.name}
               </h1>
               <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                 {product.description}
               </p>
               
               <div className="space-y-8">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                     <span className="material-symbols-outlined text-primary">verified</span>
                   </div>
                   <div>
                     <h4 className="font-black uppercase text-xs tracking-widest text-navy-dark">Industrial Grade</h4>
                     <p className="text-sm text-slate-500 font-light">Engineered for 1200+ SPM multi-head machinery.</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                     <span className="material-symbols-outlined text-primary">eco</span>
                   </div>
                   <div>
                     <h4 className="font-black uppercase text-xs tracking-widest text-navy-dark">Oeko-Tex Certified</h4>
                     <p className="text-sm text-slate-500 font-light">Safe for skin and infants, meeting global eco-standards.</p>
                   </div>
                 </div>
               </div>

               <div className="flex flex-wrap gap-6 pt-16">
                 <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-xl hover:bg-red-700 transition-all">
                   Request Pricing
                 </button>
                 <a href="#shade-card" className="border border-slate-200 text-navy-dark px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-slate-50 transition-all text-center">
                   View Color Card
                 </a>
               </div>
            </div>

            <div className="relative group animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="absolute -inset-10 bg-slate-50 rounded-[60px] -z-10 group-hover:scale-105 transition-all duration-1000"></div>
              <div className="overflow-hidden rounded-[40px] shadow-2xl">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="mb-16">
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Engineered precision</span>
              <h2 className="text-4xl font-black text-navy-dark uppercase tracking-tighter">Technical Data Sheet</h2>
           </div>
           
           <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100">
              <table className="w-full text-left">
                <thead className="bg-navy-dark text-slate-400">
                  <tr className="text-[9px] font-black uppercase tracking-[0.4em]">
                    <th className="px-10 py-6">Tex Size</th>
                    <th className="px-10 py-6">Denier/Ply</th>
                    <th className="px-10 py-6">Net Weight</th>
                    <th className="px-10 py-6">Avg. Length</th>
                    <th className="px-10 py-6">Packaging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.details.map((detail, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-10 py-8 font-bold text-slate-900">{detail.tex}</td>
                      <td className="px-10 py-8 font-black text-primary text-xl">{detail.denier}/{detail.ply}</td>
                      <td className="px-10 py-8 text-slate-500 font-light">{detail.net}</td>
                      <td className="px-10 py-8 text-slate-500 font-light">{detail.length}</td>
                      <td className="px-10 py-8 text-navy-dark font-black uppercase text-[10px] tracking-widest">{detail.packing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
