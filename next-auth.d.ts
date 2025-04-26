// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nome: string;
      email: string;
    };
  }

  interface User {
    id: number; // isso é o que vem do Prisma no authorize()
    nome: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nome: string;
    email: string;
  }
}

/* Lembre-se:
user.id é number na hora do authorize(), porque vem do banco.

No token e na session, você pode usar string, por isso converte com .toString() no jwt():
 */