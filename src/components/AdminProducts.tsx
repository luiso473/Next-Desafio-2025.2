import Image from "next/image";
import { Eye, Trash2, Pencil } from "lucide-react";
import Link from "next/link";
import ProductModalTrigger from "./ProductAddModal";
import { ProductViewModal } from "./ProductViewModal";
import { ProductEditModal } from "./ProductEditModal";
import { ProductDeleteModal } from "./ProductDeleteModal";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl?: string; 
  createdAt: Date;
}


export default function AdminProducts({
  products,
  currentPage,
  totalPages,
}: {
  products: Product[];
  currentPage: number;
  totalPages: number;
}) {
  return (
    <main className="flex-1 p-8">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">GERENCIAMENTO DE PRODUTOS</h1>
        <ProductModalTrigger/>
      </div>

      {/* Tabela */}
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Preço</th>
            <th className="border px-4 py-2">Descrição</th>
            <th className="border px-4 py-2">Imagem</th>
            <th className="border px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border px-4 py-2">{p.title}</td>
              <td className="border px-4 py-2">
                R$ {Number(p.price).toFixed(2)}
              </td>
              <td className="border px-4 py-2 truncate max-w-xs">
                {p.description}
              </td>
              <td className="border px-4 py-2">
                <Image
                  src={p.imageUrl || "/images/notebook.jpg"}
                  alt={p.title}
                  width={60}
                  height={60}
                  className="object-cover rounded"
                />
              </td>
              <td className="border px-4 py-2 flex gap-2">
  <ProductViewModal product={p} />
  <ProductEditModal product={p} />
  <ProductDeleteModal productId={p.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            {/* Paginação */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`/admin/dashboard?page=${page}`}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-yellow-400 font-bold"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
    </main>
  );
}
