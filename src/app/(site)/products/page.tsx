import prisma from "@/src/lib/db";
import ProductsPage from "@/src/components/ProductsPage";

export default async function Produtos({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1; 
  const take = 12;
  const skip = (page - 1) * take;

  const produtosDB = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take,
    skip,
  });

  const total = await prisma.product.count();
  const totalPages = Math.ceil(total / take);

  const produtos = produtosDB.map((p) => ({
    id: p.id,
    nome: p.title,
    preco: p.price,
    img_url: "/images/notebook.jpg",
  }));

  return (
    <ProductsPage
      produtos={produtos}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
