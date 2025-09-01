"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section className="bg-blue-400 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Texto */}
        <div className="max-w-lg text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Os melhores produtos você encontra <br /> somente na <span className="text-yellow-300">Eletrons</span>
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
              <img src="/images/banner1.jpg" alt="Promoção 1" className="w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner2.jpg" alt="Promoção 2" className="w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/banner3.jpg" alt="Promoção 3" className="w-full rounded-lg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
