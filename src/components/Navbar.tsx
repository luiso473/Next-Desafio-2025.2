"use client";
import { ShoppingCart } from "lucide-react"; 
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  console.log("Itens no carrinho:", cart);
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {   }
        <div className="text-2xl font-bold">ELETRONS</div>

        {   }
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="/" className="ho ver:text-blue-600">HOME</a></li>
          <li><a href="/products" className="hover:text-blue-600">PRODUTOS</a></li>
          <li><a href="/contato" className="hover:text-blue-600">CONTATO</a></li>
          <li><a href="/login/loginPage" className="hover:text-blue-600">LOGIN</a></li>
        </ul>

        {   }
<Link href="/cart" className="hidden md:block">
  <span className="ml-6 cursor-pointer">
    <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
  </span>
</Link>
      </div>
    </nav>
  );
}
