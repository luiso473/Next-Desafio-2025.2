import { NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, price, imageUrl } = body;

    const product = await prisma.product.create({
      data: {
        title,
        price,
        description,
        imageUrl,
      },
    });
    console.log("PRODUCT CREATED:", product);

    return NextResponse.json(product);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 });
  }
}

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
