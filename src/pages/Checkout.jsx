import React from 'react';
import Navbar from '../components/Navbar';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Checkout Form */}
          <div className="flex-[2]">
            <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-12">Secure Checkout</h1>
            
            <form className="space-y-12">
              {/* Contact Information */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">1</span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black" />
                    <label htmlFor="newsletter" className="text-xs text-gray-500">Keep me updated on news and exclusive offers</label>
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">2</span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Shipping Address</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input type="text" placeholder="Last Name" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input type="text" placeholder="Address" className="col-span-2 border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className="col-span-2 border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input type="text" placeholder="City" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input type="text" placeholder="Postal Code" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
              </section>

              {/* Payment */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">3</span>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Payment Details</h2>
                </div>
                <div className="border border-black p-6 bg-gray-50/50">
                   <div className="flex justify-between items-center mb-6">
                     <span className="text-sm font-medium">Credit Card</span>
                     <CreditCard size={20} />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <input type="text" placeholder="Card Number" className="col-span-2 border border-gray-200 p-4 text-sm focus:outline-none focus:border-black bg-white" />
                     <input type="text" placeholder="Expiration (MM/YY)" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-black bg-white" />
                     <input type="text" placeholder="Security Code" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-black bg-white" />
                   </div>
                </div>
              </section>

              <a href="/success" className="block w-full text-center bg-black text-white py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-2xl">
                Pay and Complete Order
              </a>
            </form>
          </div>

          {/* Checkout Info Sidebar */}
          <div className="flex-1 space-y-12">
             <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Order Total</h3>
                <div className="flex justify-between text-2xl font-bold text-gray-900 mb-2">
                  <span>USD</span>
                  <span>$634.00</span>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Inclusive of taxes and fees</p>
             </div>

             <div className="space-y-6 px-4">
                <div className="flex space-x-4">
                  <Truck size={20} className="text-gray-900 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-1">Express Delivery</h4>
                    <p className="text-xs text-gray-500">Free delivery worldwide. Estimated arrival: 2-3 business days.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <ShieldCheck size={20} className="text-gray-900 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-1">Secure Checkout</h4>
                    <p className="text-xs text-gray-500">Your transaction is fully encrypted and secure. We never store credit card info.</p>
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
