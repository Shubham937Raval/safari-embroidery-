
"use client";

import React from 'react';

const FEATURE_DATA = [
  {
    title: "HIGH TENACITY",
    description: "Engineered for 1,200+ SPM speeds without thread breakage.",
    label: "PERFORMANCE"
  },
  {
    title: "VIBRANT FASTNESS",
    description: "Superior color retention that withstands industrial laundering.",
    label: "DURABILITY"
  },
  {
    title: "SILK-LIKE LUSTRE",
    description: "Exclusive trilobal filaments for unmatched premium finish.",
    label: "AESTHETICS"
  },
  {
    title: "ECO-CERTIFIED",
    description: "100% Oeko-Tex Standard 100 compliant production.",
    label: "ETHICAL"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-obsidian text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURE_DATA.map((item, idx) => (
            <div key={idx} className="space-y-4 border-l-2 border-primary pl-8 py-2 hover:border-accent transition-all">
              <span className="text-[10px] font-black text-accent tracking-widest">{item.label}</span>
              <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
