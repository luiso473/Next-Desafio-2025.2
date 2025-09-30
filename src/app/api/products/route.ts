import { NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = await prisma.product.create({
      data: {
        title: body.title,
        price: body.price,
        description: body.description,
        imageUrl: body.imageUrl ?? null,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 });
  }
}

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
