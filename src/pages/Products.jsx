import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter, ChevronDown } from 'lucide-react';

const Products = () => {

  return (
    <div className="min-h-screen bg-nude">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="mb-16 text-center">
          <span className="text-[10px] uppercase font-medium tracking-[0.3em] text-rose mb-4 inline-block">Explore Our World</span>
          <h1 className="text-5xl font-serif text-charcoal mb-4">The Collection</h1>
          <div className="h-[1px] w-12 bg-rose/30 mx-auto"></div>
        </header>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-y border-rose/10 mb-16 space-y-4 sm:space-y-0 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
          <div className="flex space-x-8">
            <button className="flex items-center hover:text-blush transition-colors">
              <Filter size={14} className="mr-2" /> Show Filters
            </button>
            <span className="text-rose/20">|</span>
            <span className="text-stone-400">{products.length} Products Found</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-stone-300">Sort by:</span>
            <button className="flex items-center text-charcoal border-b border-rose/30 pb-0.5 hover:border-rose transition-colors">
              Newest Arrivals <ChevronDown size={12} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-32 flex justify-center space-x-4">
          <button className="w-12 h-12 border border-rose/30 rounded-xl flex items-center justify-center text-xs font-medium bg-blush text-charcoal shadow-sm">1</button>
          <button className="w-12 h-12 border border-rose/10 rounded-xl flex items-center justify-center text-xs font-medium text-stone-400 hover:border-rose hover:text-rose transition-all">2</button>
          <button className="w-12 h-12 border border-rose/10 rounded-xl flex items-center justify-center text-xs font-medium text-stone-400 hover:border-rose hover:text-rose transition-all">3</button>
        </div>
      </main>
    </div>
  );
};

export default Products;
