// src/app/page.tsx
import prisma from "@/src/lib/db";
import HomePage from "@/src/components/HomePage";
import { getIdentities } from "@/src/lib/api/get-mvv";

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
  try {
    const data = await getIdentities();
    return (
      <>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <HomePage produtos={produtos} />
      </>
    );
  } catch (error) {
    console.error("Error fetching identities:", error);
    return <p>Failed to load identities.</p>;
  }
}
