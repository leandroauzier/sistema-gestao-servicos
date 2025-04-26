"use client";

import WithAuth from "../hocs/withAuth";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { session } = useAuth();

  return (
    <WithAuth>
      <div>
        <h1>Olá, {session?.user?.nome}</h1>
      </div>
    </WithAuth>
  );
}
