import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);
  const isLowStock = product.stock > 0 && product.stock <= 3;
  const isSoldOut = product.stock === 0;

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent any parent links from intercepting
    console.log("Adding to cart:", product.name);
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 border border-rose/10">
      {/* Large Image with subtle scale hover */}
      <div className="relative aspect-[4/5] overflow-hidden bg-nude">
        <Link to="/product-details">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        
        {/* Indicators */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isSoldOut ? (
            <span className="bg-stone-200 text-stone-600 px-3 py-1 text-[9px] uppercase font-medium tracking-widest rounded-full">
              Sold Out
            </span>
          ) : null}
          
          {isLowStock && (
            <span className="bg-blush text-charcoal px-3 py-1 text-[9px] uppercase font-medium tracking-widest rounded-full animate-pulse">
              Only {product.stock} Left
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 text-center flex flex-col flex-grow">
        <p className="text-[10px] uppercase font-medium tracking-[0.2em] text-rose mb-2">{product.category}</p>
        <h3 className="text-lg text-charcoal font-serif mb-2 group-hover:text-rose transition-colors">
          <Link to="/product-details">{product.name}</Link>
        </h3>
        <p className="text-lg text-charcoal font-medium mb-6">${(product.price / 1000).toFixed(2)}</p>
        
        <button 
          onClick={handleAddToCart}
          disabled={isSoldOut || isAdded}
          className={`mt-auto w-full py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2 
            ${isSoldOut 
              ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
              : isAdded 
                ? 'bg-rose text-charcoal'
                : 'bg-blush/80 text-charcoal hover:bg-blush shadow-sm hover:shadow-md transform active:scale-[0.98]'}`}
        >
          {isAdded ? (
            <span className="flex items-center gap-2">
               ✓ Added
            </span>
          ) : (
            <>
              <ShoppingBag size={14} strokeWidth={1.5} />
              {isSoldOut ? 'Unavailable' : 'Add to Bag'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
