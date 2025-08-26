"use client";
import { ShoppingCart } from "lucide-react"; 

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {   }
        <div className="text-2xl font-bold">ELETRONS</div>

        {   }
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-blue-600">HOME</a></li>
          <li><a href="/produtos" className="hover:text-blue-600">PRODUTOS</a></li>
          <li><a href="/contato" className="hover:text-blue-600">CONTATO</a></li>
          <li><a href="/gerenciamento" className="hover:text-blue-600">GERENCIAMENTO</a></li>
          <li><a href="/login" className="hover:text-blue-600">LOGIN</a></li>
        </ul>

        {   }
        <button className="ml-6">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
        </button>
      </div>
    </nav>
  );
}
