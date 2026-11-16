import { Plus, Star, Check } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between group">
      <div>
        {/* Imagem + Tag */}
        <div className="relative h-60 overflow-hidden bg-zinc-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.tag && (
            <span className="absolute top-3 left-3 bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.tag}
            </span>
          )}
        </div>

        {/* Informações */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
            <span className="font-semibold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <span className="flex items-center gap-1 font-bold text-zinc-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {product.rating}
            </span>
          </div>

          <h3 className="font-bold text-lg text-secondary leading-snug mb-2">
            {product.name}
          </h3>
          <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Preço + Ação */}
      <div className="px-5 pb-5 pt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
        <div>
          {product.oldPrice && (
            <span className="text-xs text-zinc-400 line-through block">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <span className="text-xl font-extrabold text-secondary">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <button
          onClick={handleAdd}
          className={`px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-1.5 transition-all ${
            added
              ? 'bg-emerald-600 text-white'
              : 'bg-primary hover:bg-orange-700 text-white shadow-sm'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" /> Adicionado
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Comprar
            </>
          )}
        </button>
      </div>
    </div>
  );
}