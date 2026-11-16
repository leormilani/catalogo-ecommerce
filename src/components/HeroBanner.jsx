import { Truck, ShieldCheck, CreditCard } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-orange-950 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block bg-primary/20 border border-primary/40 text-orange-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Ofertas de Temporada • Até 30% OFF
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Praticidade e design moderno para transformar sua casa.
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg">
            Selecione seus itens favoritos no catálogo abaixo e finalize seu pedido diretamente com nossa equipe pelo WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-zinc-700/70 text-sm text-zinc-300">
          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-primary shrink-0" />
            <span>Envio rápido para todo o Brasil</span>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-primary shrink-0" />
            <span>Parcele em até 10x sem juros</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
            <span>Garantia oficial de 12 meses</span>
          </div>
        </div>
      </div>
    </section>
  );
}