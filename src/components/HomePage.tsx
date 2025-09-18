"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage({
  produtos,
}: {
  produtos: {
    id: number;
    nome: string;
    preco: number;
    img_url: string;
  }[];
}) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-400 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Texto */}
          <div className="max-w-lg text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Os melhores produtos você encontra <br /> somente na{" "}
              <span className="text-yellow-300">Eletrons</span>
            </h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Ver Produtos
            </button>
          </div>

          {/* Carrossel */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              className="rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="/images/banner1.jpg"
                  alt="Promoção 1"
                  className="w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/banner2.jpg"
                  alt="Promoção 2"
                  className="w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/banner3.jpg"
                  alt="Promoção 3"
                  className="w-full rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <motion.section
        className="w-full max-w py-16 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p className="text-lg text-gray-600">
          Somos apaixonados por mitologia e dedicamos este espaço para contar
          histórias, curiosidades e lições que atravessaram gerações.
        </p>
      </motion.section>

      {/* Destaques */}
      <motion.section
        className="w-full max-w-6xl py-16 px-6 mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Título */}
        <h2 className="text-3xl font-bold mb-4">Destaques</h2>
      
        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {produtos.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={item.img_url}
                alt={item.nome}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.nome}</h3>
                <p className="text-gray-600">R$ {item.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
