import prisma from "@/src/lib/db";
import ProductsIndividual from "@/src/components/ProductsIndividual";

interface ProductsPageProps {
  params: {
    id: string;
  };
}
export default async function ProductsPage({ params }: ProductsPageProps) {
  const productDB = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });

  if (!productDB) {
    return <div className="p-6 text-red-600">Produto não encontrado.</div>;
  }

  const product = {
    id: productDB.id,
    name: productDB.title,              
    description: productDB.description,
    price: productDB.price,
    imageUrl: "/images/notebook.jpg",   
    createdAt: productDB.createdAt,
  };
  const related = await prisma.product.findMany({
    where: { NOT: { id: productDB.id } }, // ou outra condição
    take: 5,
  });

  const produtosFiltrados = related.map((p) => ({
    id: p.id,
    nome: p.title,
    preco: p.price,
    img_url: "/images/notebook.jpg",
  }));

  return (
    <ProductsIndividual
      product={product}
      produtosFiltrados={produtosFiltrados}
    />
  );
}
