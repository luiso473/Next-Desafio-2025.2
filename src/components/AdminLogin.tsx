"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Erro no login");
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setError("Erro no login");
    }
  }

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col text-sm font-medium">
              E-mail:
              <input
                type="email"
                className="border rounded-md p-2 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="flex flex-col text-sm font-medium">
              Senha:
              <input
                type="password"
                className="border rounded-md p-2 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="self-end bg-yellow-400 text-black font-medium px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
