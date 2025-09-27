"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function ProductsPage({
  produtos,
  totalPages,
  currentPage,
}: {
  produtos: {
    id: number;
    nome: string;
    preco: number;
    img_url: string;
  }[];
  totalPages: number;
  currentPage: number;

}) {
  const [search, setSearch] = useState("");

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="px-6 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Produtos</h2>

      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtosFiltrados.map((produto) => (
          <Link
            key={produto.id}
            href={`/products/${produto.id}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={produto.img_url}
              alt={produto.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{produto.nome}</h3>
              <p className="text-gray-600 mt-2">R$ {produto.preco}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <Link
            key={num}
            href={`/products?page=${num}`}
            className={`px-3 py-1 border rounded-lg transition ${
              currentPage === num
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-500 hover:text-white"
            }`}
          >
            {num}
          </Link>
        ))}
      </div>    </section>
  );
}
