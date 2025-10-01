"use client";

import { useCart } from "@/src/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [done, setDone] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar para o backend e salvar no banco
    setDone(true);
    clearCart();
  };

  if (done) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">✅ Pedido Confirmado!</h1>
        <p>Obrigado por comprar conosco.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Resumo do pedido */}
      <div>
        <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.title} (x{item.quantity})
              </span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold mt-4">Total: R$ {total.toFixed(2)}</p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleCheckout} className="space-y-4 border p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Dados do Cliente</h2>
        <input placeholder="Nome completo" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" required />
        <input placeholder="Endereço" className="w-full p-2 border rounded" required />
        <input placeholder="Cidade" className="w-full p-2 border rounded" required />
        <input placeholder="Estado" className="w-full p-2 border rounded" required />
        <input placeholder="CEP" className="w-full p-2 border rounded" required />

        <h3 className="font-bold">Forma de pagamento</h3>
        <select className="w-full p-2 border rounded" required>
          <option>Cartão de Crédito</option>
          <option>Pix</option>
          <option>Boleto</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded w-full"
        >
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
}
