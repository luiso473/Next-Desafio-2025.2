import { Facebook, Twitter, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {   }
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold mt-2">ELETRONS</h2>
          <p className="text-sm">ONLINE ELECTRONICS</p>
        </div>

        {   }
        <div className="mb-6 text-center">
          <p className="font-semibold mb-2">Redes sociais:</p>
          <div className="flex space-x-6">
            <a href="#"><Facebook className="w-6 h-6 hover:text-gray-200" /></a>
            <a href="#"><Twitter className="w-6 h-6 hover:text-gray-200" /></a>
            <a href="#"><FaWhatsapp className="w-6 h-6 hover:text-gray-200" /></a>
            <a href="#"><Instagram className="w-6 h-6 hover:text-gray-200" /></a>
          </div>
        </div>

        {   }
        <p className="text-xs text-center">
          © Eletrons. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

