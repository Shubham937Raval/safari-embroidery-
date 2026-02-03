
// Mock Database updated from the provided Safari SQL Dump
export const DB = {
  slider: [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613501700445-568370126588?q=80&w=2070",
      title: "High quality viscose embroidery thread",
      description: "Delivering unmatched gloss and industrial strength for high-speed machinery. Optimized for the 2026 manufacturing landscape.",
      link: "#products"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974",
      title: "High speed embroidery machine thread",
      description: "Engineered to withstand 1200+ SPM with zero breakage and perfect tension across all materials.",
      link: "#products"
    }
  ],
  products: [
    {
      id: 4,
      slug: "viscose-rayon",
      name: "Viscose Embroidery Thread",
      img: "https://images.unsplash.com/photo-1584184924103-e310d9dc85fc?q=80&w=1974",
      description: "Safari Viscose Rayon is the natural choice for high-quality embroidery. Known for its silk-like lustre and exceptional softness, it is perfect for premium fashion brands and the 2026 luxury market.",
      details: [
        { tex: "17", denier: "120", ply: "2", net: "35g", gross: "40g", length: "1320m", packing: "12/BOX", type: "Y-cone" },
        { tex: "17", denier: "120", ply: "2", net: "125g", gross: "135g", length: "5000m", packing: "6/BOX", type: "Y-cone" }
      ]
    },
    {
      id: 5,
      slug: "polyester-high-tenacity",
      name: "Polyester High Tenacity",
      img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071",
      description: "Our trilobal polyester thread offers superior strength and color fastness. Designed for heavy-duty applications and industrial laundering resistance.",
      details: [
        { tex: "21", denier: "150", ply: "2", net: "100g", gross: "110g", length: "4000m", packing: "10/BOX", type: "Y-cone" }
      ]
    }
  ],
  shadeCards: [
    { id: 1, title: "Viscose (Volume - 1)", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964" },
    { id: 2, title: "Viscose (100/2 Denier)", image: "https://images.unsplash.com/photo-1621600411666-47428761b0d0?q=80&w=1964" },
    { id: 7, title: "Trilobal Polyester", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1964" }
  ],
  values: [
    {
      id: 1,
      title: "Quality First",
      description: "Uncompromising 12-point inspection on every spool to ensure zero-defect performance in high-speed industrial environments.",
      icon: "verified"
    },
    {
      id: 2,
      title: "Innovation Driven",
      description: "Continuously investing in smart manufacturing and advanced filament technology for the global market.",
      icon: "psychology"
    }
  ],
  awards: [
    { 
      id: 2, 
      name: "Innovative Digital Education award", 
      org: "India Mobile Congress",
      icon: "devices"
    },
    { 
      id: 4, 
      name: "Women in Education award", 
      org: "JobsForHer",
      icon: "female"
    }
  ],
  stats: [
    { icon: 'factory', val: '04', label: 'Production Units', desc: 'State-of-the-art smart factories operating at peak efficiency.' },
    { icon: 'public', val: '35+', label: 'Countries Served', desc: 'A global footprint reaching every luxury fashion hub.' },
    { icon: 'verified', val: '100%', label: 'Quality Assurance', desc: 'AI-driven quality inspection protocols for every spool.' }
  ],
  team: [
    {
      id: 2,
      name: "Kishor Thanth",
      designation: "Co-Founder & COO",
      description: "The central cog in the machinery. Masters in Information Technology with a focus on manufacturing excellence.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
    }
  ]
};
