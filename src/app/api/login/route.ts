import { NextResponse } from "next/server";
import prisma from "@/src/lib/db"; // seu client do prisma
import bcrypt from "bcrypt"; // npm i bcrypt
import jwt from "jsonwebtoken"; // npm i jsonwebtoken

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // procura usuário no banco
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 401 });
  }

  // compara senha (salva hash no banco)
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
  }

  // gera um token JWT simples
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  // opcional: seta cookie
  const res = NextResponse.json({ ok: true });
  res.cookies.set("token", token, { httpOnly: true, path: "/" });
  return res;
}
