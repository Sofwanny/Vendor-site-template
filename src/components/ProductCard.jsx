import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);
  const isLowStock = product.stock > 0 && product.stock <= 3;
  const isSoldOut = product.stock === 0;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
      {/* Large Image with subtle scale hover */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Link to="/product-details">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </Link>
        
        {/* Indicators */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isSoldOut ? (
            <span className="bg-red-500 text-white px-3 py-1 text-[9px] uppercase font-bold tracking-widest shadow-lg">
              Sold Out
            </span>
          ) : (
            <span className="bg-green-500 text-white px-3 py-1 text-[9px] uppercase font-bold tracking-widest shadow-lg">
              In Stock
            </span>
          )}
          
          {isLowStock && (
            <span className="bg-gold text-white px-3 py-1 text-[9px] uppercase font-bold tracking-widest shadow-lg animate-pulse">
              Only {product.stock} Left!
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 text-left flex flex-col flex-grow">
        <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold mb-2">{product.category}</p>
        <h3 className="text-lg text-offblack font-light mb-2 group-hover:text-gold transition-colors">
          <Link to="/product-details">{product.name}</Link>
        </h3>
        <p className="text-xl text-offblack font-bold mb-6">₦{product.price.toLocaleString()}</p>
        
        <button 
          onClick={handleAddToCart}
          disabled={isSoldOut || isAdded}
          className={`mt-auto w-full py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 
            ${isSoldOut 
              ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
              : isAdded 
                ? 'bg-green-500 text-white'
                : 'bg-offblack text-white hover:bg-gold shadow-xl transform active:scale-95'}`}
        >
          {isAdded ? (
            <span className="flex items-center gap-2">
               ✓ Added to Collection
            </span>
          ) : (
            <>
              <ShoppingBag size={14} />
              {isSoldOut ? 'Unavailable' : 'Add to Collection'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
