"use client";

import { useCart } from "@/src/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Seu carrinho está vazio </h1>
        <Link href="/products" className="text-blue-500 underline">
          Voltar aos produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Produto</th>
            <th>Preço</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="text-center border-b">
              <td className="p-2">{item.title}</td>
              <td>R$ {item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 text-center border rounded"
                />
              </td>
              <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-bold">Total: R$ {total.toFixed(2)}</h2>
        <Link
          href="/checkout"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}
