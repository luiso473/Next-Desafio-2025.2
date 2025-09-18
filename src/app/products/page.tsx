import prisma from "@/src/lib/db";
import ProductsPage from "@/src/components/ProductsPage";

export default async function Produtos() {
  const produtosDB = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 12,
  });

  const produtos = produtosDB.map((p) => ({
    id: p.id,
    nome: p.title,
    preco: p.price,
    img_url: "/images/notebook.jpg", 
  }));

  return <ProductsPage produtos={produtos} />;
}
