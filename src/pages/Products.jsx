import React from 'react';
import Navbar from '../components/Navbar';
import watchImg from '../assets/watch.png';
import bagImg from '../assets/bag.png';
import { Filter, ChevronDown } from 'lucide-react';

const Products = () => {
  const products = [
    { id: 1, name: 'Minimalist Silver Watch', price: 2490, image: watchImg, category: 'Timepieces' },
    { id: 2, name: 'Signature Tan Handbag', price: 3850, image: bagImg, category: 'Leather Goods' },
    { id: 3, name: 'Brushed Steel Chrono', price: 1800, image: watchImg, category: 'Timepieces' },
    { id: 4, name: 'Weekender Duffle', price: 4200, image: bagImg, category: 'Travel' },
    { id: 5, name: 'Classic Gold Band', price: 1250, image: watchImg, category: 'Accessories' },
    { id: 6, name: 'Executive Portfolio', price: 540, image: bagImg, category: 'Leather Goods' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-5xl font-light tracking-tight text-offblack mb-4">The Collection</h1>
          <p className="text-stone-500 font-serif italic">Hand-selected pieces for the discerning aesthetic.</p>
        </header>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-y border-stone-200 mb-16 space-y-4 sm:space-y-0 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
          <div className="flex space-x-8">
            <button className="flex items-center hover:text-gold transition-colors">
              <Filter size={14} className="mr-2" /> Show Filters
            </button>
            <span className="text-stone-200">|</span>
            <span className="text-stone-400">6 Masterpieces Found</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-stone-300">Sort by:</span>
            <button className="flex items-center text-offblack border-b border-gold pb-0.5">
              Newest Arrivals <ChevronDown size={12} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] w-full bg-white overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <a href={`/product-details`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </a>
                <div className="absolute top-6 left-6">
                  <span className="bg-gold text-white px-3 py-1.5 text-[9px] uppercase font-bold tracking-widest shadow-lg">New Arrival</span>
                </div>
                <button className="absolute bottom-0 left-0 w-full bg-offblack text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 hover:bg-gold transition-all duration-300">
                  Acquire Piece
                </button>
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold mb-2">{product.category}</p>
                <h3 className="text-lg text-offblack font-light mb-1"><a href="/product-details" className="hover:text-gold transition-colors">{product.name}</a></h3>
                <p className="text-sm text-stone-400 font-light">${product.price.toLocaleString()}.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-32 flex justify-center space-x-4">
          <button className="w-12 h-12 border border-gold flex items-center justify-center text-xs font-bold bg-gold text-white shadow-lg">1</button>
          <button className="w-12 h-12 border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400 hover:border-gold hover:text-gold transition-all">2</button>
          <button className="w-12 h-12 border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400 hover:border-gold hover:text-gold transition-all">3</button>
        </div>
      </main>
    </div>
  );
};

export default Products;
