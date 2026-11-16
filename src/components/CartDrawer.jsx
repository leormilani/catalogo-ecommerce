import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQty, onRemove }) {
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    const itemsText = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity)
            .toFixed(2)
            .replace('.', ',')}`
      )
      .join('%0A');

    const message = `Olá! Gostaria de finalizar o seguinte pedido na PrimeHome:%0A%0A${itemsText}%0A%0A*Total: R$ ${total
      .toFixed(2)
      .replace('.', ',')}*`;

    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
        {/* Cabeçalho */}
        <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg text-secondary">Seu Carrinho</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto" />
              <p className="text-zinc-500 font-medium">Seu carrinho está vazio.</p>
              <p className="text-xs text-zinc-400">
                Explore o catálogo e adicione produtos para simular um pedido.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-zinc-50 p-3.5 rounded-xl border border-zinc-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-secondary line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-primary font-bold text-sm mt-0.5">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 bg-white border border-zinc-300 rounded-lg px-2 py-1">
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        className="text-zinc-600 hover:text-primary"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="text-zinc-600 hover:text-primary"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-zinc-400 hover:text-red-600 transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé / Finalizar */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-zinc-200 bg-zinc-50 space-y-4">
            <div className="flex justify-between items-center text-base">
              <span className="text-zinc-600 font-medium">Total do Pedido:</span>
              <span className="text-2xl font-extrabold text-secondary">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Finalizar Pedido no WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}