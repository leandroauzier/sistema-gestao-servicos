import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const senhaHash = await hash(body.senha, 10);

  const novo = await prisma.estabelecimento.create({
    data: {
      nome: body.nome,
      email: body.email,
      telefone: body.telefone,
      senhaHash,
    },
  });

  return NextResponse.json(novo);
}
