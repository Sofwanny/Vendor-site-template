import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import watchImg from '../assets/watch.png';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
              <img src={watchImg} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 cursor-pointer border hover:border-black overflow-hidden">
                  <img src={watchImg} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <nav className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-widest mb-6">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/products">Accessories</a>
              <span>/</span>
              <span className="text-gray-900">Minimal Silver Watch</span>
            </nav>

            <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">Minimal Silver Watch</h1>
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-2xl text-gray-900">$249.00</span>
              <span className="text-sm text-gray-400 line-through">$320.00</span>
              <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Sale 20% Off</span>
            </div>

            <p className="text-gray-500 leading-relaxed mb-8">
              A masterclass in restraint. This timepiece features a brushed silver-tone case, sapphire crystal glass, and a premium Italian leather strap that develops a unique patina over time.
            </p>

            <div className="space-y-8 mb-10 pb-10 border-b border-gray-100">
              {/* Size Select */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4 block">Select Size</span>
                <div className="flex space-x-3">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border flex items-center justify-center text-sm transition-all ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-gray-200 px-4 py-3">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="text-gray-400 hover:text-black transition-colors"><Minus size={16} /></button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-black transition-colors"><Plus size={16} /></button>
                </div>
                
                <button className="flex-grow bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg">
                  Add to Cart
                </button>
                
                <button className="p-4 border border-gray-200 hover:border-black transition-all">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Share2 size={16} className="mr-3" /> <span className="underline cursor-pointer hover:text-black transition-colors">Share this product</span>
              </div>
            </div>

            {/* Accodion Details */}
            <div className="mt-12 space-y-4">
               <details className="group border-b border-gray-100 pb-4" open>
                <summary className="list-none flex justify-between items-center cursor-pointer text-xs font-bold uppercase tracking-widest text-gray-900">
                  Product Features
                  <Plus size={14} className="group-open:hidden" />
                  <Minus size={14} className="hidden group-open:block" />
                </summary>
                <div className="mt-4 text-sm text-gray-500 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Japanese Quartz Movement</li>
                    <li>316L Stainless Steel Case</li>
                    <li>Water Resistance: 5 ATM</li>
                    <li>Strap Width: 20mm</li>
                  </ul>
                </div>
               </details>
               <details className="group border-b border-gray-100 pb-4">
                <summary className="list-none flex justify-between items-center cursor-pointer text-xs font-bold uppercase tracking-widest text-gray-900">
                  Shipping & Returns
                  <Plus size={14} className="group-open:hidden" />
                  <Minus size={14} className="hidden group-open:block" />
                </summary>
                <div className="mt-4 text-sm text-gray-500 leading-relaxed">
                  Free standard shipping on all orders over $150. Easy returns within 30 days of purchase.
                </div>
               </details>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
