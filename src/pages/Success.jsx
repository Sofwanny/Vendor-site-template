import React from 'react';
import Navbar from '../components/Navbar';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-20 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-8 border border-green-100">
          <CheckCircle size={40} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-4">Order Confirmed</h1>
        <p className="text-gray-500 max-w-md mx-auto mb-12">
          Thank you for your purchase. We've sent a confirmation email to <span className="text-black font-medium">customer@example.com</span> with your order details.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg max-w-sm w-full mb-12">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Order Number</span>
             <span className="text-sm font-bold text-gray-900">#VG-8829410</span>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Estimated Delivery</span>
             <span className="text-sm font-bold text-gray-900">April 14, 2026</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/products" className="px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl flex items-center">
            Continue Shopping <ArrowRight size={18} className="ml-2" />
          </a>
          <a href="#" className="px-10 py-4 border border-gray-200 text-gray-900 text-sm font-bold uppercase tracking-widest hover:border-black transition-all">
            Track My Order
          </a>
        </div>

        <p className="mt-24 text-[10px] text-gray-400 uppercase tracking-[0.3em]">
          Need help? <a href="#" className="text-black hover:underline">Contact our concierge</a>
        </p>
      </main>
    </div>
  );
};

export default Success;
