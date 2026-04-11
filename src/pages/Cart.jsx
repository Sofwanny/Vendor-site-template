import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ArrowLeft, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, total, deliveryFee } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-48 pb-20 text-center">
          <h1 className="text-4xl font-light text-offblack mb-6">Your collection is empty</h1>
          <p className="text-stone-400 mb-12">Discover our curated pieces and start your collection.</p>
          <a href="/products" className="px-10 py-5 bg-offblack text-white text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-xl">
            Explore Collection
          </a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-3xl font-light tracking-tight text-offblack mb-12">Shopping Collection</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart List */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex space-x-8 pb-8 border-b border-stone-100 items-start">
                <div className="w-32 aspect-[3/4] bg-white flex-shrink-0 shadow-sm">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow pt-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-offblack">{item.name}</h3>
                      <p className="text-[10px] text-gold mt-1 uppercase font-bold tracking-widest">{item.category}</p>
                    </div>
                    <p className="text-lg font-bold text-offblack">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-12">
                    <div className="flex items-center border border-stone-200 px-4 py-2 bg-white">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-stone-400 hover:text-offblack transition-colors"><Minus size={14} /></button>
                      <span className="w-12 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-stone-400 hover:text-offblack transition-colors"><Plus size={14} /></button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <a href="/products" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-offblack transition-colors group">
              <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-2 transition-transform" /> Continue Acquiring
            </a>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-lg shadow-sm sticky top-32 border border-stone-100">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-offblack mb-10 pb-4 border-b border-stone-100">Order Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400 font-medium">Subtotal</span>
                  <span className="text-offblack font-bold">₦{subtotal.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400 font-medium">Delivery Fee</span>
                  <span className="text-offblack font-bold">₦{deliveryFee.toLocaleString()}.00</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-offblack mb-10 pt-6 border-t border-stone-100">
                <span>Total</span>
                <span className="text-gold">₦{total.toLocaleString()}.00</span>
              </div>

              <a href="/checkout" className="w-full flex items-center justify-center bg-offblack text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all shadow-2xl group">
                Proceed to Checkout <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="mt-8 flex items-center justify-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-[9px] text-stone-400 uppercase font-bold tracking-widest">Secure SSL Encrypted Connection</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
