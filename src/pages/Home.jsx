import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import heroImg from '../assets/hero.png';
import watchImg from '../assets/watch.png';
import bagImg from '../assets/bag.png';
import { ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Minimalist Silver Watch', price: 24900, stock: 3, image: watchImg, category: 'Timepieces' },
    { id: 2, name: 'Signature Tan Handbag', price: 38500, stock: 12, image: bagImg, category: 'Leather Goods' },
    { id: 3, name: 'Brushed Steel Chrono', price: 18000, stock: 1, image: watchImg, category: 'Timepieces' },
    { id: 4, name: 'Weekender Duffle', price: 42000, stock: 0, image: bagImg, category: 'Travel' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Luxury Ready-to-Wear" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-white/80 mb-6">Exclusively Curated</span>
            <h1 className="text-6xl md:text-9xl font-light tracking-tight text-white mb-8 leading-none">
              Luxury <br /> <span className="font-serif italic">Ready-to-Wear</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-md font-light leading-relaxed">
              Limited Drop Now Live. Experience the intersection of traditional craftsmanship and contemporary silhouette.
            </p>
            <div className="flex space-x-6">
              <a href="/products" className="px-10 py-5 bg-gold text-white text-sm font-bold uppercase tracking-widest hover:bg-[#A68554] transition-all flex items-center shadow-2xl group">
                Shop Collection <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Playful Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
           <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-4">Scroll</span>
           <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"></div>
           </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-offblack mb-4">Signature Pieces</h2>
          <p className="text-gold font-serif italic text-lg">Hand-selected for the discerning individual</p>
          <div className="h-[1px] w-20 bg-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-24 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-gold mb-6 mb- shadow-sm">
                <ShieldCheck size={28} strokeWidth={1} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-offblack mb-3">Secure Payment</h4>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">Your data is encrypted and protected by industry-leading security protocols.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-gold mb-6 shadow-sm">
                <Truck size={28} strokeWidth={1} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-offblack mb-3">Fast Delivery</h4>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">Complementary express worldwide shipping on all orders over $500.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-gold mb-6 shadow-sm">
                <Award size={28} strokeWidth={1} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-offblack mb-3">Authentic Pieces</h4>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">Every item is verified by our specialists to ensure total authenticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <span className="text-2xl font-bold tracking-tight text-offblack border-2 border-gold px-3 py-1">VOGUE</span>
          <div className="flex space-x-12 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">
             <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-gold transition-colors">Shipping</a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">© 2026 VOGUE Luxury Group</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
