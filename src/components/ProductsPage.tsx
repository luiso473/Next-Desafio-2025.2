"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [produtos] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      nome: "Notebook",
      preco: 3500,
      img_url: "/images/notebook.jpg",
    }))
  );

  return (
    <section className="px-6 py-12">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-8">Produtos</h2>

      {/* Barra de pesquisa */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={produto.img_url}
              alt={produto.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{produto.nome}</h3>
              <p className="text-gray-600 mt-2">R$ {produto.preco},00</p>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-12 space-x-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="px-3 py-1 border rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
}
