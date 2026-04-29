import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Minus, Plus, Heart, Share2, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Use the first product from our data array
  const product = products[0];

  const formatPrice = (price) => `$${(price / 1000).toFixed(2)}`;

  const handleAddToCart = () => {
    // Add multiple quantities
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-nude">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-white overflow-hidden shadow-sm rounded-2xl border border-rose/10">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white cursor-pointer border border-rose/10 hover:border-rose transition-all overflow-hidden shadow-sm rounded-xl">
                  <img src={product.image} alt={`Thumbnail ${i}`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4">
            <nav className="flex items-center space-x-3 text-[10px] text-stone-400 uppercase font-medium tracking-[0.2em] mb-10">
              <Link to="/" className="hover:text-rose transition-colors">Home</Link>
              <span className="text-rose/20">/</span>
              <Link to="/products" className="hover:text-rose transition-colors">{product.category}</Link>
              <span className="text-rose/20">/</span>
              <span className="text-charcoal">{product.name}</span>
            </nav>

            <h1 className="text-5xl font-serif text-charcoal mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-10">
              <div className="flex text-rose">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs text-stone-400 font-light">(48 Reviews)</span>
            </div>

            <div className="flex items-center space-x-6 mb-12">
              <span className="text-3xl font-medium text-charcoal">{formatPrice(product.price)}</span>
              {product.stock <= 3 && (
                <span className="text-[10px] font-medium text-rose uppercase tracking-[0.2em] border border-rose/30 px-3 py-1 rounded-full animate-pulse">
                  Limited: Only {product.stock} Left
                </span>
              )}
            </div>

            <p className="text-charcoal/70 leading-relaxed mb-12 font-light text-lg">
              Experience the pinnacle of clean beauty. Formulated with ethically sourced, naturally derived actives, this treatment delivers transformative results while respecting your skin's delicate balance.
            </p>

            <div className="space-y-12 mb-12 pb-12 border-b border-rose/10">
              {/* Quantity and Actions */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center border border-rose/20 px-6 py-4 bg-white w-full sm:w-auto justify-between rounded-xl">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="text-stone-400 hover:text-charcoal transition-colors"><Minus size={18} /></button>
                  <span className="w-16 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-stone-400 hover:text-charcoal transition-colors"><Plus size={18} /></button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-grow w-full py-5 text-xs font-medium uppercase tracking-[0.3em] rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl relative overflow-hidden
                    ${isAdded ? 'bg-rose text-charcoal' : 'bg-charcoal text-white hover:bg-rose hover:text-charcoal transform active:scale-[0.98]'}`}
                >
                  {isAdded ? (
                    '✓ Added to Bag'
                  ) : (
                    <>
                      <ShoppingBag size={18} strokeWidth={1.5} />
                      Add to Bag
                    </>
                  )}
                </button>
                
                <button className="p-5 border border-rose/10 text-stone-400 hover:text-rose hover:border-rose transition-all bg-white shadow-sm rounded-xl">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-[10px] font-medium uppercase tracking-widest text-stone-400">
                <Share2 size={16} className="mr-3 text-rose" strokeWidth={1.5} /> <span className="underline cursor-pointer hover:text-rose transition-colors">Share this discovery</span>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="mt-16 space-y-2">
               <details className="group border-b border-rose/10 pb-6" open>
                <summary className="list-none flex justify-between items-center cursor-pointer text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal">
                  Ingredients & Benefits
                  <Plus size={14} className="group-open:hidden text-rose" />
                  <Minus size={14} className="hidden group-open:block text-rose" />
                </summary>
                <div className="mt-6 text-sm text-stone-500 leading-relaxed space-y-3 font-light">
                   <p>• 100% Vegan & Cruelty-Free</p>
                   <p>• Paraben & Sulfate Free</p>
                   <p>• Dermatologically Tested</p>
                   <p>• Sustainable Packaging</p>
                </div>
               </details>
               <details className="group border-b border-rose/10 py-6">
                <summary className="list-none flex justify-between items-center cursor-pointer text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal">
                  Shipping & Returns
                  <Plus size={14} className="group-open:hidden text-rose" />
                  <Minus size={14} className="hidden group-open:block text-rose" />
                </summary>
                <div className="mt-6 text-sm text-stone-500 leading-relaxed font-light">
                  Complimentary worldwide delivery on all orders. Returns are accepted within 30 days of purchase for unused products in their original packaging.
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
