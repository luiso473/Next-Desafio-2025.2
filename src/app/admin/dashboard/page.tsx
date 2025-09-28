import AdminProducts from "@/src/components/AdminProducts";
import prisma from "@/src/lib/db";
import { redirect } from "next/navigation";

const ITEMS_PER_PAGE = 5;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  if (currentPage < 1) redirect("/admin/dashboard?page=1");

  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      skip,
      take: ITEMS_PER_PAGE,
      orderBy: { createdAt: "desc" },
    }),
    prisma.product.count(),
  ]);

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <div className="flex">
      <AdminProducts
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
