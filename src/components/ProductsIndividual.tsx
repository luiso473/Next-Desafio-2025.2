"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProdutoFiltrado {
  id: number;
  nome: string;
  preco: number;
  img_url: string;
}


export default function ProductDetails({ product, produtosFiltrados }: { product: Product; produtosFiltrados: ProdutoFiltrado[]; }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem */}
        <div className="flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={400}
            className="rounded shadow"
          />
        </div>

        {/* Detalhes */}
        <div className="border rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold mb-6">
              R$ {product.price.toFixed(2)}
            </p>
          </div>

          {/* Botões lado a lado */}
          <div className="flex gap-4 justify-end">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded">
              Adicionar ao carrinho
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded">
              Comprar agora
            </button>
          </div>
        </div>
      </div>

      {/* Carrossel */}
<div className="w-full mt-8 relative overflow-visible">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    //autoplay={{ delay: 3000 }}
    loop
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    className="rounded-lg"
  >
    {produtosFiltrados.map((product) => (
      <SwiperSlide key={product.id}>
        <Link
          href={`/products/${product.id}`}
          className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 h-[340px]"
        >
          <div className="w-full h-48 relative">
            <img
              src={product.img_url}
              alt={product.nome}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {product.nome}
            </h3>
            <p className="text-green-600 font-bold mt-2 text-center">
              R$ {product.preco}
            </p>
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded transition">
              Comprar
            </button>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Ajustes para setas sem ocupar espaço */}
  <style jsx>{`
    .swiper-button-prev,
    .swiper-button-next {
      color: #1f2937; /* cor das setas */
      top: 50%;
      transform: translateY(-50%);
      width: 2.5rem;
      height: 2.5rem;
    }

    .swiper-button-prev {
      left: -2.5rem; /* joga para fora do carrossel */
    }

    .swiper-button-next {
      right: -2.5rem; /* joga para fora do carrossel */
    }

    .swiper-pagination {
      bottom: 0.5rem !important;
    }
  `}</style>
</div>
      </div>
  );
}
