import { createContext, useContext } from "react";
import { Session } from "next-auth";

interface AuthContextType {
  session: Session | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthContext };
