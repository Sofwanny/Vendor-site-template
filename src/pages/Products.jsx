import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import watchImg from '../assets/watch.png';
import bagImg from '../assets/bag.png';
import { Filter, ChevronDown } from 'lucide-react';

const Products = () => {
  const products = [
    { id: 1, name: 'Dubai Satin Abaya', price: 45000, stock: 3, image: watchImg, category: 'Apparel' },
    { id: 2, name: 'Signature Tan Handbag', price: 38500, stock: 12, image: bagImg, category: 'Leather Goods' },
    { id: 3, name: 'Brushed Steel Chrono', price: 18000, stock: 1, image: watchImg, category: 'Timepieces' },
    { id: 4, name: 'Weekender Duffle', price: 42000, stock: 0, image: bagImg, category: 'Travel' },
    { id: 5, name: 'Classic Gold Band', price: 12500, stock: 5, image: watchImg, category: 'Accessories' },
    { id: 6, name: 'Executive Portfolio', price: 54000, stock: 2, image: bagImg, category: 'Leather Goods' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-5xl font-light tracking-tight text-offblack mb-4">The Collection</h1>
          <p className="text-stone-500 font-serif italic text-lg">Hand-selected pieces for the discerning aesthetic.</p>
        </header>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-y border-stone-200 mb-16 space-y-4 sm:space-y-0 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
          <div className="flex space-x-8">
            <button className="flex items-center hover:text-gold transition-colors">
              <Filter size={14} className="mr-2" /> Show Filters
            </button>
            <span className="text-stone-200">|</span>
            <span className="text-stone-400">{products.length} Masterpieces Found</span>
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
            <ProductCard key={product.id} product={product} />
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
