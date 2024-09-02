import { useClientSession } from "@/hooks/useClientSession";
import React from "react";

const Dashboard = () => {
  const session = useClientSession();
  return (
    <div>
      <h1>{JSON.stringify(session, null, 2)}</h1>
    </div>
  );
};

export default Dashboard;
