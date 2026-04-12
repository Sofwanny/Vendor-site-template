import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';

const Checkout = () => {
  const { total, subtotal, deliveryFee } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  });
  const navigate = useNavigate();

  // Paystack Configuration
  const config = {
    reference: (new Date()).getTime().toString(),
    email: formData.email,
    amount: total * 100, // Amount in KOBO
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSuccess = (reference) => {
    console.log("Payment Successful", reference);
    setIsProcessing(false);
    navigate('/success');
  };

  const onClose = () => {
    console.log("Payment Closed");
    setIsProcessing(false);
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Trigger Paystack Gateway
    initializePayment(onSuccess, onClose);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Checkout Form */}
          <div className="flex-[2]">
            <h1 className="text-4xl font-light tracking-tight text-offblack mb-16">Secure Checkout</h1>
            
            <form className="space-y-16" onSubmit={handleSubmit}>
              {/* Contact Information */}
              <section>
                <div className="flex items-center space-x-4 mb-8">
                  <span className="w-10 h-10 rounded-full border border-gold text-gold flex items-center justify-center text-xs font-bold">01</span>
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-offblack">Identity & Contact</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2 ml-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Samuel Adekunle" 
                      className="w-full bg-white border border-stone-100 p-5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2 ml-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="samuel@example.com" 
                      className="w-full bg-white border border-stone-100 p-5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2 ml-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 800 000 0000" 
                      className="w-full bg-white border border-stone-100 p-5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm" 
                    />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <div className="flex items-center space-x-4 mb-8">
                  <span className="w-10 h-10 rounded-full border border-gold text-gold flex items-center justify-center text-xs font-bold">02</span>
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-offblack">Delivery Destination</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                   <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2 ml-1">Shipping Address</label>
                    <textarea 
                      required 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3" 
                      placeholder="Street name, Building number, Apartment" 
                      className="w-full bg-white border border-stone-100 p-5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm resize-none"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2 ml-1">City</label>
                      <input 
                        required 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Lagos" 
                        className="w-full bg-white border border-stone-100 p-5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-2 ml-1">State</label>
                      <input 
                        required 
                        type="text" 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Lagos State" 
                        className="w-full bg-white border border-stone-100 p-5 text-sm focus:outline-none focus:border-gold transition-colors shadow-sm" 
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Section */}
              <section>
                <div className="flex items-center space-x-4 mb-8">
                  <span className="w-10 h-10 rounded-full border border-gold text-gold flex items-center justify-center text-xs font-bold">03</span>
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-offblack">Payment Method</h2>
                </div>
                <div className="border border-gold p-8 bg-white shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16"></div>
                   <div className="flex justify-between items-center mb-10 relative z-10">
                     <span className="text-sm font-bold tracking-widest uppercase text-offblack">Paystack Secure Checkout</span>
                     <CreditCard size={24} className="text-gold" />
                   </div>
                   <p className="text-[10px] text-stone-400 leading-relaxed max-w-sm mb-0 relative z-10 font-bold tracking-[0.2em] uppercase">
                     Secured Channel • Encrypted Transaction
                   </p>
                </div>
              </section>

              <button 
                type="submit"
                disabled={isProcessing || total === 0}
                className="w-full bg-offblack text-white py-6 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-gold transition-all shadow-2xl relative flex items-center justify-center group"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-3">
                    <Loader2 size={18} className="animate-spin" /> Waiting for Gateway...
                  </div>
                ) : (
                  <>
                    Authorize Payment ₦{total.toLocaleString()} <ArrowRight size={18} className="inline ml-3 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Checkout Info Sidebar */}
          <div className="flex-1 space-y-10">
             <div className="bg-white p-10 rounded-lg shadow-sm border border-stone-100 sticky top-32">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 border-b border-stone-100 pb-4">Investment Summary</h3>
                
                <div className="space-y-4 mb-10">
                   <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Items Total</span>
                      <span className="font-bold font-serif italic text-lg opacity-80">₦{subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-stone-400">Delivery</span>
                      <span className="font-bold font-serif italic text-lg opacity-80">₦{deliveryFee.toLocaleString()}</span>
                   </div>
                </div>

                <div className="flex justify-between text-3xl font-bold text-offblack mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold self-end mb-2">Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <p className="text-[9px] text-stone-300 uppercase tracking-widest font-bold text-right pt-2 border-t border-stone-100">Nigerian Naira (NGN)</p>
                
                <div className="mt-12 space-y-8">
                  <div className="flex space-x-5">
                    <Truck size={20} className="text-gold flex-shrink-0" />
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-offblack mb-1">Express Concierge</h4>
                      <p className="text-[10px] text-stone-400 leading-relaxed uppercase tracking-wider">Arrival: 2-4 business days.</p>
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <ShieldCheck size={20} className="text-gold flex-shrink-0" />
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-offblack mb-1">Guaranteed Authenticity</h4>
                      <p className="text-[10px] text-stone-400 leading-relaxed uppercase tracking-wider">Every piece comes with a certificate.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
