import { useSession } from "next-auth/react";

export async function useClientSession() {
  const session = useSession();
  return session;
}
