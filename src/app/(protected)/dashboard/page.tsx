import { signOut } from "@/auth";
import { getServerSession } from "@/lib/next-auth";
import { ROOT } from "@/lib/routes";
import React from "react";

const Dashboard = async () => {
  const session = await getServerSession();

  return (
    <div>
      <h1>{JSON.stringify(session, null, 2)}</h1>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirect: true,
            redirectTo: ROOT,
          });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Dashboard;
