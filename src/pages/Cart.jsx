import React from 'react';
import Navbar from '../components/Navbar';
import watchImg from '../assets/watch.png';
import bagImg from '../assets/bag.png';
import { Trash2, ArrowRight, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Minimal Silver Watch', price: 249, qty: 1, image: watchImg, size: 'M' },
    { id: 2, name: 'Tan Leather Handbag', price: 385, qty: 1, image: bagImg, size: 'One Size' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-12">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart List */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex space-x-6 pb-8 border-b border-gray-100 items-start">
                <div className="w-32 aspect-[3/4] bg-gray-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                    <p className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Size: {item.size}</p>
                  
                  <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center space-x-4 text-sm font-medium">
                      <span className="text-gray-400">Qty:</span>
                      <span>{item.qty}</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <a href="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
            </a>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-8 pb-4 border-b border-gray-200">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-green-600 font-medium uppercase tracking-tighter text-xs font-bold">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tax</span>
                  <span className="text-gray-900 font-medium">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold text-gray-900 mb-8 pt-4 border-t border-gray-200">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <a href="/checkout" className="w-full flex items-center justify-center bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl group">
                Checkout <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-wider">
                Secured by 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
