import { auth } from "@/auth"; // Adjust the import path as necessary

// Custom method to get the session on the server side
export async function getServerSession() {
  const session = await auth();
  return session;
}
