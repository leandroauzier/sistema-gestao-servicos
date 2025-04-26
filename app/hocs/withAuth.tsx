// Higher Order Component (HOC)
import React, { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: React.FC<WithAuthProps> = ({ children }) => {
  const { session } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (session === undefined) {
      setLoading(true);
    } else {
      setLoading(false);

      if (!session) {
        router.push("/login");
      }
    }
  }, [session, router]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!session) {
    return <div>Redirecionando para o login...</div>;
  }

  return <>{children}</>;
};

export default WithAuth;
