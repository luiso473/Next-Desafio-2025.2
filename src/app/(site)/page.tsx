// src/app/page.tsx
import prisma from "@/src/lib/db";
import HomePage from "@/src/components/HomePage";

export default async function Home() {
  const produtosDB = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 9, 
  });

  const produtos = produtosDB.map((p) => ({
    id: p.id,
    nome: p.title,
    preco: p.price,
    img_url: "/images/notebook.jpg", 
  }));

  return <HomePage produtos={produtos} />;
}
