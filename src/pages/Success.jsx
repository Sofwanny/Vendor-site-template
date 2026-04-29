import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { Check, ArrowRight, Package, Calendar, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const orderReference = location.state?.reference || `GLOW-${Math.floor(Math.random() * 9000000 + 1000000)}`;

  // Clear the cart when the order is successful
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-nude">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 pt-48 pb-20 flex flex-col items-center">
        {/* Success Icon */}
        <div className="relative mb-12">
          <div className="w-24 h-24 bg-rose rounded-full flex items-center justify-center text-charcoal shadow-xl animate-bounce">
            <Check size={48} strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-rose/20 rounded-full animate-ping"></div>
        </div>
        
        <header className="text-center mb-16">
          <span className="text-[10px] uppercase font-medium tracking-[0.4em] text-rose mb-4 block">Transaction Secured</span>
          <h1 className="text-5xl font-serif text-charcoal mb-6">Order Confirmed.</h1>
          <p className="text-charcoal/60 leading-relaxed font-light text-lg max-w-lg mx-auto">
            Your glow essentials are being prepared for delivery. You'll receive a confirmation email shortly.
          </p>
        </header>

        {/* Order Details Card */}
        <div className="w-full bg-white border border-rose/10 shadow-sm rounded-2xl overflow-hidden mb-16">
          <div className="p-10 border-b border-rose/10 flex flex-col md:flex-row justify-between items-center bg-rose/5">
             <div className="text-center md:text-left mb-6 md:mb-0">
               <p className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2">Order Reference</p>
               <p className="text-sm font-medium text-charcoal font-mono uppercase">{orderReference}</p>
             </div>
             <div className="text-center md:text-right">
               <p className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2">Expected Arrival</p>
               <p className="text-sm font-medium text-charcoal">3 - 5 Business Days</p>
             </div>
          </div>

          <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center px-4">
              <Package size={24} className="text-rose mb-4" strokeWidth={1.5} />
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-charcoal mb-2">Packaging</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-wider font-light">Eco-friendly & artisan care.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Calendar size={24} className="text-rose mb-4" strokeWidth={1.5} />
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-charcoal mb-2">Dispatch</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-wider font-light">Shipped within 24 hours.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <ShieldCheck size={24} className="text-rose mb-4" strokeWidth={1.5} />
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-charcoal mb-2">Protection</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-wider font-light">Fully insured transit.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Link to="/products" className="flex-1 bg-charcoal text-white text-center py-5 text-[10px] font-medium uppercase tracking-[0.3em] rounded-xl hover:bg-rose hover:text-charcoal transition-all shadow-xl flex items-center justify-center group">
            Shop More <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/" className="flex-1 border border-rose/20 text-charcoal text-center py-5 text-[10px] font-medium uppercase tracking-[0.3em] rounded-xl hover:bg-rose/10 transition-all bg-white">
            Return Home
          </Link>
        </div>

        <p className="mt-20 text-[9px] text-stone-400 uppercase tracking-[0.4em] font-medium text-center">
          Inquiries? <Link to="#" className="text-rose hover:underline">Chat with us</Link>
        </p>
      </main>
    </div>
  );
};

export default Success;
