// lib/prisma.ts
import { PrismaClient } from  "@prisma/client";

// Definindo uma variável global para o Prisma Client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Se a instância do Prisma não existir, cria uma nova
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Log das consultas para depuração, útil em desenvolvimento
  });

// No ambiente de desenvolvimento, armazena a instância na variável global
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
