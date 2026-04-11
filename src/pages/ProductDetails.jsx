import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import watchImg from '../assets/watch.png';
import { Minus, Plus, Heart, Share2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isAdded, setIsAdded] = useState(false);

  // Example product - in a real app this would come from a slug/ID
  const product = {
    id: 1,
    name: 'Dubai Satin Abaya',
    price: 45000,
    stock: 3,
    image: watchImg,
    category: 'Apparel'
  };

  const handleAddToCart = () => {
    // Add multiple quantities
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-white overflow-hidden shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white cursor-pointer border border-stone-100 hover:border-gold transition-all overflow-hidden shadow-sm">
                  <img src={product.image} alt={`Thumbnail ${i}`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4">
            <nav className="flex items-center space-x-3 text-[10px] text-stone-400 uppercase font-bold tracking-[0.3em] mb-10">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="text-stone-200">/</span>
              <Link to="/products" className="hover:text-gold transition-colors">{product.category}</Link>
              <span className="text-stone-200">/</span>
              <span className="text-offblack">{product.name}</span>
            </nav>

            <h1 className="text-5xl font-light tracking-tight text-offblack mb-4">{product.name}</h1>
            <div className="flex items-center space-x-6 mb-12">
              <span className="text-3xl font-bold text-offblack">₦{product.price.toLocaleString()}</span>
              {product.stock <= 3 && (
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] border border-gold px-3 py-1 animate-pulse">
                  Limited: Only {product.stock} Left
                </span>
              )}
            </div>

            <p className="text-stone-500 leading-relaxed mb-12 font-serif italic text-lg opacity-80">
              A masterclass in restraint and luxury. This piece is crafted from premium satin silk, offering a silhouette that is both timeless and contemporary.
            </p>

            <div className="space-y-12 mb-12 pb-12 border-b border-stone-100">
              {/* Size Select */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-offblack mb-6 block">Size Specification</span>
                <div className="flex space-x-4">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border flex items-center justify-center text-xs font-bold transition-all ${selectedSize === size ? 'border-offblack bg-offblack text-white shadow-xl' : 'border-stone-200 text-stone-400 hover:border-gold hover:text-gold'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center border border-stone-200 px-6 py-4 bg-white w-full sm:w-auto justify-between">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="text-stone-400 hover:text-offblack transition-colors"><Minus size={18} /></button>
                  <span className="w-16 text-center text-sm font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-stone-400 hover:text-offblack transition-colors"><Plus size={18} /></button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-grow w-full py-5 text-[11px] font-bold uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3 shadow-2xl relative overflow-hidden
                    ${isAdded ? 'bg-green-600 text-white' : 'bg-offblack text-white hover:bg-gold transform active:scale-[0.98]'}`}
                >
                  {isAdded ? (
                    '✓ Added to Collection'
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Acquire Piece
                    </>
                  )}
                </button>
                
                <button className="p-5 border border-stone-200 text-stone-400 hover:text-gold hover:border-gold transition-all bg-white shadow-sm">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400">
                <Share2 size={16} className="mr-3 text-gold" /> <span className="underline cursor-pointer hover:text-offblack transition-colors">Share this curation</span>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="mt-16 space-y-2">
               <details className="group border-b border-stone-100 pb-6" open>
                <summary className="list-none flex justify-between items-center cursor-pointer text-[10px] font-bold uppercase tracking-[0.3em] text-offblack">
                  Craftsmanship Details
                  <Plus size={14} className="group-open:hidden text-gold" />
                  <Minus size={14} className="hidden group-open:block text-gold" />
                </summary>
                <div className="mt-6 text-sm text-stone-500 leading-relaxed space-y-3 font-light">
                   <p>• Premium Heavyweight Satin Silk</p>
                   <p>• Hand-finished seams and hems</p>
                   <p>• Breathable structural lining</p>
                   <p>• Responsibly sourced materials</p>
                </div>
               </details>
               <details className="group border-b border-stone-100 py-6">
                <summary className="list-none flex justify-between items-center cursor-pointer text-[10px] font-bold uppercase tracking-[0.3em] text-offblack">
                  Concierge & Delivery
                  <Plus size={14} className="group-open:hidden text-gold" />
                  <Minus size={14} className="hidden group-open:block text-gold" />
                </summary>
                <div className="mt-6 text-sm text-stone-500 leading-relaxed font-light">
                  Complimentary express worldwide shipping. Delivery within 2-4 business days. Secure insurance included on all high-value curations.
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
