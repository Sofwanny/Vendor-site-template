import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ArrowLeft, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, total, deliveryFee } = useCart();

  const formatPrice = (price) => `$${(price / 1000).toFixed(2)}`;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-nude">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-48 pb-20 text-center">
          <h1 className="text-4xl font-serif text-charcoal mb-6">Your collection is empty</h1>
          <p className="text-stone-400 mb-12 font-light">Discover our curated pieces and start your glow routine.</p>
          <Link to="/products" className="px-10 py-5 bg-charcoal text-white text-[10px] font-medium uppercase tracking-[0.2em] rounded-xl hover:bg-rose transition-all shadow-lg">
            Explore Collection
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nude">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-3xl font-serif text-charcoal mb-12">Shopping Collection</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart List */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex space-x-8 pb-8 border-b border-rose/10 items-start">
                <div className="w-32 aspect-[4/5] bg-white flex-shrink-0 shadow-sm rounded-xl overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow pt-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-charcoal">{item.name}</h3>
                      <p className="text-[10px] text-rose mt-1 uppercase font-medium tracking-widest">{item.category}</p>
                    </div>
                    <p className="text-lg font-medium text-charcoal">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-12">
                    <div className="flex items-center border border-rose/20 px-4 py-2 bg-white rounded-xl">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-stone-400 hover:text-charcoal transition-colors"><Minus size={14} /></button>
                      <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-stone-400 hover:text-charcoal transition-colors"><Plus size={14} /></button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-rose transition-colors flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest"
                    >
                      <Trash2 size={16} strokeWidth={1.5} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link to="/products" className="inline-flex items-center text-[10px] font-medium uppercase tracking-widest text-stone-400 hover:text-rose transition-colors group">
              <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-2 transition-transform" /> Continue Acquiring
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-2xl shadow-sm sticky top-32 border border-rose/10">
              <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal mb-10 pb-4 border-b border-rose/10">Order Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400 font-light">Subtotal</span>
                  <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400 font-light">Delivery Fee</span>
                  <span className="text-charcoal font-medium">{formatPrice(deliveryFee)}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-serif text-charcoal mb-10 pt-6 border-t border-rose/10">
                <span>Total</span>
                <span className="text-rose">{formatPrice(total)}</span>
              </div>

              <Link to="/checkout" className="w-full flex items-center justify-center bg-charcoal text-white py-5 text-[10px] font-medium uppercase tracking-[0.3em] rounded-xl hover:bg-rose transition-all shadow-xl group">
                Proceed to Checkout <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>

              <div className="mt-8 flex items-center justify-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-[9px] text-stone-400 uppercase font-medium tracking-widest">Secure SSL Encrypted Connection</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
