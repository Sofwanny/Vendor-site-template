import React from 'react';
import Navbar from '../components/Navbar';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-20 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-8 border border-green-100">
          <CheckCircle size={40} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-4xl font-light tracking-tight text-offblack mb-4">Order Confirmed</h1>
        <p className="text-stone-400 max-w-md mx-auto mb-12">
          Thank you for your purchase. We've sent a confirmation email to <span className="text-offblack font-medium">customer@example.com</span> with your order details.
        </p>

        <div className="bg-white p-8 rounded-lg max-w-sm w-full mb-12 shadow-sm border border-stone-100">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-stone-100">
             <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Order Number</span>
             <span className="text-sm font-bold text-offblack">#VG-8829410</span>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Estimated Delivery</span>
             <span className="text-sm font-bold text-offblack">April 14, 2026</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/products" className="px-10 py-4 bg-offblack text-white text-sm font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-xl flex items-center">
            Continue Shopping <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link to="#" className="px-10 py-4 border border-stone-200 text-offblack text-sm font-bold uppercase tracking-widest hover:border-gold transition-all">
            Track My Order
          </Link>
        </div>

        <p className="mt-24 text-[10px] text-stone-400 uppercase tracking-[0.3em]">
          Need help? <Link to="#" className="text-offblack hover:underline">Contact our concierge</Link>
        </p>
      </main>
    </div>
  );
};

export default Success;
