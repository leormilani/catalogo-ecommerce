import { ShoppingBag, Search, Store } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, searchTerm, setSearchTerm }) {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-zinc-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <Store className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-xl text-secondary tracking-tight">
              Prime<span className="text-primary">Home</span>
            </span>
          </a>

          {/* Barra de Busca Desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar produtos, eletros ou utensílios..."
              className="w-full pl-11 pr-4 py-2.5 bg-zinc-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all border border-transparent focus:border-primary"
            />
          </div>

          {/* Botão do Carrinho */}
          <button
            onClick={onOpenCart}
            className="relative bg-secondary hover:bg-zinc-800 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2.5 transition-all shadow-sm"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="hidden sm:inline">Meu Carrinho</span>
            {cartCount > 0 && (
              <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Barra de Busca Mobile */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="O que você procura hoje?"
              className="w-full pl-10 pr-4 py-2 bg-zinc-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
}