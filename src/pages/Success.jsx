import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { Check, ArrowRight, Package, Calendar, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
  const { clearCart } = useCart();

  // Clear the cart when the order is successful
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 pt-48 pb-20 flex flex-col items-center">
        {/* Animated Success Icon */}
        <div className="relative mb-12">
          <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
            <Check size={48} strokeWidth={3} />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-gold/20 rounded-full animate-ping"></div>
        </div>
        
        <header className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold mb-4 block">Transaction Secured</span>
          <h1 className="text-5xl font-light tracking-tight text-offblack mb-6">Order Confirmed.</h1>
          <p className="text-stone-500 font-serif italic text-lg max-w-lg mx-auto leading-relaxed">
            Your selection has been curated and is being prepared for delivery. Expect a confirmation email shortly.
          </p>
        </header>

        {/* Order Details Card */}
        <div className="w-full bg-white border border-stone-100 shadow-xl overflow-hidden mb-16">
          <div className="p-10 border-b border-stone-100 flex flex-col md:flex-row justify-between items-center bg-stone-50/50">
             <div className="text-center md:text-left mb-6 md:mb-0">
               <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Order Reference</p>
               <p className="text-sm font-bold text-offblack font-mono">#VG-{Math.floor(Math.random() * 9000000 + 1000000)}</p>
             </div>
             <div className="text-center md:text-right">
               <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Expected Arrival</p>
               <p className="text-sm font-bold text-offblack">3 - 5 Business Days</p>
             </div>
          </div>

          <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center px-4">
              <Package size={24} className="text-gold mb-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-offblack mb-2">Curation</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-wider">Hand-packed with artisan care.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Calendar size={24} className="text-gold mb-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-offblack mb-2">Dispatch</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-wider">Shipped within 24 hours.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <ShieldCheck size={24} className="text-gold mb-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-offblack mb-2">Protection</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-wider">Fully insured worldwide.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Link to="/products" className="flex-1 bg-offblack text-white text-center py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all shadow-2xl flex items-center justify-center group">
            Continue Collection <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/" className="flex-1 border border-stone-200 text-offblack text-center py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-all bg-white">
            Return Home
          </Link>
        </div>

        <p className="mt-20 text-[9px] text-stone-400 uppercase tracking-[0.4em] font-bold text-center">
          Inquiries? <Link to="#" className="text-gold hover:underline">Connect with our concierge</Link>
        </p>
      </main>
    </div>
  );
};

export default Success;
