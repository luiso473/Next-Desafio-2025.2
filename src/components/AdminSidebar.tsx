"use client";

import { useState } from "react";
import { Home, LogOut, User, Menu, ChevronLeft } from "lucide-react";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`
        ${isOpen ? "w-56" : "w-16"}
        bg-blue-300 top-0 left-0 h-screen flex flex-col justify-between p-4
        transition-all duration-300
      `}
    >
      {/* Topo */}
      <div>
        {/* Botão de alternar */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-4 flex justify-end w-full"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" /> // seta para fechar
          ) : (
            <Menu className="w-5 h-5" /> // menu fechado
          )}
        </button>

        {/* Conteúdo só aparece se aberto */}
        {isOpen && (
          <>
            <div className="flex items-center gap-2 mb-6">
              <User className="w-8 h-8" />
              <span>Fulano de tal</span>
            </div>

            <nav className="flex flex-col gap-4">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/admin/dashboard" className="hover:underline">
                Gerenciamento de produtos
              </a>
              <a href="/" className="hover:underline">
                Logout
              </a>
            </nav>
          </>
        )}
      </div>
    </aside>
  );
}
