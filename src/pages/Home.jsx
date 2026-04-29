import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import heroImg from '../assets/skincare-hero.png';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Truck, Sparkles, Star } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-nude selection:bg-rose/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-nude">
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-full md:w-3/5 h-full relative">
            <img 
              src={heroImg} 
              alt="Premium Skincare" 
              className="w-full h-full object-cover object-center"
            />
            {/* Soft gradient overlay to blend image into the nude background */}
            <div className="absolute inset-0 bg-gradient-to-r from-nude via-nude/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-nude/20 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
          <div className="max-w-xl md:bg-transparent rounded-2xl md:p-0 p-6 backdrop-blur-sm md:backdrop-blur-none border border-white/40 md:border-none">
            <span className="inline-block text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase text-rose mb-6">The New Standard</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-charcoal mb-6 leading-[1.1]">
              Glow Starts <br /> <span className="italic text-rose/90">Here.</span>
            </h1>
            <p className="text-base md:text-lg text-charcoal/70 mb-10 max-w-md font-light leading-relaxed">
              Premium skincare designed for confident women who love effortless beauty. Clean, potent, and purely luxurious.
            </p>
            <div className="flex">
              <Link to="/products" className="px-8 py-4 bg-blush/80 hover:bg-blush text-charcoal text-xs font-medium uppercase tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center shadow-sm hover:shadow-md group w-full sm:w-auto justify-center">
                Shop The Glow Collection <ArrowRight size={16} strokeWidth={1.5} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-nude rounded-2xl flex items-center justify-center text-rose mb-6 group-hover:scale-105 transition-transform duration-500">
                <Leaf size={28} strokeWidth={1.2} />
              </div>
              <h4 className="text-sm font-serif text-charcoal mb-3 text-lg">Clean Ingredients</h4>
              <p className="text-sm text-charcoal/60 max-w-xs leading-relaxed font-light">Ethically sourced, naturally derived actives that nourish your skin without compromise.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-nude rounded-2xl flex items-center justify-center text-rose mb-6 group-hover:scale-105 transition-transform duration-500">
                <Truck size={28} strokeWidth={1.2} />
              </div>
              <h4 className="text-sm font-serif text-charcoal mb-3 text-lg">Fast Delivery</h4>
              <p className="text-sm text-charcoal/60 max-w-xs leading-relaxed font-light">Complimentary expedited shipping on all domestic orders to keep your glow routine uninterrupted.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-nude rounded-2xl flex items-center justify-center text-rose mb-6 group-hover:scale-105 transition-transform duration-500">
                <Sparkles size={28} strokeWidth={1.2} />
              </div>
              <h4 className="text-sm font-serif text-charcoal mb-3 text-lg">Visible Results</h4>
              <p className="text-sm text-charcoal/60 max-w-xs leading-relaxed font-light">Clinically tested formulations designed to enhance your natural radiance from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-24 bg-nude">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] uppercase font-medium tracking-[0.3em] text-rose mb-4">Curated For You</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">The Essentials</h2>
            <div className="h-[1px] w-12 bg-rose/30"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link to="/products" className="px-10 py-4 border border-rose/30 text-charcoal text-xs font-medium uppercase tracking-[0.2em] rounded-xl hover:bg-rose/10 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Loved by our community</h2>
            <div className="h-[1px] w-12 bg-rose/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "My skin has never felt softer or looked brighter. The Glow Serum is an absolute game changer in my daily routine.", author: "Sarah M.", role: "Beauty Editor" },
              { text: "Finally, a skincare line that perfectly balances luxury and clean ingredients. The aesthetic alone makes me happy every morning.", author: "Emily R.", role: "Verified Buyer" },
              { text: "I've tried everything, but this hydration cream is the only thing that works for my sensitive skin. Highly recommend!", author: "Jessica T.", role: "Verified Buyer" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-nude rounded-2xl p-8 flex flex-col justify-between border border-rose/10">
                <div>
                  <div className="flex text-rose mb-6">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" className="mr-1" />)}
                  </div>
                  <p className="text-charcoal/80 font-light leading-relaxed italic mb-8">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">{testimonial.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-charcoal/50 mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-rose/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Join The Glow Club</h2>
          <p className="text-charcoal/70 font-light mb-10 max-w-lg mx-auto">Subscribe to our newsletter for exclusive offers, early access to new launches, and expert skincare tips.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 bg-white rounded-xl border border-rose/20 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose text-sm font-light"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-charcoal text-white text-xs font-medium uppercase tracking-[0.1em] rounded-xl hover:bg-charcoal/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-rose/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <span className="text-2xl font-serif italic tracking-wide text-charcoal">Glow.</span>
          <div className="flex space-x-10 text-[10px] uppercase font-medium tracking-[0.2em] text-charcoal/50">
             <Link to="/products" className="hover:text-rose transition-colors">Shop</Link>
             <a href="#benefits" className="hover:text-rose transition-colors">About</a>
             <Link to="/cart" className="hover:text-rose transition-colors">Cart</Link>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50">© 2026 Glow Skincare</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
