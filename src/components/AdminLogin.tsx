//import { Link } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-gray-200 rounded-xl shadow-lg p-10 flex w-[700px]">
        
        {/* Coluna da esquerda: logo */}
        <div className="flex flex-col items-center justify-center w-1/2 border-r pr-6">
          <Image
            src="/pictures/logo-eletrons-preta.png"
            alt="Logo Eletrons"
            width={240}
            height={240}
            className="mb-4"
          />
        </div>

        {/* Coluna da direita: formulário */}
        <div className="flex flex-col justify-center w-1/2 pl-6">
          <form className="flex flex-col gap-4">
            <label className="flex flex-col text-sm font-medium">
              E-mail:
              <input
                type="email"
                className="border rounded-md p-2 mt-1"
              />
            </label>
            <label className="flex flex-col text-sm font-medium">
              Senha:
              <input
                type="password"
                className="border rounded-md p-2 mt-1"
              />
            </label>
            <button
              type="button"
              className="self-end bg-yellow-400 text-black font-medium px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              <Link href="/admin/dashboard">
              Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
