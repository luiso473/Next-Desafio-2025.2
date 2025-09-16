import  prisma  from "@/src/lib/db";
import ProductsPage from "@/src/components/ProductsPage";

export default async function Produtos() {
  // Busca os produtos do banco
  const produtos = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Passa os produtos para o componente client
  return <ProductsPage produtos={produtos} />;
}
