import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop All', path: '/products' },
    { name: 'Skincare', path: '/products' },
    { name: 'About', path: '#benefits', isAnchor: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-nude/90 backdrop-blur-md z-50 border-b border-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-serif italic tracking-wide text-charcoal">Glow.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a 
                  key={link.name}
                  href={link.path} 
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500 hover:text-rose transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500 hover:text-rose transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-stone-400 hover:text-rose transition-colors hidden sm:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="text-stone-400 hover:text-rose transition-colors hidden sm:block">
              <User size={18} strokeWidth={1.5} />
            </button>
            <Link to="/cart" className="text-stone-400 hover:text-rose transition-colors relative">
              <ShoppingCart size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-rose text-charcoal text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-stone-400 hover:text-rose transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-nude border-b border-rose/20 shadow-xl py-12 px-8 space-y-8 animate-slide-down">
          <div className="flex flex-col space-y-8 items-center text-center">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal hover:text-rose transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal hover:text-rose transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-8 border-t border-rose/10 w-full flex justify-center space-x-12">
               <button className="text-stone-400 hover:text-rose"><Search size={20} /></button>
               <button className="text-stone-400 hover:text-rose"><User size={20} /></button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
