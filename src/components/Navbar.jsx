import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full bg-cream/90 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight text-offblack border-2 border-gold px-3 py-1">VOGUE</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 items-center">
            <a href="/" className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-500 hover:text-gold transition-colors">Home</a>
            <a href="/products" className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-500 hover:text-gold transition-colors">Shop</a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-500 hover:text-gold transition-colors">Curated</a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.3em] text-stone-500 hover:text-gold transition-colors">House</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-stone-400 hover:text-gold transition-colors">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="text-stone-400 hover:text-gold transition-colors">
              <User size={18} strokeWidth={1.5} />
            </button>
            <a href="/cart" className="text-stone-400 hover:text-gold transition-colors relative">
              <ShoppingCart size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </a>
            <button className="md:hidden text-stone-400 hover:text-gold transition-colors">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
