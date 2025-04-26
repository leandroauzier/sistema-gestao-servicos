"use client";
import { ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function InnerAuthProvider({ children }: {children: ReactNode}) {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  );
}
export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider>
      <InnerAuthProvider>{children}</InnerAuthProvider>
    </SessionProvider>
  );
}